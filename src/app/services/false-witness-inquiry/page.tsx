import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import {
  FalseWitnessInquiryClient,
  faqItems,
} from '@/components/services/FalseWitnessInquiryClient';

export const metadata: Metadata = {
  title:
    'اثبات شهادت دروغین و استعلام حضور شاهد در محل واقعه | نگارش یار',
  description:
    'راهکار قانونی ابطال شهادت شاهد ساختگی از طریق تقاضای استعلام رسمی دکل مخابراتی (BTS) و ثبت تردد از بازپرس، دادیار و قاضی دادگاه. جهت تنظیم لایحه تخصصی در پیام‌رسان‌ها با ما تماس بگیرید.',
  keywords: [
    'شهادت دروغ',
    'اثبات شهادت دروغین',
    'استعلام حضور شاهد در محل واقعه',
    'رد شهادت شاهد دروغی',
    'استعلام دکل مخابراتی شاهد',
    'استعلام BTS شاهد',
    'جرح شاهد در دادسرا',
    'شکایت از شاهد دروغین',
    'ماده ۶۵۰ قانون مجازات اسلامی',
    'لایحه استعلام حضور شاهد بازپرسی',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/services/false-witness-inquiry',
  },
  openGraph: {
    title:
      'اثبات قطعی شهادت دروغ با استعلام قضایی حضور شاهد در محل حادثه | نگارش یار',
    description:
      'طرف مقابل علیه شما شاهد دروغین آورده؟ با لایحه استعلام رسمی فنی و مخابراتی از بازپرس یا قاضی، غیبت شاهد در صحنه واقعه را اثبات و شهادت را باطل کنید.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/services/false-witness-inquiry',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    images: [
      {
        url: 'https://www.negaresh-yar.ir/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'اثبات شهادت دروغین و استعلام حضور شاهد در نگارش یار',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اثبات شهادت دروغین با استعلام قضایی دکل مخابراتی | نگارش یار',
    description:
      'درخواست استعلام حضور شاهد از دادیار و بازپرس جهت رد شهادت کذب و پیگیری کیفری.',
    images: ['https://www.negaresh-yar.ir/logo.jpg'],
  },
};

export default function FalseWitnessInquiryPage() {
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
        name: 'خدمات حقوقی',
        item: 'https://www.negaresh-yar.ir/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'اثبات شهادت دروغ و استعلام حضور شاهد',
        item: 'https://www.negaresh-yar.ir/services/false-witness-inquiry',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'اثبات شهادت دروغ و استعلام قضایی حضور شاهد در محل واقعه',
    description:
      'تنظیم تخصصی لایحه درخواست استعلام فنی دکل مخابراتی، تردد و سوابق حضور شاهد جهت ابطال شهادت کذب در دادسرا و دادگاه.',
    provider: {
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
        latitude: '36.2972',
        longitude: '59.6067',
      },
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.negaresh-yar.ir/logo.jpg',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    url: 'https://www.negaresh-yar.ir/services/false-witness-inquiry',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-witness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema-witness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema-witness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FalseWitnessInquiryClient />
    </>
  );
}
