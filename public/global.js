// Global client-side entry
// Import any site-wide scripts or packages here

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

// AOS initialization
const initAOS = () => {
  if (typeof window !== 'undefined' && typeof AOS !== 'undefined') {
    try {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });
    } catch (error) {
      console.error('Error initializing AOS:', error);
    }
  }
};

const init = () => {
  // Initialize mobile menu if it exists
  if (typeof mobileMenu !== 'undefined') {
    mobileMenu();
  }
  
  // Initialize AOS
  initAOS();
  
  // Add scroll event listener for header background
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Initial check in case page is loaded scrolled down
  handleHeaderScroll();
}

document.addEventListener('DOMContentLoaded', init);
