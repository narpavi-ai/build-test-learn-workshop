---
name: 4-build
description: Route B of the Build It, Show It workshop — wires the founder's one screen into the React + Express + SQLite starter template (renames the resource, swaps the seed, adjusts the UI), then saves a branded HTML artifact. Use after /3b-scope-design or when the user types /4-build.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Bash(npm *), Bash(curl *), Bash(mkdir *), Bash(cp *)
---

# Stage 4 — Build (into the starter template)

Goal: make the starter template *be* the founder's app — a real round-trip for
their one screen. Read `.claude/skills/shared/HARNESS.md` first.

## Beat 0 — Load context

Read `workshop/03b-scope-design.html` and `workshop/02-spec.html`. The brand was
already applied to `apps/web/src/brand.js` by `/3b-scope-design` — verify it's set.

## Beat 1 — Confirm the build (short)

1. Confirm the resource name (e.g. `items` → `recipes`, `listings`, `prompts`).
2. Confirm the fields each record needs (title + a few — keep it to what the
   screen shows).

## Beat 2 — Do the work

Work the starter template, one file at a time, keeping it runnable:

1. **Data model** — `apps/api/src/db.js`: rename the table and columns to match.
2. **Seed** — `apps/api/src/data/seed-items.js`: replace with **5–6 believable
   rows** from the founder's domain (real-sounding titles/tags, full body text).
3. **API** — `apps/api/src/items.js`: rename the route/queries to match the model.
4. **Front-end** — `apps/web/src/App.jsx` + components: update labels/fields the
   screen renders. Keep the input → results → detail shape.
5. **Run it** — `npm install` if needed, then `npm run dev`. Hit
   `curl http://localhost:3001/api/health` and the list endpoint to confirm the
   round-trip works. If port 3001 is taken, start the API with `PORT=<n>`.

Make small changes and keep the app booting after each. Don't rewrite the
architecture — only the data and the words change.

## Beat 3 — Save & hand off

Save to `workshop/04-build.html` (icon 🔧, stage 4, label "Build"): the build
decisions (resource name, fields) in Inputs; what changed in each file + the
working endpoints in Outputs.

Then tell the founder it runs at http://localhost:5173. Next: **`/5-test-iterate`**
to walk the demo path, seed believable data, and capture what you learned.
