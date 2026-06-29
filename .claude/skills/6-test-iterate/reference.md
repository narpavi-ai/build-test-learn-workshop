# Stage 6 — Test & Iterate · founder guidance

The SKILL.md has the beats. This is the depth on what "working" means, making it
believable, shipping, and turning the build into learning.

## Why this stage is the point

"Build" gets you something on screen; this stage gets you something a stranger can
*click* without you narrating excuses. On Demo Night nobody sees your code — they
see the two minutes they click through. That path working and looking real is the
whole deliverable. This is also where "Learn" happens: you've now *seen* the idea,
so your opinions are worth more than they were this morning.

## Define "working" before you test

"Working" is not "no errors" — it's **the exact path your audience will click**,
end to end, looking believable. Write that path down first (e.g. "type 'eggs,
rice, onion' → see 3 recipes → open the stir-fry → see 4 steps"). Then you're
testing against a target, not poking around.

## The loop (why small + repeated)

Walk → note the single worst thing → fix only that → walk again. Fixing one issue
at a time keeps the app booting and stops you from spiralling into a rewrite the
night before. Two or three passes usually gets a clean path.

## Make it believable

- **Real-looking data beats more data.** 5–6 hand-written records with realistic
  titles, times, and full body text sell it; 50 rows of "lorem ipsum" kill it.
  Template route: edit `apps/api/src/data/seed-items.js`, then `npm run seed`.
- **Empty + loading states** — make sure the screen never looks broken before
  results arrive or when a search finds nothing. Friendly copy, not a blank box.
- **Trim, don't add.** If something half-works, cutting it is a valid fix for a demo.

## Ship it (so there's a link, not just localhost)

- **Lovable route:** use Lovable's Publish to get a shareable URL.
- **Template route:** `npm run build` produces static web assets; host them (any
  static host) and run the API somewhere, or demo from localhost if that's all the
  evening allows. A localhost demo still counts — but a URL is better to share.

## Capture learnings (these feed the next /1-problem)

The three questions aren't busywork — they're the founder's loop:
- *What surprised you?* → usually a hidden assumption.
- *What would you change?* → a sharper version of the idea.
- *Next smallest thing a real user needs?* → the next build, scoped small.
Write them down; they become the seed for the next idea or the next iteration.
