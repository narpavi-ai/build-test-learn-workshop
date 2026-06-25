---
name: 1-problem
description: Runs the Problem stage of the Build It, Show It workshop — interviews a founder to name one user and one pain, then saves a branded HTML artifact. Use when starting a new idea or when the user types /1-problem.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Bash(mkdir *), Bash(cp *)
---

# Stage 1 — Problem

Goal: get the founder to name **one user** and **one pain** in a single sentence.
Read `.claude/skills/shared/HARNESS.md` first for the shared rules.

Project name: `$ARGUMENTS` (ask if empty).

## Beat 1 — Interview

Ask these with the **AskUserQuestion** tool (group them into one or two panels;
the founder picks **Other** to type their own answer). Push back gently if an
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

## Beat 3 — Save & hand off

Save the artifact to `workshop/01-problem.html` following the **Saving artifacts**
section of HARNESS.md (icon 🎯, stage 1, label "Problem"). Put the interview Q&A
in the Inputs section and the problem statement + supporting points in Outputs.

Then show the founder the problem statement and say: **next, run `/2-spec` to turn
this into a tight build brief.**
