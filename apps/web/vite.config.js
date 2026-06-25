import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev, calls to /api are proxied to the Express server on :3001,
// so the front-end code can just fetch('/api/items') with no CORS fuss.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3001' },
  },
});
