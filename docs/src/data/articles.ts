// Referencias cortas a los artículos del blog para el enlazado interno de los servicios.
// (Los artículos completos están en la colección de contenido del blog.)
export const ARTICLES = {
  leadScoring: {
    title: 'Lead scoring en Google Ads y Meta',
    href: '/blog/lead-scoring-google-ads-meta/',
  },
  aiMax: {
    title: 'AI Max para Search: qué cambia y cómo mantener el control',
    href: '/blog/ai-max-search/',
  },
  serverSide: {
    title: 'Tracking server-side: guía para recuperar conversiones perdidas',
    href: '/blog/tracking-server-side/',
  },
  chatgpt: {
    title: 'ChatGPT Ads en España: cómo funciona y a quién le conviene',
    href: '/blog/chatgpt-ads-espana/',
  },
} as const;

export type ArticleKey = keyof typeof ARTICLES;
