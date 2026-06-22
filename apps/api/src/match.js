// ---------------------------------------------------------------------------
// MATCHING LOGIC
// ---------------------------------------------------------------------------
// Pure function: given the recipe set and the user's raw ingredient string,
// rank recipes by how many of the user's ingredients they use.
// Kept separate from data and routes so it's easy to test or replace.
// ---------------------------------------------------------------------------

/** Split a raw "eggs, cheese; spinach" string into clean lowercase keywords. */
export function parseIngredients(raw = "") {
  return String(raw)
    .toLowerCase()
    .split(/[,;\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Rank recipes by overlap with the user's ingredients.
 * Returns recipes sorted best-match first, each annotated with `matchCount`
 * and the `matched` ingredient names. If nothing overlaps, falls back to the
 * quickest recipes so the UI is never empty.
 */
export function matchRecipes(recipes, rawIngredients) {
  const wanted = parseIngredients(rawIngredients);

  if (wanted.length === 0) {
    return { fallback: true, results: quickest(recipes, 3) };
  }

  const scored = recipes
    .map((recipe) => {
      // Count by the user's ingredients, not the recipe's, so "eggs" can't
      // match twice just because a recipe lists a near-duplicate keyword.
      const matched = wanted.filter((w) =>
        recipe.ingredients.some((ing) => ing.includes(w) || w.includes(ing))
      );
      return { ...recipe, matchCount: matched.length, matched };
    })
    .filter((r) => r.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount || a.minutes - b.minutes);

  if (scored.length === 0) {
    return { fallback: true, results: quickest(recipes, 3) };
  }

  return { fallback: false, results: scored };
}

function quickest(recipes, n) {
  return [...recipes]
    .sort((a, b) => a.minutes - b.minutes)
    .slice(0, n)
    .map((r) => ({ ...r, matchCount: 0, matched: [] }));
}
