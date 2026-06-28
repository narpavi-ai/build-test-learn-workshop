---
name: 5-build
description: Route B of the Build It, Show It workshop — wires the founder's chosen feature(s) — the MVP first, plus any backlog items they pick — into the React + Express + SQLite starter template (renames the resource, swaps the seed, adjusts the UI), then saves a branded HTML artifact. Use after /4b-scope-design or when the user types /5-build.
disable-model-invocation: true
argument-hint: [project name]
allowed-tools: Read, Write, Edit, Bash(npm *), Bash(curl *), Bash(mkdir *), Bash(cp *)
---

# Stage 5 — Build (into the starter template)

Goal: make the starter template *be* the founder's app — a real round-trip for
their one screen. Read `.claude/skills/shared/HARNESS.md` first. For the
starter-template file map, the real-data hook, and common errors (port busy,
re-seed), read `reference.md` in this folder.

## Beat 0 — Load context

Resolve the active run and read `workshop/runs/<slug>/04b-scope-design.html` and
`02-spec.html`. Read `apps/web/src/brand.js` and note the `shape` field —
it tells you which template is active and which component files to edit:

| `brand.shape` | Active components (in `apps/web/src/components/`) |
|---|---|
| `search` | `Card.jsx`, `Detail.jsx`, `AddForm.jsx` |
| `tool` | `ToolForm.jsx`, `ToolOutput.jsx` |
| `dashboard` | `StatCard.jsx`, `DataTable.jsx` |

## Beat 1 — Confirm the build (short)

Read the spec's MVP + product backlog and the scope chosen in `/4b`. Ask with the
**AskUserQuestion** tool:

1. What do we build this session — the **MVP only**, the **MVP + a backlog item or
   two**, or **scaffold all**? (Default: the MVP first.)
2. Confirm the resource name (e.g. `items` → `recipes`, `transactions`, `listings`).
3. Confirm the fields each record needs (keep it to what the built feature(s) show).

## Beat 2 — Do the work

Wire the data model through the whole stack, one file at a time:

1. **`apps/api/src/db.js`** — rename the table (`items` → your resource) and every
   column to match the data model from Beat 1. Keep `id` and `created_at`.

2. **`apps/api/src/data/seed-items.js`** — replace all rows with 5–6 believable
   records from the founder's domain. Each seed object's **keys must use the new
   column names** — if you renamed `blurb` to `description`, the seed object must
   say `description:`, not `blurb:`.

3. **`apps/api/src/items.js`** — rename the exported router variable and update
   every SQL column name in the SELECT and INSERT queries to match `db.js`.

4. **`apps/api/server.js`** — if you renamed the router export in `items.js`,
   update the import and `app.use()` line to match.

5. **`apps/web/src/api.js`** — update the fetch paths if you renamed the API route
   (e.g. `/api/items` → `/api/recipes`).

**For `shape: 'search'`** — update all three components:

6. **`apps/web/src/components/Card.jsx`** — update `item.title`, `item.blurb`,
   `item.tags` to the renamed fields.

7. **`apps/web/src/components/Detail.jsx`** — update `item.title`, `item.blurb`,
   `item.tags`, `item.body`. Add extra field rows in the `CardContent` block
   (there's a comment placeholder showing the pattern).

8. **`apps/web/src/components/AddForm.jsx`** — update state variable names, input
   placeholders, and the `onAdd({ … })` object keys to match the actual fields.

**For `shape: 'tool'`** — update the two tool components:

6. **`apps/web/src/components/ToolForm.jsx`** — rename the `primary`/`secondary`
   state vars and their placeholders to match the founder's inputs. Add extra
   `<input>` or `<textarea>` rows if the tool needs more fields.

7. **`apps/web/src/components/ToolOutput.jsx`** — update `item.title`, `item.blurb`,
   `item.tags`, `item.body` to the renamed fields. Add extra field rows below
   `item.body` using the comment placeholder in the file.

**For `shape: 'dashboard'`** — update the two dashboard components:

6. **`apps/web/src/App.jsx`** (dashboard only) — update the three `StatCard` labels
   and value computations in the `stats` useMemo block to reflect the data model
   (e.g. rename "Categories" to "Brands", compute a sum instead of a count).

7. **`apps/web/src/components/DataTable.jsx`** — rename the `<th>` headers and the
   `item.*` field references in each `<td>` to match the renamed columns.

9. **Run it** — `npm run seed` (reload the new data), then `npm run dev`. Confirm
   with `curl http://localhost:3001/api/items` (or the renamed route).

Make one file change at a time and keep the app booting after each.

## Beat 3 — Save & hand off

Save to `workshop/runs/<slug>/05-build.html` (icon 🔧, stage 5, label "Build"): the
build decisions (resource name, fields) in Inputs; what changed in each file + the
working endpoints in Outputs.

Then tell the founder it runs at http://localhost:5173. Next: **`/6-test-iterate`**
to walk the demo path, seed believable data, and capture what you learned.
