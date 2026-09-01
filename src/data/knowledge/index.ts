import { KnowledgeArticleData } from './types';
import { whatIsPetitionData, whatIsPetitionMetadata } from './what-is-petition';
import { petitionVsComplaintData, petitionVsComplaintMetadata } from './petition-vs-complaint';
import { whatIsLegalBriefData, whatIsLegalBriefMetadata } from './what-is-legal-brief';
import { howToAppealCourtDecisionData, howToAppealCourtDecisionMetadata } from './how-to-appeal-court-decision';
import { whatIsInsolvencyData, whatIsInsolvencyMetadata } from './what-is-insolvency';
import { howToWriteAdministrativeLetterData, howToWriteAdministrativeLetterMetadata } from './how-to-write-administrative-letter';
import { howToWritePresidentLetterData, howToWritePresidentLetterMetadata } from './how-to-write-president-letter';
import { howToReadCourtVerdictData, howToReadCourtVerdictMetadata } from './how-to-read-court-verdict';
import { whatIsENotificationData, whatIsENotificationMetadata } from './what-is-e-notification';
import { whatIsBailData, whatIsBailMetadata } from './what-is-bail';
import { howToWriteComplaintData, howToWriteComplaintMetadata } from './how-to-write-complaint';
import { governmentAuctionGuideData, governmentAuctionGuideMetadata } from './government-auction-guide';
import { howToObjectProsecutionOrdersData, howToObjectProsecutionOrdersMetadata } from './how-to-object-prosecution-orders';
import { howToRequestConditionalReleaseData, howToRequestConditionalReleaseMetadata } from './how-to-request-conditional-release';
import { carRegistrationGuideData, carRegistrationGuideMetadata } from './car-registration-guide';
import { scrappedCarRegistrationGuideData, scrappedCarRegistrationGuideMetadata } from './scrapped-car-registration-guide';
import { subsidizedTireRegistrationGuideData, subsidizedTireRegistrationGuideMetadata } from './subsidized-tire-registration-guide';
import { legalSelfServiceGuideData, legalSelfServiceGuideMetadata } from './legal-self-service-guide';
import { onlineJudicialServicesGuideData, onlineJudicialServicesGuideMetadata } from './online-judicial-services-guide';
import { meaningOfCourtTermsData, meaningOfCourtTermsMetadata } from './meaning-of-court-terms';
import { whatIsFinalCourtJudgmentData, whatIsFinalCourtJudgmentMetadata } from './what-is-final-court-judgment';
import { howToInstallDebtAndMahriehData, howToInstallDebtAndMahriehMetadata } from './how-to-install-debt-and-mahrieh';
import { pardonVsConditionalReleaseData, pardonVsConditionalReleaseMetadata } from './pardon-vs-conditional-release';
import { whatIsLegalNoticeData, whatIsLegalNoticeMetadata } from './what-is-legal-notice';
import { expertPanelCourtData, expertPanelCourtMetadata } from './expert-panel-court';
import { civilVsCriminalCheckData, civilVsCriminalCheckMetadata } from './civil-vs-criminal-check';
import { corporateSelfServicePortalData, corporateSelfServicePortalMetadata } from './corporate-self-service-portal';
import { bouncedCheckGuideData, bouncedCheckGuideMetadata } from './bounced-check-guide';
import { sayadCheckRulesData, sayadCheckRulesMetadata } from './sayad-check-rules';
import { checkBadCreditRemovalData, checkBadCreditRemovalMetadata } from './check-bad-credit-removal';
import { sayadCheckExecutionArticle23Data, sayadCheckExecutionArticle23Metadata } from './sayad-check-execution-article-23';
import { guaranteeCheckRulesData, guaranteeCheckRulesMetadata } from './guarantee-check-rules';

export * from './types';

export interface KnowledgeCategoryInfo {
  id: string;
  name: string;
  description: string;
  iconName: string;
  articleCount: number;
}

export const KNOWLEDGE_CATEGORIES: KnowledgeCategoryInfo[] = [
  {
    id: 'dadvakht',
    name: 'دادخواست و دعاوی حقوقی',
    description: 'راهنمای جامع ثبت دادخواست‌های مالی، ملکی، چک و امور خانواده',
    iconName: 'FileText',
    articleCount: 2,
  },
  {
    id: 'shekaviyeh',
    name: 'شکواییه و امور کیفری',
    description: 'آموزش شکایت در دادسرا، جرایم کلاهبرداری، سرقت و پرونده‌های کیفری',
    iconName: 'ShieldAlert',
    articleCount: 2,
  },
  {
    id: 'layehe',
    name: 'لایحه و دفاعیات قضایی',
    description: 'اصول نگارش لوایح دفاعیه مستدل، استناد به مواد قانونی و آرای وحدت رویه',
    iconName: 'Scale',
    articleCount: 1,
  },
  {
    id: 'objections',
    name: 'اعتراض به آرا و تصمیمات قضایی',
    description: 'راهنمای تجدیدنظرخواهی، واخواهی، فرجام‌خواهی و تحلیل دادنامه دادگاه',
    iconName: 'Gavel',
    articleCount: 2,
  },
  {
    id: 'esare',
    name: 'اعسار، وثیقه و زندانیان',
    description: 'تقسیط بدهی و مهریه، توقف حکم جلب، فک وثیقه و قرار کفالت',
    iconName: 'KeyRound',
    articleCount: 2,
  },
  {
    id: 'administrative',
    name: 'نامه‌های اداری و سازمانی',
    description: 'اصول نامه‌نگاری رسمی به وزارخانه‌ها، عریضه سامد ۱۱۱ و درخواست‌های دولتی',
    iconName: 'Building2',
    articleCount: 2,
  },
  {
    id: 'systems',
    name: 'سامانه‌های دولتی و کافی نت آنلاین',
    description: 'آموزش ابلاغیه ثنا، عدل ایران، ساجد و سامانه‌های استعلام الکترونیکی',
    iconName: 'Laptop',
    articleCount: 1,
  },
  {
    id: 'tax-commercial',
    name: 'مالیات، بیمه و امور تجاری',
    description: 'قوانین اظهارنامه مالیاتی، اعتراض به مالیات، مزایده‌های دولتی و چک صیادی',
    iconName: 'Receipt',
    articleCount: 2,
  },
];

