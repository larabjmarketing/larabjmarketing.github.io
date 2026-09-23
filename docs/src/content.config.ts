import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Categorías del blog (sección 6 del brief). Solo se muestran como filtro las que tienen artículos.
export const CATEGORIES = [
  'Google Ads',
  'Meta Ads',
  'Programática',
  'Medición y analítica',
  'Lead scoring y CRM',
  'IA y ChatGPT Ads',
  'Estrategia',
] as const;

const callout = z.object({ title: z.string(), text: z.string() });

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Título corto para <title>: "{shortTitle} | Blog Lara Borrego" */
      shortTitle: z.string(),
      /** Subtítulo del artículo; también es la meta description */
      description: z.string(),
      /** Resumen corto para las tarjetas del listado */
      excerpt: z.string(),
      date: z.coerce.date(),
      category: z.enum(CATEGORIES),
      readingTime: z.number(),
      image: image(),
      imageAlt: z.string(),
      featured: z.boolean().default(false),
      /** Portada de barras (HTML y CSS, ver design/Blog.dc.html) */
      cover: z.object({
        tone: z.enum(['accent', 'dark', 'tint', 'deep']),
        bars: z.array(z.number()).length(5),
      }),
      /** Diagrama de pasos bajo la cabecera (opcional, en lugar de la portada) */
      flow: z.array(z.object({ step: z.string(), text: z.string() })).optional(),
      summary: z.array(z.object({ label: z.string(), text: z.string() })),
      sidebarCta: callout,
      finalCta: callout,
      faq: z.array(z.object({ q: z.string(), a: z.string() })),
      sources: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      /** Página de servicio relacionada (enlazado interno) */
      service: z.object({ label: z.string(), href: z.string() }),
    }),
});

export const collections = { blog };
