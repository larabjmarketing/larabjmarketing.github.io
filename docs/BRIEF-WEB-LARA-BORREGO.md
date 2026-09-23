# Brief de traspaso: web de Lara Borrego (freelance de paid media)

Documento para construir la web en Claude Code a partir del diseño aprobado. La carpeta `design/` contiene el código fuente de cada pantalla diseñada y `assets/` las imágenes. Todo lo que no está diseñado se construye reutilizando los componentes de esas pantallas.

## 1. Objetivo y posicionamiento

- Web de marca personal de **Lara Borrego**, freelance de paid media en España (no usar la marca Inari Media).
- Foco principal: paid media (Google Ads, Meta Ads, TikTok, LinkedIn, programática, ChatGPT Ads). El resto de servicios (analítica, web, UX/UI, branding, CRM, social media) se presentan como **Visión 360**: Lara dirige el proyecto y coordina a especialistas de confianza.
- Objetivo de conversión: formulario de contacto (auditoría o llamada gratuita de 30 min).
- Palabra clave principal: **"freelance"** antes que "consultora".

### Reglas de contenido (obligatorias)

- No nombrar clientes. Los casos van como "cliente confidencial".
- No usar la raya larga (guion largo tipográfico) en ningún texto.
- Tono: primera persona, cercano, técnico sin jerga innecesaria. Evitar frases hechas y estructuras repetitivas.
- Experiencia: **más de 8 años**. Empezó en 2017 en Smartclip (grupo Atresmedia).
- LinkedIn: https://www.linkedin.com/in/lara-borrego-paid-media/
- Email de contacto visible: larabj.marketing@gmail.com

## 2. Stack y despliegue

- **Astro** (sitio estático), sin frameworks de JS pesados. Componentes `.astro` reutilizables.
- Despliegue en **GitHub Pages** con **dominio propio** (pendiente de decidir; no publicar en una URL con subcarpeta).
- Formulario conectado a **Supabase** (ver sección 7).
- **Google Tag Manager** + **GA4**, con banner de cookies y **Consent Mode v2**.
- Fuente **Plus Jakarta Sans** autoalojada (pesos 400, 500, 600, 700, 800) con `font-display: swap`.
- Idioma `es-ES`. Diseño responsive: el diseño está a 1440 px; adaptar a tablet y móvil (ver sección 10).

## 3. Sistema de diseño

### Colores

| Token | Valor | Uso |
| --- | --- | --- |
| `--accent` | `#0D7F71` | Botones principales, iconos, números destacados, texto de acento |
| `--accent-dark` | `#0B6B60` | Enlaces y texto de acento pequeño |
| `--accent-light` | `#5ED3C1` | Acento sobre fondos oscuros |
| `--accent-tint` | `#E3F3F0` | Fondos suaves, etiquetas de categoría |
| `--accent-border` | `#B7E1D9` | Bordes de bloques con fondo tint |
| `--bg` | `#FAFAF8` | Fondo general |
| `--surface` | `#FFFFFF` | Tarjetas y secciones alternas |
| `--surface-2` | `#F5F4F0` | Cabeceras de tabla, mini tarjetas |
| `--border` | `#ECEAE4` | Bordes |
| `--ink` | `#111114` | Texto principal |
| `--muted` | `#52525B` | Texto secundario |
| `--muted-2` | `#71717A` | Metadatos, pies de foto |
| `--dark` | `#15141F` | Secciones oscuras |
| `--dark-2` | `#1E1D2A` | Tarjetas sobre fondo oscuro |
| `--dark-border` | `#33313F` | Bordes sobre fondo oscuro |

Texto sobre `--accent`: siempre blanco.

### Tipografía

- Plus Jakarta Sans para todo.
- H1: 60 a 72 px, peso 800, interlineado 1.04, tracking -0.04em.
- H2: 44 a 52 px, peso 800, tracking -0.035em.
- H3: 18 a 24 px, peso 700.
- Cuerpo: 16 a 20 px, interlineado 1.6. Cuerpo de artículos: 18 px, interlineado 1.75.
- Etiquetas: 12 px, peso 700, mayúsculas, tracking 0.08em.

