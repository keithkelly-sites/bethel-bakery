import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bethel-bakery.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-display',
      weights: [400, 700, 900],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Mono',
      cssVariable: '--font-mono',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['monospace'],
    },
  ],
});
