import React from 'react';
import { Container } from '@/components/ui/container';
import { FileText, Users, Scale, FileWarning, HelpCircle, CheckCircle2, XCircle, ArrowLeft, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function CheckClaimGuideSection() {
  return (
    <div className="py-16 bg-white border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section 1: Intro */}
          <section className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              مطالبه وجه چک چیست؟
            </h2>
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-headings:text-slate-900">
              <p>
                <strong>مطالبه وجه چک</strong> به معنای درخواست قانونی دارنده چک برای دریافت مبلغ مندرج در آن از صادرکننده یا ظهرنویسان (ضامنان) است. زمانی که چک در تاریخ سررسید منتهی به صدور گواهی عدم پرداخت (برگشت) می‌شود، دارنده چک می‌تواند از طریق مراجع قضایی اقدام به وصول طلب خود و جبران خسارات ناشی از تأخیر نماید.
              </p>
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 my-8">
                <h3 className="text-lg font-bold text-brand-900 flex items-center gap-2 mt-0 mb-4">
                  <Scale className="w-5 h-5 text-brand-600" />
                  چه زمانی دادخواست حقوقی مناسب است؟
                </h3>
                <p className="text-brand-800 mb-0 text-sm leading-relaxed">
                  طرح <strong>دعوای حقوقی (دادخواست مطالبه وجه چک)</strong> در مواردی کاربرد دارد که چک شرایط کیفری شدن را از دست داده باشد (مثلاً مدت ۶ ماه از تاریخ صدور گذشته باشد)، چک امانی یا تضمینی باشد، یا دارنده بخواهد علاوه بر شخص صادرکننده، علیه ظهرنویس‌ها (کسانی که پشت چک را امضا کرده‌اند) نیز اقدام کند. همچنین برای مطالبه خسارت تأخیر تأدیه از تاریخ سررسید، دادخواست حقوقی ضروری است.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Comparison of Methods */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              مقایسه روش‌های پیگیری وجه چک
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-4 font-bold text-slate-900 w-1/4">ویژگی</th>
                    <th className="p-4 font-bold text-brand-700 w-1/4">دادخواست حقوقی مطالبه وجه</th>
                    <th className="p-4 font-bold text-slate-700 w-1/4">اجراییه مستقیم (ماده ۲۳)</th>
                    <th className="p-4 font-bold text-slate-700 w-1/4">شکایت کیفری</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="p-4 font-medium text-slate-900">سرعت رسیدگی</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">متوسط (نیاز به تعیین وقت و جلسه رسیدگی)</td>
                    <td className="p-4 text-slate-600">بسیار سریع (بدون نیاز به جلسه دادگاه)</td>
                    <td className="p-4 text-slate-600">سریع (اما منوط به شرایط خاص)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">خسارت تأخیر تأدیه</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">قابل مطالبه در همان دادخواست</td>
                    <td className="p-4 text-slate-600">قابل مطالبه نیست (نیاز به دادخواست مجزا دارد)</td>
                    <td className="p-4 text-slate-600">با ارائه دادخواست ضرر و زیان</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">اشخاص قابل تعقیب</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">صادرکننده و تمام ظهرنویسان (تضامنی)</td>
                    <td className="p-4 text-slate-600">فقط شخص صادرکننده چک</td>
                    <td className="p-4 text-slate-600">فقط صادرکننده چک</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">نوع چک</td>
                    <td className="p-4 text-slate-600 bg-brand-50/30">تمامی چک‌ها (صیادی، قدیمی، تضمینی و...)</td>
                    <td className="p-4 text-slate-600">فقط چک‌های صیادی بنفش دارای کدرهگیری</td>
                    <td className="p-4 text-slate-600">چک روز (غیر وعده‌دار و غیر تضمینی)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Conditions and Documents */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">
              مدارک لازم و اقدامات کلیدی
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'گواهی عدم پرداخت دارای کد رهگیری',
                  desc: 'برای چک‌های صیادی، بانک باید گواهی عدم پرداخت را با کد رهگیری اختصاصی سامانه صیاد صادر کند.',
                  icon: <FileText className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'اصل لاشه چک',
                  desc: 'همراه داشتن اصل چک برای ارائه به دادگاه در صورت لزوم، مگر اینکه چک مفقود شده باشد.',
                  icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'درخواست تأمین خواسته',
                  desc: 'در صورت تقاضای تأمین خواسته، امکان توقیف اموال بدهکار پیش از ابلاغ به وی وجود دارد تا از نقل و انتقال اموال جلوگیری شود.',
                  icon: <Scale className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50'
                },
                {
                  title: 'مطالبه خسارت تأخیر تأدیه',
                  desc: 'تقاضای محاسبه خسارت بر مبنای نرخ تورم بانک مرکزی از تاریخ سررسید چک تا زمان وصول.',
                  icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
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
                مراحل ثبت و پیگیری دادخواست مطالبه وجه چک
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-bold text-slate-700 shadow-sm">۱</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">مراجعه به بانک و دریافت گواهی عدم پرداخت</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">در صورت خالی بودن حساب، در اولین فرصت چک را برگشت زده و حتماً گواهی عدم پرداخت ممهور به مهر بانک و دارای کد رهگیری دریافت کنید.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-bold text-slate-700 shadow-sm">۲</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">تنظیم دادخواست تخصصی</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">تهیه دادخواست با در نظر گرفتن خواسته دقیق (وجه چک، خسارت تأخیر، حق‌الوکاله، هزینه دادرسی) و تقاضای تأمین خواسته.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-bold text-slate-700 shadow-sm">۳</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">ثبت در دفتر خدمات قضایی و دادگاه</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">پس از ثبت دادخواست در سامانه ثنا، پرونده به شورای حل اختلاف (زیر ۲۰ میلیون تومان) یا دادگاه حقوقی ارجاع می‌شود و وقت رسیدگی تعیین می‌گردد.</p>
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
                اشتباهات رایج که به رد دعوا یا طولانی شدن فرآیند منجر می‌شود
              </h2>
              <ul className="space-y-4">
                {[
                  'طرح دعوای حقوقی علیه ظهرنویس‌ها بدون رعایت مهلت‌های قانونی (۱۵ روز، ۴۵ روز یا ۴ ماه از تاریخ سررسید)',
                  'عدم دریافت کد رهگیری گواهی عدم پرداخت برای چک‌های صیادی',
                  'عدم درخواست قرار تأمین خواسته که منجر به انتقال اموال توسط بدهکار می‌شود',
                  'ثبت شکایت کیفری برای چک‌هایی که وعده‌دار، تضمینی یا سفیدامضا هستند (که قطعاً رد می‌شود)',
                  'اقدام به اجراییه ماده ۲۳ علیه ضامن یا ظهرنویس (اجراییه فقط علیه صادرکننده ممکن است)'
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
              مسیرهای پیگیری پرونده چک برگشتی
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Path 1: Free Knowledge */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-slate-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">آموزش رایگان</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  مقایسه کامل انواع چک و روش‌های قانونی وصول را در مقالات آموزشی مطالعه کنید.
                </p>
                <Link href="/knowledge/civil-vs-criminal-check" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  تفاوت چک حقوقی و کیفری <ArrowLeft className="w-4 h-4 mr-1" />
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
                <h4 className="text-lg font-bold text-brand-900 mb-3">تنظیم دادخواست مطالبه وجه چک</h4>
                <p className="text-sm text-brand-800 leading-relaxed mb-6 flex-grow">
                  تنظیم اصولی دادخواست حقوقی، تقاضای تأمین خواسته و مطالبه خسارت تأخیر توسط متخصصین.
                </p>
                <Link href="/request?service=check-claim" className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-colors">
                  ثبت سفارش تنظیم
                </Link>
              </div>

              {/* Path 3: Lawyer Referral */}
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col h-full shadow-md">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-[#E5C158]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">معرفی وکیل متخصص</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                  برای پیگیری پرونده‌های پیچیده چک، تأمین خواسته فوری یا دفاع در قبال چک تضمینی، وکیل معرفی می‌کنیم.
                </p>
                <Link href="/lawyer-referral" className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors border border-slate-700 hover:border-slate-600">
                  معرفی وکیل چک
                </Link>
              </div>

            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
