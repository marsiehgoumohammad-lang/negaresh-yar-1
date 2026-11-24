import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const steps = [
  ['۱', 'برنده شدن را در کارتابل تطبیق دهید', 'در کارتابل «پذیرش برنده بودن و پرداخت وجه»، رکورد متناظر با همان پارتی را پیدا کنید. مشاهده رکورد مربوط به پارتی، نشانه اعلام برنده بودن شماست.'],
  ['۲', 'شرایط همان آگهی را استخراج کنید', 'مهلت پذیرش، مبلغ و روش پرداخت، مدارک، محل تحویل، مهلت خروج و جریمه احتمالی را از اطلاعات تکمیلی همان مزایده یادداشت کنید.'],
  ['۳', 'پرداخت و رسید را کنترل کنید', 'پرداخت را فقط از مسیر اعلام شده انجام دهید و رسید، تاریخ، مبلغ و شناسه پیگیری را نگه دارید.'],
  ['۴', 'تایید دستگاه اجرایی را پیگیری کنید', 'وضعیت «پرداخت موفق» لزوما به معنی صدور مجوز خروج نیست. پرداخت باید توسط دستگاه اجرایی تایید شود.'],
  ['۵', 'مجوز خروج را در کارتابل بررسی کنید', 'پس از تاییدهای لازم، مجوز خروج در کارتابل «دریافت اقلام کالا از انبار» قابل مشاهده می شود.'],
  ['۶', 'زمان و محل تحویل را هماهنگ کنید', 'محل بازدید و تحویل را در اطلاعات تکمیلی پارتی بررسی و زمان مراجعه، مدارک، بارگیری و حمل را با مرجع مربوط هماهنگ کنید.'],
  ['۷', 'پیش از خروج، اقلام را صورت برداری کنید', 'تعداد، شناسه، شماره سریال و وضعیت ظاهری قابل مشاهده را با اسناد تطبیق دهید و مغایرت را همان محل ثبت کنید.'],
];
const documents = [
  'شماره مزایده مرجع و شناسه پارتی برنده شده',
  'تصویر آگهی و اطلاعات تکمیلی همان مزایده',
  'رکورد اعلام برنده شدن در کارتابل',
  'رسید پرداخت، مبلغ، تاریخ و شناسه پیگیری',
  'مدارک هویتی برنده یا مدارک اختیار نماینده',
  'مجوز خروج و اطلاعات محل تحویل، در صورت صدور',
  'مکاتبات، پیام ها و پاسخ های قبلی مرجع مربوط',
];
const deadlines = [
  ['مهلت پذیرش برنده بودن', 'تاریخ و ساعت اعلام شده برای پذیرش نتیجه'],
  ['آخرین مهلت پرداخت وجه', 'مبلغ، شیوه پرداخت و تاریخ نهایی درج شده در آگهی'],
  ['مهلت دریافت کالا از انبار', 'تاریخ شروع و پایان مهلت پس از صدور مجوز خروج، طبق همان آگهی'],
  ['جریمه دیرکرد دریافت کالا', 'درصد یا مبلغ ثبت شده در فیلد جریمه دیرکرد همان مزایده'],
  ['اعتبار حواله یا مجوز خروج', 'مدت اعتبار و شرایط استفاده از سند خروج، در صورت درج'],
];
const checks = [
  ['خودرو', 'شماره شاسی و موتور، پلاک یا شناسه بدنه در صورت وجود، مدل، رنگ، مدارک همراه، کلیدها و اقلام جانبی', 'قابلیت شماره گذاری، تردد یا سلامت فنی را از روی عنوان مزایده حدس نزنید؛ مدارک و مجوزهای همان خودرو باید بررسی شود.'],
  ['ماشین آلات و تجهیزات', 'مدل، برند، شماره سریال، سال ساخت در صورت درج، متعلقات، قطعات جداشده و وضعیت قابل مشاهده', 'پیش از مراجعه، ظرفیت جرثقیل، لیفتراک، بارگیری و وسیله حمل را مشخص کنید.'],
  ['کالا و محموله', 'تعداد بسته ها، وزن یا واحد شمارش درج شده، شرح کالا، نوع بسته بندی و اقلام همراه', 'اگر کالا در چند ردیف یا پالت تحویل می شود، هر ردیف را جداگانه شمارش و ثبت کنید.'],
];
const risks = [
  ['پرداخت موفق را معادل مجوز خروج دانستن', 'ممکن است تایید دستگاه اجرایی هنوز انجام نشده باشد.', 'وضعیت تایید پرداخت و سپس نمایش مجوز خروج را جداگانه بررسی کنید.'],
  ['مراجعه بدون کنترل مهلت و محل تحویل', 'ممکن است مراجعه خارج از مهلت یا به انبار اشتباه انجام شود.', 'محل، زمان، مهلت و جریمه را از اطلاعات همان پارتی استخراج کنید.'],
  ['امضای رسید بدون تطبیق اقلام', 'ثبت کسری یا مغایرت پس از خروج دشوارتر می شود.', 'پیش از امضا، تعداد و مشخصات قابل مشاهده را بررسی و اختلاف را ثبت کنید.'],
];
const requestLines = [
  'بسمه تعالی', '',
  'مدیریت محترم اداره کل جمع آوری و فروش اموال تملیکی استان [نام استان]',
  'موضوع: درخواست بررسی وضعیت تایید پرداخت و پیگیری مجوز خروج کالای برنده شده در مزایده',
  'شماره مزایده: [شماره] | شناسه پارتی: [شناسه]',
  'نام برنده: [نام] | تاریخ و مبلغ پرداخت: [اطلاعات]',
  'شناسه پیگیری تراکنش: [شماره]', '',
  'با سلام و احترام',
  'اینجانب [نام]، برنده اعلام شده پارتی فوق هستم. وجه مربوط به پارتی یادشده را در تاریخ [تاریخ] پرداخت کرده ام و وضعیت تراکنش در کارتابل «پرداخت موفق» نمایش داده می شود؛ با این حال، رکورد مربوط به کالا یا مجوز خروج در کارتابل «دریافت اقلام کالا از انبار» برای اینجانب قابل مشاهده نیست.',
  '',
  'خواهشمند است دستور فرمایید وضعیت پرداخت و تطبیق آن با پارتی یادشده بررسی و در صورت باقی بودن هرگونه اقدام یا مدرک، مورد لازم اعلام شود. همچنین در صورت تکمیل تاییدیه ها، وضعیت صدور یا نمایش مجوز خروج و اطلاعات محل و زمان تحویل اعلام گردد.',
  '',
  'پیوست: آگهی و شناسه پارتی، اعلام برنده شدن، رسید پرداخت و تصویر وضعیت فعلی کارتابل.',
  '',
  'با احترام',
  '[نام و امضا] - [تاریخ] - [شماره تماس]',
];

