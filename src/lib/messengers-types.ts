export interface MessengerConfig {
  id: string;
  name: string;
  code: string;
  description: string;
  url: string;
  enabled: boolean;
  order: number;
  icon: string;
  color: string;
  badge?: string;
}

export const DEFAULT_MESSENGERS: MessengerConfig[] = [
  {
    id: 'whatsapp',
    name: 'واتساپ',
    code: 'whatsapp',
    description: 'گفتگوی آنلاین، ارسال مدارک و دریافت مشاوره فوری در واتساپ نگارش یار',
    url: 'https://wa.me/989915147789',
    enabled: true,
    order: 1,
    icon: '/icons/messengers/whatsapp.svg',
    color: '#25D366',
    badge: 'پشتیبانی آنلاین',
  },
  {
    id: 'telegram',
    name: 'تلگرام',
    code: 'telegram',
    description: 'ارتباط مستقیم با کارشناسان و ارسال مدارک با کیفیت اصلی در تلگرام',
    url: 'https://t.me/negareshyar_support',
    enabled: true,
    order: 2,
    icon: '/icons/messengers/telegram.svg',
    color: '#24A1DE',
    badge: 'پاسخگویی سریع',
  },
  {
    id: 'eitaa',
    name: 'ایتا',
    code: 'eitaa',
    description: 'ثبت سریع درخواست‌های حقوقی و اداری در پیام‌رسان بومی ایتا',
    url: 'https://eitaa.com/negareshyar_admin',
    enabled: true,
    order: 3,
    icon: '/icons/messengers/eitaa.svg',
    color: '#E65100',
    badge: 'پرطرفدار',
  },
  {
    id: 'rubika',
    name: 'روبیکا',
    code: 'rubika',
    description: 'ارتباط در بستر روبیکا و دریافت پاسخ کارشناسان نگارش یار',
    url: 'https://rubika.ir/negareshyar',
    enabled: true,
    order: 4,
    icon: '/icons/messengers/rubika.svg',
    color: '#7B1FA2',
    badge: 'رایگان و آسان',
  },
  {
    id: 'bale',
    name: 'بله',
    code: 'bale',
    description: 'پیام‌رسان بانکی بله جهت ثبت درخواست و پیگیری خدمات',
    url: 'https://ble.ir/negareshyar',
    enabled: true,
    order: 5,
    icon: '/icons/messengers/bale.svg',
    color: '#107C41',
    badge: 'رسمی و امن',
  },
  {
    id: 'soroush',
    name: 'سروش پلاس',
    code: 'soroush',
    description: 'ارتباط در پیام‌رسان سروش پلاس جهت دریافت مشاوره و ثبت سفارش',
    url: 'https://splus.ir/negareshyar',
    enabled: true,
    order: 6,
    icon: '/icons/messengers/soroush.svg',
    color: '#0088CC',
    badge: 'در دسترس',
  },
];
