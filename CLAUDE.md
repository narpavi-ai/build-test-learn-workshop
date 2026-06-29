# CLAUDE.md

Workshop materials for **"Build It, Show It — Rapid Prototyping with AI"**
(Edmonton Unlimited · Student Founders Launch). Audience: ~23 early-stage student
founders prepping for Demo Night. Goal: a repeatable process to turn an idea into
a clickable demo.

## Three things live here

1. **`deck.html`** — self-contained slide deck (Edmonton Unlimited brand). Open in
   a browser; arrow keys navigate. Slides are JS template strings in one `<script>`.
2. **`.claude/skills/`** — the **harness**: seven `/` commands that walk a founder
   from idea to demo (see flow below).
3. **Starter template** (`apps/`, root `package.json`) — a brandable
   React+Vite + Express + SQLite monorepo founders build their idea into.

## The harness flow

```
/1-problem → /2-spec → /3-opportunity → ┬─ /4a-lovable                  (no-code route)
                                         └─ /4b-scope-design → /5-build ⇄ /6-test-iterate
```

Opportunity runs **after** spec on purpose: once the one-screen spec exists, the
market read (competitors, demand, TAM/SAM/SOM, the wedge) sizes the *actual*
product and feeds the build + the Demo Night pitch. The path forks at stage 4.

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

- `apps/web` — React+Vite, one screen (search → results grid → detail).
  **Brand lives in `apps/web/src/brand.js`** (name, tagline, logo, colours) — the
  one file `/4b-scope-design` edits.
- `apps/api` — Express + better-sqlite3. `/api/items` CRUD over a local SQLite DB
  that auto-seeds on first run. Swap point for real data: the **real-data hook**
  comment in `apps/api/src/items.js`.

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
  rule — an unanchored `build/` previously hid `.claude/skills/build/`, which is
  why the build skill is named `5-build` (not `build`).
- Commit style ends with the `Co-Authored-By` trailer. Work happens on feature
  branches, not `main`.
