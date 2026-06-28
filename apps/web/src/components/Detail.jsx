// The full detail view for one item. Shown after a card is clicked.
export default function Detail({ item, onBack }) {
  if (!item) return null;
  return (
    <div className="detail">
      <button className="link" onClick={onBack}>← Back to results</button>
      <h2>{item.title}</h2>
      <p className="blurb">{item.blurb}</p>
      {item.tags && (
        <div className="tags">
          {item.tags.split(',').map((t) => (
            <span key={t.trim()} className="tag">{t.trim()}</span>
          ))}
        </div>
      )}
      <p className="body">{item.body}</p>
    </div>
  );
}
