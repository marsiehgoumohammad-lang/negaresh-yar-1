'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  FileText,
  Search,
  Building2,
  Car,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Copy,
  Check,
  ArrowLeft,
  ChevronDown,
  Sparkles,
  PhoneCall,
  MessageCircle,
  HelpCircle,
  Clock,
  Layers,
  FileCode,
  ShieldAlert,
  KeyRound,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { generateMessengerLinks } from '@/lib/messengers-links';

export interface ContractItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  category: 'real-estate' | 'vehicle' | 'employment' | 'business' | 'settlement';
  categoryLabel: string;
  summary: string;
  legalBasis: string;
  keyClauses: string[];
  popular?: boolean;
}

export const ALL_CONTRACTS: ContractItem[] = [
  // 1. ملکی و ساختمانی (۷ قرارداد)
  {
    id: 'residential-lease',
    slug: 'residential-lease-contract',
    title: 'نمونه قرارداد اجاره آپارتمان مسکونی',
    badge: 'اجاره مسکونی (قانون ۷۶)',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'متن استاندارد و مستحکم قرارداد اجاره مسکونی مشمول قانون روابط موجر و مستأجر سال ۱۳۷۶ جهت تضمین دستور تخلیه فوری در شورای حل اختلاف.',
    legalBasis: 'قانون روابط موجر و مستأجر ۱۳۷۶، ماده ۴۶۶ به بعد قانون مدنی',
    keyClauses: ['تضمین تخلیه فوری ظرف یک هفته', 'وجه التزام تأخیر در تخلیه', 'تعیین تکلیف ودیعه و خسارات', 'امضای دو شاهد معتمد'],
    popular: true,
  },
  {
    id: 'commercial-lease',
    slug: 'commercial-lease-contract',
    title: 'نمونه قرارداد اجاره مغازه و واحد تجاری',
    badge: 'اجاره تجاری و مغازه',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'الگوی قرارداد اجاره اماکن تجاری با سلب صریح حق سرقفلی و کسب‌وپیشه برای موجر، تعیین دقیق نوع صنف مجاز و تضامین پرداخت اجاره‌بها.',
    legalBasis: 'قانون روابط موجر و مستأجر سال ۱۳۷۶ و مواد ۵۰۱ و ۵۰۲ قانون مدنی',
    keyClauses: ['اسقاط هرگونه حق سرقفلی و کسب و پیشه', 'محدودیت تغییر شغل و صنف', 'ضمانت تخلیه و چک تخلیه', 'مسئولیت مالیات و عوارض کسب'],
    popular: true,
  },
  {
    id: 'property-sales',
    slug: 'property-sales-contract',
    title: 'نمونه مبایعه‌نامه خرید و فروش ملک و آپارتمان',
    badge: 'مبایعه‌نامه قطعی ملک',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'متن جامع مبایعه‌نامه انتقال قطعی املاک مسکونی و تجاری با تعیین مراحل پرداخت ثمن، تاریخ حضور در دفترخانه، وجه التزام عدم انتقال سند و تحویل مبیع.',
    legalBasis: 'مواد ۳۳۸ تا ۳۹۵ قانون مدنی، ماده ۱۰ قانون مدنی',
    keyClauses: ['تاریخ دقیق حضور در دفتر اسناد رسمی', 'وجه التزام روزانه عدم حضور در دفترخانه', 'اسقاط کافه خیارات به جز تدلیس', 'تطبیق کد پستی و مشخصات ثبتی'],
    popular: true,
  },
  {
    id: 'mortgage-loan-lease',
    slug: 'mortgage-loan-lease-contract',
    title: 'نمونه قرارداد رهن کامل آپارتمان مسکونی',
    badge: 'رهن کامل بدون اجاره',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'قالب استاندارد رهن کامل مسکونی در قالب عقد ودیعه یا قرض‌الحسنه به همراه اجاره به شرط صلح ماهانه، برای پیشگیری از شبهات ربا و تخلیه فوری قانونی.',
    legalBasis: 'ماده ۱۰ قانون مدنی و قوانین فقهی اجاره به شرط قرض‌الحسنه',
    keyClauses: ['قالب صحیح قرض‌الحسنه به همراه سکنی', 'وجه التزام استرداد ودیعه توسط موجر', 'وجه التزام تخلیه به‌موقع توسط مستأجر', 'تعیین مسئولیت استهلاک و تعمیرات'],
  },
  {
    id: 'life-peace-deed',
    slug: 'life-peace-deed-contract',
    title: 'نمونه قرارداد صلح عمری ملک با شرط حق سکنی',
    badge: 'صلح عمری با حق سکنی',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'انتقال مالکیت عین ملک به فرزند یا اشخاص دیگر با حفظ حق انتفاع و سکونت مادام‌العمر برای صلح‌کننده و معافیت از انحصار وراثت و مالیات بر ارث.',
    legalBasis: 'مواد ۴۱ تا ۵۴ و مواد ۷۵۲ تا ۷۷۰ قانون مدنی',
    keyClauses: ['حق سکنی مادام‌العمر برای مصالح', 'شرط فسخ در صورت فوت متصالح قبل از مصالح', 'منع فروش و انتقال توسط متصالح در حیات مصالح', 'معافیت از تشریفات ارث'],
  },
  {
    id: 'goodwill-sarghofli-transfer',
    slug: 'goodwill-sarghofli-transfer-contract',
    title: 'نمونه قرارداد انتقال و صلح سرقفلی ملک تجاری',
    badge: 'صلح و انتقال سرقفلی',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'قرارداد انتقال رسمی حقوق سرقفلی مغازه و واحدهای تجاری با رعایت اذن مالک ملک، تشریفات سند صلح و تعیین تکلیف حقوق صنفی و بیمه‌ای.',
    legalBasis: 'مواد ۶ تا ۱۰ قانون روابط موجر و مستأجر سال ۱۳۷۶',
    keyClauses: ['ضرورت اخذ رضایت کتبی مالک عین', 'تعیین حق مالکانه', 'انتقال امتیازات برق، آب و گاز تجاری', 'سلب ادعاهای آتی مستأجر سابق'],
  },
  {
    id: 'partnership-in-construction',
    slug: 'partnership-in-construction-contract',
    title: 'نمونه قرارداد مشارکت در ساخت ساختمان',
    badge: 'مشارکت در ساخت و ساز',
    category: 'real-estate',
    categoryLabel: 'ملکی و ساختمانی',
    summary: 'قرارداد فوق‌تخصصی ساخت میان مالک زمین و سازنده با تعیین درصد قدرالسهم، جدول زمان‌بندی نازک‌کاری و سفت‌کاری، پیش‌فروش واحدها و ضمانت‌نامه‌های بانکی.',
    legalBasis: 'ماده ۱۰ قانون مدنی، قانون پیش‌فروش ساختمان مصوب ۱۳۸۹',
    keyClauses: ['ممنوعیت پیش‌فروش قبل از مرحله مشخص', 'جدول خسارت روزانه تأخیر سازنده', 'فهرست متریال مصرفی پیوست', 'نحوه انتقال تدریجی دانگ‌های سند زمین'],
    popular: true,
  },

  // 2. خودرو و وسایل نقلیه (۳ قرارداد)
  {
    id: 'car-sales',
    slug: 'car-sales-contract',
    title: 'نمونه مبایعه‌نامه خرید و فروش خودرو (قولنامه ماشین)',
    badge: 'قولنامه رسمی خودرو',
    category: 'vehicle',
    categoryLabel: 'خودرو و وسایل نقلیه',
    summary: 'فرمت استاندارد خرید و فروش خودرو با تفکیک دقیق مسئولیت تخلفات رانندگی تا لحظه تحویل، مهلت تعویض پلاک، کارشناسی رنگ و موتور و تسویه کامل.',
    legalBasis: 'مواد ۳۳۸ تا ۳۶۰ قانون مدنی و قوانین راهنمایی و رانندگی',
    keyClauses: ['ساعت و دقیقه دقیق تحویل خودرو', 'مسئولیت جرایم و تخلفات تا قبل از تحویل', 'مهلت تعویض پلاک و وکالت‌نامه', 'اعتبار برگه کارشناسی فنی و بدنه'],
    popular: true,
  },
  {
    id: 'motorcycle-sales',
    slug: 'motorcycle-sales-contract',
    title: 'نمونه قرارداد خرید و فروش موتورسیکلت (قولنامه رسمی)',
    badge: 'قولنامه موتورسیکلت',
    category: 'vehicle',
    categoryLabel: 'خودرو و وسایل نقلیه',
    summary: 'مبایعه‌نامه قطعی انواع موتورسیکلت‌های شهری، اسپرت و برقی با بررسی شماره تنه، موتور، برگه سبز، بیمه‌نامه و تعهدات فک پلاک.',
    legalBasis: 'ماده ۱۰ و عقد بیع قانون مدنی و بخشنامه‌های راهور',
    keyClauses: ['انطباق شماره تنه و سیلندر با مدارک', 'تعهد تحویل کلاه ایمنی و مدارک اصلی', 'مسئولیت حوادث تا تحویل فیزیکی', 'تعهد تعویض پلاک فوری'],
  },
  {
    id: 'car-allocation-transfer',
    slug: 'car-allocation-transfer-contract',
    title: 'نمونه قرارداد واگذاری و صلح حواله خودرو (سامانه یکپارچه)',
    badge: 'صلح و واگذاری حواله',
    category: 'vehicle',
    categoryLabel: 'خودرو و وسایل نقلیه',
    summary: 'متن دقیق صلح حقوق مکتسبه و حواله ثبت‌نامی خودرو با وکالت‌نامه‌های جامع بلاعزل، سفته‌های تضمینی و تعهدات تحویل خودرو پس از فاکتور شدن.',
    legalBasis: 'مواد ۷۵۲ تا ۷۷۰ قانون مدنی و مواد ۶۵۶ تا ۶۸۳ وکالت',
    keyClauses: ['وکالت بلاعزل کاری و انتقال سند', 'سفته معادل ارزش روز خودرو به عنوان ضمانت', 'تعهد حضور در نمایندگی جهت تحویل', 'تعیین مسئولیت افزایش قیمت کارخانه'],
    popular: true,
  },

  // 3. کاری و پیمانکاری (۴ قرارداد)
  {
    id: 'employment-fixed-term',
    slug: 'employment-fixed-term-contract',
    title: 'نمونه قرارداد کار موقت و استخدام پرسنل',
    badge: 'قرارداد کار موقت پرسنل',
    category: 'employment',
    categoryLabel: 'کاری و پیمانکاری',
    summary: 'قرارداد رسمی استخدام با رعایت کامل قانون کار، تعیین حقوق پایه، بن، مسکن، حق اولاد، ساعات کار، مرخصی‌ها و تسویه‌حساب دوره‌ای برای کارفرمایان.',
    legalBasis: 'مواد ۷، ۹، ۱۰ و ۲۴ قانون کار جمهوری اسلامی ایران',
    keyClauses: ['تعیین دقیق مدت قرارداد و عدم تمدید خودکار', 'تفکیک آیتم‌های مزایای قانونی کارگری', 'تعهدات حفظ اموال و حسن انجام کار', 'تسویه‌حساب حق سنوات و پاداش سالانه'],
    popular: true,
  },
  {
    id: 'construction-contractor',
    slug: 'construction-contractor-contract',
    title: 'نمونه قرارداد پیمانکاری اجرای ساختمان (دستمزدی)',
    badge: 'پیمانکاری دستمزدی ساختمان',
    category: 'employment',
    categoryLabel: 'کاری و پیمانکاری',
    summary: 'قرارداد پیمانکاری دستمزدی برای پروژه‌های ساختمانی (تخریب، اسکلت، گچ‌کاری، تأسیسات) با رعایت مقررات ایمنی، بیمه حوادث کار و عدم رابطه کارگری.',
    legalBasis: 'مواد ۱۰ و ۲۱۹ قانون مدنی و ماده ۱۳ قانون کار',
    keyClauses: ['مسئولیت مطلق ایمنی پرسنل بر عهده پیمانکار', 'تهیه بیمه‌نامه مسئولیت مدنی کارفرما', 'حسن انجام کار و کسر ۱۰٪ سپرده بیمه', 'ضمانت عدم ایجاد ادعای کارگری علیه کارفرما'],
  },
  {
    id: 'jaala-service',
    slug: 'jaala-service-contract',
    title: 'نمونه قرارداد جعاله کاری (انجام کار معین در ازای پاداش)',
    badge: 'جعاله کاری و نتیجه‌محور',
    category: 'employment',
    categoryLabel: 'کاری و پیمانکاری',
    summary: 'الگوی قانونی عقد جعاله برای پرداخت حق‌الزحمه و پاداش تنها در صورت حصول نتیجه نهایی، معاف از مقررات کارگری و بیمه تأمین اجتماعی اجباری.',
    legalBasis: 'مواد ۵۶۱ تا ۵۷۰ قانون مدنی (باب جعاله)',
    keyClauses: ['پرداخت جعل منوط به تحقق قطعی نتیجه', 'تعریف دقیق معیار اتمام کار', 'جواز رجوع جاعل قبل از شروع عمل', 'عدم شمول مقررات روابط کارگر و کارفرما'],
  },
  {
    id: 'web-development',
    slug: 'web-development-contract',
    title: 'نمونه قرارداد طراحی وب‌سایت و توسعه نرم‌افزار',
    badge: 'طراحی سایت و نرم‌افزار',
    category: 'employment',
    categoryLabel: 'کاری و پیمانکاری',
    summary: 'متن استاندارد توسعه وب‌سایت، فروشگاه اینترنتی و اپلیکیشن موبایل با تعریف دقیق پروپوزال، مراحل پذیرش تسک‌ها (UAT)، گارانتی باگ‌ها و مالکیت کدهای منبع.',
    legalBasis: 'ماده ۱۰ قانون مدنی، قانون حمایت از حقوق پدیدآورندگان نرم‌افزارهای رایانه‌ای',
    keyClauses: ['مراحل پرداخت متناسب با دلیوری فازها', 'مالکیت سورس‌کد و دیتابیس برای کارفرما', 'دوره پشتیبانی و رفع باگ رایگان ۳ تا ۶ ماه', 'محدودیت تعداد درخواست‌های بازطراحی و تغییر اسکوپ'],
    popular: true,
  },

  // 4. کسب‌وکار، سرمایه‌گذاری و شراکت (۸ قرارداد)
  {
    id: 'business-partnership',
    slug: 'business-partnership-contract',
    title: 'نمونه قرارداد مشارکت مدنی و شراکت در کسب‌وکار',
    badge: 'مشارکت مدنی کسب‌وکار',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قرارداد شراکت دو یا چند نفر برای راه‌اندازی یا توسعه فروشگاه، کارگاه یا شرکت بدون ثبت شرکت رسمی، با تعیین میزان سرمایه، تقسیم سود و شیوه خروج شریک.',
    legalBasis: 'مواد ۵۷۱ تا ۶۰۶ قانون مدنی (عقد شرکت و مشارکت مدنی)',
    keyClauses: ['درصد سهم‌الشرکه و تقسیم سود و زیان', 'تعیین مدیر اجرایی و حدود اختیارات مالی', 'قواعد ورود شریک جدید یا خروج شریک فعلی', 'نحوه ارزش‌گذاری کسب‌وکار هنگام انحلال'],
    popular: true,
  },
  {
    id: 'capital-investment-profit-sharing',
    slug: 'capital-investment-profit-sharing-contract',
    title: 'نمونه قرارداد تأمین سرمایه و مشارکت در سود (مضاربه)',
    badge: 'مشارکت در سود و تأمین سرمایه',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'جایگزین شرعی و قانونی قرض با بهره برای جذب سرمایه‌گذار در امور تجاری و تولیدی، با تضمین اصل سرمایه و تقسیم ماهانه یا دوره‌ای سود واقعی حاصله.',
    legalBasis: 'مواد ۵۴۶ تا ۵۶۰ قانون مدنی (عقد مضاربه) و عقود نامعین ماده ۱۰',
    keyClauses: ['صلح حق مدیریت و تفویض عملیات تجاری', 'سفته معتبر جهت تضمین حسن نگهداری اصل سرمایه', 'گزارش‌دهی مالی شفاف ماهانه به سرمایه‌گذار', 'پیش‌بینی فرمول سهم از سود تجاری'],
    popular: true,
  },
  {
    id: 'nda-confidentiality',
    slug: 'nda-confidentiality-contract',
    title: 'نمونه قرارداد محرمانگی و عدم افشای اطلاعات (NDA)',
    badge: 'عدم افشای اطلاعات (NDA)',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قرارداد حقوقی یک‌طرفه و دوجانبه برای محافظت از ایده‌ها، لیست مشتریان، فرمول‌ها، سورس کدها و اسرار تجاری در جلسات همکاری و استخدامی.',
    legalBasis: 'ماده ۱۰ قانون مدنی و مواد ۶۴ و ۶۵ قانون تجارت الکترونیکی',
    keyClauses: ['تعریف دقیق اطلاعات محرمانه تجاری', 'مدت زمان پایبندی به محرمانگی حتی پس از قطع همکاری', 'خسارت مقطوع و سنگین در صورت نقض محرمانگی', 'منع تماس با مشتریان و کارمندان طرف مقابل'],
    popular: true,
  },
  {
    id: 'commercial-exclusive-consulting',
    slug: 'commercial-exclusive-consulting-contract',
    title: 'نمونه قرارداد ارائه خدمات مشاوره مدیریت و کسب‌وکار',
    badge: 'مشاوره مدیریت و کسب‌وکار',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قرارداد تخصصی مشاوره سازمانی، بازاریابی، توسعه محصول و مدیریت ارشد با شرح جلسات، ساعات اختصاصی و منع شمول تعهدات استخدامی کارگری.',
    legalBasis: 'ماده ۱۰ و ماده ۲۱۹ قانون مدنی',
    keyClauses: ['استقلال شغلی مشاور و عدم رابطه کارگری', 'مالکیت فکری دستاوردها و مستندات تدوین‌شده', 'حق‌الزحمه ثابت ماهانه یا پورسانت از نتیجه', 'شروط فسخ زودهنگام با اخطار کتبی'],
  },
  {
    id: 'sales-agency-distribution',
    slug: 'sales-agency-distribution-contract',
    title: 'نمونه قرارداد اعطای نمایندگی و عاملیت فروش کالا',
    badge: 'نمایندگی و عاملیت فروش',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قالب قرارداد نمایندگی انحصاری یا غیرانحصاری توزیع محصولات کارخانجات در استان یا شهرستان معین، با سقف تارگت فروش و تضامین پرداخت کالا.',
    legalBasis: 'قانون تجارت، مواد ۱۰ و ۳۵۷ به بعد قانون تجارت',
    keyClauses: ['محدوده جغرافیایی مجاز فعالیت نماینده', 'حداقل تارگت فروش ماهانه برای حفظ انحصار', 'چک یا ضمانت‌نامه بانکی حسن انجام تعهدات', 'شرایط برگشت کالا و خدمات پس از فروش'],
  },
  {
    id: 'share-transfer-agreement',
    slug: 'share-transfer-agreement-contract',
    title: 'نمونه قرارداد انتقال و واگذاری سهام شرکت',
    badge: 'صلح و انتقال سهام شرکت',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قرارداد واگذاری سهام با نام و بی‌نام در شرکت‌های سهامی خاص و شرکت‌های با مسئولیت محدود با رعایت استعلام‌های مالیاتی و ثبت صورت‌جلسه در اداره ثبت شرکت‌ها.',
    legalBasis: 'لایحه اصلاحی قسمتی از قانون تجارت ۱۳۴۷ و مواد ۱۰۲ و ۱۰۳ قانون تجارت',
    keyClauses: ['نقل و انتقال قبل یا بعد از اخذ گواهی نقل‌وانتقال دارایی', 'انتقال کلیه حقوق مادی و معنوی سهام', 'تعهد تسویه دیون و بدهی‌های مالیاتی دوره تصدی', 'وکالت ثبت صورت‌جلسه در سامانه ثبت شرکت‌ها'],
  },
  {
    id: 'gold-installment-sales',
    slug: 'gold-installment-sales-contract',
    title: 'نمونه قرارداد فروش اقساطی طلا و جواهر',
    badge: 'فروش اقساطی طلا و مصنوعات',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قرارداد استاندارد برای گالری‌ها و فروشندگان طلا جهت فروش اقساطی مصنوعات طلا و سکه، با محاسبه دقیق وزن، فاکتور معتبر و تضامین چک صیادی.',
    legalBasis: 'ماده ۱۰ قانون مدنی و بخشنامه‌های اتحادیه طلا و جواهر',
    keyClauses: ['فروش قطعی بر مبنای نرخ مصوب روز معامله', 'چک‌های صیادی معتبر برای هر قسط', 'شرط حال شدن تمام اقساط در صورت برگشت یک چک', 'مالکیت تا لحظه تسویه نهایی'],
  },
  {
    id: 'influencer-social-media-advertising',
    slug: 'influencer-social-media-advertising-contract',
    title: 'نمونه قرارداد تبلیغات اینفلوئنسری و اینستاگرام',
    badge: 'تبلیغات اینفلوئنسری و مجازی',
    category: 'business',
    categoryLabel: 'کسب‌وکار و شراکت',
    summary: 'قرارداد جامع کمپین‌های اینستاگرامی و یوتیوبی با تعیین ساعت انتشار استوری، پست، پین شدن، عدم حذف محتوا و رعایت قوانین نظارتی فضای مجازی.',
    legalBasis: 'ماده ۱۰ قانون مدنی و مقررات سازمان فناوری اطلاعات',
    keyClauses: ['حداقل مدت ماندگاری استوری (۲۴ ساعت) یا پست (دائمی/موقت)', 'تأیید سناریو پیش از انتشار عمومی', 'جریمه دیرکرد انتشار در ساعت پیک بازدید', 'منع انتشار تبلیغ رقیب مستقیم در بازه کمپین'],
  },

  // 5. صلح، توافق و تعهدات مالی و خانوادگی (۶ قرارداد)
  {
    id: 'civil-settlement-compromise',
    slug: 'civil-settlement-compromise-contract',
    title: 'نمونه قرارداد صلح و سازش دعاوی مالی و کیفری',
    badge: 'صلح و سازش و مختومه کردن پرونده',
    category: 'settlement',
    categoryLabel: 'صلح، توافق و تعهدات',
    summary: 'قرارداد محکم صلح و سازش برای بستن قطعی پرونده‌های حقوقی و کیفری در دادسرا، شورای حل اختلاف یا کلانتری با اسقاط تمام ادعاها و اعلام رضایت بی‌قیدوشرط.',
    legalBasis: 'مواد ۷۵۲ تا ۷۷۰ قانون مدنی (عقد صلح) و ماده ۲۳ قانون مجازات اسلامی',
    keyClauses: ['اعلام رضایت قطعی و غیرقابل بازگشت در پرونده ثنا', 'اسقاط هرگونه ادعای مالی و کیفری آتی', 'تعیین عوض صلح و تعهدات متقابل طرفین', 'مختومه اعلام شدن فوری پرونده اجرایی'],
    popular: true,
  },
  {
    id: 'mutual-divorce-settlement',
    slug: 'mutual-divorce-settlement-agreement',
    title: 'نمونه توافق‌نامه و صورت‌جلسه طلاق توافقی',
    badge: 'توافق‌نامه طلاق توافقی',
    category: 'settlement',
    categoryLabel: 'صلح، توافق و تعهدات',
    summary: 'صورت‌جلسه مکتوب توافقات زوجین در مورد مهریه، جهیزیه، اجرت‌المثل ایام زوجیت، حضانت فرزندان مشترک و زمان‌های ملاقات قبل از ورود به دادگاه خانواده.',
    legalBasis: 'مواد ۱۱۱۹ و ۱۱۳۳ قانون مدنی و قانون حمایت خانواده مصوب ۱۳۹۱',
    keyClauses: ['تعیین تکلیف بذل یا دریافت مهریه', 'حضانت و نفقه فرزندان تا سنین قانونی', 'استرداد جهیزیه بر اساس سیاهه', 'تعهد حضور در جلسه غربالگری و دادگاه'],
    popular: true,
  },
  {
    id: 'guarantee-check-escrow',
    slug: 'guarantee-check-escrow-contract',
    title: 'نمونه قرارداد و رسید امانت چک ضمانتی',
    badge: 'رسید و امانت چک ضمانت',
    category: 'settlement',
    categoryLabel: 'صلح، توافق و تعهدات',
    summary: 'رسید مکتوب امانت چک صیادی ضمانتی با درج شماره ۱۶ رقمی صیاد، بانک عامل، هدف از صدور ضمانت و شرایط استرداد لاشه چک پس از پایان تعهد.',
    legalBasis: 'مواد ۶۷۳ و ۶۷۴ قانون مجازات اسلامی (خیانت در امانت) و قانون صدور چک',
    keyClauses: ['ثبت شناسه ۱۶ رقمی چک صیاد بنفش', 'تصریح بر ضمانتی بودن و عدم قابلیت نقد شدن بدون احراز تخلف', 'ممنوعیت خرج کردن یا انتقال چک به اشخاص ثالث', 'تعهد استرداد لاشه چک در صورت انجام تعهد اصلی'],
    popular: true,
  },
  {
    id: 'interest-free-loan',
    slug: 'interest-free-loan-contract',
    title: 'نمونه قرارداد قرض‌الحسنه نقدی بدون بهره',
    badge: 'قرض‌الحسنه نقدی بدون بهره',
    category: 'settlement',
    categoryLabel: 'صلح، توافق و تعهدات',
    summary: 'متن حقوقی پرداخت وجه قرض‌الحسنه بین اشخاص حقیقی یا اعضای فامیل با درج شماره شبا، تاریخ دقیق بازپرداخت، ضمانت چک و شرط داوری مسالمت‌آمیز.',
    legalBasis: 'مواد ۶۴۸ تا ۶۵۳ قانون مدنی (عقد قرض)',
    keyClauses: ['تصریح بر قرض‌الحسنه و عدم تعلق هرگونه ربا و سود', 'تاریخ دقیق سررسید و شماره حساب استرداد', 'سفته یا چک تضمینی بازپرداخت', 'وجه التزام روزانه تأخیر تأدیه بر اساس شاخص تورم بانک مرکزی'],
  },
  {
    id: 'liability-waiver-release',
    slug: 'liability-waiver-release-contract',
    title: 'نمونه قرارداد سلب مسئولیت و برائت ذمه',
    badge: 'سلب مسئولیت و برائت ذمه',
    category: 'settlement',
    categoryLabel: 'صلح، توافق و تعهدات',
    summary: 'فرم حقوقی برائت ذمه و سلب مسئولیت در وقایع ورزشی، دوره‌های آموزشی حساس، برنامه‌های گردشگری و حوادث شغلی جهت ایمن‌سازی حقوقی برگزارکنندگان.',
    legalBasis: 'مواد ۲۸۹ تا ۲۹۱ قانون مدنی (ابراء) و ماده ۴۹۵ قانون مجازات اسلامی',
    keyClauses: ['اقرار به آگاهی کامل از خطرات و عوارض احتمالی', 'اسقاط حق شکایت کیفری و ادعای دیه و خسارت', 'تعهد به سلامت کامل جسمانی و روانی', 'امضای رسمی با اثر انگشت در کمال صحت عقل'],
  },
  {
    id: 'administrative-power-of-attorney',
    slug: 'administrative-power-of-attorney-contract',
    title: 'نمونه قرارداد وکالت کاری و امور اداری',
    badge: 'وکالت کاری و امور اداری',
    category: 'settlement',
    categoryLabel: 'صلح، توافق و تعهدات',
    summary: 'الگوی تفویض اختیارات اداری جهت پیگیری پرونده‌ها در شهرداری، دارایی، ثبت احوال و دانشگاه بدون دادن حق انتقال اموال یا دخل و تصرف مالی.',
    legalBasis: 'مواد ۶۵۶ تا ۶۸۳ قانون مدنی (عقد وکالت)',
    keyClauses: ['سلب حق انتقال، صلح یا دریافت ثمن اموال موکل', 'تعیین دقیق سازمان‌ها و مراجع اداری مجاز', 'مدت زمان اعتبار وکالت کاری', 'تعهد وکیل به ارائه صورت‌حساب اقدامات اداری انجام‌شده'],
  },
];

