-- MindGrove Web: backend requirement (save + retrieve)
-- Run this SQL in Supabase -> SQL Editor.

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null,
  source text not null default 'website'
);

create index if not exists submissions_created_at_idx on public.submissions (created_at desc);

