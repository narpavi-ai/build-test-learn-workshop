// ---------------------------------------------------------------------------
// 🎨 YOUR BRAND — one file to make this app look like YOUR product.
// The /4b-scope-design skill fills this in during the workshop.
// Change `primary` to any hex colour — the rest of the UI derives from it.
// Change `shape` to preview different screen layouts instantly (hot reload).
// ---------------------------------------------------------------------------
export const brand = {
  shape: 'search',                            // 'search' | 'tool' | 'dashboard'

  name: 'Shop Brief',                         // product name
  tagline: 'Your store, in three sentences.', // one-line promise
  logo: '✨',                                 // emoji or single char
  colors: {
    primary: '#5B21B6',                       // one hex → drives the whole palette
  },

  // Shared — used by all shapes:
  searchButton: 'Search',                     // main action button label
  searchPlaceholder: 'Search products…',      // primary input placeholder

  // Search / Catalog shape only:
  emptyHint: 'Start typing to find something.',

  // Tool / Generator shape only (set by /4b-scope-design when shape: 'tool'):
  inputLabel: 'Generate your brief',          // card title above the form
  primaryLabel: 'What do you need?',          // label on the main textarea
  secondaryLabel: 'Additional context',       // label on the optional field
  secondaryPlaceholder: 'Any extra details…', // placeholder for the optional field
};
