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
        alternateName: 'Negaresh Yar',
        url: 'https://www.negaresh-yar.ir/',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://www.negaresh-yar.ir/#logo',
          url: 'https://www.negaresh-yar.ir/logo.jpg',
        },
        image: 'https://www.negaresh-yar.ir/logo.jpg',
        description:
          'مرکز جامع تخصصی تنظیم دادخواست حقوقی، شکواییه، لایحه دفاعیه، نامه‌های اداری و تفسیر هوشمند اوراق قضایی.',
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
        name: 'نگارش یار | نگارش نامه اداری، عریضه‌نویسی و خدمات متنی آنلاین',
        description:
          'حرفت را بگو؛ نامه‌اش را به نگارشیار بسپار. نگارش تخصصی نامه‌های اداری، بانکی، شهرداری، دادخواست و شکواییه با الگوهای استاندارد و رسمی.',
        inLanguage: 'fa-IR',
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
