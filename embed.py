import os
import json
import pandas as pd
from openai import OpenAI

# ✅ Load your API key from environment (set this later in GitHub Secrets)
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

DATASET_DIR = "Dataset"
OUTPUT_FILE = "embeddings.json"

def read_files():
    texts = []
    for filename in os.listdir(DATASET_DIR):
        file_path = os.path.join(DATASET_DIR, filename)

        if filename.endswith(".csv"):
            df = pd.read_csv(file_path)
            text = df.to_string(index=False)
            texts.append({"filename": filename, "content": text})

        elif filename.endswith(".xlsx"):
            df = pd.read_excel(file_path)
            text = df.to_string(index=False)
            texts.append({"filename": filename, "content": text})

    return texts

def generate_embeddings(texts):
    results = []
    for item in texts:
        content = item["content"]

        # Call OpenAI embedding model
        response = client.embeddings.create(
            input=content,
            model="text-embedding-3-small"
        )

        embedding = response.data[0].embedding
        results.append({
            "filename": item["filename"],
            "embedding": embedding
        })

    return results

def main():
    texts = read_files()
    embeddings = generate_embeddings(texts)

    # Save embeddings to JSON
    with open(OUTPUT_FILE, "w") as f:
        json.dump(embeddings, f)

    print(f"✅ Embeddings saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
