import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  administrativeLetterData,
  administrativeLetterMetadata,
} from '@/data/services/administrative-letter';

export const metadata = administrativeLetterMetadata;

export default function AdministrativeLetterPage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={administrativeLetterData} />
    </main>
  );
}
