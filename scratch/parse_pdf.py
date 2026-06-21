import re
from pypdf import PdfReader

reader = PdfReader("docs/examples/Frases_de_Bienvenida_Animikro.pdf")
full_text = ""
for page in reader.pages:
    full_text += page.extract_text() + "\n"

# Split on number followed by dot and space, e.g. "1. " or "250. "
# We use a pattern that looks for a digit sequence followed by dot and one or more spaces
parts = re.split(r'\b\d+\.\s+', full_text)

phrases = []
for p in parts:
    p_clean = p.strip()
    if p_clean:
        # Normalize double/multiple spaces and line breaks into a single space
        p_clean = re.sub(r'\s+', ' ', p_clean)
        phrases.append(p_clean)

print(f"Parsed {len(phrases)} phrases.")
print("\nFirst 10 phrases:")
for i in range(min(10, len(phrases))):
    print(f"{i+1}: {phrases[i]}")

print("\nLast 3 phrases:")
for i in range(max(0, len(phrases)-3), len(phrases)):
    print(f"{i+1}: {phrases[i]}")
