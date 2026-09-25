import React from 'react';
import { LandingPageTemplate } from '@/components/services/LandingPageTemplate';
import { PropertyLeaseEvictionGuideSection } from '@/components/services/PropertyLeaseEvictionGuideSection';
import {
  propertyLeaseEvictionData,
  propertyLeaseEvictionMetadata,
} from '@/data/services/property-lease-eviction';

export const metadata = propertyLeaseEvictionMetadata;

export default function PropertyLeaseEvictionPage() {
  const data = {
    ...propertyLeaseEvictionData,
    customGuideContent: <PropertyLeaseEvictionGuideSection />,
  };
  return <LandingPageTemplate data={data} />;
}
