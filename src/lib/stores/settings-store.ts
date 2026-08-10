import fs from 'fs';
import path from 'path';
import { BusinessSettings } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'settings.json');

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

let inMemorySettings: BusinessSettings | null = null;

export function getSettings(): BusinessSettings {
  if (inMemorySettings) {
    return { ...DEFAULT_SETTINGS, ...inMemorySettings };
  }
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      const settingsObj: BusinessSettings = { ...DEFAULT_SETTINGS, ...parsed };
      inMemorySettings = settingsObj;
      return settingsObj;
    }
  } catch (err) {
    console.error('Error reading settings file:', err);
  }
  return DEFAULT_SETTINGS;
}

export function saveSettings(newSettings: Partial<BusinessSettings>): BusinessSettings {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const current = getSettings();
    const updated = { ...current, ...newSettings };
    inMemorySettings = updated;
    fs.writeFileSync(FILE_PATH, JSON.stringify(updated, null, 2), 'utf-8');
    return updated;
  } catch (err) {
    console.error('Error saving settings file:', err);
    if (inMemorySettings) return inMemorySettings;
    return getSettings();
  }
}

export function incrementNextInvoiceNumber(): number {
  const current = getSettings();
  const nextNum = current.nextInvoiceNumber;
  saveSettings({ nextInvoiceNumber: nextNum + 1 });
  return nextNum;
}
