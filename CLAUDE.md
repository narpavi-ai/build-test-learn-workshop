# CLAUDE.md

Workshop materials for **"Build It, Show It — Rapid Prototyping with AI"**
(Edmonton Unlimited · Student Founders Launch). Audience: ~23 early-stage student
founders prepping for Demo Night. Goal: a repeatable process to turn an idea into
a clickable demo.

## Two things live here

1. **`.claude/skills/`** — the **harness**: four `/` commands that walk a founder
   from idea to demo (see flow below).
2. **Starter template** (`apps/`, root `package.json`) — a brandable
   React+Vite + Express + SQLite monorepo founders build their idea into.

## The harness flow

```
/1-problem → /2-blueprint → /3-build ⇄ /4-test-iterate
```

**Blueprint** merges what used to be three separate stages (spec, market
opportunity, scope & design) into one mostly auto-generated stage: it asks at
most 4 questions, drafts the MVP, a MoSCoW backlog, the market read
(competitors, demand, TAM/SAM/SOM, the wedge), and the brand, then hands the
draft back for a single correction pass. That blueprint becomes the **single
source of truth** — `/3-build` builds against it and validates its work against
it; if a build session needs something the blueprint doesn't cover, the
blueprint gets updated, not skipped. `/3-build` is free to edit any component,
add shadcn components or packages, and build past the starter template's three
starting "shapes" — they're a running start, not a constraint. It also keeps
`apps/README.md` current (architecture diagram, data model, decisions log) as
it builds.

Each skill: **interview the founder → do the work → save inputs+outputs** as an
Edmonton-Unlimited-branded HTML file in `workshop/runs/<slug>/` (one folder per
idea, so runs never overwrite each other). `/1-problem` is the front door — it
takes the idea + discovery notes and creates the run folder. Skills are human-invoked
(`disable-model-invocation: true`). Shared rules + artifact conventions live in
`.claude/skills/shared/HARNESS.md`; brand CSS + HTML template are in `shared/` too.

A complete worked example for **Kora** (an AI budgeting app for newly-married
couples) lives in `workshop/examples/kora/`. Live founder runs land in
`workshop/runs/<slug>/`, which is gitignored — each founder's run stays local and
never overwrites the tracked example.

## Starter template

- `apps/web` — React+Vite+shadcn/Tailwind. Ships with three starting screen
  "shapes" (`src/templates/search|tool|dashboard/`), chosen at `/2-blueprint` and
  freely extendable or replaceable by `/3-build`. **Brand lives in
  `apps/web/src/brand.js`** (name, tagline, logo, colours, shape) — the file
  `/2-blueprint` sets up and `/3-build` can keep extending.
- `apps/api` — Express + better-sqlite3. `/api/items` CRUD over a local SQLite DB
  that auto-seeds on first run. Swap point for real data: the **real-data hook**
  comment in `apps/api/src/items.js`.
- `apps/README.md` — the founder's app README, written and kept current by
  `/3-build` (architecture diagram, data model, decisions log).

### Run it

Requires **Node 20.19+** (vite 8). Check with `node -v`.

```bash
npm install
npm run dev        # web on :5173, api on :3001
```

The SQLite file `apps/api/data/app.db` is created/seeded on first boot and is
gitignored. Re-seed with `npm run seed`.

**Config / ports.** Copy `.env.example` → `.env` to override defaults. The only
setting is `API_PORT` (default 3001) — both the Express API (via dotenv) and the
vite dev proxy (via `loadEnv`) read it, so changing that one line moves the whole
kit. **If 3001 is busy** (e.g. Docker has it), set `API_PORT=3002` in `.env` and
run `npm run dev` as usual. `.env` is gitignored; `.env.example` is the template.

## Conventions & gotchas

- Keep skills concise (best practices: under 500 lines, third-person `description`
  with what + when, one-level-deep file references). Detailed founder guidance
  lives in a `reference.md` beside each `SKILL.md` (progressive disclosure).
- Workshop artifacts are written to `workshop/runs/<slug>/`; the brand stylesheet
  and logo are copied to `workshop/assets/` on first artifact creation.
- `.gitignore` is the Python default plus Node rules. Note the anchored `/build/`
  rule — an unanchored `build/` would hide `.claude/skills/build/`, which is why
  the build skill keeps a number prefix (`3-build`), never bare `build`. The
  `/lib/` rule is anchored for the same reason — it used to be unanchored `lib/`
  and silently untracked `apps/web/src/lib/utils.js` (the shadcn `cn()` helper);
  if a stray `lib/` dir goes untracked again after adding a workspace, check
  `.gitignore` first.
- Commit style ends with the `Co-Authored-By` trailer. Work happens on feature
  branches, not `main`.
