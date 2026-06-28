// ---------------------------------------------------------------------------
// The ONE screen: search input → results grid → detail view.
// This is your magic-moment screen. Rename "items", restyle, and make it yours.
// ---------------------------------------------------------------------------
import { useEffect, useState } from 'react';
import { brand } from './brand.js';
import { searchItems, getItem } from './api.js';
import Card from './components/Card.jsx';
import Detail from './components/Detail.jsx';

export default function App() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Load everything once on mount so the grid is never empty.
  useEffect(() => { runSearch(''); }, []);

  async function runSearch(query) {
    setLoading(true);
    setSelected(null);
    try {
      setResults(await searchItems(query));
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }

  async function open(id) {
    setSelected(await getItem(id));
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="logo">{brand.logo}</div>
        <h1>{brand.name}</h1>
        <p className="tagline">{brand.tagline}</p>
      </header>

      {selected ? (
        <Detail item={selected} onBack={() => setSelected(null)} />
      ) : (
        <>
          <form
            className="searchbar"
            onSubmit={(e) => { e.preventDefault(); runSearch(q); }}
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={brand.searchPlaceholder}
            />
            <button type="submit">{brand.searchButton}</button>
          </form>

          {loading && <p className="hint">Loading…</p>}
          {!loading && results.length === 0 && (
            <p className="hint">{searched ? 'No results — try another search.' : brand.emptyHint}</p>
          )}

          <div className="grid">
            {results.map((item) => (
              <Card key={item.id} item={item} onOpen={open} />
            ))}
          </div>
        </>
      )}

      <footer className="foot">Built with the Founder Starter Kit · Edmonton Unlimited</footer>
    </div>
  );
}
