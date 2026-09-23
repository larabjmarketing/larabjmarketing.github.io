// Contenido de las páginas de servicio (sección 5 del brief).
// Todas usan la plantilla de design/Servicio-google-ads.dc.html (src/layouts/ServiceLayout.astro).
// Los textos que no venían en el brief están redactados para revisión: sin cifras ni clientes inventados.
import type { IconName } from '../components/Icon.astro';
import type { FaqItem } from '../components/Faq.astro';
import type { Tipo } from '../lib/contact';
import type { CaseKey } from './cases';
import type { ArticleKey } from './articles';

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  seoTitle: string;
  description: string;
  /** Tipo de servicio para el JSON-LD */
  serviceType: string;
  parent: 'paid' | '360';
  breadcrumb: string;
  /** Etiqueta dentro del H1 (palabra clave) */
  eyebrow: string;
  headline: string;
  /** Parte del titular en color de acento */
  highlight?: string;
  subtitle: string;
  primaryCta: string;
  primaryTipo: Tipo;
  cardCaption?: string;
  metrics: [ServiceMetric, ServiceMetric, ServiceMetric, ServiceMetric];
  features?: {
    eyebrow: string;
    title: string;
    text?: string;
    items: { icon: IconName; title: string; text: string }[];
  };
  audience?: {
    eyebrow?: string;
    title: string;
    items: { label?: string; title: string; text: string }[];
  };
  includes: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  caseStudy?: CaseKey;
  faq: { title: string; items: FaqItem[] };
  articles: ArticleKey[];
  otherServices: { label: string; href: string }[];
  contact: {
    title: string;
    text: string;
    auditoriaLabel?: string;
    defaultTipo: Tipo;
  };
}

// Pregunta fija en todas las páginas de servicio (sección 5 del brief)
const PRECIO: FaqItem = {
  q: '¿Cuánto cuesta?',
  a: 'Cada propuesta es a medida según tus objetivos y tu tipo de negocio. En la llamada inicial vemos el alcance y después te envío una propuesta cerrada.',
};

export const SIN_PERMANENCIA = 'Sin permanencia. Trabajo mes a mes con un preaviso de 30 días.';

