// Thin wrapper around the FridgeChef API. In dev, Vite proxies /api -> :3001
// (see vite.config.js), so a relative URL works the same in dev and prod.

export async function fetchRecipes(ingredients) {
  const res = await fetch("/api/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients })
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json(); // { fallback, count, results }
}
