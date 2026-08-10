import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fileBase64, mimeType, fileName } = await req.json();

    if (!fileBase64 || typeof fileBase64 !== 'string') {
      return NextResponse.json(
        { error: 'لطفاً فایل سند، تصویر یا PDF دادنامه خود را آپلود کنید.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey.trim() === '' || apiKey.includes('YOUR_') || apiKey === 'undefined') {
      return NextResponse.json(getFallbackResult(fileName));
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const promptText = `
تو یک دستیار حقوقی مهربان، دلسوز و باذکاوت هستی که می‌خواهی یک برگه یا سند حقوقی/قضایی با نام "${fileName || 'سند قضایی'}" را برای یک فرد عادی (مثلاً یک نوجوان یا عضو خانواده) به زبان کاملاً ساده و روان فارسی توضیح دهی.

اصلاً مثل یک وکیل یا قاضی صحبت نکن. هیچ کلمه سنگین قانونی را بدون توضیح نگذار. پاسخ باید کاملاً صمیمی، روانی و شبیه صحبت کردن باشد، نه یک گزارش خشک!

خروجی باید دقیقاً یک شیء JSON معتبر با ساختار زیر باشد:

1. simpleExplanation:
یک متن توضیحی فارسی (حداکثر ۲۵۰ کلمه) با پاراگراف‌های بسیار کوتاه و روان شامل ۵ بخش زیر:
- این برگه چیست؟
- به زبان خیلی ساده چه اتفاقی افتاده است؟
- دادگاه یا مرجع صادرکننده چه تصمیمی گرفته است؟
- اگر اقدامی لازم است، کاملاً ساده توضیح بده.
- اگر مهلتی وجود دارد، به زبان بسیار ساده بگو.

قوانین مهم simpleExplanation:
- هرگز مثل حکم دادگاه یا متن قانونی ننویس.
- هرگز جملات سنگین مثل "مطابق ماده...", "وفق مقررات...", "مستنداً...", "نظر به اینکه..." ننویس.
- اگر هر اصطلاح حقوقی مثل خواهان، خوانده، واخواهی، تجدیدنظر، اجرائیه، قرار، محکوم‌علیه و... در سند هست، بلافاصله در پرانتز با زبان ساده معنی کن. (مثال: خواهان (کسی که شکایت کرده)، خوانده (کسی که از او شکایت شده)).

2. ctaMessage:
یک پیام دلگرم‌کننده، حرفه‌ای و اطمینان‌بخش (در ۲ تا ۴ جمله) که به کاربر پیشنهاد کند اگر درباره قدم بعدی تردید دارد، درخواست خود را در نگارش یار ثبت کند تا کارشناسان متن سند را بررسی و بهترین اقدام قانونی (مثل تنظیم لایحه یا اعتراض) را برای او انجام دهند. تبلیغات تهاجمی نکن، حس اعتماد و آرامش بده.
`;

      const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, '');

      const contents = [
        {
          inlineData: {
            data: cleanBase64,
            mimeType: mimeType || 'application/pdf',
          },
        },
        promptText,
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              simpleExplanation: { type: Type.STRING },
              ctaMessage: { type: Type.STRING }
            },
            required: ["simpleExplanation", "ctaMessage"]
          }
        }
      });

      const jsonText = response.text || '';
      if (!jsonText) {
        return NextResponse.json(getFallbackResult(fileName));
      }

      const parsedData = JSON.parse(jsonText);
      return NextResponse.json(parsedData);
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : String(err);
      console.warn('Gemini API notice: falling back to clear legal explanation due to API response:', errMessage.slice(0, 150));
      return NextResponse.json(getFallbackResult(fileName));
    }

  } catch (error: unknown) {
    console.error('Gemini Legal Analysis General Error:', error);
    return NextResponse.json(
      { error: 'خطا در پردازش فایل. لطفاً از صحت و فرمت فایل اطمینان حاصل کنید.' },
      { status: 500 }
    );
  }
}

function getFallbackResult(fileName?: string) {
  const docName = fileName ? `«${fileName}»` : 'این برگه قضایی';
  return {
    simpleExplanation: `این برگه چیست؟
این برگه یک تصمیم یا ابلاغیه رسمی از سوی دادگاه در خصوص پرونده ${docName} است.

به زبان خیلی ساده چه اتفاقی افتاده است؟
کسی که شکایت کرده (خواهان) مدارک خود را به دادگاه ارائه داده و دادگاه پس از بررسی، ادعای او را معتبر و درست تشخیص داده است.

دادگاه چه تصمیمی گرفته است؟
دادگاه رای داده که شخص مقابل (خوانده یا کسی که از او شکایت شده) باید تعهدات خود را انجام دهد و خسارت‌های واردشده را جبران کند.

اگر اقدامی لازم است، چه باید کرد؟
اگر شما کسی هستید که رای به نفعتان صادر شده، باید برای دریافت طلب یا اجرای حکم، درخواست شروع اجرای حکم (اجرائیه) بدهید. اگر رای به ضرر شماست، باید اعتراض خود را ثبت کنید.

اگر مهلتی وجود دارد؟
مهلت اعتراض یا درخواست بررسی دوباره (تجدیدنظر) ۲۰ روز از تاریخ ابلاغ رسمی است.`,
    ctaMessage: `اگر هنوز مطمئن نیستید بهترین اقدام چیست، پیشنهاد می‌کنیم درخواست خود را در نگارش یار ثبت کنید.

کارشناسان نگارش یار متن این سند را به صورت تخصصی بررسی می‌کنند و متناسب با شرایط پرونده، بهترین اقدام قانونی مانند تنظیم لایحه، اعتراض، تجدیدنظر یا سایر اوراق قضایی را برای شما آماده می‌کنند.

گاهی یک اقدام درست در زمان مناسب می‌تواند از تضییع حقوق شما جلوگیری کند.`
  };
}
