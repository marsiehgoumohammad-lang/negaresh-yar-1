import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { SamplesPageClient } from '@/components/samples/SamplesPageClient';
import { allSamplesList } from '@/data/samples';

export const metadata: Metadata = {
  title: 'بانک نمونه اسناد حقوقی، دادخواست، شکواییه، لایحه و نامه اداری | نگارش یار',
  description:
    'دانلود و مشاهده کامل‌ترین بانک مرجع نمونه اسناد حقوقی، قضایی و اداری ایران. شامل نمونه دادخواست حقوقی ثنا، شکواییه کیفری، لایحه دفاعیه، اظهارنامه رسمی، اعسار، تبدیل وثیقه و نامه به رئیس جمهور و دفتر رهبری.',
  keywords: [
    'بانک نمونه اسناد حقوقی',
    'نمونه دادخواست حقوقی ثنا',
    'نمونه شکواییه کیفری',
    'نمونه لایحه دفاعیه',
    'نمونه اظهارنامه رسمی',
    'نمونه نامه اداری',
    'نمونه نامه به رئیس جمهور',
    'نمونه نامه به دفتر رهبری',
    'نمونه دادخواست اعسار',
    'نمونه درخواست تبدیل وثیقه',
    'اوراق قضایی ثنا',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples',
  },
  openGraph: {
    title: 'بانک نمونه اسناد حقوقی، دادخواست، شکواییه، لایحه و نامه اداری | نگارش یار',
    description:
      'بانک مرجع کاملاً رایگان اسناد حقوقی و اداری، راهنمای نگارش، قوانین و سوالات متداول کاربردی ثنا و سامد.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بانک نمونه اسناد حقوقی و اداری | نگارش یار',
    description: 'کامل‌ترین بانک نمونه دادخواست، شکواییه، لایحه، اظهارنامه ثنا و نامه‌های اداری.',
  },
};

export default function SamplesHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'صفحه اصلی',
        item: 'https://www.negaresh-yar.ir',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'بانک نمونه اسناد حقوقی و اداری',
        item: 'https://www.negaresh-yar.ir/samples',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'بانک نمونه اسناد حقوقی، قضایی و اداری نگارش یار',
    description: 'مجموعه کاملی از نمونه اسناد آماده حقوقی و اداری همراه با راهنمای نگارش و سوالات متداول.',
    url: 'https://www.negaresh-yar.ir/samples',
    hasPart: allSamplesList.map((sample) => ({
      '@type': 'WebPage',
      name: sample.title,
      url: `https://www.negaresh-yar.ir/samples/${sample.slug}`,
      description: sample.description,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="collection-schema-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <SamplesPageClient />
    </>
  );
}
