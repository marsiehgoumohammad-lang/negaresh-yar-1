import { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/stores/articles-store';
import { getPublishedSamples } from '@/lib/stores/samples-store';
import { ALL_LAWYER_CITIES } from '@/data/lawyers/lawyer-referral-cities';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.negaresh-yar.ir';
  const lastModified = new Date();

  // Static / Core routes
  const coreRoutes = [
    '',
    '/services',
    '/samples',
    '/samples/administrative-letters',
    '/knowledge',
    '/request',
    '/contact',
    '/ai-interpreter',
    '/lawyer-referral',
    '/lawyer-partnership',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority:
      route === ''
        ? 1.0
        : route === '/samples/administrative-letters'
          ? 0.95
          : route === '/lawyer-referral'
            ? 0.95
            : route === '/contact'
              ? 0.8
              : 0.9,
  }));

  // Lawyer Referral City Landing Pages (31 Provincial Capitals)
  const lawyerCityRoutes = ALL_LAWYER_CITIES.map((city) => ({
    url: `${baseUrl}/lawyer-referral/${city.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Services priority routes (25 routes)
  const serviceSlugs = [
    'administrative-letter',
    'appeal',
    'bail-reduction',
    'bail-to-surety',
    'check-claim',
    'conditional-release',
    'content-marketing-seo',
    'court-document-explainer',
    'document-writing',
    'electronic-tag-request',
    'government-auctions',
    'impounded-assets-auction',
    'insolvency-court-fee',
    'insolvency-from-judgment',
    'insolvency-petition',
    'judiciary-auction',
    'leader-office-letter',
    'legal-brief',
    'letter-to-governor',
    'letter-to-tax-office',
    'mahrieh-claim',
    'mashhad',
    'objection-absent-judgment',
    'objection-non-prosecution-order',
    'online-cafe',
    'petition-writing',
    'president-letter',
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Sample document routes (automatically retrieved from Samples Store)
  const publishedSamples = getPublishedSamples();
  const sampleRoutes = publishedSamples.map((sample) => {
    let date = lastModified;
    if (sample.updatedAt) {
      const parsed = new Date(sample.updatedAt);
      if (!isNaN(parsed.getTime())) {
        date = parsed;
      }
    }
    return {
      url: `${baseUrl}/samples/${sample.slug}`,
      lastModified: date,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    };
  });

  // Dynamic Knowledge article routes (only published articles from Single Source of Truth)
  const publishedArticles = await getPublishedArticles();
  const knowledgeRoutes = publishedArticles.map((art) => {
    let date = lastModified;
    if (art.updatedAt) {
      const parsed = new Date(art.updatedAt);
      if (!isNaN(parsed.getTime())) {
        date = parsed;
      }
    }
    return {
      url: `${baseUrl}/knowledge/${art.slug}`,
      lastModified: date,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [
    ...coreRoutes,
    ...lawyerCityRoutes,
    ...serviceRoutes,
    ...sampleRoutes,
    ...knowledgeRoutes,
  ];
}
