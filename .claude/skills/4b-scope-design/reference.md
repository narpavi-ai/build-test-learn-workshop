# Stage 4B — Scope & Design · founder guidance

The SKILL.md has the beats. This is the depth on locking scope and making the
starter template look like the founder's product.

## Why scope before you touch code

The starter template already runs (search → results → detail). Your job in Route B
is not to architect — it's to make that one screen *be* the founder's app. So lock
exactly which screen and cut everything else *before* building, or you'll widen
scope mid-build and run out of evening.

## What "one magic-moment screen" means here

The template's shape is input → results grid → detail. Confirm the founder's magic
moment maps onto it (almost everything does). The magic moment can span this small
flow — grid → detail is two views and that's fine; "one screen" means one flow, not
one literal view. If they're describing a sprawling product — many features,
settings, separate sections — pull the extras back to the backlog and keep the one
magic-moment flow that delivers the payoff.

## The brand.js field map (the one file you edit)

`apps/web/src/brand.js` is the whole brand surface — change it and the app
re-themes. Fields:
- `name` — product name (header, title).
- `tagline` — the one-line promise.
- `logo` — an emoji or single letter for now (e.g. '🥘'); swap for an `<img>` later.
- `colors.primary` — buttons/accents; `ink` — text; `bg` — page background.
- `searchPlaceholder`, `searchButton`, `emptyHint` — the words on the magic-moment
  screen. Make these speak the founder's domain ("eggs, rice, onion…" not "Search…").

Keep it to this one file. Don't restyle components — the colour + copy carry it.

## Colour & vibe guidance

- Pick **one** primary colour; the template derives the rest. Hex like `#00BA6E`.
- Map vibe → choices: warm/friendly = rounded, soft colour; sharp/techy = high
  contrast, cooler colour; bold/playful = saturated; calm/minimal = muted + lots of
  whitespace. Vibe mostly affects the primary colour and the copy tone, not layout.

## Logo options

- **Emoji/letter mark** (default) — instant, no asset needed. Great for a demo.
- **Image** — if they have one, note to drop it in `apps/web/public/` and point
  `logo` at it later; don't block the build on a logo.

## Hand-off to /5-build

Write a clear data model summary that `/5-build` can execute without ambiguity:
- **Resource name**: what `items` becomes (e.g. `recipes`, `listings`, `sessions`)
- **Field mapping** to the template's schema:
  | Template field | Founder's concept |
  |---|---|
  | `title` | the record headline (e.g. "Recipe name") |
  | `blurb` | the one-liner on the card (e.g. "Short description") |
  | `tags` | comma-separated categories (e.g. "Cuisine type") |
  | `body` | full text in the detail view (e.g. "Instructions") |
  | *(extra)* | any additional columns (e.g. `prep_time`, `price`, `location`) |
- `/5-build` will rename the table, columns, SQL queries, and all three component
  files (`Card.jsx`, `Detail.jsx`, `AddForm.jsx`) from this spec.
