import os
from PIL import Image, ImageDraw, ImageFont

img_path = 'public/images/certifcados-animikdemi/Diplomafinal.png'
username = "ERNESTO R MENDOZA M"
course_title = "Comunicación Asertiva y Empatía"
date_text = "21 de Junio, 2026"
course_hours = 4.5 # 4.5 hours (270 min)

georgia_path = "/System/Library/Fonts/Supplemental/Georgia.ttf"
if not os.path.exists(georgia_path):
    georgia_path = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
if not os.path.exists(georgia_path):
    georgia_path = None

arial_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
if not os.path.exists(arial_path):
    arial_path = None

def format_hours(hours):
    if hours == 1:
        return '1 hora'
    if hours % 1 == 0:
        return f'{int(hours)} horas'
    whole_hours = int(hours)
    decimal_part = hours - whole_hours
    if decimal_part == 0.5:
        if whole_hours == 0:
            return 'media hora'
        return f'{whole_hours} horas y media'
    minutes = round(decimal_part * 60)
    if whole_hours == 0:
        return f'{minutes} minutos'
    return f"{whole_hours} {'hora' if whole_hours == 1 else 'horas'} y {minutes} minutos"

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
    
    font_name = ImageFont.truetype(georgia_path, int(W * 0.028)) if georgia_path else ImageFont.load_default()
    font_title = ImageFont.truetype(arial_path, int(W * 0.020)) if arial_path else ImageFont.load_default()
    font_sub = ImageFont.truetype(arial_path, int(W * 0.016)) if arial_path else ImageFont.load_default()
    
    # 1. User Name (All caps, Georgia Bold, centered at align_x_factor)
    name_x = W * align_x_factor
    name_y = H * 0.417
    name_w = draw.textlength(username, font=font_name)
    draw.text((name_x - name_w/2, name_y - int(W * 0.014)), username, font=font_name, fill="#000000")
    
    # 2. Course Title (Arial Bold, centered at align_x_factor)
    title_x = W * align_x_factor
    title_y = H * 0.635
    title_max_w = W * 0.60
    line_h = int(H * 0.035)
    draw_wrapped_text_pil(draw, f'“{course_title}”', font_title, "#000000", title_x, title_y, title_max_w, line_h)
    
    # 3. Duration text (left aligned next to pre-printed label)
    dur_x = W * 0.225
    dur_y = H * 0.804
    hours_label = format_hours(course_hours)
    draw.text((dur_x, dur_y - int(W * 0.008)), hours_label, font=font_sub, fill="#000000")
    
    # 4. Date (Centered at align_x_factor)
    date_x = W * align_x_factor
    date_y = H * 0.77
    date_w = draw.textlength(date_text, font=font_sub)
    draw.text((date_x - date_w/2, date_y - int(W * 0.008)), date_text, font=font_sub, fill="#444444")
    
    img.save(f"scratch/{output_name}")
    print(f"Generated scratch/{output_name} with duration '{hours_label}'")

render_sample(0.50, "cert_alignment_centered.png")