### Formas y espaciado

- Radios: botones y etiquetas 999 px; tarjetas 18 a 22 px; bloques grandes 26 a 32 px.
- Sombra de tarjeta: `0 6px 24px rgba(17,17,20,0.04)`. Sombra de botón principal: `0 6px 18px rgba(13,127,113,0.30)`.
- Márgenes laterales de sección: 80 px en escritorio. Separación vertical entre secciones: 96 a 112 px.

### Componentes (sacar de `design/`)

| Componente | Dónde verlo |
| --- | --- |
| Navegación flotante en píldora con 2 botones (llamada y auditoría) | Todas las pantallas |
| Etiqueta con punto de color (eyebrow) | Todas |
| Botón principal, botón con borde, enlace con flecha | Home |
| H1 que incluye la etiqueta (por SEO la etiqueta va dentro del H1) | Home, servicio |
| Hero con foto y tarjetas de métricas flotantes | Home |
| Campo de URL con botón en el hero | Home |
| Tarjeta de servicio con icono | Home, servicio |
| Tabla comparativa "Agencia típica vs conmigo" | Home |
| Sección oscura Visión 360 con tarjeta central y 6 especialistas | Home |
| Tarjeta de caso con cifra grande | Home, servicio |
| Pasos numerados en horizontal | Home |
| Informe de auditoría con barras | Home |
| Banda destacada (ChatGPT Ads) | Home |
| FAQ (cada pregunta es un H3) | Home, servicio, artículos |
| Bloque oscuro de contacto con formulario | Home, servicio |
| Tarjeta de artículo, artículo destacado, filtros de categoría | Blog |
| Plantilla de artículo: índice lateral, "Resumen rápido", figura con pie, CTA intermedio, ficha de autora, relacionados | Artículos |

## 4. Mapa de páginas

Estado: **Diseñada** = hay pantalla en `design/`; **Plantilla** = construir con la plantilla indicada y el contenido de este brief; **Pendiente** = falta contenido.

| URL | Palabra clave | Title | H1 | Estado |
| --- | --- | --- | --- | --- |
| / | freelance paid media | Lara Borrego \| Freelance de Paid Media en España | Freelance de Paid Media en España. Publicidad que se mide en ventas, no en clics. | Diseñada (`Main` + `Home-2`) |
| /freelance-google-ads/ | freelance google ads | Freelance de Google Ads \| Lara Borrego | Freelance de Google Ads. Campañas de Google Ads que se miden en ventas. | Diseñada (`Servicio-google-ads`) |
| /auditoria-google-ads/ | auditoría google ads, auditoría meta ads | Auditoría de Google Ads y Meta Ads \| Lara Borrego | Auditoría de Google Ads y Meta Ads | Plantilla servicio |
| /freelance-meta-ads/ | freelance meta ads | Freelance de Meta Ads \| Lara Borrego | Freelance de Meta Ads | Plantilla servicio |
| /freelance-tiktok-ads/ | freelance tiktok ads | Freelance de TikTok Ads \| Lara Borrego | Freelance de TikTok Ads | Plantilla servicio |
| /freelance-linkedin-ads/ | freelance linkedin ads | Freelance de LinkedIn Ads \| Lara Borrego | Freelance de LinkedIn Ads | Plantilla servicio |
| /publicidad-programatica/ | freelance publicidad programática | Freelance de publicidad programática \| Lara Borrego | Publicidad programática y omnicanal | Plantilla servicio |
| /chatgpt-ads/ | publicidad en chatgpt para empresas | Publicidad en ChatGPT para empresas \| Lara Borrego | Publicidad en ChatGPT para empresas | Plantilla servicio |
| /apoyo-agencias/ | freelance paid media para agencias | Freelance de paid media para agencias \| Lara Borrego | Apoyo senior de paid media para agencias | Plantilla servicio |
| /vision-360/ | marketing 360 freelance | Marketing 360 con una sola responsable \| Lara Borrego | Visión 360 | Plantilla servicio + sección Visión 360 de la home |
| /medicion-server-side/ | implementación tracking server-side | Implementación de tracking server-side \| Lara Borrego | Tracking server-side y medición | Plantilla servicio |
| /casos/ | casos de éxito paid media | Casos de éxito en paid media \| Lara Borrego | Casos de éxito | Pendiente (reutilizar tarjetas de caso) |
| /sobre-mi/ | Lara Borrego | Sobre mí \| Lara Borrego | Hola, soy Lara | Pendiente (ampliar sección de la home) |
| /docencia/ | (marca) | Docencia \| Lara Borrego | Docencia | Pendiente |
| /blog/ | blog paid media | Blog de paid media \| Lara Borrego | Blog de paid media | Diseñada (`Blog`) |
| /blog/lead-scoring-google-ads-meta/ | lead scoring google ads | ver sección 6 | ver sección 6 | Diseñada (`Blog-articulo`) |
| /blog/ai-max-search/ | ai max google ads | ver sección 6 | ver sección 6 | Diseñada (`Blog-ai-max`) |
| /blog/tracking-server-side/ | tracking server-side | ver sección 6 | ver sección 6 | Diseñada (`Blog-tracking-server-side`) |
| /blog/chatgpt-ads-espana/ | chatgpt ads españa | ver sección 6 | ver sección 6 | Diseñada (`Blog-chatgpt-ads`) |
| /aviso-legal/, /privacidad/, /cookies/ | | | | Pendiente (texto legal) |
| /freelance-paid-media-granada/ | freelance paid media Granada | | | Fase 2 (capa local) |

