import { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/stores/articles-store';
import { getPublishedSamples } from '@/lib/stores/samples-store';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.negaresh-yar.ir';
  const lastModified = new Date();

  // Static / Core routes
  const coreRoutes = [
    '',
    '/services',
    '/samples',
    '/knowledge',
    '/request',
    '/ai-interpreter',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // Services priority routes (23 routes)
  const serviceSlugs = [
    'administrative-letter',
    'appeal',
    'bail-reduction',
    'content-marketing-seo',
    'court-document-explainer',
    'government-auctions',
    'insolvency-petition',
    'leader-office-letter',
    'legal-brief',
    'online-cafe',
    'petition-writing',
    'president-letter',
    'objection-non-prosecution-order',
    'objection-absent-judgment',
    'conditional-release',
    'bail-to-surety',
    'insolvency-from-judgment',
    'insolvency-court-fee',
    'letter-to-governor',
    'letter-to-tax-office',
    'judiciary-auction',
    'impounded-assets-auction',
    'mashhad',
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic Sample document routes (automatically retrieved from Samples Store)
  const publishedSamples = getPublishedSamples();
  const sampleRoutes = publishedSamples.map((sample) => ({
    url: `${baseUrl}/samples/${sample.slug}`,
    lastModified: sample.updatedAt ? new Date(sample.updatedAt) : lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Dynamic Knowledge article routes (only published articles from Single Source of Truth)
  const publishedArticles = await getPublishedArticles();
  const knowledgeRoutes = publishedArticles.map((art) => ({
    url: `${baseUrl}/knowledge/${art.slug}`,
    lastModified: art.updatedAt ? new Date(art.updatedAt) : lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...sampleRoutes,
    ...knowledgeRoutes,
  ];
}
