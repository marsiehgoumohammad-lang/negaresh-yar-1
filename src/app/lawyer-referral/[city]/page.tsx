import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LawyerCityTemplate } from '@/components/lawyers/LawyerCityTemplate';
import {
  ALL_LAWYER_CITIES,
  getLawyerCityBySlug,
} from '@/data/lawyers/lawyer-referral-cities';

interface LawyerCityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_LAWYER_CITIES.map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: LawyerCityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = getLawyerCityBySlug(city);

  if (!cityData) {
    return {
      title: 'راهنمای وکیل یافت نشد | نگارش یار',
      description: 'صفحه راهنمای وکیل مورد نظر یافت نشد.',
    };
  }

  const canonicalUrl = `https://www.negaresh-yar.ir/lawyer-referral/${cityData.slug}`;

  return {
    title: cityData.seoTitle,
    description: cityData.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: cityData.seoTitle,
      description: cityData.seoDescription,
      url: canonicalUrl,
      siteName: 'نگارش یار',
      locale: 'fa_IR',
      type: 'article',
    },
  };
}

export default async function LawyerCityPage({ params }: LawyerCityPageProps) {
  const { city } = await params;
  const cityData = getLawyerCityBySlug(city);

  if (!cityData) {
    notFound();
  }

  return <LawyerCityTemplate cityData={cityData} />;
}