Meta description de la home: "Freelance de paid media: Google Ads, Meta Ads, programática y ChatGPT Ads. Campañas medidas en ventas reales. Pide tu auditoría o una llamada gratuita de 30 min."

Para el resto de páginas, escribir una meta description de 140 a 160 caracteres con la palabra clave al principio y la llamada a la acción al final.

### Navegación

- Menú: Paid Media (desplegable con las páginas de servicio) · Visión 360 (desplegable) · Casos · Blog · Docencia · Sobre mí · FAQ · botón "Llamada gratis 30 min" · botón "Pide tu auditoría".
- Los dos botones llevan al formulario de contacto (`/#contacto` o el formulario de la propia página).
- Pie: columnas Paid Media, Visión 360 y Más (Blog, Docencia, LinkedIn) + enlaces legales.

## 5. Contenido de las páginas de servicio

Estructura de la plantilla (`design/Servicio-google-ads.dc.html`):

1. Migas de pan.
2. Hero (H1 con etiqueta, subtítulo, 2 botones y tarjeta con foto y 4 métricas).
3. Qué incluye o tipos de campaña (6 tarjetas).
4. Para quién (3 tarjetas).
5. Qué incluye la gestión (lista con checks).
6. Caso destacado (bloque oscuro).
7. FAQ (4 o 5 preguntas).
8. Enlaces internos (2 artículos + otros servicios).
9. Contacto con formulario.

Métricas disponibles para las tarjetas: 8+ años, +30 % ROAS (e-commerce), +60 % visitas a tienda (supermercados), -40 % coste por lead (formación), 48 h de respuesta. Casos: e-commerce de mascotas (+30 % ROAS, Shopping y PMax por margen), cadena de supermercados (+60 % visitas a tienda, DOOH y campañas locales), centro de formación (-40 % CPL, lead scoring y CRM).

Todas las páginas de servicio cierran con: "Sin permanencia. Trabajo mes a mes con un preaviso de 30 días." FAQ fija en todas: "¿Cuánto cuesta?" → "Cada propuesta es a medida según tus objetivos y tu tipo de negocio. En la llamada inicial vemos el alcance y después te envío una propuesta cerrada."

### /auditoria-google-ads/

