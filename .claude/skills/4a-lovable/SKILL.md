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
inputs/outputs, and faked data; let the opportunity wedge shape the name/copy.
If the spec is missing, run `/2-spec` first.

## Beat 1 — Interview (short)

Lovable's free tier is ~5 credits/day, so plan for **3–4 prompts**. Ask these
with the **AskUserQuestion** tool:

1. App name and one-line tagline?
2. Brand vibe — playful, clean, bold? Any colour you want?
3. Anything about the look that matters for your demo?

## Beat 2 — Do the work

Write a numbered script of **3–4 self-contained prompts**. Each prompt:
- Is specific enough to paste as-is (names the screen, fields, fake data).
- Has a one-line **"this should produce…"** note.
- Has a one-line **"if it breaks live"** fallback (re-prompt, don't debug in circles).

Keep it realistic for the free tier: **one screen, no auth, faked data.**
Typical shape:
1. Scaffold the screen (layout + input + button + empty results grid).
2. Add 5–6 believable fake records and render them as cards.
3. Add the detail view when a card is clicked.
4. Polish: brand colours, copy, empty/loading states.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/04a-lovable.html` (icon ✦, stage 4, label
"Build · Lovable"): interview answers in Inputs; the prompt script (each prompt in
a `.prompt` block with its note + fallback) in Outputs.

Then tell the founder: paste prompt 1 into Lovable, check it produced the right
thing, then move on. Next: **`/6-test-iterate`** to make the demo believable, then
publish to a URL.
