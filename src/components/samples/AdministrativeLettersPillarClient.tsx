'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  FileText,
  Search,
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowLeft,
  ChevronDown,
  BookOpen,
  Briefcase,
  Users,
  GraduationCap,
  Scale,
  Receipt,
  Building,
  HelpCircle,
  Sparkles,
  PhoneCall,
  Send,
  HeartHandshake,
  School,
  Plane,
  Stamp,
  CreditCard,
  ShieldAlert,
  Zap,
  Flame,
  Droplets,
  Trees,
  Store,
  Truck,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { GeneralSampleVsCustomSection } from '@/components/samples/GeneralSampleVsCustomSection';
import { ThreeServiceDiscovery } from '@/components/common/ThreeServiceDiscovery';

// -------------------------------------------------------------
// Organization Directory Data
// -------------------------------------------------------------
interface OrgItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  topics: string[];
  href: string;
  icon: React.ElementType;
  popular?: boolean;
}

const ORGANIZATIONS_DIRECTORY: OrgItem[] = [
  {
    id: 'bank',
    name: 'بانک‌ها و موسسات اعتباری',
    category: 'بانک و مالی',
    badge: 'پرمخاطب',
    topics: ['درخواست وام قرض‌الحسنه', 'تقسیط معوقات بانکی', 'بخشودگی سود و جرایم دیرکرد', 'فک رهن سند ملکی'],
    href: '/samples/bank-letter',
    icon: Landmark,
    popular: true,
  },
  {
    id: 'municipality',
    name: 'شهرداری‌ها و کمیسیون ماده ۱۰۰',
    category: 'شهرداری و شهرسازی',
    badge: 'بسیار حساس',
    topics: ['لایحه دفاعیه کمیسیون ماده ۱۰۰', 'تقسیط عوارض نوسازی', 'تسریع در صدور پایان‌کار', 'رفع سد معبر'],
    href: '/samples/municipality-letter',
    icon: Building,
    popular: true,
  },
  {
    id: 'social-security',
    name: 'سازمان تامین اجتماعی',
    category: 'بیمه و بازنشستگی',
    badge: 'مواعد ۳۰ روزه',
    topics: ['برقراری مقرری بیمه بیکاری', 'بخشودگی جرایم کارفرما', 'احیای سوابق گم‌شده', 'کمیسیون پزشکی ماده ۹۱'],
    href: '/samples/social-security-letter',
    icon: ShieldCheck,
    popular: true,
  },
  {
    id: 'labor',
    name: 'اداره تعاون، کار و رفاه اجتماعی',
    category: 'کارگری و کارفرمایی',
    badge: 'احقاق حقوق',
    topics: ['درخواست بازرسی کارگاه', 'مطالبه بیمه ماده ۱۴۸', 'سازش مسالمت‌آمیز', 'محاسبه سنوات و عیدی'],
    href: '/samples/labor-office-letter',
    icon: Briefcase,
    popular: true,
  },
  {
    id: 'civil-registry',
    name: 'سازمان ثبت احوال کشور',
    category: 'امور سجلی و هویتی',
    badge: 'هیئت حل اختلاف',
    topics: ['درخواست تغییر نام کوچک', 'حذف پسوند نام خانوادگی', 'اصلاح سال تولد', 'شناسنامه المثنی'],
    href: '/samples/civil-registry-letter',
    icon: Users,
    popular: true,
  },
  {
    id: 'tax',
    name: 'سازمان امور مالیاتی (دارایی)',
    category: 'مالیات و دارایی',
    badge: 'کمیسیون ۲۱۶ و ۲۳۸',
    topics: ['اعتراض به برگ تشخیص مالیات', 'تعدیل مالیات مشاغل و کارتخوان', 'تقسیط بدهی مالیاتی', 'بخشودگی جرایم'],
    href: '/samples/letter-to-tax-office',
    icon: Receipt,
    popular: true,
  },
  {
    id: 'inspection',
    name: 'سازمان بازرسی کل کشور (سامانه ۱۳۶)',
    category: 'نظارتی و بازرسی',
    badge: 'سامانه ۱۳۶',
    topics: ['گزارش ترک فعل مدیران', 'تخلف در مناقصات دولتی', 'گزارش ارتشاء و رانت', 'اعزام هیئت بازرسی'],
    href: '/samples/inspection-organization-letter',
    icon: Scale,
  },
  {
    id: 'university',
    name: 'دانشگاه‌ها و مراکز آموزش عالی',
    category: 'آموزشی و دانشجویی',
    badge: 'کمیسیون موارد خاص',
    topics: ['مرخصی بدون احتساب در سنوات', 'تقسیط و تخفیف شهریه', 'حذف ترم اضطراری پزشکی', 'تسریع صدور دانشنامه'],
    href: '/samples/university-letter',
    icon: GraduationCap,
  },
  {
    id: 'governor',
    name: 'استانداری، فرمانداری و بخشداری',
    category: 'مدیریت استانی',
    badge: 'ملاقات مردمی',
    topics: ['حل تعارضات محلی و روستایی', 'تقاضای اشتغال و وام مشاغل خانگی', 'رسیدگی به کاستی‌های شهری', 'ملاقات با استاندار'],
    href: '/samples/letter-to-governor',
    icon: Building2,
  },
  {
    id: 'president',
    name: 'نهاد ریاست جمهوری (سامانه سامد ۱۱۱)',
    category: 'نهادهای عالی',
    badge: 'سامانه ۱۱۱',
    topics: ['درخواست تسهیلات و گره‌گشایی', 'نامه سفرهای استانی', 'درخواست مسکن ملی و درمان', 'گزارش به رئیس جمهور'],
    href: '/samples/president-letter',
    icon: Landmark,
  },
  {
    id: 'leader',
    name: 'دفتر مقام معظم رهبری',
    category: 'نهادهای عالی',
    badge: 'بیت رهبری',
    topics: ['درخواست عفو و تخفیف مجازات', 'استمداد و رسیدگی ویژه', 'کمک‌هزینه درمان بیماری‌های خاص', 'رفع تظلم'],
    href: '/samples/leader-office-letter',
    icon: Landmark,
  },
  {
    id: 'divan',
    name: 'دیوان عدالت اداری',
    category: 'قضایی و ابطال مصوبات',
    badge: 'ابطال احکام',
    topics: ['ابطال آرای کمیسیون ماده ۱۰۰', 'ابطال بخشنامه‌های خلاف قانون', 'رسیدگی به تصمیمات شهرداری و دارایی', 'دستور موقت توقف'],
    href: '/samples/administrative-court-justice-complaint',
    icon: Scale,
  },
  {
    id: 'real-estate-registry',
    name: 'سازمان ثبت اسناد و املاک کشور',
    category: 'امور ملکی و ثبتی',
    badge: 'افراز و کاداستر',
    topics: ['درخواست افراز و تفکیک ملک', 'اصلاح سند تک‌برگ کاداستر', 'رفع بازداشت پلاک ثبتی', 'پرونده‌های اجرای اسناد رسمی'],
    href: '/samples/real-estate-registry-letter',
    icon: Stamp,
    popular: true,
  },
  {
    id: 'discretionary-punishments',
    name: 'سازمان تعزیرات حکومتی',
    category: 'صنوف و نظارت بر بازار',
    badge: 'لایحه دفاعیه',
    topics: ['دفاعیه گران‌فروشی و تقلب', 'اعتراض به جریمه قاچاق کالا', 'تقسیط جریمه نقدی تعزیرات', 'تجدیدنظرخواهی احکام تعزیراتی'],
    href: '/samples/discretionary-punishments-letter',
    icon: ShieldAlert,
  },
  {
    id: 'passport-office',
    name: 'اداره کل گذرنامه و مهاجرت فراجا',
    category: 'انتظامی و مرزبانی',
    badge: 'رفع ممنوع‌الخروجی',
    topics: ['رفع ممنوع‌الخروجی مهریه و مالیات', 'استعلام سوابق تردد مرزی', 'صدور گذرنامه اضطراری زیارتی', 'رفع تشابه اسمی مسافران'],
    href: '/samples/passport-office-letter',
    icon: Plane,
    popular: true,
  },
  {
    id: 'relief-foundation',
    name: 'کمیته امداد، بهزیستی و بنیاد شهید',
    category: 'نهادهای حمایتی و ایثارگران',
    badge: 'استمداد و مستمری',
    topics: ['برقراری مستمری ماهانه', 'وام اشتغال قرض‌الحسنه ۴٪', 'کمک‌هزینه ودیعه مسکن و جهیزیه', 'تسهیلات جانبازان و ایثارگران'],
    href: '/samples/relief-foundation-letter',
    icon: HeartHandshake,
  },
  {
    id: 'education-office',
    name: 'اداره کل آموزش و پرورش',
    category: 'فرهنگیان و مدارس',
    badge: 'نقل‌وانتقال معلمان',
    topics: ['انتقال اضطراری و پزشکی فرهنگیان', 'اعتراض به نتایج رتبه‌بندی معلمان', 'رفع مشکلات ثبت‌نام مدارس', 'تاییدیه دیپلم و مدرک تحصیلی'],
    href: '/samples/education-office-letter',
    icon: School,
  },
  {
    id: 'power-company',
    name: 'شرکت توزیع نیروی برق',
    category: 'انرژی و تاسیسات',
    badge: 'خسارت و کنتور',
    topics: ['جبران خسارت نوسان برق و سوختن لوازم', 'جابجایی تیر برق و رفع حریم سیم', 'تقاضای انشعاب موقت و دائم', 'تقسیط قبوض نجومی برق'],
    href: '/samples/power-company-letter',
    icon: Zap,
    popular: true,
  },
  {
    id: 'gas-company',
    name: 'شرکت ملی گاز و اداره گاز',
    category: 'انرژی و تاسیسات',
    badge: 'علمک و ایمنی',
    topics: ['جابجایی علمک و رگلاتور گاز در پارکینگ', 'تفکیک کنتور گاز آپارتمان‌ها', 'درخواست برقراری انشعاب جدید', 'تقسیط قبوض فصول سرد'],
    href: '/samples/gas-company-letter',
    icon: Flame,
    popular: true,
  },
  {
    id: 'water-company',
    name: 'شرکت آب و فاضلاب (آبفا)',
    category: 'انرژی و تاسیسات',
    badge: 'تفکیک کنتور',
    topics: ['تفکیک کنتور آب آپارتمان‌ها', 'اتصال به شبکه فاضلاب شهری (اگو)', 'اعتراض به قبوض نامتعارف آب', 'تقسیط حق انشعاب مسکونی'],
    href: '/samples/water-company-letter',
    icon: Droplets,
    popular: true,
  },
  {
    id: 'agricultural-office',
    name: 'جهاد کشاورزی و امور اراضی',
    category: 'اراضی و باغات',
    badge: 'حفظ کاربری و ماده ۱۰',
    topics: ['مجوز فنس‌کشی و احداث اتاق کارگری', 'لایحه دفاعیه اخطاریه ماده ۱۰ و توقف تخریب', 'کمیسیون تبصره ۱ ماده ۱ تغییر کاربری', 'مجوز احداث استخر ذخیره آب'],
    href: '/samples/agricultural-office-letter',
    icon: Trees,
    popular: true,
  },
  {
    id: 'natural-resources',
    name: 'سازمان منابع طبیعی و آبخیزداری',
    category: 'اراضی و باغات',
    badge: 'ماده ۵۶ و مستثنیات',
    topics: ['اعتراض به برگ تشخیص ماده ۵۶', 'اثبات مستثنیات قانونی با عکس هوایی', 'دفاع در اتهام تصرف عدوانی ماده ۵۵', 'استعلام کاداستر عدم تداخل پلاک'],
    href: '/samples/natural-resources-letter',
    icon: Trees,
  },
  {
    id: 'guild-union',
    name: 'اتحادیه‌های صنفی و اتاق اصناف',
    category: 'صنوف و بازار',
    badge: 'جواز کسب و رفع پلمب',
    topics: ['تقاضای مهلت و جلوگیری از پلمب ماده ۲۷', 'صدور و تمدید پروانه کسب درگاه ملی', 'انتقال جواز کسب به ورثه یا خریدار', 'شکایت به کمیسیون نظارت بر اصناف'],
    href: '/samples/guild-union-letter',
    icon: Store,
    popular: true,
  },
  {
    id: 'transportation-road-office',
    name: 'راهداری و حمل‌ونقل جاده‌ای',
    category: 'حمل‌ونقل و جاده‌ها',
    badge: 'کارت هوشمند و ماده ۱۱',
    topics: ['رفع تعلیق و تمدید کارت هوشمند رانندگان', 'لایحه دفاعیه کمیسیون ماده ۱۱ و ۱۲ اضافه تناژ', 'مجوز احداث راه دسترسی و رمپ جاده‌ای', 'مطالبه خسارت نقص ایمنی آسفالت'],
    href: '/samples/transportation-road-office-letter',
    icon: Truck,
  },
];

