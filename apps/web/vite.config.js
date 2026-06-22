import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The web app talks to the API at /api. In dev, proxy /api to the Express
// server on :3001 so the front-end can use same-origin relative URLs.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Defaults to the API's default port; override with VITE_API_PROXY if needed.
      "/api": process.env.VITE_API_PROXY || "http://localhost:3001"
    }
  }
});
