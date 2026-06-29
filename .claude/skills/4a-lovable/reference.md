# Stage 4A — Lovable · founder guidance

The SKILL.md has the beats. This is how to write prompts that land on the first
try and survive a live demo.

## What Lovable's own docs say

From [docs.lovable.dev/prompting](https://docs.lovable.dev/prompting/prompting-one)
and the [Lovable Prompting Handbook](https://lovable.dev/blog/2025-01-16-lovable-prompting-handbook):

- *"A full-page prompt gets you noise. A section-based prompt gets you signal."*
- *"Avoid assigning five tasks to Lovable simultaneously — it creates confusion."*
- *"Be explicit. Use atomic UI language. Include real content, not placeholders."*
- A strong initial prompt follows a **PRD (Product Requirements Document) structure**:
  purpose → user flow → layout → data/content → brand.
- Iterate with the Edit button for targeted fixes, not by rewriting entire prompts.

## Why one PRD prompt (not a 4-step script)

The old advice was 3–4 prompts for credit budgeting. But that creates
back-and-forth friction in a live workshop. Lovable handles a well-structured
single prompt reliably when it's organized into clear *named sections* — it reads
them as a spec, not as simultaneous vague requests. One good prompt → one review
→ done.

## The PRD prompt template (reuse this shape)

```
**App:** [name] — "[tagline]"
**User:** [one-sentence user + pain]
**Purpose:** [what the screen does in one line]

---

## Layout (top to bottom)
[every element, every label, every button — be atomic]

## Data / content
[exact seed records or insight text — never say "add some data"]

## Brand & style
- Primary: [hex]
- Accent: [hex]
- Background: [hex]
[every colour token, font sizes, component details]

## Constraints
No login. No navigation. No other pages. Seed data only.
```

## "If it breaks live" fallbacks

- Wrong layout → re-prompt the Layout section only: "Keep everything else as-is.
  Fix only the layout: [specific fix]."
- Wrong data → re-prompt: "Don't change the design. Replace the content in
  [card/section] with exactly: [text]."
- Out of credits → demo what you have; a screenshot of the magic moment is enough
  for Demo Night.
- Never debug in circles. One focused re-prompt, then move on.

## Optional polish prompt

If the founder has one credit left after the PRD prompt lands:

> "Keep all functionality and data. Polish only:
> [one specific thing — e.g., 'make the card headlines larger and bolder' or
> 'add a 0.4s fade-in on the cards']. Nothing else."

## Shipping

Lovable can publish to a URL — do that at the end so the founder has a link to
show and share. That URL *is* the demo.
