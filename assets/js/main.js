// main.js
import { initLoader } from './loader.js';
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initModals } from './modal.js';
import { initScroll } from './scroll.js';
import { initCursor } from './cursor.js';
import { initPlayground } from './playground.js';
import { initAnalytics } from './analytics.js';
import { initCarousel } from './carousel.js';
import { initFAQ } from './faq.js';
import { initSearch } from './search.js';
import { $ } from './utils.js';

const initApp = () => {
  initLoader();
  initTheme();
  initNavigation();
  initModals();
  initScroll();
  initCursor();
  initPlayground();
  initAnalytics();
  initCarousel();
  initFAQ();
  initSearch();
  
  // Back to top button logic
  const backToTop = $('#backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
