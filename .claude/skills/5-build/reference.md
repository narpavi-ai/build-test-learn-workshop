# Stage 5 — Build · founder guidance

The SKILL.md has the beats. This is the map of the starter template and the
gotchas, so you change only the data and the words — never the architecture.

## Why "only the data and the words change"

The starter template is already a working full-stack round-trip: React asks an
Express API, which reads SQLite, and renders results → detail. The demo doesn't
need a new architecture; it needs *your* resource, *your* data, and *your* labels.
Renaming `items` → `recipes` and swapping the seed is 90% of the work. Resist
rewrites — they break the boot and burn the evening.

## File map (what each file does)

API (`apps/api/`):
- `src/db.js` — creates the SQLite table + columns. **Rename the table/columns here.**
- `src/data/seed-items.js` — the seed rows. **Replace with 5–6 believable records.**
- `src/seed.js` — runs the seed (`npm run seed`). Usually no edit.
- `src/items.js` — the `/api/items` routes + queries. **Rename routes/queries to match.**
- `server.js` — wires it together + `/api/health`. Rarely edited.

Web (`apps/web/src/`):
- `brand.js` — name/colour/copy (set in `/4b-scope-design`).
- `App.jsx` — the one screen (search → results → detail). **Update labels/fields.**
- `components/Card.jsx`, `components/Detail.jsx` — how a record renders. **Match fields.**
- `api.js` — fetch calls; update the path if you rename the route.

## The real-data hook

In `apps/api/src/items.js` (around the GET handler) there's a comment marking where
to swap the SQLite query for a real API or an LLM (e.g. Anthropic's Claude). For
the demo, leave it on seeded data — but that's the one place a founder upgrades to
real data after Demo Night. Point it out; don't wire it tonight.

## Run & verify

```bash
npm install        # first time only
npm run dev        # web :5173, api :3001
curl http://localhost:3001/api/health        # {"ok":true}
curl http://localhost:3001/api/items         # your seeded rows
npm run seed       # re-seed after editing seed-items.js
```

## Common errors

- **Port 3001 busy** → `PORT=<n> node apps/api/server.js` (and update `api.js` if you change it).
- **Old data after editing the seed** → re-run `npm run seed`; the DB file
  (`apps/api/data/app.db`) is created on first boot and is gitignored.
- **Renamed the table but queries still say `items`** → update `src/items.js` and
  `api.js` together; a mismatch shows as empty results or a 500.
- **App won't boot after an edit** → you changed too much at once; revert to the
  last booting state and make one change at a time.
