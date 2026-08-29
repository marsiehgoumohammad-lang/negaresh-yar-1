import { SampleDocument, SAMPLE_CATEGORIES } from '@/data/samples/types';
import {
  sampleAdministrativeLetterData,
  samplePresidentLetterData,
  sampleLeaderOfficeLetterData,
  samplePetitionData,
  sampleLegalBriefData,
  sampleComplaintData,
  sampleAppealData,
  sampleInsolvencyData,
  sampleBailReductionData,
  sampleLegalNoticeData,
  sampleObjectionNonProsecutionOrderData,
  sampleObjectionAbsentJudgmentData,
  sampleConditionalReleaseData,
  sampleBailToSuretyData,
  sampleLetterToGovernorData,
  sampleLetterToTaxOfficeData,
  sampleBailSubstitutionData,
  sampleDetentionToBailData,
  sampleReleaseOfBailData,
  sampleBailAcceptanceRequestData,
  sampleElectronicTagRequestData,
  sampleSentenceSuspensionRequestData,
  sampleVerdictSurrenderDiscountData,
  sampleExpertOpinionObjectionData,
  sampleCourtFeeInsolvencyData,
  sampleJudgmentEnforcementGracePeriodData,
  sampleObjectionStayOfProsecutionData,
  sampleCriminalRehabilitationCertificateData,
  sampleCheckBouncedComplaintData,
  sampleCheckExecutionPetitionData,
  sampleCheckPaymentDemandData,
  sampleCheckCivilClaimData,
  sampleCheckStopPaymentObjectionData,
  samplePromissoryNoteClaimData,
  sampleEvictionExpiredLeaseData,
  sampleEvictionNonpaymentRentData,
  sampleRentDepositClaimData,
  samplePropertyPossessionClaimData,
  sampleObjectionToCriminalSecurityData,
  sampleBailReleaseSuretyRequestData,
  samplePrisonerFurloughRequestData,
  sampleFineInstallmentPetitionData,
  sampleSayadCheckClaimPetitionData,
  sampleCheckExecutionObjectionData,
  samplePromissoryNoteProtestObjectionData,
  sampleAuctionDepositRefundRequestData,
  sampleAuctionDeedTransferRequestData,
  sampleAuctionCancellationObjectionData,
  sampleMehriehExecutionRegistryPetitionData,
  sampleMehriehInstallmentPetitionData,
  sampleNafaqahClaimPetitionData,
  sampleProvisionalAttachmentPetitionData,
  samplePropertyAttachmentLiftingRequestData,
  sampleThirdPartyObjectionToExecutionData,
  sampleOfficialDeedCompulsionPetitionData,
  sampleContractCancellationNoticePetitionData,
  sampleAdministrativeCourtJusticeComplaintData,
  sampleLaborBoardWageInsuranceComplaintData,
  sampleThirdPartyObjectionOrdinaryDeedData,
  sampleInsolvencyAppealCourtFeeFormData,
  sampleCheckCarcassRestitutionData,
  sampleInsultDefamationDefenseData,
  sampleArticle477RequestData,
} from '@/data/samples';

