# The Build It, Show It harness — shared conventions

All six workshop skills share these rules. Each SKILL.md links here for the
artifact-saving step so the instructions stay DRY.

## The flow

```
/problem → /spec → ┬─ /lovable                    (no-code route)
                   └─ /scope-design → /build ⇄ /test-iterate   (Claude Code route)
```

Each stage reads the previous stage's artifact and builds on it. Never re-ask
something an earlier artifact already answers — read it first.

## How every skill works (three beats)

1. **Interview** — ask the founder ONE question at a time (or a tight batch).
   Ask only what AI can't decide for them. Wait for answers; don't invent them.
2. **Do the work** — produce the artifact/code from their answers.
3. **Show it back** — summarize what you wrote and where, then point to the
   next skill in the flow.

The founder is the author; AI does the typing.

## Saving artifacts (do this at the end of every skill)

Save BOTH the inputs (interview answers) and outputs (what you produced) as one
Edmonton-Unlimited-branded HTML file.

1. Ensure the output dir exists and has the stylesheet:
   - `mkdir -p workshop/assets`
   - If `workshop/assets/eu-brand.css` is missing, copy it:
     `cp .claude/skills/shared/eu-brand.css workshop/assets/eu-brand.css`
2. Read `.claude/skills/shared/artifact-template.html`, replace every `{{TOKEN}}`,
   and write to `workshop/<NN>-<stage>.html` using the numbering below.
3. Create or update `workshop/index.html` (dashboard) so the new artifact is
   linked. Use the `.deck`/`a.tile` markup from eu-brand.css; mark stages not
   yet done with `class="tile todo"`.

### File numbering & icons

| Skill | File | Stage label | Icon |
| --- | --- | --- | --- |
| problem | `workshop/01-problem.html` | Problem | 🎯 |
| spec | `workshop/02-spec.html` | Spec | 💬 |
| lovable | `workshop/03a-lovable.html` | Build · Lovable | ✦ |
| scope-design | `workshop/03b-scope-design.html` | Scope & Design | ✂ |
| build | `workshop/04-build.html` | Build | 🔧 |
| test-iterate | `workshop/05-test-iterate.html` | Test & Iterate | 🧪 |

Use `$ARGUMENTS` (if provided) as the project name; otherwise read it from the
most recent artifact, or ask. Keep the same project name across all artifacts.

## Tone

Talk to a smart, busy student founder who is not a developer. Plain words, no
jargon, encouraging. Keep momentum — the goal is something clickable tonight.
