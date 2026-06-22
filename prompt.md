You are helping me build materials for a hands-on workshop I'm delivering for Edmonton Unlimited's Student Founders Launch program. Produce THREE things: (1) a self-contained HTML slide deck in Edmonton Unlimited's brand style, (2) a Lovable live-build prompt script, and (3) a runnable Node.js/React monorepo of the demo app (my Claude Code "level-up" showcase).

I'm attaching the previous presenter's deck "[Backup w Footnotes] Building Fast with AI.potx". Use it ONLY as a reference for the Edmonton Unlimited brand/template and general structure. Open it and EXTRACT the real theme colors and fonts, and use those instead of my hex approximations below. Treat its CONTENT as off-limits (see Hard Constraints).

CONTEXT
- Workshop: "Build It, Show It — Rapid Prototyping with AI" (rename if you have a better one). Student Founders Launch program. In person at Edmonton Unlimited, Tuesday June 30, 2026, 6:00–8:30pm.
- Audience: ~23 early-stage student founders (14 surveyed). Goal: prepare them for Demo Night on July 14, 2026.
- Core message: most founders can only DESCRIBE their idea; this workshop gives them a repeatable process to SHOW a clickable version. The fundamentals (the stages) are the same no matter the tool.
- Hands-on tool: Lovable (free tier). Claude Code shown as a pre-built "level-up" showcase, NOT built live.

RUNNING EXAMPLE: "FridgeChef" — type the few ingredients you have, get a recipe. Walk this single idea through EVERY stage of the build, the way the reference deck walked through its example.

SURVEY DATA (for a "where this room is" slide, use these numbers)
- 14 of ~23 responded. ~13 of 14 are building software (websites/apps/platforms); 1 hardware.
- Stage split roughly even: about half ideation/concept, half early prototyping, a couple near MVP.

THE STAGES TO TEACH (the spine of the deck, applied to FridgeChef)
1. Problem — who hurts and why (students waste food / don't know what to cook with what they have).
2. Spec it with AI — turn the idea into a tight build brief using a chat AI. Include this worked-example prompt: "Act as a product coach. I want to build FridgeChef. Define: the one user, the single core action, the inputs and outputs of that one screen, what data to fake for a demo, and what to explicitly leave OUT. Keep it to one screen buildable in a no-code tool tonight."
3. Scope & Design — MVP = the one magic-moment screen (ingredients in → recipe out). Show what we CUT (accounts, saving, grocery delivery).
4. Just-enough tech + Tools — one light slide on the front-end vs the data behind it (and that you can FAKE the data for a demo). Tools: Lovable (hands-on; free tier ~5 credits/day, so aim for 3–4 specific prompts, don't debug in circles) and Claude Code (the full-build level-up).
5. Build with AI — the live Lovable build, and a look at the same app built properly as a real Node/React app.
6. Test & Iterate — make it work, seed the fake data, "live demos are unpredictable, we troubleshoot together."
7. Ship — get the URL / custom domain so it looks legit for Demo Night.
8. Scale (integrations) — GitHub = you own your code, nothing's locked in. The ladder: Lovable → push to GitHub → open in Claude Code → add a real backend (Supabase) and payments (Stripe) when ready. Keep founder-light.

DELIVERABLE 1 — THE HTML DECK
- Single self-contained .html, 16:9, keyboard arrow navigation, works offline (inline CSS/JS; Google Fonts CDN ok).
- Edmonton Unlimited brand (prefer real values from the .potx; else approximate): deep navy ~#0B0A52 for title/dark slides, white for content slides, bright purple ~#7C4DFF for section dividers; accents purple ~#7C4DFF / lighter ~#8E5BFF / green ~#16C172 for section titles & callouts / yellow ~#F7E017 sparingly. Headings: bold squared geometric sans (Space Grotesk or the template's font); body: clean humanist sans (Inter). Motif: thin rounded-rectangle "circuit-trace" outlines in corners of dark slides; soft translucent rounded-rectangle blobs on purple dividers (SVG/CSS). Logo: marked image placeholder + an "EDMONTON UNLIMITED" text wordmark.
- Slide outline (original, polished content; guides not literal text):
  1. Title — workshop name, "Student Founders Launch · Demo Night Prep", [my name].
  2. Housekeeping — live demos unpredictable, we troubleshoot together, focus on the idea. [Wifi placeholder].
  3. Who am I — [placeholder bio + headshot slot].
  4. Why we're here — on July 14 you want to SHOW, not describe.
  5. Where this room is — survey slide with the numbers above.
  6. The big idea — AI at every stage; same fundamentals, any tool.
  7. Section divider — "Let's build FridgeChef — through every stage."
  8–15. One slide per stage above. The Spec slide must show the worked-example prompt.
  16. Section divider — "Your turn."
  17. Work block — apply the SAME stages to YOUR idea. Pre-product → your magic-moment screen can be a validation/landing page; have something → build your core screen. Scope to ONE screen, spec with AI, build, fake data, ship. [Checkpoints].
  18. Turn it into your Demo Night story — map onto the 5-min structure: intro (30s)/problem (30s)/market (1m)/solution + live demo (2m)/next steps (30s)/contact (30s) + Q&A.
  19. Recap + resources + [my contact].
  20. Thank you — EU-branded closing.

DELIVERABLE 2 — LOVABLE LIVE-BUILD PROMPT SCRIPT (markdown file)
- The exact sequence of 3–4 prompts I'll paste into Lovable to build the quick FridgeChef live (one screen: ingredients in → recipe cards from fake data). Each prompt specific and self-contained. Include a one-line note after each on what it should produce, plus a short "if it breaks live" fallback tip. Realistic for the free tier — no auth, no multi-screen, fake data. This doubles as a handout for the founders.

DELIVERABLE 3 — FRIDGECHEF MONOREPO (the runnable Node/React full build)
- A monorepo I can spin up with one command. Use npm workspaces; run both apps together via `npm run dev` (use concurrently). No API keys required — fully local with seeded data.
- Structure:
  - root package.json (workspaces + dev script)
  - apps/web — React + Vite. FridgeChef UI: ingredient input, results grid, recipe detail view. Calls the API.
  - apps/api — Node.js + Express. POST /api/recipes takes ingredients and returns matches from a clearly separated seeded data module. Leave a commented hook showing where a real recipe API / LLM call would replace the seed.
- This should demonstrate a REAL frontend → backend → data round-trip (the thing the Lovable quick build only fakes).
- Include a README: prerequisites (Node 18+), `npm install`, `npm run dev`, the ports, how the structure maps to the SDLC stages, and how I'd push it to GitHub and continue in Claude Code.
- Keep it clean and minimal — the "done properly" version, not an enterprise app.

HARD CONSTRAINTS
- The .potx is a STYLE/STRUCTURE reference only. Do NOT reuse its content: not the doctor–patient example, not the presenter's bio/photo/contact, not any webhook URLs, not its slide wording. All content original.
- Keep the Lovable narrative realistic for the free tier (3–4 prompts, one screen, fake data).
- The deck and prompt-script files must be self-contained / openable with no build step; the monorepo runs locally with npm only.
- Put anything I personalize in [square brackets].

First give me the slide outline and the monorepo file tree as text to approve, then build the deck, then the prompt script, then the monorepo.