/**
 * Central messenger link helper with dynamic pre-filled messages
 */

export interface MessengerLinkItem {
  id: string;
  name: string;
  code: 'whatsapp' | 'telegram' | 'eitaa' | 'rubika' | 'bale';
  url: string;
  color: string;
  bgLight: string;
  badge: string;
  ariaLabel: string;
}

export const OFFICIAL_PHONE = '09915147789';
export const OFFICIAL_INTL_PHONE = '+989915147789';

export function getSampleMessengerMessage(sampleTitle: string): string {
  return `سلام، درباره ${sampleTitle} سؤال دارم. لطفاً راهنمایی می‌کنید؟`;
}

export function generateMessengerLinks(message: string): MessengerLinkItem[] {
  const encoded = encodeURIComponent(message.trim());

  return [
    {
      id: 'whatsapp',
      name: 'واتساپ',
      code: 'whatsapp',
      url: `https://wa.me/989915147789?text=${encoded}`,
      color: '#25D366',
      bgLight: 'rgba(37, 211, 102, 0.1)',
      badge: 'پشتیبانی آنلاین',
      ariaLabel: 'ارتباط در واتساپ درباره این نمونه',
    },
    {
      id: 'telegram',
      name: 'تلگرام',
      code: 'telegram',
      url: `https://t.me/negareshyar_support?text=${encoded}`,
      color: '#24A1DE',
      bgLight: 'rgba(36, 161, 222, 0.1)',
      badge: 'پاسخگویی سریع',
      ariaLabel: 'ارتباط در تلگرام درباره این نمونه',
    },
    {
      id: 'eitaa',
      name: 'ایتا',
      code: 'eitaa',
      url: `https://eitaa.com/negareshyar_admin`,
      color: '#E65100',
      bgLight: 'rgba(230, 81, 0, 0.1)',
      badge: 'پیام‌رسان ملی',
      ariaLabel: 'ارتباط در پیام‌رسان ایتا درباره این نمونه',
    },
    {
      id: 'bale',
      name: 'بله',
      code: 'bale',
      url: `https://ble.ir/negareshyar`,
      color: '#107C41',
      bgLight: 'rgba(16, 124, 65, 0.1)',
      badge: 'پیام‌رسان بله',
      ariaLabel: 'ارتباط در پیام‌رسان بله درباره این نمونه',
    },
    {
      id: 'rubika',
      name: 'روبیکا',
      code: 'rubika',
      url: `https://rubika.ir/negareshyar`,
      color: '#7B1FA2',
      bgLight: 'rgba(123, 31, 162, 0.1)',
      badge: 'پشتیبانی روبیکا',
      ariaLabel: 'ارتباط در پیام‌رسان روبیکا درباره این نمونه',
    },
  ];
}
