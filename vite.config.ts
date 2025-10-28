import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

function copyServiceWorkerPlugin() {
  return {
    name: 'copy-service-worker',
    closeBundle() {
      const src = path.resolve(__dirname, 'service-worker.js');
      const dest = path.resolve(__dirname, 'dist/service-worker.js');
      if (fs.existsSync(src)) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      plugins: [copyServiceWorkerPlugin()],
      server: {
        port: 5184,
        strictPort: true,
        open: true,
      },
      preview: {
        port: 5185,
        strictPort: true,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
