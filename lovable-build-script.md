# FridgeChef — Lovable Live-Build Script

**Workshop:** Build It, Show It — Rapid Prototyping with AI · Edmonton Unlimited, Student Founders Launch
**What this is:** the exact prompts I paste into [Lovable](https://lovable.dev) to build a clickable **FridgeChef** live — type the ingredients you have, get recipe cards back. Use it as a handout and adapt it to your own idea.

---

## Before you start (30 seconds)

- Sign in to Lovable (free tier).
- **Free tier = ~5 credits/day.** Each prompt below is one credit, so we have room for ~3–4 prompts plus a fix. **Don't debug in circles** — if something's off, re-prompt clearly (see fixes) rather than nudging it five times.
- The plan: **one screen, fake data, no accounts, no second page.** That's a demo, and a demo is enough.
- Keep the four prompts below in a notes file so you can paste them fast.

---

## Prompt 1 — Scaffold the one screen

> Build a single-page web app called **FridgeChef**. Audience: a busy student who wants to cook with what's already in their fridge.
>
> The page has, top to bottom:
> 1. A header with the app name "FridgeChef" and a one-line tagline: "Tell me what's in your fridge, I'll tell you what to cook."
> 2. A text input where the user types ingredients separated by commas (placeholder: "e.g. eggs, spinach, cheese, bread"), plus a green **"Find recipes"** button next to it.
> 3. An empty results area below with a friendly empty-state message: "Add a few ingredients to see what you can make."
>
> Use a clean, modern, friendly style: rounded cards, lots of whitespace, a fresh green-and-white palette, a readable sans-serif font. Make it look good on a laptop and a phone. Don't add login, navigation, or any other pages.

*Produces:* the FridgeChef shell — header, ingredient input, "Find recipes" button, and an empty results area. No data yet.
*If it breaks live:* if the layout looks cramped or off-brand, re-run with one added line — *"Center the content in a max-width 720px column and add more padding."* Don't tweak colors by hand; describe the look and let it regenerate.

---

## Prompt 2 — Add fake recipe data + show results

> Add a built-in list of **8 fake recipes** directly in the app (no backend, no API). Each recipe has: a name, a short one-line description, a cook time in minutes, a difficulty (Easy/Medium), an ingredients list, and 3–4 short cooking steps.
>
> Make them realistic and varied for a student, e.g.: Cheesy Scrambled Eggs, Spinach & Feta Omelette, Grilled Cheese, Tomato Pasta, Veggie Fried Rice, Banana Oat Pancakes, Garlic Butter Noodles, Loaded Quesadilla.
>
> When the user types ingredients and clicks **Find recipes**, show the recipes whose ingredients best overlap with what they typed, as a responsive grid of cards. Each card shows the name, description, cook time, and difficulty. If nothing matches well, show the 3 quickest recipes anyway with a note: "Nothing matched exactly — here are some quick ideas."

*Produces:* a working ingredients-in → recipe-cards-out flow, driven entirely by fake in-app data. This is the magic moment.
*If it breaks live:* if matching feels random, re-prompt — *"Rank recipes by how many of the typed ingredients they contain, most matches first."* If the cards look plain, add — *"Give each card a subtle shadow, rounded corners, and a small colored difficulty badge."*

---

## Prompt 3 — Recipe detail view

> When a user clicks a recipe card, open a detail view (a modal or an expanded panel) showing the recipe name, cook time, difficulty, the full ingredients list, and the numbered cooking steps. Add a clear **"← Back to results"** button that returns them to the grid without losing their search. Keep it on the same page — don't create a separate route.

*Produces:* a clickable card → full recipe → back flow. Now the demo has depth: search, browse, drill in.
*If it breaks live:* if clicking does nothing, re-prompt — *"Make the whole recipe card clickable to open its detail view."* If the back button loses the results, add — *"Keep the search results in state so Back returns to the same grid."*

---

## Prompt 4 — Polish for the demo (optional, save a credit for this)

> Tighten the look for a live demo: add a little emoji/icon to the header, make the "Find recipes" button satisfying to click (hover state), add 2–3 example ingredient "chips" under the input that fill the box when tapped (e.g. "eggs, cheese", "pasta, tomato", "banana, oats"), and make sure everything is comfortably readable on a phone. Don't add any new features or pages.

*Produces:* example chips for a smooth live demo (no typing fumbles on stage), nicer button feedback, mobile-ready polish.
*If it breaks live:* if a chip overwrites typed text unexpectedly, re-prompt — *"Tapping an example chip should replace the input with that example's ingredients."* If you're low on credits, **skip this prompt** — Prompts 1–3 are a complete demo on their own.

---

## When you publish

- Click **Publish** in Lovable to get a public URL.
- Open that URL **on your phone** before Demo Night — if it works for a stranger, it works for the judges.
- Optional: connect a custom domain so it reads as a real product.

## Reality check for the free tier

| Do | Don't |
| --- | --- |
| One screen, fake data | Add login / multiple pages |
| 3–4 clear, complete prompts | Send 10 tiny "nudge" prompts |
| Re-prompt to fix | Hand-edit and fight the tool |
| Publish a URL | Wait until it's "perfect" |

> Want the *real* version — a true front-end → back-end → data round-trip instead of faked data? That's the FridgeChef monorepo in this repo (`apps/web` + `apps/api`), built in Claude Code. See the README.
