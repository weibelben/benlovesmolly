// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Old links to the gallery go to the page that replaced it.
  redirects: { '/gallery': '/our-story' },
  vite: {
    // In production nginx sends /api/ to the API container; in `make dev` it
    // goes to the API from `make dev-api`.
    server: { proxy: { '/api': 'http://localhost:8080' } },
  },
});
