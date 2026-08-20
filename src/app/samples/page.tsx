import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { SamplesPageClient } from '@/components/samples/SamplesPageClient';
import { allSamplesList } from '@/data/samples';

export const metadata: Metadata = {
  title: 'بانک ۵۸ نمونه دادخواست، لایحه و نامه اداری [دانلود رایگان + مشاوره] | نگارش یار',
  description:
    'دانلود و کپی رایگان ۵۸ نمونه دادخواست ثنا، شکواییه کیفری، لایحه دفاعیه و نامه اداری همراه با استناد به قوانین، راهنمای گام‌به‌گام و مشاوره تخصصی تنظیم در نگارش یار.',
  keywords: [
    'دانلود رایگان نمونه دادخواست',
    'بانک نمونه اسناد حقوقی',
    'نمونه دادخواست حقوقی ثنا',
    'نمونه شکواییه کیفری',
    'نمونه لایحه دفاعیه',
    'نمونه اظهارنامه رسمی',
    'نمونه نامه اداری',
    'نمونه نامه به رئیس جمهور',
    'نمونه نامه به دفتر رهبری',
    'نمونه دادخواست اعسار',
    'مشاوره تنظیم لایحه',
    'اوراق قضایی ثنا',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples',
  },
  openGraph: {
    title: 'بانک ۵۸ نمونه دادخواست، لایحه و نامه اداری [دانلود رایگان + مشاوره] | نگارش یار',
    description:
      'دانلود و کپی رایگان ۵۸ نمونه متن دادخواست حقوقی، شکواییه، لایحه و نامه‌های اداری همراه با استناد به قوانین و مشاوره تخصصی در سامانه نگارش یار.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بانک ۵۸ نمونه دادخواست، لایحه و نامه اداری [دانلود رایگان + مشاوره] | نگارش یار',
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
