import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { ContractsPillarClient } from '@/components/samples/ContractsPillarClient';

export const metadata: Metadata = {
  title: 'مرجع جامع نمونه قراردادها و توافق‌نامه‌های رسمی [دانلود و کپی رایگان] | نگارش یار',
  description:
    'دانلود و کپی رایگان ۲۸ نمونه قرارداد استاندارد ملکی، اجاره، مبایعه‌نامه خودرو، استخدام و پیمانکاری، مشارکت تجاری و صلح‌نامه مستند به قانون مدنی با نکات طلایی و تنظیم اختصاصی در نگارش یار.',
  keywords: [
    'نمونه قرارداد',
    'متن قرارداد رسمی',
    'نمونه قرارداد اجاره مسکونی',
    'نمونه مبایعه‌نامه ملک',
    'قولنامه خودرو',
    'قرارداد کار موقت',
    'قرارداد مشارکت در ساخت',
    'قرارداد محرمانگی NDA',
    'صلح عمری',
    'قرارداد مشارکت مدنی',
    'توافق‌نامه طلاق توافقی',
    'نگارش یار قرارداد',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples/contracts',
  },
  openGraph: {
    title: 'مرجع جامع نمونه قراردادها و توافق‌نامه‌های رسمی | نگارش یار',
    description:
      'بانک الگوهای استاندارد و رسمی انواع قراردادهای ملکی، خودرویی، کاری، تجاری و صلح‌نامه‌ها بر اساس استانداردهای قانون مدنی ایران همراه با امکان کپی و تنظیم اختصاصی.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples/contracts',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مرجع جامع نمونه قراردادها و توافق‌نامه‌های رسمی | نگارش یار',
    description:
      'مجموعه ۲۸ الگوی استاندارد انواع قرارداد و توافق‌نامه با نکات طلایی حقوقی و پیشگیری از نزاع در نگارش یار.',
  },
};

export default function ContractsPillarPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'صفحه اصلی',
        item: 'https://www.negaresh-yar.ir',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'بانک نمونه اسناد',
        item: 'https://www.negaresh-yar.ir/samples',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'مرجع جامع قراردادها و توافق‌نامه‌ها',
        item: 'https://www.negaresh-yar.ir/samples/contracts',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'مرجع جامع نمونه قراردادها و توافق‌نامه‌های رسمی',
    description:
      'مجموعه کامل و دسته‌بندی‌شده از ۲۸ نمونه قرارداد استاندارد ملکی، خودرویی، کاری و پیمانکاری، مشارکت تجاری و صلح‌نامه، تدوین‌شده مطابق با قانون مدنی و قوانین تجاری ایران.',
    url: 'https://www.negaresh-yar.ir/samples/contracts',
    publisher: {
      '@type': 'Organization',
      name: 'نگارش یار',
      url: 'https://www.negaresh-yar.ir',
      telephone: '+989915147789',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'مشهد',
        addressRegion: 'خراسان رضوی',
        addressCountry: 'IR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.2972,
        longitude: 59.6067,
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'آیا قرارداد دستی نوشته شده بین دو نفر با امضای دو شاهد در دادگاه معتبر است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'بله. بر اساس ماده ۱۰ قانون مدنی (آزادی قراردادها) و اصل صحت معاملات، هرگونه توافق مکتوب که مخالف صریح قوانین آمره نباشد، سند عادی کاملاً معتبر است. همچنین بر اساس قانون روابط موجر و مستأجر سال ۱۳۷۶، اگر قرارداد اجاره عادی به امضای دو شاهد معتمد برسد، از مزیت دستور تخلیه فوری ظرف یک هفته (بدون نیاز به دادرسی طولانی) برخوردار خواهد شد.',
        },
      },
      {
        '@type': 'Question',
        name: 'تفاوت قرارداد اولیه با دعاوی قراردادی (مثل دادخواست ابطال یا فسخ) چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'قرارداد (مانند اجاره‌نامه، مبایعه‌نامه ملک یا قرارداد مشارکت) توافق اولیه‌ای است که برای تعیین حقوق و تعهدات و پیشگیری از نزاع نوشته می‌شود. در حالی که دعاوی قراردادی (نظیر دادخواست فسخ، دادخواست اعلام بطلان معامله، الزام به تنظیم سند رسمی، یا دستور تخلیه) زمانی مطرح می‌شوند که اختلافی بروز کرده و یکی از طرفین تعهد خود را زیر پا گذاشته است. ما در نگارش یار هم متون خام قراردادها را ارائه می‌دهیم و هم لوایح و دادخواست‌های مربوط به اختلافات قراردادی را پوشش داده‌ایم.',
        },
      },
      {
        '@type': 'Question',
        name: 'وجه التزام روزانه چیست و چگونه در قرارداد درج شود تا دادگاه آن را ابطال نکند؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'وجه التزام، خسارت مقطوع قراردادی است که بر اساس ماده ۲۳۰ قانون مدنی دادگاه نمی‌تواند مبلغ آن را کم یا زیاد کند. برای مصونیت، باید عبارت «به عنوان خسارت مقطوع تأخیر در انجام تعهد روزانه مبلغ ... ریال علاوه بر اصل تعهد» قید شود و مشخص گردد که پرداخت خسارت مانع از اجرای اصل تعهد نخواهد بود.',
        },
      },
      {
        '@type': 'Question',
        name: 'چرا گنجاندن شرط داوری در قراردادهای کسب‌وکار و مشارکت یک مزیت بزرگ است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'رسیدگی در دادگستری ممکن است ماه‌ها یا سال‌ها به طول بینجامد و نیازمند نوبت‌های طولانی دادگاه است. با تعیین داور مرضی‌الطرفین در متن قرارداد، هرگونه اختلاف ظرف چند هفته با هزینه بسیار کمتر و تخصص بالاتر داور حل‌وفصل شده و رأی داور مستقیماً از طریق دایره اجرای احکام دادگستری لازم‌الاجرا خواهد بود.',
        },
      },
      {
        '@type': 'Question',
        name: 'آیا اسقاط کافه خیارات به این معنی است که تحت هیچ شرایطی نمی‌توان معامله را برهم زد؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'خیر. حتی با اسقاط کافه خیارات، خیار تدلیس (فریبکاری عمدی) و بطلان ذاتی معامله (مانند عدم اهلیت، معامله فضولی بدون تنفیذ یا مستحق‌للغیر درآمدن مبیع) ساقط نمی‌شود. با این حال توصیه می‌شود برای حفظ امنیت مالی، عبارت «به استثنای خیار تدلیس و خیار تخلف از شرط» قید گردد.',
        },
      },
      {
        '@type': 'Question',
        name: 'خدمات تخصصی نگارش یار در زمینه تنظیم و بازبینی قراردادها شامل چه مواردی است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'تیم حقوقی نگارش یار علاوه بر ارائه ۲۸ الگوی استاندارد و رایگان، خدمات تدوین بندهای سفارشی، درج شروط سخت‌گیرانه عدم افشای اطلاعات، تعیین تضامین سفته و چک صیادی، بررسی پیش‌نویس‌های ارائه‌شده از طرف مقابل و بازبینی ریسک‌های حقوقی را به صورت کاملاً غیرحضوری با پشتیبانی مستقیم مشاورین حقوقی ارائه می‌دهد.',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="contracts-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="contracts-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="contracts-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContractsPillarClient />
    </>
  );
}
