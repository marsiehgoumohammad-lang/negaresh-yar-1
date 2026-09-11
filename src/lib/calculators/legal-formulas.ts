/**
 * Negaresh Yar - Legal Calculators Engine
 * فرمول‌های رسمی قوه قضاییه و شاخص‌های تورم بانک مرکزی جمهوری اسلامی ایران
 */

// شاخص سالانه بهای کالاها و خدمات مصرفی (CPI) بر اساس جدول رسمی بانک مرکزی
// سال‌های ۱۳۱۵ تا ۱۴۰۳
export const CENTRAL_BANK_ANNUAL_CPI: Record<number, number> = {
  1315: 0.00004,
  1316: 0.00005,
  1317: 0.00005,
  1318: 0.00006,
  1319: 0.00007,
  1320: 0.0001,
  1321: 0.00019,
  1322: 0.00039,
  1323: 0.00041,
  1324: 0.00035,
  1325: 0.00031,
  1326: 0.00033,
  1327: 0.00037,
  1328: 0.00038,
  1329: 0.00034,
  1330: 0.00037,
  1331: 0.0004,
  1332: 0.00044,
  1333: 0.0005,
  1334: 0.00051,
  1335: 0.00055,
  1336: 0.00058,
  1337: 0.00059,
  1338: 0.00067,
  1339: 0.00072,
  1340: 0.00073,
  1341: 0.00074,
  1342: 0.00075,
  1343: 0.00078,
  1344: 0.00078,
  1345: 0.00079,
  1346: 0.0008,
  1347: 0.00081,
  1348: 0.00084,
  1349: 0.00085,
  1350: 0.0009,
  1351: 0.00096,
  1352: 0.00107,
  1353: 0.00123,
  1354: 0.00135,
  1355: 0.00158,
  1356: 0.002,
  1357: 0.0022,
  1358: 0.00245,
  1359: 0.00302,
  1360: 0.00375,
  1361: 0.00445,
  1362: 0.00511,
  1363: 0.00575,
  1364: 0.00615,
  1365: 0.0076,
  1366: 0.0097,
  1367: 0.0125,
  1368: 0.0147,
  1369: 0.016,
  1370: 0.0193,
  1371: 0.024,
  1372: 0.0295,
  1373: 0.04,
  1374: 0.0597,
  1375: 0.0736,
  1376: 0.0863,
  1377: 0.1019,
  1378: 0.1224,
  1379: 0.1378,
  1380: 0.1535,
  1381: 0.1777,
  1382: 0.2054,
  1383: 0.2367,
  1384: 0.2613,
  1385: 0.2924,
  1386: 0.3462,
  1387: 0.4342,
  1388: 0.4811,
  1389: 0.5407,
  1390: 0.657,
  1391: 0.8576,
  1392: 1.1556,
  1393: 1.3358,
  1394: 1.4947,
  1395: 1.6298, // سال پایه ۱۳۹۵ = ۱۰۰ در سیستم قبلی، نرمال‌سازی شده پیوسته
  1396: 1.7863,
  1397: 2.3435,
  1398: 3.2785,
  1399: 4.4719,
  1400: 6.2786, // سال پایه ۱۴۰۰ = ۱۰۰ در سیستم جدید، پیوسته
  1401: 9.1918,
  1402: 13.0805,
  1403: 18.3127,
  // توجه: طبق بخشنامه‌های رسمی بانک مرکزی، شاخص سالانه برای سال‌های پس از ۱۴۰۳ هنوز نهایی و منتشر نشده است.
};

export const AVAILABLE_YEARS = Object.keys(CENTRAL_BANK_ANNUAL_CPI)
  .map(Number)
  .sort((a, b) => b - a);

/**
 * جدول رسمی شماره ۲ بانک مرکزی: شاخص ماهانه بهای کالاها و خدمات مصرفی (۱۳۹۵ = ۱۰۰)
 * مبنای محاسبه دقیق دادگاه‌ها و شعب اجرای احکام حقوقی طبق ماده ۵۲۲ ق.آ.د.م
 */
