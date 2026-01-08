import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Theme initialization to prevent flash - default to light mode
(function() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
