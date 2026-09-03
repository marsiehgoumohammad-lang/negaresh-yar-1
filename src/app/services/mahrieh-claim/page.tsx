import React from 'react';
import Script from 'next/script';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { mahriehClaimData, mahriehClaimMetadata } from '@/data/services/mahrieh-claim';

export const metadata = mahriehClaimMetadata;

export default function MahriehClaimPage() {
  const data = mahriehClaimData;

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
    },
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
    areaServed: 'IR',
    url: `https://www.negaresh-yar.ir/services/${data.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f: { q: string; a: string }) => ({
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
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LandingPageTemplate data={data} />
    </>
  );
}
