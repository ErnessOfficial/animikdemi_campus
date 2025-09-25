import { assetPath } from './paths';

export interface CertificateData {
  templatePath?: string; // default to Animik template
  userName: string;
  courseTitle: string;
  dateText: string; // already formatted
}

// Nota: la carpeta en public está nombrada como 'certifcados-animikdemi' (sin la segunda 'i')
const defaultTemplate = 'images/certifcados-animikdemi/certificado-animik-template.png';

// Simple text wrap
function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(' ');
  let line = '';
  let yy = y;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, yy);
      line = words[n] + ' ';
      yy += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, yy);
  return yy;
}

export async function generateCertificateImage({ templatePath, userName, courseTitle, dateText }: CertificateData): Promise<Blob> {
  const src = assetPath(templatePath || defaultTemplate);
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

  // Styles (adjusted to typical certificate layout)
  ctx.textAlign = 'center';
  ctx.fillStyle = '#1b1b1b';

  // Name (centered)
  ctx.font = `bold ${Math.floor(canvas.width * 0.045)}px Georgia, serif`;
  const nameY = canvas.height * 0.54;
  ctx.fillText(userName, canvas.width / 2, nameY);

  // Course title (wrap)
  ctx.font = `600 ${Math.floor(canvas.width * 0.028)}px system-ui, -apple-system, Segoe UI, Roboto`;
  const courseY = nameY + canvas.height * 0.06;
  const maxWidth = canvas.width * 0.7;
  wrapText(ctx, courseTitle, canvas.width / 2, courseY, maxWidth, Math.floor(canvas.height * 0.04));

  // Date (bottom-right area)
  ctx.textAlign = 'right';
  ctx.font = `500 ${Math.floor(canvas.width * 0.022)}px system-ui, -apple-system, Segoe UI, Roboto`;
  ctx.fillStyle = '#333';
  const dateX = canvas.width * 0.88;
  const dateY = canvas.height * 0.86;
  ctx.fillText(dateText, dateX, dateY);

  return await new Promise<Blob>((resolve) => canvas.toBlob(b => resolve(b!), 'image/png'));
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
