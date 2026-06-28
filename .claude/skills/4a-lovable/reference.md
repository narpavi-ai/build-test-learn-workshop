# Stage 4A — Lovable · founder guidance

The SKILL.md has the beats. This is how to write prompts that land on the first
try and survive a live demo.

## Why a prompt *script* (not freestyle)

Lovable's free tier is ~5 credits a day — each prompt costs one. If you improvise,
you burn credits fixing your own vagueness. A pre-written script of 3–4 specific
prompts means every credit buys real progress, and you can re-run a single prompt
if it drifts instead of starting over.

## Anatomy of a good Lovable prompt

Each prompt should name:
- **The screen/section** it's building ("a single search screen").
- **The exact elements** (input placeholder text, button label, results as cards).
- **The seed data** to use (give 2 sample rows inline so it copies your tone).
- **The look** (brand colour, vibe) — once, in the polish prompt.
Keep one prompt = one visible outcome. Don't ask for five things at once.

## The 3–4 prompt shape (reuse this)

1. **Scaffold** — "Build a single screen with a centered search box (placeholder
   '…'), a primary button labelled '…', and an empty results grid below. No login,
   no other pages."
2. **Seed data** — "Add 6 example [records] as cards. Here are two: [row], [row].
   Match that style for the rest." 
3. **Detail** — "When a card is clicked, open a detail view showing [fields]. Add a
   back button."
4. **Polish** — "Use [colour] as the primary colour, [vibe]. Add a friendly empty
   state and a loading state."

## "If it breaks live" — fallbacks

- It built the wrong thing → **re-prompt the same step** more specifically; don't
  pile a fix on top.
- It's close but ugly → save the polish for prompt 4; don't tweak mid-build.
- You're out of credits → demo what you have; the screenshot of the magic moment is
  enough for Demo Night.
- Never debug in circles live. One re-prompt, then move on.

## Shipping

Lovable can publish to a URL — do that at the end so the founder has a link to show
and share. That URL *is* the demo.
