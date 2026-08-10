import { NextRequest, NextResponse } from 'next/server';
import {
  getSearchConsoleReports,
  parseSearchConsoleCsv,
  addSearchConsoleReport,
  deleteSearchConsoleReport,
  analyzeSearchConsoleReport,
} from '@/lib/stores/search-console-store';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const reportId = searchParams.get('id');

    const reports = getSearchConsoleReports();

    if (reports.length === 0) {
      return NextResponse.json({ reports: [], latestReport: null, analysis: null });
    }

    const latest = reportId ? reports.find((r) => r.id === reportId) || reports[0] : reports[0];
    const previous = reports.find((r) => r.id !== latest.id);

    const analysis = analyzeSearchConsoleReport(latest, previous);

    return NextResponse.json({
      reports,
      selectedReport: latest,
      previousReport: previous || null,
      analysis,
    });
  } catch (err) {
    console.error('Error GET /api/admin/seo/search-console:', err);
    return NextResponse.json({ error: 'خطا در دریافت گزارش‌های Search Console' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.content || !body.filename) {
      return NextResponse.json({ error: 'محتوا و نام فایل بارگذاری‌شده الزامی است.' }, { status: 400 });
    }

    const parsed = parseSearchConsoleCsv(body.content, body.filename);
    const saved = addSearchConsoleReport(parsed);

    return NextResponse.json({
      message: 'گزارش Search Console با موفقیت پردازش و ذخیره گردید.',
      report: saved,
    });
  } catch (err: unknown) {
    console.error('Error POST /api/admin/seo/search-console:', err);
    const msg = err instanceof Error ? err.message : 'خطا در بارگذاری و تحلیل فایل CSV';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'شناسه گزارش الزامی است' }, { status: 400 });
    }

    const success = deleteSearchConsoleReport(id);
    if (!success) {
      return NextResponse.json({ error: 'گزارش یافت نشد' }, { status: 404 });
    }

    return NextResponse.json({ message: 'گزارش با موفقیت حذف گردید' });
  } catch (err) {
    console.error('Error DELETE /api/admin/seo/search-console:', err);
    return NextResponse.json({ error: 'خطا در حذف گزارش' }, { status: 500 });
  }
}
