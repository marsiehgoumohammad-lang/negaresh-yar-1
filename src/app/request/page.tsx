import React from 'react';
import { Metadata } from 'next';
import { RequestPageClient } from '@/components/service-request/RequestPageClient';

export const metadata: Metadata = {
  title: 'ثبت درخواست خدمات نگارش یار | ارتباط با کارشناسان نگارش و عریضه‌نویسی',
  description:
    'اگر برای نگارش نامه اداری، تنظیم دادخواست، لایحه، شکواییه، اظهارنامه، تفسیر اسناد و آرای قضایی، ثبت‌نام در سامانه‌های دولتی یا هر خدمت آنلاین دیگری نیاز به کمک دارید، کافی است با کارشناسان نگارش یار ارتباط برقرار کنید.',
  keywords: [
    'ثبت درخواست نگارش یار',
    'تنظیم دادخواست آنلاین',
    'عریضه نویسی آنلاین',
    'تنظیم لایحه دفاعیه',
    'شکواییه آنلاین',
    'ارتباط با وکیل نگارش یار',
    'واتساپ نگارش یار',
    'تلگرام نگارش یار',
    'ایتا نگارش یار',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/request',
  },
  openGraph: {
    title: 'ثبت درخواست خدمات نگارش یار | پشتیبانی و تنظیم اوراق قضایی',
    description:
      'شرح درخواست و مدارک خود را بفرستید تا کارشناسان نگارش یار بهترین راهکار حقوقی و اداری را ارائه کنند.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/request',
    siteName: 'نگارش یار',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ثبت درخواست خدمات نگارش یار',
    description:
      'ارتباط مستقیم با کارشناسان نگارش یار در واتساپ، تلگرام، ایتا، روبیکا، بله و سروش پلاس.',
  },
};

export default function RequestPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'نگارش یار - ثبت درخواست خدمات آنلاین',
    description:
      'تنظیم تخصصی دادخواست، لایحه، شکواییه، اظهارنامه، نامه‌های اداری و خدمات آنلاین.',
    url: 'https://www.negaresh-yar.ir/request',
    telephone: '+989915147789',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'مشهد',
      addressRegion: 'خراسان رضوی',
      addressCountry: 'IR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.2972',
      longitude: '59.6067',
    },
    areaServed: 'IR',
    serviceType: [
      'تنظیم دادخواست',
      'تنظیم لایحه',
      'عریضه‌نویسی اداری',
      'تفسیر رای دادگاه با هوش مصنوعی',
    ],
  };

  return (
    <div className="min-h-screen bg-[#070B15] text-white flex flex-col selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Content */}
      <main className="flex-1 pb-16">
        <RequestPageClient />
      </main>
    </div>
  );
}
