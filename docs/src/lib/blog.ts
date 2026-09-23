import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Artículos ordenados del más reciente al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const postUrl = (post: Post) => `/blog/${post.id}/`;

const TZ = 'Europe/Madrid';

/** "18 sept 2026" */
export const formatShortDate = (date: Date) =>
  new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', year: 'numeric', timeZone: TZ })
    .format(date)
    .replace(/\./g, '');

/** "18 de septiembre de 2026" */
export const formatLongDate = (date: Date) =>
  new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: TZ }).format(date);

/** Fecha ISO sin hora (2026-09-18) para <time datetime> y JSON-LD. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
