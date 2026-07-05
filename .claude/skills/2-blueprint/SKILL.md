---
name: 2-blueprint
description: Blueprint stage of the Build It, Show It workshop — reads the problem artifact and auto-drafts the spec (magic moment, MoSCoW backlog, data model, seed data), grounds it with a quick market read (competitors, demand signals, TAM/SAM/SOM, wedge via WebSearch), sets the brand, and applies it to the starter template. Asks at most 4 questions in one panel; the founder corrects a draft instead of sitting through a long interview. Use after /1-problem or when the user types /2-blueprint.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, WebSearch, WebFetch, Bash(mkdir *), Bash(cp *)
---

# Stage 2 — Blueprint (spec + market + brand, mostly auto-generated)

Goal: turn the problem into a build-ready **blueprint** — one document with the
MVP, a prioritized backlog, a market read, and the brand — with the *founder*
answering only what AI genuinely can't infer. Read `.claude/skills/shared/HARNESS.md`
first. For MoSCoW prioritization, the market frameworks, the brand field map, and
the Kora worked example, read `reference.md` in this folder.

**This blueprint is the single source of truth** for the rest of the workshop:
`/3-build` builds against it and checks its work against it; `/4-test-iterate`
tests the demo script it defines. If the build needs to change something not in
here, the blueprint gets updated first — not skipped.

## Beat 0 — Load context

Resolve the active run and read `workshop/runs/<slug>/01-problem.html`. Also
check `workshop/inputs/` for any files still sitting there (a sample data file
especially — `.csv`/`.json`/`.xlsx`) — if one exists, it drives the data model
and seed data in Beat 2 instead of invented rows. Infer everything you can from
these; never re-ask what they already answer.

## Beat 1 — Interview (one panel, 4 questions max)

Ask all of these in a **single AskUserQuestion call**:

1. **Magic moment** — the one action + payoff a stranger sees in the 2-minute
   demo. Propose 2–3 concrete options inferred from the problem statement, plus Other.
2. **Product name + tagline** — propose 2–3 names you've generated from the idea,
   plus Other.
3. **Look & feel** — one question covering both a colour (swatches: purple
   `#8B4FFB` · green `#00BA6E` · blue `#008CFF` · Other for a custom hex) and a
   vibe (warm+friendly · sharp+techy · bold+playful · calm+minimal).
4. **Known competitors** — any real apps/tools/habits people already use for
   this? Offer "None that I know of" — WebSearch fills the gap in Beat 2 either way.

## Beat 2 — Auto-generate the draft

Without asking anything else, produce every section below. This is where the
speed comes from — infer aggressively, and use WebSearch/WebFetch for the market
read (3–5 searches). **Never fabricate**: cite only sources you actually find;
if a signal isn't there, say "not found."

1. **The one user + pain** — one-line recap from the problem artifact.
2. **Magic moment + 2-minute demo script** — the exact click path a demo follows.
   This script *is* the acceptance criteria `/3-build` and `/4-test-iterate` test against.
3. **MoSCoW backlog** — Must / Should / Could / Won't-for-tonight. Be ruthless:
   **Musts should be ≤ ~30–40% of everything listed** — only what the demo script
   needs. Everything else is sequenced, not deleted (see `reference.md`).
4. **Data model + seed data** — a resource name and fields, using a dropped data
   file from Beat 0 if there is one; otherwise the template's `title`/`blurb`/`tags`/`body`
   as a starting mapping (extra columns welcome). 5–6 believable seed rows with
   real field names — real data from Beat 0 if available.
5. **Market read** — competitor white-space grid (3–5 real alternatives incl. the
   manual workaround), three demand signals (search / complaints / money — found
   or not found, with links), back-of-napkin TAM/SAM/SOM with visible math, and
   the wedge (why you / why now / one-line positioning).
6. **Brand** — name, tagline, logo mark, primary hex, vibe (from Beat 1).
7. **Build plan** — the Musts in demo-path order, each with a rough timebox
   ("if a Must slips past its box, demote it to Should and keep moving").

## Beat 3 — Present the draft for correction

One AskUserQuestion panel: "Here's your blueprint — anything to fix?" with
options like *Ship it as-is* / *Fix the must-have list* / *Fix the data model* /
*Fix the brand*. Apply whatever they flag, then move on — this replaces a second
long interview with a single correction pass.

## Beat 4 — Apply the brand + starting shape

Edit `apps/web/src/brand.js`: `name`, `tagline`, `logo`, `colors.primary`, the
search/tool copy, and `shape` (`'search'` | `'tool'` | `'dashboard'` — pick
whichever matches the magic moment; default to `'search'` if none fit cleanly).
Tell the founder plainly: **the shape is a starting point** — `/3-build` is free
to add screens, restructure, or outgrow it entirely.

## Beat 5 — Save & hand off

Save to `workshop/runs/<slug>/02-blueprint.html` (icon 📐, stage 2, label
"Blueprint"): the 4 interview answers + the correction pass in Inputs; all 7
sections from Beat 2 (updated per Beat 3) in Outputs — use `.scope-split` and
`ul.bullets` for the MoSCoW table, `.flow-diagram` for the demo script, `.prompt`
for the market-read sources.

Then hand off: **next, run `/3-build`** to build the Musts against this blueprint.
