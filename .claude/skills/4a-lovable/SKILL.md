---
name: 4a-lovable
description: Route A of the Build It, Show It workshop — converts the spec into a sequence of 3-4 copy-paste Lovable prompts for a no-code build, then saves a branded HTML artifact. Use after /3-opportunity for the no-code path or when the user types /4a-lovable.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Bash(mkdir *), Bash(cp *)
---

# Stage 4A — Build in Lovable (no-code)

Goal: turn the spec into a tight prompt script the founder pastes into Lovable
to get a clickable demo. Read `.claude/skills/shared/HARNESS.md` first. For
prompt-writing patterns, free-tier budgeting, and live-fail fallbacks, read
`reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run and read `workshop/runs/<slug>/02-spec.html` (and
`01-problem.html`, `03-opportunity.html`). Build from the spec's one screen,
inputs/outputs, and seed data; let the opportunity wedge shape the name/copy.
If the spec is missing, run `/2-spec` first.

## Beat 1 — Interview (short)

Ask these with the **AskUserQuestion** tool:

1. App name and one-line tagline?
2. Brand vibe — playful, clean, bold? Any colour you want?
3. Anything about the look that matters for your demo?

## Beat 2 — Do the work

Write **one comprehensive PRD-style prompt** the founder pastes into Lovable to
get the full demo in one go — no back-and-forth. Lovable's docs warn against
five simultaneous vague tasks, but a *structured* single prompt with clear
named sections (Layout, Data, Brand) works well because Lovable reads it top-down
as a spec.

Structure the prompt with these sections:
1. **App overview** — name, tagline, one-sentence purpose, one user.
2. **Layout** — every element top-to-bottom: header, headings, cards/sections,
   footer. Be atomic: name every button label, placeholder text, and field.
3. **Data / content** — exact seed records or insight text inline. Never say
   "add some data"; give the rows.
4. **Brand & style** — exact hex colours, font weight/size, component details.
5. **Constraints** — no auth, no other pages, no login, seed data only.

Then add **one optional polish prompt** for if the founder has a credit left and
wants to refine one thing (copy, animation, empty state).

Each prompt should still have a one-line **"this should produce…"** note and a
one-line **"if it breaks"** re-prompt fallback.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/04a-lovable.html` (icon ✦, stage 4, label
"Build · Lovable"): interview answers in Inputs; the PRD prompt (in a `.prompt`
block with its note + fallback) and the optional polish prompt in Outputs.

Then tell the founder: paste the PRD prompt into Lovable and wait for it to
finish before touching anything. Next: **`/6-test-iterate`** to make the demo
believable, then publish to a URL.
