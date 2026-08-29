import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { mashhadServiceData, mashhadMetadata } from '@/data/services/mashhad';

export const metadata = mashhadMetadata;

export default function MashhadServicePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'نگارش یار مشهد - کافی نت آنلاین و عریضه نویسی',
    image: 'https://www.negaresh-yar.ir/og-image.jpg',
    '@id': 'https://www.negaresh-yar.ir/services/mashhad',
    url: 'https://www.negaresh-yar.ir/services/mashhad',
    telephone: '+989915147789',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'مشهد',
      addressLocality: 'مشهد',
      addressRegion: 'خراسان رضوی',
      addressCountry: 'IR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2972,
      longitude: 59.6067,
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
    sameAs: [
      'https://www.negaresh-yar.ir',
    ],
  };

  return (
    <main className="min-h-screen bg-[#070B15]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LandingPageTemplate data={mashhadServiceData} />
    </main>
  );
}