export function ImpoundedAssetsAuctionDeliveryGuideSection() {
  return (
    <div className="py-12 sm:py-16 bg-[#090F1D] border-y border-slate-800/70">
      <Container>
        <div className="max-w-5xl mx-auto space-y-12 text-right">
          <header className="max-w-3xl mx-auto text-center space-y-3">
            <span className="inline-flex rounded-full border border-[#E5C158]/30 bg-[#E5C158]/10 px-3 py-1 text-xs font-bold text-[#E5C158]">راهنمای عملی پس از اعلام برنده</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-relaxed">از اعلام برنده شدن تا دریافت کالا از انبار؛ چه مراحلی باقی می ماند؟</h2>
            <p className="text-sm sm:text-base leading-8 text-slate-300">این راهنما برای مرحله پس از برنده شدن در مزایده اموال تملیکی است. ترتیب اقدام و مهلت ها را باید با آگهی و اطلاعات تکمیلی همان پارتی تطبیق دهید؛ برای همه مزایده ها یک زمان یا جریمه ثابت وجود ندارد.</p>
          </header>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۱. این خدمت از کجا شروع می شود و چه چیزی را پوشش نمی دهد؟</h3>
            <p className="text-sm leading-8 text-slate-300">این خدمت زمانی کاربرد دارد که نتیجه مزایده اعلام شده و شما برای پذیرش برنده بودن، پرداخت، تایید دستگاه اجرایی، مجوز خروج یا تحویل فیزیکی نیاز به پیگیری دارید. ثبت نام، احراز هویت و ارسال پیشنهاد قیمت مربوط به مرحله قبل از برنده شدن است و در <Link className="text-[#E5C158] underline underline-offset-4" href="/services/impounded-assets-auction">صفحه شرکت در مزایده اموال تملیکی</Link> توضیح داده شده است.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"><h4 className="font-bold text-white mb-2">امور قابل پیگیری با توافق</h4><p className="text-sm leading-7 text-slate-300">بررسی آگهی و مدارک، استخراج اقدام باقی مانده، تنظیم درخواست اداری، پیگیری وضعیت پرداخت و مجوز از مسیر مجاز، هماهنگی زمان و محل تحویل و تهیه چک لیست تحویل.</p></div>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5"><h4 className="font-bold text-amber-200 mb-2">تصمیم هایی که در اختیار نگارش یار نیست</h4><p className="text-sm leading-7 text-slate-300">تایید پرداخت، صدور مجوز خروج، تعیین مهلت، اجازه ورود به انبار، تصمیم درباره مغایرت و تحویل نهایی بر عهده سازمان یا مرجع مسئول است. نگارش یار نماینده رسمی سازمان نیست و نتیجه را تضمین نمی کند.</p></div>
            </div>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۲. مراحل واقعی پیگیری از اعلام برنده تا تحویل</h3>
            <div className="space-y-3">{steps.map(([n,title,desc]) => <div key={n} className="flex gap-4 rounded-2xl border border-slate-800 bg-[#0D1728] p-4 sm:p-5"><span className="w-9 h-9 shrink-0 rounded-xl bg-[#E5C158]/10 text-[#E5C158] flex items-center justify-center font-black">{n}</span><div><h4 className="font-bold text-white mb-1">{title}</h4><p className="text-sm leading-7 text-slate-300">{desc}</p></div></div>)}</div>
          </section>
          <section className="rounded-2xl border border-[#E5C158]/30 bg-[#E5C158]/5 p-5 sm:p-7 space-y-4">
            <h3 className="text-xl font-extrabold text-white">۳. پرداخت موفق است اما در «دریافت اقلام کالا از انبار» چیزی نمی بینید؟</h3>
            <p className="text-sm leading-8 text-slate-200">این وضعیت لزوما به معنی ناموفق بودن پرداخت نیست. در راهنمای پرسش های متداول مزایدات سامانه ستاد توضیح داده شده که پرداخت باید توسط دستگاه اجرایی تایید شود و پس از تاییدهای لازم، مجوز خروج کالا صادر و در کارتابل «دریافت اقلام کالا از انبار» قابل مشاهده می شود.</p>
            <ol className="list-decimal pr-5 space-y-2 text-sm leading-7 text-slate-200"><li>شماره مزایده و شناسه پارتی را با رسید پرداخت تطبیق دهید.</li><li>وضعیت پرداخت و شناسه پیگیری تراکنش را نگهداری کنید.</li><li>از مرجع مربوط، وضعیت تایید پرداخت توسط دستگاه اجرایی را پیگیری کنید.</li><li>پس از تایید، دوباره کارتابل «دریافت اقلام کالا از انبار» را بررسی کنید.</li><li>پیش از مراجعه، مجوز خروج، محل انبار و مهلت تحویل را کنترل کنید.</li></ol>
            <p className="text-xs leading-6 text-slate-400">برای مشاهده توضیح پشتیبانی درباره این وضعیت، به <a className="text-[#E5C158] underline underline-offset-4" href="https://taminsetad.com/سوالات-متداول/سوالات-مزایدات/" target="_blank" rel="noreferrer">پرسش های متداول مزایدات در تامین ستاد</a> مراجعه کنید. این صفحه راهنمای پشتیبانی است؛ ملاک اقدام شما همچنان آگهی و اعلام مرجع مسئول در پرونده خودتان است.</p>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۴. مهلت پرداخت و خروج کالا را از کجا بفهمیم؟</h3>
            <p className="text-sm leading-8 text-slate-300">به عددهای عمومی در سایت ها یا تجربه یک مزایده دیگر اتکا نکنید. اطلاعات زمانی و شرایط هر پارتی ممکن است متفاوت باشد. این موارد را از آگهی و بخش اطلاعات تکمیلی همان مزایده استخراج کنید:</p>
            <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="w-full min-w-[580px] text-sm text-right"><thead className="bg-slate-800 text-white"><tr><th className="p-4">مورد</th><th className="p-4">چه چیزی را بررسی کنید؟</th></tr></thead><tbody className="divide-y divide-slate-800 text-slate-300">{deadlines.map(([title,desc]) => <tr key={title}><td className="p-4 font-bold text-white">{title}</td><td className="p-4 leading-7">{desc}</td></tr>)}</tbody></table></div>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۵. مدارک و اطلاعاتی که برای شروع بررسی لازم است</h3>
            <p className="text-sm leading-8 text-slate-300">برای جلوگیری از رفت و برگشت، بهتر است مدارک زیر را یکجا آماده کنید. ممکن است مرجع تحویل مدارک دیگری هم مطالبه کند.</p>
            <ul className="grid sm:grid-cols-2 gap-3">{documents.map(item => <li key={item} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm leading-7 text-slate-200 flex gap-3"><span className="text-emerald-400 font-black">✓</span><span>{item}</span></li>)}</ul>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۶. هنگام تحویل خودرو، ماشین آلات و کالا چه چیزهایی را کنترل کنیم؟</h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-700"><table className="w-full min-w-[720px] text-sm text-right"><thead className="bg-slate-800 text-white"><tr><th className="p-4">نوع مال</th><th className="p-4">موارد قابل تطبیق</th><th className="p-4">نکته مهم</th></tr></thead><tbody className="divide-y divide-slate-800 text-slate-300">{checks.map(([kind,detail,note]) => <tr key={kind}><td className="p-4 font-bold text-white">{kind}</td><td className="p-4 leading-7">{detail}</td><td className="p-4 leading-7">{note}</td></tr>)}</tbody></table></div>
            <p className="text-sm leading-8 text-slate-300">این کنترل، صورت برداری از مشخصات و وضعیت قابل مشاهده است و جایگزین کارشناسی فنی، تست عملکرد یا ارزیابی سلامت کالا نیست.</p>
          </section>
          <section className="space-y-5">
            <h3 className="text-xl font-extrabold text-white">۷. اگر کالا با آگهی یا انتظار شما مغایرت داشت</h3>
            <div className="grid md:grid-cols-3 gap-4">{risks.map(([title,impact,solution]) => <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3"><h4 className="font-bold text-amber-200">{title}</h4><p className="text-sm leading-7 text-slate-300">{impact}</p><p className="text-sm leading-7 text-emerald-200"><strong>اقدام مناسب:</strong> {solution}</p></article>)}</div>
            <ul className="list-disc pr-5 space-y-2 text-sm leading-7 text-slate-300"><li>مغایرت را پیش از خروج و در محل تحویل به مسئول مربوط اعلام کنید.</li><li>شرح اختلاف، زمان، محل، شناسه پارتی و تصاویر مجاز را ثبت کنید.</li><li>از امضای عبارتی که تعداد یا وضعیت تحویل را خلاف واقع نشان می دهد خودداری کنید.</li><li>اگر اختلاف ماهیت فنی دارد، نظر کارشناس مستقل و واجد صلاحیت را جداگانه دریافت کنید.</li></ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-xl font-extrabold text-white">۸. نمونه متن کوتاه برای پیگیری تایید پرداخت و مجوز خروج</h3>
            <p className="text-sm leading-8 text-slate-300">این متن فقط الگوی شروع مکاتبه است. نسخه کامل تر و قابل ویرایش در نمونه های مرتبط قرار دارد.</p>
            <pre className="whitespace-pre-wrap rounded-2xl border border-slate-700 bg-slate-950 p-5 text-sm leading-8 text-slate-200 font-sans">{requestLines.join('\n')}</pre>
            <div className="flex flex-wrap gap-3"><Link href="/samples/impounded-assets-payment-approval-release-request" className="rounded-xl border border-[#E5C158]/50 px-4 py-3 text-sm font-bold text-[#E5C158] hover:bg-[#E5C158]/10">مشاهده نمونه درخواست پیگیری پرداخت و مجوز خروج</Link><Link href="/samples/impounded-assets-handover-checklist" className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-bold text-white hover:border-[#E5C158]/50">مشاهده چک لیست تحویل کالا</Link></div>
          </section>
          <section className="space-y-4">
            <h3 className="text-xl font-extrabold text-white">۹. حدود خدمت، مراجعه حضوری و امنیت اطلاعات</h3>
            <p className="text-sm leading-8 text-slate-300">بررسی اسناد و تنظیم مکاتبه می تواند غیرحضوری انجام شود. مراجعه به انبار، حضور نماینده، بارگیری و حمل به شهر، محل نگهداری مال، ضوابط مرجع تحویل و امکان تامین نیروی محلی بستگی دارد؛ هر بخش پیش از شروع جداگانه بررسی و درباره هزینه و مسئولیت آن توافق می شود.</p>
            <p className="text-sm leading-8 text-slate-300">نگارش یار نماینده رسمی سازمان اموال تملیکی نیست. برای بررسی اولیه، آگهی، شناسه پارتی، رسید پرداخت و تصویر وضعیت کارتابل کافی است. رمز عبور، کد یکبارمصرف، اطلاعات کامل کارت بانکی یا توکن امضای دیجیتال را برای هیچ شخصی ارسال نکنید.</p>
          </section>
          <section className="rounded-2xl border border-slate-700 bg-[#0D1728] p-5 sm:p-7 space-y-3">
            <h3 className="text-xl font-extrabold text-white">۱۰. پیش از پذیرش سفارش چه چیزی مشخص می شود؟</h3>
            <p className="text-sm leading-8 text-slate-300">پس از دریافت اطلاعات اولیه، موضوع قابل پیگیری، مرجع مخاطب، وضعیت پرداخت و مجوز، نیاز به مراجعه، حدود اختیار، هزینه و مدارک تکمیلی بررسی می شود. تا پیش از توافق روشن، تعهدی نسبت به مراجعه حضوری یا تحویل قطعی مال ایجاد نمی شود.</p>
            <div className="flex flex-wrap gap-3"><Link href="/services/impounded-assets-auction" className="text-sm text-[#E5C158] underline underline-offset-4">خدمت ثبت نام و شرکت در مزایده اموال تملیکی</Link><Link href="/knowledge/government-auction-guide" className="text-sm text-[#E5C158] underline underline-offset-4">راهنمای جامع مزایده و سامانه ستاد ایران</Link><Link href="/services/government-auctions" className="text-sm text-[#E5C158] underline underline-offset-4">خدمات مزایده های دولتی</Link></div>
          </section>
          <section className="rounded-2xl border border-[#E5C158]/30 bg-[#E5C158]/5 p-6 sm:p-8 text-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-white">برای بررسی پرونده تحویل کالای مزایده درخواست ثبت کنید</h3>
            <p className="text-sm leading-7 text-slate-300 max-w-2xl mx-auto">آگهی، اعلام برنده شدن، رسید پرداخت و محل انبار را ارسال کنید تا ابتدا وضعیت و حدود پیگیری قابل انجام بررسی شود.</p>
            <Link href="/request?service=impounded-assets-auction-delivery" className="inline-flex items-center justify-center rounded-xl bg-[#E5C158] px-6 py-3 font-black text-[#101827] hover:bg-[#F0D98C]">ثبت درخواست بررسی پرونده تحویل</Link>
          </section>
        </div>
      </Container>
    </div>
  );
}
