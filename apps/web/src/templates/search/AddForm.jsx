// Inline form to add a new record. Proves real persistence — reload and it's there.
// When you rename/add columns, update the useState vars, inputs, and the onAdd() call.
// Delete this file entirely if your idea doesn't need a create form.
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AddForm({ onAdd, onCancel }) {
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [tags, setTags] = useState('');
  const [body, setBody] = useState('');
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  async function submit(e) {
    e.preventDefault();
    if (!title.trim()) { setErr('A title is required.'); return; }
    setSaving(true);
    setErr('');
    try {
      await onAdd({ title: title.trim(), blurb: blurb.trim(), tags: tags.trim(), body: body.trim() });
    } catch {
      setErr("Couldn't save — is the API running?");
      setSaving(false);
    }
  }

  return (
    <Card className="mb-6 animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Add a record</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title *" />
            <Input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
          </div>
          <Input value={blurb} onChange={e => setBlurb(e.target.value)} placeholder="Short blurb" />
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder="Full description"
            rows={3}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
          />
          {err && <p className="text-destructive text-sm">{err}</p>}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={onCancel}>Cancel</Button>
            <Button type="submit" size="sm" disabled={saving}>{saving ? 'Saving…' : 'Save record'}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