- Subtítulo: Reviso tu cuenta de Google Ads o Meta Ads antes de tocar nada y te entrego un plan priorizado a 90 días, lo apliques conmigo o con tu equipo.
- Qué reviso (6): estructura de campañas; términos de búsqueda y ubicaciones; configuración de conversiones y medición; señales al algoritmo (valores, lead scoring, CRM); feed de productos; creatividades y audiencias.
- Para quién: empresas que invierten y no saben si rinde; equipos in-house que quieren una segunda opinión; agencias que heredan una cuenta.
- Entregable: informe con problemas ordenados por impacto + plan de acción + llamada de presentación.
- FAQ: ¿Cuánto tarda? (plazo a confirmar por Lara); ¿Necesitas acceso a la cuenta? (sí, de lectura es suficiente); ¿Puedo aplicarlo con mi equipo? (sí).
- Artículos relacionados: AI Max, tracking server-side.

### /freelance-meta-ads/

- Subtítulo: Campañas en Facebook e Instagram adaptadas a Andromeda y Advantage+, con creatividad como palanca principal y medición con la API de conversiones.
- Tipos (6): Advantage+ ventas; campañas de clientes potenciales; tráfico y remarketing; catálogo dinámico; campañas de interacción para contenido; pruebas creativas.
- Para quién: e-commerce; captación de leads (formación, servicios, inmobiliaria); negocios locales y restauración.
- Qué incluye: API de conversiones, estructura consolidada, pruebas creativas mensuales, lead scoring con CRM, informes semanales de creatividades.
- FAQ: ¿Cómo afecta Andromeda a mis campañas?; ¿Haces tú las creatividades? (dirección creativa y coordinación con especialistas de Visión 360); ¿Formularios instantáneos o landing?
- Artículos relacionados: lead scoring, tracking server-side.

### /freelance-tiktok-ads/

- Subtítulo: Campañas en TikTok con creatividad nativa, pensadas para generar demanda y medidas por su efecto en ventas y búsquedas de marca.
- Tipos: campañas de conversión; Spark Ads; catálogo; alcance y vídeo; píxel y API de eventos; pruebas creativas.
- Para quién: marcas de consumo, e-commerce, formación y apps.
- FAQ: ¿Mi marca necesita estar en TikTok?; ¿Qué tipo de vídeos funcionan?; ¿Cómo se mide?

### /freelance-linkedin-ads/

- Subtítulo: Captación B2B en LinkedIn con segmentación por cargo, sector y empresa, y leads cualificados que vuelven al CRM.
- Tipos: formularios de generación de contactos; contenido patrocinado; mensajes patrocinados; segmentación por cuentas (ABM); remarketing; eventos y webinars.
- Para quién: B2B, formación de posgrado, software, servicios profesionales.
- FAQ: ¿LinkedIn Ads es caro?; ¿Cómo se cualifica un lead B2B?; ¿Se integra con HubSpot o Salesforce?

### /publicidad-programatica/

- Subtítulo: Planifico y compro campañas programáticas y omnicanal: DSP, televisión conectada, exterior digital y audio, medidas por su impacto real.
- Tipos: compra en DSP (DV360, Amazon DSP); televisión conectada (CTV); exterior digital (DOOH); audio digital; display y vídeo; estudios de incremento y visitas a tienda.
- Para quién: marcas medianas y grandes, retail con tiendas físicas, marcas que quieren notoriedad medible.
- Importante: DV360 y Amazon DSP se mencionan como capacidades, nunca como palabra clave principal.
- FAQ: ¿Qué presupuesto necesito para programática?; ¿Cómo se mide la televisión conectada?; ¿Qué es una DSP?

### /chatgpt-ads/

- Subtítulo: Desde agosto de 2026 se puede anunciar en ChatGPT en España. Te ayudo a valorar si encaja, a preparar la medición y a plantear las primeras pruebas.
- Bloques: cómo se ve un anuncio (reutilizar captura del artículo); quién lo ve; cómo se compra; a quién le conviene; cómo preparo una prueba.
- Fuentes: OpenAI y Forbes España (mismas del artículo).
- FAQ: ¿Puedo anunciarme ya?; ¿Los anuncios cambian las respuestas?; ¿Qué datos recibo?
- Artículo relacionado: ChatGPT Ads en España.

