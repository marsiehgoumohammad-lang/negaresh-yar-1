import { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/stores/articles-store';

export default function sitemap(): MetadataRoute.Sitemap {
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

  // Services priority routes (22 routes)
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
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Sample document routes (16 routes)
  const sampleSlugs = [
    'administrative-letter',
    'appeal',
    'bail-reduction',
    'complaint',
    'insolvency',
    'leader-office-letter',
    'legal-brief',
    'legal-notice',
    'petition',
    'president-letter',
    'objection-non-prosecution-order',
    'objection-absent-judgment',
    'conditional-release',
    'bail-to-surety',
    'letter-to-governor',
    'letter-to-tax-office',
  ];

  const sampleRoutes = sampleSlugs.map((slug) => ({
    url: `${baseUrl}/samples/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic Knowledge article routes (only published articles from Single Source of Truth)
  const publishedArticles = getPublishedArticles();
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
