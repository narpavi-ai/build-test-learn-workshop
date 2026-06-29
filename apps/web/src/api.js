// Tiny fetch wrapper around the starter API. Add functions as your idea grows.
const json = (r) => {
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
};

export const searchItems = (q = '') =>
  fetch(`/api/items?q=${encodeURIComponent(q)}`).then(json);

export const getItem = (id) => fetch(`/api/items/${id}`).then(json);

export const createItem = (item) =>
  fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  }).then(json);
