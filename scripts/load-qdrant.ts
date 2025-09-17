import fs from "fs";
import path from "path";
import "dotenv/config";

const QDRANT_URL = process.env.QDRANT_URL || "http://localhost:6333";
const COLLECTION_NAME = "application_collection";
const BATCH_SIZE = 100; // safe batch size

async function main() {
  // Load embeddings.json
  const filePath = path.join(process.cwd(), "public", "embeddings.json");
  if (!fs.existsSync(filePath)) {
    throw new Error(`embeddings.json not found at ${filePath}`);
  }
  const rawData = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(rawData);

  if (!items.length) {
    throw new Error("embeddings.json is empty");
  }

  console.log(`Loaded ${items.length} items, embedding dim = ${items[0].embedding.length}`);

  // 1. Delete collection if exists
  console.log(`Deleting collection '${COLLECTION_NAME}' if exists...`);
  await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}`, { method: "DELETE" });

  // 2. Create collection
  console.log(`Creating collection '${COLLECTION_NAME}'...`);
  const createRes = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      vectors: {
        size: items[0].embedding.length,
        distance: "Cosine"
      }
    }),
  });

  if (!createRes.ok) {
    throw new Error(`Failed to create collection: ${await createRes.text()}`);
  }

  // 3. Insert points in batches
  console.log(`Inserting ${items.length} points in batches of ${BATCH_SIZE}...`);

  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE).map((item: any, idx: number) => ({
      id: i + idx + 1, // unique ID
      vector: item.embedding,
      payload: {
        text: item.text,
        metadata: item.metadata || {}
      }
    }));

    const upsertRes = await fetch(`${QDRANT_URL}/collections/${COLLECTION_NAME}/points?wait=true`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ points: batch }),
    });

    if (!upsertRes.ok) {
      throw new Error(`Failed to insert batch ${i}-${i + batch.length - 1}: ${await upsertRes.text()}`);
    }

    console.log(`✅ Inserted batch ${i} - ${i + batch.length - 1}`);
  }

  console.log(`🎉 Successfully inserted ${items.length} points into '${COLLECTION_NAME}'`);
}

main().catch(err => {
  console.error("❌ Failed to load Qdrant:", err);
  process.exit(1);
});
