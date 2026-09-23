// Tipos de solicitud del formulario. El valor es el que se guarda en Supabase
// y el que se envía como parámetro `tipo` en el evento generate_lead de GA4.
export const TIPOS = {
  llamada: 'Una llamada gratuita de 30 min',
  auditoria: 'Una auditoría de mis campañas',
  gestion: 'Gestión de campañas',
  otro: 'Otra cosa',
} as const;

export type Tipo = keyof typeof TIPOS;

export const INVERSIONES = [
  'Menos de 1.000 €',
  '1.000 a 5.000 €',
  '5.000 a 20.000 €',
  'Más de 20.000 €',
] as const;

export const CONTACT_ID = 'contacto';

/**
 * Enlace a un formulario de contacto con la opción preseleccionada.
 * Si la página tiene su propio formulario se queda en ella; si no, va al de la home.
 */
export function contactHref(tipo: Tipo, pageHasForm: boolean): string {
  const base = pageHasForm ? '' : '/';
  return `${base}?tipo=${tipo}#${CONTACT_ID}`;
}
