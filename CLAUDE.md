# CLAUDE.md

Workshop materials for **"Build It, Show It — Rapid Prototyping with AI"**
(Edmonton Unlimited · Student Founders Launch). Audience: ~23 early-stage student
founders prepping for Demo Night. Goal: a repeatable process to turn an idea into
a clickable demo.

## Three things live here

1. **`deck.html`** — self-contained slide deck (Edmonton Unlimited brand). Open in
   a browser; arrow keys navigate. Slides are JS template strings in one `<script>`.
2. **`.claude/skills/`** — the **harness**: six `/` commands that walk a founder
   from idea to demo (see flow below).
3. **Starter template** (`apps/`, root `package.json`) — a brandable
   React+Vite + Express + SQLite monorepo founders build their idea into.

## The harness flow

```
/1-problem → /2-spec → ┬─ /3a-lovable                          (no-code route)
                       └─ /3b-scope-design → /4-build ⇄ /5-test-iterate  (Claude Code route)
```

Each skill: **interview the founder → do the work → save inputs+outputs** as an
Edmonton-Unlimited-branded HTML file in `workshop/`. Skills are human-invoked
(`disable-model-invocation: true`). Shared rules + artifact conventions live in
`.claude/skills/shared/HARNESS.md`; brand CSS + HTML template are in `shared/` too.

A complete worked example for **FridgeChef** lives in
`workshop/examples/fridgechef/`.

## Starter template

- `apps/web` — React+Vite, one screen (search → results grid → detail).
  **Brand lives in `apps/web/src/brand.js`** (name, tagline, logo, colours) — the
  one file `/3b-scope-design` edits.
- `apps/api` — Express + better-sqlite3. `/api/items` CRUD over a local SQLite DB
  that auto-seeds on first run. Swap point for real data: the **real-data hook**
  comment in `apps/api/src/items.js`.

### Run it

```bash
npm install
npm run dev        # web on :5173, api on :3001
```

The SQLite file `apps/api/data/app.db` is created/seeded on first boot and is
gitignored. Re-seed with `npm run seed`. If port 3001 is busy, start the API with
`PORT=<n> node apps/api/server.js`.

## Conventions & gotchas

- Keep skills concise (best practices: under 500 lines, third-person `description`
  with what + when, one-level-deep file references).
- Workshop artifacts are written to `workshop/`; the brand stylesheet is copied to
  `workshop/assets/eu-brand.css` on first artifact creation.
- `.gitignore` is the Python default plus Node rules. Note the anchored `/build/`
  rule — an unanchored `build/` previously hid `.claude/skills/build/`, which is
  why the build skill is named `4-build`.
- Commit style ends with the `Co-Authored-By` trailer. Work happens on feature
  branches, not `main`.
