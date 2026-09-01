export interface CommonLegalNeed {
  title: string;
  desc: string;
  icon?: string;
}

export interface LawyerFaqItem {
  q: string;
  a: string;
}

export interface RelatedItem {
  title: string;
  href: string;
  badge?: string;
  desc: string;
}

export interface LawyerCityData {
  slug: string;
  city: string;
  province: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  directAnswer: string;
  localJudicialContext?: string;
  practicalAdvice?: string;
  commonLegalNeeds: CommonLegalNeed[];
  faqs: LawyerFaqItem[];
  messengerMessage: string;
  relatedServices: RelatedItem[];
  relatedSamples: RelatedItem[];
  relatedKnowledge: RelatedItem[];
}

