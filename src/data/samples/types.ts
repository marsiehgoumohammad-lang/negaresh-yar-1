import { Metadata } from 'next';

export interface SampleLandingData {
  slug: string;
  categoryName: string;
  badge: string;
  h1Title: string;
  heroSubtitle: string;
  heroTrustChips: string[];

  // 1. What is this document
  whatIsTitle: string;
  whatIsParagraphs: string[];
  whatIsHighlights: { title: string; desc: string }[];

  // 2. When it should be used
  whenToUseTitle: string;
  whenToUseSubtitle: string;
  whenToUseList: { title: string; desc: string }[];

  // 3. Required information and documents
  requiredInfoTitle: string;
  requiredInfoSubtitle?: string;
  requiredInfoList: { title: string; desc: string }[];

  // 4. Professional writing tips
  writingTipsTitle: string;
  writingTipsSubtitle: string;
  writingTipsList: { title: string; desc: string }[];

  // 5. Common mistakes
  commonMistakesTitle: string;
  commonMistakesSubtitle: string;
  commonMistakesList: { mistake: string; impact: string; solution: string }[];

  // 6. Legal notes & cautions
  legalNotesTitle: string;
  legalNotesList: string[];

  // 7. Sample document structure & template text
  sampleStructureTitle: string;
  sampleStructureIntro: string;
  sampleStructureContent: string;
  sampleStructureFeatures: string[];

  // 8. FAQ (20+ questions)
  faqTitle: string;
  faqs: { q: string; a: string }[];

  // 9. Internal Linking
  relatedServices: { title: string; href: string; desc: string; badge: string }[];
  relatedSamples: { title: string; href: string; desc: string; badge: string }[];

  // 10. CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryBtnText: string;
  ctaPrimaryHref: string;
}

export type SampleMetadata = Metadata;
