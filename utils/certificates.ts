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
  // The new diploma has "QUE SE OTORGA A" at ~30% height.
  // The blank area for the name sits at roughly 38-42% of the height.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#2c2c2c';
  ctx.font = `bold ${Math.floor(W * 0.04)}px Georgia, "Times New Roman", serif`;
  ctx.fillText(userName, W * 0.42, H * 0.42);

  // ── Course Title (with word-wrap) ─────────────────────────
  // Below the "Por haber completado..." line, at roughly 58-68% of height.
  ctx.fillStyle = '#1b1b1b';
  ctx.font = `600 ${Math.floor(W * 0.024)}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;
  const courseTitleMaxWidth = W * 0.55;
  const courseTitleY = H * 0.60;
  const courseLineHeight = Math.floor(H * 0.04);
  const lastLineY = drawWrappedText(ctx, `"${courseTitle}"`, W * 0.42, courseTitleY, courseTitleMaxWidth, courseLineHeight);

  // ── Course Duration (hours) ───────────────────────────────
  // Rendered just below the course title
  if (courseHours && courseHours > 0) {
    ctx.font = `500 ${Math.floor(W * 0.018)}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;
    ctx.fillStyle = '#444';
    const hoursLabel = courseHours === 1 ? '1 hora' : `${courseHours} horas`;
    ctx.fillText(`Duración: ${hoursLabel}`, W * 0.42, lastLineY + courseLineHeight);
  }

  // ── Date ──────────────────────────────────────────────────
  // Placed in the lower-left area, near the signature zone
  ctx.textAlign = 'center';
  ctx.font = `italic 500 ${Math.floor(W * 0.016)}px "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`;
  ctx.fillStyle = '#555';
  ctx.fillText(dateText, W * 0.42, H * 0.78);

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
