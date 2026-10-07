import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { FreeLegalConsultationGuideSection } from '@/components/services/FreeLegalConsultationGuideSection';
import { ConsultationStickyCTA } from '@/components/services/ConsultationStickyCTA';
import {
  freeLegalConsultationData,
  freeLegalConsultationMetadata,
} from '@/data/services/free-legal-consultation';

export const metadata = freeLegalConsultationMetadata;

export default function FreeLegalConsultationPage() {
  const data = {
    ...freeLegalConsultationData,
    customGuideContent: <FreeLegalConsultationGuideSection />,
  };

  return (
    <main className="min-h-screen bg-[#070B15]">
      <LandingPageTemplate data={data} />
      <ConsultationStickyCTA />
    </main>
  );
}
