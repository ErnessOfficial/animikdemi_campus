from pypdf import PdfReader

reader = PdfReader("docs/examples/Frases_de_Bienvenida_Animikro.pdf")
print(f"Total pages: {len(reader.pages)}")

full_text = ""
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    full_text += text + "\n"

print("First 1500 characters of PDF text:")
print("-" * 40)
print(full_text[:1500])
print("-" * 40)
