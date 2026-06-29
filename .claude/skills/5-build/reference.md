# Stage 5 — Build · founder guidance

The SKILL.md has the beats. This is the map of the starter template and the
gotchas, so you change only the data and the words — never the architecture.

## Why "only the data and the words change"

The starter template is already a working full-stack round-trip: React asks an
Express API, which reads SQLite, and renders results → detail. The demo doesn't
need a new architecture; it needs *your* resource, *your* data, and *your* labels.
Renaming `items` → `recipes` and swapping the seed is 90% of the work. Resist
rewrites — they break the boot and burn the evening.

## The UI is already done — shadcn/ui components are pre-installed

The template ships with [shadcn/ui](https://ui.shadcn.com) — a polished component
library built on Radix UI + Tailwind CSS. Every component in `src/components/ui/`
is already installed and ready to use:

| Component | Import path | Used for |
|---|---|---|
| `Button` | `@/components/ui/button` | Search, back, add, cancel |
| `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` | `@/components/ui/card` | Result cards + detail panel |
| `Input` | `@/components/ui/input` | Search input, form fields |
| `Badge` | `@/components/ui/badge` | Tag pills (use `variant="muted"`) |
| `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectValue` | `@/components/ui/select` | Sort dropdown |
| `Skeleton` | `@/components/ui/skeleton` | Loading placeholders |
| `Separator` | `@/components/ui/separator` | Divider in detail view |

Browse all icons at **lucide.dev** — `lucide-react` is pre-installed:
```jsx
import { ArrowLeft, Star, MapPin, Clock } from 'lucide-react';
<Clock size={16} className="text-muted-foreground" />
```

**Don't install new UI packages** — everything needed is already there. If you
want a feature (tabs, tooltip, dialog), check shadcn.com first; the pattern is
consistent with what's already in `src/components/ui/`.

## Theming — the brand primary colour drives everything

`brand.js` sets one hex colour (`colors.primary`). `main.jsx` converts it to HSL
and sets `--primary` and `--ring` CSS variables. Every shadcn component that uses
`bg-primary`, `text-primary`, `border-primary`, or `ring` picks it up automatically.
The founder only needs to change that one hex value.

## File map (what each file does)

API (`apps/api/`):
- `src/db.js` — SQLite table + columns. **Rename table/columns here.**
- `src/data/seed-items.js` — seed rows. **Replace with believable data; use the new column names.**
- `src/seed.js` — runs the seed (`npm run seed`). Usually no edit.
- `src/items.js` — GET/POST routes + queries. **Rename router var + SQL columns.**
- `server.js` — wires routes + `/api/health`. Update import if you renamed the router.

Web (`apps/web/src/`):
- `brand.js` — name/tagline/logo/primary colour (set in `/4b-scope-design`).
- `main.jsx` — hex→HSL conversion + CSS var application. No edit needed.
- `App.jsx` — the one screen (search → grid → detail). Update copy/labels.
- `api.js` — fetch wrappers. Update path if you renamed the API route.
- `components/Card.jsx` — renders `item.title`, `item.blurb`, `item.tags`. **Update field names.**
- `components/Detail.jsx` — renders all fields for one record. **Update + add extra fields.**
- `components/AddForm.jsx` — create form. **Update fields + onAdd() keys.**
- `components/ui/` — shadcn/ui primitives. **Do not edit these files.**
- `lib/utils.js` — the `cn()` Tailwind merge helper. **Do not edit.**

## Adapting the three components (the part people miss)

`Card.jsx`, `Detail.jsx`, and `AddForm.jsx` all hardcode the original field names
(`title`, `blurb`, `tags`, `body`). When you rename columns, update all three.

**Card.jsx** — three `item.*` references:
- `item.title` → `<CardTitle>` (the headline)
- `item.blurb` → `<CardDescription>` (the one-liner, line-clamped to 2)
- `item.tags` → `<Badge>` pills (comma-split string)

**Detail.jsx** — four `item.*` references plus an extension point:
- `item.title`, `item.blurb`, `item.tags` — same as Card
- `item.body` → `<CardContent>` paragraph
- Extra fields: add below `item.body` — the comment in the file shows the pattern:
  ```jsx
  {item.prep_time && <p className="mt-3 text-sm"><strong>Prep:</strong> {item.prep_time}</p>}
  ```

**AddForm.jsx** — four `useState` + four `<Input>` references:
- Rename the state vars and `placeholder` text
- Update the `onAdd({ … })` call to use the new field names
- If a field is computed/admin-only, omit it and set a default in `db.js` instead

## The real-data hook

In `apps/api/src/items.js` (around the GET handler) there's a comment marking where
to swap the SQLite query for a real API or an LLM (e.g. Anthropic's Claude). For
the demo, leave it on seeded data — but that's the one place a founder upgrades to
real data after Demo Night.

## Run & verify

```bash
npm run seed       # reload after editing seed-items.js
npm run dev        # web :5173, api :3001
curl http://localhost:3001/api/health   # {"ok":true}
curl http://localhost:3001/api/items    # your seeded rows
```

## Common errors

- **Port 3001 busy** → copy `.env.example` → `.env` and set `API_PORT=3002`.
- **Old data after editing the seed** → `npm run seed` (deletes + re-inserts).
- **Renamed table/columns but queries still say `items`/`blurb`** → update
  `src/items.js` SQL and `seed-items.js` keys together; mismatch shows as a 500.
- **App won't boot after an edit** → too many changes at once; revert to the last
  booting state and make one change at a time.
- **`@/` import not resolving** → the `@` alias points to `src/` (set in
  `vite.config.js`). Use `@/components/ui/button`, not a relative path.
