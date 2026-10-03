import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  contentMarketingSeoData,
  contentMarketingSeoMetadata,
} from '@/data/services/content-marketing-seo';

export const metadata = contentMarketingSeoMetadata;

export default function ContentMarketingSeoPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={contentMarketingSeoData} />
    </main>
  );
}
