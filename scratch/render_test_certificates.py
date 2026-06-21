import os
from PIL import Image, ImageDraw, ImageFont

img_path = 'public/images/certifcados-animikdemi/Diplomafinal.png'
username = "Alex Quiroz"
course_title = "El Espejismo Perfecto: Liberándote de la Nostalgia y la Comparación"
date_text = "21 de Junio, 2026"
duration_text = "2 horas"

georgia_path = "/System/Library/Fonts/Supplemental/Georgia.ttf"
if not os.path.exists(georgia_path):
    georgia_path = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
if not os.path.exists(georgia_path):
    georgia_path = None

arial_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
if not os.path.exists(arial_path):
    arial_path = None

def draw_wrapped_text_pil(draw, text, font, fill, center_x, start_y, max_width, line_height):
    words = text.split(' ')
    lines = []
    line = ''
    for word in words:
        test_line = line + word + ' '
        w = draw.textlength(test_line, font=font)
        if w > max_width and line:
            lines.append(line.strip())
            line = word + ' '
        else:
            line = test_line
    lines.append(line.strip())
    
    y = start_y
    for l in lines:
        w = draw.textlength(l, font=font)
        draw.text((center_x - w/2, y), l, font=font, fill=fill)
        y += line_height
    return y

def render_sample(align_x_factor, output_name):
    img = Image.open(img_path)
    draw = ImageDraw.Draw(img)
    W, H = img.size
    
    font_name = ImageFont.truetype(georgia_path, int(W * 0.04)) if georgia_path else ImageFont.load_default()
    font_title = ImageFont.truetype(arial_path, int(W * 0.024)) if arial_path else ImageFont.load_default()
    font_sub = ImageFont.truetype(arial_path, int(W * 0.016)) if arial_path else ImageFont.load_default()
    
    # 1. User Name
    name_x = W * align_x_factor
    name_y = H * 0.42
    name_w = draw.textlength(username, font=font_name)
    draw.text((name_x - name_w/2, name_y - int(W * 0.02)), username, font=font_name, fill="#2c2c2c")
    
    # 2. Course Title
    title_x = W * align_x_factor
    title_y = H * 0.60
    title_max_w = W * 0.55
    line_h = int(H * 0.04)
    draw_wrapped_text_pil(draw, f'"{course_title}"', font_title, "#1b1b1b", title_x, title_y, title_max_w, line_h)
    
    # 3. Duration text next to "Duración Total:"
    dur_x = W * 0.225
    dur_y = H * 0.804
    draw.text((dur_x, dur_y - int(W * 0.008)), duration_text, font=font_sub, fill="#101021")
    
    # 4. Date
    date_x = W * align_x_factor
    date_y = H * 0.78
    date_w = draw.textlength(date_text, font=font_sub)
    draw.text((date_x - date_w/2, date_y), date_text, font=font_sub, fill="#555")
    
    img.save(f"scratch/{output_name}")
    print(f"Generated scratch/{output_name}")

render_sample(0.42, "cert_alignment_refined.png")
