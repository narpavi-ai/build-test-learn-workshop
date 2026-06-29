---
name: 3-opportunity
description: Opportunity stage of the Build It, Show It workshop — now that the spec (MVP + backlog) exists, sizes the market and finds the edge (competitor white-space, demand signals, back-of-napkin TAM/SAM/SOM, the wedge), then presents the two build routes. Use after /2-spec or when the user types /3-opportunity.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, WebSearch, WebFetch, Bash(mkdir *), Bash(cp *)
---

# Stage 3 — Opportunity (is this worth building, and what's the edge?)

Goal: pressure-test the idea against the real world and give the founder a market
story they can build with and pitch on Demo Night. You know exactly what the
product is now (the spec), so position *that*, not a vague idea.
Read `.claude/skills/shared/HARNESS.md` first. The frameworks (TAM/SAM/SOM math,
the competitor grid, the three demand signals, the wedge) live in `reference.md` —
read it before doing the work.

## Beat 0 — Load context

Resolve the active run and read **`01-problem.html`** and **`02-spec.html`** from
`workshop/runs/<slug>/`. Anchor everything on the one user and the one screen.

## Beat 1 — Interview (short)

Ask with the **AskUserQuestion** tool (founders pick **Other** to type their own):

1. Who or what do people use **instead** today? Name any real apps/tools/habits.
2. What would make your user **switch** to you — the one thing others get wrong?
3. How big could this get — campus, city, "every student in Canada"? (rough is fine)
4. Would anyone **pay**, and roughly how much — or is it free with another model?

## Beat 2 — Do the work (use WebSearch/WebFetch to ground it)

Search for real signals; cite what you find. Produce four things (see `reference.md`
for templates and the *why*):

**Guardrail — never fabricate.** Only cite sources you actually found, and link
them. If a demand signal isn't there, say "not found" — don't invent a statistic,
a competitor, or a market number to fill the gap. An honest, student-sized read
beats an impressive fake one, and a judge will catch the fake one on Demo Night.

1. **Competitor white-space grid** — 3–5 real alternatives (incl. the "do it
   manually" workaround) × a few dimensions the user cares about. Name the **gap**
   the spec's one screen fills.
2. **Three demand signals** — (a) search demand, (b) people *complaining* about
   today's options (Reddit / app-store reviews / forums), (c) someone already
   *making money* in this space. Note found / not-found honestly.
3. **Back-of-napkin TAM / SAM / SOM** — bottom-up: # of the one user × rough
   yearly value. Keep the math visible and student-sized; label assumptions.
4. **The wedge** — one paragraph: why *you*, why *now*, and the sharp one-line
   positioning ("the [thing] for [user] that [edge]"). If the research suggests it,
   tighten the problem statement and note what changed for `/4*`.

## Beat 3 — Present the build fork, then save

The path now splits — **both are valid demos**:
- **Route A · Lovable (no-code):** run `/4a-lovable` → 3–4 prompts → a clickable
  app with seed data. Best if you don't want to touch code.
- **Route B · Claude Code + starter template:** run `/4b-scope-design` → `/5-build` →
  `/6-test-iterate` → a real React+API+SQLite app you own. The level-up.

Save to `workshop/runs/<slug>/03-opportunity.html` (icon 📊, stage 3, label
"Opportunity"): interview answers in Inputs; the grid, the three signals (with
sources), the TAM/SAM/SOM math, and the wedge in Outputs, then the two routes
(use the `.routes` markup). Tell the founder to pick a route and run it next.
