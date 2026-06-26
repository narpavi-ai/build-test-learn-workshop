import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev, calls to /api are proxied to the Express server (default :3001),
// so the front-end code can just fetch('/api/items') with no CORS fuss.
// Set API_PORT to move the API (and this proxy) off a busy 3001 in one go.
const apiPort = process.env.API_PORT || 3001;
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': `http://localhost:${apiPort}` },
  },
});