export const ALL_KNOWLEDGE_ARTICLES: KnowledgeArticleData[] = [
  whatIsPetitionData,
  petitionVsComplaintData,
  whatIsLegalBriefData,
  howToAppealCourtDecisionData,
  whatIsInsolvencyData,
  howToWriteAdministrativeLetterData,
  howToWritePresidentLetterData,
  howToReadCourtVerdictData,
  whatIsENotificationData,
  whatIsBailData,
  howToWriteComplaintData,
  governmentAuctionGuideData,
  howToObjectProsecutionOrdersData,
  howToRequestConditionalReleaseData,
  carRegistrationGuideData,
  scrappedCarRegistrationGuideData,
  subsidizedTireRegistrationGuideData,
  legalSelfServiceGuideData,
  onlineJudicialServicesGuideData,
  meaningOfCourtTermsData,
  whatIsFinalCourtJudgmentData,
  howToInstallDebtAndMahriehData,
  pardonVsConditionalReleaseData,
  whatIsLegalNoticeData,
  expertPanelCourtData,
  civilVsCriminalCheckData,
  corporateSelfServicePortalData,
  bouncedCheckGuideData,
  sayadCheckRulesData,
  checkBadCreditRemovalData,
  sayadCheckExecutionArticle23Data,
  guaranteeCheckRulesData,
];

export const KNOWLEDGE_METADATA_MAP = {
  'what-is-petition': whatIsPetitionMetadata,
  'petition-vs-complaint': petitionVsComplaintMetadata,
  'what-is-legal-brief': whatIsLegalBriefMetadata,
  'how-to-appeal-court-decision': howToAppealCourtDecisionMetadata,
  'what-is-insolvency': whatIsInsolvencyMetadata,
  'how-to-write-administrative-letter': howToWriteAdministrativeLetterMetadata,
  'how-to-write-president-letter': howToWritePresidentLetterMetadata,
  'how-to-read-court-verdict': howToReadCourtVerdictMetadata,
  'what-is-e-notification': whatIsENotificationMetadata,
  'what-is-bail': whatIsBailMetadata,
  'how-to-write-complaint': howToWriteComplaintMetadata,
  'government-auction-guide': governmentAuctionGuideMetadata,
  'how-to-object-prosecution-orders': howToObjectProsecutionOrdersMetadata,
  'how-to-request-conditional-release': howToRequestConditionalReleaseMetadata,
  'car-registration-guide': carRegistrationGuideMetadata,
  'scrapped-car-registration-guide': scrappedCarRegistrationGuideMetadata,
  'subsidized-tire-registration-guide': subsidizedTireRegistrationGuideMetadata,
  'legal-self-service-guide': legalSelfServiceGuideMetadata,
  'online-judicial-services-guide': onlineJudicialServicesGuideMetadata,
  'meaning-of-court-terms': meaningOfCourtTermsMetadata,
  'what-is-final-court-judgment': whatIsFinalCourtJudgmentMetadata,
  'how-to-install-debt-and-mahrieh': howToInstallDebtAndMahriehMetadata,
  'pardon-vs-conditional-release': pardonVsConditionalReleaseMetadata,
  'what-is-legal-notice': whatIsLegalNoticeMetadata,
  'expert-panel-court': expertPanelCourtMetadata,
  'civil-vs-criminal-check': civilVsCriminalCheckMetadata,
  'corporate-self-service-portal': corporateSelfServicePortalMetadata,
  'bounced-check-guide': bouncedCheckGuideMetadata,
  'sayad-check-rules': sayadCheckRulesMetadata,
  'check-bad-credit-removal': checkBadCreditRemovalMetadata,
  'sayad-check-execution-article-23': sayadCheckExecutionArticle23Metadata,
  'guarantee-check-rules': guaranteeCheckRulesMetadata,
};

export function getKnowledgeArticleBySlug(slug: string): KnowledgeArticleData | undefined {
  return ALL_KNOWLEDGE_ARTICLES.find((article) => article.slug === slug);
}
