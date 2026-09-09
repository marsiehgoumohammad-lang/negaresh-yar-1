import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { SamplesPageClient } from '@/components/samples/SamplesPageClient';
import { allSamplesList } from '@/data/samples';

export const metadata: Metadata = {
  title: 'بانک جامع نمونه دادخواست، لایحه و نامه‌های اداری و رسمی | نگارش یار',
  description:
    'دانلود و کپی رایگان نمونه دادخواست‌های ثنا، شکواییه کیفری، لایحه دفاعیه، نامه به بیت رهبری، نامه به رئیس جمهور و نامه‌های رسمی اداری با راهنمای گام‌به‌گام در نگارش یار.',
  keywords: [
    'نامه به بیت رهبری',
    'نامه به رهبری',
    'نامه به رئیس جمهور',
    'نامه به ریاست جمهوری',
    'نامه به بیت رهبری برای بخشش اضافه خدمت',
    'نامه به بیت رهبری برای دوقلوها',
    'نامه به رهبر',
    'دانلود رایگان نمونه دادخواست',
    'بانک نمونه اسناد حقوقی',
    'نمونه دادخواست حقوقی ثنا',
    'نمونه شکواییه کیفری',
    'نمونه لایحه دفاعیه',
    'نمونه اظهارنامه رسمی',
    'نمونه نامه اداری',
    'نمونه دادخواست اعسار',
    'مشاوره تنظیم لایحه',
    'اوراق قضایی ثنا',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples',
  },
  openGraph: {
    title: 'بانک جامع نمونه دادخواست، لایحه و نامه‌های اداری و رسمی | نگارش یار',
    description:
      'دانلود و کپی رایگان نمونه متن دادخواست حقوقی، شکواییه، لایحه و نامه‌های اداری همراه با استناد به قوانین و مشاوره تخصصی در سامانه نگارش یار.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بانک جامع نمونه دادخواست، لایحه و نامه‌های اداری و رسمی | نگارش یار',
    description: 'دانلود و کپی رایگان کامل‌ترین بانک نمونه دادخواست، شکواییه، لایحه و نامه‌های اداری در نگارش یار.',
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