export const CENTRAL_BANK_MONTHLY_CPI: Record<number, Record<number, number>> = {
  1395: { 1: 100.0, 2: 100.4, 3: 101.6, 4: 102.4, 5: 103.8, 6: 104.5, 7: 104.9, 8: 105.1, 9: 106.6, 10: 107.5, 11: 108.7, 12: 110.9 },
  1396: { 1: 112.9, 2: 113.1, 3: 113.8, 4: 113.7, 5: 114.0, 6: 114.3, 7: 115.0, 8: 116.5, 9: 118.7, 10: 119.2, 11: 120.3, 12: 121.6 },
  1397: { 1: 122.6, 2: 124.6, 3: 129.9, 4: 134.3, 5: 141.7, 6: 150.3, 7: 157.2, 8: 162.8, 9: 169.2, 10: 171.7, 11: 174.4, 12: 181.2 },
  1398: { 1: 188.4, 2: 191.2, 3: 193.7, 4: 198.2, 5: 200.0, 6: 201.0, 7: 202.2, 8: 205.4, 9: 211.7, 10: 213.4, 11: 219.0, 12: 228.6 },
  1399: { 1: 234.3, 2: 240.2, 3: 251.5, 4: 265.4, 5: 274.7, 6: 284.6, 7: 304.5, 8: 320.3, 9: 332.9, 10: 337.8, 11: 346.9, 12: 364.2 },
  1400: { 1: 374.0, 2: 382.2, 3: 391.8, 4: 405.5, 5: 418.5, 6: 434.8, 7: 448.3, 8: 459.1, 9: 475.6, 10: 483.7, 11: 493.9, 12: 508.7 },
  1401: { 1: 524.5, 2: 551.8, 3: 610.3, 4: 638.4, 5: 651.1, 6: 668.0, 7: 688.0, 8: 716.2, 9: 740.6, 10: 772.5, 11: 806.5, 12: 859.7 },
  1402: { 1: 904.4, 2: 929.7, 3: 943.6, 4: 969.1, 5: 992.4, 6: 1009.3, 7: 1026.4, 8: 1043.9, 9: 1070.0, 10: 1092.5, 11: 1113.3, 12: 1144.4 },
  1403: { 1: 1176.4, 2: 1209.3, 3: 1243.2, 4: 1279.3, 5: 1320.2, 6: 1342.6, 7: 1378.8, 8: 1417.4, 9: 1457.1, 10: 1496.5, 11: 1538.4, 12: 1581.5 },
};

export const PERSIAN_MONTH_NAMES: { id: number; name: string }[] = [
  { id: 1, name: 'فروردین' },
  { id: 2, name: 'اردیبهشت' },
  { id: 3, name: 'خرداد' },
  { id: 4, name: 'تیر' },
  { id: 5, name: 'مرداد' },
  { id: 6, name: 'شهریور' },
  { id: 7, name: 'مهر' },
  { id: 8, name: 'آبان' },
  { id: 9, name: 'آذر' },
  { id: 10, name: 'دی' },
  { id: 11, name: 'بهمن' },
  { id: 12, name: 'اسفند' },
];

/**
 * محاسبه مهریه وجه نقد به نرخ روز
 * ماده ۱۰۸۲ قانون مدنی و تبصره الحاقی
 * فرمول: (شاخص سال قبل از وصول یا سال وصول ÷ شاخص سال عقد) × مبلغ اولیه مهریه
 */
export function calculateMehrieh(
  initialAmountToman: number,
  marriageYear: number,
  calculationYear: number = 1403
): {
  adjustedAmountToman: number;
  multiplier: number;
  marriageCpi: number;
  targetCpi: number;
  differenceToman: number;
  isAvailable: boolean;
  errorMessage?: string;
} {
  const marriageCpi = CENTRAL_BANK_ANNUAL_CPI[marriageYear];
  const targetCpi = CENTRAL_BANK_ANNUAL_CPI[calculationYear];

  if (!marriageCpi || !targetCpi) {
    return {
      adjustedAmountToman: initialAmountToman,
      multiplier: 1,
      marriageCpi: marriageCpi || 0,
      targetCpi: targetCpi || 0,
      differenceToman: 0,
      isAvailable: false,
      errorMessage: 'شاخص رسمی بانک مرکزی برای سال انتخابی در دسترس نمی‌باشد. بر اساس قانون، محاسبه بدون شاخص رسمی معتبر نیست.',
    };
  }

  const multiplier = targetCpi / marriageCpi;
  const adjustedAmountToman = Math.round(initialAmountToman * multiplier);
  const differenceToman = Math.max(0, adjustedAmountToman - initialAmountToman);

  return {
    adjustedAmountToman,
    multiplier: Number(multiplier.toFixed(2)),
    marriageCpi,
    targetCpi,
    differenceToman,
    isAvailable: true,
  };
}

