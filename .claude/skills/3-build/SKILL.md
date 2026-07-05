---
name: 3-build
description: Build stage of the Build It, Show It workshop — builds the founder's app on the starter template (React+Vite+shadcn + Express+SQLite), demo-path first, validating against the blueprint. Free to edit any component, add shadcn components or packages, and create new screens — the shape is a starting point, not a cage. Ends with a mandatory design-polish pass and keeps apps/README.md (with a mermaid architecture diagram) current. Use after /2-blueprint or when the user types /3-build.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(npm *), Bash(npx *), Bash(curl *), Bash(mkdir *), Bash(cp *)
---

# Stage 3 — Build (on the starter template, free to go beyond it)

Goal: build the founder's app for real — a working React+Express+SQLite
round-trip that matches the blueprint's Musts and looks like a real product, not
a template with new words in it. Read `.claude/skills/shared/HARNESS.md` first.
For the starter-template file map, adding shadcn components, the design-pass
checklist, and common errors, read `reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run and read `workshop/runs/<slug>/02-blueprint.html` — this
is the spec of record. Also read `apps/web/src/brand.js` and `apps/README.md`.
Pull out: the Must list, the 2-minute demo script, and the data model. If the
data model in the blueprint came from a real file the founder dropped in
`workshop/inputs/`, load that data into the seed instead of inventing rows.

## Beat 1 — Confirm the session (one short panel)

Ask with **AskUserQuestion**:
1. Build the blueprint's Musts as listed, or adjust the list first?
2. Any app or site whose **look** you want this to feel like? Name it and what to
   borrow (spacing, colour restraint, card style) — this anchors Beat 4's design pass.

## Beat 2 — Plan, then build demo-path-first

Write a short ordered plan *before* touching code — plan before you prompt.
Order the plan by the demo script's click path, not file-by-file convenience.
Work in small, focused steps; after each one, confirm the app still boots and
`curl` the endpoint you touched. The starter template's shape folders
(`apps/web/src/templates/<shape>/`) and the API's data files
(`apps/api/src/db.js`, `seed-items.js`, `items.js`) are your starting map —
`reference.md` has the wiring details.

## Beat 3 — Freedom + guardrails

**You may:** edit any component including `components/ui/`, add shadcn
components (`npx shadcn@latest add dialog`, etc.) or npm packages when they
earn their place, create new screens or layouts, restructure `App.jsx` and the
shape router, add fields or tables beyond `title`/`blurb`/`tags`/`body`. The
three shapes are a running start, not a ceiling.

**Hard guardrails — only these, because they're what actually sinks a live
demo:**
1. The app must boot after every step — one change at a time, verify, move on.
2. Data stays local SQLite seed — nothing that needs an external paid API key
   to demo.
3. No auth, no payments, no real accounts — a demo doesn't need them.
4. Every feature you build ties back to a blueprint line. Building something
   the blueprint doesn't mention? Update the blueprint first — it stays the
   source of truth, not a stage you leave behind.
5. Timebox each Must (from the blueprint's build plan). If one is fighting you
   past its box, demote it to Should and protect the demo path.

## Beat 4 — The design pass (mandatory)

Once the Musts work end-to-end, run the full design-pass checklist in
`reference.md` — typography, spacing, colour restraint, a real hero/header,
designed empty/loading/error states, believable data, micro-polish, a mobile
squint test — iterating in small visual prompts against the Beat 1 reference.
A working app that looks like a template is not done; this beat is what makes
it look like a product.

## Beat 5 — Keep the docs current

Update **`apps/README.md`** as you go, not just at the end: what the app is, how
to run it, a **mermaid architecture diagram** (frontend → API routes → database
tables, with real names), the data-model table, and a short **Decisions log**
(one line per notable choice — date, what, why). Every time the schema, routes,
or architecture change, this file changes with them.

## Beat 6 — Validate against the blueprint

Walk the Must list: built, and does it match the blueprint line? Then walk the
full 2-minute demo script end-to-end. Note any deviations (built differently
because…, deferred because…) — these become the blueprint update if they stick.

## Beat 7 — Save & hand off

Save to `workshop/runs/<slug>/03-build.html` (icon 🔧, stage 3, label "Build"):
the session choices + visual reference in Inputs; Musts shipped vs. blueprint,
the design-pass summary, any packages/components added, and the architecture
summary in Outputs.

Then tell the founder it runs at http://localhost:5173. Next: **`/4-test-iterate`**
to walk the demo, fix what's rough, and ship it.
