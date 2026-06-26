# Demo script — paste-ready answers (FridgeChef)

Run the harness live without improvising. Type the command, then paste the
answers below as the skill asks. These match the worked example in
`workshop/examples/fridgechef/`, so your live output should look the same.

> Tip: the skills ask through an **interactive picker** (the panel that pops up).
> Pick an offered option, or choose **Other** to paste the matching answer below.

---

## `/1-problem FridgeChef`

1. **The idea (one sentence):**
   FridgeChef — you type the few ingredients you actually have and it tells you something you can cook tonight.
2. **Who exactly feels this pain?**
   A broke, busy student in a shared apartment with a half-empty fridge and ~20 minutes before they give up and order in.
3. **What do they do today instead?**
   Stare into the fridge, Google "what can I make with eggs and…", get overwhelmed by 12-ingredient blog recipes, then order takeout.
4. **Why does that hurt?**
   Money (takeout adds up) and waste (food goes off unused), plus the daily "what's for dinner" stress.
5. **Why now?**
   Grocery prices are up and students are cooking more, but recipe sites assume a planned shop, not "what's in my fridge right now".

---

## `/2-spec`

1. **The one action on first open?**
   Type a few ingredients and hit "Find recipes".
2. **Inputs → outputs?**
   In: a comma list of ingredients. Out: a grid of recipe cards ranked by how many of your ingredients they use.
3. **The magic moment?**
   Seeing a real recipe you could start right now, made from what you typed.
4. **What data can we fake?**
   A handful of believable recipes with titles, cook times, and steps.
5. **What to leave OUT?**
   Accounts, saving favourites, grocery delivery, nutrition, social feed.

→ Next: **`/3-opportunity`**.

---

## `/3-opportunity`

1. **Who/what do people use instead today?**
   Recipe blogs (SEO-bloated), big recipe apps (Mealime/Yummly — built for planned shops), and just Googling "what can I make with…".
2. **What would make your user switch?**
   It starts from what's already in the fridge — 3 ingredients in, one cookable recipe out, under 20 minutes.
3. **How big could this get?**
   Start one campus → every budget-conscious post-secondary student in Canada.
4. **Would anyone pay?**
   A few dollars/month for premium (save pantry, history); demo stays free. Paid meal apps prove the willingness.

→ The skill writes the competitor grid, the three demand signals, a back-of-napkin TAM/SAM/SOM, and the wedge — then shows the **build fork**. Pick a route below.

---

## Route A — no-code

### `/4a-lovable`
1. **App name & tagline?** FridgeChef — "Type what's in your fridge, get dinner."
2. **Brand vibe & colour?** Warm and friendly; a fresh green.
3. **Anything about the look that matters?** Big ingredient box up top; appetising recipe cards.

Then jump to `/6-test-iterate` (below).

---

## Route B — Claude Code + starter template

### `/4b-scope-design`
1. **Confirm the one screen?** Yes — ingredients in → recipe cards → tap for the full recipe.
2. **What are we cutting?** Accounts, saving favourites, grocery delivery, nutrition, social feed.
3. **Product name & tagline?** FridgeChef — "Type what's in your fridge, get dinner."
4. **Logo?** Emoji mark for now: 🍳
5. **Primary colour?** Fresh green — #00BA6E.
6. **Vibe in two words?** Warm + friendly.

### `/5-build`
1. **Resource name?** items → recipes
2. **Fields each record needs?** title, time, ingredients (tags), steps (body).

---

## `/6-test-iterate` (both routes)

- **The path the audience will click:**
  Type "eggs, cheese, spinach" → see recipes → open Spinach & Feta Omelette.
- **What broke / looked fake:**
  (1) Empty search returned nothing instead of all recipes. (2) Two recipes had no steps. (3) No loading state.
- **What surprised you?**
  People typed full phrases ("leftover rice"), not single words — matching needs to be forgiving.
- **What would you change about the idea?**
  Rank by "fewest extra ingredients to buy", not "most matches".
- **Next smallest thing a real user needs?**
  An "I have nothing" button that suggests a 3-ingredient pantry meal.

---

### Want a second example?

Swap FridgeChef for any of the room's real ideas to show range — e.g.
*a nutrition meal-plan app*, *a contract-review tool*, or a *pre-product landing
page*. The same questions apply; just change the answers.
