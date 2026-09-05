import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { AdministrativeLettersPillarClient } from '@/components/samples/AdministrativeLettersPillarClient';

export const metadata: Metadata = {
  title: 'مرجع جامع نمونه نامه اداری و متن درخواست رسمی [دانلود و کپی] | نگارش یار',
  description:
    'دانلود و کپی الگوهای استاندارد نمونه نامه اداری، متن درخواست رسمی، عریضه‌نویسی به سازمان‌ها، شهرداری، بانک و تامین اجتماعی همراه با فرمول نگارش و تنظیم اختصاصی در نگارش یار.',
  keywords: [
    'نمونه نامه اداری',
    'متن درخواست اداری',
    'نامه رسمی',
    'نمونه درخواست کتبی',
    'عریضه‌نویسی اداری',
    'نمونه نامه به شهرداری',
    'نمونه نامه به بانک',
    'نامه به تامین اجتماعی',
    'نامه اداری به اداره کار',
    'متن اداری درخواست وام',
    'نامه به رئیس دانشگاه',
    'فرمول نگارش نامه اداری',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples/administrative-letters',
  },
  openGraph: {
    title: 'مرجع جامع نمونه نامه اداری و متن درخواست رسمی | نگارش یار',
    description:
      'بانک الگوهای استاندارد و رسمی نامه‌نگاری اداری، درخواست‌های سازمانی و عریضه‌نویسی به ادارات دولتی و شهرداری‌ها.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples/administrative-letters',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مرجع جامع نمونه نامه اداری و متن درخواست رسمی | نگارش یار',
    description:
      'بانک الگوهای استاندارد و رسمی نامه‌نگاری اداری و عریضه‌نویسی به سازمان‌ها همراه با امکان کپی و تنظیم اختصاصی.',
  },
};

export default function AdministrativeLettersPillarPage() {
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
        name: 'بانک نمونه اسناد و نامه‌ها',
        item: 'https://www.negaresh-yar.ir/samples',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'مرجع جامع نمونه نامه اداری و درخواست رسمی',
        item: 'https://www.negaresh-yar.ir/samples/administrative-letters',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'مرجع جامع نمونه نامه اداری و متن درخواست رسمی',
    description:
      'مجموعه کامل الگوهای مکاتبات رسمی با ادارات دولتی، شهرداری‌ها، بانک‌ها، بیمه، دانشگاه‌ها و نهادهای نظارتی همراه با فرمول نگارش و تنظیم اختصاصی.',
    url: 'https://www.negaresh-yar.ir/samples/administrative-letters',
    publisher: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: 'https://www.negaresh-yar.ir',
      telephone: '+989915147789',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'مشهد',
        addressRegion: 'خراسان رضوی',
        addressCountry: 'IR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.2972,
        longitude: 59.6067,
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'تفاوت یک نامه اداری معمولی با نامه اداری استاندارد و تخصصی چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'یک نامه اداری استاندارد دارای ساختار ۶ گانه اصولی (سربرگ، القاب رسمی، پاراگراف ورود، مستندات قانونی، خواسته روشن و هامش پیشنهادی) است. نامه‌های معمولی معمولاً احساسی، مبهم یا فاقد استناد به بخشنامه‌ها هستند و همین امر باعث رد یا معطلی آنها می‌شود.',
        },
      },
      {
        '@type': 'Question',
        name: 'چرا نباید متون آماده اینترنتی را بدون تغییر کپی کنیم؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'قالب‌های اینترنتی صرفاً چارچوب کلی هستند. هر اداره دولتی یا بانک، بخشنامه‌ها و فرآیندهای دفتری خاص خود را دارد. اگر شرایط پرونده، مدارک مثبته و مواد قانونی مرتبط در نامه درج نشود، درخواست در دبیرخانه رد خواهد شد.',
        },
      },
      {
        '@type': 'Question',
        name: 'ارکان اصلی یک نامه اداری رسمی چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '۱) تاریخ، شماره و پیوست ۲) عنوان دقیق گیرنده و القاب سازمانی ۳) سلام رسمی ۴) پاراگراف ورود مستقیم ۵) پاراگراف استدلال و مدارک ۶) نتیجه‌گیری و درخواست مشخص ۷) نام کامل، امضا و اطلاعات تماس.',
        },
      },
      {
        '@type': 'Question',
        name: 'تنظیم اختصاصی نامه اداری توسط نگارش یار چقدر زمان می‌برد؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'سفارش‌های تنظیم نامه اداری و سازمانی در نگارش یار با قید فوریت و ظرف ۱ تا ۳ ساعت با فرمت رسمی Word و PDF آماده و تحویل مشتری می‌گردد.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-admin-letters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="collection-schema-admin-letters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="faq-schema-admin-letters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AdministrativeLettersPillarClient />
    </>
  );
}
