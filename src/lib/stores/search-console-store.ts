import { SearchConsoleReport, SearchConsoleRow, AnalysisOpportunity } from './types';
import { getSupabaseAdmin } from '@/lib/supabase';

let inMemoryReports: SearchConsoleReport[] = [];

export async function getSearchConsoleReports(): Promise<SearchConsoleReport[]> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'search_console')
      .maybeSingle();

    if (!error && data?.value && Array.isArray(data.value)) {
      const sorted = (data.value as SearchConsoleReport[]).sort(
        (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
      );
      inMemoryReports = sorted;
      return sorted;
    }
  } catch (err) {
    console.error('Error reading search console from Supabase:', err);
  }
  return inMemoryReports;
}

export async function saveSearchConsoleReports(reports: SearchConsoleReport[]): Promise<boolean> {
  inMemoryReports = reports;
  try {
    const supabase = getSupabaseAdmin();
    await supabase.from('site_settings').upsert({
      key: 'search_console',
      value: reports,
      updated_at: new Date().toISOString(),
    });
    return true;
  } catch (err) {
    console.error('Error saving search console to Supabase:', err);
    return true;
  }
}

/**
 * Flexible CSV / Text Parser for Google Search Console Exports
 */
export function parseSearchConsoleCsv(content: string, filename: string): SearchConsoleReport {
  const lines = content.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
  if (lines.length < 2) {
    throw new Error('فایل CSV فاقد داده یا سطر عنوان کافی است.');
  }

  // Parse header
  const headers = lines[0].split(',').map((h) => h.replace(/^["']|["']$/g, '').trim().toLowerCase());

  // Find column indexes
  const queryIdx = headers.findIndex((h) => h.includes('query') || h.includes('عبارت') || h.includes('کلمه'));
  const pageIdx = headers.findIndex((h) => h.includes('page') || h.includes('صفحه') || h.includes('url'));
  const clicksIdx = headers.findIndex((h) => h.includes('click') || h.includes('کلیک'));
  const impressionsIdx = headers.findIndex((h) => h.includes('impression') || h.includes('نمایش'));
  const ctrIdx = headers.findIndex((h) => h.includes('ctr') || h.includes('نرخ کلیک'));
  const posIdx = headers.findIndex((h) => h.includes('position') || h.includes('جایگاه') || h.includes('موقعیت'));

  const queries: SearchConsoleRow[] = [];
  const pages: SearchConsoleRow[] = [];

  let sumClicks = 0;
  let sumImpressions = 0;
  let sumCtr = 0;
  let sumPos = 0;
  let validRowCount = 0;

  for (let i = 1; i < lines.length; i++) {
    const rawLine = lines[i];
    // Simple CSV parser handling quotes
    const cells = rawLine.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || rawLine.split(',');
    const cleanCells = cells.map((c) => c.replace(/^["']|["']$/g, '').trim());

    if (cleanCells.length === 0) continue;

    const clicks = clicksIdx !== -1 ? parseFloat(cleanCells[clicksIdx] || '0') || 0 : 0;
    const impressions = impressionsIdx !== -1 ? parseFloat(cleanCells[impressionsIdx] || '0') || 0 : 0;
    
    let ctr = ctrIdx !== -1 ? parseFloat((cleanCells[ctrIdx] || '0').replace('%', '')) || 0 : 0;
    if (ctr > 0 && ctr <= 1 && ctrIdx !== -1 && (cleanCells[ctrIdx] || '').indexOf('%') === -1) {
      ctr = ctr * 100; // Convert 0.05 to 5%
    }
    
    const position = posIdx !== -1 ? parseFloat(cleanCells[posIdx] || '0') || 0 : 0;

    sumClicks += clicks;
    sumImpressions += impressions;
    sumCtr += ctr;
    sumPos += position;
    validRowCount++;

    const item: SearchConsoleRow = {
      query: queryIdx !== -1 ? cleanCells[queryIdx] : undefined,
      page: pageIdx !== -1 ? cleanCells[pageIdx] : undefined,
      clicks,
      impressions,
      ctr: parseFloat(ctr.toFixed(2)),
      position: parseFloat(position.toFixed(1)),
    };

    if (item.query) {
      queries.push(item);
    } else if (item.page) {
      pages.push(item);
    } else {
      queries.push(item);
    }
  }

  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const report: SearchConsoleReport = {
    id: `gsc-${Date.now()}`,
    title: `گزارش ${filename}`,
    periodStart: weekAgo.toLocaleDateString('fa-IR'),
    periodEnd: today.toLocaleDateString('fa-IR'),
    uploadedAt: today.toISOString(),
    filename,
    totalClicks: Math.round(sumClicks),
    totalImpressions: Math.round(sumImpressions),
    avgCtr: validRowCount > 0 ? parseFloat((sumCtr / validRowCount).toFixed(2)) : 0,
    avgPosition: validRowCount > 0 ? parseFloat((sumPos / validRowCount).toFixed(1)) : 0,
    queries: queries.slice(0, 100),
    pages: pages.slice(0, 100),
  };

  return report;
}

export async function addSearchConsoleReport(report: SearchConsoleReport): Promise<SearchConsoleReport> {
  const current = await getSearchConsoleReports();
  const updated = [report, ...current];
  await saveSearchConsoleReports(updated);
  return report;
}

export async function deleteSearchConsoleReport(id: string): Promise<boolean> {
  const current = await getSearchConsoleReports();
  const filtered = current.filter((r) => r.id !== id);
  if (filtered.length === current.length) return false;
  return await saveSearchConsoleReports(filtered);
}

export function analyzeSearchConsoleReport(
  latest: SearchConsoleReport,
  previous?: SearchConsoleReport
): {
  opportunities: AnalysisOpportunity[];
  topQueries: SearchConsoleRow[];
  topPages: SearchConsoleRow[];
  growingItems: { name: string; clickDiff: number; impDiff: number }[];
  decliningItems: { name: string; clickDiff: number; impDiff: number }[];
} {
  const opportunities: AnalysisOpportunity[] = [];

  // 1. High impressions + Low CTR (< 2%)
  const highImpLowCtr = latest.queries
    .filter((q) => q.impressions > 100 && q.ctr < 2.5)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 5);

  for (const item of highImpLowCtr) {
    if (!item.query) continue;
    opportunities.push({
      type: 'high_impressions_low_ctr',
      item: item.query,
      metricLabel: `${item.impressions.toLocaleString('fa-IR')} نمایش | CTR: ${item.ctr}% | جایگاه: ${item.position}`,
      explanation: `این عبارت ${item.impressions.toLocaleString('fa-IR')} بار در گوگل دیده شده اما نرخ کلیک آن فقط ${item.ctr}% است. پیشنهاد می‌شود عنوان و متا دیسکریپشن صفحه مربوطه جذاب‌تر و هماهنگ‌تر با نیت کاربر اصلاح شود.`,
    });
  }

  // 2. Near page one (Positions 8 to 20)
  const nearPageOne = latest.queries
    .filter((q) => q.position >= 8 && q.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 5);

  for (const item of nearPageOne) {
    if (!item.query) continue;
    opportunities.push({
      type: 'near_page_one',
      item: item.query,
      metricLabel: `جایگاه: ${item.position} | ${item.impressions.toLocaleString('fa-IR')} نمایش`,
      explanation: `این کلمه کلیدی با میانگین جایگاه ${item.position} در آستانه صفحه اول گوگل قرار دارد. با بهبود لینک‌سازی داخلی و نگارش پاراگراف‌های جدید، شانس بالایی برای ورود به ۳ لینک اول دارد.`,
    });
  }

  // Comparison with previous report
  const growingItems: { name: string; clickDiff: number; impDiff: number }[] = [];
  const decliningItems: { name: string; clickDiff: number; impDiff: number }[] = [];

  if (previous) {
    const prevMap = new Map<string, SearchConsoleRow>();
    previous.queries.forEach((q) => {
      if (q.query) prevMap.set(q.query, q);
    });

    for (const q of latest.queries) {
      if (!q.query) continue;
      const prev = prevMap.get(q.query);
      if (prev) {
        const clickDiff = q.clicks - prev.clicks;
        const impDiff = q.impressions - prev.impressions;
        if (clickDiff > 2 || impDiff > 20) {
          growingItems.push({ name: q.query, clickDiff, impDiff });
        } else if (clickDiff < -2 || impDiff < -20) {
          decliningItems.push({ name: q.query, clickDiff, impDiff });
        }
      }
    }
  }

  return {
    opportunities,
    topQueries: latest.queries.slice(0, 10),
    topPages: latest.pages.slice(0, 10),
    growingItems: growingItems.sort((a, b) => b.clickDiff - a.clickDiff).slice(0, 5),
    decliningItems: decliningItems.sort((a, b) => a.clickDiff - b.clickDiff).slice(0, 5),
  };
}