### /apoyo-agencias/

- Subtítulo: Colaboro con agencias como apoyo senior de paid media: estrategia, gestión de cuentas, programática y formación de equipos, también bajo tu marca.
- Modalidades: bolsa de horas; proyecto cerrado; revisión de cuentas; formación de equipos; soporte en concursos y propuestas; programática.
- FAQ: ¿Trabajas bajo marca blanca? (sí); ¿Cómo se organiza la bolsa de horas?; ¿Qué plataformas cubres?

### /vision-360/

- Reutilizar la sección Visión 360 de la home como hero y desarrollar cada área (analítica y medición, desarrollo web, UX/UI y CRO, branding y creatividad, CRM y automatización, social media) con 2 frases y "qué incluye".
- Mensaje clave: Lara lleva la estrategia y el paid media y coordina a especialistas; el cliente tiene un único interlocutor.
- FAQ: ¿Quién hace el trabajo de cada área?; ¿Puedo contratar solo una parte?; ¿Cómo se coordinan?

### /medicion-server-side/

- Subtítulo: Configuro tracking server-side, API de conversiones y conversiones mejoradas para que Google y Meta reciban las conversiones que hoy se pierden.
- Incluye: auditoría de medición; GTM en servidor; API de conversiones de Meta con deduplicación; conversiones mejoradas de Google Ads; Consent Mode v2; dashboard de control.
- Artículo relacionado: tracking server-side.

## 6. Blog

| Artículo | URL | Categoría | Fecha | Lectura | Captura |
| --- | --- | --- | --- | --- | --- |
| Lead scoring en Google Ads y Meta: cómo pujar por leads que acaban comprando | /blog/lead-scoring-google-ads-meta/ | Lead scoring y CRM | 18/09/2026 | 12 min | cap-leadscoring-google-ads-fuentes-datos.jpg |
| AI Max para Search: qué cambia y cómo mantener el control | /blog/ai-max-search/ | Google Ads | 11/09/2026 | 9 min | cap-ai-max-terminos-busqueda-difuminada.jpg |
| Tracking server-side: guía para recuperar conversiones perdidas | /blog/tracking-server-side/ | Medición y analítica | 04/09/2026 | 11 min | cap-meta-api-conversiones.jpg |
| ChatGPT Ads en España: cómo funciona y a quién le conviene | /blog/chatgpt-ads-espana/ | IA y ChatGPT Ads | 28/08/2026 | 8 min | cap-chatgpt-ads-ejemplo.jpg |

- El texto completo de cada artículo está en su archivo de `design/`. Montar el blog con **colecciones de contenido de Astro** (un Markdown o MDX por artículo, con frontmatter: título, descripción, fecha, categoría, tiempo de lectura, imagen).
- Title de cada artículo: "{título corto} | Blog Lara Borrego". Meta description: el subtítulo del artículo.
- Categorías (filtros): Google Ads, Meta Ads, Programática, Medición y analítica, Lead scoring y CRM, IA y ChatGPT Ads, Estrategia. Solo mostrar las que tengan artículos o dejarlas preparadas sin enlazar.
- La captura de AI Max debe usarse siempre en su versión difuminada (no se puede reconocer el sector del cliente).
- El bloque "Checklist de auditoría" se ha eliminado. No añadirlo.

## 7. Formulario de contacto

- No hay herramienta de reservas: la "llamada gratuita de 30 min" se pide desde el formulario.
- Campos: ¿Qué necesitas? (select: Una llamada gratuita de 30 min / Una auditoría de mis campañas / Gestión de campañas / Otra cosa), Nombre, Email, Web, Inversión mensual en publicidad (select: Menos de 1.000 € / 1.000 a 5.000 € / 5.000 a 20.000 € / Más de 20.000 €). En las páginas de servicio la inversión es opcional.
- Casilla obligatoria de aceptación de la política de privacidad.
- Todos los botones "Llamada gratis 30 min" y "Pide tu auditoría" llevan al formulario y preseleccionan la opción correspondiente (por ejemplo, con un parámetro `?tipo=llamada`).
- El campo de URL del hero de la home rellena el campo Web del formulario y hace scroll hasta él.
- Guardar en Supabase, tabla `leads`: `id`, `created_at`, `tipo`, `nombre`, `email`, `web`, `inversion`, `pagina_origen`, `utm_source`, `utm_medium`, `utm_campaign`, `gclid`, `fbclid`. Activar RLS: solo inserción pública, lectura solo autenticada. Añadir protección antispam (campo trampa oculto o Turnstile).
- Mensaje tras enviar: "Gracias. Te respondo en 48 horas."
- Evento GA4 `generate_lead` con parámetro `tipo` (llamada, auditoria, gestion, otro).

