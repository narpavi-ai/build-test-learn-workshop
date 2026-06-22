export default function RecipeCard({ recipe, onOpen }) {
  return (
    <button className="card" onClick={() => onOpen(recipe)}>
      <div className="card-top">
        <h3>{recipe.name}</h3>
        <span className={`badge ${recipe.difficulty.toLowerCase()}`}>
          {recipe.difficulty}
        </span>
      </div>
      <p className="desc">{recipe.description}</p>
      <div className="card-meta">
        <span>⏱ {recipe.minutes} min</span>
        {recipe.matchCount > 0 && (
          <span className="match">
            ✓ {recipe.matchCount} ingredient{recipe.matchCount > 1 ? "s" : ""} matched
          </span>
        )}
      </div>
    </button>
  );
}