// Helper to normalize and ensure all required fields for a SampleDocument
function normalizeSample(item: SampleDocument): SampleDocument {
  const slug = item.slug;
  const title = item.title || item.h1Title || item.categoryName || '';
  const shortDescription = item.shortDescription || item.heroSubtitle || '';
  const content = item.content || item.sampleStructureContent || '';
  const excerpt =
    item.excerpt ||
    (item.whatIsParagraphs && item.whatIsParagraphs.length > 0
      ? item.whatIsParagraphs[0]
      : shortDescription);
  const audience =
    item.audience ||
    'عموم شهروندان، مراجعین به مراجع قضایی و اداری، متقاضیان و وکلای دادگستری.';
  const messengerMessage =
    item.messengerMessage ||
    `سلام، درباره ${title} سؤال دارم. لطفاً راهنمایی می‌کنید؟`;

  const whenToUse =
    item.whenToUse ||
    (item.whenToUseList
      ? item.whenToUseList.map((w) => ({ title: w.title, desc: w.desc }))
      : []);

  const documents =
    item.documents ||
    (item.requiredInfoList
      ? item.requiredInfoList.map((r) => ({ title: r.title, desc: r.desc }))
      : []);

  const importantNotes =
    item.importantNotes ||
    item.legalNotesList ||
    [
      'پیش از ثبت در سامانه ثنا یا تحویل به مرجع مربوطه، کلیه اطلاعات هویتی و تاریخ‌ها را مجدداً تطبیق دهید.',
      'پیوست کردن منظم اسناد و مستندات ادعایی موجب تسریع در بررسی پرونده می‌گردد.',
      'در صورت نیاز به استدلال‌های تخصصی، مشاوره با کارشناسان نگارش یار توصیه می‌شود.',
    ];

  const commonMistakes =
    item.commonMistakes ||
    item.commonMistakesList ||
    [
      {
        mistake: 'عدم درج دقیق شماره پرونده یا ابلاغیه',
        impact: 'تأخیر در ثبت و بایگانی لوایح در شعبه.',
        solution: 'شماره ۱۶ رقمی پرونده و شماره بایگانی را در بالای برگه قید کنید.',
      },
    ];

  const legalBasis =
    item.legalBasis || [
      {
        article: 'مقررات عمومی آیین دادرسی و مکاتبات اداری',
        title: 'اصول استنادپذیری اسناد',
        description: 'رعایت سلسله‌مراتب و اختیارات قانونی مرجع رسیدگی‌کننده.',
      },
    ];

  const faq =
    item.faq ||
    (item.faqs
      ? item.faqs.map((f) => ({ question: f.q, answer: f.a }))
      : []);

  const category = item.category || item.categoryName || 'درخواست‌های قضایی';

  return {
    ...item,
    id: item.id || slug,
    slug,
    title,
    shortDescription,
    category,
    intent: item.intent || 'legal-document',
    excerpt,
    content,
    audience,
    whenToUse,
    documents,
    importantNotes,
    commonMistakes,
    legalBasis,
    faq,
    messengerMessage,
    publishedAt: item.publishedAt || '2026-01-15T08:00:00.000Z',
    updatedAt: item.updatedAt || '2026-08-16T12:00:00.000Z',
    author: item.author || {
      name: 'تیم حقوقی نگارش یار',
      role: 'متخصص تنظیم اوراق قضایی و اداری',
    },
    reviewer: item.reviewer || {
      name: 'بررسی و نظارت حقوقی نگارش یار',
      role: 'دپارتمان نظارت بر متون و استانداردهای دادرسی',
      date: '2026-08-16',
    },
    status: item.status || 'published',
    relatedSamples: item.relatedSamples || [],
  };
}

