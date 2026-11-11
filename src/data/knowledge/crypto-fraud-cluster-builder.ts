import { Metadata } from 'next';
import { KnowledgeArticleData } from './types';

export const cryptoClusterBase = 'https://www.negaresh-yar.ir';
export const CRYPTO_PUBLISH_DATE = '2026-11-11';
export const CRYPTO_LAST_UPDATED = '۲۰ آبان ۱۴۰۵';

export type CryptoLink = { title: string; href: string; desc: string; category: string };

export type CryptoContentSpec = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  answer: string;
  imageAlt: string;
  highlights: string[];
  sections: { id: string; title: string; paragraphs: string[]; bulletPoints?: string[] }[];
  faqs: { q: string; a: string }[];
  links: CryptoLink[];
};

const rel = (title: string, href: string, desc: string, category = 'راهنمای مرتبط'): CryptoLink => ({ title, href, desc, category });

export const L = {
  complaint: rel('شکایت پلیس فتا و پیگیری جرایم رایانه ای', '/knowledge/cybercrime-complaint-guide', 'مسیر کلی شکایت از جرایم رایانه ای و اینترنتی'),
  follow: rel('پیگیری شکایت پلیس فتا بعد از ثبت گزارش', '/knowledge/cybercrime-complaint-follow-up-guide', 'مراحل پس از ثبت شکایت و گزارش'),
  evid: rel('حفظ ادله دیجیتال برای شکایت', '/knowledge/digital-evidence-preservation-guide', 'نگهداری پیام، لینک، شناسه و رسید'),
  unk: rel('شکایت از کلاهبردار ناشناس', '/knowledge/unknown-cybercrime-suspect-destination-account', 'وقتی هویت کلاهبردار را نمیدانیم'),
  tg: rel('کلاهبرداری در تلگرام و پیامرسانها', '/knowledge/telegram-messenger-scam-complaint', 'مدارک و مراحل شکایت از کلاهبرداری پیامرسان'),
  ext: rel('اخاذی اینترنتی با رمزارز', '/knowledge/crypto-extortion-complaint-guide', 'تهدید و باجخواهی با رمزارز'),
  phish: rel('فیشینگ و برداشت غیرمجاز از حساب', '/knowledge/phishing-and-unauthorized-withdrawal-complaint', 'اقدامات فوری و شکایت در فیشینگ بانکی'),
  shop: rel('کلاهبرداری خرید اینترنتی', '/knowledge/online-shopping-fraud-complaint', 'عدم ارسال کالا و فروشگاه جعلی'),
  access: rel('هک و دسترسی غیرمجاز', '/knowledge/unauthorized-access-hacking-complaint', 'شکایت از هک حساب و داده'),
  howto: rel('چگونه شکواییه کیفری بنویسیم؟', '/knowledge/how-to-write-complaint', 'راهنمای تنظیم شکواییه دادسرا'),
  sFraud: rel('نمونه شکواییه کلاهبرداری', '/samples/fraud-complaint', 'الگوی شکواییه کلاهبرداری کیفری', 'نمونه سند'),
  sTrust: rel('نمونه شکواییه خیانت در امانت', '/samples/breach-of-trust-complaint', 'الگوی شکواییه خیانت در امانت', 'نمونه سند'),
  sPhish: rel('نمونه شکواییه فیشینگ و برداشت غیرمجاز', '/samples/phishing-unauthorized-withdrawal-complaint', 'الگوی شکواییه برداشت غیرمجاز', 'نمونه سند'),
  sAccess: rel('نمونه شکواییه هک و دسترسی غیرمجاز', '/samples/unauthorized-access-hacking-complaint', 'الگوی شکواییه هک', 'نمونه سند'),
  sEvid: rel('نمونه دادخواست تامین دلیل', '/samples/evidence-preservation-petition', 'الگوی درخواست تامین دلیل', 'نمونه سند'),
  sAttach: rel('نمونه درخواست تامین خواسته', '/samples/provisional-attachment-petition', 'الگوی درخواست تامین خواسته', 'نمونه سند'),
  sNotice: rel('نمونه اظهارنامه رسمی', '/samples/legal-notice', 'الگوی اظهارنامه ثنا', 'نمونه سند'),
  sGeneral: rel('نمونه شکواییه کیفری عمومی', '/samples/complaint', 'الگوی کلی شکواییه دادسرا', 'نمونه سند'),
};

const kn = (slug: string, title: string, desc: string): CryptoLink => rel(title, '/knowledge/' + slug, desc, 'خوشه ارز دیجیتال');

