---
name: 4b-scope-design
description: Route B of the Build It, Show It workshop — scopes the build (the MVP first, with the rest kept as a product backlog) and captures the brand (name, tagline, logo, colours) for the starter template, then saves a branded HTML artifact. Use after /3-opportunity for the Claude Code path or when the user types /4b-scope-design.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Bash(mkdir *), Bash(cp *)
---

# Stage 4B — Scope & Design

Goal: lock the **one screen** to build, and decide how the app **looks** so the
starter template becomes the founder's product. Read `.claude/skills/shared/HARNESS.md`
first. For the brand.js field map, colour/vibe guidance, and logo options, read
`reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run and read `workshop/runs/<slug>/02-spec.html` (and
`01-problem.html`, `03-opportunity.html` — use the wedge for the name/positioning).
If the spec is missing, run `/2-spec` first.

## Beat 1 — Interview

Ask with the **AskUserQuestion** tool — these are choice-friendly, so offer
options (the founder picks **Other** to type their own).

**Scope** — decide how much to build now (read the spec's MVP + product backlog):
1. What do we build now? (offer: MVP only · MVP + 1–2 backlog items · Scaffold all)
2. Confirm everything else stays on the product backlog (deferred, not deleted).

**Brand** — make it theirs:
3. Product name and one-line tagline?
4. Logo — a simple emoji/letter mark for now, or an image you'll drop in?
5. Primary colour (offer swatches: purple #8B4FFB · green #00BA6E · blue #008CFF · Other for a custom hex).
6. Vibe (offer: warm + friendly · sharp + techy · bold + playful · calm + minimal).

## Beat 2 — Do the work

1. Write the scope: what's being built **now** vs what stays on the **backlog**
   (use `.bullets keep` for "building now" and `.bullets cut` for "backlog", side by
   side in a `.scope-split`). Add a **screen-flow diagram** so the build is obvious
   at a glance — use the shared `.flow-diagram` markup (styled in `eu-brand.css`):
   **Input → Results → Detail**, in the founder's own words (e.g. "Ingredients in" →
   "Recipe cards" → "Full recipe"). Mark the payoff node `class="node good"`. Most
   demos are just the MVP, but the starter template is real full-stack — if the
   founder chose more, scope to what they'll actually finish.
2. Apply the brand to the starter template by editing
   **`apps/web/src/brand.js`**: set `name`, `tagline`, `logo`, `colors.primary`,
   and the search placeholder/button/empty copy to match the idea. Keep it
   lightweight — one file. If a logo image is provided, note where to drop it;
   otherwise use the emoji/letter mark.
3. Note the data model rename they'll need in `apps/api/src/db.js` (e.g.
   `items` → `recipes`) — `/5-build` will do the actual rename.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/04b-scope-design.html` (icon ✂, stage 4, label
"Scope & Design"): interview answers in Inputs; the scope (keep/cut lists) and the
brand choices (show the colour + name) in Outputs.

Then tell the founder: the app is now branded as **[name]**. Next: **`/5-build`**
to wire your one screen into the starter template.
