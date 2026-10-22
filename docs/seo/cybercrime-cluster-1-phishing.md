# مستند معماری خوشه اول فضای مجازی: فیشینگ، درگاه جعلی و برداشت غیرمجاز بانکی (TASK-027)

## ۱. خلاصه وضعیت و تصمیم معماری سه دارایی خوشه

در چارچوب استاندارد معماری Pillar-Cluster سایت نگارش یار (`docs/seo/pillar-cluster-architecture-standard.md`)، خوشه اول زیرمجموعه هاب مادر فضای مجازی (`/knowledge/cybercrime-guide`) با تمرکز بر **فیشینگ، درگاه جعلی و برداشت غیرمجاز از حساب بانکی** به شرح زیر طراحی و پیاده سازی شد:

| نقش دارایی در خوشه | مسیر (URL / Slug) | فایل منبع در کدبیس | وضعیت انتشار (`status`) | تصمیم معماری |
| :--- | :--- | :--- | :--- | :--- |
| **۱. مقاله تخصصی خوشه (Cluster Article)** | `/knowledge/phishing-and-unauthorized-withdrawal-complaint` | `src/data/knowledge/phishing-and-unauthorized-withdrawal-complaint.ts` | `draft` | ایجاد مقاله تخصصی جدید با پوشش کامل مواد ۱۲ و ۱۳ قانون جرایم رایانه ای (۷۴۰ و ۷۴۱ تعزیرات)، رای وحدت رویه ۷۲۹ دیوان عالی کشور، اقدامات فوری بانکی، حفظ ادله دیجیتال، ماده ۱۰۷ و ۱۴۸ ق.آ.د.ک و مسئولیت حساب های اجاره ای. |
| **۲. خدمت حقوقی مقصد (Service Landing)** | `/services/petition-writing` (تکمیلی: `/services/legal-brief` و `/services/objection-non-prosecution-order`) | `src/data/services/petition-writing.ts` (موجود و منتشرشده) | `published` (موجود در تولید) | **عدم ساخت خدمت جدید**؛ استفاده از خدمات منتشرشده موجود (`petition-writing` برای ثبت شکواییه اولیه، `legal-brief` برای لوایح تکمیلی، و `objection-non-prosecution-order` برای اعتراض به قرار منع تعقیب). |
| **۳. نمونه شکواییه اختصاصی (Sample Page)** | `/samples/phishing-unauthorized-withdrawal-complaint` | `src/data/samples/phishing-unauthorized-withdrawal-complaint.ts` | `draft` | ایجاد نمونه شکواییه اختصاصی با جدول مشخصات تراکنش های غیرمجاز (RRN، شماره کارت/شبای مقصد)، استناد به ماده ۱۳ قانون جرایم رایانه ای و رای وحدت رویه ۷۲۹، و تقاضای قرار تامین خواسته (ماده ۱۰۷ ق.آ.د.ک). |

---

## ۲. دلایل فنی و سئویی عدم ساخت خدمت جدید در `/services/*`

1. **محدودیت معماری انتشار در مسیر `/services/<slug>`**:
   برخلاف مسیرهای `/knowledge/[slug]` و `/samples/[slug]` که فیلد `status: 'draft'` را بررسی کرده و صفحات پیش نویس را از دسترس عمومی و `sitemap.xml` خارج می کنند، در معماری فعلی پروژه (`src/app/services/<slug>/page.tsx`، `src/data/services/<slug>.ts` و `src/app/sitemap.ts`) صفحات خدمتی فاقد مکانیزم ایزولاسیون `status: 'draft'` در سطح روت هستند و به صورت مسیر استاتیک عمومی بیلد می شوند. بنابراین ساخت یک مسیر خدمت جدید بدون مجوز انتشار عمومی، ناقض دستور صریح حفظ وضعیت `draft` است.
2. **جلوگیری از هم پوشانی نیت جستجو (Keyword Cannibalization)**:
   نیت تراکنشی کاربر برای برون سپاری نگارش شکواییه کیفری در صفحه تثبیت شده `/services/petition-writing` و فرم سفارش `/request?service=petition-writing` پوشش داده شده است. ایجاد صفحات خدمتی متعدد برای هر مصداق جرم کیفری، اعتبار دامنه را میان صفحات موازی تقسیم می کند.

---

## ۳. تفکیک نیت جستجو (Search Intent) میان نمونه جدید و نمونه های موجود

برای جلوگیری از هرگونه تداخل سئویی با نمونه های موجود در سایت:

- **تفاوت با `/samples/fraud-complaint` (نمونه شکواییه کلاهبرداری عام)**:
  نمونه `fraud-complaint` ناظر بر کلاهبرداری سنتی (ماده ۱ قانون تشدید مجازات مرتکبین ارتشاء، اختلاس و کلاهبرداری) است که در آن مالباخته در اثر مانور متقلبانه، خود با رضایت ظاهری اقدام به تسلیم مال یا واریز وجه می کند. در حالی که نمونه جدید `phishing-unauthorized-withdrawal-complaint` منحصرا ناظر بر سرقت داده های بانکی و برداشت غیرمجاز از حساب از طریق درگاه جعلی، لینک پیامکی آلوده یا بدافزار (مواد ۱۲ و ۱۳ قانون جرایم رایانه ای / مواد ۷۴۰ و ۷۴۱ تعزیرات) است.
