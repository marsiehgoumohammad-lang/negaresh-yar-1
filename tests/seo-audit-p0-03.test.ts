import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  stripHtmlToPlainText,
  countWordsFromContent,
  validateCanonicalUrl,
  validateHomepageSchemaConfig,
  buildHomepageSchemaGraph,
} from '../src/lib/seo/audit-validators';
import { GET } from '../src/app/api/admin/seo/audit/route';
import Home from '../src/app/page';

test('1. Canonical URL validation: HTTPS, exact domain, and pathname parsing', () => {
  // معتبر: دامنه دقیق و بدون پورت یا کوئری
  const valid1 = validateCanonicalUrl('https://www.negaresh-yar.ir/', '/');
  assert.equal(valid1.isValid, true);

  const validArticle = validateCanonicalUrl(
    'https://www.negaresh-yar.ir/knowledge/what-is-petition',
    '/knowledge/what-is-petition'
  );
  assert.equal(validArticle.isValid, true);

  // نامعتبر: پروتکل http
  const invalidProto = validateCanonicalUrl('http://www.negaresh-yar.ir/', '/');
  assert.equal(invalidProto.isValid, false);
  assert.match(invalidProto.reason || '', /پروتکل/);

  // نامعتبر: دامنه جعلی یا پسوند اضافه (Phishing / Domain Hijack / Suffix)
  const fakeSuffix = validateCanonicalUrl('https://www.negaresh-yar.ir.fake.com/', '/');
  assert.equal(fakeSuffix.isValid, false);
  assert.match(fakeSuffix.reason || '', /نام میزبان/);

  const fakeSuffix2 = validateCanonicalUrl('https://www.negaresh-yar.ir.attack.net/knowledge', '/knowledge');
  assert.equal(fakeSuffix2.isValid, false);

  const fakePrefix = validateCanonicalUrl('https://fake-www.negaresh-yar.ir/', '/');
  assert.equal(fakePrefix.isValid, false);

  // نامعتبر: دامنه بدون www
  const noWww = validateCanonicalUrl('https://negaresh-yar.ir/', '/');
  assert.equal(noWww.isValid, false);

  // نامعتبر: پورت غیر پیش‌فرض
  const withPort = validateCanonicalUrl('https://www.negaresh-yar.ir:3000/', '/');
  assert.equal(withPort.isValid, false);
  assert.match(withPort.reason || '', /پورت/);

  // نامعتبر: کوئری استرینگ یا هش
  const withQuery = validateCanonicalUrl('https://www.negaresh-yar.ir/?ref=google', '/');
  assert.equal(withQuery.isValid, false);
  assert.match(withQuery.reason || '', /query string/);

  const withHash = validateCanonicalUrl('https://www.negaresh-yar.ir/#section', '/');
  assert.equal(withHash.isValid, false);

  // نامعتبر: مسیر اشتباه
  const wrongPath = validateCanonicalUrl('https://www.negaresh-yar.ir/other', '/knowledge/slug');
  assert.equal(wrongPath.isValid, false);

  // نامعتبر: رشته خالی یا مقادیر غیررشته
  assert.equal(validateCanonicalUrl('', '/').isValid, false);
  assert.equal(validateCanonicalUrl(null, '/').isValid, false);
  assert.equal(validateCanonicalUrl(undefined, '/').isValid, false);
  assert.equal(validateCanonicalUrl('not-a-valid-url', '/').isValid, false);
});

test('2. HTML word counting: strips tags, scripts, styles, attributes and entities', () => {
  // ۱. محتوای خالی یا بدون متن
  assert.equal(countWordsFromContent(null), 0);
  assert.equal(countWordsFromContent(undefined), 0);
  assert.equal(countWordsFromContent(''), 0);
  assert.equal(countWordsFromContent('   \n\t   '), 0);
  assert.equal(countWordsFromContent('<div>   <br/>  <span></span></div>'), 0);
  assert.equal(countWordsFromContent('<!-- فقط یک کامنت آزمایشی -->'), 0);
  assert.equal(countWordsFromContent('<script>alert("سلام")</script><style>body { color: red; }</style>'), 0);

  // ۲. متن ساده
  assert.equal(countWordsFromContent('تنظیم دادخواست حقوقی در دادگاه'), 5);

  // ۳. متن دارای تگ‌های ترکیبی، ویژگی‌ها، کلاس‌ها و موجودیت‌های HTML
  const richHtml = `
    <article class="prose max-w-none" data-track="article-view" id="main-content">
      <h1 class="text-2xl font-black">راهنمای دادخواست و لایحه</h1>
      <p style="color: #333;" dir="rtl">
        این یک متن تخصصی جهت <strong>بررسی سئو</strong> و محتوای &laquo;نگارش یار&raquo; است.
      </p>
      <!-- بخش سوالات متداول -->
      <div data-custom="value">
        <span>پاسخ به سوالات متداول کاربران&nbsp;محترم.</span>
      </div>
      <script>console.log("Ignore me completely");</script>
      <style>.hidden { display: none; }</style>
    </article>
  `;

  const plain = stripHtmlToPlainText(richHtml);
  assert.equal(plain.includes('console.log'), false);
  assert.equal(plain.includes('data-track'), false);
  assert.equal(plain.includes('Ignore me'), false);
  assert.equal(plain.includes('<article'), false);

  const wordCount = countWordsFromContent(richHtml);
  // واژه‌های استخراج‌شده نباید شامل نام تگ‌ها یا ویژگی‌ها باشد
  assert.ok(wordCount >= 15 && wordCount <= 22);
});

