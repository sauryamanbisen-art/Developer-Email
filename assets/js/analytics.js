// analytics.js
import { $$ } from './utils.js';

export const initAnalytics = () => {
  const counters = $$('.counter');
  
  const animateCounter = (counter) => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isFloat = target % 1 !== 0;
    const duration = 2000; // ms
    const increment = target / (duration / 16); // 60fps

    let current = 0;
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = isFloat ? current.toFixed(2) : Math.ceil(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = isFloat ? target.toFixed(2) : target.toLocaleString();
      }
    };
    updateCounter();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });

  // Chart Animation (CSS based)
  const bars = $$('.bar');
  const chartObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.height = entry.target.getAttribute('data-height') + '%';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => {
    bar.style.height = '0%';
    chartObserver.observe(bar);
  });
};
