// Datos globales del sitio: marca, contacto, navegación y pie.
// Cambiar un enlace aquí lo cambia en toda la web.

export const SITE = {
  name: 'Lara Borrego',
  jobTitle: 'Freelance de Paid Media',
  tagline: 'Freelance de Paid Media · España',
  email: 'larabj.marketing@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lara-borrego-paid-media/',
  locale: 'es_ES',
  lang: 'es-ES',
  phone: '+34654943209',
  phoneDisplay: '654 94 32 09',
} as const;

/** Enlace a WhatsApp con un mensaje inicial ya escrito. */
export const whatsappUrl = (text = 'Hola Lara, vengo de tu web y me gustaría hablar sobre mis campañas.') =>
  `https://wa.me/${SITE.phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export type NavEntry = NavLink | NavGroup;

export const isGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;

export const PAID_MEDIA: NavLink[] = [
  { label: 'Auditoría de Google Ads y Meta Ads', href: '/auditoria-google-ads/' },
  { label: 'Google Ads', href: '/freelance-google-ads/' },
  { label: 'Meta Ads', href: '/freelance-meta-ads/' },
  { label: 'TikTok Ads', href: '/freelance-tiktok-ads/' },
  { label: 'LinkedIn Ads', href: '/freelance-linkedin-ads/' },
  { label: 'Publicidad programática', href: '/publicidad-programatica/' },
  { label: 'ChatGPT Ads', href: '/chatgpt-ads/' },
  { label: 'Apoyo a agencias', href: '/apoyo-agencias/' },
];

export const SERVICIOS_360: NavLink[] = [
  { label: 'Qué es Servicios 360', href: '/servicios-360/' },
  { label: 'Tracking server-side y medición', href: '/medicion-server-side/' },
  { label: 'SEO y GEO', href: '/seo-geo/' },
  { label: 'Desarrollo web', href: '/servicios-360/#desarrollo-web' },
  { label: 'UX/UI y CRO', href: '/servicios-360/#ux-ui-cro' },
  { label: 'Branding y creatividad', href: '/servicios-360/#branding' },
  { label: 'CRM y automatización', href: '/servicios-360/#crm' },
  { label: 'Social media', href: '/servicios-360/#social-media' },
];

// Casos, Docencia y Sobre mí apuntan a secciones de la home
// hasta que existan sus páginas (pendiente de contenido, sección 12 del brief).
export const PAGES = {
  casos: '/#casos',
  docencia: '/#docencia',
  sobreMi: '/#sobre',
  faq: '/#faq',
  blog: '/blog/',
  avisoLegal: '/aviso-legal/',
  privacidad: '/privacidad/',
  cookies: '/cookies/',
} as const;

// Páginas propias pendientes de contenido. Al crearlas: poner a true y cambiar PAGES.
// Mientras estén en false no se muestran los enlaces "Ver todos los casos" y "Ver docencia".
export const PAGE_READY = {
  casos: false,
  docencia: false,
} as const;

export const MAIN_NAV: NavEntry[] = [
  { label: 'Paid Media', items: PAID_MEDIA },
  { label: 'Servicios 360', items: SERVICIOS_360 },
  { label: 'Casos', href: PAGES.casos },
  { label: 'Blog', href: PAGES.blog },
  { label: 'Docencia', href: PAGES.docencia },
  { label: 'Sobre mí', href: PAGES.sobreMi },
  { label: 'FAQ', href: PAGES.faq },
];

export const FOOTER_COLUMNS: NavGroup[] = [
  {
    label: 'Paid Media',
    items: [
      { label: 'Auditoría', href: '/auditoria-google-ads/' },
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'Programática', href: '/publicidad-programatica/' },
    ],
  },
  {
    label: 'Servicios 360',
    items: [
      { label: 'Analítica y medición', href: '/medicion-server-side/' },
      { label: 'SEO y GEO', href: '/seo-geo/' },
      { label: 'Web y UX/UI', href: '/servicios-360/#desarrollo-web' },
      { label: 'Branding', href: '/servicios-360/#branding' },
      { label: 'CRM y social media', href: '/servicios-360/#crm' },
    ],
  },
  {
    label: 'Más',
    items: [
      { label: 'Blog', href: PAGES.blog },
      { label: 'Docencia', href: PAGES.docencia },
      { label: 'LinkedIn', href: SITE.linkedin },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Aviso legal', href: PAGES.avisoLegal },
  { label: 'Privacidad', href: PAGES.privacidad },
  { label: 'Cookies', href: PAGES.cookies },
];
