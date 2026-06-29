---
name: 2-spec
description: Spec stage of the Build It, Show It workshop — turns the problem into an MVP plus a prioritized product backlog with AI, flags the magic-moment feature as the MVP to build first, then hands off to the opportunity check. Use after /1-problem or when the user types /2-spec.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Bash(mkdir *), Bash(cp *)
---

# Stage 2 — Spec it with AI

Goal: turn the problem into an **MVP plus a prioritized product backlog** — the
**magic-moment feature is the MVP** (built first); everything else becomes backlog,
ordered by priority. Capture the whole vision; don't throw features away.
Read `.claude/skills/shared/HARNESS.md` first. For prioritizing, the magic
moment, and the reusable coach prompt, read `reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run (see HARNESS.md) and read `workshop/runs/<slug>/01-problem.html`.
Use it; don't re-ask what the Problem stage already answered. If it's missing, ask
for the one-sentence problem.

## Beat 1 — Interview

Ask these with the **AskUserQuestion** tool (one or two panels; founders pick
**Other** to type their own):

1. When someone opens this for the first time, what's the **one action** they take?
2. What do they put **in**, and what do they get **out**?
3. What's the **magic moment** — the instant they go "oh, nice"?
4. For a demo, what **sample data** can we seed so it looks real?
5. What other features do you imagine — and which **one** is the magic moment (the MVP) to build first?

## Beat 2 — Do the work

Produce a spec with these sections:
- **The one user** (from the problem)
- **The magic moment** — the single feature that makes someone go "oh, nice".
- **MVP** — the magic-moment feature, described as the one screen/flow you'd build
  and demo first.
- **Product backlog** — every other feature, ordered by priority (high → low).
  Nothing is cut; it's sequenced. This is the roadmap after the MVP ships.
- **Inputs → Outputs** of the **MVP**
- **Data model** — name the resource (e.g. `recipe`, `listing`, `session`) and its
  3–5 fields. Map each field to the starter template's schema: which is the `title`
  (headline on the card)? Which is the `blurb` (one-liner below it)? Which is
  `tags` (searchable categories)? Which is `body` (full detail text)? List any
  extra fields beyond those four. This is what `/5-build` wires into the database.
- **Seed data** for the demo — 2–3 example rows using the actual field names from
  the data model above (not generic "sample item one" placeholders).

Most founders still demo the MVP first — but the starter kit is a real full-stack
app, so the spec captures the whole product and `/4b` + `/5` decide how much to
build now. Also include the worked **coach prompt** the founder can paste into any
chat AI to regenerate this (full version in `reference.md`):

> Act as a product coach. I want to build [idea]. Define: the one user, the
> magic-moment feature as the MVP, the inputs and outputs of that MVP screen, what
> seed data to use for a demo, and the rest of the features as a prioritized product
> backlog. Keep the MVP buildable tonight.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/02-spec.html` (icon 💬, stage 2, label "Spec"):
interview Q&A in Inputs; the spec sections and the coach prompt (use a `.prompt`
block) in Outputs.

Then hand off: **next, run `/3-opportunity`** to size the market and find your
edge now that you know exactly what the one screen is. (The build route — Lovable
vs the starter template — is chosen right after, in `/3-opportunity`.)
