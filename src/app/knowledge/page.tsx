import { Metadata } from 'next';
import Script from 'next/script';
import { KnowledgeHubClient } from '@/components/knowledge/KnowledgeHubClient';
import { getPublishedArticles } from '@/lib/stores/articles-store';

export const metadata: Metadata = {
  title: 'پایگاه دانش حقوقی و اداری [آموزش گام‌به‌گام + دانلود رایگان نمونه] | نگارش یار',
  description:
    'مرجع تخصصی مقالات و راهنماهای حقوقی و اداری؛ آموزش صفر تا صد تنظیم دادخواست، شکواییه، لایحه و نامه اداری همراه با مواد قانونی و مشاوره رایگان در نگارش یار.',
  keywords: [
    'پایگاه دانش حقوقی',
    'آموزش تنظیم دادخواست',
    'راهنمای لایحه دفاعیه',
    'تجدیدنظرخواهی دادگاه',
    'ابلاغیه ثنا عدل ایران',
    'نگارش نامه اداری',
    'اعسار و تقسیط مهریه',
    'قرارهای تامین کیفری وثیقه',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/knowledge',
  },
  openGraph: {
    title: 'پایگاه دانش حقوقی و اداری [آموزش گام‌به‌گام + دانلود رایگان نمونه] | نگارش یار',
    description: 'مرجع تخصصی آموزش‌های حقوقی و اداری به زبان ساده، استناد به قوانین، دانلود رایگان نمونه‌ها و مشاوره تنظیم در نگارش یار.',
    url: 'https://www.negaresh-yar.ir/knowledge',
    siteName: 'نگارش یار',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پایگاه دانش حقوقی و اداری [آموزش گام‌به‌گام + دانلود رایگان نمونه] | نگارش یار',
    description: 'آموزش صفر تا صد تنظیم اوراق قضایی و نامه‌های اداری همراه با مواد قانونی در نگارش یار.',
  },
};

export default async function KnowledgePage() {
  const publishedArticles = await getPublishedArticles();

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
        name: 'پایگاه دانش حقوقی و اداری',
        item: 'https://www.negaresh-yar.ir/knowledge',
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-knowledge-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KnowledgeHubClient initialArticles={publishedArticles} />
    </>
  );
}

