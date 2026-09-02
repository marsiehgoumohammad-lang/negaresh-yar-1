import React from 'react';
import Link from 'next/link';
import { KnowledgeArticleData, KnowledgeMetadata } from './types';
import { SayadCheckExecutionArticle23GuideSection } from '@/components/knowledge/SayadCheckExecutionArticle23GuideSection';

export const sayadCheckExecutionArticle23Metadata: KnowledgeMetadata = {
  title: 'اجراییه مستقیم چک صیادی ماده ۲۳؛ شرایط، مراحل، مهلت اعتراض و نحوه ابطال | نگارش یار',
  description:
    'راهنمای جامع صدور اجراییه مستقیم چک طبق ماده ۲۳ قانون صدور چک؛ مقایسه با دادخواست حقوقی، مراحل دریافت بدون رسیدگی ماهوی، توقیف حساب‌ها و اموال، دفاعیات صادرکننده، توقف عملیات اجرایی و دادخواست ابطال.',
  keywords: [
    'اجراییه مستقیم چک',
    'اجراییه چک ماده ۲۳',
    'اجراییه مستقیم چک صیادی',
    'صدور اجراییه چک بدون دادخواست',
    'اجراییه چک صیادی چگونه است',
    'شرایط صدور اجراییه ماده ۲۳',
    'درخواست اجراییه چک',
    'مهلت اعتراض به اجراییه چک',
    'اعتراض به اجراییه ماده ۲۳',
    'ابطال اجراییه چک',
    'توقف عملیات اجرایی چک',
    'اجراییه چک برگشتی',
    'چک صیادی و ماده ۲۳',
    'نحوه صدور اجراییه مستقیم چک',
    'مدارک لازم برای اجراییه چک',
    'ماده ۲۳ قانون صدور چک',
    'توقیف اموال با چک صیادی',
    'اعسار از اجراییه چک',
    'نگارش یار',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/knowledge/sayad-check-execution-article-23',
  },
  openGraph: {
    title: 'اجراییه مستقیم چک صیادی ماده ۲۳؛ شرایط، مراحل و نحوه ابطال | نگارش یار',
    description:
      'سریع‌ترین روش وصول وجه چک صیادی بدون دادرسی طولانی و بدون پرداخت هزینه دادرسی ۳.۵ درصدی؛ آموزش کامل صدور اجراییه مستقیم دادگاه، توقیف اموال و دفاعیات ابطال اجراییه.',
    url: 'https://www.negaresh-yar.ir/knowledge/sayad-check-execution-article-23',
    siteName: 'نگارش یار',
    type: 'article',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'راهنمای اجراییه مستقیم چک صیادی (ماده ۲۳ قانون چک) | نگارش یار',
    description: 'شرایط، مراحل اقدام، مدارک، مهلت‌های قانونی اعتراض و توقف عملیات اجرایی چک‌های صیادی.',
  },
};

