import { assetPath } from './paths';

export interface CertificateData {
  templatePath?: string;
  userName: string;
  courseTitle: string;
  courseHours?: number; // duration in hours
  dateText: string; // already formatted
}

// The new diploma template in public/images
const defaultTemplate = 'images/certifcados-animikdemi/Diplomafinal.png';

/**
 * Word-wrap helper that draws centered multi-line text on canvas.
 * Returns the Y coordinate after the last drawn line.
 */
function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  startY: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let y = startY;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), centerX, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), centerX, y);
  return y;
}

export async function generateCertificateImage({
  templatePath,
  userName,
  courseTitle,
  courseHours,
  dateText,
}: CertificateData): Promise<Blob> {
  const src = assetPath(templatePath || defaultTemplate);

  // Load the template image
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image();
    i.crossOrigin = 'anonymous';
    i.onload = () => resolve(i);
    i.onerror = reject;
    i.src = src;
  });

  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0);

  const W = canvas.width;
  const H = canvas.height;

  // ── Participant Name ──────────────────────────────────────
  // Centered vertically between the "Este certificado se otorga con orgullo a" text and the horizontal line.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${Math.floor(W * 0.028)}px Georgia, "Times New Roman", serif`;
  ctx.fillText(userName.toUpperCase(), W * 0.42, H * 0.417);

  // ── Course Title (with word-wrap) ─────────────────────────
  // Centered under the "por completar con éxito..." text.
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${Math.floor(W * 0.020)}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;
  const courseTitleMaxWidth = W * 0.60;
  const courseTitleY = H * 0.635;
  const courseLineHeight = Math.floor(H * 0.035);
  drawWrappedText(ctx, `“${courseTitle}”`, W * 0.42, courseTitleY, courseTitleMaxWidth, courseLineHeight);

  // ── Course Duration (hours) ───────────────────────────────
  // Rendered on the bottom-left next to the pre-printed "Duración Total:" label
  if (courseHours && courseHours > 0) {
    ctx.save();
    ctx.textAlign = 'left';
    ctx.font = `bold ${Math.floor(W * 0.016)}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;
    ctx.fillStyle = '#000000';
    const hoursLabel = courseHours === 1 ? '1 hora' : `${courseHours} horas`;
    ctx.fillText(hoursLabel, W * 0.225, H * 0.804);
    ctx.restore();
  }

  // ── Date ──────────────────────────────────────────────────
  // Centered at 77% height
  ctx.textAlign = 'center';
  ctx.font = `italic 500 ${Math.floor(W * 0.016)}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;
  ctx.fillStyle = '#444444';
  ctx.fillText(dateText, W * 0.42, H * 0.77);

  return await new Promise<Blob>((resolve) =>
    canvas.toBlob((b) => resolve(b!), 'image/png')
  );
}

export async function downloadCertificate(opts: CertificateData, filename: string) {
  const blob = await generateCertificateImage(opts);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
