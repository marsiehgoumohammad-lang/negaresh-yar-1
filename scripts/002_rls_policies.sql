-- ==========================================================================
-- Row Level Security (RLS) policies — نگارش‌یار
-- Run AFTER 001_create_schema.sql
--
-- Model:
--   * Public (anon) can READ active/published customer-facing content:
--       services, articles, messengers
--   * Sensitive tables (customers, invoices, invoice_items, business_settings)
--     have NO public policies -> only the service_role key (used from your
--     server) can read/write them. RLS is bypassed by the service_role.
-- ==========================================================================

-- Enable RLS on every table
alter table public.customers          enable row level security;
alter table public.services           enable row level security;
alter table public.invoices           enable row level security;
alter table public.invoice_items      enable row level security;
alter table public.articles           enable row level security;
alter table public.messengers         enable row level security;
alter table public.business_settings  enable row level security;

-- --------------------------------------------------------------------------
-- Public read: active services
-- --------------------------------------------------------------------------
drop policy if exists "public read active services" on public.services;
create policy "public read active services"
  on public.services for select
  to anon, authenticated
  using (active = true);

-- --------------------------------------------------------------------------
-- Public read: published articles
-- --------------------------------------------------------------------------
drop policy if exists "public read published articles" on public.articles;
create policy "public read published articles"
  on public.articles for select
  to anon, authenticated
  using (status = 'published');

-- --------------------------------------------------------------------------
-- Public read: active messengers
-- --------------------------------------------------------------------------
drop policy if exists "public read active messengers" on public.messengers;
create policy "public read active messengers"
  on public.messengers for select
  to anon, authenticated
  using (active = true);

-- NOTE: customers, invoices, invoice_items and business_settings intentionally
-- have no anon/authenticated policies. Access them from your server using the
-- SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS.
