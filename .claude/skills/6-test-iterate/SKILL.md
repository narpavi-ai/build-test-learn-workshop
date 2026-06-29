---
name: 6-test-iterate
description: Final stage of the Build It, Show It workshop — walks the demo path to make it work and believable, fixes what breaks, and captures learnings to feed the next idea. Works for both the Lovable and starter-template routes. Use after /5-build or /4a-lovable, or when the user types /6-test-iterate.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Bash(npm *), Bash(curl *), Bash(mkdir *), Bash(cp *)
---

# Stage 6 — Test & Iterate (the Build → Test → Learn loop)

Goal: make the demo **work** and **believable**, then write down what you learned.
This is where "Learn" lives. Read `.claude/skills/shared/HARNESS.md` first. For
how to define "working", make data believable, ship the demo, and run the
learnings loop, read `reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run and read the most recent build artifact
(`workshop/runs/<slug>/05-build.html` or `04a-lovable.html`) so you know what was
built and which route this is.

## Beat 1 — The loop

Run this loop with the founder until the demo path is clean:

```
- [ ] Define "working": the exact path your audience will click
- [ ] Walk that path yourself (type input → see results → open detail)
- [ ] Note what breaks or looks fake
- [ ] Fix the top issue (or re-prompt, on the Lovable route)
- [ ] Walk it again
```

For the starter-template route, run `npm run dev` and actually click through /
curl the endpoints. For the Lovable route, walk it in the Lovable preview.

## Beat 2 — Make it believable

- **Seed data that feels real** — 5–6 records with real titles/times/steps, not
  "lorem ipsum". On the template route, edit `apps/api/src/data/seed-items.js`
  and re-run `npm run seed`.
- **Handle the empty + loading states** so nothing looks broken on stage.
- **Walk the exact 2-minute demo path** one last time.

## Beat 3 — Capture learnings & save

Ask the founder (use the **AskUserQuestion** tool):
1. What surprised you while building this?
2. What would you change about the idea now that you've seen it work?
3. What's the next smallest thing a real user would need?

Save to `workshop/runs/<slug>/06-test-iterate.html` (icon 🧪, stage 6, label
"Test & Iterate"): the demo path + issues found in Inputs; the fixes, the
believable-data notes, and a short **Learnings** list in Outputs (these feed your
next `/1-problem`).

Then close the loop: the founder has something clickable. Point them to ship it
(publish in Lovable, or `npm run build` + host the template) for Demo Night.
