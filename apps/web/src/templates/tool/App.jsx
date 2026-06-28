// ---------------------------------------------------------------------------
// TOOL / GENERATOR shape: form inputs → structured output.
// Perfect for: AI brief generators, analyzers, recommendation engines,
// calculators — anything where the user puts something IN and gets something OUT.
//
// Activated by /4b-scope-design when the founder picks the Tool shape.
// Customise in /5-build: update ToolForm fields + ToolOutput display fields.
// ---------------------------------------------------------------------------
import { useState } from 'react';
import { brand } from '@/brand.js';
import { searchItems } from '@/api.js';
import { Skeleton } from '@/components/ui/skeleton';
import ToolForm from '@/components/ToolForm.jsx';
import ToolOutput from '@/components/ToolOutput.jsx';

export default function App() {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function generate(inputs) {
    setLoading(true);
    setError('');
    setOutput(null);
    try {
      // 👉 REAL-DATA HOOK
      // Right now this searches your seed data with the user's primary input.
      // In /5-build (or after Demo Night), swap this for a real API call:
      //   const result = await fetch('/api/generate', { method: 'POST', body: JSON.stringify(inputs) }).then(r => r.json());
      //   setOutput([result]);
      const results = await searchItems(inputs.primary || '');
      if (results.length === 0) {
        setError('No results — try different inputs, or check your seed data.');
      } else {
        setOutput(results);
      }
    } catch {
      setError("Couldn't reach the API. Is it running on :3001? Try `npm run dev`.");
    } finally {
      setLoading(false);
    }
  }

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

      <main className="max-w-2xl mx-auto px-4 py-8">

        {/* ── Input form ── */}
        <ToolForm onGenerate={generate} loading={loading} />

        {/* ── Loading ── */}
        {loading && (
          <div className="mt-6 space-y-3">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}

        {/* ── Error ── */}
        {error && !loading && (
          <p className="mt-6 text-center text-sm text-destructive">{error}</p>
        )}

        {/* ── Output ── */}
        {!loading && output && <ToolOutput results={output} />}

        <footer className="mt-20 text-center text-xs text-muted-foreground">
          Built with the Founder Starter Kit · Edmonton Unlimited
        </footer>
      </main>
    </div>
  );
}