/**
 * محاسبه خسارت تاخیر تادیه دین و بدهی
 * ماده ۵۲۲ قانون آیین دادرسی مدنی
 * فرمول: (شاخص زمان تادیه ÷ شاخص زمان سررسید) × اصل دین
 * عدم پیش‌بینی یا درون‌یابی غیرواقعی شاخص‌ها الزامی است.
 */
export function calculateDebtDelay(
  principalAmountToman: number,
  dueYear: number,
  settlementYear: number,
  dueMonth?: number,
  settlementMonth?: number
): {
  totalAmountToman: number;
  delayPenaltyToman: number;
  multiplier: number;
  dueCpi: number;
  settlementCpi: number;
  isAvailable: boolean;
  isMonthly: boolean;
  errorMessage?: string;
} {
  const isMonthlyRequested = Boolean(dueMonth && settlementMonth);

  // ۱. اعتبارسنجی مبلغ ورودی
  if (isNaN(principalAmountToman) || principalAmountToman < 0) {
    return {
      totalAmountToman: 0,
      delayPenaltyToman: 0,
      multiplier: 1,
      dueCpi: 0,
      settlementCpi: 0,
      isAvailable: false,
      isMonthly: isMonthlyRequested,
      errorMessage: 'مبلغ بدهی نمی‌تواند منفی باشد و باید عددی معتبر باشد.',
    };
  }

  // ۲. اعتبارسنجی تقدم و تاخر زمانی تاریخ‌ها
  const isChronologicallyInvalid =
    settlementYear < dueYear ||
    (settlementYear === dueYear &&
      dueMonth !== undefined &&
      settlementMonth !== undefined &&
      settlementMonth < dueMonth);

  if (isChronologicallyInvalid) {
    return {
      totalAmountToman: principalAmountToman,
      delayPenaltyToman: 0,
      multiplier: 1,
      dueCpi: 0,
      settlementCpi: 0,
      isAvailable: false,
      isMonthly: isMonthlyRequested,
      errorMessage: 'تاریخ تأدیه نمی‌تواند قبل از تاریخ سررسید یا مطالبه دین باشد.',
    };
  }

  // ۳. محاسبه ماهانه بر اساس جدول شماره ۲ رسمی بانک مرکزی
  if (dueMonth && settlementMonth) {
    const dueCpi = CENTRAL_BANK_MONTHLY_CPI[dueYear]?.[dueMonth];
    const settlementCpi = CENTRAL_BANK_MONTHLY_CPI[settlementYear]?.[settlementMonth];

    if (!dueCpi || !settlementCpi || dueCpi <= 0 || settlementCpi <= 0) {
      return {
        totalAmountToman: principalAmountToman,
        delayPenaltyToman: 0,
        multiplier: 1,
        dueCpi: dueCpi || 0,
        settlementCpi: settlementCpi || 0,
        isAvailable: false,
        isMonthly: true,
        errorMessage: 'شاخص رسمی بانک مرکزی برای تاریخ انتخابی منتشر نشده است؛ بنابراین محاسبه دقیق قانونی در حال حاضر امکانپذیر نیست.',
      };
    }

    const multiplier = settlementCpi / dueCpi;
    const totalAmountToman = Math.round(principalAmountToman * multiplier);
    const delayPenaltyToman = Math.max(0, totalAmountToman - principalAmountToman);

    return {
      totalAmountToman,
      delayPenaltyToman,
      multiplier: Number(multiplier.toFixed(4)),
      dueCpi,
      settlementCpi,
      isAvailable: true,
      isMonthly: true,
    };
  }

  // ۴. در حالت محاسبه سالانه (رأی وحدت رویه شماره ۸۵۰ هیئت عمومی دیوان عالی کشور)
  const dueCpi = CENTRAL_BANK_ANNUAL_CPI[dueYear];
  const settlementCpi = CENTRAL_BANK_ANNUAL_CPI[settlementYear];

  if (!dueCpi || !settlementCpi || dueCpi <= 0 || settlementCpi <= 0) {
    return {
      totalAmountToman: principalAmountToman,
      delayPenaltyToman: 0,
      multiplier: 1,
      dueCpi: dueCpi || 0,
      settlementCpi: settlementCpi || 0,
      isAvailable: false,
      isMonthly: false,
      errorMessage: 'شاخص رسمی بانک مرکزی برای تاریخ انتخابی منتشر نشده است؛ بنابراین محاسبه دقیق قانونی در حال حاضر امکانپذیر نیست.',
    };
  }

  const multiplier = settlementCpi / dueCpi;
  const totalAmountToman = Math.round(principalAmountToman * multiplier);
  const delayPenaltyToman = Math.max(0, totalAmountToman - principalAmountToman);

  return {
    totalAmountToman,
    delayPenaltyToman,
    multiplier: Number(multiplier.toFixed(2)),
    dueCpi,
    settlementCpi,
    isAvailable: true,
    isMonthly: false,
  };
}

