import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
import robotsConfig from './robots-txt.config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://test.adilosam.se',
  integrations: [tailwind(), robotsTxt(robotsConfig), sitemap()]
});