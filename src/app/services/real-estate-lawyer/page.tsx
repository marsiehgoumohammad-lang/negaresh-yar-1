import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  realEstateLawyerData,
  realEstateLawyerMetadata,
} from '@/data/services/real-estate-lawyer';

export const metadata = realEstateLawyerMetadata;

export default function RealEstateLawyerPage() {
  return <LandingPageTemplate data={realEstateLawyerData} />;
}
