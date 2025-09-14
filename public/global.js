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

// Mobile Menu functionality
const initMobileMenu = () => {
  if (typeof window !== 'undefined') {
    class MobileMenu {
      constructor() {
        this.menuButton = document.getElementById('mobile-menu-button');
        this.closeButton = document.getElementById('mobile-close-button');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.overlay = document.getElementById('mobile-overlay');
        this.hamburgerIcon = document.getElementById('hamburger-icon');
        this.closeIcon = document.getElementById('close-icon');
        this.isOpen = false;

        this.init();
      }

      init() {
        // Event listeners
        this.menuButton?.addEventListener('click', () => this.toggle());
        this.closeButton?.addEventListener('click', () => this.close());
        this.overlay?.addEventListener('click', () => this.close());

        // Close on escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this.isOpen) {
            this.close();
          }
        });

        // Close on window resize (if screen becomes large)
        window.addEventListener('resize', () => {
          if (window.innerWidth >= 768 && this.isOpen) {
            this.close();
          }
        });
      }

      toggle() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      open() {
        if (!this.mobileMenu || !this.overlay || !this.menuButton) return;

        this.isOpen = true;
        
        // Show overlay
        this.overlay.classList.remove('opacity-0', 'pointer-events-none');
        
        // Slide in menu
        this.mobileMenu.classList.remove('translate-x-full');
        
        // Update button state
        this.menuButton.setAttribute('aria-expanded', 'true');
        this.hamburgerIcon?.classList.add('hidden');
        this.closeIcon?.classList.remove('hidden');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
      }

      close() {
        if (!this.mobileMenu || !this.overlay || !this.menuButton) return;

        this.isOpen = false;
        
        // Hide overlay
        this.overlay.classList.add('opacity-0', 'pointer-events-none');
        
        // Slide out menu
        this.mobileMenu.classList.add('translate-x-full');
        
        // Update button state
        this.menuButton.setAttribute('aria-expanded', 'false');
        this.hamburgerIcon?.classList.remove('hidden');
        this.closeIcon?.classList.add('hidden');
        
        // Restore body scroll
        document.body.style.overflow = '';
      }
    }

    // Initialize mobile menu
    new MobileMenu();
  }
};

const init = () => {
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize AOS
  initAOS();
  
  // Initialize text orbit
  initTextOrbit();
  
  // Add scroll event listener for header background
  window.addEventListener('scroll', handleHeaderScroll);
  
  // Initial check in case page is loaded scrolled down
  handleHeaderScroll();
}

document.addEventListener('DOMContentLoaded', init);
