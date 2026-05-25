document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Basic Button Interactivity
  const btnDocs = document.getElementById('btnDocs');
  const btnGetStarted = document.getElementById('btnGetStarted');
  const btnSigninDesktop = document.getElementById('btnSigninDesktop');
  const btnSigninMobile = document.getElementById('btnSigninMobile');

  const showAlert = (e, message) => {
    e.preventDefault();
    alert(message);
  };

  btnDocs.addEventListener('click', (e) => showAlert(e, 'Documentation page is coming soon!'));
  btnGetStarted.addEventListener('click', (e) => showAlert(e, 'Get Started process initiated!'));
  btnSigninDesktop.addEventListener('click', (e) => showAlert(e, 'Sign In portal opening...'));
  
  if (btnSigninMobile) {
    btnSigninMobile.addEventListener('click', (e) => {
      showAlert(e, 'Sign In portal opening...');
      navMenu.classList.remove('active');
    });
  }

  // Handle navigation links closing the menu on mobile
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = e.target.innerText;
      alert(`Navigating to ${pageName}...`);
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
});
