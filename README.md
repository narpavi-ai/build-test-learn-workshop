# Founder Starter Kit 🚀

A tiny, **brandable** full-stack app you build your idea into during the
*Build It, Show It* workshop (Edmonton Unlimited · Student Founders Launch).

It's already a real round-trip: **React UI → Express API → SQLite database**.
Your job is to make it *yours* — rename the resource, swap the seed data, set
your brand, and ship the one screen that proves your idea.

> This repo is also a **harness**: a set of `/` skills that walk you from a raw
> idea to a clickable demo. See [the harness](#the-harness-skills) below.

---

## Run it (two commands)

```bash
npm install      # installs both workspaces (web + api) + better-sqlite3
npm run dev      # starts the API and the web app together
```

| App | URL | What it does |
| --- | --- | --- |
| **Web** (React + Vite) | http://localhost:5173 | The screen you click |
| **API** (Express + SQLite) | http://localhost:3001 | `/api/items`, `/api/health` |

The database (`apps/api/data/app.db`) is created and seeded automatically on
first run, so the app is never blank. Re-seed any time with `npm run seed`.

**Prerequisites:** Node.js 18+ (`node --version`). No accounts, no API keys.

---

## What's inside

```
founder-starter-kit/
├─ package.json            # npm workspaces + `npm run dev`
├─ apps/
│  ├─ web/                 # React + Vite front-end
│  │  └─ src/
│  │     ├─ App.jsx        # THE screen: search → results grid → detail
│  │     ├─ brand.js       # 🎨 your name, tagline, logo, colours (edit this!)
│  │     ├─ api.js         # fetch wrapper for the API
│  │     ├─ styles.css
│  │     └─ components/    # Card.jsx, Detail.jsx
│  └─ api/                 # Node + Express back-end
│     ├─ server.js         # routes + first-run auto-seed
│     └─ src/
│        ├─ db.js          # SQLite connection + schema (your data model)
│        ├─ items.js       # GET/POST routes (+ real-data hook)
│        ├─ seed.js        # seed runner
│        └─ data/seed-items.js   # the believable demo data
└─ .claude/skills/         # the harness (see below)
```

## Make it yours (4 edits)

1. **Brand** → `apps/web/src/brand.js` — name, tagline, logo, colours.
2. **Data model** → `apps/api/src/db.js` — rename `items` and its columns.
3. **Demo data** → `apps/api/src/data/seed-items.js` — 5–6 believable rows.
4. **Words on the screen** → `apps/web/src/App.jsx` — labels and copy.

That's the whole MVP. Everything else is a distraction until a real user needs it.

---

## The harness (skills)

Type these in Claude Code to walk your idea from problem to demo. Each one
**interviews you**, does the work, and saves a branded HTML record of your
inputs and outputs into `workshop/`.

```
/1-problem        → who hurts and why          → workshop/01-problem.html
/2-spec           → the tight build brief       → workshop/02-spec.html
   ├─ /3a-lovable        → no-code build prompts (the hands-on route)
   └─ /3b-scope-design   → the one screen + brand (the Claude Code route)
        → /4-build         → build it into THIS template
        → /5-test-iterate  → make it work, capture learnings
```

After `/2-spec` the path forks: build it in **Lovable** (no-code) *or* build it
right here in this **starter template** with Claude Code. Both are valid demos.
The number prefixes keep the stages in order in the `/` menu.

---

## When this becomes "real"

`apps/api/src/items.js` has a **real-data hook** comment. When you outgrow the
local SQLite seed, that's the only place that changes — swap it for a real API,
an LLM, or a hosted database. The routes and the entire front-end stay the same.

```bash
# turn this into your own GitHub repo
git init && git add . && git commit -m "my idea, starter build"
gh repo create my-idea --public --source=. --push
```

Stay founder-light. Build the next rung only when a real user is waiting on it.
