import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import {
  familyLawyerData,
  familyLawyerMetadata,
} from '@/data/services/family-lawyer';

export const metadata = familyLawyerMetadata;

export default function FamilyLawyerPage() {
  return <LandingPageTemplate data={familyLawyerData} />;
}
