---
name: 2-spec
description: Runs the Spec stage of the Build It, Show It workshop — turns a problem into a tight one-screen build brief with AI, then presents the two build routes (Lovable vs Claude Code + starter template). Use after /1-problem or when the user types /2-spec.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Bash(mkdir *), Bash(cp *)
---

# Stage 2 — Spec it with AI

Goal: turn the problem into the **smallest buildable version** — one screen.
Read `.claude/skills/shared/HARNESS.md` first.

## Beat 0 — Load context

Read `workshop/01-problem.html` if it exists and use it. Don't re-ask what the
Problem stage already answered. If it's missing, ask for the one-sentence problem.

## Beat 1 — Interview

Ask one at a time:

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
the founder can paste into any chat AI to regenerate this:

> Act as a product coach. I want to build [idea]. Define: the one user, the single
> core action, the inputs and outputs of that one screen, what data to fake for a
> demo, and what to explicitly leave OUT. Keep it to one screen buildable tonight.

## Beat 3 — Present the fork, then save

Tell the founder the path now splits — **both are valid demos**:

- **Route A · Lovable (no-code):** run `/3a-lovable` → 3–4 prompts → a clickable
  app with faked data. Best if you don't want to touch code.
- **Route B · Claude Code + starter template:** run `/3b-scope-design` → `/4-build` →
  `/5-test-iterate` → a real React+API+SQLite app you own. The level-up.

Save the artifact to `workshop/02-spec.html` (icon 💬, stage 2, label "Spec"):
interview Q&A in Inputs; the spec sections, the coach prompt (use a `.prompt`
block), and the two routes (use the `.routes` markup) in Outputs.
