# FridgeChef 🍳 — the "done properly" full build

Type the few ingredients you actually have → get recipes you can cook tonight.

This is the **Claude Code level-up showcase** for the *Build It, Show It — Rapid
Prototyping with AI* workshop (Edmonton Unlimited · Student Founders Launch). It
demonstrates a **real front-end → back-end → data round-trip** — the thing the
Lovable live build only fakes.

> The same idea exists three ways in this repo:
> - **`deck.html`** — the workshop slide deck.
> - **`lovable-build-script.md`** — prompts to build a *faked-data* FridgeChef live on Lovable.
> - **this monorepo** — the *real* version: React UI calling a Node API over seeded data.

---

## What's inside

```
fridgechef/
├─ package.json          # npm workspaces + `npm run dev` (runs both apps)
├─ apps/
│  ├─ web/               # React + Vite front-end
│  │  ├─ index.html
│  │  ├─ vite.config.js  # proxies /api -> localhost:3001 in dev
│  │  └─ src/
│  │     ├─ App.jsx              # the one screen: input → results → detail
│  │     ├─ api.js               # fetch wrapper for POST /api/recipes
│  │     ├─ styles.css
│  │     └─ components/
│  │        ├─ RecipeCard.jsx
│  │        └─ RecipeDetail.jsx
│  └─ api/               # Node.js + Express back-end
│     ├─ server.js
│     └─ src/
│        ├─ recipes.js           # POST /api/recipes  (+ real-data hook)
│        ├─ match.js             # ranks recipes by ingredient overlap
│        └─ data/
│           └─ seed-recipes.js   # the seeded "fake data" — cleanly separated
```

---

## Prerequisites

- **Node.js 18+** (check with `node --version`)
- **npm** (ships with Node)

No API keys, no database, no `.env` — it runs fully local on seeded data.

## Run it (one command)

```bash
npm install      # installs both workspaces + concurrently
npm run dev      # starts the API and the web app together
```

Then open the web app:

| App | URL | What it does |
| --- | --- | --- |
| **Web** (React + Vite) | http://localhost:5173 | The FridgeChef UI you click |
| **API** (Express)      | http://localhost:3001 | `POST /api/recipes`, `GET /api/health` |

Type ingredients like `eggs, cheese, spinach` and hit **Find recipes**, or tap an
example chip. Click a card to open the full recipe, then **Back to results**.

Run them separately if you prefer: `npm run dev:api` and `npm run dev:web`.

### Try the API directly

```bash
curl -X POST http://localhost:3001/api/recipes \
  -H "Content-Type: application/json" \
  -d '{"ingredients":"eggs, cheese, spinach"}'
```

---

## How it maps to the workshop stages (the SDLC spine)

| Stage | Where it lives in this repo |
| --- | --- |
| **1. Problem** | The reason FridgeChef exists — stated in `deck.html` & this README. |
| **2. Spec** | The shape of `POST /api/recipes` (ingredients in → ranked recipes out) is the spec, made concrete. |
| **3. Scope & Design** | One screen only (`App.jsx`): input → results grid → detail. No accounts, no saving. |
| **4. Just-enough tech** | Front-end (`apps/web`) vs. data behind it (`apps/api`) — the exact split the deck teaches. |
| **5. Build** | The whole monorepo. The Lovable script fakes the data; here it's a real round-trip. |
| **6. Test & iterate** | `match.js` is a pure function (easy to test); `seed-recipes.js` is believable demo data. |
| **7. Ship** | `npm run build -w apps/web` produces a static front-end you can host anywhere. |
| **8. Scale** | The **real-data hook** in `apps/api/src/recipes.js` — swap the seed for a recipe API or an LLM without touching the UI. |

---

## Where this becomes "real"

`apps/api/src/recipes.js` has one function, `getRecipes()`, that today returns the
local seed. It's commented with two drop-in options — call a real recipe API, or
have an LLM (e.g. Anthropic's Claude) generate recipes. **The route, the matching
logic, and the entire front-end stay exactly the same.** That's the point: the
architecture is already right; only the data source changes.

## From Lovable → GitHub → Claude Code (the ladder)

1. Build the quick version in **Lovable** (faked data, one screen).
2. **Push it to GitHub** — now you own the code; nothing is locked into one tool.
3. **Open the repo in Claude Code** and ask it to restructure into a real
   front-end + back-end (this monorepo is what that looks like).
4. When a real user needs it, climb the next rung: a real backend (e.g. Supabase)
   and payments (e.g. Stripe) — only when you actually need them.

```bash
# turn this into your own GitHub repo
git init
git add .
git commit -m "FridgeChef full build"
gh repo create fridgechef --public --source=. --push
```

Stay founder-light. Build the next rung only when a real user is waiting on it.
