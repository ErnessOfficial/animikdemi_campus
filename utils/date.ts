export function format(d: Date): string {
  try {
    return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }).format(d);
  } catch {
    return d.toLocaleDateString();
  }
}

