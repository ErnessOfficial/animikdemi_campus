import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

// En dev, elimina cualquier Service Worker previo del mismo origen
if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations?.().then((regs) => {
    regs.forEach((r) => r.unregister());
  }).catch(() => {});
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const origin = window.location.origin;
const basePath = (import.meta as any).env?.BASE_URL || '/';
// Compose full site base (handles GitHub Pages subpath like /animikdemi_campus/)
const siteBase = new URL(basePath, origin).toString().replace(/\/$/, '');

const kinDeDomain = (import.meta as any).env?.VITE_KINDE_DOMAIN || "https://animik.kinde.com";
const kinDeClientId = (import.meta as any).env?.VITE_KINDE_CLIENT_ID || "5f29e3191c244f62b1eba9c08a4e8969";

root.render(
  <React.StrictMode>
    <KindeProvider
      clientId={kinDeClientId}
      domain={kinDeDomain}
      logoutUri={siteBase}
      redirectUri={`${siteBase}/callback`}
      useInsecureForRefreshToken={import.meta.env.DEV}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);
