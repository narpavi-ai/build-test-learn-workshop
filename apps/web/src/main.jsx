import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { brand } from './brand.js';
import './styles.css';

// Apply brand colours as CSS variables so styles.css can use them.
const root = document.documentElement;
root.style.setProperty('--primary', brand.colors.primary);
root.style.setProperty('--ink', brand.colors.ink);
root.style.setProperty('--bg', brand.colors.bg);
document.title = brand.name;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
