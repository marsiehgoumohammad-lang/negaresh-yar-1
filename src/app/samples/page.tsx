import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { SamplesPageClient } from '@/components/samples/SamplesPageClient';
import { allSamplesList } from '@/data/samples';

export const metadata: Metadata = {
  title: 'بانک دادخواست های حقوقی، نمونه لایحه حقوقی و نامه های اداری [Word و PDF]',
  description:
    'بانک جامع دادخواست های حقوقی، نمونه لایحه دفاعیه و لوایح کاربردی دادگاه (ارسال مدارک به شعبه، استعلام سه گانه، مطالعه پرونده)، شکواییه و نامه های اداری با دانلود Word و PDF.',
  keywords: [
    'بانک دادخواست های حقوقی',
    'نمونه لایحه',
    'نمونه لایحه حقوقی',
    'نمونه لایحه ارسال مدارک به شعبه',
    'نمونه لایحه استعلام سه گانه',
    'نمونه لایحه استعلام سه گانه و توقیف اموال',
    'نمونه لایحه درخواست مطالعه و کپی از پرونده حقوقی',
    'نمونه لایحه ارسال پرونده به اجرای احکام',
    'نمونه لایحه اعتبار امر مختومه',
    'دانلود رایگان نمونه دادخواست',
    'بانک نمونه اسناد حقوقی',
    'نمونه دادخواست حقوقی ثنا',
    'نمونه شکواییه کیفری',
    'نمونه لایحه دفاعیه',
    'نمونه اظهارنامه رسمی',
    'نمونه نامه اداری',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples',
  },
  openGraph: {
    title: 'بانک دادخواست های حقوقی، نمونه لایحه حقوقی و نامه های اداری | نگارش یار',
    description:
      'دانلود رایگان بانک دادخواست های حقوقی، نمونه لایحه حقوقی و دفاعیه، شکواییه و نامه های اداری همراه با راهنمای نگارش در سامانه نگارش یار.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'بانک دادخواست های حقوقی، نمونه لایحه حقوقی و نامه های اداری | نگارش یار',
    description: 'دانلود رایگان بانک نمونه دادخواست های حقوقی، نمونه لایحه، شکواییه و نامه های اداری در نگارش یار.',
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
