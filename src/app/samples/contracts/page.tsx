import React from 'react';
import { Metadata } from 'next';
import { ContractsPillarClient } from '@/components/samples/ContractsPillarClient';

export const metadata: Metadata = {
  title: 'مرجع جامع نمونه قراردادها و توافق نامه های رسمی [دانلود و کپی رایگان] | نگارش یار',
  description:
    'دانلود و کپی رایگان ۲۸ نمونه قرارداد استاندارد ملکی، اجاره، مبایعه نامه خودرو، استخدام و پیمانکاری، مشارکت تجاری و صلح نامه مستند به قانون مدنی با نکات طلایی و تنظیم اختصاصی در نگارش یار.',
  keywords: [
    'نمونه قرارداد',
    'متن قرارداد رسمی',
    'نمونه قرارداد اجاره مسکونی',
    'نمونه مبایعه نامه ملک',
    'قولنامه خودرو',
    'قرارداد کار موقت',
    'قرارداد مشارکت در ساخت',
    'قرارداد محرمانگی NDA',
    'صلح عمری',
    'قرارداد مشارکت مدنی',
    'توافق نامه طلاق توافقی',
    'نگارش یار قرارداد',
  ],
  alternates: {
    canonical: 'https://www.negaresh-yar.ir/samples/contracts',
  },
  openGraph: {
    title: 'مرجع جامع نمونه قراردادها و توافق نامه های رسمی | نگارش یار',
    description:
      'بانک الگوهای استاندارد و رسمی انواع قراردادهای ملکی، خودرویی، کاری، تجاری و صلح نامه ها بر اساس استانداردهای قانون مدنی ایران همراه با امکان کپی و تنظیم اختصاصی.',
    type: 'website',
    url: 'https://www.negaresh-yar.ir/samples/contracts',
    siteName: 'نگارش یار',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مرجع جامع نمونه قراردادها و توافق نامه های رسمی | نگارش یار',
    description:
      'مجموعه ۲۸ الگوی استاندارد انواع قرارداد و توافق نامه با نکات طلایی حقوقی و پیشگیری از نزاع در نگارش یار.',
  },
};

export default function ContractsPillarPage() {
  const canonicalUrl = 'https://www.negaresh-yar.ir/samples/contracts';

  const unifiedSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.negaresh-yar.ir/#organization',
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
      {
        '@type': 'WebSite',
        '@id': 'https://www.negaresh-yar.ir/#website',
        url: 'https://www.negaresh-yar.ir',
        name: 'نگارش یار',
        publisher: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: 'مرجع جامع نمونه قراردادها و توافق نامه های رسمی',
        description:
          'مجموعه کامل و دسته بندی شده از ۲۸ نمونه قرارداد استاندارد ملکی، خودرویی، کاری و پیمانکاری، مشارکت تجاری و صلح نامه، تدوین شده مطابق با قانون مدنی و قوانین تجاری ایران.',
        isPartOf: {
          '@id': 'https://www.negaresh-yar.ir/#website',
        },
        breadcrumb: {
          '@id': `${canonicalUrl}#breadcrumb`,
        },
        publisher: {
          '@id': 'https://www.negaresh-yar.ir/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
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
            name: 'مرجع جامع قراردادها و توافق نامه ها',
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        isPartOf: {
          '@id': canonicalUrl,
        },
        mainEntity: [
          {
            '@type': 'Question',
            name: 'آیا قرارداد دستی نوشته شده بین دو نفر با امضای دو شاهد در دادگاه معتبر است؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'بله. بر اساس ماده ۱۰ قانون مدنی و اصل صحت معاملات، هرگونه توافق مکتوب که شرایط اساسی صحت ماده ۱۹۰ را داشته و مخالف صریح قوانین آمره نباشد، به عنوان سند عادی کاملا معتبر است. با این حال، در معاملات اموال غیرمنقول (املاک)، رعایت الزامات قانون الزام به ثبت رسمی معاملات اموال غیرمنقول مصوب ۱۴۰۳ برای اثبات در برابر اشخاص ثالث و مراجع دولتی ضروری است.',
            },
          },
          {
            '@type': 'Question',
            name: 'تفاوت قرارداد اولیه با دعاوی قراردادی (مثل دادخواست ابطال یا فسخ) چیست؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'قرارداد (مانند اجاره نامه، مبایعه نامه ملک یا قرارداد مشارکت) توافق اولیه ای است که برای تعیین حقوق و تعهدات و پیشگیری از نزاع نوشته می شود. در حالی که دعاوی قراردادی (نظیر دادخواست فسخ، اعلام بطلان معامله، الزام به تنظیم سند رسمی، یا دستور تخلیه) زمانی مطرح می شوند که اختلافی بروز کرده و تعهدی نقض شده باشد. نگارش یار هم الگوهای استاندارد قراردادها را ارائه می دهد و هم خدمات تنظیم لوایح و دادخواست های قضایی را پوشش داده است.',
            },
          },
          {
            '@type': 'Question',
            name: 'وجه التزام روزانه چیست و چگونه در قرارداد درج شود تا در محاکم موثر واقع شود؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'وجه التزام خسارت مقطوع قراردادی است که بر اساس ماده ۲۳۰ قانون مدنی دادگاه نمی تواند مبلغ آن را تغییر دهد (مگر در موارد استثنایی مخالف نظم عمومی یا مقررات آمره بانکی). برای اثربخشی کامل، باید صریحا قید شود که خسارت روزانه بابت تاخیر در انجام تعهد پرداخت می گردد و پرداخت این خسارت مانع از اجرای اصل تعهد قانونی نخواهد بود.',
            },
          },
          {
            '@type': 'Question',
            name: 'مزایا و ملاحظات گنجاندن شرط داوری در قراردادها چیست؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تعیین داور مرضی الطرفین می تواند زمان حل اختلاف را کاهش دهد و رسیدگی را تخصصی تر سازد. با این حال، داور باید بی طرف، دارای صلاحیت و با قبولی کتبی تعیین شود؛ زیرا در صورت نقص در ابلاغ یا صدور رای خارج از موضوع، رای داور ممکن است در دادگاه با دعوای ابطال مواجه شود.',
            },
          },
          {
            '@type': 'Question',
            name: 'آیا اسقاط کافه خیارات به این معنی است که تحت هیچ شرایطی نمی توان معامله را برهم زد؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'خیر. حتی با اسقاط کافه خیارات، خیار تدلیس (فریبکاری عمدی) و بطلان ذاتی معامله (نظیر فقدان قصد، عدم اهلیت، معامله فضولی رد شده یا مستحق للغیر درآمدن مبیع) ساقط نمی شود. با این حال توصیه می شود عبارت «به استثنای خیار تدلیس و خیار تخلف از شرط» در بند مربوط به اسقاط خیارات قید گردد.',
            },
          },
          {
            '@type': 'Question',
            name: 'خدمات تخصصی نگارش یار در زمینه تنظیم و بازبینی قراردادها شامل چه مواردی است؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نگارش یار علاوه بر ارائه ۲۸ الگوی استاندارد و رایگان، خدمات تدوین بندهای سفارشی، درج شروط سخت گیرانه عدم افشای اطلاعات، تعیین تضامین سفته و چک صیادی، بررسی پیش نویس های طرف مقابل و بازبینی ریسک های حقوقی را توسط کارشناسان حقوقی ارائه می دهد.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="contracts-unified-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchemaGraph) }}
      />
      <ContractsPillarClient />
    </>
  );
}
