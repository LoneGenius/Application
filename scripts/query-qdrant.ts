// scripts/query-qdrant.ts
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

dotenv.config();

const QDRANT_URL = process.env.QDRANT_URL || "http://localhost:6333";
const COLLECTION_NAME = process.env.QDRANT_COLLECTION || "application_collection";
const TOP_K = Number(process.env.RAG_TOP_K || 5);

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in .env");
    process.exit(1);
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const query = process.argv.slice(2).join(" ") || "Show me sample rows about Selangor.";
  console.log("Query:", query);

  // create embedding
  const emb = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  const qvec = emb.data[0].embedding;

  // call Qdrant REST search
  const resp = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}/points/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      vector: qvec,
      limit: TOP_K,
      with_payload: true
    }),
  });

  if (!resp.ok) {
    console.error("Qdrant search failed:", await resp.text());
    process.exit(1);
  }
  const j = await resp.json();
  const hits = j.result ?? j;

  console.log(`\nTop ${TOP_K} hits:`);
  (hits || []).forEach((h: any, i: number) => {
    console.log(`\n[${i + 1}] id=${h.id} score=${h.score}`);
    console.log("payload:", JSON.stringify(h.payload, null, 2));
  });
}

main().catch(e => {
  console.error("Query script failed:", e);
  process.exit(1);
});
