from PIL import Image

img_path = 'public/images/certifcados-animikdemi/Diplomafinal.png'
img = Image.open(img_path)
W, H = img.size

# Convert to grayscale
gray = img.convert('L')

def analyze_y_range(y_min, y_max, label):
    dark_pixels_x = []
    for y in range(y_min, y_max):
        for x in range(0, W):
            pixel_val = gray.getpixel((x, y))
            # If the pixel is dark (text) and not part of borders (which are near x=0 or x=W)
            if pixel_val < 80 and 200 < x < W - 200:
                dark_pixels_x.append(x)
    if dark_pixels_x:
        min_x = min(dark_pixels_x)
        max_x = max(dark_pixels_x)
        center_x = (min_x + max_x) / 2
        print(f"{label}: min_x={min_x}, max_x={max_x}, calculated center_x={center_x} ({center_x/W:.4f} * W)")
    else:
        print(f"{label}: No dark pixels found")

# Analyze "CERTIFICADO" (roughly Y = 220 to 300)
analyze_y_range(200, 310, "CERTIFICADO")

# Analyze "Este certificado se otorga con orgullo a" (roughly Y = 320 to 380)
analyze_y_range(320, 380, "Este certificado se otorga con orgullo a")

# Analyze "por completar con éxito..." (roughly Y = 490 to 590)
analyze_y_range(490, 590, "por completar con éxito...")
