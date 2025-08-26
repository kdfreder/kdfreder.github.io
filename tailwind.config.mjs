/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
	],
	theme: {
		extend: {
			fontFamily: {
				'heading': ['Space Grotesk', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
			},
			colors: {
				dark: '#2B2B2B',
				primary: {
					DEFAULT: '#3A6EA5',
					50: '#f0f2ff',
					100: '#e1e5ff',
					200: '#c3cbff',
					300: '#a5b1ff',
					400: '#8797ff',
					500: '#3A6EA5',
					600: '#4a5bb8',
					700: '#384cac',
					800: '#263da0',
					900: '#142e94',
				},
				secondary: {
					DEFAULT: '#A14B2C',
					50: '#fff0f0',
					100: '#ffe1e1',
					200: '#ffc3c3',
					300: '#ffa5a5',
					400: '#ff8787',
					500: '#A14B2C',
					600: '#ff4d4d',
					700: '#ff2f2f',
					800: '#ff1111',
					900: '#ff0000',
				},
				body: '#2B2B2B',
				background: '#EDEDED',
				highlight: '#556B2F)',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					md: '3rem',
					lg: '4rem',
					xl: '5rem',
				},
				screens: {
					sm: '540px',
					md: '720px',
					lg: '960px',
					xl: '1140px',
					'2xl': '1320px',
					'3xl': '1600px',
				},
				maxWidth: {
					DEFAULT: '1440px',
				},
			},
		},
	},
	plugins: [],
}
