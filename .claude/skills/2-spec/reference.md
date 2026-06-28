# Stage 2 — Spec · founder guidance

The SKILL.md has the beats. This is the depth: how to cut to one screen, find the
magic moment, and what to fake.

## Why one screen

Tonight you're building a *demo*, not a product. A demo's job is to make one
person feel one thing in two minutes. One screen that does the magic moment beats
ten screens of plumbing. Everything you cut now, you can add after Demo Night —
nothing here is permanent.

## The magic moment

The magic moment is the single instant the user goes "oh, nice." Everything on the
screen exists to deliver that instant faster. For Kora it's: *ask "can we afford
dinner out?" → see a confident "safe to spend" number.* If you can name the moment,
you can cut everything that isn't on the path to it.

Find it by asking: at what exact second does the user get the value? Build the
screen backwards from that second.

## Inputs → Outputs is the whole spec

A one-screen app is just: the user puts **something in**, presses one button, and
gets **something out**. Name both precisely:
- **In:** the smallest input that's still believable (3 ingredients, not a full pantry).
- **Out:** the payoff, shown well (one great recipe card, not a wall of 50 results).

## Scope-cutting heuristics (what to leave OUT)

Default to cutting all of these for the demo — say so explicitly so it's a
decision, not an accident:
- Accounts / login / profiles
- Saving, favouriting, history
- Payments / subscriptions
- Settings, onboarding, multiple screens
- Real integrations (use faked data instead)

Rule of thumb: if it isn't on the path to the magic moment, it's out for tonight.

## What "fake" means (and why it's fine)

A demo with believable fake data is more convincing than a half-working real
integration. Fake = 5–6 hand-written records that look real: real-sounding
titles, realistic numbers, full body text — never "lorem ipsum". You're proving
the *experience*, not the backend.

## The reusable coach prompt (paste into any chat AI)

> Act as a product coach for a non-technical student founder. I want to build
> [idea] for [one user]. In plain language, define: (1) the one user, (2) the
> single core action they take on first open, (3) the inputs and outputs of that
> one screen, (4) what data we can fake to make a believable demo, and (5) what to
> explicitly leave OUT for now. Keep the whole thing to one screen that's buildable
> in an evening. Push back if my scope is too big.

## Worked example — Kora spec

- **One user:** newly-married couple merging finances for the first time.
- **Core action:** type a money question, hit "Ask Kora".
- **In → Out:** a plain-English question → a 2–3 sentence answer + one big "safe to spend this week" number.
- **Fake:** ~20 hand-written transactions for one couple-month, realistic names and amounts.
- **Out of scope:** accounts, real bank connection, two-user live sync, multi-month history.
