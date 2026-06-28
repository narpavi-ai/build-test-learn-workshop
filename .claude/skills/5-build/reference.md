# Stage 5 — Build · founder guidance

The SKILL.md has the beats. This is the map of the starter template and the
gotchas, so you change only the data and the words — never the architecture.

## Why "only the data and the words change"

The starter template is already a working full-stack round-trip: React asks an
Express API, which reads SQLite, and renders results → detail. The demo doesn't
need a new architecture; it needs *your* resource, *your* data, and *your* labels.
Renaming `items` → `recipes` and swapping the seed is 90% of the work. Resist
rewrites — they break the boot and burn the evening.

## The design system is already done — don't touch it

The template ships with a polished design system out of the box:
- **Inter** font (Google Fonts, loaded in `styles.css`)
- **Dark gradient hero** with decorative orbs and a live data badge
- **Colored card glows** — each card type gets its own gradient background
  tint and box-shadow color (set via CSS custom property `--hover-shadow`)
- **Gradient bar charts** with rounded caps
- **Pill type badges** with a translucent background
- **Smooth animations** — fade-in, bar chart width transitions

The only design work a founder needs to do is set the **three brand tokens** in
`brand.js` (`name`, `logo`, `colors.primary`). Everything else renders from there.

**The goal tonight is a working first slice, not pixel-perfect design.** The
magic moment should be clickable with real-feeling seed data. CSS is done.

## Icons with lucide-react

The template has `lucide-react` installed. Browse 1,000+ icons at **lucide.dev**.
Import and drop in wherever you need an icon:

```jsx
import { TrendingUp, Upload, Send, ArrowLeft } from 'lucide-react';

// In JSX:
<TrendingUp size={16} strokeWidth={2.5} />
<ArrowLeft size={14} style={{ verticalAlign: '-2px', marginRight: 4 }} />
```

Pick icons that match your domain — `ShoppingCart`, `BookOpen`, `Stethoscope`,
`MapPin`, `Cpu`. Keep `size` between 14–22px for inline use, 24–32px for
standalone icons next to headings. Use `strokeWidth={2.5}` for bold, `2` for
normal weight.

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
