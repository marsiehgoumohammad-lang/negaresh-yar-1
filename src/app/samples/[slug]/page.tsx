import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { SampleLandingPageTemplate } from '@/components/samples/SampleLandingPageTemplate';
import {
  getSampleBySlug,
  getPublishedSamples,
} from '@/lib/stores/samples-store';

interface SamplePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const samples = getPublishedSamples();
  return samples.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: SamplePageProps): Promise<Metadata> {
  const { slug } = await params;
  const sample = getSampleBySlug(slug);

  if (!sample) {
    return {
      title: 'نمونه سند یافت نشد | نگارش یار',
      description: 'نمونه سند حقوقی یا اداری موردنظر یافت نشد.',
    };
  }

  const rawTitle = sample.title || sample.h1Title || 'نمونه سند';
  const isSamplePrefixed = rawTitle.startsWith('نمونه') || rawTitle.includes('نمونه');
  const titleDisplay = isSamplePrefixed ? rawTitle : `نمونه ${rawTitle}`;
  const seoTitle = sample.metaTitle || `${titleDisplay} [دانلود رایگان متن + نکات قانونی] | نگارش یار`;

  // Persuasive high-CTR meta description with explicit CTA & free value hook
  let description = sample.metaDescription || '';
  if (!description) {
    const baseDesc = (sample.shortDescription || sample.heroSubtitle || '').trim();
    if (baseDesc && baseDesc.length >= 25 && baseDesc.length <= 95) {
      description = `دانلود رایگان نمونه متن ${rawTitle}؛ ${baseDesc.replace(/\.$/, '')} + استناد به مواد قانونی و مشاوره تنظیم در نگارش یار.`;
    } else {
      description = `دانلود و کپی رایگان نمونه متن ${rawTitle} با فرمت رسمی دادگستری، استناد به مواد قانونی و راهنمای گام‌به‌گام + مشاوره تخصصی تنظیم در نگارش یار.`;
    }
  }

  const canonicalUrl = `https://www.negaresh-yar.ir/samples/${sample.slug}`;

  return {
    title: seoTitle,
    description,
    keywords: [
      rawTitle,
      `دانلود رایگان ${rawTitle}`,
      `نمونه متن ${rawTitle}`,
      `کپی متن ${rawTitle}`,
      sample.category || sample.categoryName || 'اسناد حقوقی و اداری',
      'مشاوره تنظیم لایحه و دادخواست',
      'نگارش یار',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description,
      url: canonicalUrl,
      siteName: 'نگارش یار',
      locale: 'fa_IR',
      type: 'article',
      publishedTime: sample.publishedAt,
      modifiedTime: sample.updatedAt,
      authors: [sample.author?.name || 'تیم حقوقی نگارش یار'],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description,
    },
  };
}

export default async function DynamicSamplePage({ params }: SamplePageProps) {
  const { slug } = await params;
  const sample = getSampleBySlug(slug);

  if (!sample || sample.status === 'draft') {
    notFound();
  }

  const title = sample.title || sample.h1Title || 'نمونه سند';
  const description = sample.shortDescription || sample.heroSubtitle || '';

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
        name: 'بانک نمونه اسناد',
        item: 'https://www.negaresh-yar.ir/samples',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: sample.category || 'درخواست‌های قضایی',
        item: `https://www.negaresh-yar.ir/samples?category=${encodeURIComponent(
          sample.category || ''
        )}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: title,
        item: `https://www.negaresh-yar.ir/samples/${sample.slug}`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `https://www.negaresh-yar.ir/samples/${sample.slug}`,
    datePublished: sample.publishedAt || '2026-01-15T08:00:00.000Z',
    dateModified: sample.updatedAt || '2026-08-16T12:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: sample.author?.name || 'تیم حقوقی نگارش یار',
      url: 'https://www.negaresh-yar.ir',
    },
    publisher: {
      '@type': 'Organization',
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
        latitude: 36.2972,
        longitude: 59.6067,
      },
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.negaresh-yar.ir/logo.jpg',
      },
    },
    inLanguage: 'fa-IR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.negaresh-yar.ir/samples/${sample.slug}`,
    },
  };

  const faqItems =
    sample.faq && sample.faq.length > 0
      ? sample.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        }))
      : sample.faqs
      ? sample.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        }))
      : [];

  const faqSchema =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems,
        }
      : null;

  return (
    <>
      <Script
        id={`breadcrumb-schema-${sample.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`article-schema-${sample.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <Script
          id={`faq-schema-${sample.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <SampleLandingPageTemplate data={sample} />
    </>
  );
}
