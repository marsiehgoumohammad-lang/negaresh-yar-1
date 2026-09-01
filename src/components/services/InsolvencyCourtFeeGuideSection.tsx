import React from 'react';
import { Container } from '@/components/ui/container';
import { FileText, Users, Scale, FileWarning, HelpCircle, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function InsolvencyCourtFeeGuideSection() {
  return (
    <div className="py-16 bg-white border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              اعسار از هزینه دادرسی چیست؟
            </h2>
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-headings:text-slate-900">
              <p>
                <strong>اعسار از هزینه دادرسی</strong> وضعیت حقوقی شخصی است که برای دفاع از حقوق خود نیاز به طرح دعوا (یا تجدیدنظرخواهی) در دادگاه دارد، اما به دلیل عدم تمکن مالی کافی یا دسترسی نداشتن به اموال خود، توانایی پرداخت <strong>هزینه تمبر دادرسی (۳.۵٪ تا ۴.۵٪ ارزش خواسته)</strong> را ندارد. با تقدیم دادخواست اعسار، قانون‌گذار این حق را به شخص می‌دهد که بدون پرداخت هزینه اولیه، پرونده خود را به جریان بیندازد.
              </p>
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 my-8">
                <h3 className="text-lg font-bold text-brand-900 flex items-center gap-2 mt-0 mb-4">
                  <Scale className="w-5 h-5 text-brand-600" />
                  چه کسانی می‌توانند درخواست اعسار کنند؟
                </h3>
                <p className="text-brand-800 mb-0 text-sm leading-relaxed">
                  تنها <strong>اشخاص حقیقی (افراد عادی)</strong> می‌توانند دادخواست اعسار دهند. اشخاص حقوقی (شرکت‌ها) و همچنین تجار برای معافیت از هزینه دادرسی باید دعوای <strong>ورشکستگی</strong> مطرح کنند و اعسار از آن‌ها پذیرفته نمی‌شود.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Comparison (vs insolvency from judgment) */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              تفاوت اعسار از هزینه دادرسی با اعسار از محکوم‌به
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-4 font-bold text-slate-900 w-1/3">ویژگی</th>
                    <th className="p-4 font-bold text-brand-700 w-1/3">اعسار از هزینه دادرسی</th>
                    <th className="p-4 font-bold text-slate-700 w-1/3">اعسار از محکوم‌به (پرداخت دین)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-4 font-medium text-slate-900">زمان طرح دعوا</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">معمولاً همزمان با طرح دعوای اصلی یا تجدیدنظر</td>
                    <td className="p-4 text-slate-600">پس از صدور حکم قطعی و ابلاغ اجراییه</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">موضوع معافیت</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">هزینه‌های دولتی دادگستری (تمبر)</td>
                    <td className="p-4 text-slate-600">پولی که باید به شخص طلبکار (محکوم‌له) پرداخت شود</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">نتیجه پذیرش</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">معافیت موقت از پرداخت هزینه و شروع رسیدگی</td>
                    <td className="p-4 text-slate-600">تقسیط بدهی و جلوگیری از جلب بدهکار</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Conditions and Documents */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">
              شرایط و مدارک لازم برای دادخواست اعسار
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'استشهادیه کتبی (شهود)',
                  desc: 'مهم‌ترین مدرک اعسار، فرم استشهادیه است که باید به امضای ۲ نفر شاهد مرد (یا یک مرد و دو زن) برسد.',
                  icon: <Users className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'صورت جامع اموال',
                  desc: 'لیست کامل دارایی‌ها، موجودی حساب‌های بانکی و نقل و انتقالات یک سال گذشته (فرم مخصوص قوه قضاییه).',
                  icon: <FileText className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'مدارک هویتی و ثنا',
                  desc: 'ثبت‌نام در سامانه ثنا و به همراه داشتن کارت ملی برای ثبت در دفاتر خدمات الکترونیک قضایی.',
                  icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'فیش حقوقی یا مستندات درآمد',
                  desc: 'در صورت کارمند بودن، ارائه فیش حقوقی برای نشان دادن عدم تکافوی درآمد برای پرداخت هزینه دادرسی.',
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

          {/* Section 4: Stages */}
          <section className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileWarning className="w-6 h-6 text-slate-600" />
                اعسار در مراحل مختلف رسیدگی
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-bold text-slate-700 shadow-sm">۱</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">مرحله بدوی (ثبت اولیه)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">باید در همان <strong>دادخواست اصلی</strong> تیک مربوط به اعسار زده شود و استشهادیه ضمیمه گردد تا دادگاه ابتدا به اعسار رسیدگی کرده و در صورت پذیرش، وارد ماهیت دعوا شود.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-bold text-slate-700 shadow-sm">۲</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">مرحله تجدیدنظر و فرجام‌خواهی</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">اگر برای تجدیدنظرخواهی (۴.۵٪ هزینه) پول ندارید، باید ظرف <strong>مهلت ۲۰ روزه</strong> دادخواست تجدیدنظر به همراه اعسار را ثبت کنید. <strong>توجه:</strong> اگر فقط اعسار بدهید، مهلت تجدیدنظرخواهی شما حفظ نمی‌شود.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Rejections */}
          <section className="space-y-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                دلایل رایج رد دادخواست اعسار
              </h2>
              <ul className="space-y-4">
                {[
                  'نقص در استشهادیه (عدم ذکر دقیق شغل، درآمد و میزان بدهی در فرم)',
                  'حاضر نکردن شهود در جلسه رسیدگی دادگاه (شهود باید شخصاً حاضر شوند)',
                  'کشف اموال، خودرو یا حساب بانکی دارای موجودی از فرد مدعی اعسار',
                  'طرح دعوای اعسار توسط تاجر یا اشخاص حقوقی (شرکت‌ها)',
                  'عدم تکمیل دقیق و کامل فرم «صورت جامع اموال»'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-900 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6: Action Paths */}
          <section className="mt-16 pt-12 border-t border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 text-center mb-8">
              مسیرهای پیگیری پرونده اعسار شما
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Path 1: Free Knowledge */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-slate-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">مطالعه راهنمای رایگان</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  برای درک عمیق‌تر مفاهیم و مراحل، مقالات آموزشی ما را به صورت رایگان مطالعه کنید.
                </p>
                <Link href="/knowledge/what-is-insolvency" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  اعسار چیست؟ <ArrowLeft className="w-4 h-4 mr-1" />
                </Link>
              </div>

              {/* Path 2: Document Generation (Main CTA) */}
              <div className="bg-brand-50 rounded-2xl p-6 border-2 border-brand-200 hover:border-brand-300 transition-all flex flex-col h-full relative shadow-md hover:shadow-lg">
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap">
                  پیشنهاد نگارش یار
                </div>
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="text-lg font-bold text-brand-900 mb-3">تنظیم دادخواست و استشهادیه</h4>
                <p className="text-sm text-brand-800 leading-relaxed mb-6 flex-grow">
                  دادخواست اعسار هزینه دادرسی و فرم استشهادیه اختصاصی خود را توسط کارشناسان ما به صورت دقیق تنظیم کنید.
                </p>
                <Link href="/request?service=insolvency-court-fee" className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-colors">
                  ثبت سفارش تنظیم
                </Link>
              </div>

              {/* Path 3: Lawyer Referral */}
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col h-full shadow-md">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-[#E5C158]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">معرفی وکیل منصف</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                  اگر پرونده پیچیده‌ای دارید (مانند فرجام‌خواهی)، از وکلای پایه یک ارزیابی شده توسط نگارش یار مشاوره بگیرید.
                </p>
                <Link href="/lawyer-referral" className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600">
                  معرفی وکیل متخصص
                </Link>
              </div>

            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