## 8. SEO técnico

- Una plantilla base con `title`, meta description, canonical, Open Graph y Twitter Card por página.
- `sitemap.xml`, `robots.txt` y página 404 con enlaces a servicios y blog.
- JSON-LD:
  - Home: `Person` (Lara Borrego, jobTitle "Freelance de Paid Media", sameAs LinkedIn) y `ProfessionalService`.
  - Servicios: `Service` + `BreadcrumbList` + `FAQPage`.
  - Artículos: `BlogPosting` con `author` (Person), `datePublished`, `image` + `BreadcrumbList` + `FAQPage`.
- Un solo H1 por página. Las preguntas de FAQ en H3.
- Imágenes en WebP con `width` y `height`, `loading="lazy"` salvo la foto del hero. Nombres descriptivos (por ejemplo `lara-borrego-freelance-paid-media.webp`).
- Textos de enlace descriptivos (nunca "Explorar" o "Leer más" solos).
- Enlazado interno: cada artículo enlaza a su página de servicio y cada servicio a 1 o 2 artículos.
- Alta en Google Search Console y Bing Webmaster Tools.

## 9. Assets

| Archivo | Uso |
| --- | --- |
| assets/lara.jpg | Foto de Lara (hero, sobre mí, autora, tarjeta Visión 360) |
| assets/cap-leadscoring-google-ads-fuentes-datos.jpg | Artículo lead scoring |
| assets/cap-ai-max-terminos-busqueda-difuminada.jpg | Artículo AI Max |
| assets/cap-meta-api-conversiones.jpg | Artículo tracking server-side |
| assets/cap-chatgpt-ads-ejemplo.jpg | Artículo ChatGPT Ads y página /chatgpt-ads/ |

Las portadas de los artículos son gráficos de barras abstractos hechos con HTML y CSS (ver `design/Blog.dc.html`), no imágenes.

## 10. Responsive

- Escritorio 1440 px como referencia. Contenedor máximo 1280 px centrado.
- Tablet (menos de 1024 px): rejillas de 3 columnas a 2; hero en una columna con la foto debajo.
- Móvil (menos de 640 px): una columna; menú en botón hamburguesa con los dos botones visibles dentro; H1 a 40 px, H2 a 32 px; márgenes laterales de 20 px; la tabla comparativa se convierte en tarjetas; las tarjetas de métricas flotantes pasan a una fila bajo la foto.
- Objetivos: Lighthouse 90+ en rendimiento, accesibilidad y SEO. Contraste AA, `label` en todos los campos, foco visible.

## 11. Sobre los archivos de diseño

- Los `.dc.html` son archivos de un editor de diseño: el HTML dentro de `<x-dc>` es el maquetado, y `{{accent}}`, `{{accentText}}` y `{{accentLight}}` son variables de color (valores en la sección 3). Ignorar `support.js` y el bloque `<script type="text/x-dc">`.
- Cada pantalla tiene altura fija por exigencias del editor; en la web real las secciones deben fluir con su contenido.
- La home está dividida en dos archivos (`Main` y `Home-2`) solo por el límite de altura del editor. Es una sola página.

## 12. Pendiente de decidir por Lara

- Dominio.
- Plazo de entrega de la auditoría.
- Textos de Sobre mí ampliado, Docencia y páginas de casos.
- Textos legales (aviso legal, privacidad, cookies).
- Capa local de Granada (fase 2).
