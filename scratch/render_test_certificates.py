import os
from PIL import Image, ImageDraw, ImageFont

img_path = 'public/images/certifcados-animikdemi/Diplomafinal.png'
username = "ERNESTO R MENDOZA M"
course_title = "El Foco de la Tormenta: Foco y Concentración en Tiempos de Crisis"
date_text = "21 de Junio, 2026"
duration_text = "1 hora"

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
    
    # Precise font sizes based on matching user mockup
    font_name = ImageFont.truetype(georgia_path, int(W * 0.028)) if georgia_path else ImageFont.load_default()
    font_title = ImageFont.truetype(arial_path, int(W * 0.020)) if arial_path else ImageFont.load_default()
    font_sub = ImageFont.truetype(arial_path, int(W * 0.016)) if arial_path else ImageFont.load_default()
    
    # 1. User Name (All caps, Georgia Bold, centered vertically between guidelines)
    name_x = W * align_x_factor
    name_y = H * 0.417
    # Georgia Bold
    name_w = draw.textlength(username, font=font_name)
    draw.text((name_x - name_w/2, name_y - int(W * 0.014)), username, font=font_name, fill="#000000")
    
    # 2. Course Title (Arial Bold, with quotes, centered at H * 0.635)
    title_x = W * align_x_factor
    title_y = H * 0.635
    title_max_w = W * 0.60
    line_h = int(H * 0.035)
    draw_wrapped_text_pil(draw, f'“{course_title}”', font_title, "#000000", title_x, title_y, title_max_w, line_h)
    
    # 3. Duration text (left aligned next to pre-printed label)
    dur_x = W * 0.225
    dur_y = H * 0.804
    # Make it bold to stand out like the mockup
    draw.text((dur_x, dur_y - int(W * 0.008)), duration_text, font=font_sub, fill="#000000")
    
    # 4. Date (Optional, centered at H * 0.77)
    date_x = W * align_x_factor
    date_y = H * 0.77
    date_w = draw.textlength(date_text, font=font_sub)
    draw.text((date_x - date_w/2, date_y - int(W * 0.008)), date_text, font=font_sub, fill="#444444")
    
    img.save(f"scratch/{output_name}")
    print(f"Generated scratch/{output_name}")

render_sample(0.42, "cert_alignment_mock_exact.png")
