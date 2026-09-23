// Envío de leads a Supabase (tabla public.leads) desde el navegador.
// La URL y la clave publicable llegan por variables de entorno (PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_ANON_KEY).
// La clave publicable es segura en el navegador: la tabla solo admite inserciones (RLS).

import type { Tipo } from './contact';

export interface Lead {
  tipo: Tipo;
  nombre: string;
  email: string;
  web: string | null;
  inversion: string | null;
  pagina_origen: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  gclid: string | null;
  fbclid: string | null;
}

const ATTRIBUTION_KEY = 'lb_attribution';
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'fbclid'] as const;
type Attribution = Partial<Record<(typeof PARAMS)[number], string>>;

/**
 * Guarda los parámetros de campaña de la URL de llegada durante la sesión,
 * para que sigan disponibles si la persona navega antes de rellenar el formulario.
 */
export function captureAttribution(): void {
  const url = new URLSearchParams(location.search);
  const found: Attribution = {};
  PARAMS.forEach((p) => {
    const v = url.get(p);
    if (v) found[p] = v.slice(0, 300);
  });
  if (Object.keys(found).length === 0) return;
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(found));
  } catch {
    /* almacenamiento no disponible */
  }
}

export function getAttribution(): Attribution {
  const current: Attribution = {};
  const url = new URLSearchParams(location.search);
  PARAMS.forEach((p) => {
    const v = url.get(p);
    if (v) current[p] = v.slice(0, 300);
  });
  if (Object.keys(current).length) return current;
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? '{}') as Attribution;
  } catch {
    return {};
  }
}

export class LeadError extends Error {
  constructor(
    message: string,
    public readonly kind: 'config' | 'rate' | 'network' | 'server',
  ) {
    super(message);
  }
}

export async function sendLead(lead: Lead): Promise<void> {
  const base = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  if (!base || !key) throw new LeadError('Supabase no está configurado', 'config');

  let res: Response;
  try {
    res = await fetch(`${base.replace(/\/$/, '')}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: key,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(lead),
    });
  } catch {
    throw new LeadError('Sin conexión', 'network');
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new LeadError(body || res.statusText, body.includes('Demasiados') ? 'rate' : 'server');
  }
}

/** Evento de GA4 (vía GTM): generate_lead con el parámetro tipo. */
export function trackLead(tipo: Tipo): void {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: 'generate_lead', tipo });
}
