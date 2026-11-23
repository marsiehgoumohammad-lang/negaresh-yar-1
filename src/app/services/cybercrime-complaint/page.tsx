import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  cybercrimeComplaintServiceData,
  cybercrimeComplaintServiceMetadata,
} from '@/data/services/cybercrime-complaint';

export const metadata = cybercrimeComplaintServiceMetadata;

export default function CybercrimeComplaintServicePage() {
  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={cybercrimeComplaintServiceData} />
    </main>
  );
}
