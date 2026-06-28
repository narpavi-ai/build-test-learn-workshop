// ---------------------------------------------------------------------------
// The ONE screen: search input → results grid → detail view.
// Uses shadcn/ui components throughout — swap labels, fields, and copy to
// make it yours. The shape (input → grid → detail) stays the same.
// ---------------------------------------------------------------------------
import { useEffect, useMemo, useState } from 'react';
import { brand } from './brand.js';
import { searchItems, getItem, createItem } from './api.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
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
  const [sort, setSort] = useState('default');
  const [activeTag, setActiveTag] = useState('');
  const [adding, setAdding] = useState(false);

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

  async function addItem(fields) {
    await createItem(fields);
    setAdding(false);
    setActiveTag('');
    await runSearch(q);
  }

  const tags = useMemo(() => {
    const seen = new Set();
    for (const item of results) {
      (item.tags || '').split(',').forEach(t => t.trim() && seen.add(t.trim()));
    }
    return [...seen].sort();
  }, [results]);

  const view = useMemo(() => {
    let rows = activeTag
      ? results.filter(r => (r.tags || '').split(',').map(t => t.trim()).includes(activeTag))
      : results;
    if (sort !== 'default') {
      rows = [...rows].sort((a, b) =>
        sort === 'az' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    }
    return rows;
  }, [results, activeTag, sort]);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <header className="bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b border-border/40 pb-10 pt-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-3xl shadow-lg shadow-primary/30 mb-5">
            {brand.logo}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{brand.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{brand.tagline}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {selected ? (
          <Detail item={selected} onBack={() => setSelected(null)} />
        ) : (
          <>
            {/* ── Search bar ── */}
            <form
              className="flex gap-2 mb-6"
              onSubmit={e => { e.preventDefault(); runSearch(q); }}
            >
              <Input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder={brand.searchPlaceholder}
                className="flex-1 h-11 text-base"
              />
              <Button type="submit" className="h-11 px-6 text-base">
                {brand.searchButton}
              </Button>
            </form>

            {/* ── Toolbar: filters left, sort + add right ── */}
            {!loading && !error && results.length > 0 && (
              <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {view.length} {view.length === 1 ? 'result' : 'results'}
                  </span>
                  {tags.length > 0 && (
                    <>
                      <FilterChip active={activeTag === ''} onClick={() => setActiveTag('')}>All</FilterChip>
                      {tags.map(t => (
                        <FilterChip key={t} active={activeTag === t} onClick={() => setActiveTag(t)}>{t}</FilterChip>
                      ))}
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Select value={sort} onValueChange={setSort}>
                    <SelectTrigger className="w-36 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Sort: default</SelectItem>
                      <SelectItem value="az">Name A→Z</SelectItem>
                      <SelectItem value="za">Name Z→A</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAdding(v => !v)}
                    className="h-8 text-xs"
                  >
                    {adding ? 'Close' : '+ Add'}
                  </Button>
                </div>
              </div>
            )}

            {adding && <AddForm onAdd={addItem} onCancel={() => setAdding(false)} />}

            {/* ── Loading skeletons ── */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-xl border p-5 space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                    <div className="flex gap-2 pt-1">
                      <Skeleton className="h-5 w-14 rounded-full" />
                      <Skeleton className="h-5 w-10 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── Error ── */}
            {error && !loading && (
              <div className="text-center py-16">
                <p className="text-4xl mb-3">⚠️</p>
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* ── Empty state ── */}
            {!loading && !error && view.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-4xl mb-3">{searched ? '🔍' : '✨'}</p>
                <p className="text-sm">{searched ? 'No results — try another search.' : brand.emptyHint}</p>
              </div>
            )}

            {/* ── Results grid ── */}
            {!loading && !error && view.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                {view.map(item => (
                  <Card key={item.id} item={item} onOpen={open} />
                ))}
              </div>
            )}
          </>
        )}

        <footer className="mt-20 text-center text-xs text-muted-foreground">
          Built with the Founder Starter Kit · Edmonton Unlimited
        </footer>
      </main>
    </div>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
        active
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}
