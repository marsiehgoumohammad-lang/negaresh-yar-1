import { Metadata } from 'next';

export interface KnowledgeSection {
  id: string;
  title: string;
  paragraphs?: string[];
  content?: React.ReactNode;
  bulletPoints?: string[];
  calloutBox?: {
    type: 'info' | 'warning' | 'tip' | 'law';
    title: string;
    text: string;
  };
}

export interface KnowledgeArticleData {
  slug: string;
  category: string;
  badge: string;
  h1Title: string;
  heroSubtitle: string;
  readTime: string;
  lastUpdated: string;
  heroTrustChips: string[];

  // Direct clear answer in first paragraph (SEO Feature Snippet optimized)
  quickAnswerTitle: string;
  quickAnswerParagraph: string;
  quickAnswerHighlights: string[];

  // Table of contents
  tableOfContents?: { id: string; title: string }[];

  // Article main detailed sections
  sections?: KnowledgeSection[];

  // Practical Examples / Case Scenarios
  examplesTitle?: string;
  examplesList?: {
    scenarioTitle: string;
    description: string;
    legalOutcome: string;
  }[];

  // Common Mistakes
  commonMistakesTitle?: string;
  commonMistakesSubtitle?: string;
  commonMistakesList?: {
    mistake: string;
    risk: string;
    correctAction: string;
  }[];

  // Legal Notes / Statutory References
  legalNotesTitle?: string;
  legalNotesList?: string[];

  // FAQ
  faqTitle?: string;
  faqs?: { q?: string; a?: string; question?: string; answer?: string }[];

  // Internal Links
  relatedServices?: { title: string; href: string; desc: string; badge: string }[];
  relatedSamples?: { title: string; href: string; desc: string; badge: string }[];
  relatedArticles?: { title: string; href: string; desc: string; category: string }[];

  // Custom Guide Component
  customGuideContent?: React.ReactNode;
  customComponent?: React.ReactNode;
  
  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryBtnText?: string;
  ctaPrimaryHref?: string;
  messengerMessage?: string;
}

export type KnowledgeMetadata = Metadata;