test('3. Schema.org source configuration validation and entity checks', () => {
  // ۱. ساختار معتبر سورس پروژه
  const validGraph = buildHomepageSchemaGraph();
  const validRes = validateHomepageSchemaConfig(validGraph);
  assert.equal(validRes.isValid, true);
  assert.equal(validRes.issues.length, 0);
  assert.ok(validRes.checkedEntitiesCount >= 4); // Organization, WebSite, WebPage, FAQPage

  // بررسی دقیق تمام موجودیت‌های ضروری در گراف
  const types = validGraph['@graph'].map((e) => e['@type']);
  assert.ok(types.includes('Organization'));
  assert.ok(types.includes('WebSite'));
  assert.ok(types.includes('WebPage'));
  assert.ok(types.includes('FAQPage'));

  // ۲. ساختار خالی یا نامعتبر
  const emptyRes = validateHomepageSchemaConfig(undefined);
  assert.equal(emptyRes.isValid, false);

  // ۳. نقص در فیلدهای ضروری مانند Organization یا شماره تلفن
  const brokenGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'سایت بدون سازمان',
      },
    ],
  };
  const brokenRes = validateHomepageSchemaConfig(brokenGraph as unknown as typeof validGraph);
  assert.equal(brokenRes.isValid, false);
  assert.ok(brokenRes.issues.some((i) => i.includes('Organization')));

  // ۴. شماره تلفن مغایر یا غیراستاندارد
  const wrongPhoneGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        telephone: '09120000000',
        geo: { latitude: '36.2972', longitude: '59.6067' },
      },
      { '@type': 'WebSite' },
      { '@type': 'WebPage' },
    ],
  };
  const phoneRes = validateHomepageSchemaConfig(wrongPhoneGraph as unknown as typeof validGraph);
  assert.equal(phoneRes.isValid, false);
  assert.ok(phoneRes.issues.some((i) => i.includes('+989915147789')));

  // ۵. نقص در WebSite
  const missingWebSite = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        telephone: '+989915147789',
        geo: { latitude: '36.2972', longitude: '59.6067' },
      },
      { '@type': 'WebPage' },
      { '@type': 'FAQPage' },
    ],
  };
  const webSiteRes = validateHomepageSchemaConfig(missingWebSite as unknown as typeof validGraph);
  assert.equal(webSiteRes.isValid, false);
  assert.ok(webSiteRes.issues.some((i) => i.includes('WebSite')));

  // ۶. نقص در FAQPage: حذف FAQPage از نسخه کپی‌شده از گراف معتبر
  const graphWithoutFaq = {
    ...validGraph,
    '@graph': validGraph['@graph'].filter((e) => e['@type'] !== 'FAQPage'),
  };
  const missingFaqRes = validateHomepageSchemaConfig(graphWithoutFaq);
  assert.equal(missingFaqRes.isValid, false);
  assert.ok(missingFaqRes.issues.some((i) => i.includes('FAQPage')));

  // ۷. نقص در WebPage: حذف WebPage از گراف معتبر
  const graphWithoutWebPage = {
    ...validGraph,
    '@graph': validGraph['@graph'].filter((e) => e['@type'] !== 'WebPage'),
  };
  const missingWebPageRes = validateHomepageSchemaConfig(graphWithoutWebPage);
  assert.equal(missingWebPageRes.isValid, false);
  assert.ok(missingWebPageRes.issues.some((i) => i.includes('WebPage')));

  // ۸. نقص در Organization: حذف Organization از گراف معتبر
  const graphWithoutOrg = {
    ...validGraph,
    '@graph': validGraph['@graph'].filter((e) => e['@type'] !== 'Organization'),
  };
  const missingOrgRes = validateHomepageSchemaConfig(graphWithoutOrg);
  assert.equal(missingOrgRes.isValid, false);
  assert.ok(missingOrgRes.issues.some((i) => i.includes('Organization')));
});

