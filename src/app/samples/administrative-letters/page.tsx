import React from 'react';
import { Metadata } from 'next';
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
  const canonicalUrl = 'https://www.negaresh-yar.ir/samples/administrative-letters';

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.negaresh-yar.ir/#organization',
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
          latitude: '36.2972',
          longitude: '59.6067',
        },
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://www.negaresh-yar.ir/#logo',
          url: 'https://www.negaresh-yar.ir/logo.jpg',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.negaresh-yar.ir/#website',
        url: 'https://www.negaresh-yar.ir',
        name: 'نگارش یار',
        publisher: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
      },
      {
        '@type': ['WebPage', 'CollectionPage'],
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: 'مرجع جامع نمونه نامه اداری و متن درخواست رسمی',
        description:
          'مجموعه کامل الگوهای مکاتبات رسمی با ادارات دولتی، شهرداری‌ها، بانک‌ها، بیمه، دانشگاه‌ها و نهادهای نظارتی همراه با فرمول نگارش و تنظیم اختصاصی.',
        isPartOf: {
          '@id': 'https://www.negaresh-yar.ir/#website',
        },
        breadcrumb: {
          '@id': `${canonicalUrl}#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
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
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        isPartOf: {
          '@id': canonicalUrl,
        },
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
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <AdministrativeLettersPillarClient />
    </>
  );
}
