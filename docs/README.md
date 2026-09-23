# Web de Lara Borrego · freelance de paid media

Sitio estático con [Astro](https://astro.build), CSS propio y despliegue en GitHub Pages.

## Desarrollo en local

Necesitas Node 22.12 o superior.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ en local
```

Copia `.env.example` como `.env` y rellena los valores que quieras probar. Sin variables, la web funciona igual,
pero el formulario muestra un error al enviar y no se carga Google Tag Manager.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Menú, pie, email, LinkedIn | `src/config/site.ts` |
| Textos de la home | `src/pages/index.astro`, `src/components/home/`, `src/data/home-faq.ts` |
| Páginas de servicio (textos) | `src/data/services.ts` (una entrada por página) |
| Casos | `src/data/cases.ts` |
| Artículos del blog | `src/content/blog/*.mdx` (un archivo por artículo) |
| Colores, tipografía y espaciado | `src/styles/tokens.css` |
| Animaciones | `src/styles/motion.css` y `src/scripts/motion.ts` |
| Formulario y envío a Supabase | `src/components/ContactForm.astro`, `src/lib/leads.ts` |
| GTM y banner de cookies | `src/components/Analytics.astro`, `src/components/CookieBanner.astro` |
| Migración de la tabla de leads | `supabase/migrations/` |

### Añadir un artículo

Crea `src/content/blog/mi-articulo.mdx` copiando uno existente. El nombre del archivo es la URL
(`/blog/mi-articulo/`). Los campos del principio (título, fecha, categoría, FAQ...) están descritos en
`src/content.config.ts`. Para una imagen con pie usa `<Figure>` y para el CTA intermedio `<MidCta>`.

## Variables de entorno

| Variable | Dónde se usa | En GitHub |
| --- | --- | --- |
| `SITE_URL` | canonical, Open Graph, sitemap y robots.txt (sin barra final) | Variable |
| `PUBLIC_SUPABASE_URL` | formulario | Variable |
| `PUBLIC_SUPABASE_ANON_KEY` | formulario (clave publicable/anon, nunca la `service_role`) | Secret |
| `PUBLIC_GTM_ID` | Google Tag Manager (`GTM-XXXXXXX`) | Variable |

En GitHub: *Settings > Secrets and variables > Actions*.

## Supabase

1. Crea un proyecto en Supabase (región UE, por ejemplo Frankfurt).
2. Ejecuta `supabase/migrations/20260923000000_create_leads.sql` en *SQL Editor* (o con `supabase db push`).
3. Copia la URL del proyecto y la clave publicable (*Project Settings > API*) en las variables de arriba.

La tabla `leads` tiene RLS: la web solo puede **insertar** (y solo las columnas del formulario); leer exige
un usuario autenticado. Los leads se consultan en *Table Editor*. Antispam: campo trampa oculto, tiempo
mínimo de rellenado y un máximo de 3 envíos por email y hora en la base de datos.

## Google Tag Manager y GA4

El código ya carga GTM con **Consent Mode v2**: todo denegado por defecto y actualizado según el banner
(`analytics_storage` para analítica; `ad_storage`, `ad_user_data` y `ad_personalization` para publicidad).
La elección se guarda en `localStorage` (`lb_consent`) y se puede cambiar desde "Configurar cookies" en el pie.

Dentro del contenedor de GTM hay que crear:

1. **Etiqueta de Google (GA4)** con tu ID de medición `G-XXXXXXX`, activador *Initialization - All Pages*.
2. **Variable de capa de datos** `tipo` (nombre de la variable: `tipo`).
3. **Activador** de evento personalizado con nombre de evento `generate_lead`.
4. **Evento de GA4** `generate_lead` con el parámetro `tipo` = `{{tipo}}`, con el activador anterior.
5. En GA4, marca `generate_lead` como evento clave.
6. Opcional: etiquetas de Google Ads y Meta con el mismo activador (respetan el consentimiento).

En *Admin > Container settings* activa *Enable consent overview* para comprobar que cada etiqueta
tiene el consentimiento correcto.

Valores de `tipo`: `llamada`, `auditoria`, `gestion`, `otro`.

Los clics en cualquier botón de WhatsApp envían el evento `click_whatsapp` (con `pagina_origen`) a la capa de datos:
crea otro activador y otro evento de GA4 igual que con `generate_lead` si quieres medirlos.

El número de WhatsApp y el mensaje inicial están en `src/config/site.ts` (`SITE.phone` y `whatsappUrl`).

## Despliegue y dominio

El workflow `.github/workflows/deploy.yml` (en la raíz del repositorio) compila la carpeta `docs/` y la publica
en GitHub Pages en cada push a `main`.

Mientras no hay dominio propio, el repositorio se llama `larabjmarketing.github.io` y la web se publica en
`https://larabjmarketing.github.io/` (en la raíz, sin subcarpeta).

1. *Settings > Pages > Source*: **GitHub Actions** (no "Deploy from a branch").
2. Añade las variables y el secret de la tabla anterior.
3. Dominio propio: en *Settings > Pages > Custom domain* escribe el dominio y crea en tu proveedor los
   registros DNS que indica GitHub. Después pon ese dominio en `SITE_URL` y vuelve a desplegar.
4. Alta en Google Search Console y Bing Webmaster Tools y envío de `/sitemap-index.xml`.
