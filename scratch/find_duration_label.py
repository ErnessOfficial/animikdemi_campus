from PIL import Image

img_path = 'public/images/certifcados-animikdemi/Diplomafinal.png'
img = Image.open(img_path)
W, H = img.size
gray = img.convert('L')

# Scan bottom-left quadrant: X from 100 to 450, Y from 780 to 860
dark_pixels = []
for y in range(780, 860):
    for x in range(100, 450):
        pixel_val = gray.getpixel((x, y))
        if pixel_val < 80: # dark text
            dark_pixels.append((x, y))

if dark_pixels:
    min_x = min(p[0] for p in dark_pixels)
    max_x = max(p[0] for p in dark_pixels)
    min_y = min(p[1] for p in dark_pixels)
    max_y = max(p[1] for p in dark_pixels)
    center_y = (min_y + max_y) / 2
    print(f"Duración Total: min_x={min_x}, max_x={max_x}, min_y={min_y}, max_y={max_y}, center_y={center_y}")
    print(f"X ratio={max_x/W:.4f}, Y ratio={center_y/H:.4f}")
else:
    print("Duración Total: text not found in scan window")
