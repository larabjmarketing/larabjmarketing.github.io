import type { FaqItem } from '../components/Faq.astro';

// Preguntas frecuentes de la home (design/Home-2.dc.html). También alimentan el JSON-LD FAQPage.
export const HOME_FAQ: FaqItem[] = [
  {
    q: '¿Qué hace una freelance de paid media y en qué se diferencia de una agencia?',
    a: 'Diseño la estrategia, gestiono las campañas de Google Ads, Meta Ads y el resto de plataformas y mido su impacto en ventas. La diferencia con una agencia es que hablas directamente con quien toca tu cuenta: sin intermediarios y con respuestas rápidas.',
  },
  {
    q: '¿Con qué inversión mínima trabajas?',
    a: 'No hay un mínimo fijo. Cada propuesta es a medida según tus objetivos, el tipo de negocio y el momento en que estás. En la llamada inicial vemos qué presupuesto en medios tiene sentido y qué plataformas priorizar para empezar.',
  },
  {
    q: '¿Qué incluye una auditoría de Google Ads y Meta Ads?',
    a: 'Reviso estructura de campañas, términos de búsqueda y ubicaciones, configuración de conversiones, calidad de las señales que recibe el algoritmo, feed de productos, audiencias y creatividades. Te entrego un informe priorizado por impacto y un plan de acción a 90 días.',
  },
  {
    q: '¿Cómo aplicas el lead scoring en tus campañas?',
    a: 'Asigno una puntuación a cada lead según los datos del formulario, su comportamiento y lo que pasa después en tu CRM. Esa puntuación vuelve a Google Ads como valor de conversión (conversiones mejoradas para leads o importación offline) y a Meta a través de la API de conversiones. Así las campañas aprenden a buscar leads con más opciones de compra.',
  },
  {
    q: '¿Qué es el tracking server-side y por qué lo necesito?',
    a: 'Es enviar las conversiones desde un servidor propio (GTM server-side, API de conversiones de Meta, conversiones mejoradas) en lugar de solo desde el navegador. Recupera señal que se pierde por bloqueadores, cookies rechazadas o iOS, y con Consent Mode v2 cumple con la normativa. Con más datos, el algoritmo puja mejor.',
  },
  {
    q: '¿Trabajas con Performance Max, AI Max y Advantage+?',
    a: 'Sí, en casi todas las cuentas que llevo. Segmento el feed por margen, defino señales de audiencia, aplico exclusiones de marca y negativas a nivel de cuenta y valido cada cambio con experimentos. Son herramientas potentes, pero necesitan buenos datos y límites claros.',
  },
  {
    q: '¿Gestionas publicidad programática?',
    a: 'Sí. Planifico y compro campañas programáticas con DSPs como DV360 y Amazon DSP, y formatos omnicanal como DOOH, televisión conectada y audio digital. Las mido con estudios de incremento, visitas a tienda y su efecto en las búsquedas de marca.',
  },
  {
    q: '¿Las cuentas publicitarias son mías?',
    a: 'Siempre. Trabajo dentro de tus cuentas de Google Ads, Meta, analítica y CRM con acceso de administradora. Si algún día dejamos de trabajar juntas, el histórico, las audiencias y los datos se quedan contigo.',
  },
  {
    q: '¿Cuándo se empiezan a ver resultados?',
    a: 'Las mejoras de medición y la limpieza de inversión se notan en las primeras semanas. Las campañas nuevas necesitan una fase de aprendizaje de 4 a 6 semanas, por eso valoramos resultados con al menos tres meses de datos.',
  },
  {
    q: '¿Cómo me informas de los resultados?',
    a: 'Tienes un dashboard en tiempo real con métricas de negocio: ventas, CPL, ROAS y calidad de lead. Cada mes recibes un informe en lenguaje claro con qué ha pasado, por qué y qué haremos después.',
  },
  {
    q: '¿Quién se encarga de la web, el branding o el CRM?',
    a: 'Profesionales especializados en cada área con los que trabajo de forma habitual. Yo dirijo el proyecto con visión 360, defino los objetivos y reviso cada entrega, así que mantienes un único punto de contacto.',
  },
  {
    q: '¿Trabajas como freelance para agencias?',
    a: 'Sí. Colaboro con agencias como apoyo senior de paid media por proyecto o bolsa de horas: estrategia, gestión de cuentas, programática y formación de equipos. Puedo trabajar bajo la marca de la agencia.',
  },
  {
    q: '¿Hay permanencia?',
    a: 'No. Trabajo mes a mes con un preaviso de 30 días. Si seguimos trabajando juntas, que sea porque te compensa.',
  },
];
