# Demo script — paste-ready answers (Kora)

Run the harness live without improvising. Type the command, then paste the
answers below as the skill asks. These match the worked example in
`workshop/examples/kora/`, so your live output should look the same.

> Tip: the skills ask through an **interactive picker** (the panel that pops up).
> Pick an offered option, or choose **Other** to paste the matching answer below.

---

## `/1-problem an AI budgeting app to track and forecast household expenses`

1. **The idea (one sentence):**
   Kora — an AI budgeting app that tracks and forecasts a household's expenses.
2. **Who exactly feels this pain?**
   A newly-married couple merging their money for the first time — two incomes, two old habits, no shared system yet.
3. **What do they do today instead?**
   Keep a spreadsheet they barely update; it goes stale within weeks, so nobody really knows where the money went.
4. **Why does that hurt?**
   Money — they overspend and leak cash on forgotten subscriptions and budget-blowing months they only notice too late.
5. **Why now?**
   Cost-of-living pressure makes every dollar tighter, and AI can finally take the tedium out of categorizing and forecasting.

> Kora is a working folder name; the real product name is locked at `/4b-scope-design`.

---

## `/2-spec`

1. **The one action on first open?**
   Type a plain-English money question and hit "Ask Kora".
2. **Inputs → outputs?**
   In: a question like "Can we afford dinner out this weekend?". Out: a 2–3 sentence answer + one big "safe to spend this week" number.
3. **The magic moment?**
   The confident "safe to spend" number appearing — no spreadsheet math.
4. **What data can we fake?**
   ~20 believable transactions for one couple-month (rent, groceries, subscriptions, dining, gas, utilities, coffee, two paydays).
5. **Other features — and which is the MVP to build first?**
   MVP: ask a money question → answer + "safe to spend" number. Backlog: forecast nudge, two-user sync, real bank connection, multi-month trends, savings goals.

→ Next: **`/3-opportunity`**.

---

## `/3-opportunity`

1. **Who/what do people use instead today?**
   A spreadsheet (the workaround), Mint/Credit Karma, YNAB, Monarch Money, or just eyeballing the bank balance.
2. **What would make your user switch?**
   It answers "can we afford this?" in plain English with zero setup — no learning curve, free, built for two people.
3. **How big could this get?**
   Start with couples in one city → every newly-merging household in Canada.
4. **Would anyone pay?**
   Free for the user; monetize via affiliate/referral on financial products. YNAB ($109/yr) and Monarch (~$99/yr) prove willingness to pay.

→ The skill writes the competitor grid, the three demand signals, a back-of-napkin TAM/SAM/SOM, and the wedge — then shows the **build fork**. Pick a route below.

---

## Route A — no-code

### `/4a-lovable`
1. **App name & tagline?** Kora — "Ask your budget anything."
2. **Brand vibe & colour?** Warm and friendly; a warm amber.
3. **Anything about the look that matters?** One big "safe to spend" number up top; a calm chat box.

Then jump to `/6-test-iterate` (below).

---

## Route B — Claude Code + starter template

### `/4b-scope-design`
1. **What do we build now?** The MVP only — question in → answer + safe-to-spend number → tap a transaction for detail.
2. **What stays on the backlog?** Forecast nudge, two-user sync, real bank connection, multi-month trends, savings goals.
3. **Product name & tagline?** Kora — "Ask your budget anything."
4. **Logo?** Emoji mark for now: 🏠
5. **Primary colour?** Warm amber — #D97706.
6. **Vibe in two words?** Warm + friendly.

### `/5-build`
1. **What do we build this session?** The MVP first.
2. **Resource name?** items → transactions
3. **Fields each record needs?** date, description, amount (negative = expense, positive = income), category.

---

## `/6-test-iterate` (both routes)

- **The path the audience will click:**
  Type "Can we afford dinner out this weekend?" → see the answer + "$814 safe to spend" → tap a transaction.
- **What broke / looked fake:**
  (1) API was stopped, so the question returned nothing. (2) "Safe to spend" felt high until the label explained it. (3) No loading state on the first ask.
- **What surprised you?**
  People asked vague questions ("are we okay?") — the answer needs a confident default, not just keyword matches.
- **What would you change about the idea?**
  The forecast nudge ("you're trending over on dining") may be a stronger hook than the raw number.
- **Next smallest thing a real user needs?**
  Let a partner add a transaction and watch the safe-to-spend number move live.

---

### Want a second example?

Swap Kora for any of the room's real ideas to show range — e.g. *a study-group
matcher*, *a contract-review tool*, or a *pre-product landing page*. The same
questions apply; just change the answers.
