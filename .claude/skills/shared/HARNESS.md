# The Build It, Show It harness — shared conventions

All four workshop skills share these rules. Each SKILL.md links here for the
artifact-saving step so the instructions stay DRY.

## The flow

```
/1-problem → /2-blueprint → /3-build ⇄ /4-test-iterate
```

Why this order: **Problem** names who hurts. **Blueprint** turns that into a
build-ready spec — the MVP, a MoSCoW backlog, the market read, and the brand —
in one mostly auto-generated stage, so the founder answers only what AI can't
decide. The blueprint becomes the **single source of truth**: **Build** builds
against it and checks its work against it, and **Test & Iterate** tests the
demo script it defines. If a build session needs something the blueprint
doesn't cover, the blueprint gets updated, not skipped — that's what the `⇄`
between Build and Test & Iterate means: another focused build session picking
up the updated blueprint, not starting over.

Each stage reads the previous stages' artifacts and builds on them. Never re-ask
something an earlier artifact already answers — read it first. The blueprint
stage in particular asks at most 4 questions total and drafts the rest for the
founder to correct — speed comes from inference, not from skipping steps.

## The run folder (where artifacts are saved)

Every founder's run lives in its own folder so two ideas never overwrite each
other: **`workshop/runs/<slug>/`**, where `<slug>` is the project name in
kebab-case (e.g. "Kora" → `kora`, "Study Buddy" → `study-buddy`).

- **`/1-problem` is the front door.** It takes the idea (+ any discovery notes)
  as its argument, derives `<slug>`, creates `workshop/runs/<slug>/`, and saves the
  first artifact there.
- **The inputs drop zone — `workshop/inputs/`.** Founders can drop raw notes (a
  problem statement, discovery notes, a survey/data export) here *before* running
  anything; `/1-problem` reads whatever it finds and pre-fills the interview. It's
  a shared, gitignored drop zone (only its README is tracked), so it stays local
  and should be cleared between ideas. See `workshop/inputs/README.md`.
- **Later skills resolve the active run** by: using `$ARGUMENTS` if it names a
  project/slug; otherwise the **most-recently-modified** folder under
  `workshop/runs/`. Read prior artifacts from that same folder.
- The brand stylesheet is shared across all runs at **`workshop/assets/eu-brand.css`**
  and linked from each artifact as **`../../assets/eu-brand.css`**.

## How every skill works (three beats)

1. **Interview** — ask with the `AskUserQuestion` tool so the founder gets the
   interactive picker (not a wall of text). Group 2–4 related questions per panel.
   For each, offer 2–4 sensible options when it helps them decide; the built-in
   **Other** choice lets them type a free-text answer — use it for open prompts
   like their one-sentence idea. Ask only what AI can't decide for them; never
   invent answers.
2. **Do the work** — produce the artifact/code from their answers.
3. **Show it back** — summarize what you wrote and where, then point to the
   next skill in the flow.

The founder is the author; AI does the typing.

## Saving artifacts (do this at the end of every skill)

Save BOTH the inputs (interview answers) and outputs (what you produced) as one
Edmonton-Unlimited-branded HTML file inside the run folder.

1. Ensure the shared assets exist (once per workspace):
   - `mkdir -p workshop/assets workshop/runs/<slug>`
   - If any are missing, copy them from `.claude/skills/shared/`:
     `cp .claude/skills/shared/eu-brand.css workshop/assets/eu-brand.css`
     `cp .claude/skills/shared/eu-logo-navy.svg workshop/assets/eu-logo-navy.svg`
2. Read `.claude/skills/shared/artifact-template.html`, replace every `{{TOKEN}}`,
   and write to `workshop/runs/<slug>/<NN>-<stage>.html` using the numbering below.
3. Create or update `workshop/index.html` (the dashboard) so the new artifact is
   linked under the active run. Use the `.deck`/`a.tile` markup from eu-brand.css;
   mark stages not yet done with `class="tile todo"`.

### File numbering & icons

| Skill | File (in `workshop/runs/<slug>/`) | Stage label | Icon |
| --- | --- | --- | --- |
| /1-problem | `01-problem.html` | Problem | 🎯 |
| /2-blueprint | `02-blueprint.html` | Blueprint | 📐 |
| /3-build | `03-build.html` | Build | 🔧 |
| /4-test-iterate | `04-test-iterate.html` | Test & Iterate | 🧪 |

Use `$ARGUMENTS` (if provided) as the project name; otherwise read it from the
most recent artifact, or ask. Keep the same project name (and `<slug>`) across all
artifacts in a run.

## Tone

Talk to a smart, busy student founder who is not a developer. Plain words, no
jargon, encouraging. Keep momentum — the goal is something clickable tonight.
