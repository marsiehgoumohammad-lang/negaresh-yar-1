import React from 'react';
import { ShieldCheck, AlertCircle, Scale, CheckCircle2 } from 'lucide-react';

export function InterpreterTrustDisclaimer() {
  return (
    <section className="py-10 border-b border-slate-800/80 bg-[#070B15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0D1424] via-[#111A2E] to-[#0D1424] border border-[#E5C158]/30 shadow-xl space-y-6 text-right">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/20 flex items-center justify-center text-[#E5C158] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">
                  سلب مسئولیت و شفافیت حقوقی نگارش یار
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">
                  احترام به حقوق شهروندان و حفظ محرمانگی اسناد قضایی
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>پایبندی به استانداردهای حقوقی</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-[#070B15]/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white text-xs">
                <AlertCircle className="w-4 h-4 text-[#E5C158]" />
                <span>تحلیل مقدماتی و اطلاع‌رسانی</span>
              </div>
              <p>
                تفسیر هوشمند ارائه شده توسط سامانه نگارش یار صرفاً جهت تسهیل فهم عمومی متون پیچیده قضایی است و به هیچ عنوان جایگزین مشاوره حقوقی تخصصی از وکلای پایه یک دادگستری یا استشاره از مراجع ذی‌صلاح نمی‌باشد.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15]/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white text-xs">
                <Scale className="w-4 h-4 text-blue-400" />
                <span>محاسبه مهلت‌های اعتراض</span>
              </div>
              <p>
                مهلت‌های قانونی ذکر شده در تحلیل‌ها بر اساس مفروضات عام قوانین موضوعه ایران است. به دلیل حساسیت مهلت‌های ثنا و ابلاغ واقعی/قانونی، الزامی است تاریخ دقیق ابلاغ در حساب ثنا با اصل سند مطابقت داده شود.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070B15]/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>عدم تضمین نتیجه آرای قضایی</span>
              </div>
              <p>
                نگارش یار متعهد به ارائه بالاترین کیفیت علمی و نگارشی در لوایح و دادخواست‌هاست، اما هیچ‌گونه تضمینی در خصوص تصمیمات مستقل قضات محترم دادگاه‌ها ارائه نمی‌دهد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
