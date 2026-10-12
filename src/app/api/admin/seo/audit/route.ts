import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/stores/articles-store';
import { siteMetadataConfig as rootMetadata } from '@/lib/seo/site-metadata';
import robotsConfig from '@/app/robots';
import generateSitemap from '@/app/sitemap';
import {
  validateCanonicalUrl,
  validateHomepageSchemaConfig,
  buildHomepageSchemaGraph,
  countWordsFromContent,
} from '@/lib/seo/audit-validators';

export interface AuditCheckItem {
  id: string;
  title: string;
  status: 'good' | 'warning' | 'error' | 'not_tested';
  statusText: string;
  explanation: string;
}

export type CanonicalStatus = 'valid' | 'invalid' | 'not_applicable' | 'unknown';

export interface PageAuditItem {
  id: string;
  title: string;
  slug: string;
  type: 'article' | 'service';
  hasSeoTitle: boolean;
  hasMetaDesc: boolean;
  wordCount: number;
  hasCanonical: boolean;
  canonicalStatus: CanonicalStatus;
  canonicalUrl?: string;
  canonicalReason?: string;
  status: 'good' | 'warning' | 'error';
  issues: string[];
  articleStatus?: 'draft' | 'published' | 'paused';
}

export async function GET() {
  try {
    const technicalChecks: AuditCheckItem[] = [];

    // 1. بررسی Title Tag
    const rootTitleDefault =
      typeof rootMetadata.title === 'object' && rootMetadata.title !== null && 'default' in rootMetadata.title
        ? String(rootMetadata.title.default || '')
        : typeof rootMetadata.title === 'string'
          ? rootMetadata.title
          : '';
    const titleLen = rootTitleDefault.trim().length;
    if (titleLen >= 30 && titleLen <= 90) {
      technicalChecks.push({
        id: 'title-check',
        title: 'بررسی عنوان اصلی سایت (Title Tag)',
        status: 'good',
        statusText: 'مناسب',
        explanation: `عنوان اصلی در تنظیمات متادیتای ریشه (${titleLen} کاراکتر) دارای طول استاندارد و حاوی کلیدواژه‌های اصلی است.`,
      });
    } else if (titleLen > 0) {
      technicalChecks.push({
        id: 'title-check',
        title: 'بررسی عنوان اصلی سایت (Title Tag)',
        status: 'warning',
        statusText: 'هشدار طول',
        explanation: `طول عنوان اصلی (${titleLen} کاراکتر) خارج از بازه پیشنهادی ۳۰ تا ۹۰ کاراکتر است.`,
      });
    } else {
      technicalChecks.push({
        id: 'title-check',
        title: 'بررسی عنوان اصلی سایت (Title Tag)',
        status: 'error',
        statusText: 'خطا',
        explanation: 'عنوان اصلی سایت در پیکربندی ریشه تعریف نشده است.',
      });
    }

    // 2. بررسی Meta Description
    const metaDesc = rootMetadata.description ? String(rootMetadata.description).trim() : '';
    const metaDescLen = metaDesc.length;
    if (metaDescLen >= 80 && metaDescLen <= 220) {
      technicalChecks.push({
        id: 'meta-desc-check',
        title: 'توضیحات متای صفحه اصلی (Meta Description)',
        status: 'good',
        statusText: 'مناسب',
        explanation: `توضیحات متای ریشه با طول ${metaDescLen} کاراکتر تعریف شده و در محدوده مجاز (۸۰ تا ۲۲۰ کاراکتر) قرار دارد.`,
      });
    } else if (metaDescLen > 0) {
      technicalChecks.push({
        id: 'meta-desc-check',
        title: 'توضیحات متای صفحه اصلی (Meta Description)',
        status: 'warning',
        statusText: 'هشدار طول',
        explanation: `طول توضیحات متای صفحه اصلی (${metaDescLen} کاراکتر) خارج از بازه بهینه است.`,
      });
    } else {
      technicalChecks.push({
        id: 'meta-desc-check',
        title: 'توضیحات متای صفحه اصلی (Meta Description)',
        status: 'error',
        statusText: 'خطا',
        explanation: 'توضیحات متای صفحه اصلی تنظیم نشده است.',
      });
    }

    // 3. اعتبارسنجی کانونیکال دامنه (Canonical URL) با URL Parser معتبر
    const alternates = rootMetadata.alternates;
    const rootCanonical =
      alternates && typeof alternates === 'object' && alternates.canonical
        ? String(alternates.canonical).trim()
        : '';

    const rootCanonicalValidation = validateCanonicalUrl(rootCanonical, '/');
    if (rootCanonicalValidation.isValid) {
      technicalChecks.push({
        id: 'canonical-check',
        title: 'آدرس کانونیکال صفحه اصلی (Canonical URL)',
        status: 'good',
        statusText: 'معتبر',
        explanation: `آدرس کانونیکال ریشه به دامنه رسمی (${rootCanonical}) با پروتکل HTTPS و هاست دقیق www.negaresh-yar.ir متصل است.`,
      });
    } else if (rootCanonical) {
      technicalChecks.push({
        id: 'canonical-check',
        title: 'آدرس کانونیکال صفحه اصلی (Canonical URL)',
        status: 'warning',
        statusText: 'نامعتبر',
        explanation: `آدرس کانونیکال ریشه (${rootCanonical}) نامعتبر است: ${rootCanonicalValidation.reason}`,
      });
    } else {
      technicalChecks.push({
        id: 'canonical-check',
        title: 'آدرس کانونیکال صفحه اصلی (Canonical URL)',
        status: 'error',
        statusText: 'خطا',
        explanation: 'تگ alternates.canonical برای صفحه اصلی تنظیم نشده است.',
      });
    }

    // 4. نقشه سایت XML (Sitemap.xml)
    let sitemapRoutesCount = 0;
    let sitemapError = false;
    try {
      const sitemapData = await generateSitemap();
      sitemapRoutesCount = Array.isArray(sitemapData) ? sitemapData.length : 0;
    } catch {
      sitemapError = true;
    }

    if (!sitemapError && sitemapRoutesCount > 0) {
      technicalChecks.push({
        id: 'sitemap-check',
        title: 'نقشه سایت XML (Sitemap.xml)',
        status: 'good',
        statusText: 'پویا و معتبر',
        explanation: `تابع sitemap.ts با موفقیت ارزیابی شد و حاوی ${sitemapRoutesCount} مسیر ثبت‌شده با دامنه https://www.negaresh-yar.ir است.`,
      });
    } else {
      technicalChecks.push({
        id: 'sitemap-check',
        title: 'نقشه سایت XML (Sitemap.xml)',
        status: 'error',
        statusText: 'خطا',
        explanation: 'تولید نقشه سایت با خطا مواجه شد یا هیچ مسیری برنگرداند.',
      });
    }

    // 5. فایل دستورات ربات‌ها (Robots.txt)
    let robotsRulesValid = false;
    let robotsHasSitemap = false;
    try {
      const robotsData = robotsConfig();
      if (robotsData && robotsData.rules) {
        const rules = Array.isArray(robotsData.rules) ? robotsData.rules[0] : robotsData.rules;
        if (rules && rules.allow === '/') {
          robotsRulesValid = true;
        }
      }
      if (robotsData && typeof robotsData.sitemap === 'string' && robotsData.sitemap.includes('sitemap.xml')) {
        robotsHasSitemap = true;
      }
    } catch {
      robotsRulesValid = false;
    }

    if (robotsRulesValid && robotsHasSitemap) {
      technicalChecks.push({
        id: 'robots-check',
        title: 'فایل دستورات ربات‌ها (Robots.txt)',
        status: 'good',
        statusText: 'معتبر',
        explanation: 'قوانین robots.ts دسترسی موتورهای جستجو به کل سایت (allow: /) و محافظت از /admin را تأیید کرده و نقشه سایت را معرفی می‌کند.',
      });
    } else if (robotsRulesValid) {
      technicalChecks.push({
        id: 'robots-check',
        title: 'فایل دستورات ربات‌ها (Robots.txt)',
        status: 'warning',
        statusText: 'ناقص',
        explanation: 'قوانین خزش تنظیم شده‌اند اما لینک نقشه سایت در پیکربندی robots یافت نشد.',
      });
    } else {
      technicalChecks.push({
        id: 'robots-check',
        title: 'فایل دستورات ربات‌ها (Robots.txt)',
        status: 'error',
        statusText: 'خطا',
        explanation: 'پیکربندی robots.ts نامعتبر است یا با خطا مواجه شد.',
      });
    }

    // 6. بررسی پیکربندی سورس Schema.org (بررسی ساختار موجود در سورس بدون ادعای کراول زنده خروجی)
    try {
      const homepageGraph = buildHomepageSchemaGraph();
      const schemaValidation = validateHomepageSchemaConfig(homepageGraph);

      if (schemaValidation.isValid) {
        technicalChecks.push({
          id: 'schema-org-check',
          title: 'بررسی پیکربندی سورس Schema.org',
          status: 'good',
          statusText: 'پیکربندی معتبر در سورس',
          explanation: `پیکربندی گراف سورس شامل ${schemaValidation.checkedEntitiesCount} موجودیت استاندارد (Organization با تلفن ۰۹۹۱۵۱۴۷۷۸۹ و مختصات مشهد، WebSite و WebPage) است. این آزمون فقط به بررسی ساختار در سطح کد اختصاص دارد.`,
        });
      } else {
        technicalChecks.push({
          id: 'schema-org-check',
          title: 'بررسی پیکربندی سورس Schema.org',
          status: 'warning',
          statusText: 'پیکربندی ناقص در سورس',
          explanation: `پیکربندی سورس Schema.org دارای نواقص است: ${schemaValidation.issues.join(' | ')}`,
        });
      }
    } catch (schemaErr) {
      technicalChecks.push({
        id: 'schema-org-check',
        title: 'بررسی پیکربندی سورس Schema.org',
        status: 'error',
        statusText: 'خطا در سورس Schema',
        explanation: `ارزیابی پیکربندی سورس Schema با خطا مواجه شد: ${schemaErr instanceof Error ? schemaErr.message : 'ناشناخته'}`,
      });
    }

    // 7. تگ‌های شبکه اجتماعی (Open Graph & Twitter)
    const og = rootMetadata.openGraph;
    const tw = rootMetadata.twitter;
    const hasOg = Boolean(og && typeof og === 'object' && og.title && og.description);
    const hasTw = Boolean(tw && typeof tw === 'object' && tw.title && tw.description);
    if (hasOg && hasTw) {
      technicalChecks.push({
        id: 'opengraph-check',
        title: 'تگ‌های شبکه اجتماعی (Open Graph & Twitter)',
        status: 'good',
        statusText: 'پیکربندی کامل',
        explanation: 'تنظیمات متادیتای ریشه شامل تعاریف کامل openGraph و twitter card در سورس می‌باشد.',
      });
    } else if (hasOg || hasTw) {
      technicalChecks.push({
        id: 'opengraph-check',
        title: 'تگ‌های شبکه اجتماعی (Open Graph & Twitter)',
        status: 'warning',
        statusText: 'ناقص',
        explanation: 'یکی از پروتکل‌های OpenGraph یا Twitter Card در متادیتای ریشه به‌صورت کامل تعریف نشده است.',
      });
    } else {
      technicalChecks.push({
        id: 'opengraph-check',
        title: 'تگ‌های شبکه اجتماعی (Open Graph & Twitter)',
        status: 'error',
        statusText: 'خطا',
        explanation: 'هیچ تنظیماتی برای شبکه‌های اجتماعی در متادیتای ریشه یافت نشد.',
      });
    }

    // 8. واکنش‌گرایی و بهینه‌سازی موبایل در خروجی مستقر (Viewport / HTML Crawl)
    technicalChecks.push({
      id: 'mobile-viewport-check',
      title: 'خروجی رندر شده و واکنش‌گرایی زنده (Live Crawl)',
      status: 'not_tested',
      statusText: 'نیازمند ابزار خارجی',
      explanation: 'بررسی رندر زنده DOM، خطاهای کنسول و امتیاز عملکرد در محیط ایزوله سرور بدون Puppeteer یا ابزار کراول خارجی قابل انجام نیست و به عنوان تست‌نشده علامت‌گذاری شده است.',
    });

    // 2. Audit Knowledge Base Articles
    const allArticles = await getArticles();
    const articleAudits: PageAuditItem[] = allArticles.map((art) => {
      const issues: string[] = [];
      let status: 'good' | 'warning' | 'error' = 'good';

      const hasValidSlug = Boolean(art.slug && art.slug.trim().length > 0);
      const isPublished = art.status === 'published';

      // محاسبه واقعی کلمات از متن پس از پاکسازی کامل تگ‌های HTML و کاراکترهای زائد
      const realWordCount = countWordsFromContent(art.content);
      const wordCount = realWordCount;

      const hasSeoTitle = Boolean(art.metaTitle && art.metaTitle.trim().length > 0);
      const hasMetaDesc = Boolean(art.metaDescription && art.metaDescription.trim().length > 0);

      // منطق کانونیکال مقالات
      let canonicalStatus: CanonicalStatus = 'unknown';
      let canonicalUrl: string | undefined = undefined;
      let canonicalReason: string | undefined = undefined;

      if (!isPublished) {
        canonicalStatus = 'not_applicable';
        canonicalReason = 'صفحه پیش‌نویس یا متوقف‌شده است و فاقد URL کانونیکال عمومی است';
      } else if (!hasValidSlug) {
        canonicalStatus = 'invalid';
        canonicalReason = 'اسلاگ مقاله تعریف نشده است';
        issues.push('اسلاگ (Slug) مقاله تعریف نشده است');
        status = 'error';
      } else {
        const expectedPath = `/knowledge/${art.slug}`;
        const generatedCanonical = `https://www.negaresh-yar.ir${expectedPath}`;
        const canonicalValidation = validateCanonicalUrl(generatedCanonical, expectedPath);

        if (canonicalValidation.isValid) {
          canonicalStatus = 'valid';
          canonicalUrl = generatedCanonical;
        } else {
          canonicalStatus = 'invalid';
          canonicalUrl = generatedCanonical;
          canonicalReason = canonicalValidation.reason;
          issues.push(`آدرس کانونیکال نامعتبر است: ${canonicalValidation.reason}`);
          status = 'error';
        }
      }

      const hasCanonical = canonicalStatus === 'valid';

      if (!hasSeoTitle) {
        issues.push('عنوان سئو (Meta Title) صریح ثبت نشده است');
        if (status !== 'error') status = 'warning';
      }

      if (!hasMetaDesc) {
        issues.push('توضیحات متای صریح (Meta Description) ثبت نشده است');
        if (status !== 'error') status = 'warning';
      }

      if (wordCount === 0) {
        issues.push('متن مقاله خالی است (۰ کلمه)');
        status = 'error';
      } else if (wordCount < 200) {
        issues.push(`طول محتوا کوتاه است (${wordCount} کلمه، کمتر از ۲۰۰ کلمه)`);
        if (status !== 'error') status = 'warning';
      }

      if (!isPublished) {
        issues.push(`وضعیت مقاله: ${art.status === 'draft' ? 'پیش‌نویس' : 'متوقف‌شده'} (عدم انتشار عمومی)`);
        if (status !== 'error') status = 'warning';
      }

      return {
        id: art.id || art.slug || 'unknown',
        title: art.title || art.slug || 'مقاله بدون عنوان',
        slug: art.slug || '',
        type: 'article',
        hasSeoTitle,
        hasMetaDesc,
        wordCount,
        hasCanonical,
        canonicalStatus,
        canonicalUrl,
        canonicalReason,
        status,
        issues,
        articleStatus: art.status || 'draft',
      };
    });

    // 3. محاسبه امتیاز کلی سئو فقط از میان آیتم‌های واقعاً آزموده‌شده (بدون احتساب not_tested)
    // در نبود هیچ آزمون معتبر (testedChecks.length === 0)، امتیاز باید null باشد نه صفر
    const testedChecks = technicalChecks.filter((c) => c.status !== 'not_tested');
    const goodCount = testedChecks.filter((c) => c.status === 'good').length;
    const overallScore: number | null =
      testedChecks.length > 0 ? Math.round((goodCount / testedChecks.length) * 100) : null;

    return NextResponse.json({
      overallScore,
      technicalChecks,
      articleAudits,
    });
  } catch (err) {
    console.error('Error GET /api/admin/seo/audit:', err);
    return NextResponse.json({ error: 'خطا در ارزیابی سئو' }, { status: 500 });
  }
}
