// Global client-side entry
// Import any site-wide scripts or packages here
import mobileMenu from './modules/mobile-menu.js';
import aos from './modules/aos.js'; // AOS for animations
// Header scroll functionality
const handleHeaderScroll = () => {
  const header = document.getElementById('header');
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('bg-dark');
  } else {
    header.classList.remove('bg-dark');
  }
};

const init = () => {
  mobileMenu();
  aos();
  
  // Add scroll event listener for header background
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Initial check in case page is loaded scrolled down
  handleHeaderScroll();
}

export default init;

document.addEventListener('DOMContentLoaded', init);