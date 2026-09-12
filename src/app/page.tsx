import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { QuickValueStrip } from '@/components/home/quick-value-strip';
import { ServiceSelection } from '@/components/home/service-selection';
import { HowItWorks } from '@/components/home/how-it-works';
import { RealSamplePreview } from '@/components/home/real-sample-preview';
import { WhyNegareshYar } from '@/components/home/why-negaresh-yar';
import { BrandPersonality } from '@/components/home/brand-personality';
import { SampleLibraryHub } from '@/components/home/sample-library-hub';
import { SmartServices } from '@/components/home/smart-services';
import { KnowledgeArticles } from '@/components/home/knowledge-articles';
import { TrustSection } from '@/components/home/trust-section';
import { LawyerService } from '@/components/home/lawyer-service';
import { FaqSection, FAQ_ITEMS } from '@/components/home/faq-section';
import { FinalCta } from '@/components/home/final-cta';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'نگارش یار | نگارش نامه اداری، عریضه‌نویسی و خدمات متنی آنلاین',
  description: 'حرفت را بگو؛ نامه‌اش را به نگارشیار بسپار. نگارش تخصصی نامه‌های اداری، بانکی، شهرداری، دادخواست و شکواییه با الگوهای استاندارد و رسمی.',
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
    title: 'نگارش یار | نگارش نامه اداری، عریضه‌نویسی و خدمات متنی آنلاین',
    description: 'حرفت را بگو؛ نامه‌اش را به نگارشیار بسپار. نامه‌های اداری، درخواست‌ها و نوشته‌های رسمی‌ات را حرفه‌ای و روان آماده کن.',
    url: 'https://www.negaresh-yar.ir',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نگارش یار | سامانه آنلاین نگارش نامه‌های رسمی و اداری',
    description: 'عریضه‌نویسی، تنظیم اوراق اداری و قضایی با الگوهای موثق و استاندارد.',
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
    image: 'https://www.negaresh-yar.ir/logo.jpg',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Quick Value / Trust Strip */}
        <QuickValueStrip />

        {/* 4. Service Selection */}
        <ServiceSelection />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Real Sample Document */}
        <RealSamplePreview />

        {/* 7. Why Negaresh-Yar */}
        <WhyNegareshYar />

        {/* 8. Brand / Yara Personality */}
        <BrandPersonality />

        {/* 9. Sample Library / SEO Hub */}
        <SampleLibraryHub />

        {/* 10. Smart Services */}
        <SmartServices />

        {/* 11. Knowledge / Articles */}
        <KnowledgeArticles />

        {/* 12. Trust Section */}
        <TrustSection />

        {/* 13. Lawyer Service (Placed respectfully lower) */}
        <LawyerService />

        {/* 14. FAQ */}
        <FaqSection />

        {/* 15. Final CTA */}
        <FinalCta />
      </main>
    </div>
  );
}
