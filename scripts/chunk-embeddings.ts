import fs from "fs";
import path from "path";

const inputPath = path.join(__dirname, "../public/embeddings.json");
const outputDir = path.join(__dirname, "../public/embeddings_chunks");

// Adjust chunk size until each file is < 100MB (try 500–1000 items)
const chunkSize = 500;

if (!fs.existsSync(inputPath)) {
  console.error("❌ embeddings.json not found at:", inputPath);
  process.exit(1);
}

// Ensure output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const data = JSON.parse(fs.readFileSync(inputPath, "utf-8"));
console.log("📦 Total items in embeddings.json:", data.length);

let fileIndex = 0;
for (let i = 0; i < data.length; i += chunkSize) {
  const chunk = data.slice(i, i + chunkSize);
  const outPath = path.join(outputDir, `embeddings_part_${fileIndex}.json`);
  fs.writeFileSync(outPath, JSON.stringify(chunk, null, 2));
  console.log(`✅ Wrote ${outPath} (${chunk.length} items)`);
  fileIndex++;
}

console.log("🎉 Chunking completed!");