export const K = {
  pillar: kn('crypto-fraud-legal-guide', 'شکایت از کلاهبرداری ارز دیجیتال', 'راهنمای کامل مراحل، مدارک و پلیس فتا'),
  exch: kn('crypto-exchange-complaint-guide', 'شکایت از صرافی ارز دیجیتال', 'مدارک پنل و برداشت و مسیر پیگیری'),
  p2p: kn('p2p-crypto-fraud-complaint', 'کلاهبرداری P2P ارز دیجیتال', 'مدارک و مراحل شکایت در معامله همتا به همتا'),
  usdt: kn('tether-usdt-fraud-complaint', 'کلاهبرداری تتر (USDT)', 'ردیابی تراکنش و مراحل شکایت'),
  btc: kn('bitcoin-ethereum-fraud-complaint', 'کلاهبرداری بیت کوین و اتریوم', 'مدارک و مراحل شکایت'),
  wallet: kn('crypto-wallet-hack-phishing-complaint', 'هک کیف پول ارز دیجیتال', 'اقدامات فوری و شکایت'),
  invest: kn('crypto-investment-scam-ponzi-complaint', 'پروژه سرمایه گذاری جعلی ارز دیجیتال', 'نشانه ها و مسیر شکایت'),
  txid: kn('crypto-evidence-txid-guide', 'TXID در شکایت ارز دیجیتال', 'شناسه تراکنش و نگهداری ادله'),
  civil: kn('crypto-criminal-vs-civil-claim', 'شکایت کیفری یا دعوای حقوقی', 'تفاوت اهداف و مدارک دو مسیر'),
  recover: kn('can-crypto-fraud-money-be-recovered', 'آیا پول کلاهبرداری ارز دیجیتال برمیگردد؟', 'پاسخ صادقانه و گامهای واقعبینانه'),
};

export function cryptoSeoTitle(spec: CryptoContentSpec): string {
  return spec.metaTitle;
}

export function toCryptoKnowledgeData(spec: CryptoContentSpec): KnowledgeArticleData {
  const image = { url: `${cryptoClusterBase}/images/seo/${spec.slug}.webp`, width: 1200, height: 675, alt: spec.imageAlt };
  return {
    slug: spec.slug,
    category: 'شکایت کیفری و جرایم فضای مجازی',
    badge: 'راهنمای تخصصی جرایم فضای مجازی',
    status: 'published',
    h1Title: spec.title,
    heroSubtitle: spec.description,
    readTime: '۸ دقیقه مطالعه',
    lastUpdated: CRYPTO_LAST_UPDATED,
    datePublished: CRYPTO_PUBLISH_DATE,
    dateModified: CRYPTO_PUBLISH_DATE,
    featuredImage: image,
    heroTrustChips: ['پاسخ کوتاه و راهنمای عملی', 'دارای پرسشهای متداول', 'محتوای آموزشی؛ نه مشاوره اختصاصی'],
    quickAnswerTitle: `پاسخ کوتاه: ${spec.title}`,
    quickAnswerParagraph: spec.answer,
    quickAnswerHighlights: spec.highlights,
    tableOfContents: spec.sections.map((section) => ({ id: section.id, title: section.title })).concat([{ id: 'faqs', title: 'پرسشهای متداول' }]),
    sections: spec.sections,
    faqTitle: 'پرسشهای متداول',
    faqs: spec.faqs,
    relatedArticles: Array.from(new Map((spec.links || []).concat([
      { title: 'راهنمای جامع جرایم فضای مجازی', href: '/knowledge/cybercrime-guide', desc: 'صفحه مادر خوشه جرایم فضای مجازی', category: 'صفحه مادر' },
    ]).map((link) => [link.href, link] as const)).values()),
    relatedServices: [{ title: 'درخواست تنظیم شکواییه', href: '/request', desc: 'شرح ماجرا و مدارک خود را برای بررسی و تنظیم متن متناسب ارائه کنید.', badge: 'خدمت نگارشیار' }],
    ctaTitle: 'برای تنظیم شکواییه متناسب با پرونده خود آمادهاید؟',
    ctaDescription: 'مدارک و شرح دقیق واقعه را آماده کنید؛ عنوان قانونی و خواسته باید با جزئیات پرونده تطبیق داده شود.',
    ctaPrimaryBtnText: 'درخواست تنظیم متن حقوقی',
    ctaPrimaryHref: '/request',
  };
}

export function toCryptoMetadata(spec: CryptoContentSpec): Metadata {
  const image = { url: `${cryptoClusterBase}/images/seo/${spec.slug}.webp`, width: 1200, height: 675, alt: spec.imageAlt };
  const title = cryptoSeoTitle(spec);
  return {
    title,
    description: spec.description,
    keywords: spec.keywords,
    alternates: { canonical: `${cryptoClusterBase}/knowledge/${spec.slug}` },
    openGraph: {
      title,
      description: spec.description,
      url: `${cryptoClusterBase}/knowledge/${spec.slug}`,
      siteName: 'نگارشیار',
      locale: 'fa_IR',
      type: 'article',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description: spec.description, images: [image.url] },
  };
}
