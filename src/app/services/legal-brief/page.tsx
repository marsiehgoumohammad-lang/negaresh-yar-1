import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  legalBriefData,
  legalBriefMetadata,
} from '@/data/services/legal-brief';

export const metadata = legalBriefMetadata;

export default function LegalBriefPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={legalBriefData} />
    </main>
  );
}
