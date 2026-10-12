import test from 'node:test';
import assert from 'node:assert';
import {
  isLeapJalaaliYear,
  isValidJalaaliDate,
  isLeapGregorianYear,
  isValidGregorianDate,
  jalaliToGregorian,
  resolveIsoDate,
} from '../src/components/knowledge/KnowledgeArticleTemplate';
import { ALL_KNOWLEDGE_ARTICLES } from '../src/data/knowledge';
import { adaptArticleToKnowledgeData } from '../src/lib/knowledge-adapter';
import { Article } from '../src/lib/stores/types';

test('1. Valid Shamsi calendar dates convert accurately to Gregorian ISO 8601', () => {
  // Standard dates
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۷/۰۸'), '2024-09-29');
  assert.strictEqual(resolveIsoDate('1403/07/08'), '2024-09-29');
  assert.strictEqual(resolveIsoDate('۱۴۰۵/۰۷/۱۷'), '2026-10-09');
  assert.strictEqual(resolveIsoDate('۱۴۰۵/۰۷/۱۳'), '2026-10-05');
  assert.strictEqual(resolveIsoDate('۱۴۰۴/۱۱/۲۰'), '2026-02-09');
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۵/۲۰'), '2024-08-10');

  // Months 1-6 have 31 days (Farvardin to Shahrivar)
  assert.strictEqual(resolveIsoDate('۱۴۰۱/۰۶/۳۱'), '2022-09-22');
  assert.strictEqual(resolveIsoDate('۱۴۰۵/۰۶/۳۱'), '2026-09-22');
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۱/۰۱'), '2024-03-20');

  // Jalali leap year 1403: Esfand has 30 days
  assert.strictEqual(isLeapJalaaliYear(1403), true);
  assert.strictEqual(isValidJalaaliDate(1403, 12, 30), true);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۱۲/۳۰'), '2025-03-20');
});

