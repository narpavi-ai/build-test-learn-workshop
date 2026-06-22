// ---------------------------------------------------------------------------
// SEEDED RECIPE DATA
// ---------------------------------------------------------------------------
// This is the "fake data" layer, kept deliberately separate from the matching
// logic and the routes. For a demo this is all you need.
//
// To go real later, you wouldn't change the API or the front-end at all — you'd
// only swap how `recipes` is produced (call a recipe API or an LLM). See the
// commented hook in ../recipes.js.
//
// `ingredients` are lowercase, normalized keywords used for matching.
// ---------------------------------------------------------------------------

export const recipes = [
  {
    id: "cheesy-scrambled-eggs",
    name: "Cheesy Scrambled Eggs",
    description: "Soft scrambled eggs folded with melty cheese. Five-minute breakfast or lazy dinner.",
    minutes: 8,
    difficulty: "Easy",
    ingredients: ["eggs", "cheese", "butter", "salt", "pepper"],
    steps: [
      "Whisk the eggs with a pinch of salt and pepper.",
      "Melt butter in a pan over low heat.",
      "Add eggs and stir gently until just set.",
      "Fold in the cheese and serve immediately."
    ]
  },
  {
    id: "spinach-feta-omelette",
    name: "Spinach & Feta Omelette",
    description: "Fluffy omelette with wilted spinach and salty feta. Surprisingly filling.",
    minutes: 12,
    difficulty: "Medium",
    ingredients: ["eggs", "spinach", "feta", "cheese", "olive oil", "salt"],
    steps: [
      "Wilt the spinach in a little olive oil, then set aside.",
      "Beat the eggs with salt and pour into the hot pan.",
      "When almost set, add spinach and crumbled feta to one half.",
      "Fold over, slide onto a plate, and eat."
    ]
  },
  {
    id: "grilled-cheese",
    name: "Classic Grilled Cheese",
    description: "Golden, crunchy outside, gooey middle. The undisputed comfort sandwich.",
    minutes: 7,
    difficulty: "Easy",
    ingredients: ["bread", "cheese", "butter"],
    steps: [
      "Butter the outsides of two slices of bread.",
      "Stack cheese between them, buttered sides out.",
      "Toast in a pan over medium heat until golden, ~3 min per side.",
      "Cut diagonally — it just tastes better that way."
    ]
  },
  {
    id: "tomato-pasta",
    name: "10-Minute Tomato Pasta",
    description: "Garlicky tomato sauce over pasta. The dependable student dinner.",
    minutes: 15,
    difficulty: "Easy",
    ingredients: ["pasta", "tomato", "garlic", "olive oil", "salt", "cheese"],
    steps: [
      "Boil the pasta in salted water until al dente.",
      "Soften garlic in olive oil, add chopped tomato, simmer 5 min.",
      "Toss the drained pasta through the sauce.",
      "Top with cheese and a little pepper."
    ]
  },
  {
    id: "veggie-fried-rice",
    name: "Veggie Fried Rice",
    description: "Leftover rice turned into something worth eating. Clears out the fridge.",
    minutes: 15,
    difficulty: "Medium",
    ingredients: ["rice", "egg", "carrot", "peas", "soy sauce", "garlic", "oil"],
    steps: [
      "Heat oil and scramble the egg, then set aside.",
      "Fry garlic and chopped veg until tender.",
      "Add cold rice and soy sauce, tossing until hot.",
      "Stir the egg back in and serve."
    ]
  },
  {
    id: "banana-oat-pancakes",
    name: "Banana Oat Pancakes",
    description: "Three-ingredient pancakes, no flour needed. Uses up sad bananas.",
    minutes: 12,
    difficulty: "Easy",
    ingredients: ["banana", "oats", "egg"],
    steps: [
      "Mash the banana and mix with oats and egg.",
      "Spoon small rounds onto a greased pan over medium heat.",
      "Flip when bubbles form, ~2 min per side.",
      "Stack and top with anything sweet you have."
    ]
  },
  {
    id: "garlic-butter-noodles",
    name: "Garlic Butter Noodles",
    description: "Buttery, garlicky noodles you can make from almost nothing.",
    minutes: 12,
    difficulty: "Easy",
    ingredients: ["noodles", "pasta", "butter", "garlic", "cheese", "salt"],
    steps: [
      "Cook the noodles and reserve a splash of the water.",
      "Melt butter with minced garlic until fragrant.",
      "Toss noodles through with a little pasta water.",
      "Finish with cheese and a pinch of salt."
    ]
  },
  {
    id: "loaded-quesadilla",
    name: "Loaded Quesadilla",
    description: "Crispy tortilla packed with cheese and whatever veg needs using up.",
    minutes: 10,
    difficulty: "Easy",
    ingredients: ["tortilla", "cheese", "beans", "tomato", "onion", "pepper"],
    steps: [
      "Scatter cheese and fillings over half a tortilla.",
      "Fold over and cook in a dry pan until golden.",
      "Flip once to crisp the other side.",
      "Cut into wedges and dip in whatever sauce you've got."
    ]
  }
];
