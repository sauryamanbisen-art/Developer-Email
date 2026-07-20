// carousel.js
import { $, $$ } from './utils.js';

export const initCarousel = () => {
  const carousel = $('.carousel-track');
  const slides = $$('.carousel-slide');
  const nextBtn = $('.carousel-next');
  const prevBtn = $('.carousel-prev');

  if (!carousel || slides.length === 0) return;

  let currentIndex = 0;

  const updateCarousel = () => {
    const width = slides[0].getBoundingClientRect().width;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }

  // Auto slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);
  
  window.addEventListener('resize', updateCarousel);
};
