---
name: 1-problem
description: Front door of the Build It, Show It workshop — takes a founder's idea (plus any discovery notes), pins down one user and one pain, creates the run folder, and saves a branded HTML artifact. Use when starting a new idea or when the user types /1-problem.
disable-model-invocation: true
argument-hint: [idea + any discovery notes]
allowed-tools: Read, Write, Bash(ls *), Bash(mkdir *), Bash(cp *)
---

# Stage 1 — Problem

Goal: get the founder to name **one user** and **one pain** in a single sentence.
This is the **front door** — it also sets up where the whole run is saved.
Read `.claude/skills/shared/HARNESS.md` first for the shared rules. For deeper
guidance (how to pick one user, pain types, the Kora example, common
mistakes), read `reference.md` in this folder.

## Beat 0 — Take the idea & open the run folder

`$ARGUMENTS` is the founder's **idea plus any discovery notes** (free text).

**First, check the drop zone.** `ls workshop/inputs/` — if the founder dropped any
files there (a problem statement, discovery notes, a survey export), `Read` them
and treat them as discovery notes alongside `$ARGUMENTS`. If both the drop zone and
`$ARGUMENTS` are empty, ask for one sentence on the idea.

1. From the idea, pick a short **working project name** and derive a kebab-case
   `<slug>` (e.g. "Study Buddy" → `study-buddy`). **Say it out loud and flag it as a
   placeholder** — e.g. "I'll file this under `study-buddy` as a working folder name;
   you'll pick the real product name at the blueprint stage (`/2-blueprint`)." If
   the founder offers a name, use theirs; if they don't like the placeholder, swap
   it in one step. Don't make naming a gate — the real brand is locked at the
   blueprint stage, not here.
2. Create the run folder and ensure shared assets exist (see HARNESS.md "Saving"):
   `mkdir -p workshop/runs/<slug> workshop/assets`, then copy the brand CSS + logo
   if missing.
3. **Mine the notes first.** Anything the discovery notes already answer, don't
   re-ask — pre-fill it and just confirm.

## Beat 1 — Interview

Ask what's still missing with the **AskUserQuestion** tool (group into one or two
panels; the founder picks **Other** to type their own). Push back gently if an
answer is vague ("everyone" is not a user).

1. In one sentence, what's the idea?
2. Who *exactly* feels this pain? Name one person or role — not "everyone".
3. What do they do **today** instead? (the current workaround)
4. Why does that hurt them — time, money, or stress?
5. Why now — what makes this worth solving today?

## Beat 2 — Do the work

Write a tight problem statement in this shape:

> **[user]** struggles to **[pain]** because **[reason]**. Today they **[workaround]**, which costs them **[time/money/stress]**.

Then add 2–3 supporting points: who the person is, the moment the pain hits, and
what "solved" would feel like. Keep it concrete and free of jargon.

**Add a problem-flow diagram.** Include a simple visual that maps the pain so a
stranger gets it at a glance. Use the shared `.flow-diagram` markup (styled in
`eu-brand.css`): four nodes — **User → Pain → Workaround → Cost** (mark the Cost
node `class="node cost"`). Fill each with the founder's own words. Example:

```html
<div class="flow-diagram">
  <div class="node"><div class="nlabel">User</div><div class="nbody">…</div></div>
  <div class="arrow">→</div>
  <div class="node"><div class="nlabel">Pain</div><div class="nbody">…</div></div>
  <div class="arrow">→</div>
  <div class="node"><div class="nlabel">Workaround today</div><div class="nbody">…</div></div>
  <div class="arrow">→</div>
  <div class="node cost"><div class="nlabel">What it costs</div><div class="nbody">…</div></div>
</div>
```

## Beat 3 — Save & hand off

Save the artifact to `workshop/runs/<slug>/01-problem.html` following the **Saving
artifacts** section of HARNESS.md (icon 🎯, stage 1, label "Problem"). Put the
interview Q&A in the Inputs section and the problem statement + supporting points
in Outputs.

Then show the founder the problem statement and say: **next, run `/2-blueprint`**
to turn this into your build plan, market read, and brand — one stage, mostly
auto-generated from what you just told me.
