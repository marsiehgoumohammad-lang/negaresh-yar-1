import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const steps = [
  ['۱', 'بررسی اعلام برنده شدن', 'شناسه مزایده، آگهی، نتیجه اعلام شده و مشخصات مال تطبیق داده می شود.'],
  ['۲', 'استخراج تعهدات همان آگهی', 'مبلغ باقیمانده، روش پرداخت، مدارک، محل نگهداری و شرایط تحویل از اسناد همان مزایده بررسی می شود.'],
  ['۳', 'پیگیری تسویه و ثبت مدارک', 'رسیدهای پرداخت و مدارک درخواستی برای پیگیری از مسیر اعلام شده آماده می شوند.'],
  ['۴', 'پیگیری مجوز و هماهنگی خروج', 'وضعیت تایید پرداخت، مجوز خروج یا معرفی نامه از مرجع مسئول پیگیری می شود؛ صدور آنها در اختیار آن مرجع است.'],
  ['۵', 'هماهنگی تحویل و صورت جلسه', 'پس از فراهم شدن مجوزها، زمان و محل تحویل با انبار هماهنگ و اقلام تحویلی ثبت می شود.'],
];
const documents = [
  'آگهی و شناسه مزایده و مشخصات ردیف برنده شده',
  'اعلام برنده شدن یا ابلاغ نتیجه مزایده',
  'مدارک هویتی برنده و در صورت اقدام نماینده، مدرک اختیار یا وکالت معتبر',
  'رسیدهای پرداخت و اسناد تسویه، در صورت انجام',
  'مشخصات مال، شماره ردیف، محل انبار و اطلاعات تماس اعلام شده',
  'مکاتبات و پاسخ های قبلی سازمان یا انبار',
];
const risks = [
  ['اتکا به مهلت عمومی و غیرمستند', 'زمان پرداخت و تحویل در هر آگهی و پرونده ممکن است متفاوت باشد.', 'مهلت و تشریفات را از متن آگهی و مکاتبه رسمی همان پرونده استخراج کنید.'],
  ['حرکت به سمت خروج پیش از تکمیل مجوزها', 'پرداخت وجه به تنهایی لزوما به معنی صدور مجوز خروج یا امکان تحویل نیست.', 'وضعیت تایید نهایی و مجوز خروج را از مرجع مسئول استعلام کنید.'],
  ['ناهماهنگی مشخصات مال و مدارک', 'مغایرت شناسه، شماره ردیف یا مشخصات مال می تواند تحویل را متوقف کند.', 'پیش از مراجعه، اطلاعات مال را با اسناد مزایده تطبیق دهید.'],
];

