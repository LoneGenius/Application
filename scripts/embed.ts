// scripts/embed.ts
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import dotenv from "dotenv";

// Load env vars (supports both .env and .env.local)
dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ Missing OPENAI_API_KEY in .env or .env.local");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const dataDir = path.join(process.cwd(), "Dataset"); // folder with CSV/XLSX files

  if (!fs.existsSync(dataDir)) {
    console.error("❌ Dataset folder not found:", dataDir);
    process.exit(1);
  }

  const files = fs.readdirSync(dataDir);
  const embeddings: any[] = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(dataDir, file);
    let chunks: string[] = [];

    console.log(`📂 Processing file: ${file}`);

    if (ext === ".csv") {
      const csvData = fs.readFileSync(fullPath, "utf8");
      const parsed = Papa.parse(csvData, { header: true }).data;
      chunks = parsed
        .map((row: any, i: number) => row && Object.keys(row).length > 0
          ? `Row ${i + 1}: ${JSON.stringify(row)}`
          : null
        )
        .filter(Boolean) as string[];
    }

    if (ext === ".xlsx") {
      const workbook = XLSX.readFile(fullPath);
      const sheetName = workbook.SheetNames[0];
      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      chunks = rows
        .map((row: any, i: number) => row && Object.keys(row).length > 0
          ? `Row ${i + 1}: ${JSON.stringify(row)}`
          : null
        )
        .filter(Boolean) as string[];
    }

    // Create embedding for each chunk
    for (const [i, chunk] of chunks.entries()) {
      try {
        const res = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: chunk,
        });

        embeddings.push({
          text: chunk,
          embedding: res.data[0].embedding,
          source: file,
        });

        if ((i + 1) % 10 === 0) {
          console.log(`   ✅ Processed ${i + 1} rows from ${file}`);
        }
      } catch (err) {
        console.error(`   ⚠️ Failed on row ${i + 1} of ${file}`, err);
      }
    }
  }

  fs.writeFileSync("embeddings.json", JSON.stringify(embeddings, null, 2));
  console.log(`\n✅ embeddings.json created with ${embeddings.length} vectors`);
}

main().catch(console.error);
