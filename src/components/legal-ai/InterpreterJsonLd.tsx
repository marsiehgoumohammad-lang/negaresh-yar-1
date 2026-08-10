import React from 'react';
import { INTERPRETER_FAQ_ITEMS } from './InterpreterFaqSection';

export function InterpreterJsonLd() {
  const baseUrl = 'https://www.negaresh-yar.ir';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'نگارش یار',
    alternateName: 'سامانه تنظیم دادخواست، لایحه و تفسیر رای نگارش یار',
    url: baseUrl,
    logo: `${baseUrl}/logo.jpg`,
    telephone: '+989915147789',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'مشهد',
      addressRegion: 'خراسان رضوی',
      addressCountry: 'IR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2972,
      longitude: 59.6067,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'نگارش یار',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'سامانه هوشمند تفسیر رای دادگاه و اوراق قضایی نگارش یار',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: `${baseUrl}/ai-interpreter`,
    description:
      'سامانه آنلاین و رایگان تحلیل و تفسیر رای دادگاه، دادنامه، ابلاغیه ثنا و قرارهای قضایی به زبان ساده با هوش مصنوعی نگارش یار.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'خانه',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'تفسیر رای دادگاه و اوراق قضایی',
        item: `${baseUrl}/ai-interpreter`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INTERPRETER_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
