import React from 'react';
import { SampleLandingPageTemplate } from '@/components/samples/SampleLandingPageTemplate';
import {
  sampleAdministrativeLetterData,
  sampleAdministrativeLetterMetadata,
} from '@/data/samples/administrative-letter';

export const metadata = sampleAdministrativeLetterMetadata;

export default function AdministrativeLetterSamplePage() {
  return <SampleLandingPageTemplate data={sampleAdministrativeLetterData} />;
}
