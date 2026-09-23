-- Tabla de leads del formulario de contacto (sección 7 del brief).
-- RLS: inserción pública (anon) y lectura solo para usuarios autenticados.

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  tipo          text not null
                check (tipo in ('llamada', 'auditoria', 'gestion', 'otro')),
  nombre        text not null
                check (char_length(btrim(nombre)) between 1 and 120),
  email         text not null
                check (char_length(email) <= 200 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  web           text check (web is null or char_length(web) <= 300),
  inversion     text check (
                  inversion is null
                  or inversion in ('Menos de 1.000 €', '1.000 a 5.000 €', '5.000 a 20.000 €', 'Más de 20.000 €')
                ),
  pagina_origen text check (pagina_origen is null or char_length(pagina_origen) <= 300),
  utm_source    text check (utm_source is null or char_length(utm_source) <= 200),
  utm_medium    text check (utm_medium is null or char_length(utm_medium) <= 200),
  utm_campaign  text check (utm_campaign is null or char_length(utm_campaign) <= 200),
  gclid         text check (gclid is null or char_length(gclid) <= 300),
  fbclid        text check (fbclid is null or char_length(fbclid) <= 500)
);

comment on table public.leads is 'Solicitudes del formulario de contacto de la web.';

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_created_at_idx on public.leads (lower(email), created_at desc);

-- ---------------------------------------------------------------
-- Permisos y RLS
-- ---------------------------------------------------------------
alter table public.leads enable row level security;

-- Nadie puede leer, editar ni borrar salvo lo que se concede abajo
revoke all on table public.leads from anon, authenticated;

-- La web (anon) solo puede insertar estas columnas: id y created_at los pone la base de datos
grant insert (tipo, nombre, email, web, inversion, pagina_origen, utm_source, utm_medium, utm_campaign, gclid, fbclid)
  on table public.leads to anon, authenticated;

-- Lectura solo para usuarios autenticados (panel de Supabase o herramientas internas)
grant select on table public.leads to authenticated;

drop policy if exists "Inserción pública de leads" on public.leads;
create policy "Inserción pública de leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Lectura solo autenticada" on public.leads;
create policy "Lectura solo autenticada"
  on public.leads for select
  to authenticated
  using (true);

-- ---------------------------------------------------------------
-- Antispam en servidor: máximo 3 envíos por email cada hora.
-- (En el navegador hay además un campo trampa oculto y un tiempo mínimo de rellenado.)
-- ---------------------------------------------------------------
create or replace function public.leads_rate_limit()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (
    select count(*)
    from public.leads
    where lower(email) = lower(new.email)
      and created_at > now() - interval '1 hour'
  ) >= 3 then
    raise exception 'Demasiados envíos seguidos. Inténtalo más tarde.'
      using errcode = 'P0001';
  end if;
  return new;
end;
$$;

revoke execute on function public.leads_rate_limit() from public, anon, authenticated;

drop trigger if exists leads_rate_limit on public.leads;
create trigger leads_rate_limit
  before insert on public.leads
  for each row execute function public.leads_rate_limit();
