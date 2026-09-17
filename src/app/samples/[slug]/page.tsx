import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
      `دانلود فایل ورد ${rawTitle}`,
      `دانلود فایل word ${rawTitle}`,
      `دانلود pdf ${rawTitle}`,
      `دانلود فرم خام ${rawTitle}`,
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

  const administrativeCategories = new Set([
    'نامه‌ها و عریضه‌های اداری',
    'نمونه نامه‌های اداری و عریضه‌ها',
    'نمونه نامه‌ها و عریضه‌های اداری',
    'نمونه نامه‌ها و لوایح اداری و مالیاتی',
    'نامه‌ها و درخواست‌های اداری',
    'نامه‌ها و مکاتبات اداری و بانکی',
    'نامه‌ها و مکاتبات اداری و شهرداری',
    'نامه‌ها و مکاتبات اداری و ثبت احوال',
    'نامه‌ها و مکاتبات اداری و اداره کار',
    'نامه‌ها و مکاتبات اداری و تامین اجتماعی',
    'نامه‌ها و مکاتبات اداری و تعزیراتی',
    'نامه‌ها و مکاتبات اداری و انتظامی',
    'نامه‌ها و مکاتبات اداری و حمایتی',
    'نامه‌ها و مکاتبات اداری و آموزشی',
    'نامه‌ها و مکاتبات اداری و دانشگاهی',
    'نامه‌ها و مکاتبات اداری و ثبتی',
    'نامه‌ها و مکاتبات اداری و سازمان بازرسی',
    'نمونه نامه به رئیس جمهور',
    'نمونه نامه به دفتر مقام معظم رهبری',
    'دعاوی اداری و دیوان عدالت',
  ]);

  const canonicalUrl = `https://www.negaresh-yar.ir/samples/${sample.slug}`;

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

  const graphEntities: Record<string, unknown>[] = [
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
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: title,
      isPartOf: {
        '@id': 'https://www.negaresh-yar.ir/#website',
      },
      breadcrumb: {
        '@id': `${canonicalUrl}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
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
          item:
            sample.category === 'قراردادها و توافق‌نامه‌ها'
              ? 'https://www.negaresh-yar.ir/samples/contracts'
              : sample.category && administrativeCategories.has(sample.category)
              ? 'https://www.negaresh-yar.ir/samples/administrative-letters'
              : `https://www.negaresh-yar.ir/samples?category=${encodeURIComponent(
                  sample.category || ''
                )}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: title,
          item: canonicalUrl,
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: title,
      description: description,
      url: canonicalUrl,
      datePublished: sample.publishedAt || '2026-01-15T08:00:00.000Z',
      dateModified: sample.updatedAt || '2026-08-16T12:00:00.000Z',
      author: {
        '@type': 'Organization',
        name: sample.author?.name || 'تیم حقوقی نگارش یار',
        url: 'https://www.negaresh-yar.ir',
      },
      publisher: {
        '@id': 'https://www.negaresh-yar.ir/#organization',
      },
      inLanguage: 'fa-IR',
      mainEntityOfPage: {
        '@id': canonicalUrl,
      },
    },
    {
      '@type': 'DigitalDocument',
      '@id': `${canonicalUrl}#document`,
      name: `متن و فرم رسمی ${title}`,
      description: `متن رسمی و فرم قابل ویرایش ${title} همراه با امکان دریافت فایل اداری Word و نسخه چاپی استاندارد`,
      encodingFormat: ['application/msword', 'text/plain'],
      url: canonicalUrl,
      hasPart: [
        {
          '@type': 'MediaObject',
          name: `دریافت فایل سند ورد ${title}`,
          encodingFormat: 'application/msword',
          contentUrl: `https://www.negaresh-yar.ir/api/samples/download?slug=${sample.slug}&format=doc`,
        },
        {
          '@type': 'MediaObject',
          name: `دریافت فایل متنی ${title}`,
          encodingFormat: 'text/plain',
          contentUrl: `https://www.negaresh-yar.ir/api/samples/download?slug=${sample.slug}&format=txt`,
        },
      ],
    },
  ];

  if (faqItems.length > 0) {
    graphEntities.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      isPartOf: {
        '@id': canonicalUrl,
      },
      mainEntity: faqItems,
    });
  }

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': graphEntities,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <SampleLandingPageTemplate data={sample} />
    </>
  );
}
