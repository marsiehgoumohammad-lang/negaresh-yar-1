import React from 'react';
import Script from 'next/script';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { BailReductionGuideSection } from '@/components/services/BailReductionGuideSection';
import {
  bailReductionData,
  bailReductionMetadata,
} from '@/data/services/bail-reduction';

export const metadata = bailReductionMetadata;

export default function BailReductionPage() {
  const data = {
    ...bailReductionData,
    customGuideContent: <BailReductionGuideSection />,
  };

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
        name: 'خدمات نگارش یار',
        item: 'https://www.negaresh-yar.ir/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.h1Title,
        item: `https://www.negaresh-yar.ir/services/${data.slug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: data.h1Title,
    description: data.heroSubtitle,
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
    url: `https://www.negaresh-yar.ir/services/${data.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
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
        id="breadcrumb-schema-bail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema-bail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema-bail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-[#070B15]">
        <LandingPageTemplate data={data} />
      </main>
    </>
  );
}
