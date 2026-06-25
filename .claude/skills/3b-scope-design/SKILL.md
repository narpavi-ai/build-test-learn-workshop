---
name: 3b-scope-design
description: Route B of the Build It, Show It workshop — cuts a spec down to one magic-moment screen and captures the brand (name, tagline, logo, colours) for the starter template, then saves a branded HTML artifact. Use after /2-spec for the Claude Code path or when the user types /3b-scope-design.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Bash(mkdir *), Bash(cp *)
---

# Stage 3B — Scope & Design

Goal: lock the **one screen** to build, and decide how the app **looks** so the
starter template becomes the founder's product. Read `.claude/skills/shared/HARNESS.md` first.

## Beat 0 — Load context

Read `workshop/02-spec.html` (and `01-problem.html`). If missing, run `/2-spec` first.

## Beat 1 — Interview

**Scope** — confirm one screen, cut the rest:
1. Confirm the one magic-moment screen (input → results → detail). Right?
2. What are we cutting for now? (accounts, saving, payments, extra screens…)

**Brand** — make it theirs:
3. Product name and one-line tagline?
4. Logo — got one, or want a simple text/emoji mark for now? (which emoji/letter?)
5. Pick a primary colour (hex or just describe it; suggest one if unsure).
6. Vibe in two words (e.g. "warm + friendly", "sharp + techy")?

## Beat 2 — Do the work

1. Write the scope: the one screen, what's IN, what's CUT (use `.bullets keep` and
   `.bullets cut`).
2. Apply the brand to the starter template by editing
   **`apps/web/src/brand.js`**: set `name`, `tagline`, `logo`, `colors.primary`,
   and the search placeholder/button/empty copy to match the idea. Keep it
   lightweight — one file. If a logo image is provided, note where to drop it;
   otherwise use the emoji/letter mark.
3. Note the data model rename they'll need in `apps/api/src/db.js` (e.g.
   `items` → `recipes`) — `/4-build` will do the actual rename.

## Beat 3 — Save & hand off

Save to `workshop/03b-scope-design.html` (icon ✂, stage 3, label "Scope & Design"):
interview answers in Inputs; the scope (keep/cut lists) and the brand choices
(show the colour + name) in Outputs.

Then tell the founder: the app is now branded as **[name]**. Next: **`/4-build`**
to wire your one screen into the starter template.