// -------------------------------------------------------------
// Bank Specific Sub-Cluster Scenarios
// -------------------------------------------------------------
interface BankScenario {
  title: string;
  badge: string;
  desc: string;
  href: string;
}

const BANK_SUB_CLUSTER: BankScenario[] = [
  {
    title: 'درخواست وام و تسهیلات بانکی',
    badge: 'وام قرض‌الحسنه و مرابحه',
    desc: 'متن رسمی اداری با طرح توجیهی و ضمانت معتبر جهت ارائه به ریاست شعبه و سرپرستی.',
    href: '/samples/bank-loan-request',
  },
  {
    title: 'تقسیط بدهی و استمهال اقساط معوقه',
    badge: 'جلوگیری از اقدام حقوقی',
    desc: 'استناد به قوانین استمهال تولید و بخشنامه‌های بانک مرکزی جهت تمدید مهلت بازپرداخت.',
    href: '/samples/bank-debt-installment',
  },
  {
    title: 'بخشودگی جرایم دیرکرد و سود مازاد',
    badge: 'حذف وجه التزام تا ۱۰۰٪',
    desc: 'استفاده از اختیارات هیئت‌مدیره بانک‌ها جهت بخشودگی ۶ درصد جریمه تاخیر با تسویه نقدی.',
    href: '/samples/bank-penalty-waiver',
  },
  {
    title: 'فک رهن سند ملکی و آزادسازی وثیقه',
    badge: 'تسویه نهایی تسهیلات',
    desc: 'الزام بانک به صدور نامه فک رهن به دفترخانه اسناد رسمی پس از تسویه اصل و سود.',
    href: '/samples/bank-mortgage-release',
  },
  {
    title: 'رفع سوء اثر از چک برگشتی و صیاد',
    badge: 'ماده ۵ مکرر قانون صدور چک',
    desc: 'رفع مسدودی تمامی حساب‌های بانکی و بازگرداندن وضعیت سفید در سامانه صیاد بانک مرکزی.',
    href: '/samples/bank-check-clearing',
  },
  {
    title: 'شکایت از تخلفات شعبه به بازرسی',
    badge: 'بلوکه وام و سود غیرقانونی',
    desc: 'گزارش مکتوب و مستند به بازرسی بانک و سامانه شکایات بانک مرکزی CRM.',
    href: '/samples/bank-complaint',
  },
];

