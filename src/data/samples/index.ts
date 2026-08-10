import { sampleAdministrativeLetterData, sampleAdministrativeLetterMetadata } from './administrative-letter';
import { samplePresidentLetterData, samplePresidentLetterMetadata } from './president-letter';
import { sampleLeaderOfficeLetterData, sampleLeaderOfficeLetterMetadata } from './leader-office-letter';
import { samplePetitionData, samplePetitionMetadata } from './petition';
import { sampleLegalBriefData, sampleLegalBriefMetadata } from './legal-brief';
import { sampleComplaintData, sampleComplaintMetadata } from './complaint';
import { sampleAppealData, sampleAppealMetadata } from './appeal';
import { sampleInsolvencyData, sampleInsolvencyMetadata } from './insolvency';
import { sampleBailReductionData, sampleBailReductionMetadata } from './bail-reduction';
import { sampleLegalNoticeData, sampleLegalNoticeMetadata } from './legal-notice';
import { sampleObjectionNonProsecutionOrderData, sampleObjectionNonProsecutionOrderMetadata } from './objection-non-prosecution-order';
import { sampleObjectionAbsentJudgmentData, sampleObjectionAbsentJudgmentMetadata } from './objection-absent-judgment';
import { sampleConditionalReleaseData, sampleConditionalReleaseMetadata } from './conditional-release';
import { sampleBailToSuretyData, sampleBailToSuretyMetadata } from './bail-to-surety';
import { sampleLetterToGovernorData, sampleLetterToGovernorMetadata } from './letter-to-governor';
import { sampleLetterToTaxOfficeData, sampleLetterToTaxOfficeMetadata } from './letter-to-tax-office';
import { SampleLandingData } from './types';

