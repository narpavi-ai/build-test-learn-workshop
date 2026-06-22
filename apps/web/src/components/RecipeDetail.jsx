export default function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="detail-overlay" onClick={onBack}>
      <div className="detail" onClick={(e) => e.stopPropagation()}>
        <button className="back" onClick={onBack}>← Back to results</button>
        <div className="detail-head">
          <h2>{recipe.name}</h2>
          <span className={`badge ${recipe.difficulty.toLowerCase()}`}>
            {recipe.difficulty}
          </span>
        </div>
        <p className="desc">{recipe.description}</p>
        <p className="time">⏱ {recipe.minutes} minutes</p>

        <h4>Ingredients</h4>
        <ul className="ingredients">
          {recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>

        <h4>Steps</h4>
        <ol className="steps">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