export const sayadCheckExecutionArticle23Data: KnowledgeArticleData = {
  slug: 'sayad-check-execution-article-23',
  category: 'مالیات و اسناد تجاری',
  badge: 'راهنمای جامع حقوقی و قضایی ۱۴۰۵',
  h1Title: 'اجراییه مستقیم چک صیادی ماده ۲۳؛ شرایط، مراحل، مهلت اعتراض و نحوه ابطال',
  heroSubtitle:
    'راهنمای کامل صدور اجراییه مستقیم چک صیادی بدون نیاز به دادرسی و دادخواست حقوقی بر اساس اصلاحیه قانون صدور چک؛ مراحل توقیف اموال صادرکننده، مهلت‌های دفاع، روش‌های توقف عملیات اجرایی و دادخواست ابطال اجراییه.',
  readTime: '۱۸ دقیقه مطالعه کاربردی',
  lastUpdated: 'شهریور ۱۴۰۵ (منطبق بر آخرین رویه قضایی اجرای احکام)',
  heroTrustChips: [
    'منطبق بر ماده ۲۳ قانون صدور چک',
    'بدون نیاز به رسیدگی ماهوی در دادگاه',
    'بررسی نحوه توقیف فوری حساب‌ها و اموال',
    'راهنمای ابطال اجراییه و توقف عملیات اجرایی',
  ],

  // Direct clear answer in first paragraph (SEO Feature Snippet optimized)
  quickAnswerTitle: 'پاسخ سریع: اجراییه مستقیم چک ماده ۲۳ چیست و چگونه صادر می‌شود؟',
  quickAnswerParagraph:
    'اجراییه مستقیم چک صیادی سازوکاری قانونی بر مبنای ماده ۲۳ اصلاحی قانون صدور چک است که به دارنده چک برگشتی اجازه می‌دهد بدون ثبت دادخواست ماهوی، بدون پرداخت هزینه دادرسی سنگین (۳.۵ درصد) و بدون تشکیل جلسات دادگاه، مستقیماً از دادگاه حقوقی تقاضای صدور برگ اجراییه نماید. پس از ثبت درخواست در دفتر خدمات قضایی، دادگاه در صورت احراز ثبت چک در سامانه صیاد، مطابقت امضا و نبود شرط یا تضمین در متن چک، مستقیماً اجراییه صادر می‌کند. پس از ابلاغ به صادرکننده، وی ۱۰ روز مهلت دارد بدهی را بپردازد یا مال معرفی کند؛ در غیر این صورت، کلیه حساب‌های بانکی، پلاک ثبتی، خودرو و سهام وی فوراً توقیف و حکم جلب صادر خواهد شد.',
  quickAnswerHighlights: [
    'بدون رسیدگی ماهوی: دادگاه بدون ورود به منشأ معامله و بدون دعوت از طرفین، مستقیماً اجراییه صادر می‌کند.',
    'صرفه‌جویی در هزینه و زمان: هزینه دادرسی معادل دعاوی غیرمالی بوده و فرآیند صدور ظرف چند روز تا ۲ هفته انجام می‌گردد.',
    'صرفاً علیه صادرکننده و صاحب حساب: علیه ضامنین و ظهرنویسان نمی‌توان اجراییه مستقیم ماده ۲۳ گرفت و نیاز به دادخواست مستقل دارد.',
    'مهلت ۱۰ روزه صادرکننده: پرداخت بدهی، توافق با دارنده یا معرفی مال؛ در غیر این صورت توقیف سراسری اموال و اعمال ماده ۳ نحوه اجرای محکومیت‌های مالی.',
  ],

  customComponent: <SayadCheckExecutionArticle23GuideSection />,

  sections: [
    {
      id: 'what-is-article-23',
      title: '۱. ماده ۲۳ قانون صدور چک چیست و چه تحولی ایجاد کرد؟',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>
            در نظام حقوقی سابق ایران، دارنده چک برگشتی برای وصول مطالبات خود مجبور بود ماه‌ها درگیر فرآیند طولانی دادرسی شود:
            ثبت دادخواست مطالبه وجه، پرداخت ۳.۵ درصد هزینه دادرسی سنگین، تعیین وقت رسیدگی چند ماهه، ابلاغ به خوانده، تجدیدنظرخواهی و نهایتاً
            درخواست اجراییه که گاهی بیش از یک سال به طول می‌انجامید. در این فاصله صادرکننده فرصت کافی برای انتقال اموال و فرار از دین پیدا می‌کرد.
          </p>
          <p>
            با تصویب <strong>قانون اصلاح قانون صدور چک (مصوب ۱۳۹۷) و ماده ۲۳ آن</strong>، سند چک صیادی قدرت اجرایی اسناد لازم‌الاجرا در مراجع قضایی
            را به دست آورد. طبق این ماده، دارنده چک صیادی می‌تواند با در دست داشتن گواهی عدم پرداخت دارای کد رهگیری متمرکز بانک مرکزی، مستقیماً از
            دادگاه عمومی حقوقی تقاضای صدور برگ اجراییه علیه صادرکننده و صاحب حساب نماید؛ بدون آنکه نیازی به تشکیل دادگاه و صدور دادنامه باشد.
          </p>
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 text-xs sm:text-sm text-emerald-950">
            <h4 className="mb-1 font-bold text-emerald-900">متن صریح صدر ماده ۲۳ قانون صدور چک:</h4>
            <p className="italic">
              «دارنده چک می‌تواند با ارائه اصل چک و گواهی‌نامه عدم پرداخت و تاییدیه ثبت چک در سامانه صیاد از دادگاه صالح، صدور اجراییه نسبت به کل
              مبلغ چک یا کسری آن و حق‌الوکاله وکیل را درخواست نماید. دادگاه مکلف است در صورت احراز شرایط قانونی، بدون تشکیل جلسه دادرسی و بدون
              رسیدگی ماهوی، اقدام به صدور اجراییه نماید...»
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'execution-vs-claim-petition',
      title: '۲. مقایسه کامل: اجراییه مستقیم ماده ۲۳ در برابر دادخواست مطالبه وجه چک',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>
            یکی از مهم‌ترین تصمیمات دارنده چک این است که از کدام مسیر اقدام کند: <strong>اجراییه مستقیم ماده ۲۳</strong> یا{' '}
            <strong>دادخواست مطالبه وجه چک</strong>؟ جدول مقایسه‌ای زیر تفاوت‌های بنیادین این دو روش را مشخص می‌کند:
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="p-3 font-bold">معیار مقایسه</th>
                  <th className="p-3 font-bold text-emerald-900 bg-emerald-50/50">اجراییه مستقیم ماده ۲۳</th>
                  <th className="p-3 font-bold">دادخواست حقوقی مطالبه وجه</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-stone-900">نیاز به رسیدگی ماهوی دادگاه</td>
                  <td className="p-3 text-emerald-800 bg-emerald-50/20 font-semibold">خیر (بدون جلسه دادرسی)</td>
                  <td className="p-3 text-stone-600">بله (تشکیل جلسات بدوی و تجدیدنظر)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">هزینه دادرسی بدوی</td>
                  <td className="p-3 text-emerald-800 bg-emerald-50/20 font-semibold">تعرفه دعاوی غیرمالی (بسیار ناچیز)</td>
                  <td className="p-3 text-stone-600">۳.۵ درصد کل مبلغ خواسته (در مراحل بالاتر تا ۴.۵٪)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">سرعت رسیدگی تا توقیف اموال</td>
                  <td className="p-3 text-emerald-800 bg-emerald-50/20 font-semibold">فوق‌العاده سریع (۲ الی ۴ هفته)</td>
                  <td className="p-3 text-stone-600">طولانی (۶ ماه الی ۱.۵ سال)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">امکان اقدام علیه ضامن و ظهرنویس</td>
                  <td className="p-3 text-rose-700 bg-emerald-50/20 font-semibold">خیر (صرفاً صادرکننده و صاحب حساب)</td>
                  <td className="p-3 text-emerald-700 font-semibold">بله (صادرکننده + کلیه ضامنین و ظهرنویسان)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">مطالبه خسارت تأخیر تادیه</td>
                  <td className="p-3 text-amber-800 bg-emerald-50/20 font-semibold">صرفاً اصل مبلغ و حق‌الوکاله (خسارت تأخیر دادخواست جداگانه می‌خواهد)</td>
                  <td className="p-3 text-emerald-700 font-semibold">اصل مبلغ + کلیه خسارات تأخیر تادیه تا روز پرداخت</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">مرجع رسیدگی</td>
                  <td className="p-3 text-stone-700 bg-emerald-50/20">دادگاه حقوقی محل استقرار بانک یا اقامت خوانده</td>
                  <td className="p-3 text-stone-700">دادگاه عمومی حقوقی یا شورای حل اختلاف (تا ۱۰۰ میلیون)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'conditions-for-article-23',
      title: '۳. شرایط ۵ گانه صدور اجراییه مستقیم چک طبق قانون',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>
            دادگاه به صورت خودکار به هر برگ چکی اجراییه نمی‌دهد. قاضی شعبه مکلف است قبل از صدور دستور اجرا، ۵ شرط اساسی زیر را دقیقاً احراز کند:
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <span className="mb-1 block font-bold text-stone-900">۱. ثبت در سامانه صیاد بانک مرکزی</span>
              <p className="text-xs text-stone-600">
                مشخصات چک، مبلغ، تاریخ و مشخصات دارنده نهایی باید در سامانه صیاد به درستی ثبت و تایید شده باشد.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <span className="mb-1 block font-bold text-stone-900">۲. گواهی عدم پرداخت با کد رهگیری صیاد</span>
              <p className="text-xs text-stone-600">
                بانک باید گواهی‌نامه عدم پرداخت سیستمی صادر کرده باشد که حاوی شناسه رهگیری یکپارچه (UID) بانک مرکزی باشد.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <span className="mb-1 block font-bold text-stone-900">۳. تایید مطابقت امضا توسط بانک</span>
              <p className="text-xs text-stone-600">
                در متن گواهی عدم پرداخت، بانک صریحاً تایید کرده باشد که نمونه امضای روی چک با نمونه امضای صاحب حساب در بانک مطابقت دارد.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <span className="mb-1 block font-bold text-stone-900">۴. عدم مشروط بودن یا تضمینی بودن در متن چک</span>
              <p className="text-xs text-stone-600">
                در متن چک عباراتی مبنی بر «مشروط بودن وصول به شرط خاص» یا «بابت تضمین قرارداد» قید نشده باشد.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4 sm:col-span-2">
              <span className="mb-1 block font-bold text-stone-900">۵. عدم وجود دستور عدم پرداخت (ماده ۱۴)</span>
              <p className="text-xs text-stone-600">
                صادرکننده یا ذی‌نفع قبلاً بر اساس ماده ۱۴ قانون چک به ادعای سرقت، کلاهبرداری یا جعل دستور مسدودی و عدم پرداخت به بانک نداده باشد.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'required-documents',
      title: '۴. مدارک لازم برای درخواست صدور اجراییه چک ماده ۲۳',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>برای ثبت تقاضای اجراییه در دفاتر خدمات الکترونیک قضایی، متقاضی (دارنده چک یا وکیل وی) باید اسناد زیر را بارگذاری کند:</p>
          <ul className="space-y-2 rounded-xl border border-stone-200 bg-stone-50/50 p-4 text-xs sm:text-sm">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              <strong>اصل و تصویر پشت و روی چک صیادی بنفش:</strong> اسکن باکیفیت رو و پشت لاشه چک.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              <strong>اصل گواهی عدم پرداخت رسمی بانک:</strong> ممهور به مهر شعبه و دارای بارکد و کد رهگیری سامانه صیاد.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              <strong>گواهی استعلام ثبت و انتقال در سامانه صیاد:</strong> پرینت زنجیره انتقال یا پیامک تایید سامانه صیاد.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              <strong>کارت ملی و مدارک هویتی دارنده:</strong> تطابق کد ملی دارنده با ثبت‌شونده در سامانه صیاد.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              <strong>وکالت‌نامه الکترونیک وکیل دادگستری (در صورت اقدام توسط وکیل):</strong> قید حق درخواست اجراییه و وصول محکوم‌به.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'step-by-step-process',
      title: '۵. مراحل گام‌به‌گام از برگشت چک تا توقیف اموال (تایم‌لاین اجرا)',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>مسیر صدور و اجرای اجراییه مستقیم طبق تایم‌لاین مشخص زیر در سیستم قضایی طی می‌شود:</p>
          <div className="relative border-r-2 border-emerald-500/30 pr-5 space-y-6 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-emerald-800">گام ۱: دریافت گواهی عدم پرداخت با کد رهگیری از بانک</span>
              <p className="mt-1 text-stone-600">
                بانک بلافاصله موجودی سایر حساب‌های صادرکننده را تا سقف چک مسدود کرده و گواهی عدم پرداخت سیستمی صادر می‌کند.
              </p>
            </div>
            <div>
              <span className="font-bold text-emerald-800">گام ۲: ثبت درخواست در دفاتر خدمات الکترونیک قضایی</span>
              <p className="mt-1 text-stone-600">
                با کد عنوان «درخواست صدور اجراییه موضوع ماده ۲۳ قانون صدور چک» پرونده به دادگاه حقوقی ارجاع می‌شود.
              </p>
            </div>
            <div>
              <span className="font-bold text-emerald-800">گام ۳: بررسی شکلی توسط دادگاه و صدور برگ اجراییه</span>
              <p className="mt-1 text-stone-600">
                قاضی دادگاه ظرف چند روز شرایط را کنترل و دستور صدور اجراییه صادر می‌کند.
              </p>
            </div>
            <div>
              <span className="font-bold text-emerald-800">گام ۴: ابلاغ اجراییه در سامانه ثنا به صادرکننده</span>
              <p className="mt-1 text-stone-600">
                اجراییه به همراه اخطاریه مهلت ۱۰ روزه برای صادرکننده در سامانه ثنا ابلاغ قانونی می‌گردد.
              </p>
            </div>
            <div>
              <span className="font-bold text-emerald-800">گام ۵: انقضای مهلت ۱۰ روزه و آغاز عملیات اجرایی</span>
              <p className="mt-1 text-stone-600">
                در صورت عدم پرداخت، سامانه سهام، پلاک‌های ثبتی ثبتی، خودرو (پلیس راهور) و حساب‌های بانکی با سامانه هوشمند اجرای احکام مسدود و توقیف می‌شوند.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'objection-and-cancellation',
      title: '۶. اعتراض به اجراییه، توقف عملیات اجرایی و دعوای ابطال اجراییه',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>
            صادرکننده چک در برابر اجراییه مستقیم بی‌دفاع نیست. قانون‌گذار در انتهای ماده ۲۳، حقوق دفاعی متعهد را پیش‌بینی کرده است.
            اما باید میان سه مفهوم کلیدی تفکیک قائل شد:
          </p>
          <div className="space-y-3">
            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900">الف) اعتراض به اجراییه و توقف عملیات اجرایی</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                صادرکننده می‌تواند به دادگاه صادرکننده اجراییه اعلام کند که چک دارای وصف مشروط یا تضمینی بوده، یا جعل شده و یا از طریق کلاهبرداری و خیانت در امانت
                به دست آمده است. در این حالت دادگاه مکلف است در صورت ارائه دلایل موجه یا تودیع خسارت احتمالی، <strong>دستور توقف عملیات اجرایی</strong> صادر کند.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900">ب) دعوای ابطال اجراییه چک ماده ۲۳</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                اعتراض به خودی خود منجر به لغو دائم اجراییه نمی‌شود؛ صادرکننده باید دادخواست حقوقی با خواسته «ابطال اجراییه چک» ثبت کند و ثابت نماید که چک بابت
                تضمین بوده و تعهد انجام شده، یا بدهی قبلاً تسویه گردیده است. حکم دادگاه مبنی بر ابطال اجراییه، پرونده اجرایی را برای همیشه مختومه می‌کند.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900">ج) شرایط توقف بدون سپردن خسارت احتمالی</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                اگر دادگاه احراز کند که بر اساس دلایل ابرازی (مانند قرارداد صریح مکتوب، اقرارنامه کتبی دارنده یا رای کیفری قطعی) حقانیت صادرکننده واضح است،
                می‌تواند بدون دریافت تأمین و خسارت احتمالی، دستور توقف عملیات اجرایی را صادر نماید.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'conditional-guarantee-checks',
      title: '۷. وضعیت چک‌های تضمینی، مشروط و امانی در ماده ۲۳',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>
            یکی از رایج‌ترین چالش‌ها در دادگاه‌ها، چک‌هایی است که بابت <strong>حسن انجام کار، تضمین قرارداد یا امانت</strong> صادر شده‌اند:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"></span>
              <div>
                <strong>اگر شرط یا تضمین در متن چک درج شده باشد:</strong> بانک در گواهی عدم پرداخت قید می‌کند و دادگاه اصولاً نباید اجراییه مستقیم صادر کند.
                دارنده در این حالت باید دادخواست ماهوی بدهد و اثبات کند شرط محقق شده یا تعهد نقض گردیده است.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"></span>
              <div>
                <strong>اگر تضمینی بودن در قرارداد جداگانه باشد:</strong> دادگاه به ظاهر چک نگاه کرده و اجراییه را صادر می‌کند. در اینجا صادرکننده باید فوراً با
                ارائه قرارداد، دادخواست ابطال اجراییه و توقف عملیات اجرایی ثبت نماید.
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'insolvency-and-installment',
      title: '۸. آیا صادرکننده می‌تواند درخواست اعسار و تقسیط وجه چک بدهد؟',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>
            بله؛ بر اساس قانون نحوه اجرای محکومیت‌های مالی و آرای وحدت رویه دیوان عالی کشور، اجراییه مستقیم موضوع ماده ۲۳ دارای تمامی آثار احکام قطعی دادگاه است.
            بنابراین:
          </p>
          <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-4 text-xs sm:text-sm text-blue-950">
            <p className="leading-relaxed">
              صادرکننده در صورتی که تمکن مالی برای پرداخت یکجای وجه چک را نداشته باشد، می‌تواند ظرف مهلت <strong>۳۰ روز از تاریخ ابلاغ اجراییه</strong> در سامانه ثنا،
              دادخواست اعسار از پرداخت محکوم‌به و تقسیط وجه چک را در همان دادگاه صادرکننده اجراییه ثبت کند. در این صورت تا زمان صدور حکم قطعی اعسار، حکم جلب وی
              صادر نخواهد شد.
            </p>
            <div className="mt-3">
              <Link
                href="/services/insolvency-from-judgment"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 underline hover:text-blue-950"
              >
                تنظیم دادخواست تخصصی اعسار و تقسیط اجراییه دادگاه
                <span aria-hidden="true">&larr;</span>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'decision-matrix-section',
      title: '۹. جدول تصمیم‌گیری سریع: کدام مسیر حقوقی برای پرونده شما بهتر است؟',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <p>راهنمای انتخاب سریع استراتژی بهینه با توجه به نوع چک و اهداف دارنده یا صادرکننده:</p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="p-3 font-bold">وضعیت و شرایط چک</th>
                  <th className="p-3 font-bold">موقعیت کاربر</th>
                  <th className="p-3 font-bold">مسیر پیشنهادی برتر</th>
                  <th className="p-3 font-bold">لینک اقدام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3 font-medium">چک صیادی ثبت‌شده + گواهی عدم پرداخت با کد رهگیری</td>
                  <td className="p-3 text-emerald-800 font-semibold">دارنده (طلبکار)</td>
                  <td className="p-3">اجراییه مستقیم ماده ۲۳ (سریع‌ترین مسیر توقیف اموال)</td>
                  <td className="p-3">
                    <Link href="/services/check-claim" className="text-emerald-700 underline font-bold">
                      سفارش اجراییه
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">چک دارای ضامن یا ظهرنویس + تقاضای خسارت تأخیر تادیه</td>
                  <td className="p-3 text-emerald-800 font-semibold">دارنده (طلبکار)</td>
                  <td className="p-3">دادخواست حقوقی مطالبه وجه علیه کلیه متعهدین</td>
                  <td className="p-3">
                    <Link href="/services/check-claim" className="text-emerald-700 underline font-bold">
                      دادخواست مطالبه وجه
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">اجراییه صادر شده اما چک تضمینی یا امانی بوده است</td>
                  <td className="p-3 text-rose-800 font-semibold">صادرکننده (بدهکار)</td>
                  <td className="p-3">دادخواست ابطال اجراییه + تقاضای دستور توقف اجرا</td>
                  <td className="p-3">
                    <Link href="/samples/check-execution-objection" className="text-emerald-700 underline font-bold">
                      نمونه لایحه ابطال
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">عدم توانایی مالی در پرداخت یکجای وجه چک اجراییه</td>
                  <td className="p-3 text-blue-800 font-semibold">صادرکننده (بدهکار)</td>
                  <td className="p-3">دادخواست اعسار و تقسیط محکوم‌به ظرف ۳۰ روز</td>
                  <td className="p-3">
                    <Link href="/services/insolvency-from-judgment" className="text-emerald-700 underline font-bold">
                      دادخواست اعسار
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'high-risk-mistakes',
      title: '۱۰. ۸ اشتباه پرخطر در فرآیند اجراییه ماده ۲۳ قانون صدور چک',
      content: (
        <div className="space-y-3 leading-relaxed text-stone-700">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۱. عدم کنترل کد رهگیری گواهی عدم پرداخت</span>
              <p className="text-xs text-rose-950">
                اگر گواهی بانک فاقد کد رهگیری متمرکز صیاد باشد، دادگاه بدون صدور اجراییه درخواست را رد می‌کند.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۲. درخواست اجراییه علیه ضامن یا ظهرنویس</span>
              <p className="text-xs text-rose-950">
                ماده ۲۳ صرفاً شامل صادرکننده و صاحب حساب است و نمی‌توان علیه ضامن اجراییه مستقیم گرفت.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۳. مطالبه خسارت تأخیر تادیه در فرم ماده ۲۳</span>
              <p className="text-xs text-rose-950">
                در اجراییه مستقیم فقط اصل چک و حق‌الوکاله درج می‌شود؛ خسارت تأخیر تادیه مستلزم ثبت دادخواست جداگانه است.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۴. بی‌توجهی صادرکننده به مهلت ۱۰ روزه ابلاغ</span>
              <p className="text-xs text-rose-950">
                پس از ۱۰ روز، سامانه هوشمند اجرای احکام سریعاً تمامی حساب‌ها، خودرو و املاک صادرکننده را توقیف می‌کند.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۵. فراموش کردن مهلت ۳۰ روزه دادخواست اعسار</span>
              <p className="text-xs text-rose-950">
                اگر صادرکننده ظرف ۳۰ روز از ابلاغ اجراییه دادخواست اعسار ندهد، مصونیت از جلب را از دست می‌دهد.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۶. تکیه بر ادعای شفاهی تضمینی بودن چک</span>
              <p className="text-xs text-rose-950">
                صرف ادعای شفاهی بدون ارائه قرارداد کتبی یا فاکتور رسمی مانع از صدور و اجرای اجراییه نخواهد شد.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۷. پرداخت دستی وجه چک بدون اخذ لاشه یا رسید</span>
              <p className="text-xs text-rose-950">
                اگر بدهی را دادید اما لاشه را نگرفتید یا رضایت رسمی ثبت نشد، دارنده می‌تواند از طریق ماده ۲۳ مجدداً اجراییه بگیرد.
              </p>
            </div>

            <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
              <span className="mb-1 block font-bold text-rose-900 text-xs sm:text-sm">۸. اشتباه گرفتن توقف اجرا با ابطال نهایی</span>
              <p className="text-xs text-rose-950">
                دستور موقت توقف اجرا موقتی است؛ اگر دعوای اصلی ابطال اجراییه را پیگیری نکنید، توقف ملغی و اموال فروخته می‌شود.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'real-scenarios',
      title: '۱۱. بررسی ۵ سناریوی واقعی از رویه دادگاه‌ها و اجرای احکام',
      content: (
        <div className="space-y-4 leading-relaxed text-stone-700">
          <div className="space-y-3">
            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">سناریوی ۱: چک صیادی بابت خرید کالا و توقیف فوری خودرو</h4>
              <p className="mt-1 text-xs text-stone-600">
                دارنده چک ۵۰۰ میلیون تومانی پس از برگشت، گواهی عدم پرداخت با کد رهگیری گرفت و تقاضای اجراییه ماده ۲۳ نمود. پس از ۱۰ روز از ابلاغ،
                شعبه اجرای احکام با استعلام سیستمی از راهور، خودروی پژو ۲۰۷ صادرکننده را توقیف پلاک و سپس توقیف فیزیکی کرد و وجه چک ظرف ۴۰ روز تسویه شد.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">سناریوی ۲: صدور اجراییه برای چک ضمانت اجاره و توقف آن</h4>
              <p className="mt-1 text-xs text-stone-600">
                موجر چک تخلیه مستأجر را به اجرا گذاشت. مستأجر با استناد به قرارداد اجاره که شماره چک در آن قید شده بود و اثبات تخلیه ملک، دادخواست ابطال
                اجراییه داد و دادگاه بلافاصله دستور توقف عملیات اجرایی صادر نمود و در نهایت اجراییه باطل گردید.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">سناریوی ۳: چک امانی و ثبت شکایت خیانت در امانت</h4>
              <p className="mt-1 text-xs text-stone-600">
                صادرکننده مدعی بود چک به صورت سفیدامضا برای ترخیص کالا امانت داده شده است. وی شکایت کیفری خیانت در امانت ثبت کرده و با اخذ گواهی ثبت
                کیفری و تودیع تأمین، دستور توقف اجرای چک را تا تعیین تکلیف پرونده کیفری اخذ نمود.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">سناریوی ۴: دادخواست اعسار و تقسیط بدهی ۱ میلیارد تومانی</h4>
              <p className="mt-1 text-xs text-stone-600">
                صادرکننده ظرف ۲۰ روز پس از ابلاغ اجراییه، دادخواست اعسار داد. دادگاه با بررسی لیست حساب‌ها و شهادت شهود، اعسار وی را پذیرفت و بدهی را
                به ۱۰۰ میلیون تومان پیش‌پرداخت و ماهیانه ۱۵ میلیون تومان تقسیط کرد و بدین ترتیب از جلب وی جلوگیری شد.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">سناریوی ۵: تسویه حساب در مهلت ۱۰ روزه بدون هزینه اجرایی</h4>
              <p className="mt-1 text-xs text-stone-600">
                صادرکننده به محض دریافت پیامک ابلاغ اجراییه در ثنا، ظرف مهلت ۱۰ روزه با واریز مبلغ به حساب دادگستری پرونده را مختومه کرد و از پرداخت نیم‌عشر دولتی
                (۵ درصد هزینه اجرایی) معاف گردید.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ],

  faqs: [
    {
      question: 'اجراییه مستقیم ماده ۲۳ چک چقدر طول می‌کشد؟',
      answer:
        'از زمان ثبت درخواست در دفتر خدمات قضایی تا صدور برگ اجراییه توسط دادگاه معمولاً بین ۳ روز تا ۲ هفته کاری زمان می‌برد که بسیار سریع‌تر از فرآیند چند ماهه دادرسی حقوقی است.',
    },
    {
      question: 'آیا برای صدور اجراییه مستقیم ماده ۲۳ باید هزینه دادرسی ۳.۵ درصدی پرداخت کنیم؟',
      answer:
        'خیر؛ هزینه ثبت درخواست صدور اجراییه ماده ۲۳ معادل دعاوی غیرمالی (بسیار ناچیز در حد چند صد هزار تومان) است و نیازی به پرداخت هزینه دادرسی ۳.۵ درصدی دعاوی مالی نیست.',
    },
    {
      question: 'آیا می‌توان علیه ضامن یا پشت‌نویس (ظهرنویس) چک هم اجراییه ماده ۲۳ گرفت؟',
      answer:
        'خیر؛ طبق نص صریح ماده ۲۳ قانون صدور چک، صدور اجراییه مستقیم منحصراً علیه «صادرکننده» و «صاحب حساب» امکان‌پذیر است. برای وصول وجه از ضامنین باید دادخواست حقوقی مطالبه وجه ثبت شود.',
    },
    {
      question: 'آیا خسارت تأخیر تادیه در اجراییه مستقیم ماده ۲۳ محاسبه می‌شود؟',
      answer:
        'در برگ اجراییه صادره صرفاً اصل مبلغ چک و حق‌الوکاله وکیل (طبق تعرفه) قید می‌شود. برای مطالبه خسارت تأخیر تادیه، دارنده باید دادخواست حقوقی جداگانه ثبت نماید.',
    },
    {
      question: 'مهلت صادرکننده پس از ابلاغ اجراییه چقدر است؟',
      answer:
        'صادرکننده از تاریخ ابلاغ اجراییه در سامانه ثنا ۱۰ روز مهلت دارد تا دین را بپردازد، با دارنده توافق کند یا مالی معرفی نماید.',
    },
    {
      question: 'اگر صادرکننده بدهی را ظرف ۱۰ روز نپردازد چه می‌شود؟',
      answer:
        'به تقاضای دارنده، اجرای احکام مدنی فوراً کلیه حساب‌های بانکی، خودرو، سهام، حقوق و املاک صادرکننده را توقیف و در صورت عدم دستیابی به مال، برگ جلب وی را صادر می‌کند.',
    },
    {
      question: 'آیا صادرکننده می‌تواند به اجراییه ماده ۲۳ اعتراض کند؟',
      answer:
        'بله؛ صادرکننده می‌تواند با ادعای مشروط بودن، تضمینی بودن، امانی بودن، جعل یا پرداخت قبلی، دادخواست ابطال اجراییه به همراه تقاضای توقف عملیات اجرایی ثبت کند.',
    },
    {
      question: 'دستور توقف عملیات اجرایی چک چیست؟',
      answer:
        'دستوری موقت از سوی دادگاه است که در صورت احراز دلایل قوی یا تودیع خسارت احتمالی، عملیات توقیف اموال و مزایده را تا تعیین تکلیف نهایی پرونده متوقف می‌سازد.',
    },
    {
      question: 'آیا می‌توان برای اجراییه ماده ۲۳ دادخواست اعسار و تقسیط داد؟',
      answer:
        'بله؛ صادرکننده در صورت عدم تمکن مالی می‌تواند ظرف ۳۰ روز از ابلاغ اجراییه، دادخواست اعسار و تقسیط بدهی را در دادگاه صادرکننده اجراییه ثبت نماید.',
    },
    {
      question: 'آیا چک‌های قدیمی بدون شناسه صیادی مشمول ماده ۲۳ می‌شوند؟',
      answer:
        'خیر؛ امتیاز اجراییه مستقیم ماده ۲۳ منحصراً مختص چک‌های جدید صیادی است که در سامانه صیاد بانک مرکزی ثبت و تایید شده باشند.',
    },
    {
      question: 'اگر در متن چک عبارت «بابت تضمین» نوشته شده باشد چه می‌شود؟',
      answer:
        'در این حالت دادگاه نباید اجراییه مستقیم صادر کند و دارنده باید از طریق دادخواست حقوقی مطالبه وجه و اثبات تخلف از قرارداد اقدام نماید.',
    },
    {
      question: 'نیم‌عشر دولتی (هزینه اجرایی ۵ درصد) چه زمانی تعلق می‌گیرد؟',
      answer:
        'اگر صادرکننده ظرف ۱۰ روز پس از ابلاغ اجراییه بدهی را پرداخت نکند، علاوه بر اصل مبلغ چک، ۵ درصد مبلغ به عنوان نیم‌عشر اجرایی به نفع دولت از وی دریافت خواهد شد.',
    },
    {
      question: 'کدام دادگاه صلاحیت صدور اجراییه مستقیم ماده ۲۳ را دارد؟',
      answer:
        'دادگاه عمومی حقوقی محل استقرار بانک صادرکننده گواهی عدم پرداخت، یا دادگاه محل اقامت خوانده (صادرکننده چک).',
    },
    {
      question: 'آیا برای درخواست اجراییه ماده ۲۳ حتماً باید وکیل داشته باشیم؟',
      answer:
        'خیر؛ خود دارنده می‌تواند از طریق دفاتر خدمات الکترونیک قضایی اقدام کند، اما به دلیل حساسیت‌های اجرایی و دفاعیات احتمالی، بهره‌گیری از مشاور یا وکیل سرعت کار را افزایش می‌دهد.',
    },
    {
      question: 'اگر دارنده چک را برگشت بزند اما اجراییه نگیرد چه می‌شود؟',
      answer:
        'محدودیت‌های بانکی سامانه صیاد (مسدودی حساب‌ها در تمام بانک‌ها) به قوت خود باقی می‌ماند، اما اموال دیگر مانند خودرو یا ملک تنها پس از اخذ اجراییه دادگاه قابل توقیف است.',
    },
    {
      question: 'آیا پس از صدور اجراییه امکان سازش و توافق وجود دارد؟',
      answer:
        'بله؛ در تمام مراحل تا قبل از اجرای مزایده، طرفین می‌توانند در اجرای احکام سازش کرده یا مهلت پرداخت تعیین کنند.',
    },
  ],

  relatedSamples: [
    {
      title: 'نمونه دادخواست صدور اجراییه چک',
      href: '/samples/check-execution-petition',
      desc: 'الگوی آماده و رسمی جهت درخواست اجراییه مستقیم ماده ۲۳',
      badge: 'الگوی رسمی',
    },
    {
      title: 'نمونه دادخواست ابطال اجراییه چک',
      href: '/samples/check-execution-objection',
      desc: 'الگوی آماده اعتراض و ابطال اجراییه چک صیادی',
      badge: 'ابطال اجراییه',
    }
  ],
  relatedServices: [
    {
      title: 'وصول چک برگشتی (حقوقی و کیفری)',
      href: '/services/check-claim',
      desc: 'خدمات حقوقی توسط وکلای متخصص جهت وصول چک و اسناد تجاری.',
      badge: 'وصول مطالبات',
    },
    {
      title: 'تنظیم لایحه و دفاعیه تخصصی',
      href: '/services/legal-brief',
      desc: 'نگارش لایحه مستند به قوانین جهت ارائه به محاکم و دفاع از حقوق شما.',
      badge: 'تنظیم لایحه',
    }
  ],
  relatedArticles: [
    {
      title: 'راهنمای کامل چک برگشتی و روش‌های وصول مطالبات',
      href: '/knowledge/bounced-check-guide',
      desc: 'مقاله پیلار و مرجع وصول چک برگشتی، انسداد حساب‌ها و جدول مقایسه ۴ روش وصول مطالبات تجاری.',
      category: 'مالیات و اسناد تجاری',
    },
    {
      title: 'راهنمای جامع قوانین چک صیادی؛ ثبت، انتقال و استعلام',
      href: '/knowledge/sayad-check-rules',
      desc: 'قوانین و راهنمای کار با سامانه صیاد، انتقال، تایید و استعلام وضعیت اعتباری صادرکننده چک.',
      category: 'مالیات و اسناد تجاری',
    },
    {
      title: 'رفع سوء اثر چک برگشتی؛ روش‌ها، مدارک و مراحل اقدام',
      href: '/knowledge/check-bad-credit-removal',
      desc: 'راهنمای ۵ روش قانونی رفع سوء اثر از چک برگشتی طبق ماده ۵ مکرر قانون چک و آزادسازی حساب‌ها.',
      category: 'مالیات و اسناد تجاری',
    },
    {
      title: 'چک ضمانت و حسن انجام کار؛ شرایط، خطرات، نحوه وصول و استرداد',
      href: '/knowledge/guarantee-check-rules',
      desc: 'راهنمای تخصصی ماهیت چک‌های ضمانتی، عدم امکان صدور اجراییه مستقیم، دادخواست استرداد لاشه و ابطال اجراییه.',
      category: 'اسناد تجاری و چک',
    },
    {
      title: 'تفاوت چک حقوقی و کیفری؛ شرایط، مهلت‌ها و آثار قانونی',
      href: '/knowledge/civil-vs-criminal-check',
      desc: 'بررسی شرایط شکایت کیفری چک، مهلت‌های ۶ ماهه و تفاوت‌های بنیادین پیگیری در دادسرا و دادگاه.',
      category: 'مالیات و اسناد تجاری',
    },
  ],
};
