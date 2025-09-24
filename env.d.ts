/// <reference types="vite/client" />

// Opcional: declara las variables de entorno si quieres tiparlas explícitamente
interface ImportMetaEnv {
  readonly VITE_KINDE_DOMAIN?: string;
  readonly VITE_KINDE_CLIENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

