import React from 'react';
import { Container } from '@/components/ui/container';
import { Scale, FileText, CheckCircle2, XCircle, MapPin, AlertTriangle } from 'lucide-react';

export function ElectronicTagGuideSection() {
  return (
    <div className="py-16 bg-white border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1: Intro & Legal Basis */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-2">
              <Scale className="w-4 h-4 text-brand-600" />
              مبنای قانونی نظارت الکترونیکی
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              پابند الکترونیکی چیست و بر چه اساسی صادر می‌شود؟
            </h2>
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-headings:text-slate-900">
              <p>
                <strong>پابند الکترونیکی</strong> (یا نظام نیمه آزادی تحت نظارت سامانه‌های الکترونیکی)، یک تدبیر ارفاقی جایگزین حبس است که به زندانی اجازه می‌دهد به جای اقامت در محیط زندان، دوران محکومیت خود را در یک محدوده جغرافیایی مشخص (نظیر منزل، محل کار یا سطح شهر) با استفاده از یک ردیاب الکترونیکی متصل به پای خود سپری کند.
              </p>
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 my-8">
                <h3 className="text-lg font-bold text-brand-900 flex items-center gap-2 mt-0 mb-4">
                  <FileText className="w-5 h-5 text-brand-600" />
                  ماده ۶۲ قانون مجازات اسلامی
                </h3>
                <p className="text-brand-800 mb-0 text-sm leading-relaxed">
                  «در جرایم تعزیری از درجه پنج تا درجه هشت، دادگاه می‌تواند در صورت وجود شرایط مقرر در تعویق مراقبتی، محکوم به حبس را با رضایت وی در محدوده مکانی مشخص تحت نظارت سامانه (سیستم) های الکترونیکی قرار دهد. همچنین دادگاه در مورد حبس‌های تعزیری درجه دو، سه و چهار پس از گذراندن یک‌چهارم مجازات حبس، می‌تواند با پیشنهاد دادستان یا قاضی اجرای احکام پس از اخذ رضایت محکوم‌علیه، وی را تحت نظارت سامانه‌های الکترونیکی قرار دهد.»
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Conditions */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">
              شرایط صدور حکم نظارت الکترونیکی
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'نوع و درجه مجازات',
                  desc: 'مخصوص حبس‌های تعزیری است. برای درجه ۵ تا ۸ از ابتدا و برای درجه ۲ تا ۴ پس از تحمل یک‌چهارم حبس امکان‌پذیر است.',
                  icon: <Scale className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'جبران ضرر و زیان شاکی',
                  desc: 'زندانی باید رضایت شاکی خصوصی را جلب کرده باشد یا خسارت را جبران نموده و یا دادخواست اعسار وی پذیرفته شده باشد.',
                  icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'رضایت خود زندانی',
                  desc: 'نصب پابند نیازمند تقاضا و رضایت کتبی خود محکوم‌علیه است و اجباری در آن نیست.',
                  icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'تامین وثیقه پابند',
                  desc: 'سپردن ودیعه مالی (معمولاً به صورت نقدی) برای خود دستگاه و پرداخت هزینه ماهانه نگهداری آن الزامی است.',
                  icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 transition-colors shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Limitations & Rejections */}
          <section className="space-y-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                محدودیت‌های قانونی و دلایل رد درخواست
              </h2>
              <p className="text-red-800 text-sm mb-6 leading-relaxed">
                قاضی اجرای احکام و دادگاه در برخی موارد به دلیل حساسیت پرونده، با درخواست پابند الکترونیکی مخالفت می‌کنند:
              </p>
              <ul className="space-y-4">
                {[
                  'جرایم علیه امنیت داخلی و خارجی کشور (جاسوسی، محاربه، افساد فی‌الارض).',
                  'جرایم خشن و سازمان‌یافته (سرقت مسلحانه، آدم‌ربایی، اسیدپاشی).',
                  'عدم تودیع خسارت شاکی خصوصی (مهم‌ترین دلیل رد درخواست در پرونده‌های مالی).',
                  'فقدان حسن اخلاق و رفتار در زندان یا داشتن سابقه فرار.',
                  'مخالفت شورای طبقه‌بندی زندان یا عدم احراز شرایط تنبه زندانی.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-900 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4: Process & Documents */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">
              مراحل ثبت درخواست و مدارک لازم
            </h2>
            <div className="relative border-r-2 border-slate-200 pr-6 space-y-8 my-8">
              {[
                {
                  title: 'تنظیم لایحه درخواست',
                  desc: 'نگارش یک لایحه حقوقی مستدل شامل شرایط خانوادگی، شغلی و ابراز ندامت، و ضمیمه کردن مدارک پزشکی، شغلی و هویتی.',
                  icon: <FileText className="w-4 h-4 text-brand-600" />
                },
                {
                  title: 'طرح در شورای طبقه‌بندی',
                  desc: 'درخواست به مددکاری زندان تحویل شده و در شورای طبقه‌بندی با حضور قاضی ناظر زندان بررسی می‌شود.',
                  icon: <CheckCircle2 className="w-4 h-4 text-brand-600" />
                },
                {
                  title: 'تایید دادگاه صادرکننده حکم',
                  desc: 'پس از تایید زندان، پرونده به اجرای احکام و سپس به دادگاه صادرکننده حکم قطعی ارسال می‌شود تا رای نهایی صادر گردد.',
                  icon: <Scale className="w-4 h-4 text-brand-600" />
                },
                {
                  title: 'پرداخت ودیعه و نصب',
                  desc: 'در صورت قبولی، زندانی ودیعه دستگاه را به حساب دادگستری واریز کرده، محدوده تردد مشخص شده و پابند نصب می‌شود.',
                  icon: <MapPin className="w-4 h-4 text-brand-600" />
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -right-[35px] top-1 w-6 h-6 rounded-full bg-brand-100 border-2 border-white flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Comparison Table */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              مقایسه پابند الکترونیکی، آزادی مشروط و مرخصی
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-4 font-bold text-slate-900 w-1/4">ویژگی</th>
                    <th className="p-4 font-bold text-brand-700 w-1/4">پابند الکترونیکی</th>
                    <th className="p-4 font-bold text-slate-700 w-1/4">آزادی مشروط</th>
                    <th className="p-4 font-bold text-slate-700 w-1/4">مرخصی زندان</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-4 font-medium text-slate-900">وضعیت حبس</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">در حال گذراندن حبس است</td>
                    <td className="p-4 text-slate-600">از حبس آزاد شده است</td>
                    <td className="p-4 text-slate-600">موقتاً خارج از زندان است</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">محدودیت مکانی</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">دارد (محدوده مشخص شده)</td>
                    <td className="p-4 text-slate-600">ندارد (آزادی کامل)</td>
                    <td className="p-4 text-slate-600">ندارد (طی مدت مرخصی)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">شرط زمانی اقدام</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">درجه ۵ تا ۸ (از ابتدا) / درجه ۲ تا ۴ (یک‌چهارم حبس)</td>
                    <td className="p-4 text-slate-600">حبس تا ۱۰ سال (یک‌سوم) / حبس بالای ۱۰ سال (نصف)</td>
                    <td className="p-4 text-slate-600">بسته به بخشنامه‌ها و نظر قاضی ناظر</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">نیاز به دستگاه</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">بله (ردیاب GPS متصل به پا)</td>
                    <td className="p-4 text-slate-600">خیر</td>
                    <td className="p-4 text-slate-600">خیر</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">هزینه و وثیقه</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">ودیعه دستگاه + هزینه ماهانه نگهداری</td>
                    <td className="p-4 text-slate-600">ندارد</td>
                    <td className="p-4 text-slate-600">نیازمند تودیع وثیقه سنگین (ملک/کفالت)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              * نکته: دریافت هیچ‌یک از این ارفاقات قانونی قطعی نبوده و کاملاً به نظر موافق قاضی و شرایط پرونده بستگی دارد.
            </p>
          </section>

        </div>
      </Container>
    </div>
  );
}
