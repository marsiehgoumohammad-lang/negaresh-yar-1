import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { LegalNoticeGuideSection } from '@/components/services/LegalNoticeGuideSection';
import {
  legalNoticeData,
  legalNoticeMetadata,
} from '@/data/services/legal-notice';

export const metadata = legalNoticeMetadata;

export default function LegalNoticePage() {
  const data = {
    ...legalNoticeData,
    customGuideContent: <LegalNoticeGuideSection />,
  };

  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={data} />
    </main>
  );
}
