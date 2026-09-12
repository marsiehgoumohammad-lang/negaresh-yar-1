'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container } from '../ui/container';

export const FAQ_ITEMS = [
  {
    q: 'نگارشیار چه نوع نامه‌هایی می‌نویسد؟',
    a: 'انواع نامه‌های اداری و سازمانی (درخواست، اعتراض، پیگیری، معرفی، استعفا)، مکاتبات بانکی و شهرداری و همچنین اوراق قضایی نظیر دادخواست، شکواییه، لایحه دفاعیه و اظهارنامه رسمی در نگارشیار تنظیم می‌شوند.',
  },
  {
    q: 'برای ثبت درخواست چه اطلاعاتی لازم است؟',
    a: 'کافی است نام مخاطب یا سازمان مورد نظر و خواسته‌تان را به زبان ساده و روان در فرم ثبت درخواست بنویسید. اصطلاحات رسمی، ساختار اداری و چارچوب حقوقی لازم توسط نگارشیار تنظیم می‌شود.',
  },
  {
    q: 'آیا می‌توانم متن را قبل از استفاده ویرایش کنم؟',
    a: 'بله، فایل و متن نهایی به صورت کاملاً خوانا، مرتب و قابل ویرایش در اختیار شما قرار می‌گیرد تا بتوانید پیش از چاپ یا ارسال، تغییرات دلخواه را در آن اعمال کنید.',
  },
  {
    q: 'نگارش نامه چقدر زمان می‌برد؟',
    a: 'درخواست‌ها با توجه به نوع متن و حساسیت آن، در کوتاه‌ترین زمان ممکن در ساعات کاری پردازش شده و نسخه نهایی در دسترستان قرار می‌گیرد.',
  },
  {
    q: 'آیا اطلاعات من محرمانه می‌ماند؟',
    a: 'بله، حفظ حریم شخصی و محرمانگی موضوعات و اطلاعات هویتی کاربران اولویت قطعی نگارشیار است و هیچ داده‌ای در اختیار اشخاص غیرمجاز قرار نمی‌گیرد.',
  },
  {
    q: 'آیا نگارشیار خدمات حقوقی هم ارائه می‌دهد؟',
    a: 'نگارشیار به طور تخصصی بر نگارش دقیق، اصولی و معتبر اوراق اداری و قضایی تمرکز دارد. همچنین چنانچه پرونده شما نیازمند اعلام وکالت باشد، می‌توانید از بخش معرفی وکیل منصف استفاده نمایید.',
  },
  {
    q: 'آیا نگارشیار جایگزین وکیل است؟',
    a: 'خیر؛ خدمات نگارش اوراق اداری و عریضه‌نویسی جایگزین مشاوره حقوقی تخصصی یا قبول وکالت در محاکم نیست. برای موضوعات پیچیده حقوقی، مشورت با وکیل دادگستری توصیه می‌گردد.',
  },
  {
    q: 'چطور نمونه نامه مناسب خودم را پیدا کنم؟',
    a: 'با مراجعه به بخش «بانک نمونه» در منوی سایت می‌توانید بر اساس دسته‌بندی‌های اداری، بانکی، شهرداری و قضایی صدها نمونه آماده و استاندارد را همراه با راهنمای نگارش مشاهده کنید.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#070B15] py-16 sm:py-20 text-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-3 border border-slate-700">
            <HelpCircle className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>پاسخ به سوالات متداول</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            پرسش‌های متداول
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            پاسخ به پرتکرارترین پرسش‌های کاربران درباره خدمات و فرآیند نگارشیار
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D1424] border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 focus:outline-none hover:text-[#E5C158] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-100">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E5C158]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-right border-t border-slate-800/80 pt-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
