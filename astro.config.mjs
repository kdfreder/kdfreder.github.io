import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kdfreder.github.io',
  base: '/',
  outDir: 'dist',
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
});
