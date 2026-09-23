import React from 'react';
import Script from 'next/script';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { ExpertOpinionGuideSection } from '@/components/services/ExpertOpinionGuideSection';
import {
  expertOpinionObjectionData,
  expertOpinionObjectionMetadata,
} from '@/data/services/expert-opinion-objection';

export const metadata = expertOpinionObjectionMetadata;

export default function ExpertOpinionObjectionPage() {
  const data = {
    ...expertOpinionObjectionData,
    customGuideContent: <ExpertOpinionGuideSection />,
  };

  const canonicalUrl = `https://www.negaresh-yar.ir/services/${data.slug}`;

  const graphSchema = {
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
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: data.h1Title,
        description: data.heroSubtitle,
        isPartOf: {
          '@id': 'https://www.negaresh-yar.ir/#website',
        },
        breadcrumb: {
          '@id': `${canonicalUrl}#breadcrumb`,
        },
        mainEntity: {
          '@id': `${canonicalUrl}#service`,
        },
      },
      {
        '@type': 'LegalService',
        '@id': `${canonicalUrl}#service`,
        name: data.h1Title,
        description: data.heroSubtitle,
        url: canonicalUrl,
        provider: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Iran',
        },
        mainEntityOfPage: {
          '@id': `${canonicalUrl}#webpage`,
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
            name: 'خدمات نگارش یار',
            item: 'https://www.negaresh-yar.ir/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.h1Title,
            item: canonicalUrl,
          },
        ],
      },
      ...(data.faqs && data.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${canonicalUrl}#faq`,
              isPartOf: {
                '@id': `${canonicalUrl}#webpage`,
              },
              mainEntity: data.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <Script
        id="expert-opinion-objection-schema-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <main className="min-h-screen bg-[#070B15]">
        <LandingPageTemplate data={data} />
      </main>
    </>
  );
}
