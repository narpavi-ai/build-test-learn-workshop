# Stage 2 — Blueprint · founder guidance

The SKILL.md has the beats. This is the depth: how to find the magic moment,
prioritize with MoSCoW, ground the market read, and set the brand.

## Why one auto-generated blueprint (spec-driven development)

Tonight's build works best when there's one document that answers "what are we
building and why" before any code exists — define intent, then plan, then
implement, then validate against that plan. That document is the blueprint. The
founder answers only what AI can't decide (the magic moment, the name, the look,
who else is out there); everything else — the backlog cut, the data model, the
market math — gets drafted and handed back for a single correction pass. This
is much faster than three separate interviews, and it's a *sturdier* handoff:
`/3-build` has one file to build against and one file to update if scope changes.

## The magic moment

The magic moment is the single instant the user goes "oh, nice." Everything on
the screen exists to deliver that instant faster. For Kora it's: *ask "can we
afford dinner out?" → see a confident "safe to spend" number.* Build the screen
backwards from that second. "One screen" is shorthand — the magic moment can
span a couple of tightly-coupled views (grid → detail); the line is one **flow**
vs. a sprawling multi-feature product.

## MoSCoW: be ruthless

- **Must** — the demo breaks without it. If more than ~30–40% of your listed
  features end up "Must," you haven't prioritized, you've relabeled everything
  critical. Go back and cut.
- **Should** — makes the demo better but survivable without it.
- **Could** — nice, cuttable under any time pressure.
- **Won't (tonight)** — real roadmap items, explicitly deferred, never deleted.

These usually belong in Should/Could/Won't, not Must: accounts/login/profiles,
saving/favouriting/history, payments/subscriptions, settings/onboarding, real
third-party integrations (seed sample data for the demo instead).

## What "seed data" means (and why it's fine)

Believable seed data beats a half-working real integration. 5–6 hand-written
records that look real — real-sounding names, realistic numbers, full body
text, never "lorem ipsum." If the founder dropped a real sample data file in
`workshop/inputs/`, use it verbatim or trimmed — real data is always better
than invented data. Say so plainly when demoing ("running on seed data; real
integration is next" or "this is real data from a friend's store").

## Market read frameworks

**Competitor white-space grid** — list 3–5 real alternatives, always including
the current workaround from the problem stage (Googling, a spreadsheet, giving
up) — that's the true competitor. Score each on 3–5 dimensions the one user
cares about:

```
                | Speed | Made for | Free | Works with   | <your edge>
                |       | students |      | what I have  |
----------------|-------|----------|------|--------------|------------
Recipe blogs    |  ✗    |   ✗      |  ✓   |     ✗        |    ✗
Just Googling   |  ✗    |   ✗      |  ✓   |     ✗        |    ✗
YOU             |  ✓    |   ✓      |  ✓   |     ✓        |    ✓
```

The white space is the column/cell where everyone else is ✗ and you're ✓. If
you're ✓ everywhere and they're ✗ everywhere, be suspicious — you've probably
understated the competition. "No one else does this" usually means "no market";
competition is a *good* sign.

**Three demand signals** — search for each, report found/not-found honestly
with a source link:
- **Search demand** — Google autocomplete/Trends, App Store search, YouTube volume.
- **People complaining** — Reddit (`site:reddit.com <pain>`), app-store reviews, forums.
- **Someone making money** — an existing paid product/creator doing a version of this.

**Back-of-napkin TAM/SAM/SOM** — bottom-up, assumptions visible:
- **TAM**: everyone with the pain × yearly value.
- **SAM**: the slice your product+go-to-market actually reaches.
- **SOM**: who you could get in the next 1–2 years.
Show the multiplication — the number isn't the point, the thinking is (exactly
what a Demo Night judge asks). Don't do top-down "1% of a $10B market."

**The wedge** — one paragraph: why you (unfair insight/access), why now (what
changed), and a one-liner: "the [category] for [one user] that [the edge]."

## The brand.js field map

`apps/web/src/brand.js` is the whole brand surface for the starting shape:
`name`, `tagline`, `logo` (emoji/letter for now; swap for an `<img>` later),
`colors.primary` (the rest of the palette derives from this one hex), plus
shape-specific copy (`searchPlaceholder`/`searchButton`/`emptyHint` for Search;
`inputLabel`/`primaryLabel`/`secondaryLabel` for Tool). Vibe mostly shapes the
colour and copy tone, not layout: warm/friendly = rounded + soft colour;
sharp/techy = high contrast + cooler colour; bold/playful = saturated; calm/minimal
= muted + more whitespace.

## Data model hand-off to /3-build

Write it out explicitly so `/3-build` can wire it without guessing:
- **Resource name** — what `items` becomes (e.g. `recipes`, `listings`, `sessions`).
- **Field mapping** to the template's starting schema:

  | Template field | Founder's concept |
  |---|---|
  | `title` | the record headline |
  | `blurb` | the one-liner on the card |
  | `tags` | comma-separated categories |
  | `body` | full text in the detail view |
  | *(extra)* | any additional columns (e.g. `prep_time`, `price`, `location`) |

- This is a **starting** mapping, not a ceiling — `/3-build` can add columns,
  tables, or relations the blueprint didn't anticipate, as long as it updates
  this section when it does.

## Worked example — Kora

- **One user:** newly-married couple merging finances for the first time.
- **Magic moment:** type a money question, hit "Ask Kora" → a 2–3 sentence
  answer + one big "safe to spend this week" number.
- **Musts:** the ask/answer flow, the safe-to-spend number, ~20 realistic seed
  transactions. **Should:** a spending-by-category breakdown. **Won't tonight:**
  two-user live sync, real bank connection (Plaid), multi-month trends, accounts/login.
- **Market grid gap:** Mint/YNAB/Monarch show charts of what happened; none
  answer "can we afford this?" in plain English, free, zero setup, built for two people.
- **Signals:** search — "Mint/YNAB alternatives 2026" is high-volume (Mint shut
  down in 2024); complaints — YNAB's price/learning curve drives churn; money —
  YNAB ($109/yr) and Monarch (~$99/yr) prove willingness to pay.
- **Napkin sizing:** TAM ~2.7M CA couples × $20/yr ≈ $54M; SAM ~400k actively
  switching × $20 ≈ $8M; SOM 1–5k via referral ≈ $20k–100k.
- **Wedge:** *"The budgeting app for new couples that answers 'can we afford
  this?' instead of just showing charts."* Why now: Mint's shutdown, AI-chat UX
  is expected, cost-of-living makes control urgent.
