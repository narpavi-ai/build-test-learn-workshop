# Stage 4 — Test & Iterate · founder guidance

The SKILL.md has the beats. This is the depth on what "working" means, the
fix-inline vs back-to-build call, making it believable, and shipping.

## Why this stage is the point

"Build" gets you something on screen; this stage gets you something a stranger
can *click* without you narrating excuses. On Demo Night nobody sees your code —
they see the two minutes they click through. This is also where "Learn"
happens: you've now *seen* the idea working, so your opinions about it are
worth more than they were this morning.

## Define "working" before you test

"Working" is not "no errors" — it's **the exact path from the blueprint's demo
script**, end to end, looking believable. Test against that target, not by
poking around at random.

## Fix inline vs. back to /3-build

| Symptom | Call |
|---|---|
| Typo, awkward copy, ugly spacing | Fix inline |
| Missing loading/empty state | Fix inline |
| A small bug in existing logic | Fix inline |
| Seed data looks fake | Fix inline |
| "It'd be great if it also did X" | Back to `/3-build` (update the blueprint first) |
| A Should-have needs to become a Must for the demo | Back to `/3-build` |
| The data model is missing a field the demo needs | Back to `/3-build` |

The line: does this change *what* the blueprint says the app does, or just
*how well* it does what's already there? The former goes back to build; the
latter is fixed here. Walk → note the single worst thing → fix only that →
walk again — small, repeated passes keep the app booting and stop a
the-night-before rewrite spiral.

## Make it believable

- **Real-looking data beats more data.** 5–6 hand-written records with
  realistic titles, times, and full body text sell it; 50 rows of "lorem ipsum"
  kill it. Edit `apps/api/src/data/seed-items.js`, then `npm run seed`.
- **Empty + loading states** — the screen should never look broken before
  results arrive or when a search finds nothing. Friendly copy, not a blank box.
- **Trim, don't add.** If something half-works, cutting it is a valid fix for a demo.

## Ship it — three options, in order of effort

1. **Localhost** — `npm run dev`, rehearse the click path. Zero setup, works
   every time, totally legitimate for Demo Night if that's all the evening allows.
2. **Temporary tunnel** — share a live URL without deploying anything:
   ```bash
   npx localtunnel --port 5173
   # or: npx cloudflared tunnel --url http://localhost:5173
   ```
   Good for sending a link to a friend to test before Demo Night, or if judges
   want to click it themselves from their own laptop.
3. **A real host** — for something that outlives tonight:
   ```bash
   npm run build            # apps/web/dist — static assets
   ```
   Serve `dist/` from the Express app (add `express.static('../web/dist')` and a
   catch-all route in `server.js`), then deploy `apps/api` as one Node service
   on a free host (Render, Railway, Fly.io). SQLite lives on the same disk as
   the process — fine for a demo; note in `apps/README.md` that data resets on
   redeploy since `npm run seed` re-runs on boot.

## Capture learnings (these feed the next /1-problem)

The three questions aren't busywork — they're the founder's loop:
- *What surprised you?* → usually a hidden assumption.
- *What would you change?* → a sharper version of the idea.
- *Next smallest thing a real user needs?* → the next build, scoped small.
Write them down; they seed the next idea or the next iteration.