const CATEGORY_TABS = [
  { key: 'all', label: 'همه قراردادها (۲۸)', icon: Layers },
  { key: 'real-estate', label: 'ملکی و ساختمانی (۷)', icon: Building2 },
  { key: 'vehicle', label: 'خودرو و وسایل نقلیه (۳)', icon: Car },
  { key: 'employment', label: 'کاری و پیمانکاری (۴)', icon: Briefcase },
  { key: 'business', label: 'کسب‌وکار و سرمایه‌گذاری (۸)', icon: TrendingUp },
  { key: 'settlement', label: 'صلح و تعهدات مالی (۶)', icon: ShieldCheck },
];

export function ContractsPillarClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messengerLinks = generateMessengerLinks(
    'سلام، در زمینه مشاوره و تنظیم تخصصی قرارداد راهنمایی می‌خواستم.'
  );

  const filteredContracts = useMemo(() => {
    return ALL_CONTRACTS.filter((item) => {
      const matchCat =
        activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.keyClauses.some((k) => k.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyTitle = (id: string, text: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const contractsFaqs = [
    {
      q: 'آیا قرارداد دستی نوشته شده بین دو نفر با امضای دو شاهد در دادگاه معتبر است؟',
      a: 'بله. بر اساس ماده ۱۰ قانون مدنی (آزادی قراردادها) و اصل صحت معاملات، هرگونه توافق مکتوب که مخالف صریح قوانین آمره نباشد، سند عادی کاملاً معتبر است. همچنین بر اساس قانون روابط موجر و مستأجر سال ۱۳۷۶، اگر قرارداد اجاره عادی به امضای دو شاهد معتمد برسد، از مزیت دستور تخلیه فوری ظرف یک هفته (بدون نیاز به دادرسی طولانی) برخوردار خواهد شد.',
    },
    {
      q: 'تفاوت قرارداد اولیه با دعاوی قراردادی (مثل دادخواست ابطال یا فسخ) چیست؟',
      a: 'قرارداد (مانند اجاره‌نامه، مبایعه‌نامه ملک یا قرارداد مشارکت) توافق اولیه‌ای است که برای تعیین حقوق و تعهدات و پیشگیری از نزاع نوشته می‌شود. در حالی که دعاوی قراردادی (نظیر دادخواست فسخ، دادخواست اعلام بطلان معامله، الزام به تنظیم سند رسمی، یا دستور تخلیه) زمانی مطرح می‌شوند که اختلافی بروز کرده و یکی از طرفین تعهد خود را زیر پا گذاشته است. ما در نگارش یار هم متون خام قراردادها را ارائه می‌دهیم و هم لوایح و دادخواست‌های مربوط به اختلافات قراردادی را پوشش داده‌ایم.',
    },
    {
      q: 'وجه التزام روزانه چیست و چگونه در قرارداد درج شود تا دادگاه آن را ابطال نکند؟',
      a: 'وجه التزام، خسارت مقطوع قراردادی است که بر اساس ماده ۲۳۰ قانون مدنی دادگاه نمی‌تواند مبلغ آن را کم یا زیاد کند. برای مصونیت، باید عبارت «به عنوان خسارت مقطوع تأخیر در انجام تعهد روزانه مبلغ ... ریال علاوه بر اصل تعهد» قید شود و مشخص گردد که پرداخت خسارت مانع از اجرای اصل تعهد نخواهد بود.',
    },
    {
      q: 'چرا گنجاندن شرط داوری در قراردادهای کسب‌وکار و مشارکت یک مزیت بزرگ است؟',
      a: 'رسیدگی در دادگستری ممکن است ماه‌ها یا سال‌ها به طول بینجامد و نیازمند نوبت‌های طولانی دادگاه است. با تعیین داور مرضی‌الطرفین در متن قرارداد، هرگونه اختلاف ظرف چند هفته با هزینه بسیار کمتر و تخصص بالاتر داور حل‌وفصل شده و رأی داور مستقیماً از طریق دایره اجرای احکام دادگستری لازم‌الاجرا خواهد بود.',
    },
    {
      q: 'آیا اسقاط کافه خیارات به این معنی است که تحت هیچ شرایطی نمی‌توان معامله را برهم زد؟',
      a: 'خیر. حتی با اسقاط کافه خیارات، خیار تدلیس (فریبکاری عمدی) و بطلان ذاتی معامله (مانند عدم اهلیت، معامله فضولی بدون تنفیذ یا مستحق‌للغیر درآمدن مبیع) ساقط نمی‌شود. با این حال توصیه می‌شود برای حفظ امنیت مالی، عبارت «به استثنای خیار تدلیس و خیار تخلف از شرط» قید گردد.',
    },
    {
      q: 'خدمات تخصصی نگارش یار در زمینه تنظیم و بازبینی قراردادها شامل چه مواردی است؟',
      a: 'تیم حقوقی نگارش یار علاوه بر ارائه ۲۸ الگوی استاندارد و رایگان، خدمات تدوین بندهای سفارشی، درج شروط سخت‌گیرانه عدم افشای اطلاعات، تعیین تضامین سفته و چک صیادی، بررسی پیش‌نویس‌های ارائه‌شده از طرف مقابل و بازبینی ریسک‌های حقوقی را به صورت کاملاً غیرحضوری با پشتیبانی مستقیم مشاورین حقوقی ارائه می‌دهد.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10 selection:bg-[#E5C158] selection:text-[#070B15]">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION & PILLAR IDENTITY */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 border-b border-slate-800/80 bg-gradient-to-b from-[#0C1222] via-[#070B15] to-[#070B15] rounded-3xl">
        {/* Ambient Radial Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.20)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <Container className="relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 inline-block">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li>
                <Link href="/samples" className="hover:text-white transition-colors">
                  بانک نمونه اسناد
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-[#E5C158] font-semibold">مرجع جامع قراردادها و توافق‌نامه‌ها</li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs md:text-sm font-semibold mb-6 shadow-lg shadow-[#E5C158]/5">
            <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
            <span>بانک مرجع ۲۸ نمونه قرارداد و توافق‌نامه رسمی سال ۱۴۰۵</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight md:leading-tight max-w-4xl mx-auto tracking-tight mb-6">
            مرجع تخصصی نمونه قراردادها، مبایعه‌نامه‌ها و توافق‌نامه‌های رسمی
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed md:leading-loose font-normal mb-8">
            مجموعه کامل و دسته‌بندی‌شده از ۲۸ نمونه قرارداد استاندارد ملکی، خودرویی، کاری و پیمانکاری، مشارکت تجاری و صلح‌نامه، تدوین‌شده مطابق با قانون مدنی و قوانین تجاری ایران به همراه امکان دانلود و کپی رایگان و مشاوره تنظیم اختصاصی.
          </p>

          {/* Fast Feature Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto mb-8 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              مستند به ماده ۱۰ و قانون مدنی
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              شامل شروط ضد ادعا و وجه التزام
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              رعایت کامل فرمت تخلیه فوری ۱۳۷۶
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              تنظیم و بازبینی توسط کارشناسان حقوقی
            </span>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative mb-8">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در قراردادهای ملکی، اجاره، خودرو، استخدام، مشارکت، NDA..."
                className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#E5C158] transition-colors shadow-xl"
              />
              <Search className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded"
                >
                  پاکسازی
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#E5C158] text-[#070B15] font-bold shadow-lg shadow-[#E5C158]/20'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#070B15]' : 'text-[#E5C158]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <Container className="space-y-16 sm:space-y-24">
        {/* ---------------------------------------------------- */}
        {/* 2. CONTRACTS GRID SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#E5C158]" />
                <span>لیست الگوهای قرارداد ({filteredContracts.length})</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                برای مشاهده متن کامل، شروط اختصاصی، نکات پیشگیری از کلاهبرداری و کپی بر روی هر قرارداد کلیک کنید.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
              <span>مرجع قوانین:</span>
              <strong className="text-slate-200">قانون مدنی و تجارت ایران</strong>
            </div>
          </div>

          {filteredContracts.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800/60 p-8">
              <AlertTriangle className="w-10 h-10 text-[#E5C158] mx-auto mb-3 opacity-80" />
              <p className="text-white font-semibold mb-1">قراردادی با عبارت مورد نظر شما یافت نشد.</p>
              <p className="text-xs text-slate-400 mb-4">می‌توانید فیلتر دسته‌بندی را تغییر دهید یا کلمه دیگری جستجو نمایید.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-white hover:bg-slate-700 transition-colors"
              >
                مشاهده همه ۲۸ قرارداد
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContracts.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-[#E5C158]/50 transition-all duration-300 p-5 flex flex-col justify-between group shadow-lg hover:shadow-[#E5C158]/5"
                >
                  <div className="space-y-3.5">
                    {/* Card Header: Badge & Category */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E5C158]/10 text-[#E5C158] border border-[#E5C158]/20 text-[11px] font-semibold">
                        {item.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-[#E5C158] transition-colors leading-snug">
                      <Link href={`/samples/${item.slug}`} className="focus:outline-none">
                        {item.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>

                    {/* Legal Basis Pill */}
                    <div className="flex items-start gap-1.5 pt-1 text-[11px] text-slate-400 bg-slate-950/60 p-2 rounded-lg border border-slate-900">
                      <Scale className="w-3.5 h-3.5 text-[#E5C158] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.legalBasis}</span>
                    </div>

                    {/* Key Clauses Tags */}
                    <div className="pt-1">
                      <p className="text-[10px] text-slate-500 font-semibold mb-1.5">بندهای کلیدی:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.keyClauses.slice(0, 3).map((clause, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50"
                          >
                            {clause}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleCopyTitle(item.id, `${item.title}\nhttps://www.negaresh-yar.ir/samples/${item.slug}`)}
                      title="کپی لینک و عنوان سند"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400">کپی شد</span>
                        </>
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <Link
                      href={`/samples/${item.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-[#E5C158] text-white hover:text-[#070B15] text-xs font-semibold transition-all group-hover:bg-[#E5C158] group-hover:text-[#070B15]"
                    >
                      <span>مشاهده و کپی متن کامل</span>
                      <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ---------------------------------------------------- */}
        {/* 3. CORE COMPARISON: CONTRACT VS CONTRACTUAL DISPUTES */}
        {/* ---------------------------------------------------- */}
        <section className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              تفکیک هوشمند در سئو و حقوق
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              تفاوت اساسی «قرارداد اولیه» با «دعاوی ناشی از قرارداد»
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              یکی از رایج‌ترین اشتباهات کاربران، جستجوی همزمان متن قرارداد با دادخواست‌های دادرسی است. شناخت این دو سطح از رابطه حقوقی به شما کمک می‌کند مسیر درستی را انتخاب کنید:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box 1: Pre-Dispute (Contracts) */}
            <div className="rounded-2xl bg-slate-950/80 border border-emerald-500/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  ۱
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    سطح اول: تنظیم قرارداد (مرحله پیشگیری)
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">قبل از وقوع هرگونه اختلاف و دعوا</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                قرارداد سندی است که دو یا چند طرف با اراده آزاد خود برای ایجاد یک رابطه حقوقی، مبادله پول و کالا یا انجام تعهد منعقد می‌کنند. هدف اصلی یک قرارداد خوب، بستن راه‌های سوءاستفاده، مشخص کردن مواعد و تعیین ضمانت‌های اجرایی شفاف است.
              </p>

              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
                <p className="font-semibold text-slate-200">الگوهای این دسته در همین صفحه:</p>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>مبایعه‌نامه خرید و فروش ملک یا آپارتمان</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>قرارداد اجاره مغازه و مسکونی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>قرارداد مشارکت مدنی، استخدام و پیمانکاری</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box 2: Post-Dispute (Litigation / Petitions) */}
            <div className="rounded-2xl bg-slate-950/80 border border-rose-500/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
                  ۲
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    سطح دوم: دعاوی قراردادی (مرحله درمان قضایی)
                  </h3>
                  <p className="text-xs text-rose-400 font-medium">هنگام نقض عهد، عدم تحویل مبیع یا کلاهبرداری</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                اگر طرف مقابل ملک را تحویل نداد، سند رسمی را انتقال نداد، تخلیه نکرد یا قرارداد از ریشه باطل یا دارای غبن فاحش بود، دیگر جای امضای قرارداد نیست؛ بلکه باید در مراجع قضایی دادخواست یا شکواییه ثبت کنید.
              </p>

              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
                <p className="font-semibold text-slate-200">نمونه دادخواست‌های متناظر در سامانه ثنا:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <Link
                    href="/samples/official-deed-compulsion-petition"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-[#E5C158] transition-colors block"
                  >
                    دادخواست الزام به تنظیم سند رسمی ←
                  </Link>
                  <Link
                    href="/samples/eviction-expired-lease"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-[#E5C158] transition-colors block"
                  >
                    دستور تخلیه فوری ملک استیجاری ←
                  </Link>
                  <Link
                    href="/samples/contract-nullification-petition"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-[#E5C158] transition-colors block"
                  >
                    دادخواست ابطال و بطلان قرارداد ←
                  </Link>
                  <Link
                    href="/samples/contract-cancellation-notice-petition"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-[#E5C158] transition-colors block"
                  >
                    فسخ معامله و اظهارنامه رسمی ←
                  </Link>
                  <Link
                    href="/samples/damages-claim-petition"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-[#E5C158] transition-colors block"
                  >
                    مطالبه خسارت قراردادی (وجه التزام) ←
                  </Link>
                  <Link
                    href="/samples/rent-equivalent-claim"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-[#E5C158] transition-colors block"
                  >
                    مطالبه اجرت‌المثل ایام تصرف ←
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 4. LEGAL CHECKLIST: 10 GOLDEN RULES FOR DRAFTING */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-bold mb-3">
              <KeyRound className="w-3.5 h-3.5" />
              دانش کاربردی حقوقی
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white mb-3">
              ۱۰ فرمان حقوقی در تنظیم انواع قراردادهای رسمی
            </h2>
            <p className="text-xs sm:text-base text-slate-300">
              رعایت این نکات کلیدی، احتمال بروز اختلاف یا بن‌بست‌های حقوقی را در هر قراردادی به حداقل ممکن می‌رساند:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                num: '۰۱',
                title: 'احراز کامل هویت و بررسی ثنای طرف مقابل',
                desc: 'همیشه اصل کارت ملی و شناسنامه طرف را با متن قرارداد تطبیق دهید و از احراز هویت در سامانه ثنا قوه قضاییه اطمینان حاصل کنید.',
              },
              {
                num: '۰۲',
                title: 'تعیین دقیق و جزءبه‌جزء موضوع و مشخصات مبیع',
                desc: 'در املاک پلاک ثبتی، قطعه، بخش و متراژ دقیق طبق سند؛ در خودرو شماره شاسی و موتور؛ و در خدمات شرح کامل تسک‌ها را بنویسید.',
              },
              {
                num: '۰۳',
                title: 'نحوه پرداخت ثمن و درج شماره حساب‌های واریزی',
                desc: 'تاریخ و مبلغ هر چک یا فیش واریزی را با شماره شبا ثبت کنید و از پرداخت وجوه نقد بدون اخذ رسید کتبی خودداری نمایید.',
              },
              {
                num: '۰۴',
                title: 'وجه التزام روزانه مقطوع (ماده ۲۳۰ قانون مدنی)',
                desc: 'برای هر روز تأخیر در تحویل، تنظیم سند، پرداخت اقساط یا تخلیه، خسارت ریالی روزانه بدون سقف و غیرقابل تخفیف قید کنید.',
              },
              {
                num: '۰۵',
                title: 'تعیین شرط داوری تخصصی مرضی‌الطرفین',
                desc: 'با تعیین داور حقوقی معتمد، زمان حل اختلاف را از چند سال به چند هفته کاهش داده و از پیچ‌وخم دادگاه‌ها مصون بمانید.',
              },
              {
                num: '۰۶',
                title: 'ماده فورس‌ماژور و حوادث غیرمترقبه قهری',
                desc: 'مصادیق حوادث قهری (سیل، زلزله، تحریم‌های ناگهانی قطعی) و مواعد تعلیق یا فسخ قرارداد را به وضوح مشخص سازید.',
              },
              {
                num: '۰۷',
                title: 'اسقاط یا بقای آگاهانه خیارات قانونی',
                desc: 'اسقاط کافه خیارات نباید حق فسخ ناشی از تدلیس یا شرط تخلف از تعهدات را از بین ببرد؛ عبارات را با دقت گزینش کنید.',
              },
              {
                num: '۰۸',
                title: 'تضمین‌ها با چک صیادی بنفش دارای شناسه',
                desc: 'در متن چک‌های تضمینی حتماً عبارت «بابت تضمین حسن انجام قرارداد شماره ...» و تاریخ قرارداد را صریحاً درج نمایید.',
              },
              {
                num: '۰۹',
                title: 'امضا در حضور حداقل دو شاهد معتمد مرد',
                desc: 'به‌ویژه در قراردادهای اجاره مسکونی و تجاری، امضای دو شاهد برای اخذ دستور تخلیه فوری ظرف یک هفته الزامی است.',
              },
              {
                num: '۱۰',
                title: 'تعداد نسخ متحدالمتن و یکسان بودن تمام امضاها',
                desc: 'قرارداد در حداقل دو نسخه دارای اعتبار یکسان تنظیم شود و تمام صفحات و پیوست‌ها توسط کلیه طرفین و شهود امضا گردد.',
              },
            ].map((rule, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-[#E5C158]/30 transition-all flex gap-4"
              >
                <span className="text-xl sm:text-2xl font-black text-[#E5C158]/60 shrink-0">
                  {rule.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">{rule.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 5. FAQ SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              پرسش و پاسخ‌های متداول
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white mb-2">
              سؤالات رایج حقوقی در مورد قراردادها و توافق‌نامه‌ها
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              پاسخ کارشناسان حقوقی نگارش یار به پرتکرارترین ابهامات قراردادی مراجعین
            </p>
          </div>

          <div className="space-y-3">
            {contractsFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold text-white flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-[#E5C158] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E5C158]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 6. CONVERSION CTA & CONSULTATION SECTION */}
        {/* ---------------------------------------------------- */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0C1222] via-[#10182E] to-[#0C1222] border border-[#E5C158]/30 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5C158]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5C158]/20 border border-[#E5C158]/40 text-[#E5C158] text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              خدمات تخصصی تنظیم و بازبینی قرارداد
            </span>

            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              نیاز به تنظیم قرارداد اختصاصی با شروط ویژه و بررسی ریسک‌های حقوقی دارید؟
            </h2>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
              اگر معامله‌ای سنگین دارید، در حال جذب سرمایه‌گذار هستید یا قصد راه‌اندازی شراکت تجاری دارید، متخصصین نگارش یار متن قرارداد شما را متناسب با جزئیات دقیق پرونده و تضمین‌های قانونی آماده می‌کنند.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/request"
                className="px-6 py-3.5 rounded-2xl bg-[#E5C158] hover:bg-[#d4b046] text-[#070B15] text-sm font-bold transition-all shadow-xl shadow-[#E5C158]/10 flex items-center gap-2"
              >
                <span>ثبت سفارش تنظیم قرارداد اختصاصی</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              {messengerLinks.length > 0 && (
                <a
                  href={messengerLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>مشاوره فوری در پیام‌رسان (رایگان)</span>
                </a>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>شماره تماس مستقیم: <strong className="text-white" dir="ltr">۰۹۹۱۵۱۴۷۷۸۹</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>پاسخگویی سریع کمتر از ۲ ساعت</span>
              </span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
