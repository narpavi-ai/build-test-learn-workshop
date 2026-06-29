# Stage 2 — Spec · founder guidance

The SKILL.md has the beats. This is the depth: how to pick the MVP, find the magic
moment, prioritize the backlog, and what to seed.

## Why MVP-first

Tonight you're building a *demo*, not the whole product. A demo's job is to make
one person feel one thing in two minutes — so you build the **MVP** (the
magic-moment feature) first. The rest of the product isn't thrown away; it goes on
the **product backlog**, sequenced by priority, ready to build after Demo Night.
One screen that nails the magic moment beats ten half-built ones.

## The magic moment

The magic moment is the single instant the user goes "oh, nice." Everything on the
screen exists to deliver that instant faster. For Kora it's: *ask "can we afford
dinner out?" → see a confident "safe to spend" number.* If you can name the moment,
you can cut everything that isn't on the path to it.

Find it by asking: at what exact second does the user get the value? Build the
screen backwards from that second.

## Inputs → Outputs is the whole spec

"One screen" is shorthand — the magic moment can span a couple of tightly-coupled
views (like grid → detail). The line is one **flow** vs. a full multi-feature
product, not a literal view count.

A one-screen app is just: the user puts **something in**, presses one button, and
gets **something out**. Name both precisely:
- **In:** the smallest input that's still believable (3 ingredients, not a full pantry).
- **Out:** the payoff, shown well (one great recipe card, not a wall of 50 results).

## MVP vs backlog (what to defer)

These usually belong in the backlog, not the MVP — name them so it's a deliberate
sequencing decision, not an accident:
- Accounts / login / profiles
- Saving, favouriting, history
- Payments / subscriptions
- Settings, onboarding, extra screens
- Real integrations (seed sample data for the demo instead)

Rule of thumb: if it isn't on the path to the magic moment, it's backlog — built
after the MVP ships, not never.

## What "seed data" means (and why it's fine)

A demo with believable seed data is more convincing than a half-working real
integration. Seed data = 5–6 hand-written records that look real: real-sounding
titles, realistic numbers, full body text — never "lorem ipsum". You're proving
the *experience*, not the backend. It's standing in for real data, not faking the
product — say so plainly when you demo ("running on seed data; real integration is
next").

## The reusable coach prompt (paste into any chat AI)

> Act as a product coach for a non-technical student founder. I want to build
> [idea] for [one user]. In plain language, define: (1) the one user, (2) the
> magic-moment feature as the MVP, (3) the inputs and outputs of that MVP screen,
> (4) what sample data we can seed to make a believable demo, and (5) the rest of the
> features as a prioritized product backlog. Keep the MVP buildable in an evening.

## Worked example — Kora spec

- **One user:** newly-married couple merging finances for the first time.
- **Magic moment / MVP:** type a money question, hit "Ask Kora" → a 2–3 sentence answer + one big "safe to spend this week" number (one screen).
- **In → Out:** a plain-English question → the answer + the safe-to-spend number.
- **Seed data:** ~20 hand-written transactions for one couple-month, realistic names and amounts.
- **Backlog:** two-user live sync, real bank connection (Plaid), multi-month trends, savings goals, accounts/login.
