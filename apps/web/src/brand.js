// ---------------------------------------------------------------------------
// 🎨 YOUR BRAND — one file to make this app look like YOUR product.
// The /4b-scope-design skill fills this in during the workshop.
// Change `primary` to any hex colour — the rest of the UI derives from it.
// ---------------------------------------------------------------------------
export const brand = {
  shape: 'search',                          // 'search' | 'tool' | 'dashboard' — set by /4b-scope-design
  name: 'Shop Brief',                       // your product name
  tagline: 'Your store, in three sentences.', // the one-line promise
  logo: '✨',                               // an emoji or single char; swap for <img> later
  colors: {
    primary: '#5B21B6',                     // one hex → drives the whole palette
  },
  // The magic-moment screen, in your words:
  searchPlaceholder: 'Upload your Shopify sales CSV…',
  searchButton: 'Load data',
  emptyHint: 'Upload your Shopify sales CSV to generate your brief.',
};
