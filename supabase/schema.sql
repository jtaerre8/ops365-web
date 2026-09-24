-- Ejecutar en Supabase: Dashboard -> SQL Editor -> New query -> pegar y correr

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  event_date date,
  consent_confirmed boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists photos (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  storage_path text not null,
  media_type text not null default 'photo' check (media_type in ('photo', 'video')),
  created_at timestamptz not null default now()
);

alter table events enable row level security;
alter table photos enable row level security;

-- Cualquier visitante puede leer solo eventos con consentimiento confirmado
create policy "public read confirmed events" on events
  for select using (consent_confirmed = true);

create policy "public read photos of confirmed events" on photos
  for select using (
    exists (select 1 from events e where e.id = photos.event_id and e.consent_confirmed = true)
  );

-- El mago (usuario autenticado) tiene acceso total
create policy "admin full access events" on events
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "admin full access photos" on photos
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- Storage: crear el bucket "event-photos" (Dashboard -> Storage -> New bucket -> Public) y luego correr:

insert into storage.buckets (id, name, public)
values ('event-photos', 'event-photos', true)
on conflict (id) do nothing;

create policy "public read event photos" on storage.objects
  for select using (bucket_id = 'event-photos');

create policy "admin upload event photos" on storage.objects
  for insert with check (bucket_id = 'event-photos' and auth.role() = 'authenticated');

create policy "admin delete event photos" on storage.objects
  for delete using (bucket_id = 'event-photos' and auth.role() = 'authenticated');
