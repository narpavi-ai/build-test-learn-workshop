// A small inline form to add a new record. It calls the existing POST /api/items
// (via createItem in api.js), so what you add is really saved to the database —
// reload the page and it's still there. Delete this file if you don't need it.
import { useState } from 'react';

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
    <form className="addform" onSubmit={submit}>
      <div className="addform-row">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title *" />
        <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
      </div>
      <input value={blurb} onChange={(e) => setBlurb(e.target.value)} placeholder="Short blurb" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Full description" rows={3} />
      {err && <p className="addform-err">{err}</p>}
      <div className="addform-actions">
        <button type="button" className="btn-ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save record'}</button>
      </div>
    </form>
  );
}
