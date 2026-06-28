// ---------------------------------------------------------------------------
// The ONE screen: search input → results grid → detail view.
// This is your magic-moment screen. Rename "items", restyle, and make it yours.
//
// It also has two small, optional helpers you can keep or delete:
//   • a toolbar to sort the grid and filter it by tag (all client-side), and
//   • an "Add" form that saves a new record to the database (real persistence).
// Nothing here is a separate page — it's still one flow.
// ---------------------------------------------------------------------------
import { useEffect, useMemo, useState } from 'react';
import { brand } from './brand.js';
import { searchItems, getItem, createItem } from './api.js';
import Card from './components/Card.jsx';
import Detail from './components/Detail.jsx';
import AddForm from './components/AddForm.jsx';

export default function App() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  // Toolbar state: how to sort, which tag to filter by, and whether the Add form is open.
  const [sort, setSort] = useState('default');      // 'default' | 'az' | 'za'
  const [activeTag, setActiveTag] = useState('');    // '' = show all tags
  const [adding, setAdding] = useState(false);

  // Load everything once on mount so the grid is never empty.
  useEffect(() => { runSearch(''); }, []);

  async function runSearch(query) {
    setLoading(true);
    setError('');
    setSelected(null);
    try {
      setResults(await searchItems(query));
    } catch {
      setError("Couldn't reach the API. Is it running on :3001? Try `npm run dev`.");
      setResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }

  async function open(id) {
    try {
      setSelected(await getItem(id));
    } catch {
      setError("Couldn't open that item — the API may be down.");
    }
  }

  // Save a new record, then refresh the grid so it shows up. Proves real persistence.
  async function addItem(fields) {
    await createItem(fields);
    setAdding(false);
    setActiveTag('');
    await runSearch(q);
  }

  // The unique tags across the current results — these become the filter chips.
  const tags = useMemo(() => {
    const seen = new Set();
    for (const item of results) {
      (item.tags || '').split(',').forEach((t) => t.trim() && seen.add(t.trim()));
    }
    return [...seen].sort();
  }, [results]);

  // What the grid actually shows: results filtered by the active tag, then sorted.
  const view = useMemo(() => {
    let rows = activeTag
      ? results.filter((r) => (r.tags || '').split(',').map((t) => t.trim()).includes(activeTag))
      : results;
    if (sort !== 'default') {
      rows = [...rows].sort((a, b) =>
        sort === 'az' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    }
    return rows;
  }, [results, activeTag, sort]);

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

          {/* Toolbar: result count + tag filters on the left, sort + Add on the right. */}
          {!loading && !error && results.length > 0 && (
            <div className="toolbar">
              <div className="filters">
                <span className="count">{view.length} {view.length === 1 ? 'result' : 'results'}</span>
                {tags.length > 0 && (
                  <>
                    <button
                      className={`chip${activeTag === '' ? ' active' : ''}`}
                      onClick={() => setActiveTag('')}
                    >All</button>
                    {tags.map((t) => (
                      <button
                        key={t}
                        className={`chip${activeTag === t ? ' active' : ''}`}
                        onClick={() => setActiveTag(t)}
                      >{t}</button>
                    ))}
                  </>
                )}
              </div>
              <div className="actions">
                <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="default">Sort: default</option>
                  <option value="az">Name A→Z</option>
                  <option value="za">Name Z→A</option>
                </select>
                <button className="btn-ghost" onClick={() => setAdding((v) => !v)}>
                  {adding ? 'Close' : '＋ Add'}
                </button>
              </div>
            </div>
          )}

          {adding && <AddForm onAdd={addItem} onCancel={() => setAdding(false)} />}

          {loading && (
            <div className="grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card skeleton" aria-hidden="true">
                  <div className="sk-line w70" />
                  <div className="sk-line w90" />
                  <div className="sk-line w40" />
                </div>
              ))}
            </div>
          )}

          {error && !loading && (
            <div className="state error">
              <div className="state-emoji">⚠️</div>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && view.length === 0 && (
            <div className="state">
              <div className="state-emoji">{searched ? '🔍' : '✨'}</div>
              <p>{searched ? 'No results — try another search.' : brand.emptyHint}</p>
            </div>
          )}

          {!loading && !error && view.length > 0 && (
            <div className="grid fade-in">
              {view.map((item) => (
                <Card key={item.id} item={item} onOpen={open} />
              ))}
            </div>
          )}
        </>
      )}

      <footer className="foot">Built with the Founder Starter Kit · Edmonton Unlimited</footer>
    </div>
  );
}
