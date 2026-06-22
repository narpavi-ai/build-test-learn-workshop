import { useState } from "react";
import { fetchRecipes } from "./api.js";
import RecipeCard from "./components/RecipeCard.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";

const EXAMPLES = ["eggs, cheese", "pasta, tomato, garlic", "banana, oats, egg"];

export default function App() {
  const [ingredients, setIngredients] = useState("");
  const [results, setResults] = useState([]);
  const [fallback, setFallback] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [selected, setSelected] = useState(null);

  async function search(query) {
    const value = (query ?? ingredients).trim();
    if (!value) return;
    if (query !== undefined) setIngredients(query);
    setStatus("loading");
    try {
      const data = await fetchRecipes(value);
      setResults(data.results);
      setFallback(data.fallback);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="logo">🍳 FridgeChef</div>
        <p className="tagline">
          Tell me what's in your fridge, I'll tell you what to cook.
        </p>
      </header>

      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g. eggs, spinach, cheese, bread"
          aria-label="Ingredients"
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Cooking…" : "Find recipes"}
        </button>
      </form>

      <div className="chips">
        <span>Try:</span>
        {EXAMPLES.map((ex) => (
          <button key={ex} className="chip" onClick={() => search(ex)}>
            {ex}
          </button>
        ))}
      </div>

      <main className="results">
        {status === "idle" && (
          <p className="empty">Add a few ingredients to see what you can make.</p>
        )}
        {status === "error" && (
          <p className="empty error">
            Couldn't reach the kitchen. Is the API running on port 3001?
          </p>
        )}
        {status === "done" && fallback && (
          <p className="note">
            Nothing matched exactly — here are some quick ideas.
          </p>
        )}
        {status === "done" && results.length > 0 && (
          <div className="grid">
            {results.map((r) => (
              <RecipeCard key={r.id} recipe={r} onOpen={setSelected} />
            ))}
          </div>
        )}
      </main>

      {selected && (
        <RecipeDetail recipe={selected} onBack={() => setSelected(null)} />
      )}

      <footer className="foot">
        Real round-trip: React → Express API → seeded data ·
        the "done properly" version of the Lovable demo.
      </footer>
    </div>
  );
}