/**
 * نرخ دیه مصوب قوه قضاییه
 */
export interface DiyaRateInfo {
  year: number;
  normalMonthsToman: number; // ماه‌های عادی (غیرحرام)
  sacredMonthsToman: number; // ماه‌های حرام (تغلیظ شده منحصراً برای دیه نفس طبق ماده ۵۵۵ ق.م.ا)
}

export const OFFICIAL_DIYA_RATES: DiyaRateInfo[] = [
  // سال ۱۴۰۵: مصوب بخشنامه ابلاغی قوه قضاییه بر اساس ماده ۵۴۹ قانون مجازات اسلامی (۲۱ میلیارد ریال عادی / ۲۸ میلیارد ریال ماه حرام)
  { year: 1405, normalMonthsToman: 2_100_000_000, sacredMonthsToman: 2_800_000_000 },
  // سال ۱۴۰۴: مصوب بخشنامه ابلاغی رئیس قوه قضاییه بر اساس ماده ۵۴۹ قانون مجازات اسلامی (۱۶ میلیارد ریال عادی / ۲۱.۳۳ میلیارد ریال ماه حرام)
  { year: 1404, normalMonthsToman: 1_600_000_000, sacredMonthsToman: 2_133_333_333 },
  // سال ۱۴۰۳: مصوب بخشنامه ابلاغی رئیس قوه قضاییه (۱۲ میلیارد ریال عادی / ۱۶ میلیارد ریال ماه حرام)
  { year: 1403, normalMonthsToman: 1_200_000_000, sacredMonthsToman: 1_600_000_000 },
  // سال ۱۴۰۲: مصوب بخشنامه ابلاغی رئیس قوه قضاییه (۹ میلیارد ریال عادی / ۱۲ میلیارد ریال ماه حرام)
  { year: 1402, normalMonthsToman: 900_000_000, sacredMonthsToman: 1_200_000_000 },
  // سال ۱۴۰۱: مصوب بخشنامه ابلاغی رئیس قوه قضاییه (۶ میلیارد ریال عادی / ۸ میلیارد ریال ماه حرام)
  { year: 1401, normalMonthsToman: 600_000_000, sacredMonthsToman: 800_000_000 },
  // سال ۱۴۰۰: مصوب بخشنامه ابلاغی رئیس قوه قضاییه (۴.۸ میلیارد ریال عادی / ۶.۴ میلیارد ریال ماه حرام)
  { year: 1400, normalMonthsToman: 480_000_000, sacredMonthsToman: 640_000_000 },
  // سال ۱۳۹۹: مصوب بخشنامه ابلاغی رئیس قوه قضاییه (۳.۳ میلیارد ریال عادی / ۴.۴ میلیارد ریال ماه حرام)
  { year: 1399, normalMonthsToman: 330_000_000, sacredMonthsToman: 440_000_000 },
];

/**
 * انواع جراحات طبق ماده ۷۰۹ قانون مجازات اسلامی
 */
export interface InjuryType {
  id: string;
  name: string;
  arabicName: string;
  percentage: number;
  description: string;
}

