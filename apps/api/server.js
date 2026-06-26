// ---------------------------------------------------------------------------
// Starter API — Express + SQLite. Runs on http://localhost:3001.
// Start with `npm run dev` from the repo root (runs this and the web app).
// ---------------------------------------------------------------------------
import express from 'express';
import cors from 'cors';
import { isEmpty } from './src/db.js';
import { seed } from './src/seed.js';
import { items } from './src/items.js';

// First run convenience: if the database is empty, load the seed data so the
// app is never blank during a live demo.
if (isEmpty()) {
  const n = seed();
  console.log(`Empty database — seeded ${n} items.`);
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/items', items);

// Port: defaults to 3001. If that's taken (e.g. Docker has it), run the whole
// kit on another port with `API_PORT=3002 npm run dev` — the web proxy reads the
// same variable, so the front-end follows automatically.
const PORT = process.env.API_PORT || process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
