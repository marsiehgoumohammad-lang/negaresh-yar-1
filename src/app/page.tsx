import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { AiIntro } from '@/components/home/ai-intro';
import { Features } from '@/components/home/features';
import { FairLawyer } from '@/components/home/fair-lawyer';
import { ArticlesPreview } from '@/components/home/articles-preview';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'نگارش یار | مرکز تخصصی تنظیم دادخواست، شکواییه، لایحه و نامه‌های اداری',
  description: 'سامانه هوشمند غیرحضوری تنظیم آنلاین دادخواست حقوقی، شکواییه کیفری، لایحه دفاعیه، نامه به رئیس جمهور و دفتر رهبری، عریضه‌نویسی، خدمات کافی‌نت و تفسیر ابلاغیه ثنا با هوش مصنوعی.',
  keywords: [
    'نگارش نامه اداری',
    'تنظیم دادخواست آنلاین',
    'تنظیم شکواییه کیفری',
    'تنظیم لایحه دفاعیه',
    'عریضه نویسی',
    'نامه به رئیس جمهور',
    'نامه به دفتر مقام معظم رهبری',
    'تفسیر رای دادگاه با هوش مصنوعی',
    'خدمات کافی نت آنلاین',
    'اعسار از هزینه دادرسی',
    'اعتراض به رای دادگاه',
    'معرفی وکیل منصف',
    'انتخاب وکیل متناسب با پرونده',
    'هزینه وکیل',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir',
  },
  openGraph: {
    title: 'نگارش یار | مرکز تخصصی تنظیم دادخواست، شکواییه، لایحه و نامه‌های اداری',
    description: 'تنظیم تخصصی و فوری انواع اوراق قضایی و اداری به صورت ۱۰۰٪ آنلاین با پشتیبانی پیام‌رسان‌ها در سراسر کشور.',
    url: 'https://www.negaresh-yar.ir',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نگارش یار | تنظیم آنلاین دادخواست، لایحه و خدمات اداری',
    description: 'عریضه‌نویسی، تنظیم اوراق قضایی و خدمات کافی‌نت آنلاین سراسر کشور.',
  },
};

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'نگارش یار',
    alternateName: 'Negaresh Yar',
    url: 'https://www.negaresh-yar.ir',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.negaresh-yar.ir/logo.jpg',
    },
    image: 'https://www.negaresh-yar.ir/logo.jpg',
    description: 'مرکز جامع تخصصی تنظیم دادخواست حقوقی، شکواییه، لایحه دفاعیه، نامه‌های اداری و تفسیر هوشمند اوراق قضایی.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+989915147789',
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: ['Persian'],
    },
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
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'نگارش یار',
    url: 'https://www.negaresh-yar.ir',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.negaresh-yar.ir/services?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'نگارش یار - مرکز نگارش و خدمات آنلاین حقوقی و اداری',
    image: 'https://www.negaresh-yar.ir/images/hero_3d_stage.jpg',
    '@id': 'https://www.negaresh-yar.ir/#legalservice',
    url: 'https://www.negaresh-yar.ir',
    telephone: '+989915147789',
    priceRange: '$$',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />

      <main className="flex-1">
        <Hero />
        <Services />
        <AiIntro />
        <Features />
        <FairLawyer />
        <ArticlesPreview />
      </main>
    </div>
  );
}