export const LEGAL_INJURY_TYPES: InjuryType[] = [
  {
    id: 'haaresah',
    name: 'حارصه',
    arabicName: 'حارصة',
    percentage: 1.0,
    description: 'خراشیدگی پوست بدون اینکه خون جاری شود (یک صدم دیه کامل)',
  },
  {
    id: 'daamiyah',
    name: 'دامیه',
    arabicName: 'دامیة',
    percentage: 2.0,
    description: 'جراحتی که اندکی وارد گوشت شده و همراه با جریان خون کم یا زیاد باشد (دو صدم)',
  },
  {
    id: 'motalahemah',
    name: 'متلاحمه',
    arabicName: 'متلاحمة',
    percentage: 3.0,
    description: 'جراحتی که بریدگی عمیق در گوشت ایجاد کرده اما به پوست نازک روی استخوان نرسیده (سه صدم)',
  },
  {
    id: 'samhaagh',
    name: 'سمحاق',
    arabicName: 'سمحاق',
    percentage: 4.0,
    description: 'جراحتی که به پوست نازک روی استخوان (پریوست) رسیده باشد (چهار صدم)',
  },
  {
    id: 'muzihah',
    name: 'موضحه',
    arabicName: 'موضحة',
    percentage: 5.0,
    description: 'جراحتی که پوست نازک روی استخوان را کنار زده و سفیدی استخوان آشکار شده (پنج صدم)',
  },
  {
    id: 'haashemah',
    name: 'هاشمه',
    arabicName: 'هاشمة',
    percentage: 10.0,
    description: 'جراحتی که موجب شکستگی استخوان سر یا صورت شود گرچه جراحتی ایجاد نشده باشد (ده صدم)',
  },
  {
    id: 'monaqqelah',
    name: 'منقله',
    arabicName: 'منقلة',
    percentage: 15.0,
    description: 'جراحتی که درمان آن جز با جابه‌جا کردن استخوان میسر نباشد (پانزده صدم)',
  },
  {
    id: 'maamoomah',
    name: 'مامومه',
    arabicName: 'مأمومة',
    percentage: 33.333,
    description: 'جراحتی که به کیسه مغز (پرده مننژ) برسد (یک‌سوم دیه کامل)',
  },
  {
    id: 'daa-meghah',
    name: 'دامغه',
    arabicName: 'دامغة',
    percentage: 33.333,
    description: 'صدمه‌ای که کیسه مغز را پاره کند؛ علاوه بر دیه مامومه، ارش پارگی نیز دارد',
  },
  {
    id: 'jaa-efah',
    name: 'جائفه',
    arabicName: 'جائفة',
    percentage: 33.333,
    description: 'جراحتی که با وارد شدن وسیله به درون شکم، سینه یا پهلو ایجاد شود (یک‌سوم دیه)',
  },
  {
    id: 'naafezah',
    name: 'نافذه',
    arabicName: 'نافذة',
    percentage: 10.0,
    description: 'جراحتی که با فرورفتن وسیله از یک طرف عضو دست یا پا به طرف دیگر فرو رود',
  },
];

/**
 * دیه شکستگی استخوان‌ها طبق قانون مجازات اسلامی
 */
export interface BoneFractureType {
  id: string;
  title: string;
  percentage: number;
  description: string;
}

export const BONE_FRACTURE_TYPES: BoneFractureType[] = [
  {
    id: 'bone-perfect-healed',
    title: 'شکستگی استخوان اعضای اصلی (درمان کامل و بدون عیب)',
    percentage: 8.0,
    description: 'چهار پنجم از یک‌پنجمدیه آن عضو؛ معادل هشت درصد (۸٪) دیه کامل',
  },
  {
    id: 'bone-defective-healed',
    title: 'شکستگی استخوان همراه با عیب یا نقص ماندگار',
    percentage: 10.0,
    description: 'ده درصد (۱۰٪) دیه کامل بر اساس شدت نقص یا نظر پزشکی قانونی',
  },
  {
    id: 'bone-cracked',
    title: 'ترک برداشتن استخوان (بدون شکستگی کامل)',
    percentage: 4.0,
    description: 'چهار پنجم دیه شکستگی همان استخوان (معادل ۴ تا ۶.۴ درصد)',
  },
  {
    id: 'bone-crushed',
    title: 'خرد شدن استخوان با درمان بدون عیب',
    percentage: 13.333,
    description: 'چهار پنجم دیه خرد شدن کامل استخوان',
  },
];

