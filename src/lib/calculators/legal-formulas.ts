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
  1404: 24.7200, // برآورد میانگین
};

export const AVAILABLE_YEARS = Object.keys(CENTRAL_BANK_ANNUAL_CPI)
  .map(Number)
  .sort((a, b) => b - a);

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
} {
  const marriageCpi = CENTRAL_BANK_ANNUAL_CPI[marriageYear] || 1;
  // طبق آیین‌نامه اجرایی، سال قبل از مطالبه یا سال جاری مطالبه ملاک قرار می‌گیرد
  const targetCpi = CENTRAL_BANK_ANNUAL_CPI[calculationYear] || CENTRAL_BANK_ANNUAL_CPI[1403];

  const multiplier = targetCpi / marriageCpi;
  const adjustedAmountToman = Math.round(initialAmountToman * multiplier);
  const differenceToman = Math.max(0, adjustedAmountToman - initialAmountToman);

  return {
    adjustedAmountToman,
    multiplier: Number(multiplier.toFixed(2)),
    marriageCpi,
    targetCpi,
    differenceToman,
  };
}

/**
 * محاسبه خسارت تاخیر تادیه دین و بدهی
 * ماده ۵۲۲ قانون آیین دادرسی مدنی
 * فرمول: (شاخص زمان تادیه ÷ شاخص زمان سررسید) × اصل دین
 */
export function calculateDebtDelay(
  principalAmountToman: number,
  dueYear: number,
  settlementYear: number = 1403
): {
  totalAmountToman: number;
  delayPenaltyToman: number;
  multiplier: number;
  dueCpi: number;
  settlementCpi: number;
} {
  const dueCpi = CENTRAL_BANK_ANNUAL_CPI[dueYear] || 1;
  const settlementCpi = CENTRAL_BANK_ANNUAL_CPI[settlementYear] || CENTRAL_BANK_ANNUAL_CPI[1403];

  const multiplier = settlementCpi / dueCpi;
  const totalAmountToman = Math.round(principalAmountToman * multiplier);
  const delayPenaltyToman = Math.max(0, totalAmountToman - principalAmountToman);

  return {
    totalAmountToman,
    delayPenaltyToman,
    multiplier: Number(multiplier.toFixed(2)),
    dueCpi,
    settlementCpi,
  };
}

/**
 * نرخ دیه مصوب قوه قضاییه
 */
export interface DiyaRateInfo {
  year: number;
  normalMonthsToman: number; // ماه‌های عادی (غیرحرام)
  sacredMonthsToman: number; // ماه‌های حرام (تغلیظ شده به اضافه یک‌سوم)
}

export const OFFICIAL_DIYA_RATES: DiyaRateInfo[] = [
  { year: 1404, normalMonthsToman: 1_600_000_000, sacredMonthsToman: 2_133_333_333 }, // پیش‌بینی تقریبی
  { year: 1403, normalMonthsToman: 1_200_000_000, sacredMonthsToman: 1_600_000_000 }, // مصوب رسمی
  { year: 1402, normalMonthsToman: 900_000_000, sacredMonthsToman: 1_200_000_000 },
  { year: 1401, normalMonthsToman: 600_000_000, sacredMonthsToman: 800_000_000 },
  { year: 1400, normalMonthsToman: 480_000_000, sacredMonthsToman: 640_000_000 },
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
 */
export function calculateDiyaAmount(
  percentage: number,
  year: number = 1403,
  isSacredMonth: boolean = false
): {
  amountToman: number;
  baseDiyaToman: number;
  percentageFormatted: string;
} {
  const rateInfo =
    OFFICIAL_DIYA_RATES.find((r) => r.year === year) || OFFICIAL_DIYA_RATES[1];
  const baseDiyaToman = isSacredMonth
    ? rateInfo.sacredMonthsToman
    : rateInfo.normalMonthsToman;

  const amountToman = Math.round((percentage / 100) * baseDiyaToman);

  return {
    amountToman,
    baseDiyaToman,
    percentageFormatted: percentage.toFixed(2),
  };
}

/**
 * فرمت فارسی مبالغ با جداکننده سه رقمی
 */
export function formatToman(amount: number): string {
  if (isNaN(amount)) return '۰';
  return new Intl.NumberFormat('fa-IR').format(amount);
}
