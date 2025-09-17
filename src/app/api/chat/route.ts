// src/app/api/chat/route.ts
import OpenAI from "openai";

export const maxDuration = 30;

const QDRANT_URL = process.env.QDRANT_URL || "http://localhost:6333";
const COLLECTION_NAME = process.env.QDRANT_COLLECTION || "application_collection";
const TOP_K = Number(process.env.RAG_TOP_K || 5);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function safeString(v: any) {
  try {
    if (typeof v === "string") return v;
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

export async function POST(req: Request) {
  try {
    // 1) read incoming conversation
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return new Response("No messages provided", { status: 400 });
    }

    // take last user message as query
    const userMessage = messages[messages.length - 1].content;

    // 2) embed user query (OpenAI embeddings)
    if (!process.env.OPENAI_API_KEY && !process.env.DEEPSEEK_API_KEY) {
      return new Response("Missing OPENAI_API_KEY or DEEPSEEK_API_KEY", { status: 500 });
    }

    const embedResp = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: userMessage,
    });
    const queryVector = embedResp.data[0].embedding;

    // 3) query Qdrant (REST)
    const searchResp = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}/points/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vector: queryVector,
        limit: TOP_K,
        with_payload: true,
      }),
    });

    if (!searchResp.ok) {
      const err = await searchResp.text();
      console.error("Qdrant search error:", err);
      return new Response("Qdrant search error: " + err, { status: 500 });
    }

    const searchJson = await searchResp.json();
    const hits = searchJson.result ?? searchJson; // handle variant

    // 4) prepare retrieved context pieces
    const contextPieces: string[] = (hits || []).map((h: any, idx: number) => {
      const payload = h.payload ?? {};
      const text = payload.text ?? safeString(payload);
      const source = payload.source ? ` (source: ${payload.source})` : "";
      const score = typeof h.score !== "undefined" ? ` score=${Number(h.score).toFixed(4)}` : "";
      return `Context ${idx + 1}${source}${score}:\n${text}`;
    });

    let context = contextPieces.join("\n\n");
    // limit to avoid giant prompts. adjust as needed
    if (context.length > 3500) context = context.slice(0, 3500) + "\n...[truncated]";

    // 5) prepare final messages - strongly instruct model to use only context
    const useDeepSeek = !!process.env.DEEPSEEK_API_KEY;
    const apiKey = useDeepSeek ? process.env.DEEPSEEK_API_KEY : process.env.OPENAI_API_KEY;
    if (!apiKey) return new Response("Missing API key", { status: 500 });

    const apiUrl = useDeepSeek
      ? "https://api.deepseek.com/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";

    const model = useDeepSeek ? "deepseek-chat" : "gpt-4o-mini";

    const finalMessages = [
      {
        role: "system",
        content:
          "You are a data assistant. Use ONLY the provided dataset context to answer questions. " +
          "If the requested information is not present in the context, say you don't know. Do not hallucinate.\n\n" +
          `Retrieved context (top ${TOP_K}):\n${context}\n\n`,
      },
      ...messages,
    ];

    // 6) call provider with streaming and forward body to client
    const providerResp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: finalMessages,
        stream: true,
      }),
    });

    if (!providerResp.ok) {
      const errText = await providerResp.text();
      console.error("Provider error:", errText);
      return new Response("Provider error: " + errText, { status: 500 });
    }

    if (!providerResp.body) {
      return new Response("Provider returned no stream", { status: 500 });
    }

    // Stream provider response through to the frontend unchanged (SSE)
    return new Response(providerResp.body, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (err: any) {
    console.error("Server error in /api/chat:", err);
    return new Response("Server error: " + (err?.message ?? String(err)), { status: 500 });
  }
}