/**
 * اعضای اصلی بدن طبق قانون مجازات اسلامی
 */
export interface BodyOrganDiya {
  id: string;
  name: string;
  fullLossPercentage: number;
  description: string;
}

export const BODY_ORGAN_DIYA_LIST: BodyOrganDiya[] = [
  { id: 'eye-both', name: 'هر دو چشم (نابینایی کامل)', fullLossPercentage: 100, description: 'دیه کامل انسان' },
  { id: 'eye-one', name: 'یک چشم سالم', fullLossPercentage: 50, description: 'نصف دیه کامل (۵۰٪)' },
  { id: 'ear-both', name: 'هر دو گوش (از بیخ کندن یا کر شدن کامل)', fullLossPercentage: 100, description: 'دیه کامل انسان' },
  { id: 'ear-one', name: 'یک گوش', fullLossPercentage: 50, description: 'نصف دیه کامل (۵۰٪)' },
  { id: 'nose-full', name: 'بینی (از بین رفتن کامل نرمه و پره‌ها)', fullLossPercentage: 100, description: 'دیه کامل انسان' },
  { id: 'teeth-all', name: 'تمام دندان‌ها (۲۸ دندان)', fullLossPercentage: 100, description: 'دیه کامل انسان' },
  { id: 'teeth-front', name: 'یک دندان جلو (پیشین، نیش)', fullLossPercentage: 5.0, description: 'پنجاه دینار؛ معادل ۵٪ دیه کامل' },
  { id: 'teeth-back', name: 'یک دندان آسیا (عقبی)', fullLossPercentage: 2.5, description: 'بیست و پنج دینار؛ معادل ۲.۵٪ دیه کامل' },
  { id: 'hand-both', name: 'هر دو دست از مچ', fullLossPercentage: 100, description: 'دیه کامل انسان' },
  { id: 'hand-one', name: 'یک دست از مچ', fullLossPercentage: 50, description: 'نصف دیه کامل (۵۰٪)' },
  { id: 'foot-both', name: 'هر دو پا از مچ', fullLossPercentage: 100, description: 'دیه کامل انسان' },
  { id: 'foot-one', name: 'یک پا از مچ', fullLossPercentage: 50, description: 'نصف دیه کامل (۵۰٪)' },
  { id: 'spinal-cord', name: 'قطع نخاع کامل (فلج دو پا یا کل بدن)', fullLossPercentage: 100, description: 'دیه کامل؛ در صورت همراهی بی‌اختیاری ادرار دیه اضافه می‌شود' },
  { id: 'smell-taste', name: 'از بین رفتن کامل بویایی یا چشایی', fullLossPercentage: 100, description: 'دیه کامل انسان' },
];

/**
 * محاسبه مبلغ ریالی دیه بر اساس درصد و سال
 * مواد ۵۵۵ و ۵۵۷ قانون مجازات اسلامی:
 * ماده ۵۵۵: تغلیظ دیه (افزایش یک‌سوم) فقط در صورت فوت مجنی‌علیه و وقوع همزمان رفتار و فوت در ماه حرام است.
 * ماده ۵۵۷: تغلیظ دیه مخصوص قتل نفس است و در جنایت بر اعضا و منافع به هیچ وجه جاری نیست.
 */
