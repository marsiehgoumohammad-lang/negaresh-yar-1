import React from 'react';
import Script from 'next/script';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  governmentAuctionsData,
  governmentAuctionsMetadata,
} from '@/data/services/government-auctions';

export const metadata = governmentAuctionsMetadata;

export default function GovernmentAuctionsPage() {
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
        name: governmentAuctionsData.h1Title,
        item: 'https://www.negaresh-yar.ir/services/government-auctions',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: governmentAuctionsData.h1Title,
    description: governmentAuctionsData.heroSubtitle,
    provider: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: 'https://www.negaresh-yar.ir',
    },
    areaServed: {
      '@type': 'Country',
      name: 'ایران',
    },
    serviceType: 'Government Auctions Registration and Bidding',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: governmentAuctionsData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-auction"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema-auction"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema-auction"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-[#070B15]">
        <LandingPageTemplate data={governmentAuctionsData} />
      </main>
    </>
  );
}
