// search.js
import { $, $$ } from './utils.js';
import { showToast } from './toast.js';

export const initSearch = () => {
  const searchModal = $('#searchModal');
  const searchInput = $('#searchInput');
  const searchResults = $('#searchResults');

  const openSearch = () => {
    if (searchModal) {
      searchModal.classList.add('active');
      searchInput.focus();
    }
  };

  const closeSearch = () => {
    if (searchModal) searchModal.classList.remove('active');
  };

  // Ctrl + K to open Search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // Basic Filter Logic
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      const items = $$('.search-item', searchResults);
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(val)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
};
