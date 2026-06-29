import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { brand } from './brand.js';
import './styles.css';

// Convert a hex colour to the "H S% L%" string shadcn CSS vars expect.
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// Apply the brand primary as shadcn CSS vars so every component reacts to it.
const hsl = hexToHsl(brand.colors.primary);
const root = document.documentElement;
root.style.setProperty('--primary', hsl);
root.style.setProperty('--ring', hsl);
document.title = brand.name;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