- **تفاوت با `/samples/bank-complaint` (شکایت اداری به بانک مرکزی)**:
  نمونه `bank-complaint` یک مکاتبه اداری خطاب به اداره نظارت بر بانک ها و موسسات اعتباری بانک مرکزی بابت تخلفات صنفی یا اداری شعبه بانک است، نه شکواییه کیفری در دادسرا برای تعقیب مرتکب فیشینگ و توقیف قضایی وجوه مسروقه.

---

## ۴. ماتریس لینک سازی داخلی خوشه (Internal Linking Matrix)

قانون طلایی رعایت شده در کد: **هیچ صفحه ای به صفحه ای که در حال حاضر `status: 'draft'` دارد لینک فعال (`href`) نمی دهد.** تمامی لینک های فعال فعلی صرفا به صفحات منتشرشده و دارای کد وضعیت `200` اشاره دارند و لینک های بین صفحات پیش نویس در قالب کامنت های ساختاریافته در کد مستند شده اند تا همزمان با انتشار نهایی فعال شوند.

### الف) لینک های فعال فعلی (به صفحات منتشرشده `published`)

| صفحه مبدا (`draft`) | لینک های خروجی فعال به صفحات منتشرشده (`published`) |
| :--- | :--- |
| `/knowledge/phishing-and-unauthorized-withdrawal-complaint` | ۱. خدمت اصلی (در متن و `relatedServices`): `/services/petition-writing` و `/request?service=petition-writing`<br>۲. خدمات مکمل (در متن و `relatedServices`): `/services/legal-brief`، `/services/objection-non-prosecution-order`<br>۳. نمونه های مکمل منتشرشده (در متن و `relatedSamples`): `/samples/complaint`، `/samples/fraud-complaint`، `/samples/objection-non-prosecution-order`، `/samples/legal-brief`<br>۴. مقالات آموزشی منتشرشده (در متن و `relatedArticles`): `/knowledge/how-to-write-complaint`، `/knowledge/criminal-court-jurisdiction-guide`، `/knowledge/what-is-e-notification`، `/knowledge/online-judicial-services-guide`، `/knowledge/how-to-object-prosecution-orders`، `/knowledge/petition-vs-complaint`، `/knowledge/what-is-legal-brief` |
| `/samples/phishing-unauthorized-withdrawal-complaint` | ۱. خدمت اصلی (`serviceLink`، `relatedServices` و CTA): `/services/petition-writing` و `/request?service=petition-writing`<br>۲. خدمات مکمل (`relatedServices`): `/services/legal-brief`، `/services/objection-non-prosecution-order`<br>۳. نمونه های مرتبط منتشرشده (`relatedSamples`): `/samples/complaint`، `/samples/fraud-complaint`، `/samples/objection-non-prosecution-order`، `/samples/legal-brief`<br>۴. مقالات مرتبط منتشرشده (`relatedArticles`): `/knowledge/how-to-write-complaint`، `/knowledge/what-is-e-notification`، `/knowledge/how-to-object-prosecution-orders`، `/knowledge/criminal-court-jurisdiction-guide`، `/knowledge/online-judicial-services-guide` |

### ب) لینک های برنامه ریزی شده خوشه (برای فعال سازی همزمان با تغییر وضعیت به `published`)

هنگامی که کارفرما مجوز تغییر وضعیت هاب مادر و خوشه اول را از `draft` به `published` صادر نماید، لینک های سه طرفه زیر فعال می شوند:
1. از هاب مادر (`/knowledge/cybercrime-guide` بخش ۱، بخش ۲ و `relatedArticles`) $\leftarrow$ به مقاله `/knowledge/phishing-and-unauthorized-withdrawal-complaint`، مقاله `/knowledge/cybercrime-complaint-guide` و نمونه `/samples/phishing-unauthorized-withdrawal-complaint`.
2. از مقاله `/knowledge/phishing-and-unauthorized-withdrawal-complaint` $\leftarrow$ به هاب مادر `/knowledge/cybercrime-guide`، مقاله `/knowledge/cybercrime-complaint-guide` و نمونه اختصاصی `/samples/phishing-unauthorized-withdrawal-complaint`.
3. از نمونه `/samples/phishing-unauthorized-withdrawal-complaint` $\leftarrow$ به مقاله `/knowledge/phishing-and-unauthorized-withdrawal-complaint`، هاب مادر `/knowledge/cybercrime-guide` و مقاله `/knowledge/cybercrime-complaint-guide`.

---

## ۵. مشخصات سئو، اسکیما و تصویر شاخص پیشنهادی