export function ImpoundedAssetsAuctionDeliveryGuideSection() {
  return (
    <div className="py-12 sm:py-16 bg-[#090F1D] border-y border-slate-800/70">
      <Container>
        <div className="max-w-5xl mx-auto space-y-12 text-right">
          <header className="max-w-3xl mx-auto text-center space-y-3">
            <span className="inline-flex rounded-full border border-[#E5C158]/30 bg-[#E5C158]/10 px-3 py-1 text-xs font-bold text-[#E5C158]">راهنمای اجرایی پس از برنده شدن</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-relaxed">بعد از برنده شدن در مزایده اموال تملیکی چه کارهایی باید انجام شود؟</h2>
            <p className="text-sm sm:text-base leading-8 text-slate-300">برنده شدن پایان کار نیست. ادامه مسیر به شرایط آگهی، نوع مال، وضعیت پرداخت و تشریفات مرجع تحویل بستگی دارد. ترتیب و مدارک نهایی باید با اسناد همان مزایده تطبیق داده شود.</p>
          </header>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۱. محدوده خدمت و تفاوت آن با شرکت در مزایده</h3>
            <p className="text-sm leading-8 text-slate-300">این خدمت برای کسی است که برنده شدن او اعلام شده و اکنون به پیگیری تسویه، تکمیل مدارک، دریافت تاییدیه ها، هماهنگی با انبار و تحویل فیزیکی مال نیاز دارد. ثبت نام، احراز هویت و ثبت پیشنهاد قیمت موضوع این صفحه نیست و در <Link className="text-[#E5C158] underline underline-offset-4" href="/services/impounded-assets-auction">صفحه ثبت نام و شرکت در مزایده اموال تملیکی</Link> توضیح داده شده است.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"><h4 className="font-bold text-white mb-2">آنچه قابل پیگیری است</h4><p className="text-sm leading-7 text-slate-300">بررسی اسناد، آماده سازی مکاتبه و درخواست، پیگیری اداری با اختیار و توافق روشن، هماهنگی با انبار و تنظیم فهرست تحویل.</p></div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5"><h4 className="font-bold text-amber-200 mb-2">آنچه در اختیار ما نیست</h4><p className="text-sm leading-7 text-slate-300">تایید پرداخت، صدور مجوز خروج، تعیین زمان تحویل و تصمیم درباره موانع اداری در اختیار سازمان یا مرجع ذی صلاح است؛ نگارش یار نتیجه یا زمان آن را تضمین نمی کند.</p></div>
            </div>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۲. مراحل پیگیری از اعلام برنده تا تحویل</h3>
            <div className="space-y-3">{steps.map(([n,title,desc]) => <div key={n} className="flex gap-4 rounded-2xl border border-slate-800 bg-[#0D1728] p-4 sm:p-5"><span className="w-9 h-9 shrink-0 rounded-xl bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-black">{n}</span><div><h4 className="font-bold text-white mb-1">{title}</h4><p className="text-sm leading-7 text-slate-300">{desc}</p></div></div>)}</div>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۳. مدارک و اطلاعاتی که بهتر است آماده کنید</h3>
            <p className="text-sm leading-8 text-slate-300">فهرست زیر عمومی است و ممکن است با توجه به آگهی، نوع مال و وضعیت پرونده تغییر کند. مدارک را فقط از مسیر ارتباطی مورد توافق بفرستید.</p>
            <ul className="grid sm:grid-cols-2 gap-3">{documents.map(item => <li key={item} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm leading-7 text-slate-200 flex gap-3"><span className="text-emerald-400 font-black">✓</span><span>{item}</span></li>)}</ul>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۴. تفاوت تحویل خودرو، ماشین آلات و سایر کالاها</h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-700">
              <table className="w-full min-w-[620px] text-sm text-right"><thead className="bg-slate-800 text-white"><tr><th className="p-4">نوع مال</th><th className="p-4">مواردی که باید بررسی شود</th><th className="p-4">نکته تحویل</th></tr></thead><tbody className="divide-y divide-slate-800 text-slate-300"><tr><td className="p-4 font-bold text-white">خودرو</td><td className="p-4">شماره شاسی و موتور، مشخصات آگهی، مدارک ترخیص و مجوزهای مربوط</td><td className="p-4">قابلیت شماره گذاری یا تردد را مفروض نگیرید؛ ملاک اسناد و مجوزهای همان خودرو است.</td></tr><tr><td className="p-4 font-bold text-white">ماشین آلات</td><td className="p-4">مدل، شماره سریال، متعلقات، وضعیت بارگیری و امکان حمل</td><td className="p-4">هزینه و مسئولیت بارگیری و حمل باید پیش از مراجعه روشن شود.</td></tr><tr><td className="p-4 font-bold text-white">کالا و محموله</td><td className="p-4">تعداد، بسته بندی، ردیف کالا، مجوزهای خاص و وضعیت انبار</td><td className="p-4">صورت برداری از تعداد و وضعیت ظاهری هنگام تحویل اهمیت دارد.</td></tr></tbody></table>
            </div>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۵. علت های رایج تاخیر یا توقف تحویل</h3>
            <div className="grid md:grid-cols-3 gap-4">{risks.map(([title,impact,solution]) => <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3"><h4 className="font-bold text-amber-200">{title}</h4><p className="text-sm leading-7 text-slate-300">{impact}</p><p className="text-sm leading-7 text-emerald-200"><strong>اقدام مناسب:</strong> {solution}</p></article>)}</div>
          </section>
          <section className="space-y-4">
            <h3 className="text-xl font-extrabold text-white">۶. پیگیری حضوری و محدوده جغرافیایی</h3>
            <p className="text-sm leading-8 text-slate-300">بررسی اسناد و آماده سازی درخواست ها می تواند غیرحضوری انجام شود. مراجعه به انبار، هماهنگی بارگیری یا حضور هنگام تحویل به شهر، محل نگهداری مال و امکان تامین نماینده محلی بستگی دارد. پیش از پذیرش این بخش از کار، امکان انجام، حدود اختیار، هزینه رفت و آمد و مسئولیت ها جداگانه اعلام و با متقاضی توافق می شود. این خدمت به معنی نمایندگی رسمی سازمان اموال تملیکی نیست.</p>
          </section>
          <section className="rounded-2xl border border-slate-700 bg-[#0D1728] p-5 sm:p-7 space-y-3">
            <h3 className="text-xl font-extrabold text-white">۷. پیش از ثبت سفارش چه چیزی مشخص می شود؟</h3>
            <p className="text-sm leading-8 text-slate-300">پس از دریافت شناسه مزایده و مدارک اولیه، موضوع قابل پیگیری، مرجع مخاطب، نیاز به حضور فیزیکی، حدود اختیار، هزینه و مدارک تکمیلی بررسی می شود. تا پیش از توافق روشن، تعهدی نسبت به مراجعه حضوری یا تحویل مال ایجاد نمی شود.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-xl font-extrabold text-white">۸. مسیرهای مرتبط در خوشه مزایده</h3>
            <div className="grid sm:grid-cols-2 gap-3"><Link href="/knowledge/government-auction-guide" className="rounded-xl border border-slate-800 p-4 text-[#E5C158] hover:border-[#E5C158]/50">راهنمای جامع مزایده و سامانه ستاد ایران ←</Link><Link href="/services/government-auctions" className="rounded-xl border border-slate-800 p-4 text-[#E5C158] hover:border-[#E5C158]/50">ثبت نام و شرکت در مزایده های دولتی ←</Link></div>
          </section>
          <section className="rounded-2xl border border-[#E5C158]/30 bg-[#E5C158]/5 p-6 sm:p-8 text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white">برای بررسی پرونده تحویل مال مزایده ای آماده اید؟</h3>
            <p className="text-sm leading-7 text-slate-300 max-w-2xl mx-auto">شناسه مزایده، اعلام برنده شدن و محل نگهداری مال را ارسال کنید تا ابتدا امکان و حدود پیگیری بررسی شود.</p>
            <Link href="/request?service=impounded-assets-auction-delivery" className="inline-flex items-center justify-center rounded-xl bg-[#E5C158] px-6 py-3 font-black text-[#101827] hover:bg-[#F0D98C]">ثبت درخواست بررسی و پیگیری</Link>
          </section>
        </div>
      </Container>
    </div>
  );
}