export function calculateDiyaAmount(
  percentage: number,
  year: number = 1405,
  isSacredMonth: boolean = false,
  isDeathOrLife: boolean = false
): {
  amountToman: number;
  baseDiyaToman: number;
  percentageFormatted: string;
  isTaghlizApplied: boolean;
  taghlizNotice?: string;
  legalDisclaimer: string;
} {
  const rateInfo =
    OFFICIAL_DIYA_RATES.find((r) => r.year === year) || OFFICIAL_DIYA_RATES[0];

  // تغلیظ فقط به قتل نفس (فوت) تعلق می‌گیرد
  const shouldApplyTaghliz = isDeathOrLife && isSacredMonth;
  const baseDiyaToman = shouldApplyTaghliz
    ? rateInfo.sacredMonthsToman
    : rateInfo.normalMonthsToman;

  const amountToman = Math.round((percentage / 100) * baseDiyaToman);

  let taghlizNotice: string | undefined = undefined;
  if (isSacredMonth && !isDeathOrLife) {
    taghlizNotice =
      'طبق ماده ۵۵۷ قانون مجازات اسلامی، «تغلیظ دیه مخصوص قتل نفس است و در جنایت بر اعضاء و منافع جاری نیست»؛ لذا مبلغ بر مبنای نرخ ماه‌های عادی محاسبه گردید.';
  } else if (shouldApplyTaghliz) {
    taghlizNotice =
      'طبق ماده ۵۵۵ قانون مجازات اسلامی، به علت وقوع حادثه و فوت در ماه حرام، یک‌سوم دیه کامل به عنوان تغلیظ دیه نفس افزوده شده است.';
  }

  return {
    amountToman,
    baseDiyaToman,
    percentageFormatted: percentage.toFixed(2),
    isTaghlizApplied: shouldApplyTaghliz,
    taghlizNotice,
    legalDisclaimer:
      'این محاسبه صرفاً بر اساس درصد/میزان انتخاب‌شده انجام شده و در پرونده واقعی ممکن است احکام تعدد، تداخل، ارش و سایر مقررات قانونی مؤثر باشد.',
  };
}

/**
 * فرمت فارسی مبالغ با جداکننده سه رقمی
 */
export function formatToman(amount: number): string {
  if (isNaN(amount)) return '۰';
  return new Intl.NumberFormat('fa-IR').format(amount);
}

/**
 * تبدیل هوشمند ارقام فارسی (۰-۹) و عربی (٠-٩) به ارقام استاندارد انگلیسی (0-9)
 */
export function toEnglishDigits(str: string | number | undefined | null): string {
  if (str === null || str === undefined) return '';
  return str
    .toString()
    .replace(/[۰-۹]/g, (d) => (d.charCodeAt(0) - 1776).toString())
    .replace(/[٠-٩]/g, (d) => (d.charCodeAt(0) - 1632).toString());
}

/**
 * استخراج رشته تمیز ارقام و قالب‌بندی سه‌رقمی استاندارد با کاما
 */
export function formatDigitString(str: string | number | undefined | null): string {
  if (str === null || str === undefined) return '';
  const clean = toEnglishDigits(str).replace(/\D/g, '');
  if (!clean) return '';
  const trimmed = clean.replace(/^0+(?=\d)/, '');
  return trimmed.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * تبدیل عدد و مبالغ ریالی/تومانی به حروف فارسی جهت وضوح و اطمینان کامل کاربر
 */
export function numberToPersianWords(num: number | string): string {
  const clean =
    typeof num === 'string'
      ? parseInt(toEnglishDigits(num).replace(/\D/g, ''), 10)
      : Math.floor(num);
  if (isNaN(clean) || clean === 0) return 'صفر';
  if (clean < 0) return 'منفی ' + numberToPersianWords(Math.abs(clean));

  const ones = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
  const teens = [
    'ده',
    'یازده',
    'دوازده',
    'سیزده',
    'چهارده',
    'پانزده',
    'شانزده',
    'هفده',
    'هجده',
    'نوزده',
  ];
  const tens = ['', '', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
  const hundreds = [
    '',
    'صد',
    'دویست',
    'سیصد',
    'چهارصد',
    'پانصد',
    'ششصد',
    'هفتصد',
    'هشتصد',
    'نهصد',
  ];
  const scales = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون'];

  function convertThreeDigits(n: number): string {
    const parts: string[] = [];
    const h = Math.floor(n / 100);
    const remainder = n % 100;
    const t = Math.floor(remainder / 10);
    const o = remainder % 10;

    if (h > 0) parts.push(hundreds[h]);
    if (remainder >= 10 && remainder <= 19) {
      parts.push(teens[remainder - 10]);
    } else {
      if (t > 0) parts.push(tens[t]);
      if (o > 0) parts.push(ones[o]);
    }
    return parts.join(' و ');
  }

  const chunks: string[] = [];
  let temp = clean;
  let scaleIdx = 0;

  while (temp > 0) {
    const chunk = temp % 1000;
    if (chunk > 0) {
      const chunkWord = convertThreeDigits(chunk);
      const scale = scales[scaleIdx];
      chunks.unshift(scale ? `${chunkWord} ${scale}` : chunkWord);
    }
    temp = Math.floor(temp / 1000);
    scaleIdx++;
  }

  return chunks.join(' و ');
}
