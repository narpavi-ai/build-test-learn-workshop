// The input side of the Tool shape.
// In /5-build: rename fields, update labels + placeholders, add/remove inputs
// to match the founder's idea. onGenerate() passes all values to App.jsx.
import { useState } from 'react';
import { brand } from '@/brand.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ToolForm({ onGenerate, loading }) {
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!primary.trim()) return;
    onGenerate({ primary: primary.trim(), secondary: secondary.trim() });
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{brand.inputLabel ?? brand.name}</CardTitle>
        <CardDescription>{brand.tagline}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="flex flex-col gap-4">

          {/* Primary input — update label + placeholder in /5-build */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">
              {brand.primaryLabel ?? 'What do you need?'} <span className="text-destructive">*</span>
            </label>
            <textarea
              value={primary}
              onChange={e => setPrimary(e.target.value)}
              placeholder={brand.searchPlaceholder}
              rows={5}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
            />
          </div>

          {/* Secondary input — rename or remove in /5-build */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-muted-foreground">
              {brand.secondaryLabel ?? 'Additional context'}{' '}
              <span className="text-xs font-normal">(optional)</span>
            </label>
            <input
              value={secondary}
              onChange={e => setSecondary(e.target.value)}
              placeholder={brand.secondaryPlaceholder ?? 'Any extra details…'}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <Button type="submit" disabled={loading || !primary.trim()} className="w-full h-11 text-base mt-1">
            {loading ? 'Working…' : brand.searchButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
