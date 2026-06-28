import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// In dev, calls to /api are proxied to the Express server (default :3001),
// so the front-end code can just fetch('/api/items') with no CORS fuss.
// Set API_PORT (in the repo-root .env) to move the API and this proxy off a
// busy 3001 in one go.
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, repoRoot, '');
  const apiPort = env.API_PORT || process.env.API_PORT || 3001;
  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: { '/api': `http://localhost:${apiPort}` },
    },
  };
});
