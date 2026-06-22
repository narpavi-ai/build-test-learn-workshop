// ---------------------------------------------------------------------------
// FridgeChef API server
// Node.js + Express. No API keys, no database — runs fully local on seed data.
// ---------------------------------------------------------------------------

import express from "express";
import cors from "cors";
import recipesRouter from "./src/recipes.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());            // allow the Vite dev server to call us
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api", recipesRouter);

app.listen(PORT, () => {
  console.log(`🍳  FridgeChef API listening on http://localhost:${PORT}`);
});
