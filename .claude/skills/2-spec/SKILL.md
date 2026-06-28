---
name: 2-spec
description: Spec stage of the Build It, Show It workshop — turns the problem into the smallest buildable version (one screen) with AI, then hands off to the opportunity check. Use after /1-problem or when the user types /2-spec.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Bash(mkdir *), Bash(cp *)
---

# Stage 2 — Spec it with AI

Goal: turn the problem into the **smallest buildable version** — one screen.
Read `.claude/skills/shared/HARNESS.md` first. For scoping heuristics, the magic
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
4. For a demo, what data can we **fake** so it looks real?
5. What are you tempted to add that we should **leave OUT** for now?

## Beat 2 — Do the work

Produce a one-screen spec with these sections:
- **The one user** (from the problem)
- **The single core action**
- **Inputs → Outputs** of that one screen
- **Data to fake** for the demo
- **Explicitly out of scope**

Keep it to something buildable tonight. Also include the worked **coach prompt**
the founder can paste into any chat AI to regenerate this (full version in
`reference.md`):

> Act as a product coach. I want to build [idea]. Define: the one user, the single
> core action, the inputs and outputs of that one screen, what data to fake for a
> demo, and what to explicitly leave OUT. Keep it to one screen buildable tonight.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/02-spec.html` (icon 💬, stage 2, label "Spec"):
interview Q&A in Inputs; the spec sections and the coach prompt (use a `.prompt`
block) in Outputs.

Then hand off: **next, run `/3-opportunity`** to size the market and find your
edge now that you know exactly what the one screen is. (The build route — Lovable
vs the starter template — is chosen right after, in `/3-opportunity`.)