const M = {
  anos: (label = 'en paid media y ad ops'): ServiceMetric => ({ value: '8+ años', label }),
  roas: { value: '+30%', label: 'ROAS en e-commerce' },
  visitas: { value: '+60%', label: 'visitas a tienda en retail' },
  cpl: (label = 'coste por lead en formación'): ServiceMetric => ({ value: '-40%', label }),
  respuesta: { value: '48 h', label: 'para responder tu solicitud' },
  plataformas: { value: '11', label: 'plataformas y formatos' },
  preaviso: { value: '30 días', label: 'de preaviso, sin permanencia' },
} as const;

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'freelance-google-ads',
    seoTitle: 'Freelance de Google Ads | Lara Borrego',
    description:
      'Freelance de Google Ads: Search, Performance Max, Shopping, AI Max y YouTube gestionados en tu cuenta y medidos en ventas. Pide tu auditoría o una llamada.',
    serviceType: 'Gestión de campañas de Google Ads',
    parent: 'paid',
    breadcrumb: 'Google Ads',
    eyebrow: 'Freelance de Google Ads',
    headline: 'Campañas de Google Ads que se miden en ventas.',
    highlight: 'ventas',
    subtitle:
      'Monto, gestiono y optimizo tus campañas de Search, Shopping, Performance Max y YouTube. Trabajo dentro de tu cuenta y cada semana reviso términos de búsqueda, conversiones y gasto.',
    primaryCta: 'Pide tu auditoría de Google Ads',
    primaryTipo: 'auditoria',
    metrics: [M.anos('gestionando Google Ads'), M.roas, M.cpl(), M.respuesta],
    features: {
      eyebrow: 'Campañas que gestiono',
      title: 'Todos los tipos de campaña de Google Ads.',
      text: 'Elijo la combinación según tu objetivo y tu presupuesto. No hace falta tenerlas todas: hace falta que cada una tenga un papel claro.',
      items: [
        { icon: 'search', title: 'Search', text: 'Campañas de búsqueda con estructura por intención, concordancias bien elegidas y revisión semanal de términos.' },
        { icon: 'star', title: 'Performance Max', text: 'Grupos de recursos por categoría o margen, señales de audiencia y exclusiones de marca y URL.' },
        { icon: 'bag', title: 'Shopping', text: 'Optimización del feed en Merchant Center: títulos, atributos, etiquetas personalizadas y precios.' },
        { icon: 'trend', title: 'AI Max', text: 'Activación como experimento, control de términos, marcas y URL finales antes de escalar.' },
        { icon: 'video', title: 'YouTube', text: 'Vídeo para generar demanda y remarketing, medido por su efecto en búsquedas y conversiones.' },
        { icon: 'layout', title: 'Demand Gen', text: 'Anuncios en Discover, Gmail y YouTube para llegar a quien todavía no te busca.' },
      ],
    },
    audience: {
      title: 'Cómo adapto Google Ads a cada tipo de negocio.',
      items: [
        { title: 'E-commerce', text: 'Shopping y Performance Max con el catálogo segmentado por rentabilidad, para que la inversión vaya a los productos que dejan margen.' },
        { title: 'Captación de leads', text: 'Search y AI Max con lead scoring: el CRM devuelve a Google qué leads compran para que las campañas busquen más como ellos.' },
        { title: 'Negocios locales', text: 'Search, Performance Max con objetivos de tienda y ficha de Google para atraer llamadas, reservas y visitas.' },
      ],
    },
    includes: {
      eyebrow: 'Gestión mensual',
      title: 'Qué incluye la gestión de Google Ads.',
      items: [
        'Auditoría inicial de la cuenta y de la medición',
        'Estructura de campañas por objetivo y margen',
        'Conversiones con valor, conversiones mejoradas e importación desde el CRM',
        'Revisión semanal de términos de búsqueda y negativas',
        'Recursos de anuncios y extensiones actualizados',
        'Estrategias de puja por valor (tROAS, tCPA)',
        'Experimentos para validar cada cambio importante',
        'Dashboard en tiempo real y reunión mensual',
      ],
    },
    caseStudy: 'mascotas',
    faq: {
      title: 'Dudas sobre contratar una freelance de Google Ads.',
      items: [
        {
          q: '¿Cuánto cuesta contratar a una freelance de Google Ads?',
          a: 'Cada propuesta es a medida según tus objetivos, el tipo de negocio y las campañas que necesites. En la llamada inicial vemos el alcance y después te envío una propuesta cerrada.',
        },
        {
          q: '¿Qué diferencia hay entre Search y Performance Max?',
          a: 'Search aparece cuando alguien busca algo concreto y te da control sobre las palabras clave. Performance Max usa todo el inventario de Google (búsqueda, Shopping, YouTube, Display, Discover y Maps) y decide la IA. En muchas cuentas conviven.',
        },
        {
          q: '¿Puedo seguir usando mi cuenta de Google Ads actual?',
          a: 'Sí, y es lo recomendable. Trabajo dentro de tu cuenta con acceso de administradora para no perder el histórico ni los datos de aprendizaje.',
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Acceso a Google Ads, Google Analytics y Tag Manager, tus objetivos de negocio y, si lo tienes, acceso al CRM o a los datos de ventas.',
        },
        {
          q: '¿Haces también auditorías de Google Ads sin gestión?',
          a: 'Sí. Puedo auditar la cuenta y entregarte el plan para que lo aplique tu equipo o tu agencia.',
        },
      ],
    },
    articles: ['aiMax', 'leadScoring'],
    otherServices: [
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'Programática', href: '/publicidad-programatica/' },
      { label: 'Servicios 360', href: '/servicios-360/' },
    ],
    contact: {
      title: '¿Revisamos tu cuenta de Google Ads?',
      text: 'Cuéntame qué campañas tienes activas y qué te gustaría conseguir. Te respondo en 48 horas con lo que veo y con lo que haría primero.',
      auditoriaLabel: 'Una auditoría de Google Ads',
      defaultTipo: 'auditoria',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'auditoria-google-ads',
    seoTitle: 'Auditoría de Google Ads y Meta Ads | Lara Borrego',
    description:
      'Auditoría de Google Ads y Meta Ads: reviso estructura, medición, señales y creatividades y te entrego un plan priorizado a 90 días. Pide tu auditoría.',
    serviceType: 'Auditoría de Google Ads y Meta Ads',
    parent: 'paid',
    breadcrumb: 'Auditoría',
    eyebrow: 'Auditoría de Google Ads y Meta Ads',
    headline: 'Antes de invertir más, mira en qué se va lo que ya inviertes.',
    highlight: 'ya inviertes',
    subtitle:
      'Reviso tu cuenta de Google Ads o Meta Ads antes de tocar nada y te entrego un plan priorizado a 90 días, lo apliques conmigo o con tu equipo.',
    primaryCta: 'Pide tu auditoría',
    primaryTipo: 'auditoria',
    cardCaption: 'Revisa tu cuenta en persona',
    metrics: [
      M.anos('en cuentas de Google Ads y Meta'),
      { value: '90 días', label: 'de plan de acción priorizado' },
      M.roas,
      M.respuesta,
    ],
    features: {
      eyebrow: 'Qué reviso',
      title: 'Seis puntos que reviso en cada cuenta.',
      text: 'Empiezo por lo que más dinero mueve y termino con una lista de cambios ordenada por impacto.',
      items: [
        { icon: 'layers', title: 'Estructura de campañas', text: 'Cómo está organizada la cuenta, si cada campaña tiene un papel claro y si el presupuesto va donde hay retorno.' },
        { icon: 'filter', title: 'Términos de búsqueda y ubicaciones', text: 'Búsquedas, ubicaciones y audiencias que gastan sin convertir, y las negativas o exclusiones que faltan.' },
        { icon: 'gauge', title: 'Conversiones y medición', text: 'Qué conversiones se optimizan, si coinciden con ventas reales y cuánta señal se pierde por cookies o bloqueadores.' },
        { icon: 'signal', title: 'Señales al algoritmo', text: 'Valores de conversión, lead scoring y datos del CRM: lo que el algoritmo necesita para pujar por lo que te interesa.' },
        { icon: 'tag', title: 'Feed de productos', text: 'Títulos, atributos, etiquetas personalizadas y errores de Merchant Center que limitan Shopping y Performance Max.' },
        { icon: 'image', title: 'Creatividades y audiencias', text: 'Anuncios, recursos y audiencias: qué falta, qué se repite y qué convendría probar.' },
      ],
    },
    audience: {
      title: '¿Para quién es la auditoría?',
      items: [
        { title: 'Empresas que ya invierten', text: 'Tienes campañas activas, gastas cada mes y no tienes claro qué parte de esa inversión trae ventas.' },
        { title: 'Equipos in-house', text: 'Llevas las cuentas dentro de la empresa y quieres una segunda opinión senior antes de tomar decisiones.' },
        { title: 'Agencias que heredan una cuenta', text: 'Acabas de recibir una cuenta nueva y necesitas saber en qué estado está antes de proponer cambios.' },
      ],
    },
    includes: {
      eyebrow: 'Entregable',
      title: 'Qué recibes con la auditoría.',
      items: [
        'Informe con los problemas detectados, ordenados por impacto',
        'Plan de acción priorizado a 90 días',
        'Revisión de la medición y de las señales que recibe el algoritmo',
        'Llamada para presentarte los resultados y resolver dudas',
        'Un plan que puedes aplicar conmigo o con tu equipo',
      ],
    },
    caseStudy: 'mascotas',
    faq: {
      title: 'Dudas sobre la auditoría de Google Ads y Meta Ads.',
      items: [
        PRECIO,
        {
          q: '¿Cuánto tarda?',
          a: 'Depende del tamaño de la cuenta y de cuántas plataformas revisemos. Te confirmo el plazo en la llamada inicial, antes de empezar.',
        },
        {
          q: '¿Necesitas acceso a mi cuenta?',
          a: 'Sí, pero con acceso de lectura es suficiente. Durante la auditoría no cambio nada en tus campañas.',
        },
        {
          q: '¿Puedo aplicar el plan con mi equipo?',
          a: 'Sí. El plan está pensado para que lo pueda aplicar tu equipo o tu agencia. Si prefieres que lo aplique yo, también podemos hacerlo.',
        },
      ],
    },
    articles: ['aiMax', 'serverSide'],
    otherServices: [
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'Tracking server-side', href: '/medicion-server-side/' },
    ],
    contact: {
      title: '¿Revisamos tus campañas?',
      text: 'Cuéntame qué plataformas usas y qué te preocupa de tus campañas. Te respondo en 48 horas con los siguientes pasos para la auditoría.',
      defaultTipo: 'auditoria',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'freelance-meta-ads',
    seoTitle: 'Freelance de Meta Ads | Lara Borrego',
    description:
      'Freelance de Meta Ads: campañas en Facebook e Instagram con Advantage+, pruebas creativas y API de conversiones, medidas en ventas. Pide tu auditoría.',
    serviceType: 'Gestión de campañas de Meta Ads',
    parent: 'paid',
    breadcrumb: 'Meta Ads',
    eyebrow: 'Freelance de Meta Ads',
    headline: 'Campañas en Facebook e Instagram que se miden en ventas.',
    highlight: 'ventas',
    subtitle:
      'Campañas en Facebook e Instagram adaptadas a Andromeda y Advantage+, con creatividad como palanca principal y medición con la API de conversiones.',
    primaryCta: 'Pide tu auditoría de Meta Ads',
    primaryTipo: 'auditoria',
    metrics: [M.anos(), M.cpl(), M.roas, M.respuesta],
    features: {
      eyebrow: 'Campañas que gestiono',
      title: 'Campañas de Meta Ads para cada objetivo.',
      text: 'Con Andromeda la creatividad pesa más que la segmentación, así que trabajo con pocas campañas bien consolidadas y muchas pruebas de anuncios.',
      items: [
        { icon: 'cart', title: 'Advantage+ ventas', text: 'Campañas de ventas con el catálogo y la API de conversiones, optimizadas por valor cuando hay datos suficientes.' },
        { icon: 'form', title: 'Clientes potenciales', text: 'Formularios instantáneos o landing, con preguntas que filtran y lead scoring para que Meta aprenda qué leads compran.' },
        { icon: 'refresh', title: 'Tráfico y remarketing', text: 'Recuperar a quien visitó tu web o interactuó con tu marca, con mensajes distintos según la etapa.' },
        { icon: 'layers', title: 'Catálogo dinámico', text: 'Anuncios que muestran a cada persona los productos que ha visto o que encajan con lo que busca.' },
        { icon: 'heart', title: 'Interacción para contenido', text: 'Difusión de contenido para crear audiencias propias que después alimentan las campañas de conversión.' },
        { icon: 'flask', title: 'Pruebas creativas', text: 'Pruebas mensuales de formatos, ganchos y mensajes para encontrar los anuncios que sostienen el rendimiento.' },
      ],
    },
    audience: {
      title: 'Cómo adapto Meta Ads a cada tipo de negocio.',
      items: [
        { title: 'E-commerce', text: 'Advantage+ ventas y catálogo, con la API de conversiones bien configurada para no perder compras ni valor.' },
        { title: 'Captación de leads', text: 'Formación, servicios o inmobiliaria: formularios con filtro, lead scoring y CRM conectado para pujar por calidad.' },
        { title: 'Negocios locales y restauración', text: 'Alcance en tu zona, ofertas y reservas, con creatividades que se reconocen en el scroll.' },
      ],
    },
    includes: {
      eyebrow: 'Gestión mensual',
      title: 'Qué incluye la gestión de Meta Ads.',
      items: [
        'Auditoría inicial de la cuenta y de la medición',
        'API de conversiones con deduplicación del píxel',
        'Estructura consolidada, adaptada a Andromeda y Advantage+',
        'Pruebas creativas cada mes',
        'Lead scoring conectado con tu CRM',
        'Informes semanales de rendimiento de las creatividades',
        'Dashboard en tiempo real y reunión mensual',
      ],
    },
    caseStudy: 'formacion',
    faq: {
      title: 'Dudas sobre contratar una freelance de Meta Ads.',
      items: [
        PRECIO,
        {
          q: '¿Cómo afecta Andromeda a mis campañas?',
          a: 'Andromeda es el sistema con el que Meta elige qué anuncio enseñar a cada persona. Da más peso a la creatividad y menos a la segmentación manual, así que funciona mejor con estructuras consolidadas y variedad real de anuncios. Si tu cuenta tiene muchas campañas pequeñas y pocos anuncios, probablemente estés limitando el aprendizaje.',
        },
        {
          q: '¿Haces tú las creatividades?',
          a: 'Me encargo de la dirección creativa: qué probar, con qué mensajes y en qué formatos. La producción la hacen especialistas de diseño y vídeo con los que trabajo en Servicios 360, y yo coordino todo para que tengas un único interlocutor.',
        },
        {
          q: '¿Formularios instantáneos o landing?',
          a: 'Depende del negocio. Los formularios instantáneos dan más volumen y un coste por lead más bajo, pero suelen traer leads de menor calidad. Una landing filtra más. Lo decido según lo que pasa después en tu CRM, no solo por el coste por lead.',
        },
      ],
    },
    articles: ['leadScoring', 'serverSide'],
    otherServices: [
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'TikTok Ads', href: '/freelance-tiktok-ads/' },
      { label: 'Servicios 360', href: '/servicios-360/' },
    ],
    contact: {
      title: '¿Revisamos tu cuenta de Meta Ads?',
      text: 'Cuéntame qué campañas tienes activas en Facebook e Instagram y qué te gustaría conseguir. Te respondo en 48 horas con lo que veo y con lo que haría primero.',
      auditoriaLabel: 'Una auditoría de Meta Ads',
      defaultTipo: 'auditoria',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'freelance-tiktok-ads',
    seoTitle: 'Freelance de TikTok Ads | Lara Borrego',
    description:
      'Freelance de TikTok Ads: campañas con creatividad nativa, Spark Ads y API de eventos, medidas por su efecto en ventas y búsquedas de marca. Hablemos.',
    serviceType: 'Gestión de campañas de TikTok Ads',
    parent: 'paid',
    breadcrumb: 'TikTok Ads',
    eyebrow: 'Freelance de TikTok Ads',
    headline: 'Campañas en TikTok que generan demanda y se notan en ventas.',
    highlight: 'ventas',
    subtitle:
      'Campañas en TikTok con creatividad nativa, pensadas para generar demanda y medidas por su efecto en ventas y búsquedas de marca.',
    primaryCta: 'Quiero probar TikTok Ads',
    primaryTipo: 'gestion',
    metrics: [M.anos(), M.plataformas, M.respuesta, M.preaviso],
    features: {
      eyebrow: 'Campañas que gestiono',
      title: 'Todo lo que hace falta para anunciarse en TikTok.',
      text: 'En TikTok el anuncio tiene que parecer contenido de la plataforma. Por eso la creatividad y la medición van juntas desde el primer día.',
      items: [
        { icon: 'cart', title: 'Campañas de conversión', text: 'Optimizadas por compras o leads con el píxel y la API de eventos, para que el algoritmo aprenda de resultados reales.' },
        { icon: 'sparkle', title: 'Spark Ads', text: 'Anuncios a partir de publicaciones orgánicas de tu cuenta o de creadores, que conservan sus interacciones.' },
        { icon: 'layers', title: 'Catálogo', text: 'Anuncios de producto a partir de tu catálogo, pensados para e-commerce con muchas referencias.' },
        { icon: 'video', title: 'Alcance y vídeo', text: 'Campañas para llegar a nuevas audiencias y generar búsquedas de marca que después recogen otros canales.' },
        { icon: 'code', title: 'Píxel y API de eventos', text: 'Configuración y revisión de la medición para que TikTok reciba las conversiones que hoy se pierden.' },
        { icon: 'flask', title: 'Pruebas creativas', text: 'Pruebas continuas de ganchos, formatos y mensajes, porque en TikTok los anuncios se desgastan rápido.' },
      ],
    },
    audience: {
      title: 'Para quién tiene sentido TikTok Ads.',
      items: [
        { title: 'Marcas de consumo y e-commerce', text: 'Productos que se entienden en pocos segundos de vídeo y catálogos que funcionan bien con anuncios dinámicos.' },
        { title: 'Formación', text: 'Centros y escuelas que quieren llegar a un público joven y llenar el embudo antes de la captación.' },
        { title: 'Apps', text: 'Campañas de instalación y de acciones dentro de la app, medidas con las herramientas de atribución que ya uses.' },
      ],
    },
    includes: {
      eyebrow: 'Gestión mensual',
      title: 'Qué incluye la gestión de TikTok Ads.',
      items: [
        'Auditoría inicial de la cuenta y de la medición',
        'Configuración del píxel y de la API de eventos',
        'Estructura de campañas por objetivo',
        'Dirección creativa y pruebas continuas de anuncios',
        'Coordinación con creadores y especialistas de vídeo',
        'Lectura del efecto en ventas y en búsquedas de marca',
        'Dashboard en tiempo real y reunión mensual',
      ],
    },
    faq: {
      title: 'Dudas sobre anunciarse en TikTok.',
      items: [
        PRECIO,
        {
          q: '¿Mi marca necesita estar en TikTok?',
          a: 'No siempre. Tiene sentido si tu público está allí y si puedes producir vídeo con cierta frecuencia. En la llamada inicial lo valoramos con tus datos y, si no encaja, te lo digo.',
        },
        {
          q: '¿Qué tipo de vídeos funcionan?',
          a: 'Los que parecen hechos para TikTok: en vertical, con un gancho en los primeros segundos, personas reales y un mensaje claro. Los anuncios demasiado pulidos suelen rendir peor que un vídeo sencillo bien planteado.',
        },
        {
          q: '¿Cómo se mide?',
          a: 'Con el píxel y la API de eventos para las conversiones directas. Como TikTok genera mucha demanda que se cierra en otros canales, también miro la evolución de las búsquedas de marca y de las ventas totales mientras están activas las campañas.',
        },
      ],
    },
    articles: ['serverSide'],
    otherServices: [
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'LinkedIn Ads', href: '/freelance-linkedin-ads/' },
      { label: 'Servicios 360', href: '/servicios-360/' },
    ],
    contact: {
      title: '¿Hablamos de TikTok Ads?',
      text: 'Cuéntame qué vendes y a quién. Te respondo en 48 horas con lo que haría en una primera prueba.',
      auditoriaLabel: 'Una auditoría de TikTok Ads',
      defaultTipo: 'gestion',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'freelance-linkedin-ads',
    seoTitle: 'Freelance de LinkedIn Ads | Lara Borrego',
    description:
      'Freelance de LinkedIn Ads: captación B2B con segmentación por cargo, sector y empresa, y leads cualificados que vuelven a tu CRM. Pide tu auditoría.',
    serviceType: 'Gestión de campañas de LinkedIn Ads',
    parent: 'paid',
    breadcrumb: 'LinkedIn Ads',
    eyebrow: 'Freelance de LinkedIn Ads',
    headline: 'Captación B2B en LinkedIn con leads que llegan cualificados.',
    highlight: 'cualificados',
    subtitle:
      'Captación B2B en LinkedIn con segmentación por cargo, sector y empresa, y leads cualificados que vuelven al CRM.',
    primaryCta: 'Pide tu auditoría de LinkedIn Ads',
    primaryTipo: 'auditoria',
    metrics: [M.anos(), M.plataformas, M.respuesta, M.preaviso],
    features: {
      eyebrow: 'Campañas que gestiono',
      title: 'Formatos de LinkedIn Ads que uso.',
      text: 'En LinkedIn el clic es caro, así que cada formato tiene que cumplir un papel claro dentro del embudo.',
      items: [
        { icon: 'form', title: 'Formularios de generación de contactos', text: 'Formularios dentro de LinkedIn, rellenados con los datos del perfil y con preguntas que filtran.' },
        { icon: 'megaphone', title: 'Contenido patrocinado', text: 'Publicaciones, vídeos y documentos que muestran lo que sabes hacer a quien decide la compra.' },
        { icon: 'message', title: 'Mensajes patrocinados', text: 'Mensajes directos para invitaciones, eventos o propuestas muy concretas.' },
        { icon: 'target', title: 'Segmentación por cuentas (ABM)', text: 'Campañas dirigidas a una lista de empresas concretas, con mensajes adaptados a cada grupo.' },
        { icon: 'refresh', title: 'Remarketing', text: 'Volver a impactar a quien visitó tu web, vio tus vídeos o abrió un formulario sin enviarlo.' },
        { icon: 'calendar2', title: 'Eventos y webinars', text: 'Captación de asistentes para eventos y webinars, con el registro conectado a tu CRM.' },
      ],
    },
    audience: {
      title: 'Para quién es LinkedIn Ads.',
      items: [
        { title: 'B2B y servicios profesionales', text: 'Consultoras, despachos y empresas que venden a otras empresas y necesitan llegar a quien decide.' },
        { title: 'Software', text: 'Empresas de software que buscan demos o pruebas con perfiles concretos por cargo, sector y tamaño de empresa.' },
        { title: 'Formación de posgrado', text: 'Másteres y programas ejecutivos que necesitan llegar a profesionales con una trayectoria concreta.' },
      ],
    },
    includes: {
      eyebrow: 'Gestión mensual',
      title: 'Qué incluye la gestión de LinkedIn Ads.',
      items: [
        'Auditoría inicial de la cuenta y de la medición',
        'Segmentación por cargo, sector, tamaño de empresa y listas de cuentas',
        'Insight Tag y conversiones de LinkedIn configuradas',
        'Formularios con preguntas de cualificación',
        'Integración de los leads con tu CRM',
        'Conversiones offline de vuelta a LinkedIn según la calidad del lead',
        'Dashboard en tiempo real y reunión mensual',
      ],
    },
    faq: {
      title: 'Dudas sobre LinkedIn Ads.',
      items: [
        PRECIO,
        {
          q: '¿LinkedIn Ads es caro?',
          a: 'El clic es más caro que en otras plataformas, pero la comparación útil es el coste por lead cualificado o por cliente. Si vendes un servicio B2B de valor alto, llegar exactamente a quien decide suele compensar. Por eso mido LinkedIn por oportunidades de venta, no por clics.',
        },
        {
          q: '¿Cómo se cualifica un lead B2B?',
          a: 'Con las preguntas del formulario, los datos del perfil (cargo, empresa, sector) y lo que pasa después en tu CRM. Con eso definimos qué es un buen lead y devuelvo esa información a la plataforma para que busque más como él.',
        },
        {
          q: '¿Se integra con HubSpot o Salesforce?',
          a: 'Sí. Los formularios de LinkedIn se conectan con HubSpot y Salesforce para que los leads entren al momento en tu CRM, y el estado de cada lead puede volver a LinkedIn como conversión offline.',
        },
      ],
    },
    articles: ['leadScoring'],
    otherServices: [
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'Apoyo a agencias', href: '/apoyo-agencias/' },
    ],
    contact: {
      title: '¿Hablamos de tu captación B2B?',
      text: 'Cuéntame a quién vendes y cómo captas clientes hoy. Te respondo en 48 horas con lo que veo y con lo que haría primero.',
      auditoriaLabel: 'Una auditoría de LinkedIn Ads',
      defaultTipo: 'auditoria',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'publicidad-programatica',
    seoTitle: 'Freelance de publicidad programática | Lara Borrego',
    description:
      'Freelance de publicidad programática: DSP, televisión conectada, exterior digital y audio, planificados y medidos por su impacto real. Hablemos de tu plan.',
    serviceType: 'Publicidad programática y omnicanal',
    parent: 'paid',
    breadcrumb: 'Programática',
    eyebrow: 'Publicidad programática y omnicanal',
    headline: 'Programática y omnicanal medida por su impacto real.',
    highlight: 'impacto real',
    subtitle:
      'Planifico y compro campañas programáticas y omnicanal: DSP, televisión conectada, exterior digital y audio, medidas por su impacto real.',
    primaryCta: 'Hablemos de tu plan de medios',
    primaryTipo: 'gestion',
    metrics: [M.anos('en programática y ad ops'), M.visitas, M.plataformas, M.respuesta],
    features: {
      eyebrow: 'Qué compro',
      title: 'Canales y formatos de publicidad programática.',
      text: 'Elijo los canales según el objetivo y el presupuesto, y los mido juntos para saber qué aporta cada uno.',
      items: [
        { icon: 'screen', title: 'Compra en DSP', text: 'Campañas en DSPs como DV360 y Amazon DSP, con audiencias propias, de terceros y contextuales.' },
        { icon: 'tv', title: 'Televisión conectada (CTV)', text: 'Anuncios en plataformas de streaming y apps de televisión, con la segmentación del entorno digital.' },
        { icon: 'pin', title: 'Exterior digital (DOOH)', text: 'Pantallas digitales en calles, centros comerciales y transporte, activadas por zona y horario.' },
        { icon: 'audio', title: 'Audio digital', text: 'Anuncios en plataformas de música, podcasts y radio online para acompañar el resto del plan.' },
        { icon: 'layout', title: 'Display y vídeo', text: 'Formatos gráficos y de vídeo en webs y apps de calidad, con control de ubicaciones y frecuencia.' },
        { icon: 'chart', title: 'Estudios de incremento y visitas a tienda', text: 'Medición del efecto real: incremento de ventas, búsquedas de marca y visitas a tienda.' },
      ],
    },
    audience: {
      title: 'Para quién es la programática.',
      items: [
        { title: 'Marcas medianas y grandes', text: 'Marcas que ya cubren búsqueda y redes sociales y quieren llegar a más gente con control sobre dónde aparecen.' },
        { title: 'Retail con tiendas físicas', text: 'Cadenas que necesitan llevar gente a la tienda y medir las visitas que generan sus campañas.' },
        { title: 'Marcas que quieren notoriedad medible', text: 'Marcas que invierten en notoriedad y quieren saber qué aporta, no solo cuántas impresiones compran.' },
      ],
    },
    includes: {
      eyebrow: 'Gestión mensual',
      title: 'Qué incluye la gestión de programática.',
      items: [
        'Planificación de medios por objetivo y audiencia',
        'Compra y optimización en DSP',
        'Control de ubicaciones, frecuencia y seguridad de marca',
        'Coordinación de formatos de CTV, DOOH y audio',
        'Diseño de estudios de incremento y visitas a tienda',
        'Informes que conectan la inversión con resultados de negocio',
        'Reunión mensual con conclusiones y siguientes pasos',
      ],
    },
    caseStudy: 'supermercados',
    faq: {
      title: 'Dudas sobre la publicidad programática.',
      items: [
        PRECIO,
        {
          q: '¿Qué presupuesto necesito para programática?',
          a: 'Depende de los canales. Algunos formatos, como la televisión conectada o ciertos acuerdos con medios, piden inversiones mínimas más altas que la búsqueda o las redes sociales. En la llamada vemos tus objetivos y te digo qué combinación tiene sentido con tu presupuesto.',
        },
        {
          q: '¿Cómo se mide la televisión conectada?',
          a: 'Con varias señales a la vez: alcance y anuncios vistos completos, efecto en las búsquedas de marca y en el tráfico directo y, cuando es posible, estudios de incremento que comparan zonas o audiencias expuestas con otras que no lo están.',
        },
        {
          q: '¿Qué es una DSP?',
          a: 'Una plataforma de compra de publicidad programática (Demand Side Platform). Desde ella se compran impresiones en webs, apps, televisión conectada, audio y pantallas exteriores, con segmentación y reglas de puja. DV360 y Amazon DSP son dos de las más conocidas.',
        },
      ],
    },
    articles: ['serverSide'],
    otherServices: [
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'Servicios 360', href: '/servicios-360/' },
    ],
    contact: {
      title: '¿Hablamos de tu plan de medios?',
      text: 'Cuéntame qué objetivos tienes y en qué canales estás hoy. Te respondo en 48 horas con cómo plantearía el plan.',
      defaultTipo: 'gestion',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'chatgpt-ads',
    seoTitle: 'Publicidad en ChatGPT para empresas | Lara Borrego',
    description:
      'Publicidad en ChatGPT para empresas en España: cómo se ven los anuncios, cómo se compran y cómo preparo la medición y la primera prueba. Hablemos 30 min.',
    serviceType: 'Publicidad en ChatGPT',
    parent: 'paid',
    breadcrumb: 'ChatGPT Ads',
    eyebrow: 'Publicidad en ChatGPT para empresas',
    headline: 'Anuncia tu negocio en ChatGPT con la medición preparada.',
    highlight: 'ChatGPT',
    subtitle:
      'Desde agosto de 2026 se puede anunciar en ChatGPT en España. Te ayudo a valorar si encaja, a preparar la medición y a plantear las primeras pruebas.',
    primaryCta: 'Quiero valorar ChatGPT Ads',
    primaryTipo: 'llamada',
    cardCaption: 'Plantea contigo la primera prueba',
    metrics: [
      { value: 'Ago 2026', label: 'anuncios en ChatGPT en España' },
      M.anos(),
      M.plataformas,
      M.respuesta,
    ],
    audience: {
      eyebrow: 'A quién le conviene',
      title: 'Dónde veo más sentido a ChatGPT Ads ahora.',
      items: [
        { title: 'Energía y seguros', text: 'Decisiones en las que la gente compara y pregunta antes de contratar, justo lo que hace en ChatGPT.' },
        { title: 'Viajes y formación', text: 'Compras con mucha búsqueda de consejo previa, en las que el anuncio llega justo después de la pregunta.' },
        { title: 'Software y finanzas personales', text: 'Productos que la gente investiga con calma y en los que una buena recomendación pesa mucho.' },
      ],
    },
    includes: {
      eyebrow: 'Primera prueba',
      title: 'Cómo preparo una prueba en ChatGPT Ads.',
      items: [
        'Un objetivo claro: leads, ventas o visitas a una página concreta, pero solo uno',
        'Medición antes de lanzar: píxel y API de conversiones configurados y probados',
        'Un anuncio que continúe la conversación del usuario en lugar de interrumpirla',
        'Un presupuesto de prueba separado del resto de canales',
        'Comparación con lo que te cuesta ese mismo resultado en Search',
      ],
    },
    faq: {
      title: 'Dudas sobre la publicidad en ChatGPT.',
      items: [
        PRECIO,
        {
          q: '¿Puedo anunciarme ya en ChatGPT desde España?',
          a: 'Sí, desde el 24 de agosto de 2026, aunque por ahora sin autoservicio: el acceso es a través de OpenAI, agencias y socios.',
        },
        {
          q: '¿Los anuncios cambian lo que responde ChatGPT?',
          a: 'Según OpenAI, no. Los anuncios se muestran separados de la respuesta y marcados como patrocinados.',
        },
        {
          q: '¿Qué datos recibo como anunciante?',
          a: 'Métricas agregadas de campaña y las conversiones que mides con el píxel o la API. No tienes acceso a las conversaciones.',
        },
      ],
    },
    articles: ['chatgpt'],
    otherServices: [
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Tracking server-side', href: '/medicion-server-side/' },
      { label: 'Servicios 360', href: '/servicios-360/' },
    ],
    contact: {
      title: '¿Probamos ChatGPT Ads?',
      text: 'Cuéntame qué vendes y cómo mides hoy tus campañas. Te respondo en 48 horas y valoramos si tiene sentido una primera prueba.',
      defaultTipo: 'llamada',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'apoyo-agencias',
    seoTitle: 'Freelance de paid media para agencias | Lara Borrego',
    description:
      'Freelance de paid media para agencias: apoyo senior en estrategia, gestión de cuentas, programática y formación de equipos, también bajo tu marca. Hablemos.',
    serviceType: 'Apoyo de paid media para agencias',
    parent: 'paid',
    breadcrumb: 'Apoyo a agencias',
    eyebrow: 'Apoyo senior de paid media para agencias',
    headline: 'Una freelance senior para tu equipo, también bajo tu marca.',
    highlight: 'bajo tu marca',
    subtitle:
      'Colaboro con agencias como apoyo senior de paid media: estrategia, gestión de cuentas, programática y formación de equipos, también bajo tu marca.',
    primaryCta: 'Hablemos de tu agencia',
    primaryTipo: 'llamada',
    cardCaption: 'Trabaja con tu equipo en persona',
    metrics: [M.anos(), M.plataformas, M.respuesta, M.preaviso],
    features: {
      eyebrow: 'Modalidades',
      title: 'Cómo puedo trabajar con tu agencia.',
      text: 'Me adapto a cómo trabaja tu equipo: desde unas horas al mes hasta proyectos completos.',
      items: [
        { icon: 'clock', title: 'Bolsa de horas', text: 'Horas mensuales de perfil senior para estrategia, gestión de cuentas o picos de trabajo.' },
        { icon: 'briefcase', title: 'Proyecto cerrado', text: 'Un lanzamiento, una migración de cuenta o una reestructuración con alcance y plazo definidos.' },
        { icon: 'search-plus', title: 'Revisión de cuentas', text: 'Auditorías de las cuentas de tus clientes con un plan de acción que tu equipo puede aplicar.' },
        { icon: 'book', title: 'Formación de equipos', text: 'Formación práctica en Google Ads, Meta, programática, medición o IA aplicada a la publicidad.' },
        { icon: 'presentation', title: 'Concursos y propuestas', text: 'Apoyo en estrategia, planificación de medios y previsiones para presentar a clientes nuevos.' },
        { icon: 'screen', title: 'Programática', text: 'Planificación y compra programática para agencias que no tienen ese perfil en el equipo.' },
      ],
    },
    audience: {
      title: 'Para qué agencias.',
      items: [
        { title: 'Agencias de performance', text: 'Equipos que necesitan capacidad senior en momentos de mucho trabajo o para cuentas complejas.' },
        { title: 'Agencias creativas y de marca', text: 'Agencias que quieren ofrecer paid media a sus clientes sin montar un departamento desde cero.' },
        { title: 'Agencias que crecen', text: 'Equipos que suman clientes nuevos y necesitan a alguien con experiencia mientras forman o contratan.' },
      ],
    },
    includes: {
      eyebrow: 'Cómo trabajamos',
      title: 'Qué incluye la colaboración.',
      items: [
        'Trabajo bajo la marca de tu agencia si lo necesitas',
        'Acceso a las cuentas dentro de tu estructura, sin tocar la relación con el cliente',
        'Comunicación directa con tu equipo por los canales que ya uséis',
        'Documentación de lo que hago para que tu equipo pueda continuar',
        'Confidencialidad sobre tus clientes y tus procesos',
        'Resumen mensual de horas y trabajo realizado',
      ],
    },
    faq: {
      title: 'Dudas de agencias.',
      items: [
        PRECIO,
        {
          q: '¿Trabajas bajo marca blanca?',
          a: 'Sí. Puedo trabajar con el email y la firma de tu agencia y participar en las reuniones con tus clientes como parte de tu equipo.',
        },
        {
          q: '¿Cómo se organiza la bolsa de horas?',
          a: 'Acordamos un número de horas al mes y cómo me pasáis las tareas. Cada mes te envío el detalle de horas y trabajo realizado, y ajustamos la bolsa si cambia la carga.',
        },
        {
          q: '¿Qué plataformas cubres?',
          a: 'Google Ads, Microsoft Ads, Meta Ads, TikTok Ads, LinkedIn Ads, programática con DSPs como DV360 y Amazon DSP, y la medición que hay detrás: GA4, Tag Manager y tracking server-side.',
        },
      ],
    },
    articles: ['aiMax', 'leadScoring'],
    otherServices: [
      { label: 'Auditoría', href: '/auditoria-google-ads/' },
      { label: 'Programática', href: '/publicidad-programatica/' },
      { label: 'Google Ads', href: '/freelance-google-ads/' },
    ],
    contact: {
      title: '¿Colaboramos?',
      text: 'Cuéntame qué tipo de agencia sois y qué necesitáis. Te respondo en 48 horas y vemos cómo encajar.',
      defaultTipo: 'llamada',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'medicion-server-side',
    seoTitle: 'Implementación de tracking server-side | Lara Borrego',
    description:
      'Implementación de tracking server-side: GTM en servidor, API de conversiones de Meta, conversiones mejoradas y Consent Mode v2. Pide tu auditoría.',
    serviceType: 'Implementación de tracking server-side',
    parent: '360',
    breadcrumb: 'Tracking server-side',
    eyebrow: 'Tracking server-side y medición',
    headline: 'Que Google y Meta reciban las conversiones que hoy se pierden.',
    highlight: 'conversiones',
    subtitle:
      'Configuro tracking server-side, API de conversiones y conversiones mejoradas para que Google y Meta reciban las conversiones que hoy se pierden.',
    primaryCta: 'Pide una auditoría de medición',
    primaryTipo: 'auditoria',
    cardCaption: 'Revisa tu medición en persona',
    metrics: [M.anos(), M.cpl('coste por lead con datos del CRM'), M.respuesta, M.preaviso],
    features: {
      eyebrow: 'Qué incluye',
      title: 'Todo lo necesario para medir bien.',
      text: 'Primero reviso qué se está midiendo y qué se pierde. Después implanto lo que falta, empezando por lo que más impacto tiene.',
      items: [
        { icon: 'search-plus', title: 'Auditoría de medición', text: 'Revisión de GA4, Tag Manager, píxeles y conversiones: qué se mide, qué se duplica y qué se pierde.' },
        { icon: 'server', title: 'GTM en servidor', text: 'Contenedor de Google Tag Manager en servidor para enviar los datos desde tu propio dominio.' },
        { icon: 'link', title: 'API de conversiones de Meta', text: 'Envío de eventos desde el servidor con deduplicación frente al píxel, para no contar dos veces.' },
        { icon: 'target', title: 'Conversiones mejoradas de Google Ads', text: 'Datos de conversión cifrados que ayudan a Google a atribuir ventas y leads que las cookies ya no cubren.' },
        { icon: 'shield', title: 'Consent Mode v2', text: 'Banner y consentimiento configurados para cumplir la normativa sin perder más señal de la necesaria.' },
        { icon: 'chart', title: 'Dashboard de control', text: 'Un panel para comprobar que las conversiones llegan y detectar a tiempo cuando algo se rompe.' },
      ],
    },
    audience: {
      title: 'Para quién es.',
      items: [
        { title: 'E-commerce', text: 'Tiendas online que ven menos compras en Google Ads y Meta que en su plataforma de e-commerce.' },
        { title: 'Captación de leads', text: 'Negocios que necesitan conectar los leads con el CRM y devolver a las plataformas qué leads acaban comprando.' },
        { title: 'Campañas en varias plataformas', text: 'Cuando Google, Meta y la analítica dan cifras distintas y nadie sabe cuál creerse.' },
      ],
    },
    includes: {
      eyebrow: 'Proyecto',
      title: 'Cómo es un proyecto de medición.',
      items: [
        'Auditoría inicial y plan de implantación por prioridades',
        'Configuración de GTM web y GTM en servidor',
        'Eventos de Meta, Google Ads y GA4 con deduplicación',
        'Consent Mode v2 y banner de cookies',
        'Pruebas y validación de cada conversión',
        'Documentación para tu equipo',
        'Revisión periódica para que la medición no se degrade',
      ],
    },
    caseStudy: 'formacion',
    faq: {
      title: 'Dudas sobre el tracking server-side.',
      items: [
        PRECIO,
        {
          q: '¿Qué es el tracking server-side y por qué lo necesito?',
          a: 'Es enviar las conversiones desde un servidor propio (GTM server-side, API de conversiones de Meta, conversiones mejoradas) en lugar de solo desde el navegador. Recupera señal que se pierde por bloqueadores, cookies rechazadas o iOS, y con Consent Mode v2 cumple con la normativa. Con más datos, el algoritmo puja mejor.',
        },
        {
          q: '¿Es compatible con el RGPD?',
          a: 'Sí, siempre que respete el consentimiento. El server-side no sirve para saltarse el banner de cookies: con Consent Mode v2 los datos se envían según lo que acepta cada persona.',
        },
        {
          q: '¿Tengo que cambiar mi web?',
          a: 'Normalmente no hace falta rehacerla. Hay que ajustar las etiquetas, crear un subdominio para el servidor de medición y, en algunos casos, hacer pequeños cambios para enviar los datos de compra o de lead.',
        },
        {
          q: '¿El servidor tiene un coste aparte?',
          a: 'Sí. El servidor de Tag Manager tiene un coste mensual de alojamiento que depende del tráfico de tu web. Te lo explico antes de empezar para que no haya sorpresas.',
        },
      ],
    },
    articles: ['serverSide'],
    otherServices: [
      { label: 'Servicios 360', href: '/servicios-360/' },
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
    ],
    contact: {
      title: '¿Revisamos tu medición?',
      text: 'Cuéntame qué herramientas usas y qué diferencias ves entre plataformas. Te respondo en 48 horas con lo que revisaría primero.',
      auditoriaLabel: 'Una auditoría de mi medición',
      defaultTipo: 'auditoria',
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'servicios-360',
    seoTitle: 'Marketing 360 con una sola responsable | Lara Borrego',
    description:
      'Marketing 360 freelance: estrategia y paid media con especialistas en analítica, web, UX, branding, CRM y social media, y un solo interlocutor. Hablemos.',
    serviceType: 'Marketing 360',
    parent: '360',
    breadcrumb: 'Servicios 360',
    eyebrow: 'Servicios 360',
    headline: 'Marketing 360 con una sola responsable.',
    highlight: 'una sola responsable',
    subtitle:
      'Llevo la estrategia y el paid media y coordino a especialistas de confianza en analítica, web, UX, branding, CRM y social media. Tú hablas solo conmigo.',
    primaryCta: 'Cuéntame tu proyecto',
    primaryTipo: 'llamada',
    cardCaption: 'Dirige tu proyecto en persona',
    metrics: [
      M.anos(),
      { value: '6', label: 'áreas coordinadas por mí' },
      { value: '1', label: 'único interlocutor' },
      M.respuesta,
    ],
    includes: {
      eyebrow: 'Cómo trabajamos',
      title: 'Qué cambia con Servicios 360.',
      items: [
        'Un único interlocutor para todo el proyecto',
        'Objetivos y KPIs de negocio compartidos por todo el equipo',
        'Especialistas que entran solo cuando el proyecto los necesita',
        'Revisión de cada entrega antes de que llegue a ti',
        'Reunión mensual con el estado de todas las áreas',
      ],
    },
    caseStudy: 'formacion',
    faq: {
      title: 'Dudas sobre Servicios 360.',
      items: [
        PRECIO,
        {
          q: '¿Quién hace el trabajo de cada área?',
          a: 'Profesionales especializados en cada área con los que trabajo de forma habitual. Yo defino los objetivos, reviso cada entrega y me aseguro de que todo encaja con la estrategia y con el paid media.',
        },
        {
          q: '¿Puedo contratar solo una parte?',
          a: 'Sí. Puedes contratar solo el paid media y sumar otras áreas cuando lo necesites, o empezar por algo concreto, como la medición o una landing.',
        },
        {
          q: '¿Cómo se coordinan?',
          a: 'Yo soy tu único punto de contacto. Organizo al equipo, reparto las tareas y te presento los avances de todas las áreas juntos, así no tienes que coordinar a varios proveedores ni repetir lo mismo en cada reunión.',
        },
      ],
    },
    articles: ['serverSide', 'leadScoring'],
    otherServices: [
      { label: 'Google Ads', href: '/freelance-google-ads/' },
      { label: 'Meta Ads', href: '/freelance-meta-ads/' },
      { label: 'Tracking server-side', href: '/medicion-server-side/' },
    ],
    contact: {
      title: '¿Hablamos de tu proyecto?',
      text: 'Cuéntame qué tienes en marcha y qué te falta. Te respondo en 48 horas con cómo lo organizaría.',
      defaultTipo: 'llamada',
    },
  },
];

// Detalle de cada área de Servicios 360 (/servicios-360/). Los id coinciden con data/servicios360.ts.
export const AREAS_360 = [
  {
    id: 'analitica',
    title: 'Analítica y medición',
    text: 'Sin una medición fiable, el resto del trabajo se apoya en datos que no son reales. Reviso y configuro la analítica para que las decisiones se tomen con cifras en las que puedes confiar.',
    includes: ['GA4 y Google Tag Manager', 'Tracking server-side y API de conversiones', 'Consent Mode v2', 'Dashboards de negocio'],
    link: { label: 'Ver tracking server-side', href: '/medicion-server-side/' },
  },
  {
    id: 'desarrollo-web',
    title: 'Desarrollo web',
    text: 'Una web lenta o confusa encarece cada clic que pagas. Los especialistas de desarrollo con los que trabajo construyen webs y landings pensadas para convertir tráfico de pago.',
    includes: ['Landings para campañas', 'Webs corporativas y e-commerce', 'Mejoras de velocidad', 'Integración con analítica y CRM'],
  },
  {
    id: 'ux-ui-cro',
    title: 'UX/UI y CRO',
    text: 'Antes de invertir más en tráfico, conviene que la web convierta mejor el que ya tienes. Analizamos cómo se comportan los usuarios y probamos cambios que se puedan medir.',
    includes: ['Análisis de comportamiento y embudos', 'Propuestas de mejora de diseño', 'Tests A/B', 'Seguimiento del impacto en conversión'],
  },
  {
    id: 'branding',
    title: 'Branding y creatividad',
    text: 'En las plataformas donde decide el algoritmo, la creatividad es la principal palanca. Diseñadores y creadores de vídeo producen piezas coherentes con tu marca y pensadas para cada formato.',
    includes: ['Identidad visual', 'Piezas para anuncios', 'Vídeo para redes y campañas', 'Adaptaciones por formato y plataforma'],
  },
  {
    id: 'crm',
    title: 'CRM y automatización',
    text: 'Lo que pasa después del lead decide si una campaña es rentable. Conectamos el CRM con las plataformas para pujar por ventas reales y automatizar el seguimiento.',
    includes: ['Lead scoring', 'Conversiones offline hacia Google y Meta', 'Flujos de automatización', 'Integración de formularios'],
  },
  {
    id: 'social-media',
    title: 'Social media',
    text: 'El contenido orgánico y las campañas de pago funcionan mejor cuando cuentan lo mismo. Coordinamos la estrategia de contenido y la gestión de comunidad con el plan de medios.',
    includes: ['Estrategia de contenido', 'Calendario editorial', 'Gestión de comunidad', 'Contenido reutilizable en anuncios'],
  },
] as const;
