// Casos (sección 5 del brief). Los clientes nunca se nombran.
export interface CaseStudy {
  figure: string;
  figureLabel: string;
  sector: string;
  title: string;
  text: string;
}

export const CASES = {
  mascotas: {
    figure: '+30%',
    figureLabel: 'de ROAS',
    sector: 'E-commerce de mascotas',
    title: 'Shopping y Performance Max con el feed segmentado por margen.',
    text: 'Agrupamos el catálogo según la rentabilidad de cada producto y ajustamos los objetivos de ROAS por grupo. La inversión dejó de repartirse por igual y se concentró en lo que de verdad dejaba margen.',
  },
  supermercados: {
    figure: '+60%',
    figureLabel: 'de visitas a tienda',
    sector: 'Cadena de supermercados',
    title: 'Plan omnicanal con DOOH y campañas locales.',
    text: 'Combinamos pantallas digitales en la calle con campañas locales alrededor de cada tienda y medimos las visitas físicas por zona. Así se veía qué parte del plan llevaba gente a los supermercados y dónde convenía reforzar.',
  },
  formacion: {
    figure: '-40%',
    figureLabel: 'de coste por lead',
    sector: 'Centro de formación',
    title: 'Lead scoring y matrículas del CRM de vuelta a Google y Meta.',
    text: 'Puntuamos cada lead según sus opciones de matricularse y devolvimos ese dato y las matrículas del CRM a las plataformas. Las campañas dejaron de buscar formularios baratos y empezaron a buscar alumnos.',
  },
} satisfies Record<string, CaseStudy>;

export type CaseKey = keyof typeof CASES;
