// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical host is www (matches the Google Business Profile). The apex and
// dentshvac.pages.dev should 301 here via a Cloudflare redirect rule.
export default defineConfig({
  site: 'https://www.dentsheatingandcooling.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      // Owner-only and not-yet-confirmed pages stay out of the sitemap.
      filter: (page) => !/\/(gerald|locations\/)/.test(page) && !page.includes('/404'),
    }),
  ],
});
