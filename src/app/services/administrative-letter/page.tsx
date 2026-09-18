import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { AdministrativeLetterGuideSection } from '@/components/services/AdministrativeLetterGuideSection';
import {
  administrativeLetterData,
  administrativeLetterMetadata,
} from '@/data/services/administrative-letter';

export const metadata = administrativeLetterMetadata;

export default function AdministrativeLetterPage() {
  const data = {
    ...administrativeLetterData,
    customGuideContent: <AdministrativeLetterGuideSection />,
  };

  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={data} />
    </main>
  );
}

