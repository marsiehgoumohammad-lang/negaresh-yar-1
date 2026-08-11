export interface ConsumerKeywordMapItem {
  consumerKeyword: string;
  formalKeyword: string;
  searchIntent: 'transactional' | 'informational' | 'navigational';
  targetUrl: string;
  cluster: 
    | 'insolvency-debt'
    | 'prisoner-release'
    | 'conditional-pardon'
    | 'legal-notice'
    | 'auctions-government'
    | 'auctions-judiciary'
    | 'auctions-impounded'
    | 'mashhad-local'
    | 'general-legal-bridge';
  relatedServiceSlug?: string;
  relatedArticleSlug?: string;
  relatedSampleSlug?: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  status: 'active' | 'implemented';
  notes?: string;
}

export const CONSUMER_KEYWORD_MAP: ConsumerKeywordMapItem[] = [
  // -------------------------------------------------------------
  // CLUSTER A: آزادی زندانی مالی / کمک به آزادی زندانی (P0)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'آزادی زندانی مالی',
    formalKeyword: 'اعسار از پرداخت محکوم‌به و توقف حکم جلب مالی',
    searchIntent: 'transactional',
    targetUrl: '/services/insolvency-from-judgment',
    cluster: 'prisoner-release',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'what-is-insolvency',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
    notes: 'کاهش عوارض جلب و بازداشت بدهکاران با ثبت دادخواست اعسار',
  },
  {
    consumerKeyword: 'آزادی زندانی بدهکار',
    formalKeyword: 'تقسیط محکوم‌به و رفع حکم جلب بدهکار',
    searchIntent: 'transactional',
    targetUrl: '/services/insolvency-from-judgment',
    cluster: 'prisoner-release',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'کمک به آزادی زندانی مالی',
    formalKeyword: 'کمک ستاد دیه و جلب رضایت مدعی خصوصی با تقسیط بدهی',
    searchIntent: 'informational',
    targetUrl: '/knowledge/how-to-install-debt-and-mahrieh',
    cluster: 'prisoner-release',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'چگونه زندانی مالی را آزاد کنیم',
    formalKeyword: 'مراحل ثبت دادخواست اعسار و تقسیط و آزادی با وثیقه/کفالت',
    searchIntent: 'informational',
    targetUrl: '/knowledge/how-to-install-debt-and-mahrieh',
    cluster: 'prisoner-release',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'what-is-bail',
    relatedSampleSlug: 'bail-to-surety',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'کمک ستاد دیه برای آزادی زندانی',
    formalKeyword: 'شرایط بهره‌مندی از تسهیلات ستاد دیه کشور در جرایم غیرعمد و بدهی مالی',
    searchIntent: 'informational',
    targetUrl: '/knowledge/how-to-install-debt-and-mahrieh',
    cluster: 'prisoner-release',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'جلوگیری از زندان به خاطر بدهی',
    formalKeyword: 'توقف جلب ماده ۳ قانون نحوه اجرای محکومیت‌های مالی با دادخواست اعسار در مهلت ۳۰ روزه',
    searchIntent: 'transactional',
    targetUrl: '/services/insolvency-from-judgment',
    cluster: 'prisoner-release',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
  },

  // -------------------------------------------------------------
  // CLUSTER B: قسطی کردن بدهی و مهریه (P0)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'چطور بدهی را قسطی کنم',
    formalKeyword: 'دادخواست اعسار از پرداخت محکوم‌به و درخواست تقسیط بدهی دادگاه',
    searchIntent: 'transactional',
    targetUrl: '/services/insolvency-from-judgment',
    cluster: 'insolvency-debt',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'قسطی کردن بدهی دادگاه',
    formalKeyword: 'تقسیط محکومیت مالی در اجرای احکام مدنی',
    searchIntent: 'transactional',
    targetUrl: '/services/insolvency-from-judgment',
    cluster: 'insolvency-debt',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'قسطی کردن مهریه',
    formalKeyword: 'دادخواست اعسار از پرداخت پیش‌پرداخت و تقسیط سکه مهریه',
    searchIntent: 'transactional',
    targetUrl: '/services/insolvency-from-judgment',
    cluster: 'insolvency-debt',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    relatedSampleSlug: 'insolvency',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'اگر پول پرداخت مهریه را ندارم چه کنم',
    formalKeyword: 'اقدام قانونی با ثبت اعسار از پرداخت یکباره مهریه و استشهادیه',
    searchIntent: 'informational',
    targetUrl: '/knowledge/how-to-install-debt-and-mahrieh',
    cluster: 'insolvency-debt',
    relatedServiceSlug: 'insolvency-from-judgment',
    relatedArticleSlug: 'how-to-install-debt-and-mahrieh',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'برای بدهی دادگاه پول ندارم چه کار کنم',
    formalKeyword: 'اعسار از پرداخت هزینه دادرسی و اعسار از پرداخت محکوم‌به',
    searchIntent: 'informational',
    targetUrl: '/services/insolvency-court-fee',
    cluster: 'insolvency-debt',
    relatedServiceSlug: 'insolvency-court-fee',
    relatedArticleSlug: 'what-is-insolvency',
    priority: 'P0',
    status: 'implemented',
  },

  // -------------------------------------------------------------
  // CLUSTER C: ثبت نام عفو مشروط / آزادی مشروط (P1)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'ثبت نام عفو مشروط',
    formalKeyword: 'درخواست عفو مناسبتی و آزادی مشروط طبق ماده ۵۸ قانون مجازات اسلامی',
    searchIntent: 'informational',
    targetUrl: '/knowledge/pardon-vs-conditional-release',
    cluster: 'conditional-pardon',
    relatedServiceSlug: 'conditional-release',
    relatedArticleSlug: 'pardon-vs-conditional-release',
    relatedSampleSlug: 'conditional-release',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'چگونه عفو مشروط بگیریم',
    formalKeyword: 'شرایط بهره‌مندی از آزادی مشروط و مرخصی منجر به آزادی در شورای تصنیف زندان',
    searchIntent: 'informational',
    targetUrl: '/knowledge/pardon-vs-conditional-release',
    cluster: 'conditional-pardon',
    relatedServiceSlug: 'conditional-release',
    relatedArticleSlug: 'how-to-request-conditional-release',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'شرایط آزادی مشروط زندانی',
    formalKeyword: 'سپری شدن یک‌سوم یا نصف مدت حبس تعزیری و احراز حسن اخلاق',
    searchIntent: 'informational',
    targetUrl: '/services/conditional-release',
    cluster: 'conditional-pardon',
    relatedServiceSlug: 'conditional-release',
    relatedArticleSlug: 'how-to-request-conditional-release',
    relatedSampleSlug: 'conditional-release',
    priority: 'P1',
    status: 'implemented',
  },

  // -------------------------------------------------------------
  // CLUSTER D: اظهارنامه / اخطار قانونی (P1)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'آخرین اخطار قانونی برای پرداخت بدهی',
    formalKeyword: 'ارسال اظهارنامه رسمی ثبت شده در سامانه ثنا قبل از اقامه دعوا',
    searchIntent: 'transactional',
    targetUrl: '/samples/legal-notice',
    cluster: 'legal-notice',
    relatedServiceSlug: 'court-document-explainer',
    relatedArticleSlug: 'what-is-legal-notice',
    relatedSampleSlug: 'legal-notice',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'نامه رسمی برای پس گرفتن پول',
    formalKeyword: 'اظهارنامه مطالبه وجه چک، سفته یا مطالبات مالی',
    searchIntent: 'transactional',
    targetUrl: '/knowledge/what-is-legal-notice',
    cluster: 'legal-notice',
    relatedServiceSlug: 'court-document-explainer',
    relatedArticleSlug: 'what-is-legal-notice',
    relatedSampleSlug: 'legal-notice',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'مجبور کردن فروشنده به تحویل کالا',
    formalKeyword: 'اظهارنامه و دادخواست الزام به تسلیم مبیع و تحویل کالا',
    searchIntent: 'transactional',
    targetUrl: '/knowledge/what-is-legal-notice',
    cluster: 'legal-notice',
    relatedServiceSlug: 'petition-writing',
    relatedArticleSlug: 'what-is-legal-notice',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'مجبور کردن طرف مقابل به امضای سند',
    formalKeyword: 'اظهارنامه رسمی و دادخواست الزام به تنظیم سند رسمی ملک/خودرو',
    searchIntent: 'transactional',
    targetUrl: '/knowledge/what-is-legal-notice',
    cluster: 'legal-notice',
    relatedServiceSlug: 'petition-writing',
    relatedArticleSlug: 'what-is-petition',
    priority: 'P1',
    status: 'implemented',
  },

  // -------------------------------------------------------------
  // AUCTION CLUSTER (P0)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'خرید خودرو از مزایده',
    formalKeyword: 'مزایده خودروهای دولتی، سازمان اموال تملیکی و اجرای احکام دادگاه',
    searchIntent: 'transactional',
    targetUrl: '/services/government-auctions',
    cluster: 'auctions-government',
    relatedServiceSlug: 'government-auctions',
    relatedArticleSlug: 'how-to-buy-car-and-property-from-court-auction',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'خرید ماشین از مزایده دادگاه',
    formalKeyword: 'مزایده خودروهای توقیفی در سامانه اجرای احکام مدنی دادگستری',
    searchIntent: 'transactional',
    targetUrl: '/services/judiciary-auction',
    cluster: 'auctions-judiciary',
    relatedServiceSlug: 'judiciary-auction',
    relatedArticleSlug: 'how-to-buy-car-and-property-from-court-auction',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'خرید ملک از مزایده دادگاه',
    formalKeyword: 'مزایده آپارتمان، زمین و املاک توقیفی اجرای احکام دادگاه',
    searchIntent: 'transactional',
    targetUrl: '/services/judiciary-auction',
    cluster: 'auctions-judiciary',
    relatedServiceSlug: 'judiciary-auction',
    relatedArticleSlug: 'how-to-buy-car-and-property-from-court-auction',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'خرید خودرو توقیفی',
    formalKeyword: 'مزایده اموال توقیفی گمرک، پارکینگ‌ها و سازمان اموال تملیکی',
    searchIntent: 'transactional',
    targetUrl: '/services/impounded-assets-auction',
    cluster: 'auctions-impounded',
    relatedServiceSlug: 'impounded-assets-auction',
    relatedArticleSlug: 'how-to-buy-car-and-property-from-court-auction',
    priority: 'P0',
    status: 'implemented',
  },
  {
    consumerKeyword: 'چگونه در مزایده شرکت کنیم',
    formalKeyword: 'مراحل ثبت‌نام در سامانه ستاد ایران و پرداخت ۱۰٪ سپرده تضمین مزایده',
    searchIntent: 'informational',
    targetUrl: '/knowledge/how-to-buy-car-and-property-from-court-auction',
    cluster: 'auctions-government',
    relatedServiceSlug: 'government-auctions',
    relatedArticleSlug: 'government-auction-guide',
    priority: 'P0',
    status: 'implemented',
  },

  // -------------------------------------------------------------
  // MASHHAD LOCAL SEO (P2)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'عریضه نویسی مشهد',
    formalKeyword: 'تنظیم تخصصی دادخواست، شکواییه و عریضه‌های حقوقی در مشهد و خراسان رضوی',
    searchIntent: 'transactional',
    targetUrl: '/services/petition-writing',
    cluster: 'mashhad-local',
    relatedServiceSlug: 'petition-writing',
    relatedArticleSlug: 'legal-self-service-guide',
    priority: 'P2',
    status: 'implemented',
  },
  {
    consumerKeyword: 'کافی نت آنلاین مشهد',
    formalKeyword: 'خدمات الکترونیک ثنا، ثبت‌نام‌های دولتی و کافی‌نت غیرحضوری مشهد',
    searchIntent: 'transactional',
    targetUrl: '/services/online-cafe',
    cluster: 'mashhad-local',
    relatedServiceSlug: 'online-cafe',
    relatedArticleSlug: 'online-judicial-services-guide',
    priority: 'P2',
    status: 'implemented',
  },
  {
    consumerKeyword: 'نامه اداری مشهد',
    formalKeyword: 'نگارش نامه‌های اداری، استانی و شعب دادگستری مشهد',
    searchIntent: 'transactional',
    targetUrl: '/services/administrative-letter',
    cluster: 'mashhad-local',
    relatedServiceSlug: 'administrative-letter',
    relatedArticleSlug: 'how-to-write-administrative-letter',
    priority: 'P2',
    status: 'implemented',
  },

  // -------------------------------------------------------------
  // GENERAL LEGAL LANGUAGE BRIDGES (P1)
  // -------------------------------------------------------------
  {
    consumerKeyword: 'میخوام شکایت کنم',
    formalKeyword: 'تنظیم شکواییه کیفری و دادخواست حقوقی',
    searchIntent: 'transactional',
    targetUrl: '/services/petition-writing',
    cluster: 'general-legal-bridge',
    relatedServiceSlug: 'petition-writing',
    relatedArticleSlug: 'petition-vs-complaint',
    relatedSampleSlug: 'complaint',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'اعتراض به حکم دادگاه',
    formalKeyword: 'تنظیم دادخواست تجدیدنظرخواهی و فرجام‌خواهی',
    searchIntent: 'transactional',
    targetUrl: '/services/appeal',
    cluster: 'general-legal-bridge',
    relatedServiceSlug: 'appeal',
    relatedArticleSlug: 'how-to-appeal-court-decision',
    relatedSampleSlug: 'appeal',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'اعتراض به حکم غیابی',
    formalKeyword: 'تنظیم دادخواست واخواهی از رای غیابی',
    searchIntent: 'transactional',
    targetUrl: '/services/objection-absent-judgment',
    cluster: 'general-legal-bridge',
    relatedServiceSlug: 'objection-absent-judgment',
    relatedSampleSlug: 'objection-absent-judgment',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'اعتراض به بسته شدن پرونده',
    formalKeyword: 'اعتراض به قرار منع تعقیب یا موقوفی تعقیب دادسرا',
    searchIntent: 'transactional',
    targetUrl: '/services/objection-non-prosecution-order',
    cluster: 'general-legal-bridge',
    relatedServiceSlug: 'objection-non-prosecution-order',
    relatedArticleSlug: 'how-to-object-prosecution-orders',
    relatedSampleSlug: 'objection-non-prosecution-order',
    priority: 'P1',
    status: 'implemented',
  },
  {
    consumerKeyword: 'دفاع از خودم در دادگاه',
    formalKeyword: 'تنظیم لایحه دفاعیه تخصصی حقوقی و کیفری',
    searchIntent: 'transactional',
    targetUrl: '/services/legal-brief',
    cluster: 'general-legal-bridge',
    relatedServiceSlug: 'legal-brief',
    relatedArticleSlug: 'what-is-legal-brief',
    relatedSampleSlug: 'legal-brief',
    priority: 'P1',
    status: 'implemented',
  },
];