test('2. Invalid Shamsi calendar dates are strictly rejected', () => {
  // 1405 is NOT a leap year -> Esfand 30 is invalid!
  assert.strictEqual(isLeapJalaaliYear(1405), false);
  assert.strictEqual(isValidJalaaliDate(1405, 12, 30), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۵/۱۲/۳۰'), undefined);

  // Months 7-11 have only 30 days in Solar Hijri -> day 31 is invalid!
  assert.strictEqual(isValidJalaaliDate(1403, 7, 31), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۷/۳۱'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۵/۰۷/۳۱'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۸/۳۱'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۹/۳۱'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۱۰/۳۱'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۱۱/۳۱'), undefined);

  // Esfand day 31 never exists
  assert.strictEqual(isValidJalaaliDate(1403, 12, 31), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۱۲/۳۱'), undefined);

  // Out of range month or day
  assert.strictEqual(isValidJalaaliDate(1403, 0, 10), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۰/۱۰'), undefined);
  assert.strictEqual(isValidJalaaliDate(1403, 13, 1), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۱۳/۰۱'), undefined);
  assert.strictEqual(isValidJalaaliDate(1403, 5, 0), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۵/۰۰'), undefined);
  assert.strictEqual(isValidJalaaliDate(1403, 5, 32), false);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۵/۳۲'), undefined);
});

test('3. Valid Gregorian calendar dates are accepted', () => {
  assert.strictEqual(resolveIsoDate('2024-02-29'), '2024-02-29'); // Leap year
  assert.strictEqual(resolveIsoDate('2024-02-29T10:30:00Z'), '2024-02-29');
  assert.strictEqual(resolveIsoDate('2026-06-30'), '2026-06-30');
  assert.strictEqual(resolveIsoDate('2000-02-29'), '2000-02-29'); // Divisible by 400
  assert.strictEqual(resolveIsoDate('2026/01/15'), '2026-01-15');
});

test('4. Invalid Gregorian calendar dates are strictly rejected', () => {
  // February leap checks
  assert.strictEqual(isLeapGregorianYear(2025), false);
  assert.strictEqual(isValidGregorianDate(2025, 2, 29), false);
  assert.strictEqual(resolveIsoDate('2025-02-29'), undefined);
  assert.strictEqual(isLeapGregorianYear(1900), false); // Century year not divisible by 400
  assert.strictEqual(isValidGregorianDate(1900, 2, 29), false);
  assert.strictEqual(resolveIsoDate('1900-02-29'), undefined);

  // Months with 30 days: day 31 is invalid
  assert.strictEqual(isValidGregorianDate(2026, 6, 31), false); // June
  assert.strictEqual(resolveIsoDate('2026-06-31'), undefined);
  assert.strictEqual(isValidGregorianDate(2026, 4, 31), false); // April
  assert.strictEqual(resolveIsoDate('2026-04-31'), undefined);
  assert.strictEqual(isValidGregorianDate(2026, 9, 31), false); // September
  assert.strictEqual(resolveIsoDate('2026-09-31'), undefined);
  assert.strictEqual(isValidGregorianDate(2026, 11, 31), false); // November
  assert.strictEqual(resolveIsoDate('2026-11-31'), undefined);

  // Month or day out of bounds
  assert.strictEqual(isValidGregorianDate(2026, 13, 1), false);
  assert.strictEqual(resolveIsoDate('2026-13-01'), undefined);
  assert.strictEqual(isValidGregorianDate(2026, 0, 10), false);
  assert.strictEqual(resolveIsoDate('2026-00-10'), undefined);
  assert.strictEqual(isValidGregorianDate(2026, 5, 32), false);
  assert.strictEqual(resolveIsoDate('2026-05-32'), undefined);
});

test('5. Empty, incomplete, or malformed inputs are rejected safely', () => {
  assert.strictEqual(resolveIsoDate(undefined), undefined);
  assert.strictEqual(resolveIsoDate(null), undefined);
  assert.strictEqual(resolveIsoDate(''), undefined);
  assert.strictEqual(resolveIsoDate('   '), undefined);
  assert.strictEqual(resolveIsoDate('invalid-string'), undefined);
  assert.strictEqual(resolveIsoDate('1403'), undefined);
  assert.strictEqual(resolveIsoDate('2026'), undefined);

  // Exact matching enforcement: strings containing a date plus prefix or suffix text must be rejected
  assert.strictEqual(resolveIsoDate('تاریخ ۱۴۰۳/۰۷/۰۸'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۳/۰۷/۰۸ توضیحات'), undefined);
  assert.strictEqual(resolveIsoDate('abc2024-09-29'), undefined);
  assert.strictEqual(resolveIsoDate('2024-09-29xyz'), undefined);
  assert.strictEqual(resolveIsoDate('2024-09-29 blah'), undefined);
  assert.strictEqual(resolveIsoDate('1403/07/08 extra'), undefined);
  assert.strictEqual(resolveIsoDate('prefix 1403-07-08'), undefined);
  assert.strictEqual(resolveIsoDate('1403.07.08'), undefined); // unsupported separator
});

test('6. Approximate month/year dates without exact day are never synthesized', () => {
  assert.strictEqual(resolveIsoDate('مرداد ۱۴۰۵'), undefined);
  assert.strictEqual(resolveIsoDate('مهر ۱۴۰۵'), undefined);
  assert.strictEqual(resolveIsoDate('فروردین ۱۴۰۵'), undefined);
  assert.strictEqual(resolveIsoDate('شهریور ۱۴۰۵'), undefined);
  assert.strictEqual(resolveIsoDate('اسفند ۱۴۰۴'), undefined);
  assert.strictEqual(resolveIsoDate('شهریور ۱۴۰۵ (بروزرسانی جدید بانک مرکزی)'), undefined);
  assert.strictEqual(resolveIsoDate('۱۴۰۵/۰۷'), undefined);
  assert.strictEqual(resolveIsoDate('2024-05'), undefined);
});

test('7. Schema Article datePublished and dateModified resolution behavior', () => {
  // Helper simulating Article Schema builder in KnowledgeArticleTemplate
  function buildArticleEntityDates(data: { datePublished?: string; dateModified?: string; lastUpdated?: string }) {
    const articleEntity: Record<string, string> = {};
    const resolvedDatePublished = resolveIsoDate(data.datePublished);
    const resolvedDateModified = resolveIsoDate(data.dateModified || data.lastUpdated);

    if (resolvedDatePublished) {
      articleEntity.datePublished = resolvedDatePublished;
    }
    if (resolvedDateModified) {
      articleEntity.dateModified = resolvedDateModified;
    }
    return articleEntity;
  }

  // Case A: Article with valid lastUpdated but no datePublished
  const entityA = buildArticleEntityDates({
    lastUpdated: '۱۴۰۳/۰۷/۰۸',
  });
  assert.strictEqual(entityA.dateModified, '2024-09-29');
  assert.strictEqual(entityA.datePublished, undefined);
  assert.strictEqual('datePublished' in entityA, false);

  // Case B: Article with approximate month/year and no datePublished
  const entityB = buildArticleEntityDates({
    lastUpdated: 'مرداد ۱۴۰۵',
  });
  assert.strictEqual(entityB.dateModified, undefined);
  assert.strictEqual(entityB.datePublished, undefined);
  assert.strictEqual('dateModified' in entityB, false);
  assert.strictEqual('datePublished' in entityB, false);

  // Case C: Article with both valid datePublished and dateModified
  const entityC = buildArticleEntityDates({
    datePublished: '2024-01-15',
    dateModified: '۱۴۰۳/۰۷/۰۸',
  });
  assert.strictEqual(entityC.datePublished, '2024-01-15');
  assert.strictEqual(entityC.dateModified, '2024-09-29');

  // Case D: Article with invalid dates
  const entityD = buildArticleEntityDates({
    datePublished: '1405/12/30', // Invalid Shamsi leap
    dateModified: '2026-06-31', // Invalid Gregorian June 31
  });
  assert.strictEqual('datePublished' in entityD, false);
  assert.strictEqual('dateModified' in entityD, false);
});

test('8. Real knowledge article verification across project data', () => {
  // Article 1: what-is-legal-notice (has exact date '۱۴۰۳/۰۷/۰۸')
  const artNotice = ALL_KNOWLEDGE_ARTICLES.find((a) => a.slug === 'what-is-legal-notice');
  assert.ok(artNotice, 'what-is-legal-notice must exist');
  assert.strictEqual(artNotice.lastUpdated, '۱۴۰۳/۰۷/۰۸');
  assert.strictEqual(artNotice.datePublished, undefined);
  const isoNoticeModified = resolveIsoDate(artNotice.lastUpdated);
  const isoNoticePublished = resolveIsoDate(artNotice.datePublished);
  assert.strictEqual(isoNoticeModified, '2024-09-29');
  assert.strictEqual(isoNoticePublished, undefined);

  // Article 2: lawyer-in-dezful-guide (has exact date '۱۴۰۵/۰۷/۱۷')
  const artDezful = ALL_KNOWLEDGE_ARTICLES.find((a) => a.slug === 'lawyer-in-dezful-guide');
  assert.ok(artDezful, 'lawyer-in-dezful-guide must exist');
  assert.strictEqual(artDezful.lastUpdated, '۱۴۰۵/۰۷/۱۷');
  assert.strictEqual(artDezful.datePublished, undefined);
  const isoDezfulModified = resolveIsoDate(artDezful.lastUpdated);
  const isoDezfulPublished = resolveIsoDate(artDezful.datePublished);
  assert.strictEqual(isoDezfulModified, '2026-10-09');
  assert.strictEqual(isoDezfulPublished, undefined);

  // Article 3: what-is-insolvency (has approximate month/year 'مرداد ۱۴۰۵')
  const artInsolvency = ALL_KNOWLEDGE_ARTICLES.find((a) => a.slug === 'what-is-insolvency');
  assert.ok(artInsolvency, 'what-is-insolvency must exist');
  assert.strictEqual(artInsolvency.lastUpdated, 'مرداد ۱۴۰۵');
  assert.strictEqual(artInsolvency.datePublished, undefined);
  const isoInsolvencyModified = resolveIsoDate(artInsolvency.lastUpdated);
  const isoInsolvencyPublished = resolveIsoDate(artInsolvency.datePublished);
  assert.strictEqual(isoInsolvencyModified, undefined);
  assert.strictEqual(isoInsolvencyPublished, undefined);
});

test('9. Knowledge adapter preserves static article dates and avoids synthetic overrides', () => {
  const dummyCmsArticle: Article = {
    id: 'art-1',
    slug: 'what-is-legal-notice',
    title: 'اظهارنامه قضایی چیست؟',
    excerpt: 'توضیحات آزمایشی',
    content: 'محتوا',
    category: 'حقوقی',
    status: 'published',
    createdAt: '2026-10-11T12:00:00.000Z',
    updatedAt: '2026-10-11T12:00:00.000Z',
    publishedAt: '2026-10-11T12:00:00.000Z',
  };

  const adapted = adaptArticleToKnowledgeData(dummyCmsArticle);
  // staticMatch has lastUpdated: '۱۴۰۳/۰۷/۰۸' and datePublished: undefined
  // Must NOT be overwritten by dummyCmsArticle.updatedAt or publishedAt
  assert.strictEqual(adapted.lastUpdated, '۱۴۰۳/۰۷/۰۸');
  assert.strictEqual(adapted.datePublished, undefined);
  assert.strictEqual(resolveIsoDate(adapted.datePublished), undefined);
  assert.strictEqual(resolveIsoDate(adapted.lastUpdated), '2024-09-29');
});