- **مقاله تخصصی (`/knowledge/phishing-and-unauthorized-withdrawal-complaint`)**:
  - **Title**: `شکایت از فیشینگ و برداشت غیرمجاز از حساب بانکی؛ مراحل و مدارک لازم`
  - **Meta Description**: `راهنمای شکایت از فیشینگ، درگاه جعلی و برداشت غیرمجاز از حساب بانکی؛ اقدامات فوری بانکی، مدارک لازم، ثبت شکواییه در دادسرا و پیگیری قضایی.`
  - **Canonical**: `https://www.negaresh-yar.ir/knowledge/phishing-and-unauthorized-withdrawal-complaint`
  - **Active Image Asset (موجود در `public/og-image.png`)**: `https://www.negaresh-yar.ir/og-image.png` (ابعاد `1200x630` — فعال در OpenGraph و Schema تا زمان تولید تصویر اختصاصی)
  - **Proposed Featured Image Spec (پیشنهاد تصویر اختصاصی پیش از انتشار؛ فاقد فایل فیزیکی فعلی در `public/images/seo`)**: مسیر پیشنهادی `/images/seo/phishing-and-unauthorized-withdrawal-complaint.webp` (ابعاد `1200x675`) با `alt`: `شکایت از فیشینگ و برداشت غیرمجاز از حساب بانکی؛ مراحل و مدارک لازم`
  - **Schema Graph**: تولید خودکار در `src/components/knowledge/KnowledgeArticleTemplate.tsx` شامل `Organization` (`#organization`: مشهد، خراسان رضوی، تلفن `+989915147789`، مختصات `36.2972, 59.6067`)، `WebSite`، `WebPage`، `Article`، `BreadcrumbList` و `FAQPage`.

- **نمونه شکواییه اختصاصی (`/samples/phishing-unauthorized-withdrawal-complaint`)**:
  - **Title**: `نمونه شکواییه فیشینگ و برداشت غیرمجاز از حساب بانکی [متن آماده] | نگارش یار`
  - **Meta Description**: `متن آماده نمونه شکواییه فیشینگ، درگاه جعلی و برداشت غیرمجاز از حساب بانکی مستند به ماده ۱۳ قانون جرایم رایانه ای همراه با تقاضای تامین خواسته و مدارک بانکی.`
  - **Canonical**: `https://www.negaresh-yar.ir/samples/phishing-unauthorized-withdrawal-complaint`
  - **Schema Graph**: تولید خودکار در `src/app/samples/[slug]/page.tsx` شامل `Organization` (`#organization`: مشهد، خراسان رضوی، تلفن `+989915147789`، مختصات `36.2972, 59.6067`)، `WebSite`، `WebPage`، `BreadcrumbList`، `Article`، `DigitalDocument` (به همراه `MediaObject`) و `FAQPage` (بدون `HowTo`).
  - **ایزولاسیون وضعیت `draft`**: ثبت در `src/lib/stores/samples-store.ts` و فیلتر شدن خودکار از `allSamplesList` در `src/data/samples/index.ts`، `generateStaticParams`، `generateMetadata`، `DynamicSamplePage` و `sitemap.ts` تا زمان تغییر وضعیت به `published`.

---

## ۶. نکات نیازمند بررسی حقوقی انسانی (`[تأیید وکیل]`)

در متن مقاله تخصصی و نمونه شکواییه، موارد ظریف حقوقی که بسته به شعبه دادیاری یا بازپرسی و اوضاع و احوال پرونده ممکن است تحلیل های متفاوتی داشته باشند با برچسب `[تأیید وکیل]` مشخص شده اند:
1. مرز دقیق شمول ماده ۱۲ (سرقت رایانه ای داده ها)، ماده ۱۳ (کلاهبرداری مرتبط با رایانه) و ماده ۶ (جعل رایانه ای) در فروض مختلف ربودن اطلاعات کارت و برداشت وجه.
2. نحوه اعمال رای وحدت رویه شماره ۷۲۹ دیوان عالی کشور در فرض تعدد حساب های مبدا در حوزه های قضایی مختلف یا تعدد عناوین مجرمانه سایبری.
3. تفکیک قرار تامین خواسته کیفری (ماده ۱۰۷ ق.آ.د.ک در دادسرا) از تامین خواسته حقوقی (ماده ۱۰۸ ق.آ.د.م) و عدم یکسانی رویه قضایی در شمول ماده ۱۴۸ ق.آ.د.ک (و تبصره ۲ آن) نسبت به استرداد مستقیم وجوه نقد در حساب های بانکی پیش از صدور حکم ماهوی.
4. تفکیک مسئولیت کیفری (مستلزم احراز علم و عمد موضوع ماده ۱۲۶ قانون مجازات اسلامی) از مسئولیت مدنی (مستلزم طرح دادخواست حقوقی مستقل در صورت عدم احراز سوءنیت کیفری) برای دارندگان حساب های مقصد و حساب های اجاره ای.