export const allSamplesList: {
  slug: string;
  title: string;
  badge: string;
  description: string;
  category: string;
  href: string;
  data: SampleLandingData;
}[] = [
  {
    slug: 'administrative-letter',
    title: 'نمونه نامه اداری و عریضه رسمی',
    badge: 'اداری و عمومی',
    description: 'الگوی استاندارد مکاتبات اداری، درخواست‌های رسمی، مرخصی، تسهیلات و عریضه‌نویسی سازمان‌ها.',
    category: 'نامه‌ها و عریضه‌های اداری',
    href: '/samples/administrative-letter',
    data: sampleAdministrativeLetterData,
  },
  {
    slug: 'president-letter',
    title: 'نمونه نامه به رئیس جمهور (سامانه ۱۱۱)',
    badge: 'نهاد ریاست جمهوری',
    description: 'متن استاندارد عریضه جهت ثبت در سامانه سامد (۱۱۱)، درخواست وام، مساعدت مالی، مسکن و درمان.',
    category: 'نامه‌ها و عریضه‌های اداری',
    href: '/samples/president-letter',
    data: samplePresidentLetterData,
  },
  {
    slug: 'leader-office-letter',
    title: 'نمونه نامه به دفتر مقام معظم رهبری',
    badge: 'دفتر رهبری',
    description: 'الگوی شایسته و محترمانه عریضه به بیت رهبری (leader.ir)، درخواست عفو، کمک درمانی و گره‌گشایی.',
    category: 'نامه‌ها و عریضه‌های اداری',
    href: '/samples/leader-office-letter',
    data: sampleLeaderOfficeLetterData,
  },
  {
    slug: 'petition',
    title: 'نمونه دادخواست حقوقی ثنا',
    badge: 'دادگاه حقوقی',
    description: 'الگوی کامل دادخواست‌های حقوقی مطالبه وجه چک، ملکی، خانواده، فسخ معامله و خسارات دادرسی.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/petition',
    data: samplePetitionData,
  },
  {
    slug: 'legal-brief',
    title: 'نمونه لایحه دفاعیه حقوقی و کیفری',
    badge: 'دفاعیه دادگاه',
    description: 'الگوی لایحه دفاعیه مستدل، پاسخ به دادخواست، استناد به آرای وحدت رویه و ثبت در ثنا.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/legal-brief',
    data: sampleLegalBriefData,
  },
  {
    slug: 'complaint',
    title: 'نمونه شکواییه کیفری دادسرا',
    badge: 'دادسرا و فتا',
    description: 'الگوی شکایت کیفری کلاهبرداری، خیانت در امانت، سرقت، توهین، فحاشی و فیشینگ اینترنتی.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/complaint',
    data: sampleComplaintData,
  },
  {
    slug: 'appeal',
    title: 'نمونه لایحه تجدیدنظرخواهی',
    badge: 'دادگاه استان',
    description: 'الگوی اعتراض به دادنامه بدوی بر اساس جهات ماده ۳۴۸ مدنی و ۴۳۴ کیفری جهت نقض رای.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/appeal',
    data: sampleAppealData,
  },
  {
    slug: 'insolvency',
    title: 'نمونه دادخواست اعسار و تقسیط',
    badge: 'اعسار و تقسیط',
    description: 'الگوی اعسار از پرداخت مهریه و بدهی، لیست کامل اموال ماده ۸، استشهادیه و توقف جلب ماده ۳.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/insolvency',
    data: sampleInsolvencyData,
  },
  {
    slug: 'bail-reduction',
    title: 'نمونه درخواست تخفیف و تبدیل وثیقه',
    badge: 'دادسرا و آزادی',
    description: 'الگوی درخواست تبدیل قرار وثیقه ملک به قرار کفالت و فیش حقوقی جهت آزادی متهم.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/bail-reduction',
    data: sampleBailReductionData,
  },
  {
    slug: 'legal-notice',
    title: 'نمونه اظهارنامه رسمی ثنا',
    badge: 'اخطار رسمی',
    description: 'الگوی اظهارنامه رسمی ماده ۱۵۶، مطالبه طلب، تحویل ملک، خنع ید و شروع خسارت تاخیر تادیه.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/legal-notice',
    data: sampleLegalNoticeData,
  },
  {
    slug: 'objection-non-prosecution-order',
    title: 'نمونه لایحه اعتراض به قرار منع تعقیب',
    badge: 'اعتراض به قرار دادسرا',
    description: 'الگوی کامل اعتراض به قرار منع تعقیب دادسرا، جلب به دادرسی متهم و استناد به مواد آیین دادرسی کیفری.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/objection-non-prosecution-order',
    data: sampleObjectionNonProsecutionOrderData,
  },
  {
    slug: 'objection-absent-judgment',
    title: 'نمونه دادخواست و لایحه واخواهی از حکم غیابی',
    badge: 'واخواهی غیابی',
    description: 'الگوی دادخواست واخواهی از رای غیابی دادگاه حقوقی و کیفری، استناد به ماده ۳۰۵ مدنی و توقف جلب.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/objection-absent-judgment',
    data: sampleObjectionAbsentJudgmentData,
  },
  {
    slug: 'conditional-release',
    title: 'نمونه درخواست آزادی مشروط و تعلیق مجازات',
    badge: 'امور زندانیان',
    description: 'الگوی درخواست آزادی مشروط (ماده ۵۸)، پابند الکترونیک (ماده ۶۲) و مرخصی جهت ارائه به دادیار ناظر.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/conditional-release',
    data: sampleConditionalReleaseData,
  },
  {
    slug: 'bail-to-surety',
    title: 'نمونه درخواست تبدیل وثیقه به کفالت و فک سند',
    badge: 'تامین کیفری',
    description: 'الگوی درخواست تبدیل وثیقه سند ملک به قرار کفالت و فیش حقوقی جهت آزادسازی سند در دادسرا.',
    category: 'اوراق و دادخواست‌های قضایی',
    href: '/samples/bail-to-surety',
    data: sampleBailToSuretyData,
  },
  {
    slug: 'letter-to-governor',
    title: 'نمونه نامه اداری به استاندار و فرماندار',
    badge: 'مکاتبات استانی',
    description: 'الگوی رسمی عریضه به استاندار و فرماندار، درخواست وام، حل مشکلات عمرانی، شهری و سامانه ۱۱۱.',
    category: 'نامه‌ها و عریضه‌های اداری',
    href: '/samples/letter-to-governor',
    data: sampleLetterToGovernorData,
  },
  {
    slug: 'letter-to-tax-office',
    title: 'نمونه لایحه اعتراض به برگ تشخیص مالیات',
    badge: 'امور مالیاتی',
    description: 'الگوی لایحه اعتراض به مالیات عملکرد، ارزش افزوده و تراکنش بانکی ماده ۲۳۸ و ۲۴۴ قانون مالیات‌ها.',
    category: 'نامه‌ها و عریضه‌های اداری',
    href: '/samples/letter-to-tax-office',
    data: sampleLetterToTaxOfficeData,
  },
];

export {
  sampleAdministrativeLetterData,
  sampleAdministrativeLetterMetadata,
  samplePresidentLetterData,
  samplePresidentLetterMetadata,
  sampleLeaderOfficeLetterData,
  sampleLeaderOfficeLetterMetadata,
  samplePetitionData,
  samplePetitionMetadata,
  sampleLegalBriefData,
  sampleLegalBriefMetadata,
  sampleComplaintData,
  sampleComplaintMetadata,
  sampleAppealData,
  sampleAppealMetadata,
  sampleInsolvencyData,
  sampleInsolvencyMetadata,
  sampleBailReductionData,
  sampleBailReductionMetadata,
  sampleLegalNoticeData,
  sampleLegalNoticeMetadata,
  sampleObjectionNonProsecutionOrderData,
  sampleObjectionNonProsecutionOrderMetadata,
  sampleObjectionAbsentJudgmentData,
  sampleObjectionAbsentJudgmentMetadata,
  sampleConditionalReleaseData,
  sampleConditionalReleaseMetadata,
  sampleBailToSuretyData,
  sampleBailToSuretyMetadata,
  sampleLetterToGovernorData,
  sampleLetterToGovernorMetadata,
  sampleLetterToTaxOfficeData,
  sampleLetterToTaxOfficeMetadata,
};

