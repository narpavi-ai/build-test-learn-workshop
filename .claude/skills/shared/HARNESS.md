# The Build It, Show It harness — shared conventions

All seven workshop skills share these rules. Each SKILL.md links here for the
artifact-saving step so the instructions stay DRY.

## The flow

```
/1-problem → /2-spec → /3-opportunity → ┬─ /4a-lovable                       (no-code route)
                                          └─ /4b-scope-design → /5-build ⇄ /6-test-iterate
```

Why this order: **Problem** names who hurts. **Spec** cuts it to one buildable
screen — so by **Opportunity** the founder is sizing the *actual* product, not a
vague idea, which makes the competitor read and the market story sharp enough to
build with and pitch on Demo Night. Stage 3 then forks into the two build routes.

Each stage reads the previous stages' artifacts and builds on them. Never re-ask
something an earlier artifact already answers — read it first.

## The run folder (where artifacts are saved)

Every founder's run lives in its own folder so two ideas never overwrite each
other: **`workshop/runs/<slug>/`**, where `<slug>` is the project name in
kebab-case (e.g. "FridgeChef" → `fridgechef`, "Study Buddy" → `study-buddy`).

- **`/1-problem` is the front door.** It takes the idea (+ any discovery notes)
  as its argument, derives `<slug>`, creates `workshop/runs/<slug>/`, and saves the
  first artifact there.
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
| /2-spec | `02-spec.html` | Spec | 💬 |
| /3-opportunity | `03-opportunity.html` | Opportunity | 📊 |
| /4a-lovable | `04a-lovable.html` | Build · Lovable | ✦ |
| /4b-scope-design | `04b-scope-design.html` | Scope & Design | ✂ |
| /5-build | `05-build.html` | Build | 🔧 |
| /6-test-iterate | `06-test-iterate.html` | Test & Iterate | 🧪 |

Use `$ARGUMENTS` (if provided) as the project name; otherwise read it from the
most recent artifact, or ask. Keep the same project name (and `<slug>`) across all
artifacts in a run.

## Tone

Talk to a smart, busy student founder who is not a developer. Plain words, no
jargon, encouraging. Keep momentum — the goal is something clickable tonight.
