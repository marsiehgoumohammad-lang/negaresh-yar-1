import React from 'react';
import Script from 'next/script';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  leaderOfficeLetterData,
  leaderOfficeLetterMetadata,
} from '@/data/services/leader-office-letter';

export const metadata = leaderOfficeLetterMetadata;

export default function LeaderOfficeLetterPage() {
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
        name: leaderOfficeLetterData.h1Title,
        item: 'https://www.negaresh-yar.ir/services/leader-office-letter',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: leaderOfficeLetterData.h1Title,
    description: leaderOfficeLetterData.heroSubtitle,
    provider: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: 'https://www.negaresh-yar.ir',
    },
    areaServed: {
      '@type': 'Country',
      name: 'ایران',
    },
    serviceType: 'Supreme Leader Office Letter Drafting',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: leaderOfficeLetterData.faqs.map((faq) => ({
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
        id="breadcrumb-schema-leader"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service-schema-leader"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema-leader"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-[#070B15]">
        <LandingPageTemplate data={leaderOfficeLetterData} />
      </main>
    </>
  );
}
