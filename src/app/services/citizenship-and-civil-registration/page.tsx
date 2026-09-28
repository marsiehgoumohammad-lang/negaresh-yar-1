import React from 'react';
import Script from 'next/script';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { CitizenshipAndCivilRegistrationGuideSection } from '@/components/services/CitizenshipAndCivilRegistrationGuideSection';
import {
  citizenshipAndCivilRegistrationData,
  citizenshipAndCivilRegistrationMetadata,
} from '@/data/services/citizenship-and-civil-registration';

export const metadata = citizenshipAndCivilRegistrationMetadata;

export default function CitizenshipAndCivilRegistrationPage() {
  const data = {
    ...citizenshipAndCivilRegistrationData,
    customGuideContent: <CitizenshipAndCivilRegistrationGuideSection />,
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
              name: 'خدمات تخصصی',
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
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: data.h1Title,
        description: data.heroSubtitle,
        provider: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
        serviceType: 'تنظیم تخصصی اسناد تابعیت، اثبات نسب و ثبت احوال',
        areaServed: {
          '@type': 'Country',
          name: 'ایران',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: data.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <LandingPageTemplate data={data} />
    </>
  );
}
