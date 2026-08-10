-- ==========================================================================
-- Seed data — نگارش‌یار
-- Run AFTER 001_create_schema.sql (idempotent: safe to run more than once)
-- ==========================================================================

-- Default business settings (single row, id = 1)
insert into public.business_settings (
  id, site_title, phone_number, city, province,
  invoice_footer_text, active_ai_provider
)
values (
  1, 'نگارش یار', '+989915147789', 'مشهد', 'خراسان رضوی',
  'با تشکر از اعتماد شما', 'auto'
)
on conflict (id) do nothing;

-- Default messengers
insert into public.messengers_config (code, name, label, url, icon, display_order, active) values
  ('eitaa',    'ایتا',    'پشتیبانی در ایتا',    '#', '/icons/eitaa.svg',    1, true),
  ('rubika',   'روبیکا',  'پشتیبانی در روبیکا',  '#', '/icons/rubika.svg',   2, true),
  ('bale',     'بله',     'پشتیبانی در بله',     '#', '/icons/bale.svg',     3, true),
  ('telegram', 'تلگرام',  'پشتیبانی در تلگرام',  '#', '/icons/telegram.svg', 4, true),
  ('whatsapp', 'واتساپ',  'پشتیبانی در واتساپ',  '#', '/icons/whatsapp.svg', 5, true)
on conflict (code) do nothing;
