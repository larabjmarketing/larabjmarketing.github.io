// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Mientras no haya dominio propio se publica en larabjmarketing.github.io. Con dominio, definir SITE_URL
// (en local: .env; en GitHub: Settings > Secrets and variables > Actions > Variables).
const SITE_URL = process.env.SITE_URL || 'https://larabjmarketing.github.io';

// Páginas con noindex: fuera del sitemap (las legales hasta que tengan texto definitivo)
const NOINDEX = ['/aviso-legal/', '/privacidad/', '/cookies/', '/404/'];

const font = (weight) => ({
  src: [`./src/assets/fonts/plus-jakarta-sans-latin-${weight}-normal.woff2`],
  weight,
  style: 'normal',
});

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  // CSS en línea: sin peticiones que bloqueen el primer pintado (la web es pequeña)
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [mdx(), sitemap({ filter: (page) => !NOINDEX.some((path) => page.endsWith(path)) })],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [font(400), font(500), font(600), font(700), font(800)],
      },
    },
  ],
});