// -------------------------------------------------------------
// General Administrative Ready-to-Copy Templates
// -------------------------------------------------------------
interface QuickTemplate {
  id: string;
  title: string;
  desc: string;
  category: string;
  content: string;
}

const QUICK_TEMPLATES: QuickTemplate[] = [
  {
    id: 'loan-request',
    title: 'نامه درخواست وام، تسهیلات یا مساعدت مالی',
    desc: 'الگوی استاندارد تقاضای وام قرض‌الحسنه از مدیران، بانک‌ها یا صندوق‌های قرض‌الحسنه.',
    category: 'تسهیلات و مالی',
    content: `بسمه‌تعالی

جناب آقای / سرکار خانم [...]
ریاست محترم [...]
موضوع: تقاضای اعطای وام / تسهیلات قرض‌الحسنه

با سلام و تحیات وافره،
احتراماً، اینجانب [...] به شماره پرسنلی / کد ملی [...]، به استحضار عالی می‌رساند:

نظر به بروز برخی مشکلات غیرمترقبه مالی در معیشت خانواده از جمله [...] (تامین ودیعه مسکن / هزینه‌های درمانی و بیمارستانی / شهریه دانشگاه)، در حال حاضر با مضیقه شدید مالی مواجه گردیده و جهت رهایی از این تنگنا، نیازمند بهره‌مندی از تسهیلات اعتباری می‌باشم.

لذا با عنایت به سوابق خدمت و تعهد کاری، تقاضا دارم در صورت صلاحدید و با بهره‌مندی از اختیارات قانونی، با پرداخت مبلغ [...] ریال وام قرض‌الحسنه با اقساط ماهانه [...] ماهه از محل اعتبارات در اختیار موافقت فرموده و دستور مقتضی جهت اقدام لازم صادر فرمایند.

اینجانب متعهد می‌گردم اقساط مربوطه را در موعد مقرر از محل حقوق ماهانه یا ارائه چک و سفته معتبر پرداخت نمایم.

پیشاپیش از بذل توجه، حسن نیت و دستور مساعدت جنابعالی کمال تشکر و امتنان را دارد.

با تجدید احترام
نام و نام خانوادگی متقاضی: [...]
شماره تماس: [...]
امضا و تاریخ: [...]`,
  },
  {
    id: 'transfer-request',
    title: 'نامه درخواست انتقال، ماموریت یا جابه‌جایی شغلی',
    desc: 'متن رسمی اداری جهت جابه‌جایی محل خدمت پرسنل، کارمندان و نیروهای قراردادی.',
    category: 'امور پرسنلی',
    content: `بسمه‌تعالی

مدیرکل محترم / ریاست محترم اداره امور اداری و منابع انسانی [...]
موضوع: تقاضای انتقال محل خدمت / ماموریت به شهرستان [...]

با سلام و احترام،
اینجانب [...] شاغل در پست سازمانی [...] با شماره پرسنلی [...] و سابقه [...] سال خدمت در واحد [...]، به استحضار می‌رساند:

نظر به دلایل موجه و مشکلات حاد خانوادگی از جمله [...] (بیماری صعب‌العلاج والدین و ضرورت مراقبت مستمر در شهر مبدا / اشتغال همسر در شهرستان مقصد و لزوم حفظ کیان خانواده)، ادامه خدمت در محل فعلی موجب تحمیل مشقت فراوان روحی و هزینه‌های گزاف تردد گردیده است.

با عنایت به اینکه در اداره [...] شهرستان مقصد پست بلاتصدی متناسب با رشته شغلی اینجانب وجود داشته و تقاضای حاضر متضمن هیچ‌گونه خللی در روند اداری نخواهد بود، خواهشمند است با انتقال قطعی / ماموریت موقت اینجانب به شهرستان [...] برای مدت [...] موافقت فرموده و دستورات لازم را صادر فرمایید.

مدارک موید ادعا (مدارک پزشکی / احکام شغلی همسر) به پیوست تقدیم می‌گردد.

با تشکر و سپاس فراوان
نام و نام خانوادگی: [...]
امضا و تاریخ: [...]`,
  },
  {
    id: 'objection-request',
    title: 'نامه اعتراض به نحوه پاسخگویی و تاخیر در انجام کار',
    desc: 'عریضه اعتراض‌آمیز رسمی به مقام بالاتر به علت معطلی پرونده یا ترک فعل اداری.',
    category: 'رسیدگی به شکایات',
    content: `بسمه‌تعالی

ریاست محترم سازمان / اداره‌کل [...]
موضوع: اعتراض به تاخیر غیرموجه در صدور مجوز و عدم پاسخگویی به نامه شماره [...]

با سلام و احترام،
احتراماً، به استحضار عالی می‌رساند اینجانب [...] به عنوان متقاضی دریافت مجوز [...]، کلیه مدارک قانونی، نقشه‌ها و تاییدیه استعلامات دستگاه‌های ذی‌ربط را در تاریخ [...] با شماره ثبت دبیرخانه [...] تحویل واحد [...] آن اداره نموده‌ام.

علیرغم گذشت [...] ماه از موعد قانونی و مراجعات مکرر حضوری، متاسفانه پرونده مذکور بدون هیچ‌گونه علت موجه قانونی در کارتابل مسئولین مربوطه مسکوت مانده و هیچ‌گونه پاسخ مکتوبی به اینجانب ارائه نشده است. این معطلی غیرقانونی موجب ورود خسارات مادی هنگفت و اخلال در برنامه‌ریزی کاری گردیده است.

لذا با استناد به منشور حقوق شهروندی در نظام اداری و تکالیف دستگاه‌های اجرایی، استدعا دارد دستور فرمایید پرونده با قید فوریت مورد بازبینی قرار گرفته و دستور تسریع در صدور مجوز نهایی صادر و نتیجه به اینجانب ابلاغ گردد.

سوابق ثبت دبیرخانه و رسید استعلامات ضمیمه است.

با تشکر و تجدید احترام
نام متقاضی: [...] - تلفن: [...]
امضا و تاریخ: [...]`,
  },
  {
    id: 'settlement-request',
    title: 'نامه اعلام پایان کار، تسویه‌حساب و درخواست صدور گواهی حسن خدمت',
    desc: 'الگوی رسمی پایان همکاری، استرداد وثایق، تسویه مالی و درخواست معرفی‌نامه سابقه کاری.',
    category: 'تسویه‌حساب و سوابق',
    content: `بسمه‌تعالی

مدیریت محترم عامل شرکت / ریاست محترم سازمان [...]
موضوع: اعلام اتمام قرارداد، تسویه‌حساب نهایی و درخواست صدور گواهی حسن انجام کار

با سلام و احترام،
به استحضار می‌رساند مدت قرارداد همکاری اینجانب [...] در سمت [...] با شماره پرسنلی [...] در تاریخ [...] به پایان رسیده و کلیه تعهدات، اموال اداری، اسناد و ابزارهای تحویلی بر اساس صورت‌جلسه پیوست تحویل مدیر مربوطه گردیده است.

خواهشمند است دستور فرمایید نسبت به تسویه‌حساب نهایی حقوق و مزایای قانونی (شامل سنوات خدمت، مانده مرخصی، حق بیمه و عیدی)، آزادسازی چک / سفته ضمانت حسن انجام کار تحویلی در بدو استخدام به شماره [...] و همچنین صدور گواهی رسمی حسن انجام کار و اشتغال به انضمام مدت و عنوان شغلی مساعدت لازم مبذول دارند.

از دوران پربار همکاری با مجموعه محترم شما و حسن سلوک مدیریت کمال تشکر را دارم.

با تجدید احترام
نام و نام خانوادگی: [...]
امضا و تاریخ: [...]`,
  },
];

