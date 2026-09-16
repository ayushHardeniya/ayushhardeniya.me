import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ayushhardeniya.me',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'never' },
  redirects: {
    '/about': '/blog/who-am-i',
  },
});