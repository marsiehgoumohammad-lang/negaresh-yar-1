import { buildHomepageSchemaGraph, SchemaOrgGraph } from '@/lib/seo/homepage-schema-builder';

/**
 * پاکسازی متن از تگ‌های HTML، کامنت‌ها، ویژگی‌ها و اسکریپت‌ها جهت شمارش دقیق کلمات
 */
export function stripHtmlToPlainText(input?: string | null): string {
  if (!input || typeof input !== 'string') return '';
  return input
    // حذف تگ‌های اسکریپت و استایل همراه با محتوا
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    // حذف کامنت‌های HTML
    .replace(/<!--[\s\S]*?-->/g, ' ')
    // حذف تگ‌های باز و بسته و خودبسته همراه با ویژگی‌ها (مانند <div class="foo" data-id="123">)
    .replace(/<[^>]+>/g, ' ')
    // جایگزینی کدهای HTML متداول
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    // نرمال‌سازی فضاهای خالی
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * شمارش واقعی کلمات با تکیه بر متن خالص پس از حذف کامل HTML
 * محتوای خالی یا بدون متن خروجی صفر می‌دهد
 */
export function countWordsFromContent(content?: string | null): number {
  if (!content || typeof content !== 'string') return 0;
  const plainText = stripHtmlToPlainText(content);
  if (!plainText) return 0;
  const tokens = plainText.split(/\s+/).filter(Boolean);
  return tokens.length;
}

/**
 * اعتبارسنجی دقیق URL کانونیکال بر مبنای URL parser استاندارد
 */
export interface CanonicalValidationResult {
  isValid: boolean;
  reason?: string;
  parsedUrl?: URL;
}

export function validateCanonicalUrl(
  rawUrl: unknown,
  expectedPathname: string = '/'
): CanonicalValidationResult {
  if (typeof rawUrl !== 'string' || !rawUrl.trim()) {
    return { isValid: false, reason: 'آدرس کانونیکال خالی یا نامعتبر است' };
  }

  const trimmed = rawUrl.trim();
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return { isValid: false, reason: 'قالب آدرس URL نامعتبر است' };
  }

  // ۱. پروتکل باید دقیقاً https: باشد
  if (parsed.protocol !== 'https:') {
    return { isValid: false, reason: `پروتکل باید https باشد (یافت شد: ${parsed.protocol})` };
  }

  // ۲. hostname باید دقیقاً www.negaresh-yar.ir باشد (بدون پیشوند، پسوند یا دامنه‌های جعلی مانند www.negaresh-yar.ir.fake.com)
  if (parsed.hostname !== 'www.negaresh-yar.ir') {
    return {
      isValid: false,
      reason: `نام میزبان نامعتبر است. انتظار می‌رود www.negaresh-yar.ir باشد (یافت شد: ${parsed.hostname})`,
    };
  }

  // ۳. درگاه (port) نباید مقدار غیرپیش‌فرض داشته باشد
  if (parsed.port) {
    return { isValid: false, reason: `آدرس کانونیکال نباید شامل شماره پورت باشد (یافت شد: ${parsed.port})` };
  }

  // ۴. بررسی مسیر (pathname): نرمال‌سازی اسلش انتهایی
  const normalizePath = (p: string) => {
    if (!p || p === '/') return '/';
    return p.endsWith('/') ? p.slice(0, -1) : p;
  };

  const expectedNorm = normalizePath(expectedPathname);
  const actualNorm = normalizePath(parsed.pathname);

  if (actualNorm !== expectedNorm) {
    return {
      isValid: false,
      reason: `مسیر URL (${parsed.pathname}) با مسیر مورد انتظار (${expectedPathname}) مطابقت ندارد`,
    };
  }

  // ۵. نباید دارای query param یا hash باشد
  if (parsed.search || parsed.hash) {
    return { isValid: false, reason: 'آدرس کانونیکال نباید حاوی query string یا hash باشد' };
  }

  return { isValid: true, parsedUrl: parsed };
}

/**
 * اعتبارسنجی ساختار Schema.org در سطح پیکربندی سورس
 */
export interface SchemaConfigValidationResult {
  isValid: boolean;
  checkedEntitiesCount: number;
  issues: string[];
}

export function validateHomepageSchemaConfig(graphObj?: SchemaOrgGraph): SchemaConfigValidationResult {
  const issues: string[] = [];
  if (!graphObj || typeof graphObj !== 'object') {
    return { isValid: false, checkedEntitiesCount: 0, issues: ['گراف Schema تعریف نشده است'] };
  }

  if (graphObj['@context'] !== 'https://schema.org') {
    issues.push('مقدار @context باید https://schema.org باشد');
  }

  if (!Array.isArray(graphObj['@graph']) || graphObj['@graph'].length === 0) {
    issues.push('آرایه @graph حاوی هیچ موجودیتی نیست');
    return { isValid: false, checkedEntitiesCount: 0, issues };
  }

  const entities = graphObj['@graph'];
  const entityTypes = entities.map((e) => String(e['@type'] || ''));

  // بررسی الزامی بودن موجودیت‌های Organization، WebSite و WebPage
  const requiredTypes = ['Organization', 'WebSite', 'WebPage'];
  for (const req of requiredTypes) {
    if (!entityTypes.includes(req)) {
      issues.push(`موجودیت ضروری ${req} در گراف Schema یافت نشد`);
    }
  }

  // اعتبارسنجی اطلاعات تماس رسمی و مختصات مشهد در Organization
  const org = entities.find((e) => e['@type'] === 'Organization');
  if (org) {
    if (org.telephone !== '+989915147789') {
      issues.push('شماره تلفن رسمی (+989915147789) در Organization منطبق نیست');
    }
    const geo = org.geo as Record<string, unknown> | undefined;
    if (!geo || geo.latitude !== '36.2972' || geo.longitude !== '59.6067') {
      issues.push('مختصات جغرافیایی مشهد (36.2972, 59.6067) در Organization منطبق نیست');
    }
  }

  return {
    isValid: issues.length === 0,
    checkedEntitiesCount: entities.length,
    issues,
  };
}

export { buildHomepageSchemaGraph };
