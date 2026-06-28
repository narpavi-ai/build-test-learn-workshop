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

**Shape** — pick the screen shape that matches the magic moment (read the spec):
1. What shape does the demo screen take?
   - **Search/Catalog** — user types or filters → sees a grid of results → clicks for detail *(recipe finders, job boards, marketplaces)*
   - **Tool/Generator** — user fills a form → gets a structured result *(AI generators, analyzers, brief builders, calculators)*
   - **Dashboard** — land on summary stats + browse/filter a data table *(SaaS metrics, trackers, spend/inventory tools)*
   If the magic moment doesn't clearly fit any shape, default to Search/Catalog or recommend Route A (Lovable).

**Scope** — decide how much to build now (read the spec's MVP + product backlog):
2. What do we build now? (offer: MVP only · MVP + 1–2 backlog items · Scaffold all)
3. Confirm everything else stays on the product backlog (deferred, not deleted).

**Brand** — make it theirs:
4. Product name and one-line tagline?
5. Logo — a simple emoji/letter mark for now, or an image you'll drop in?
6. Primary colour (offer swatches: purple #8B4FFB · green #00BA6E · blue #008CFF · Other for a custom hex).
7. Vibe (offer: warm + friendly · sharp + techy · bold + playful · calm + minimal).

## Beat 2 — Do the work

0. **Activate the right template shape** — edit `apps/web/src/brand.js` and set
   `shape: '<shape>'` (`'search'`, `'tool'`, or `'dashboard'`). That's it — the
   shape router in `src/App.jsx` switches instantly on hot reload. No file copying
   needed.

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
3. Lock the data model for `/5-build` — derive it from the spec if it was captured
   there; otherwise pin it now:
   - **Resource name**: what `items` becomes (e.g. `recipes`, `listings`, `sessions`)
   - **Field mapping**: which spec field maps to `title`, `blurb`, `tags`, `body`
     in the template, and any extra columns beyond those four (e.g. `prep_time`,
     `price`, `location`). Write it out explicitly — `/5-build` will rename the
     table, columns, queries, and all three components without ambiguity.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/04b-scope-design.html` (icon ✂, stage 4, label
"Scope & Design"): interview answers in Inputs; the scope (keep/cut lists) and the
brand choices (show the colour + name) in Outputs.

Then tell the founder: the app is now branded as **[name]**. Next: **`/5-build`**
to wire your one screen into the starter template.
