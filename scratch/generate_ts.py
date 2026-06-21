import re
import json
from pypdf import PdfReader

reader = PdfReader("docs/examples/Frases_de_Bienvenida_Animikro.pdf")
full_text = ""
for page in reader.pages:
    full_text += page.extract_text() + "\n"

# Split on digit followed by dot and space
parts = re.split(r'\b\d+\.\s+', full_text)

phrases = []
for p in parts:
    p_clean = p.strip()
    if p_clean:
        p_clean = re.sub(r'\s+', ' ', p_clean)
        phrases.append(p_clean)

# Write to constants/welcomePhrases.ts
ts_content = "/**\n * Lista de 250 frases reflexivas de bienvenida sobre bienestar emocional.\n * Extraídas de docs/examples/Frases_de_Bienvenida_Animikro.pdf\n */\n\n"
ts_content += "export const welcomePhrases: string[] = [\n"
for p in phrases:
    # Use json.dumps to escape quotes and make a valid JS/TS string
    ts_str = json.dumps(p, ensure_ascii=False)
    ts_content += f"  {ts_str},\n"
ts_content += "];\n"

with open("constants/welcomePhrases.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated constants/welcomePhrases.ts with {len(phrases)} phrases.")
