-- ==========================================================================
-- Seed data — نگارش‌یار
-- Run AFTER 001_create_schema.sql (idempotent: safe to run more than once)
-- ==========================================================================

-- Default business/system settings
insert into public.settings (key, value)
values (
  'business_config',
  jsonb_build_object(
    'siteTitle', 'نگارش‌یار',
    'sitePhone', '',
    'siteAddress', '',
    'workingHours', 'شنبه تا چهارشنبه ۹ تا ۱۷',
    'defaultTaxPercentage', 9,
    'invoicePrefix', 'NY-',
    'invoiceFooterText', 'با تشکر از اعتماد شما',
    'geminiApiKey', '',
    'openaiApiKey', '',
    'activeAiProvider', 'gemini'
  )
)
on conflict (key) do nothing;

-- Default messengers
insert into public.messengers (id, name, url, icon, label, order_index, active) values
  ('eitaa',    'ایتا',    '', '/icons/eitaa.svg',    'پشتیبانی در ایتا',    1, true),
  ('rubika',   'روبیکا',  '', '/icons/rubika.svg',   'پشتیبانی در روبیکا',  2, true),
  ('bale',     'بله',     '', '/icons/bale.svg',     'پشتیبانی در بله',     3, true),
  ('telegram', 'تلگرام',  '', '/icons/telegram.svg', 'پشتیبانی در تلگرام',  4, true),
  ('whatsapp', 'واتساپ',  '', '/icons/whatsapp.svg', 'پشتیبانی در واتساپ',  5, true)
on conflict (id) do nothing;
