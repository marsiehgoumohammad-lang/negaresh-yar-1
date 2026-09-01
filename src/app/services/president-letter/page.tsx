import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  presidentLetterData,
  presidentLetterMetadata,
} from '@/data/services/president-letter';

export const metadata = presidentLetterMetadata;

export default function PresidentLetterPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={presidentLetterData} />
    </main>
  );
}
