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
insert into public.messengers (id, name, url, icon, label, order_index, active) values
  ('eitaa',    'ایتا',    '', '/icons/eitaa.svg',    'پشتیبانی در ایتا',    1, true),
  ('rubika',   'روبیکا',  '', '/icons/rubika.svg',   'پشتیبانی در روبیکا',  2, true),
  ('bale',     'بله',     '', '/icons/bale.svg',     'پشتیبانی در بله',     3, true),
  ('telegram', 'تلگرام',  '', '/icons/telegram.svg', 'پشتیبانی در تلگرام',  4, true),
  ('whatsapp', 'واتساپ',  '', '/icons/whatsapp.svg', 'پشتیبانی در واتساپ',  5, true)
on conflict (id) do nothing;
