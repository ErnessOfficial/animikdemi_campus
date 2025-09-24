export const assetPath = (relative: string) => {
  const base = (import.meta as any).env?.BASE_URL || (import.meta as any).env?.VITE_BASE || '/';
  const clean = relative.replace(/^\/+/, '');
  return `${base}${clean}`;
};