const rawSamples: SampleDocument[] = [
  sampleBailReductionData,
  sampleBailToSuretyData,
  sampleBailSubstitutionData,
  sampleDetentionToBailData,
  sampleReleaseOfBailData,
  sampleBailAcceptanceRequestData,
  sampleElectronicTagRequestData,
  sampleSentenceSuspensionRequestData,
  sampleVerdictSurrenderDiscountData,
  sampleExpertOpinionObjectionData,
  sampleCourtFeeInsolvencyData,
  sampleJudgmentEnforcementGracePeriodData,
  sampleObjectionStayOfProsecutionData,
  sampleCriminalRehabilitationCertificateData,
  sampleObjectionNonProsecutionOrderData,
  sampleAdministrativeLetterData,
  samplePresidentLetterData,
  sampleLeaderOfficeLetterData,
  samplePetitionData,
  sampleLegalBriefData,
  sampleComplaintData,
  sampleAppealData,
  sampleInsolvencyData,
  sampleLegalNoticeData,
  sampleObjectionAbsentJudgmentData,
  sampleConditionalReleaseData,
  sampleLetterToGovernorData,
  sampleLetterToTaxOfficeData,
  sampleCheckBouncedComplaintData,
  sampleCheckExecutionPetitionData,
  sampleCheckPaymentDemandData,
  sampleCheckCivilClaimData,
  sampleCheckStopPaymentObjectionData,
  samplePromissoryNoteClaimData,
  sampleEvictionExpiredLeaseData,
  sampleEvictionNonpaymentRentData,
  sampleRentDepositClaimData,
  samplePropertyPossessionClaimData,
  sampleObjectionToCriminalSecurityData,
  sampleBailReleaseSuretyRequestData,
  samplePrisonerFurloughRequestData,
  sampleFineInstallmentPetitionData,
  sampleSayadCheckClaimPetitionData,
  sampleCheckExecutionObjectionData,
  samplePromissoryNoteProtestObjectionData,
  sampleAuctionDepositRefundRequestData,
  sampleAuctionDeedTransferRequestData,
  sampleAuctionCancellationObjectionData,
  sampleMehriehExecutionRegistryPetitionData,
  sampleMehriehInstallmentPetitionData,
  sampleNafaqahClaimPetitionData,
  sampleProvisionalAttachmentPetitionData,
  samplePropertyAttachmentLiftingRequestData,
  sampleThirdPartyObjectionToExecutionData,
  sampleOfficialDeedCompulsionPetitionData,
  sampleContractCancellationNoticePetitionData,
  sampleAdministrativeCourtJusticeComplaintData,
  sampleLaborBoardWageInsuranceComplaintData,
  sampleThirdPartyObjectionOrdinaryDeedData,
  sampleInsolvencyAppealCourtFeeFormData,
  sampleCheckCarcassRestitutionData,
  sampleInsultDefamationDefenseData,
  sampleArticle477RequestData,
];

const normalizedSamples = rawSamples.map(normalizeSample);

export function getAllSamples(): SampleDocument[] {
  return normalizedSamples;
}

export function getPublishedSamples(): SampleDocument[] {
  return normalizedSamples.filter((sample) => sample.status === 'published');
}

export function getSampleBySlug(slug: string): SampleDocument | undefined {
  if (!slug) return undefined;
  return normalizedSamples.find((sample) => sample.slug === slug);
}

export function getSamplesByCategory(category: string): SampleDocument[] {
  if (!category || category === 'همه') return getPublishedSamples();
  return getPublishedSamples().filter((s) => s.category === category);
}

export function getSampleCategories(): string[] {
  return Array.from(SAMPLE_CATEGORIES);
}

export function getRelatedSamples(slug: string, limit = 4): SampleDocument[] {
  const current = getSampleBySlug(slug);
  if (!current) return getPublishedSamples().slice(0, limit);

  // 1. If explicit related samples are defined
  if (current.relatedSamples && current.relatedSamples.length > 0) {
    const explicitList: SampleDocument[] = [];
    for (const rel of current.relatedSamples) {
      if (typeof rel === 'string') {
        const found = getSampleBySlug(rel);
        if (found && found.slug !== slug && found.status === 'published') {
          explicitList.push(found);
        }
      } else if (rel && typeof rel === 'object' && 'href' in rel) {
        const hrefSlug = rel.href.replace('/samples/', '');
        const found = getSampleBySlug(hrefSlug);
        if (found && found.slug !== slug && found.status === 'published') {
          explicitList.push(found);
        }
      }
    }
    if (explicitList.length >= limit) {
      return explicitList.slice(0, limit);
    }
  }

  // 2. Fallback: match by same category
  const sameCategory = getPublishedSamples().filter(
    (s) => s.slug !== slug && s.category === current.category
  );

  // 3. Fallback: other published samples
  const otherSamples = getPublishedSamples().filter(
    (s) => s.slug !== slug && s.category !== current.category
  );

  const combined = [...sameCategory, ...otherSamples];
  return combined.slice(0, limit);
}
