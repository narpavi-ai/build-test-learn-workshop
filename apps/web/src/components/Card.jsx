// A single result card in the grid. Click it to open the detail view.
export default function Card({ item, onOpen }) {
  return (
    <button className="card" onClick={() => onOpen(item.id)}>
      <h3>{item.title}</h3>
      <p>{item.blurb}</p>
      {item.tags && (
        <div className="tags">
          {item.tags.split(',').map((t) => (
            <span key={t.trim()} className="tag">{t.trim()}</span>
          ))}
        </div>
      )}
    </button>
  );
}
