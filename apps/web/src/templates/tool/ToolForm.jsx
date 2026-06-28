// The input side of the Tool shape.
// In /5-build: rename fields, update placeholders, add/remove inputs to match
// the founder's idea. The onGenerate() call passes all field values to App.jsx.
import { useState } from 'react';
import { brand } from '@/brand.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      <CardHeader className="pb-4">
        <CardTitle className="text-base">{brand.inputLabel ?? 'Your inputs'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="flex flex-col gap-3">
          {/* Primary input — rename placeholder to match the idea */}
          <textarea
            value={primary}
            onChange={e => setPrimary(e.target.value)}
            placeholder={brand.searchPlaceholder}
            rows={4}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
          />
          {/* Secondary input — rename or remove as needed */}
          <input
            value={secondary}
            onChange={e => setSecondary(e.target.value)}
            placeholder="Additional context (optional)"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <Button type="submit" disabled={loading || !primary.trim()} className="w-full h-11 text-base">
            {loading ? 'Working…' : brand.searchButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
