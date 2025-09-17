// src/app/api/chat/route.ts

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("No messages provided", { status: 400 });
    }

    const isDeepSeek = !!process.env.DEEPSEEK_API_KEY;
    const apiKey = isDeepSeek
      ? process.env.DEEPSEEK_API_KEY
      : process.env.OPENAI_API_KEY;

    const apiUrl = isDeepSeek
      ? "https://api.deepseek.com/v1/chat/completions"
      : "https://api.openai.com/v1/chat/completions";

    const model = isDeepSeek ? "deepseek-chat" : "gpt-4o-mini";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("❌ API Error Response:", errText);
      return new Response("API error: " + errText, { status: 500 });
    }

    if (!response.body) {
      console.error("❌ API returned no body");
      return new Response("No response body", { status: 500 });
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err: any) {
    console.error("❌ API error in route.ts:", err);
    return new Response("Server error: " + err.message, { status: 500 });
  }
}