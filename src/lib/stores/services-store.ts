import { ServiceItem } from './types';
import { getSupabaseAdmin } from '@/lib/supabase';

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

let inMemoryServices: ServiceItem[] = [...DEFAULT_SERVICES];

function mapRowToService(row: Record<string, unknown>): ServiceItem {
  const meta = (typeof row.metadata === 'object' && row.metadata !== null) ? (row.metadata as Record<string, unknown>) : {};
  return {
    id: (meta.customId as string) || (row.slug as string) || (row.id as string),
    name: (row.name as string) || (meta.name as string) || '',
    category: (row.category as string) || (meta.category as string) || 'عمومی',
    defaultPrice: Number(row.price) || Number(meta.defaultPrice) || 0,
    description: (row.description as string) || (meta.description as string) || '',
    enabled: row.active !== undefined ? Boolean(row.active) : (meta.enabled !== undefined ? Boolean(meta.enabled) : true),
    createdAt: (row.created_at as string) || new Date().toISOString(),
    updatedAt: (row.updated_at as string) || new Date().toISOString(),
  };
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true });

    if (!error && data && data.length > 0) {
      const items = data.map(mapRowToService);
      inMemoryServices = items;
      return items;
    }
  } catch (err) {
    console.error('Error fetching services from Supabase:', err);
  }
  return inMemoryServices;
}

export function getCachedServices(): ServiceItem[] {
  return inMemoryServices;
}

export async function addService(item: Omit<ServiceItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<ServiceItem> {
  const now = new Date().toISOString();
  const id = `srv-${Date.now()}`;
  const newItem: ServiceItem = {
    ...item,
    id,
    createdAt: now,
    updatedAt: now,
  };

  try {
    const supabase = getSupabaseAdmin();
    await supabase.from('services').insert({
      name: newItem.name,
      slug: id,
      description: newItem.description,
      category: newItem.category,
      price: newItem.defaultPrice,
      active: newItem.enabled,
      metadata: { customId: id, defaultPrice: newItem.defaultPrice, enabled: newItem.enabled },
      created_at: now,
      updated_at: now,
    });
  } catch (err) {
    console.error('Error inserting service in Supabase:', err);
  }

  inMemoryServices = [newItem, ...inMemoryServices];
  return newItem;
}

export async function updateService(id: string, updates: Partial<Omit<ServiceItem, 'id'>>): Promise<ServiceItem | null> {
  const current = await getServices();
  const index = current.findIndex((s) => s.id === id);
  if (index === -1) return null;

  const updatedItem: ServiceItem = {
    ...current[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  try {
    const supabase = getSupabaseAdmin();
    const { data: rows } = await supabase.from('services').select('*');
    const target = rows?.find((r) => {
      const meta = (typeof r.metadata === 'object' && r.metadata !== null) ? r.metadata : {};
      return meta.customId === id || r.slug === id || r.id === id;
    });

    if (target) {
      await supabase.from('services').update({
        name: updatedItem.name,
        description: updatedItem.description,
        category: updatedItem.category,
        price: updatedItem.defaultPrice,
        active: updatedItem.enabled,
        metadata: { customId: id, defaultPrice: updatedItem.defaultPrice, enabled: updatedItem.enabled },
        updated_at: updatedItem.updatedAt,
      }).eq('id', target.id);
    }
  } catch (err) {
    console.error('Error updating service in Supabase:', err);
  }

  inMemoryServices[index] = updatedItem;
  return updatedItem;
}

export async function deleteService(id: string): Promise<boolean> {
  try {
    const supabase = getSupabaseAdmin();
    const { data: rows } = await supabase.from('services').select('*');
    const target = rows?.find((r) => {
      const meta = (typeof r.metadata === 'object' && r.metadata !== null) ? r.metadata : {};
      return meta.customId === id || r.slug === id || r.id === id;
    });

    if (target) {
      await supabase.from('services').delete().eq('id', target.id);
    }
  } catch (err) {
    console.error('Error deleting service from Supabase:', err);
  }

  inMemoryServices = inMemoryServices.filter((s) => s.id !== id);
  return true;
}
