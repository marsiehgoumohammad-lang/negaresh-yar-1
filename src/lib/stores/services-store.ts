import fs from 'fs';
import path from 'path';
import { ServiceItem } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'services.json');

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    name: 'تنظیم تخصصی دادخواست و شکواییه',
    category: 'اوراق قضایی',
    defaultPrice: 450000,
    description: 'تنظیم دادخواست‌های حقوقی، خانواده، ملکی و شکواییه‌های کیفری برای سامانه ثنا',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-2',
    name: 'تنظیم لایحه دفاعیه و تجدیدنظرخواهی',
    category: 'لوایح و اعتراضات',
    defaultPrice: 650000,
    description: 'نگارش لایحه دفاعیه دادگاه بدوی، تجدیدنظر، واخواهی و فرجام‌خواهی دیوان عالی',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-3',
    name: 'تنظیم نامه اداری و عریضه رسمی',
    category: 'مکاتبات اداری',
    defaultPrice: 250000,
    description: 'نگارش نامه به ادارات، دفتر مقام معظم رهبری، ریاست جمهوری و نهادهای دولتی',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-4',
    name: 'ثبت‌نام و شرکت در مزایدات دولتی و قضایی',
    category: 'مزایدات',
    defaultPrice: 350000,
    description: 'دریافت توکن، گواهی امضای الکترونیک، ثبت پیشنهاد قیمت در ستاد ایران و سازمان اموال تملیکی',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-5',
    name: 'تنظیم دادخواست اعسار و تقسیط بدهی',
    category: 'اعسار و مالی',
    defaultPrice: 400000,
    description: 'تنظیم دادخواست اعسار از پرداخت محکوم‌به، هزینه دادرسی و استشهادیه شهود',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-6',
    name: 'درخواست تقلیل و تبدیل قرار وثیقه',
    category: 'امور کیفری',
    defaultPrice: 500000,
    description: 'درخواست کاهش مبلغ وثیقه، تبدیل وثیقه به کفالت، آزادی مشروط و مرخصی زندانی',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-7',
    name: 'خدمات کافی‌نت آنلاین غیرحضوری',
    category: 'کافی‌نت',
    defaultPrice: 150000,
    description: 'ثبت‌نام سامانه ثنا، امور بیمه، مالیات، ثبت خودرو و ثبت‌نام‌های اینترنتی سراسری',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'srv-8',
    name: 'تفسیر و تحلیل رای دادگاه و ابلاغیه',
    category: 'مشاوره',
    defaultPrice: 200000,
    description: 'بررسی مفاد ابلاغیه‌های عدل ایران و تعیین مهلت‌های قانونی و راهکار اعتراض',
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function getServices(): ServiceItem[] {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data) as ServiceItem[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading services file:', err);
  }
  return DEFAULT_SERVICES;
}

export function saveServices(services: ServiceItem[]): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(FILE_PATH, JSON.stringify(services, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving services file:', err);
    return false;
  }
}

export function addService(item: Omit<ServiceItem, 'id' | 'createdAt' | 'updatedAt'>): ServiceItem {
  const current = getServices();
  const newItem: ServiceItem = {
    ...item,
    id: `srv-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const updated = [newItem, ...current];
  saveServices(updated);
  return newItem;
}

export function updateService(id: string, updates: Partial<Omit<ServiceItem, 'id'>>): ServiceItem | null {
  const current = getServices();
  const index = current.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const updatedItem = {
    ...current[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  current[index] = updatedItem;
  saveServices(current);
  return updatedItem;
}

export function deleteService(id: string): boolean {
  const current = getServices();
  const filtered = current.filter((s) => s.id !== id);
  if (filtered.length === current.length) return false;
  return saveServices(filtered);
}
