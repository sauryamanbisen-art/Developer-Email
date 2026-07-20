// loader.js
import { $ } from './utils.js';

export const initLoader = () => {
  const loader = $('.loader-wrapper');
  const progressBar = $('.progress-bar');
  
  if (!loader || !progressBar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 100) progress = 100;
    progressBar.style.width = `${progress}%`;
    
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        // trigger hero animations
        document.body.classList.add('loaded');
      }, 500);
    }
  }, 100);
};
