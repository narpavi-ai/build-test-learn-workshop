# Stage 3 — Build · founder guidance

The SKILL.md has the beats. This is the map of the starter template, how to go
beyond it, the design-pass checklist, and the docs template.

## Why the template is a starting point, not a cage

The starter template is already a working full-stack round-trip: React asks an
Express API, which reads SQLite, and renders results. Renaming `items` →
`recipes` and swapping the seed gets you most of the way there fast — so start
there. But if the blueprint's magic moment needs a second screen, a chart, a
modal, or a data shape the three starting shapes don't fit, build it. The
goal is a product that looks and feels like *this founder's* idea, not evidence
that the template wasn't touched.

## Plan before you prompt (2026 practice)

Before editing files, write the build order as a short list, sequenced by the
demo script's click path (not by which file is easiest). Build the UI and the
happy path first; add error handling and edge cases once the magic moment
works. Iterate in small, focused steps — one feature or one visual pass at a
time — rather than one sprawling prompt that tries to do everything, and check
the app still boots after each step.

## The starter template file map

API (`apps/api/`):
- `src/db.js` — SQLite table + columns. Rename table/columns to match the blueprint's data model; add new tables here if the idea needs more than one resource.
- `src/data/seed-items.js` — seed rows. Replace with believable data (or the founder's real dropped data) using the current column names.
- `src/seed.js` — runs the seed (`npm run seed`). Rarely needs edits.
- `src/items.js` — GET/POST routes + queries. Rename the router + SQL columns; add routes for new resources.
- `server.js` — wires routes + `/api/health`. Update imports for renamed/added routers.
- **The real-data hook** — a comment in `items.js` marks where to swap the SQLite query for a real API or an LLM call. Leave it on seeded data for the demo; it's the founder's post–Demo Night upgrade path.

Web (`apps/web/src/`), by starting shape:

| `brand.shape` | Starting files in… |
|---|---|
| `search` | `templates/search/` → `App.jsx`, `Card.jsx`, `Detail.jsx`, `AddForm.jsx` |
| `tool` | `templates/tool/` → `App.jsx`, `ToolForm.jsx`, `ToolOutput.jsx` |
| `dashboard` | `templates/dashboard/` → `App.jsx`, `StatCard.jsx`, `DataTable.jsx` |

- `brand.js` — name/tagline/logo/primary colour, set in `/2-blueprint`. Free to extend with more fields as the app grows.
- `main.jsx` — hex→HSL conversion + CSS var application. Edit if you add a dark-mode toggle or more brand tokens.
- `App.jsx` — the shape router. Restructure it if the app grows past the three shapes (e.g. adding real routing with multiple pages).
- `api.js` — fetch wrappers. Update paths for renamed/added API routes.
- `components/ui/` — shadcn/ui primitives, freely editable and extendable.
- `lib/utils.js` — the `cn()` Tailwind merge helper.

## shadcn/ui components already installed

`Button`, `Card`/`CardHeader`/`CardTitle`/`CardDescription`/`CardContent`,
`Input`, `Badge`, `Select` family, `Skeleton`, `Separator`, `Label`, `Textarea`,
`Tabs`, `Dialog`, `Tooltip`, `Table` family — all in `src/components/ui/`,
imported from `@/components/ui/<name>`. Icons: `lucide-react` (browse at
lucide.dev). Need something else? `npx shadcn@latest add <component>` pulls in
any component from ui.shadcn.com in the same style — accordion, popover,
sheet, switch, avatar, progress, etc. New npm packages are fine when they earn
their place (a charting library for a dashboard, a date picker for a booking
flow) — just keep the app booting after you add one.

## Theming

`brand.js` sets one hex colour (`colors.primary`). `main.jsx` converts it to HSL
and sets `--primary`/`--ring` CSS variables; every shadcn component using
`bg-primary`/`text-primary`/`border-primary`/`ring` picks it up automatically.
`styles.css` also ships a `.dark { … }` token block (not wired to a toggle by
default) — add one with `npx shadcn@latest add switch` if the idea calls for it.

## The design pass (run this after the Musts work)

A working app that still looks like an unstyled template isn't done. Work
through this checklist, referencing whatever the founder named in Beat 1:

- **Typography hierarchy** — one clear display size for the hero/header, a
  distinct h2/body/muted scale beneath it. Don't let everything be the same size.
- **Spacing rhythm** — consistent gaps (Tailwind's scale, not one-off pixel values).
- **Colour restraint** — primary colour for actions and key accents only;
  neutrals (`background`/`muted`/`border`) everywhere else. A page that's all
  primary-colour looks worse than one that uses it sparingly.
- **A real hero/header** — states the product's value in one line, not just a
  logo and a search box.
- **Designed empty/loading/error states** — never a blank white box. Loading =
  `Skeleton`; empty = a friendly message + next action; error = plain language,
  not a stack trace.
- **Believable data** — real-sounding names, realistic numbers, full body text.
- **Micro-polish** — hover states on interactive elements, lucide icons where
  they clarify meaning, consistent rounded corners (the template's `--radius`),
  soft shadows on cards, not harsh borders everywhere.
- **Mobile squint test** — narrow the browser to ~375px; nothing should
  overflow or become unreadable.

Iterate on this visually in small prompts ("make the hero bigger and add a
one-line subtitle", "tighten the card spacing") rather than one giant restyle
request — small steps are easier to course-correct.

## apps/README.md template

Keep this one file current, not a separate docs tree — a founder rebuilding
this in an evening doesn't need a docs site.

```markdown
# <App Name>

<One-line description from the blueprint's tagline.>

## Run it
npm install
npm run dev   # web :5173, api :3001 (or API_PORT from .env)

## Architecture
\`\`\`mermaid
flowchart LR
  A[React + Vite<br/>apps/web] -->|/api/*| B[Express<br/>apps/api]
  B --> C[(SQLite<br/>apps/api/data/app.db)]
\`\`\`

## Data model
| Table | Columns |
|---|---|
| <resource> | id, title→<field>, blurb→<field>, tags→<field>, body→<field>, created_at |

## Decisions log
- <date> — <what> — <why>
```

Update the mermaid diagram and the data-model table whenever they change —
that's what keeps this "documentation while building" instead of "documentation
as an afterthought."

## Run & verify

```bash
npm run seed       # reload after editing seed data
npm run dev        # web :5173, api :3001 (or API_PORT from .env)
curl http://localhost:3001/api/health   # {"ok":true}
curl http://localhost:3001/api/items    # your seeded rows (or renamed route)
```

## Common errors

- **Port 3001 busy** → copy `.env.example` → `.env` and set `API_PORT=3002`.
- **Old data after editing the seed** → `npm run seed` (deletes + re-inserts).
- **Renamed table/columns but queries still say `items`/`blurb`** → update
  `items.js` SQL and `seed-items.js` keys together; a mismatch shows as a 500.
- **App won't boot after an edit** → too many changes at once; revert to the
  last booting state and make one change at a time.
- **`@/` import not resolving** → the `@` alias points to `src/` (set in
  `vite.config.js`). Use `@/components/ui/button`, not a relative path.
