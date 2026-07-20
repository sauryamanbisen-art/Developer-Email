// scroll.js
import { $, $$ } from './utils.js';

export const initScroll = () => {
  const reveals = $$('.reveal');
  const progressBar = $('.scroll-progress');

  // Scroll Progress Bar
  window.addEventListener('scroll', () => {
    if (progressBar) {
      const scrollTotal = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = (scrollTotal / height) * 100;
      progressBar.style.width = scroll + '%';
    }
  });

  // Intersection Observer for Reveal animations
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, revealOptions);

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
};
