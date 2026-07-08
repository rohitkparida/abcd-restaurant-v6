import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://rohitkparida.github.io',
  base: '/abcd-restaurant-v6',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
