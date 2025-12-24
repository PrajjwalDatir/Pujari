-- Create waitlist table to capture ritual demand
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null,
  looking_for text not null, -- 'pujari' or 'astrologer'
  ritual_type text not null,
  location text not null,
  metadata jsonb default '{}'::jsonb
);

-- Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (Waitlist signup)
create policy "Enable insert for anonymous users"
on public.waitlist
for insert
with check (true);

-- Allow authenticated users (admin) to view waitlist
create policy "Allow authenticated users to view waitlist"
on public.waitlist
for select
using (auth.role() = 'authenticated');
