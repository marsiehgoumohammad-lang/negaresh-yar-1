import { BusinessSettings } from './types';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';

export const DEFAULT_SETTINGS: BusinessSettings = {
  companyName: 'دفتر نگارش یار - خدمات حقوقی و اداری اینترنتی',
  logoUrl: '/logo.jpg',
  phone: '09915147789',
  address: 'مشهد، خراسان رضوی - خدمات غیرحضوری و سراسری',
  city: 'مشهد',
  province: 'خراسان رضوی',
  invoicePrefix: 'NY-1403-',
  nextInvoiceNumber: 1001,
  currency: 'تومان',
  invoiceTitle: 'صورت‌حساب خدمات نگارش یار',
  headerSubtitle: 'دفتر تخصصی تنظیم دادخواست، شکواییه، لایحه دفاعیه و نامه‌های اداری',
  invoiceFooterText: 'با تشکر از اعتماد شما به دفتر نگارش یار. تمامی خدمات بر اساس درخواست مشتری و استانداردهای حقوقی و اداری کشور ارائه گردیده است.',
  invoiceDescription: 'توضیحات اختصاصی فاکتور، شرایط تحویل خدمات، شماره حساب و راهنمای پرداخت.',
  paymentGatewayUrl: '',
  geminiApiKey: '',
  openaiApiKey: '',
  activeAiProvider: 'auto',
};

let inMemorySettings: BusinessSettings = { ...DEFAULT_SETTINGS };

export async function getSettings(): Promise<BusinessSettings> {
  try {
    if (!isSupabaseConfigured()) {
      return inMemorySettings;
    }
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'general')
      .maybeSingle();

    if (!error && data?.value) {
      const merged = { ...DEFAULT_SETTINGS, ...data.value };
      inMemorySettings = merged;
      return merged;
    }
  } catch (err) {
    console.warn('Reading site_settings general fallback to local:', err);
  }
  return inMemorySettings;
}

export function getCachedSettings(): BusinessSettings {
  return inMemorySettings;
}

export async function saveSettings(newSettings: Partial<BusinessSettings>): Promise<BusinessSettings> {
  try {
    const current = await getSettings();
    const updated: BusinessSettings = { ...current, ...newSettings };
    inMemorySettings = updated;

    const supabase = getSupabaseAdmin();
    await supabase.from('site_settings').upsert({
      key: 'general',
      value: updated,
      updated_at: new Date().toISOString(),
    });

    return updated;
  } catch (err) {
    console.error('Error saving site_settings general in Supabase:', err);
    return inMemorySettings;
  }
}

export async function incrementNextInvoiceNumber(): Promise<number> {
  const current = await getSettings();
  const nextNum = current.nextInvoiceNumber || 1001;
  await saveSettings({ nextInvoiceNumber: nextNum + 1 });
  return nextNum;
}
