// ---------------------------------------------------------------------------
// RECIPES ROUTE
// ---------------------------------------------------------------------------
// POST /api/recipes  { ingredients: "eggs, cheese, spinach" }
//   -> { fallback: boolean, count: number, results: Recipe[] }
//
// This is the single place the data comes from. Today it reads the seeded
// dataset and ranks it locally. To go real, replace `getRecipes()` below.
// ---------------------------------------------------------------------------

import { Router } from "express";
import { recipes as seededRecipes } from "./data/seed-recipes.js";
import { matchRecipes } from "./match.js";

const router = Router();

/**
 * Source of recipe data.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │ REAL-DATA HOOK                                                          │
 * │                                                                         │
 * │ Right now this returns the local seed. When you're ready for real data, │
 * │ swap the body of this function — the route, matching, and the entire    │
 * │ front-end stay exactly the same:                                        │
 * │                                                                         │
 * │   // Option A — a real recipe API:                                      │
 * │   // const res = await fetch(`https://api.example.com/recipes?q=${q}`,  │
 * │   //   { headers: { Authorization: `Bearer ${process.env.RECIPE_KEY}` }});│
 * │   // return await res.json();                                           │
 * │                                                                         │
 * │   // Option B — an LLM (e.g. Anthropic Claude) to generate recipes:     │
 * │   // import Anthropic from "@anthropic-ai/sdk";                         │
 * │   // const client = new Anthropic();  // reads ANTHROPIC_API_KEY        │
 * │   // const msg = await client.messages.create({                         │
 * │   //   model: "claude-opus-4-8",                                        │
 * │   //   max_tokens: 1024,                                                │
 * │   //   messages: [{ role: "user", content:                             │
 * │   //     `Return JSON recipes that use these ingredients: ${ingredients}`}]│
 * │   // });                                                                │
 * │   // return JSON.parse(msg.content[0].text);                            │
 * └───────────────────────────────────────────────────────────────────────┘
 */
async function getRecipes(/* ingredients */) {
  return seededRecipes;
}

router.post("/recipes", async (req, res) => {
  try {
    const { ingredients = "" } = req.body ?? {};
    const data = await getRecipes(ingredients);
    const { fallback, results } = matchRecipes(data, ingredients);
    res.json({ fallback, count: results.length, results });
  } catch (err) {
    console.error("Failed to match recipes:", err);
    res.status(500).json({ error: "Could not fetch recipes." });
  }
});

export default router;
