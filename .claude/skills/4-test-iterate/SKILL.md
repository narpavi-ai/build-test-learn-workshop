---
name: 4-test-iterate
description: Final stage of the Build It, Show It workshop — walks the 2-minute demo path against the blueprint, runs a tight fix-inline vs back-to-build loop, gets the demo shippable (a URL or clean localhost), and captures learnings. Use after /3-build or when the user types /4-test-iterate.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Bash(npm *), Bash(npx *), Bash(curl *), Bash(mkdir *), Bash(cp *)
---

# Stage 4 — Test & Iterate (the Build → Test → Learn loop)

Goal: make the demo **work** and **believable**, ship it somewhere shareable,
then write down what you learned. This is where "Learn" lives. Read
`.claude/skills/shared/HARNESS.md` first. For the fix-inline vs back-to-build
decision table, believability guidance, and the ship recipes, read
`reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run and read `workshop/runs/<slug>/03-build.html` and
`02-blueprint.html`. The blueprint's 2-minute demo script **is** the test plan.

## Beat 1 — The loop, with a clear fork

Walk the demo script yourself (`npm run dev`, click through, `curl` the
endpoints). Note everything broken or fake-looking, worst first. For each issue,
decide:

- **Fix inline, right here** — copy, seed data, styling, a small bug, a missing
  empty/loading state — anything that doesn't add a feature and takes roughly
  15 minutes or less.
- **Go back to `/3-build`** — a new feature, promoting a Should to a Must, or a
  data-model change. Anything that changes what the blueprint says. `/3-build`
  is re-runnable: it re-reads the (now-updated) blueprint and `apps/README.md`
  and continues from there — this is what the `⇄` in the workshop flow means,
  not "start the build over."

Re-walk the demo script after every fix. Two or three passes usually gets a
clean path.

## Beat 2 — Make it believable

- **Seed data that feels real** — 5–6 records with real titles/numbers, not
  "lorem ipsum." Edit `apps/api/src/data/seed-items.js`, then `npm run seed`.
- **Empty + loading states** — nothing should look broken before results arrive.
- **Trim, don't add** — if something half-works, cutting it is a valid fix.
- Walk the exact demo script one last time.

## Beat 3 — Ship it

Get the founder something more shareable than "trust me, it works on my
laptop":
1. **Demo from localhost** — a legitimate default for Demo Night; rehearse the
   exact script so it's smooth live.
2. **Share a temporary URL** — tunnel localhost with `npx localtunnel --port 5173`
   or similar; no accounts needed, works the same night.
3. **Host it properly** — `npm run build` + serve `dist/` from the Express app,
   deployed as one Node service on a free host. Recipes in `reference.md`.

## Beat 4 — Capture learnings & save

Ask the founder (**AskUserQuestion**):
1. What surprised you while building this?
2. What would you change about the idea now that you've seen it work?
3. What's the next smallest thing a real user would need?

Save to `workshop/runs/<slug>/04-test-iterate.html` (icon 🧪, stage 4, label
"Test & Iterate"): the demo path + issues found in Inputs; the fixes, any
back-to-build bounces, the believable-data notes, ship link, and a **Learnings**
list in Outputs (these feed the founder's next `/1-problem`). Update
`apps/README.md`'s status line to reflect where the app landed.

Then close the loop: the founder has something clickable and shareable, ready
for Demo Night.
