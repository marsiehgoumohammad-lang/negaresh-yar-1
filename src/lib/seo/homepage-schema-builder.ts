import { FAQ_ITEMS } from '@/data/faq';

export interface SchemaOrgGraph {
  '@context': string;
  '@graph': Array<Record<string, unknown>>;
}

export function buildHomepageSchemaGraph(): SchemaOrgGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.negaresh-yar.ir/#organization',
        name: 'نگارش یار',
        alternateName: ['سایت نگارش یار', 'سامانه نگارش یار', 'Negaresh Yar'],
        url: 'https://www.negaresh-yar.ir/',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://www.negaresh-yar.ir/#logo',
          url: 'https://www.negaresh-yar.ir/logo.png',
          contentUrl: 'https://www.negaresh-yar.ir/logo.png',
          width: 1024,
          height: 1024,
        },
        image: 'https://www.negaresh-yar.ir/og-image.png',
        description:
          'سایت نگارش یار؛ مرکز جامع تخصصی تنظیم دادخواست حقوقی، شکواییه، لایحه دفاعیه، نامه های اداری، عریضه نویسی و کافی نت آنلاین.',
        telephone: '+989915147789',
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
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.negaresh-yar.ir/#website',
        name: 'نگارش یار',
        alternateName: ['سایت نگارش یار', 'سامانه نگارش یار', 'Negaresh Yar'],
        url: 'https://www.negaresh-yar.ir/',
        publisher: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.negaresh-yar.ir/services?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.negaresh-yar.ir/',
        url: 'https://www.negaresh-yar.ir/',
        name: 'نگارش یار | سایت رسمی نگارش نامه اداری، دادخواست، لایحه و کافی نت آنلاین',
        description:
          'سایت نگارش یار؛ سامانه تخصصی نگارش نامه اداری، عریضه نویسی، تنظیم دادخواست، شکواییه، لایحه دفاعیه و کافی نت آنلاین همراه با دانلود رایگان نمونه متن های حقوقی و اداری.',
        inLanguage: 'fa-IR',
        dateModified: '2026-11-07',
        isPartOf: {
          '@id': 'https://www.negaresh-yar.ir/#website',
        },
        about: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.negaresh-yar.ir/#faq',
        isPartOf: {
          '@id': 'https://www.negaresh-yar.ir/',
        },
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };
}
