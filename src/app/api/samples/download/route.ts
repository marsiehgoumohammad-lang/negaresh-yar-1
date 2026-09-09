import { NextRequest, NextResponse } from 'next/server';
import { getSampleBySlug } from '@/lib/stores/samples-store';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const format = (searchParams.get('format') || 'docx').toLowerCase();

  if (!slug) {
    return new NextResponse('پارامتر slug الزامی است.', { status: 400 });
  }

  const sample = getSampleBySlug(slug);
  if (!sample) {
    return new NextResponse('نمونه سند یافت نشد.', { status: 404 });
  }

  const title = sample.title || sample.h1Title || 'سند رسمی نگارش یار';
  const cleanTitle = title.replace(/[/\\?%*:|"<>]/g, '-');
  const textContent = (
    sample.content ||
    sample.sampleStructureContent ||
    sample.sampleText ||
    sample.description ||
    sample.shortDescription ||
    ''
  ).trim();

  // 1. خروجی متن خام TXT
  if (format === 'txt') {
    const filename = `${cleanTitle}.txt`;
    return new NextResponse(textContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  }

  // 2. خروجی فایل رسمی مایکروسافت ورد (Word DOC / DOCX)
  // ساختار استاندارد اداری با جهت راست‌چین، فونت اداری و سربرگ
  const todaySolar = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  const wordDocumentHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${title}</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: A4 portrait;
    margin: 2.5cm 2.5cm 2.5cm 2.5cm;
    mso-header-margin: 1.25cm;
    mso-footer-margin: 1.25cm;
  }
  body {
    font-family: 'B Nazanin', 'IRANSans', 'Tahoma', 'Segoe UI', Arial, sans-serif;
    font-size: 14pt;
    line-height: 1.8;
    direction: rtl;
    text-align: justify;
    color: #111827;
    background: #ffffff;
  }
  .header-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 25px;
    border-bottom: 2px solid #374151;
    padding-bottom: 12px;
  }
  .header-table td {
    padding: 4px;
    font-size: 11pt;
    font-family: 'B Titr', 'B Nazanin', 'Tahoma', sans-serif;
  }
  .besm {
    text-align: center;
    font-size: 15pt;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'B Titr', 'Tahoma', sans-serif;
  }
  .doc-title {
    text-align: center;
    font-size: 16pt;
    font-weight: bold;
    margin-bottom: 25px;
    color: #0f172a;
    font-family: 'B Titr', 'Tahoma', sans-serif;
  }
  .content-box {
    margin-top: 15px;
    font-size: 13.5pt;
    white-space: pre-wrap;
    text-align: justify;
    line-height: 2.0;
  }
  .footer-note {
    margin-top: 40px;
    padding-top: 15px;
    border-top: 1px dashed #94a3b8;
    font-size: 10pt;
    color: #64748b;
    text-align: center;
  }
  .sign-box {
    margin-top: 50px;
    text-align: left;
    padding-left: 40px;
    font-size: 13pt;
    font-weight: bold;
  }
</style>
</head>
<body lang="FA" dir="RTL">
  <div class="besm">« به نام خدا »</div>

  <table class="header-table" dir="rtl">
    <tr>
      <td style="text-align: right; width: 33%;"><strong>سامانه نگارش یار</strong> (negaresh-yar.ir)</td>
      <td style="text-align: center; width: 34%; font-weight: bold;">سند اداری / قضایی</td>
      <td style="text-align: left; width: 33%;">
        تاریخ: ${todaySolar}<br>
        شماره: .......................<br>
        پیوست: .......................
      </td>
    </tr>
  </table>

  <div class="doc-title">${title}</div>

  <div class="content-box">
${textContent}
  </div>

  <div class="sign-box">
    امضاء و اثر انگشت: ................................
  </div>

  <div class="footer-note">
    این سند از پایگاه رسمی «نگارش یار» استخراج گردیده است. قبل از ارائه به مراجع قضایی یا اداری، مشخصات دقیق و مدارک پرونده خود را بررسی فرمایید.
  </div>
</body>
</html>
`;

  const filename = `${cleanTitle}.doc`;

  return new NextResponse(wordDocumentHtml, {
    status: 200,
    headers: {
      'Content-Type': 'application/msword; charset=utf-8',
      'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
