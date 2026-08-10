import React from 'react';
import Script from 'next/script';
import { SampleLandingPageTemplate } from '@/components/samples/SampleLandingPageTemplate';
import {
  sampleObjectionAbsentJudgmentData,
  sampleObjectionAbsentJudgmentMetadata,
} from '@/data/samples/objection-absent-judgment';

export const metadata = sampleObjectionAbsentJudgmentMetadata;

export default function SampleObjectionAbsentJudgmentPage() {
  const data = sampleObjectionAbsentJudgmentData;

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
        name: 'بانک نمونه اسناد',
        item: 'https://www.negaresh-yar.ir/samples',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.categoryName,
        item: `https://www.negaresh-yar.ir/samples/${data.slug}`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.h1Title,
    description: data.heroSubtitle,
    url: `https://www.negaresh-yar.ir/samples/${data.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: 'https://www.negaresh-yar.ir',
    },
    inLanguage: 'fa-IR',
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
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SampleLandingPageTemplate data={data} />
    </>
  );
}