// -------------------------------------------------------------
// FAQs Data
// -------------------------------------------------------------
const FAQS = [
  {
    q: 'تفاوت یک نامه اداری معمولی با نامه اداری استاندارد و تخصصی چیست؟',
    a: 'یک نامه اداری استاندارد دارای ساختار ۶ گانه اصولی (سربرگ، القاب رسمی، پاراگراف ورود، مستندات قانونی، خواسته روشن و هامش پیشنهادی) است. نامه‌های معمولی معمولاً احساسی، مبهم، بیش از حد طولانی یا فاقد استناد به شماره پرونده و بخشنامه‌ها هستند و همین امر باعث بایگانی شدن یا پاسخ منفی مسئول مربوطه می‌شود.',
  },
  {
    q: 'چرا نباید متون آماده اینترنتی را بدون تغییر کپی کنیم؟',
    a: 'قالب‌های اینترنتی صرفاً چارچوب کلی هستند. هر اداره دولتی یا بانک، آیین‌نامه‌ها، شماره بخشنامه‌ها و فرآیندهای دفتری خاص خود را دارد. اگر نام و شرایط دقیق پرونده، مدارک مثبته و مواد قانونی مرتبط در نامه درج نشود، کارشناس دبیرخانه بلافاصله متوجه عمومی بودن متن شده و درخواست را رد می‌کند.',
  },
  {
    q: 'ارکان اصلی یک نامه اداری رسمی چیست؟',
    a: '۱) تاریخ، شماره و پیوست ۲) نام و عنوان دقیق گیرنده به همراه القاب شایسته سازمانی ۳) عبارت سلام و آغازین رسمی ۴) پاراگراف مقدمه با ذکر سریع موضوع ۵) پاراگراف بدنه متضمن مستندات و دلایل ۶) پاراگراف نتیجه‌گیری با درخواست عملیاتی مشخص ۷) نام کامل، امضا، کد ملی و شماره تماس متقاضی.',
  },
  {
    q: 'اگر سازمان دولتی به نامه اداری من پاسخ ندهد چه اقدامی باید کرد؟',
    a: 'ابتدا با در دست داشتن شماره ثبت دبیرخانه و تاریخ ثبت، نامه پیگیری مجدد به مقام بالاتر (مدیرکل یا معاونت بازرسی) ارسال کنید. در صورت استمرار بی‌توجهی، می‌توانید به استناد دستورالعمل ترک فعل مدیران در سامانه ۱۳۶ سازمان بازرسی کل کشور یا هیئت‌های حل اختلاف شکایت ثبت نمایید.',
  },
  {
    q: 'آیا خدمات تنظیم نامه اختصاصی نگارش یار شامل اصلاح متن می‌شود؟',
    a: 'بله، تمامی نامه‌های تنظیم‌شده توسط دپارتمان تخصصی نگارش یار همراه با پشتیبانی و امکان ویرایش تکمیلی هستند. در صورتی که دبیرخانه یا مسئول اداره نکته جدیدی مطرح کند، کارشناسان ما نامه را بدون دریافت هزینه اضافی بازبینی و تکمیل می‌کنند.',
  },
  {
    q: 'تنظیم اختصاصی یک نامه اداری در نگارش یار چقدر زمان می‌برد؟',
    a: 'با توجه به فوریت اداری، اکثر سفارش‌های نامه اداری و سازمانی ظرف ۱ تا ۳ ساعت به صورت تایپ‌شده در فرمت رسمی Word و PDF به همراه فرمول پرینت تحویل داده می‌شوند.',
  },
];

export function AdministrativeLettersPillarClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [activeTab, setActiveTab] = useState(QUICK_TEMPLATES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = useMemo(() => {
    const cats = new Set(ORGANIZATIONS_DIRECTORY.map((o) => o.category));
    return ['همه', ...Array.from(cats)];
  }, []);

  const filteredOrgs = useMemo(() => {
    return ORGANIZATIONS_DIRECTORY.filter((org) => {
      const matchCat = selectedCategory === 'همه' || org.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === '' ||
        org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const activeTemplate = useMemo(() => {
    return QUICK_TEMPLATES.find((t) => t.id === activeTab) || QUICK_TEMPLATES[0];
  }, [activeTab]);

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#070B15] text-slate-100 selection:bg-[#E5C158]/30 selection:text-[#E5C158] pb-24 sm:pb-32">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/80 via-[#070B15] to-[#070B15] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,193,88,0.12),transparent_70%)] pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#E5C158]" />
              <span className="font-semibold text-[#E5C158]">مرجع جامع مکاتبات اداری و عریضه‌نویسی کشور</span>
              <span className="text-slate-500">•</span>
              <span>آپدیت استانداردهای دفتری ۱۴۰۵</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight sm:leading-snug">
              مرجع جامع نمونه نامه اداری، متن درخواست رسمی و عریضه‌نویسی به سازمان‌ها
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              بانک کامل الگوهای مکاتبات رسمی با ادارات دولتی، شهرداری‌ها، بانک‌ها، بیمه، دانشگاه‌ها و نهادهای نظارتی. همراه با دانلود رایگان متن‌های آماده، فرمول نگارش و امکان تنظیم اختصاصی نامه توسط کارشناسان خبره اداری.
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {[
                'فرمت استاندارد دبیرخانه‌ای',
                'رعایت سلسله‌مراتب اداری',
                'لحن اقناعی و محترمانه',
                'پشتیبانی و تنظیم اختصاصی فوری',
              ].map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. ABOVE-FOLD CONVERSION BANNER (رفع معضل رد شدن نامه‌ها) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative -mt-6 z-20">
        <Container>
          <div className="max-w-5xl mx-auto p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-950/50 via-slate-900 to-amber-950/40 border border-[#E5C158]/40 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-md">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-[#E5C158] font-bold text-base sm:text-lg">
                <AlertCircle className="w-5 h-5 text-[#E5C158] shrink-0" />
                <span>چرا ۶۵٪ نامه‌های اداری و درخواست‌ها در کارتابل‌ها رد یا معطل می‌شوند؟</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                استفاده از لحن نامناسب، عدم استناد به بخشنامه‌ها و مواد قانونی، یا ابهام در بیان خواسته باعث بایگانی شدن نامه‌ها می‌گردد. اگر موضوع شما پیچیده، حساس یا دارای بار مالی است، کارشناسان نگارش یار نامه کاملاً اختصاصی و موثر شما را در کمتر از ۲ ساعت تدوین می‌کنند.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/request?service=administrative-letter"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#d4b045] text-[#070B15] text-sm font-black transition-all shadow-lg active:scale-95"
              >
                <span>درخواست تنظیم نامه اختصاصی</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <a
                href="tel:09915147789"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all border border-slate-700"
              >
                <PhoneCall className="w-4 h-4 text-[#E5C158]" />
                <span>مشاوره تلفنی رایگان</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. ORGANIZATION DIRECTORY HUB (تنظیم نامه برای سازمان‌ها) */}
      {/* ------------------------------------------------------------- */}
      <section id="organizations" className="py-14 sm:py-20 border-b border-slate-800/80">
        <Container>
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>دایرکتوری جامع سازمان‌ها و ادارات</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white">
                  تنظیم نامه و عریضه رسمی برای سازمان‌ها و ادارات دولتی
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  سازمان یا اداره مورد نظر خود را انتخاب کنید تا به متن‌های آماده، فرمول‌های دفتری و قوانین اختصاصی آن دسترسی پیدا کنید.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجوی سازمان یا موضوع نامه..."
                  className="w-full pl-4 pr-10 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E5C158] transition-colors"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#E5C158] text-[#070B15]'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredOrgs.map((org) => {
                const IconComponent = org.icon;
                return (
                  <div
                    key={org.id}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#E5C158]/50 transition-all group flex flex-col justify-between hover:shadow-xl hover:shadow-[#E5C158]/5"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="p-3 rounded-xl bg-slate-800/90 text-[#E5C158] border border-slate-700/60 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-[11px] font-bold border border-[#E5C158]/20">
                          {org.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors">
                          {org.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">{org.category}</p>
                      </div>

                      {/* Topics */}
                      <ul className="space-y-1.5 pt-2 border-t border-slate-800">
                        {org.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1 h-1 rounded-full bg-[#E5C158] shrink-0" />
                            <span className="truncate">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                      <Link
                        href={org.href}
                        className="text-xs font-bold text-[#E5C158] hover:text-[#f3d274] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>مشاهده نمونه‌ها و راهنما</span>
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/request?service=administrative-letter"
                        className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 hover:text-white transition-colors border border-slate-700"
                      >
                        تنظیم اختصاصی
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredOrgs.length === 0 && (
              <div className="text-center py-12 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
                <Building2 className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-slate-300 text-sm font-semibold">موردی متناسب با جستجوی شما یافت نشد.</p>
                <p className="text-slate-500 text-xs">می‌توانید برای هر سازمان یا اداره دولتی، درخواست تنظیم نامه اختصاصی ثبت کنید.</p>
                <Link
                  href="/request?service=administrative-letter"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E5C158] text-[#070B15] text-xs font-bold mt-2"
                >
                  <span>سفارش تنظیم نامه برای این سازمان</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3.5. BANK SUB-CLUSTER (خوشه تخصصی نامه‌های بانکی) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-16 border-b border-slate-800/80 bg-gradient-to-b from-[#070B15] via-slate-900/40 to-[#070B15]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>خوشه تخصصی بانکی و اعتباری</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-white">
                  الگوهای تخصصی مکاتبه با بانک‌ها و موسسات اعتباری
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                  دسته‌بندی نامه‌ها بر اساس نیازهای واقعی مشتریان بانکی؛ از دریافت وام و تقسیط بدهی تا بخشودگی جرایم، فک رهن وثیقه و رفع مسدودی چک صیاد.
                </p>
              </div>

              <Link
                href="/samples/bank-letter"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-bold text-[#E5C158] border border-slate-700 transition-colors shrink-0"
              >
                <span>راهنمای جامع کلیه نامه‌های بانکی</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BANK_SUB_CLUSTER.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#E5C158]/60 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                      <Landmark className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-xs font-bold text-[#E5C158] inline-flex items-center gap-1 hover:underline"
                    >
                      <span>مشاهده متن و کپی</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/request?service=administrative-letter"
                      className="text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
                    >
                      تنظیم فوری
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. READY-TO-COPY ADMINISTRATIVE TEMPLATES (الگوهای متن آماده) */}
      {/* ------------------------------------------------------------- */}
      <section id="templates" className="py-14 sm:py-20 border-b border-slate-800/80 bg-slate-950/40">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-2 text-center md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>بانک متون آماده و رایگان</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                ۴ نمونه نامه اداری استاندارد و عمومی (با امکان کپی فوری)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                این الگوهای عمومی برای مکاتبات رایج اداری تدوین شده‌اند. می‌توانید با کلیک روی دکمه کپی، متن را برداشته و اطلاعات خود را در بخش‌های مشخص‌شده جایگزین نمایید.
              </p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {QUICK_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => setActiveTab(tmpl.id)}
                  className={`p-3 sm:p-4 rounded-xl text-right transition-all flex flex-col justify-between gap-2 border ${
                    activeTab === tmpl.id
                      ? 'bg-slate-900 border-[#E5C158] shadow-md shadow-[#E5C158]/10'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900/90 text-slate-400'
                  }`}
                >
                  <span className={`text-xs font-bold leading-snug ${activeTab === tmpl.id ? 'text-[#E5C158]' : 'text-slate-200'}`}>
                    {tmpl.title}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">{tmpl.category}</span>
                </button>
              ))}
            </div>

            {/* Active Template Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">{activeTemplate.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{activeTemplate.desc}</p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => handleCopy(activeTemplate.content, activeTemplate.id)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all border border-slate-700 active:scale-95"
                  >
                    {copiedId === activeTemplate.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">متن کپی شد!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#E5C158]" />
                        <span>کپی متن نامه</span>
                      </>
                    )}
                  </button>
                  <Link
                    href="/request?service=administrative-letter"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E5C158] hover:bg-[#d4b045] text-[#070B15] text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
                  >
                    <span>سفارش متن اختصاصی</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Document Text Box */}
              <div className="p-4 sm:p-6 rounded-xl bg-[#070B15]/90 border border-slate-800 text-slate-200 font-mono text-xs sm:text-sm leading-loose sm:leading-loose whitespace-pre-line text-right selection:bg-[#E5C158]/20">
                {activeTemplate.content}
              </div>

              {/* Note */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-200/90 leading-relaxed">
                <AlertCircle className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                <span>
                  نکته مهم دبیرخانه‌ای: بخش‌های داخل قلاب [...] را با اطلاعات واقعی پرونده خود کامل کنید. نامه‌ها را ترجیحاً در کاغذ سفید A4 تایپ نموده و از نوشتن دست‌نویس با خودکارهای چندرنگ خودداری فرمایید.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FORMULA & RULES (فرمول ۶ گانه نگارش نامه اداری رسمی) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-20 border-b border-slate-800/80">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>اصول و فنون نامه‌نگاری حرفه‌ای</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                فرمول طلایی و ارکان ۶ گانه یک نامه اداری بی‌نقص
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                رعایت این ۶ اصل تضمین می‌کند که نامه شما در دبیرخانه‌ها سرگردان نشده و مستقیماً روی میز تصمیم‌گیرنده نهایی قرار گیرد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  step: '۱',
                  title: 'سربرگ، تاریخ و شماره ثبتی',
                  desc: 'در گوشه بالا چپ، حتماً تاریخ، شماره و پیوست قید شود. در نامه‌های شرکتی، استفاده از سربرگ رسمی با شناسه ملی الزامی است.',
                },
                {
                  step: '۲',
                  title: 'القاب و عنوان دقیق سازمانی',
                  desc: 'عنوان دقیق سمت سازمانی گیرنده (مثلاً: شهردار محترم منطقه ۵ شهر مشهد) همراه با القاب محترمانه متناسب (جناب آقای / سرکار خانم مهندس/دکتر).',
                },
                {
                  step: '۳',
                  title: 'ورود سریع به اصل مطلب',
                  desc: 'پاراگراف اول باید در یک یا دو سطر خلاصه خواسته را بیان کند. از داستان‌سرایی و مقدمات غیرضروری به شدت پرهیز شود.',
                },
                {
                  step: '۴',
                  title: 'متن استدلالی و مستندات قانونی',
                  desc: 'بیان دلایل موجه همراه با ذکر شماره بخشنامه‌ها، مواد قانون، فیش‌های واریزی و شماره سوابق نامه‌های قبلی جهت اقناع کارشناس.',
                },
                {
                  step: '۵',
                  title: 'خواسته مشخص (هامش مورد انتظار)',
                  desc: 'صراحتاً مشخص کنید از مدیر مربوطه چه دستوری می‌خواهید (مثلاً: تقسیط در ۶ قسط / اعزام بازرس / صدور گواهی موقت).',
                },
                {
                  step: '۶',
                  title: 'امضا، مهر و اطلاعات تماس کامل',
                  desc: 'درج نام و نام خانوادگی، شماره ملی، آدرس دقیق، شماره تلفن همراه فعال و اثر انگشت یا مهر رسمی در انتهای صفحه سمت چپ.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative hover:border-[#E5C158]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E5C158]/10 text-[#E5C158] font-black text-sm flex items-center justify-center border border-[#E5C158]/20">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. GENERAL SAMPLE VS CUSTOM PERSUASION SECTION */}
      {/* ------------------------------------------------------------- */}
      <Container>
        <GeneralSampleVsCustomSection
          sampleTitle="نامه اداری و سازمانی"
          orderHref="/request?service=administrative-letter"
        />
      </Container>

      {/* ------------------------------------------------------------- */}
      {/* 7. THREE SERVICE DISCOVERY ENGINE */}
      {/* ------------------------------------------------------------- */}
      <ThreeServiceDiscovery />

      {/* ------------------------------------------------------------- */}
      {/* 8. FAQS (سوالات متداول نامه‌نگاری اداری) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-20 border-b border-slate-800/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E5C158]/10 text-[#E5C158] text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>پاسخ به ابهامات اداری</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                سوالات متداول درباره نگارش نامه‌های اداری و رسمی
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/80 border border-slate-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 hover:text-[#E5C158] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-100">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-[#E5C158]' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. BOTTOM CONVERSION CTA */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 via-[#070B15] to-slate-900 border border-[#E5C158]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,193,88,0.15),transparent_70%)] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C158]/10 text-[#E5C158] text-xs font-bold border border-[#E5C158]/20">
              <Sparkles className="w-4 h-4" />
              <span>پذیرش سفارشات فوری در سراسر کشور</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white">
              نامه‌ای می‌خواهید که در همان بار اول دستور اقدام بگیرد؟
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              کارشناسان اداری و حقوقی نگارش یار آماده‌اند نامه شما را با رعایت دقیق سلسله‌مراتب سازمانی، استناد به بخشنامه‌های جاری و لحن نافذ نگارش نمایند.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/request?service=administrative-letter"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E5C158] hover:bg-[#d4b045] text-[#070B15] font-black text-sm transition-all shadow-xl active:scale-95"
              >
                <span>ثبت آنلاین سفارش تنظیم نامه اداری</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <a
                href="https://eitaa.com/negaresh_yar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700"
              >
                <Send className="w-4 h-4 text-[#E5C158]" />
                <span>مشاوره سریع در ایتا</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. STICKY MOBILE CONVERSION BAR */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-slate-950/95 border-t border-slate-800 backdrop-blur-lg sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="space-y-0.5">
          <span className="text-[11px] font-bold text-[#E5C158] block">تنظیم نامه اداری اختصاصی</span>
          <span className="text-[10px] text-slate-400 block">تحویل فوری کمتر از ۲ ساعت</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:09915147789"
            className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700"
            aria-label="تماس تلفنی"
          >
            <PhoneCall className="w-4 h-4 text-[#E5C158]" />
          </a>
          <Link
            href="/request?service=administrative-letter"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#E5C158] text-[#070B15] text-xs font-black shadow-md active:scale-95"
          >
            <span>ثبت سفارش</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
