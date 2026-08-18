-- Run this in your Supabase project's SQL Editor (Supabase Dashboard → SQL Editor → New query)

create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  project text,
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table contact_submissions enable row level security;

-- Allow anyone (using the public anon key) to INSERT a submission,
-- but not read, update, or delete existing ones.
create policy "Anyone can submit the contact form"
  on contact_submissions
  for insert
  to anon
  with check (true);

-- You (as the project owner, using the Supabase dashboard) can still
-- view all submissions under Table Editor — that access bypasses RLS.
