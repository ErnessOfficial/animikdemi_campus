import os
from PIL import Image, ImageDraw

img_path = 'public/images/certifcados-animikdemi/Diplomafinal.png'
img = Image.open(img_path)
draw = ImageDraw.Draw(img)
W, H = img.size

# Draw a red line at W * 0.42 (old template offset)
draw.line([(int(W * 0.42), 0), (int(W * 0.42), H)], fill='red', width=5)

# Draw a blue line at W * 0.50 (perfect center)
draw.line([(int(W * 0.50), 0), (int(W * 0.50), H)], fill='blue', width=5)

# Save the image
os.makedirs('scratch', exist_ok=True)
img.save('scratch/center_test.png')
print(f"Saved center test. W={W}, H={H}")
