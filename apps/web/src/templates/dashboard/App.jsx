// ---------------------------------------------------------------------------
// DASHBOARD shape: summary stats at the top + a filterable data table.
// Perfect for: SaaS metrics, spend/inventory trackers, analytics tools,
// anything where a founder needs to show data at-a-glance.
//
// Activated by /4b-scope-design when the founder picks the Dashboard shape.
// Customise in /5-build: update StatCard labels + DataTable column headers.
// ---------------------------------------------------------------------------
import { useEffect, useMemo, useState } from 'react';
import { brand } from '@/brand.js';
import { searchItems } from '@/api.js';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import StatCard from '@/components/StatCard.jsx';
import DataTable from '@/components/DataTable.jsx';

export default function App() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    setError('');
    try {
      setItems(await searchItems(''));
    } catch {
      setError("Couldn't reach the API. Is it running on :3001? Try `npm run dev`.");
    } finally {
      setLoading(false);
    }
  }

  // Summary stats derived from the full dataset.
  // In /5-build: rename labels and change value computations to match your data model.
  const stats = useMemo(() => {
    if (items.length === 0) return { total: 0, categories: 0, topCategory: '—' };
    const allTags = items.flatMap(i =>
      (i.tags || '').split(',').map(t => t.trim()).filter(Boolean)
    );
    const tagCounts = {};
    allTags.forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; });
    const topEntry = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])[0];
    return {
      total: items.length,
      categories: new Set(allTags).size,
      topCategory: topEntry ? topEntry[0] : '—',
    };
  }, [items]);

  // Client-side filter for the table.
  const filtered = useMemo(() => {
    if (!q.trim()) return items;
    const lower = q.toLowerCase();
    return items.filter(i =>
      [i.title, i.blurb, i.tags].some(f => (f || '').toLowerCase().includes(lower))
    );
  }, [items, q]);

  return (
    <div className="min-h-screen bg-background">

      {/* ── App header (compact — dashboard style) ── */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-xl shadow shadow-primary/25 shrink-0">
            {brand.logo}
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">{brand.name}</h1>
            <p className="text-xs text-muted-foreground">{brand.tagline}</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* ── Stat cards ── */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map(i => <Skeleton key={i} className="h-24 rounded-xl" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* In /5-build: rename these labels and compute domain-specific values */}
            <StatCard label="Total records" value={stats.total} />
            <StatCard label="Categories" value={stats.categories} />
            <StatCard label="Top category" value={stats.topCategory} />
          </div>
        )}

        {/* ── Filter bar ── */}
        <div className="flex items-center gap-3 mb-4">
          <Input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder={brand.searchPlaceholder}
            className="max-w-sm"
          />
          {!loading && (
            <span className="text-xs text-muted-foreground shrink-0">
              {filtered.length} of {items.length} records
            </span>
          )}
        </div>

        {error && <p className="text-sm text-destructive mb-4">{error}</p>}

        {/* ── Data table ── */}
        {loading ? (
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-12 rounded-lg" />)}
          </div>
        ) : (
          <DataTable items={filtered} />
        )}

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          Built with the Founder Starter Kit · Edmonton Unlimited
        </footer>
      </main>
    </div>
  );
}
