// ---------------------------------------------------------------------------
// The one resource. Rename "items" to fit your idea and the front-end follows.
// Three routes cover the whole magic-moment screen: list/search, read one, create.
// ---------------------------------------------------------------------------
import { Router } from 'express';
import { db } from './db.js';

export const items = Router();

// GET /api/items?q=eggs  → list, with optional text search over title/blurb/tags.
items.get('/', (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) {
    return res.json(db.prepare('SELECT * FROM items ORDER BY id DESC').all());
  }
  const like = `%${q}%`;
  const rows = db
    .prepare(
      `SELECT * FROM items
       WHERE title LIKE ? OR blurb LIKE ? OR tags LIKE ?
       ORDER BY id DESC`
    )
    .all(like, like, like);
  res.json(rows);
});

// GET /api/items/:id  → one full record for the detail view.
items.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM items WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

// POST /api/items  → create a record (proves real persistence, not fake data).
items.post('/', (req, res) => {
  const { title, blurb = '', tags = '', body = '' } = req.body || {};
  if (!title) return res.status(400).json({ error: 'title is required' });
  const info = db
    .prepare('INSERT INTO items (title, blurb, tags, body) VALUES (?, ?, ?, ?)')
    .run(title, blurb, tags, body);
  const row = db.prepare('SELECT * FROM items WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(row);
});

// 👉 REAL-DATA HOOK
// When you outgrow SQLite, this is the only place that changes. Swap the
// queries above for a call to a real API, an LLM (e.g. Anthropic's Claude),
// or a hosted database. The routes and the entire front-end stay the same.
