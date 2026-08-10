-- ==========================================================================
-- سامانه نگارش‌یار (Negaresh Yar) — Database Schema for Supabase (PostgreSQL)
-- Run this in: Supabase Dashboard -> SQL Editor -> New query -> Run
-- All monetary values are stored as integers (bigint), in Toman.
-- ==========================================================================

-- Needed for uuid generation
create extension if not exists "pgcrypto";

-- --------------------------------------------------------------------------
-- ۱. جدول مشتریان (customers)
-- --------------------------------------------------------------------------
create table if not exists public.customers (
  id            uuid primary key default gen_random_uuid(),
  name          varchar(255) not null,
  phone         varchar(20) not null unique,
  national_id   varchar(20),
  address       text,
  total_orders  integer not null default 0,
  total_spent   bigint not null default 0,
  is_vip        boolean not null default false,
  notes         text,
  created_at    timestamptz not null default now()
);

-- --------------------------------------------------------------------------
-- ۲. جدول خدمات نگارش (services)
-- --------------------------------------------------------------------------
create table if not exists public.services (
  id               text primary key,
  title            varchar(255) not null,
  slug             varchar(255) not null unique,
  category         varchar(100),
  price            bigint not null default 0,
  turnaround_time  varchar(100),
  description      text,
  popular          boolean not null default false,
  active           boolean not null default true,
  order_index      integer not null default 0,
  form_fields      jsonb not null default '[]'::jsonb,
  required_docs    jsonb not null default '[]'::jsonb
);

-- --------------------------------------------------------------------------
-- ۳. جدول فاکتورها و سفارش‌ها (invoices)
-- --------------------------------------------------------------------------
create table if not exists public.invoices (
  id              uuid primary key default gen_random_uuid(),
  tracking_code   varchar(50) not null unique,
  customer_id     uuid references public.customers(id) on delete set null,
  customer_name   varchar(255),
  customer_phone  varchar(20),
  title           varchar(255),
  amount          bigint not null default 0,
  tax_amount      bigint not null default 0,
  discount_amount bigint not null default 0,
  total_amount    bigint not null default 0,
  status          varchar(20) not null default 'draft'
                    check (status in ('draft', 'pending', 'paid', 'cancelled')),
  issue_date      date,
  due_date        date,
  notes           text,
  created_at      timestamptz not null default now()
);

create index if not exists idx_invoices_customer_id on public.invoices(customer_id);
create index if not exists idx_invoices_status on public.invoices(status);

-- --------------------------------------------------------------------------
-- ۴. جدول آیتم‌های فاکتور (invoice_items)
-- --------------------------------------------------------------------------
create table if not exists public.invoice_items (
  id           uuid primary key default gen_random_uuid(),
  invoice_id   uuid not null references public.invoices(id) on delete cascade,
  service_id   text references public.services(id) on delete set null,
  description  text,
  quantity     integer not null default 1,
  unit_price   bigint not null default 0,
  total_price  bigint not null default 0
);

create index if not exists idx_invoice_items_invoice_id on public.invoice_items(invoice_id);

-- --------------------------------------------------------------------------
-- ۵. جدول مقالات و مجله حقوقی (articles)
-- --------------------------------------------------------------------------
create table if not exists public.articles (
  id          uuid primary key default gen_random_uuid(),
  title       varchar(255) not null,
  slug        varchar(255) not null unique,
  summary     text,
  content     text,
  category    varchar(100),
  author      varchar(255),
  status      varchar(20) not null default 'draft'
                check (status in ('draft', 'published', 'paused')),
  view_count  integer not null default 0,
  tags        jsonb not null default '[]'::jsonb,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists idx_articles_status on public.articles(status);

-- --------------------------------------------------------------------------
-- ۶. جدول پیام‌رسان‌ها (messengers)
-- --------------------------------------------------------------------------
create table if not exists public.messengers (
  id           varchar(50) primary key,
  name         varchar(100) not null,
  url          text,
  icon         text,
  label        varchar(255),
  order_index  integer not null default 0,
  active       boolean not null default true
);

-- --------------------------------------------------------------------------
-- ۷. جدول تنظیمات کسب‌وکار (business_settings) — تک‌ردیفی (id = 1)
-- --------------------------------------------------------------------------
create table if not exists public.business_settings (
  id                   integer primary key default 1 check (id = 1),
  site_title           varchar(255) default 'نگارش یار',
  phone_number         varchar(50)  default '+989915147789',
  city                 varchar(100) default 'مشهد',
  province             varchar(100) default 'خراسان رضوی',
  address              text,
  national_id          varchar(50),
  registration_number  varchar(50),
  postal_code          varchar(20),
  bank_card_number     varchar(30),
  bank_sheba           varchar(34),
  bank_account_owner   varchar(255),
  invoice_footer_text  text,
  invoice_description  text,
  payment_gateway_url  text,
  gemini_api_key       text,
  openai_api_key       text,
  active_ai_provider   varchar(20) default 'auto',
  updated_at           timestamptz not null default now()
);

-- --------------------------------------------------------------------------
-- Trigger: keep updated_at fresh on articles & business_settings
-- --------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_articles_updated_at on public.articles;
create trigger trg_articles_updated_at
  before update on public.articles
  for each row execute function public.set_updated_at();

drop trigger if exists trg_business_settings_updated_at on public.business_settings;
create trigger trg_business_settings_updated_at
  before update on public.business_settings
  for each row execute function public.set_updated_at();