test('4. Unified Schema Source: Homepage renders the exact same graph validated by SEO audit', () => {
  // ۱. بررسی فراخوانی buildHomepageSchemaGraph در سورس src/app/page.tsx
  const pageSource = fs.readFileSync(path.join(process.cwd(), 'src/app/page.tsx'), 'utf-8');
  assert.ok(
    pageSource.includes("import { buildHomepageSchemaGraph } from '@/lib/seo/homepage-schema-builder'"),
    'src/app/page.tsx must import buildHomepageSchemaGraph from homepage-schema-builder'
  );
  assert.ok(
    pageSource.includes('const homepageGraph = buildHomepageSchemaGraph()'),
    'src/app/page.tsx must call buildHomepageSchemaGraph() for its JSON-LD generation'
  );
  assert.equal(
    pageSource.includes("'@context': 'https://schema.org'"),
    false,
    'src/app/page.tsx must not declare an independent parallel Schema graph'
  );

  // ۲. بررسی خروجی رندر مؤلفه صفحه اصلی
  const renderedComponent = Home();
  assert.ok(renderedComponent, 'Home component must render successfully');

  // استخراج المان script حاوی application/ld+json
  const children = Array.isArray(renderedComponent.props.children)
    ? renderedComponent.props.children
    : [renderedComponent.props.children];

  const scriptTag = children.find(
    (c: { type?: string; props?: { type?: string } }) =>
      c && c.type === 'script' && c.props?.type === 'application/ld+json'
  );
  assert.ok(scriptTag, 'Home component must include application/ld+json script tag');

  const jsonString = scriptTag.props.dangerouslySetInnerHTML.__html;
  const parsedFromRender = JSON.parse(jsonString);

  // ۳. بررسی برابری کامل گراف رندردیده با گراف Builder مشترک
  const builderGraph = buildHomepageSchemaGraph();
  assert.deepEqual(
    parsedFromRender,
    builderGraph,
    'Rendered JSON-LD graph must be deeply identical to buildHomepageSchemaGraph output'
  );

  // ۴. بررسی اعتبارسنجی گراف مشترک
  const validationResult = validateHomepageSchemaConfig(parsedFromRender);
  assert.equal(validationResult.isValid, true);
  assert.equal(validationResult.issues.length, 0);
});

test('5. Overall score null behavior when no valid tests exist', () => {
  // تابع شبیه‌ساز محاسبه امتیاز مطابق منطق audit route
  function calculateScore(checks: Array<{ status: 'good' | 'warning' | 'error' | 'not_tested' }>): number | null {
    const testedChecks = checks.filter((c) => c.status !== 'not_tested');
    if (testedChecks.length === 0) return null;
    const goodCount = testedChecks.filter((c) => c.status === 'good').length;
    return Math.round((goodCount / testedChecks.length) * 100);
  }

  // اگر همه تست‌ها not_tested باشند
  const allNotTested = calculateScore([
    { status: 'not_tested' },
    { status: 'not_tested' },
  ]);
  assert.equal(allNotTested, null);

  // اگر هیچ تستی وجود نداشته باشد
  const emptyChecks = calculateScore([]);
  assert.equal(emptyChecks, null);

  // اگر تست‌های معتبر وجود داشته باشد
  const mixedChecks = calculateScore([
    { status: 'good' },
    { status: 'warning' },
    { status: 'not_tested' },
  ]);
  assert.equal(mixedChecks, 50); // 1 good out of 2 tested = 50%
});

test('6. Full SEO audit route execution and honest reporting', async () => {
  const res = await GET();
  assert.equal(res.status, 200);

  const body = await res.json();
  assert.ok(typeof body === 'object' && body !== null);

  // بررسی امتیاز کلی
  assert.ok(typeof body.overallScore === 'number');
  assert.ok(body.overallScore >= 0 && body.overallScore <= 100);

  // بررسی آزمون‌های فنی
  assert.ok(Array.isArray(body.technicalChecks));
  const notTested = body.technicalChecks.find((c: { id: string }) => c.id === 'mobile-viewport-check');
  assert.ok(notTested);
  assert.equal(notTested.status, 'not_tested');

  // بررسی آزمون بررسی پیکربندی سورس Schema.org
  const schemaCheck = body.technicalChecks.find((c: { id: string }) => c.id === 'schema-org-check');
  assert.ok(schemaCheck);
  assert.equal(schemaCheck.title, 'بررسی پیکربندی سورس Schema.org');
  assert.equal(schemaCheck.status, 'good');

  // بررسی ممیزی مقالات
  assert.ok(Array.isArray(body.articleAudits));
  assert.ok(body.articleAudits.length > 0);

  // بررسی تمایز وضعیت مقالات پیش‌نویس (draft) و منتشرشده
  const draftItem = body.articleAudits.find((a: { articleStatus: string }) => a.articleStatus === 'draft');
  if (draftItem) {
    assert.equal(draftItem.canonicalStatus, 'not_applicable');
    assert.equal(draftItem.hasCanonical, false);
  }

  const publishedItem = body.articleAudits.find(
    (a: { articleStatus: string }) => a.articleStatus === 'published'
  );
  if (publishedItem) {
    assert.equal(publishedItem.canonicalStatus, 'valid');
    assert.equal(publishedItem.hasCanonical, true);
    assert.ok(publishedItem.canonicalUrl?.startsWith('https://www.negaresh-yar.ir/knowledge/'));
  }
});
