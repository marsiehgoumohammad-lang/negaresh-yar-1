'use client';
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Printer, ArrowRight, CheckCircle2, AlertCircle, Loader2, Download, ExternalLink, CreditCard } from 'lucide-react';
import { Invoice, BusinessSettings } from '@/lib/stores/types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function renderTextWithLinks(text?: string) {
  if (!text) return null;
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 font-bold break-all"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function InvoicePrintPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [settings, setSettings] = useState<BusinessSettings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [printStatus, setPrintStatus] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      if (!id) return;
      try {
        setLoading(true);

        const cachedSettings = localStorage.getItem('negaresh_admin_settings_cache');
        if (cachedSettings) {
          try {
            setSettings(JSON.parse(cachedSettings));
          } catch {
            // ignore
          }
        }

        const [invRes, setRes] = await Promise.all([
          fetch(`/api/admin/invoices/${id}?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`/api/admin/settings?t=${Date.now()}`, { cache: 'no-store' }),
        ]);

        if (!invRes.ok) {
          throw new Error('فاکتور مورد نظر یافت نشد');
        }

        const invData = await invRes.json();
        setInvoice(invData.invoice);

        if (setRes.ok) {
          const setCal = await setRes.json();
          if (setCal.settings) {
            setSettings(setCal.settings);
            localStorage.setItem('negaresh_admin_settings_cache', JSON.stringify(setCal.settings));
          }
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'خطا در بارگذاری اطلاعات فاکتور';
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[PRINT PAGE] Triggering window.print()');
    setPrintStatus('در حال ارسال دستور چاپ به مرورگر...');
    
    try {
      window.print();
      setPrintStatus('پنجره چاپ درخواست شد.');
    } catch (err: unknown) {
      console.error('[PRINT PAGE] Error calling window.print():', err);
      const message = err instanceof Error ? err.message : String(err);
      setPrintStatus(`خطا در فراخوانی چاپ: ${message}`);
    }
  };

  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[PRINT PAGE] Triggering PDF download via clean template');
    setPrintStatus('در حال آماده‌سازی و ساخت فایل PDF...');
    
    try {
      const pdfElement = document.getElementById('pdf-template-container');
      if (!pdfElement) {
        throw new Error('قالب اختصاصی PDF یافت نشد');
      }

      // Temporarily reveal for html2canvas
      pdfElement.style.display = 'block';
      
      const canvas = await html2canvas(pdfElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: (clonedDoc) => {
          // Remove all app/tailwind stylesheets from cloned document to completely avoid oklch CSS parser errors
          const styles = clonedDoc.querySelectorAll('style, link[rel="stylesheet"]');
          styles.forEach((s) => s.remove());

          const target = clonedDoc.getElementById('pdf-template-container');
          if (target) {
            target.style.display = 'block';
            target.style.position = 'static';
            target.style.visibility = 'visible';
            target.style.left = '0';
          }

          // Inject clean, minimal CSS for fonts and reset
          const cleanStyle = clonedDoc.createElement('style');
          cleanStyle.textContent = `
            * {
              box-sizing: border-box;
              font-family: Tahoma, 'IRANSans', system-ui, -apple-system, sans-serif;
            }
            body {
              background-color: #ffffff !important;
              color: #111827 !important;
              direction: rtl !important;
              margin: 0;
              padding: 0;
            }
          `;
          clonedDoc.head.appendChild(cleanStyle);
        },
      });

      // Hide template again
      pdfElement.style.display = 'none';

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      if (pdfHeight <= pageHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      } else {
        let heightLeft = pdfHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pageHeight;
        }
      }

      pdf.save(`invoice-${invoice?.invoiceNumber || id}.pdf`);
      
      setPrintStatus('فایل PDF با موفقیت ایجاد و دانلود شد.');
    } catch (err: unknown) {
      console.error('[PRINT PAGE] Error generating PDF:', err);
      const message = err instanceof Error ? err.message : String(err);
      setPrintStatus(`خطا در ایجاد PDF: ${message}`);
    } finally {
      const pdfElement = document.getElementById('pdf-template-container');
      if (pdfElement) {
        pdfElement.style.display = 'none';
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070B15] text-white flex flex-col items-center justify-center p-6 dir-rtl">
        <Loader2 className="w-8 h-8 text-[#E5C158] animate-spin mb-3" />
        <p className="text-sm text-slate-300 font-bold">در حال بارگذاری اطلاعات فاکتور دیجیتال...</p>
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="min-h-screen bg-[#070B15] text-white flex flex-col items-center justify-center p-6 dir-rtl">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
          <h1 className="text-lg font-bold text-white">خطا در دریافت فاکتور</h1>
          <p className="text-xs text-slate-400">{error || 'فاکتور مورد نظر پیدا نشد.'}</p>
          <button
            type="button"
            onClick={() => router.push('/admin/invoices')}
            className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700 transition-colors cursor-pointer"
          >
            بازگشت به مدیریت فاکتورها
          </button>
        </div>
      </div>
    );
  }

  const logoSrc = settings?.logoUrl || '/logo.jpg';
  const showPaymentGateway = invoice.status !== 'paid' && Boolean(settings?.paymentGatewayUrl);

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white text-slate-900 font-sans dir-rtl">
      {/* Top Controls Bar - Hidden on print */}
      <header className="sticky top-0 z-50 bg-[#0D1424] text-white p-3.5 sm:p-4 shadow-lg no-print print:hidden">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => router.push('/admin/invoices')}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>بازگشت به لیست</span>
            </button>
            <div className="text-xs text-slate-300">
              فاکتور شماره <strong className="text-[#E5C158] font-mono">{invoice.invoiceNumber}</strong>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {printStatus && (
              <span className="text-xs text-[#E5C158] font-bold bg-[#E5C158]/10 px-3 py-1.5 rounded-lg border border-[#E5C158]/20 hidden md:inline-block">
                {printStatus}
              </span>
            )}

            <button
              type="button"
              onClick={handleDownloadPdf}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 text-[#E5C158]" />
              <span>دانلود PDF</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#E5C158] hover:bg-[#D4AF37] text-[#070B15] font-black text-xs transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(229,193,88,0.3)] hover:scale-105 active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>چاپ فاکتور</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Digital Invoice Card */}
      <main className="max-w-3xl mx-auto my-4 sm:my-8 print:my-0 p-4 sm:p-8 bg-white shadow-xl print:shadow-none rounded-2xl print:rounded-none border border-slate-200 print:border-none">
        <div id="printable-invoice" className="space-y-6">
          
          {/* Top Header Block with Logo & Official Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-slate-900 pb-5">
            <div className="flex items-center gap-3.5">
              <img
                src={logoSrc}
                alt={settings?.companyName || 'لوگوی نگارش یار'}
                className="h-12 sm:h-14 w-auto max-w-[120px] object-contain rounded-lg border border-slate-200 p-1 bg-white shrink-0"
              />
              <div className="space-y-1">
                <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  {settings?.companyName || 'دفتر خدمات حقوقی و اداری نگارش یار'}
                </h1>
                {settings?.headerSubtitle && (
                  <p className="text-xs font-bold text-[#b45309]">
                    {settings.headerSubtitle}
                  </p>
                )}
                <p className="text-[11px] text-slate-600">
                  شهر: {settings?.city || 'مشهد'} | تلفن پشتیبانی: <span className="font-mono">{settings?.phone || '09915147789'}</span>
                </p>
              </div>
            </div>

            <div className="text-right sm:text-left font-mono text-xs text-slate-800 space-y-1 bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-slate-200 sm:border-none w-full sm:w-auto">
              <div>
                <strong className="font-sans">شماره فاکتور:</strong> <span className="font-bold text-slate-900">{invoice.invoiceNumber}</span>
              </div>
              <div>
                <strong className="font-sans">تاریخ صدور:</strong> <span>{invoice.issueDate}</span>
              </div>
            </div>
          </div>

          {/* Invoice Subtitle Banner */}
          <div className="bg-slate-100 border border-slate-200 rounded-xl py-2 px-4 text-center">
            <h2 className="text-xs sm:text-sm font-bold text-slate-800">
              {settings?.invoiceTitle || 'صورت‌حساب رسمی خدمات نگارش یار'}
            </h2>
          </div>

          {/* Customer & Buyer Info Card */}
          <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-800 space-y-1.5 border border-slate-200">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <strong>نام متقاضی / خریدار:</strong> <span className="font-bold text-slate-900">{invoice.customerName}</span>
              </div>
              <div>
                <strong>شماره همراه:</strong> <span className="font-mono font-bold text-slate-900">{invoice.customerPhone}</span>
              </div>
            </div>
          </div>

          {/* Services Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse border border-slate-300 min-w-[500px]">
              <thead>
                <tr className="bg-slate-200 text-slate-900 font-bold">
                  <th className="border border-slate-300 p-2.5 text-center w-12">ردیف</th>
                  <th className="border border-slate-300 p-2.5 text-right">شرح خدمت / موضوع</th>
                  <th className="border border-slate-300 p-2.5 text-center w-16">تعداد</th>
                  <th className="border border-slate-300 p-2.5 text-left w-32">مبلغ واحد (تومان)</th>
                  <th className="border border-slate-300 p-2.5 text-left w-32">جمع کل (تومان)</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((it, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="border border-slate-300 p-2.5 text-center font-mono">{idx + 1}</td>
                    <td className="border border-slate-300 p-2.5 font-medium">{it.description}</td>
                    <td className="border border-slate-300 p-2.5 text-center font-mono">{it.quantity}</td>
                    <td className="border border-slate-300 p-2.5 text-left font-mono">
                      {it.unitPrice.toLocaleString('fa-IR')}
                    </td>
                    <td className="border border-slate-300 p-2.5 text-left font-mono font-bold">
                      {it.total.toLocaleString('fa-IR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Financial Calculation Summary */}
          <div className="space-y-2.5 text-xs text-slate-800 pt-3 border-t-2 border-slate-200">
            <div className="flex justify-between items-center">
              <span>جمع کل خدمات:</span>
              <span className="font-mono font-bold text-slate-900">{invoice.subtotal.toLocaleString('fa-IR')} تومان</span>
            </div>
            {invoice.discount > 0 && (
              <div className="flex justify-between items-center text-rose-600 font-bold">
                <span>مبلغ تخفیف:</span>
                <span className="font-mono">- {invoice.discount.toLocaleString('fa-IR')} تومان</span>
              </div>
            )}
            <div className="flex justify-between items-center text-sm font-black text-slate-900 pt-2 border-t border-slate-300">
              <span>مبلغ نهایی قابل پرداخت:</span>
              <span className="font-mono text-base font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-300">
                {invoice.total.toLocaleString('fa-IR')} تومان
              </span>
            </div>

            {/* Payment Status Badge */}
            <div className="pt-2 text-xs font-bold flex items-center justify-between">
              <span className="text-slate-700">وضعیت تسویه فاکتور:</span>
              {invoice.status === 'paid' ? (
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-lg flex items-center gap-1.5 font-black">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  تسویه شده (پرداخت کامل)
                </span>
              ) : (
                <span className="text-amber-800 bg-amber-50 border border-amber-300 px-3 py-1 rounded-lg flex items-center gap-1.5 font-black">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  پرداخت نشده (در انتظار تسویه)
                </span>
              )}
            </div>
          </div>

          {/* Dedicated Invoice Notes / Description Section */}
          {invoice.notes && (
            <div className="text-xs text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="block text-slate-900 font-bold">توضیحات / ملاحظات این فاکتور:</strong>
              <div className="whitespace-pre-wrap leading-relaxed text-slate-700">
                {renderTextWithLinks(invoice.notes)}
              </div>
            </div>
          )}

          {/* System General Invoice Description & Terms */}
          {settings?.invoiceDescription && (
            <div className="text-xs text-slate-800 bg-blue-50/50 p-4 rounded-xl border border-blue-200/80 space-y-1.5">
              <strong className="block text-blue-950 font-bold">توضیحات، شرایط تحویل و راهنمای پرداخت:</strong>
              <div className="whitespace-pre-wrap leading-relaxed text-blue-900">
                {renderTextWithLinks(settings.invoiceDescription)}
              </div>
            </div>
          )}

          {/* Payment Gateway Call-To-Action Box (Only for Unpaid invoices when payment link is set) */}
          {showPaymentGateway && (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
              <div className="space-y-1 text-center sm:text-right">
                <div className="text-xs font-black text-amber-900 flex items-center justify-center sm:justify-start gap-1.5">
                  <CreditCard className="w-4 h-4 text-amber-700" />
                  <span>پرداخت آنلاین فاکتور</span>
                </div>
                <div className="text-xs text-amber-800 font-medium">
                  جهت تسویه آنلاین سریع و مستقیم این فاکتور، روی دکمه زیر کلیک کنید:
                </div>
              </div>
              <a
                href={settings!.paymentGatewayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>جهت پرداخت آنلاین اینجا کلیک کنید</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Footer Text */}
          <div className="text-[11px] text-slate-500 pt-5 border-t border-slate-200 text-center font-medium">
            {settings?.invoiceFooterText || 'با تشکر از اعتماد شما به دفتر نگارش یار.'}
          </div>
        </div>
      </main>

      {/* Hidden Standalone PDF Template (100% Isolated from Tailwind & oklch CSS) */}
      <div
        id="pdf-template-container"
        style={{
          display: 'none',
          position: 'absolute',
          left: '-9999px',
          top: '0',
          width: '800px',
          backgroundColor: '#ffffff',
          color: '#111827',
          padding: '32px',
          boxSizing: 'border-box',
          direction: 'rtl',
          fontFamily: 'Tahoma, IRANSans, sans-serif',
          fontSize: '13px',
          lineHeight: '1.6',
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #111827',
            paddingBottom: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src={logoSrc}
              alt="لوگوی نگارش یار"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }}
            />
            <div>
              <h1 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#111827' }}>
                {settings?.companyName || 'دفتر خدمات حقوقی و اداری نگارش یار'}
              </h1>
              {settings?.headerSubtitle && (
                <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#b45309', fontWeight: 'bold' }}>
                  {settings.headerSubtitle}
                </p>
              )}
              <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#4b5563' }}>
                آدرس / شهر: {settings?.city || 'مشهد'} | تلفن پشتیبانی: {settings?.phone || '09915147789'}
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '11px', color: '#111827' }}>
            <div style={{ marginBottom: '4px' }}>
              <strong>شماره فاکتور:</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{invoice.invoiceNumber}</span>
            </div>
            <div>
              <strong>تاریخ صدور:</strong> <span style={{ fontFamily: 'monospace' }}>{invoice.issueDate}</span>
            </div>
          </div>
        </div>

        {/* Document Banner */}
        <div
          style={{
            backgroundColor: '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            padding: '8px 16px',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#111827' }}>
            {settings?.invoiceTitle || 'صورت‌حساب رسمی خدمات نگارش یار'}
          </span>
        </div>

        {/* Customer Info Box */}
        <div
          style={{
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '12px 16px',
            marginBottom: '16px',
            fontSize: '12px',
            color: '#111827',
          }}
        >
          <div style={{ marginBottom: '6px' }}>
            <strong>نام متقاضی / خریدار:</strong> {invoice.customerName}
          </div>
          <div>
            <strong>شماره همراه:</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{invoice.customerPhone}</span>
          </div>
        </div>

        {/* Items Table */}
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '16px',
            fontSize: '12px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#e5e7eb', color: '#111827', fontWeight: 'bold' }}>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'center', width: '50px' }}>ردیف</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'right' }}>شرح خدمت / موضوع</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'center', width: '60px' }}>تعداد</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'left', width: '130px' }}>مبلغ واحد (تومان)</th>
              <th style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'left', width: '130px' }}>جمع کل (تومان)</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((it, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'center', fontFamily: 'monospace' }}>
                  {idx + 1}
                </td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'right' }}>
                  {it.description}
                </td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'center', fontFamily: 'monospace' }}>
                  {it.quantity}
                </td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'left', fontFamily: 'monospace' }}>
                  {it.unitPrice.toLocaleString('fa-IR')}
                </td>
                <td style={{ border: '1px solid #d1d5db', padding: '8px 10px', textAlign: 'left', fontFamily: 'monospace', fontWeight: 'bold' }}>
                  {it.total.toLocaleString('fa-IR')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Calculations Section */}
        <div
          style={{
            borderTop: '2px solid #e5e7eb',
            paddingTop: '12px',
            marginBottom: '16px',
            fontSize: '12px',
            color: '#111827',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span>جمع کل خدمات:</span>
            <span style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
              {invoice.subtotal.toLocaleString('fa-IR')} تومان
            </span>
          </div>
          {invoice.discount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: '#dc2626' }}>
              <span>مبلغ تخفیف:</span>
              <span style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
                - {invoice.discount.toLocaleString('fa-IR')} تومان
              </span>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '8px',
              borderTop: '1px solid #374151',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#111827',
            }}
          >
            <span>مبلغ نهایی قابل پرداخت:</span>
            <span style={{ fontSize: '15px', fontFamily: 'monospace' }}>
              {invoice.total.toLocaleString('fa-IR')} تومان
            </span>
          </div>
          <div style={{ marginTop: '10px', fontSize: '12px', fontWeight: 'bold' }}>
            <span>وضعیت تسویه: </span>
            {invoice.status === 'paid' ? (
              <span style={{ color: '#047857' }}>✓ تسویه شده (پرداخت کامل)</span>
            ) : (
              <span style={{ color: '#b45309' }}>⚠ پرداخت نشده (در انتظار تسویه)</span>
            )}
          </div>
        </div>

        {/* Notes in PDF */}
        {invoice.notes && (
          <div
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '10px 14px',
              marginBottom: '16px',
              fontSize: '12px',
              color: '#374151',
              whiteSpace: 'pre-wrap',
            }}
          >
            <strong>توضیحات این فاکتور:</strong> {invoice.notes}
          </div>
        )}

        {/* General System Invoice Description & Terms in PDF */}
        {settings?.invoiceDescription && (
          <div
            style={{
              backgroundColor: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '6px',
              padding: '10px 14px',
              marginBottom: '16px',
              fontSize: '12px',
              color: '#0369a1',
              whiteSpace: 'pre-wrap',
            }}
          >
            <strong>توضیحات، شرایط تحویل و پرداخت:</strong> {settings.invoiceDescription}
          </div>
        )}

        {/* Payment Link in PDF (if unpaid and payment gateway is set) */}
        {showPaymentGateway && (
          <div
            style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: '6px',
              padding: '12px 16px',
              marginBottom: '16px',
              fontSize: '12px',
              color: '#78350f',
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              پرداخت آنلاین فاکتور:
            </div>
            <a
              href={settings!.paymentGatewayUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2563eb',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              جهت پرداخت آنلاین این فاکتور اینجا کلیک کنید
            </a>
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '12px',
            marginTop: '24px',
            textAlign: 'center',
            fontSize: '11px',
            color: '#6b7280',
          }}
        >
          {settings?.invoiceFooterText || 'با تشکر از اعتماد شما به دفتر نگارش یار.'}
        </div>
      </div>
    </div>
  );
}
