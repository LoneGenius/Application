import fs from "fs";

// Load embeddings.json
const data = JSON.parse(fs.readFileSync("embeddings.json", "utf8"));

// Function to calculate cosine similarity
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (magA * magB);
}

// Retrieve top N most relevant chunks
export function retrieveRelevantChunks(queryEmbedding: number[], topN = 3) {
  const scored = data.map((row: any) => ({
    ...row,
    score: cosineSimilarity(queryEmbedding, row.embedding),
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topN);
}
