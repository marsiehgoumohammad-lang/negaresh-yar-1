import type { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/stores/articles-store';

const baseUrl = 'https://www.negaresh-yar.ir';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publishedArticles = await getPublishedArticles();

  const knowledgeRoutes: MetadataRoute.Sitemap = publishedArticles.map(
    (article) => ({
      url: `${baseUrl}/knowledge/${article.slug}`,
      lastModified: article.updatedAt
        ? new Date(article.updatedAt)
        : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...knowledgeRoutes];
}
