// navigation.js
import { $, $$ } from './utils.js';

export const initNavigation = () => {
  const navbar = $('.navbar');
  const mobileMenuBtn = $('.mobile-menu-btn');
  const navLinks = $('.nav-links');
  const links = $$('.nav-link');
  
  // Sticky Navbar Blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('open');
      navLinks.classList.toggle('active');
    });
  }

  // Smooth scroll and active state
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const target = $(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          if (navLinks.classList.contains('active')) {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('active');
          }
        }
      }
    });
  });
};
