import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { ContentWritingGuideSection } from '@/components/services/ContentWritingGuideSection';
import {
  contentMarketingSeoData,
  contentMarketingSeoMetadata,
} from '@/data/services/content-marketing-seo';

export const metadata = contentMarketingSeoMetadata;

export default function ContentMarketingSeoPage() {
  const data = {
    ...contentMarketingSeoData,
    customGuideContent: <ContentWritingGuideSection />,
  };

  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={data} />
    </main>
  );
}
