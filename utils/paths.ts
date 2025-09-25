export const assetPath = (relative: string) => {
  let base = (import.meta as any).env?.BASE_URL || (import.meta as any).env?.VITE_BASE || '/';
  // Runtime fallback for deployments under subpath (e.g., GitHub Pages)
  if (base === '/' && typeof window !== 'undefined') {
    const path = window.location?.pathname || '/';
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0) {
      base = `/${segments[0]}/`;
    }
  }
  const clean = relative.replace(/^\/+/, '');
  return `${base}${clean}`;
};
