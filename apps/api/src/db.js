// ---------------------------------------------------------------------------
// SQLite connection + schema.
// One file-based database, zero config. The .db file is created on first run
// and lives in apps/api/data/ (gitignored). Delete it to start fresh.
// ---------------------------------------------------------------------------
import Database from 'better-sqlite3';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const dataDir = join(here, '..', 'data');
mkdirSync(dataDir, { recursive: true });

export const db = new Database(join(dataDir, 'app.db'));
db.pragma('journal_mode = WAL');

// 👉 This is your data model. Rename the table and columns to fit your idea
//    (e.g. "recipes" with title / time / steps). The rest of the app follows.
db.exec(`
  CREATE TABLE IF NOT EXISTS items (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT    NOT NULL,
    blurb       TEXT    NOT NULL DEFAULT '',
    tags        TEXT    NOT NULL DEFAULT '',
    body        TEXT    NOT NULL DEFAULT '',
    created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
  );
`);

export function isEmpty() {
  return db.prepare('SELECT COUNT(*) AS n FROM items').get().n === 0;
}
