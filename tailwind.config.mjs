/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '.75rem',
          lg: '1.5rem',
          xl: '2rem',
        },
      },
      colors: {
        primary: '#3B82F6',
        secondary: '#F3F4F6',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark': '#313338',
        'text': '#333333',
        'gray': '#999999',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Public Sans', 'sans-serif'],
        'cursive': ['Edu NSW ACT Cursive', 'cursive'],
        'shadow': ['Shadows Into Light', 'cursive'],
      },
      fontSize: {
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1rem',
        'md': '0.875rem',
        'sm': '0.75rem',
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      typography: {
        DEFAULT: {
          css: {
            'body': {
              'font-family': 'var(--font-body)',
            },
          },
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}