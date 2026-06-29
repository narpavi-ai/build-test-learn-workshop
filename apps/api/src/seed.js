// ---------------------------------------------------------------------------
// Seed runner — wipes the items table and reloads seed-items.js.
// Run with:  npm run seed   (from the repo root)
// Also called automatically on first boot if the table is empty (see server.js).
// ---------------------------------------------------------------------------
import { db } from './db.js';
import { seedItems } from './data/seed-items.js';

export function seed({ reset = false } = {}) {
  if (reset) db.exec('DELETE FROM items;');
  const insert = db.prepare(
    'INSERT INTO items (title, blurb, tags, body) VALUES (@title, @blurb, @tags, @body)'
  );
  const insertMany = db.transaction((rows) => rows.forEach((r) => insert.run(r)));
  insertMany(seedItems);
  return seedItems.length;
}

// Allow running this file directly: `node src/seed.js`
if (import.meta.url === `file://${process.argv[1]}`) {
  const n = seed({ reset: true });
  console.log(`Seeded ${n} items.`);
}
