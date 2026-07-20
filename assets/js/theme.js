// theme.js
import { $, $$ } from './utils.js';

export const initTheme = () => {
  const themeToggle = $('#themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default to dark mode
  let currentTheme = localStorage.getItem('theme') || 'dark';
  
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  
  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(currentTheme);
    });
  }
};
