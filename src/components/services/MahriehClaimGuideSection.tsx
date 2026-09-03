'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Scale, Landmark, MapPin } from 'lucide-react';

export function MahriehClaimGuideSection() {
  const [activeTab, setActiveTab] = useState<'stage1' | 'stage1b' | 'stage2' | 'stage3'>('stage1');

  return (
    <div className="my-16 scroll-mt-24" id="service-guide">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
          نقشه راه مطالبه مهریه در قانون جدید
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          با تغییرات قوانین خانواده، مراحل مطالبه مهریه دستخوش تغییر شده است. آشنایی با این مسیر برای جلوگیری از اشتباه و تسریع در توقیف اموال ضروری است.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 mb-8 gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <button 
            onClick={() => setActiveTab('stage1')}
            className={`py-3 px-4 font-bold rounded-lg transition-colors ${activeTab === 'stage1' ? 'bg-white dark:bg-gray-900 shadow-sm text-brand-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            ۱. دفترخانه
          </button>
          <button 
            onClick={() => setActiveTab('stage1b')}
            className={`py-3 px-4 font-bold rounded-lg transition-colors ${activeTab === 'stage1b' ? 'bg-white dark:bg-gray-900 shadow-sm text-blue-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            ۲. اجرای ثبت
          </button>
          <button 
            onClick={() => setActiveTab('stage2')}
            className={`py-3 px-4 font-bold rounded-lg transition-colors ${activeTab === 'stage2' ? 'bg-white dark:bg-gray-900 shadow-sm text-red-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            ۳. دادگاه
          </button>
          <button 
            onClick={() => setActiveTab('stage3')}
            className={`py-3 px-4 font-bold rounded-lg transition-colors ${activeTab === 'stage3' ? 'bg-white dark:bg-gray-900 shadow-sm text-amber-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            ۴. توقیف اموال
          </button>
        </div>

        {activeTab === 'stage1' && (
          <Card className="border-t-4 border-t-brand-primary">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-brand-primary/10 p-4 rounded-xl shrink-0">
                  <MapPin className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">مراجعه به دفترخانه ازدواج</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    در قانون جدید شما نمی‌توانید مستقیماً به دادگاه مراجعه کنید. اولین قدم مراجعه به همان دفترخانه‌ای است که عقد شما در آن ثبت شده است.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      همراه داشتن اصل سند ازدواج
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      همراه داشتن شناسنامه و کارت ملی
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      درخواست کتبی صدور اجراییه از سردفتر
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'stage1b' && (
          <Card className="border-t-4 border-t-blue-500">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-blue-500/10 p-4 rounded-xl shrink-0">
                  <Building2 className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">اداره اجرای ثبت اسناد رسمی</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    پس از ارسال پرونده از دفترخانه به اجرای ثبت، در این مرحله استعلام‌های سه‌گانه برای شناسایی اموال زوج انجام می‌شود.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                      <div className="font-bold text-sm mb-1">پلیس راهور</div>
                      <div className="text-xs text-gray-500">استعلام خودرو و موتور</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                      <div className="font-bold text-sm mb-1">بانک مرکزی</div>
                      <div className="text-xs text-gray-500">استعلام حساب‌های بانکی</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 text-center">
                      <div className="font-bold text-sm mb-1">ثبت اسناد</div>
                      <div className="text-xs text-gray-500">استعلام املاک و مستغلات</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'stage2' && (
          <Card className="border-t-4 border-t-red-500">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-red-500/10 p-4 rounded-xl shrink-0">
                  <Scale className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">ثبت دادخواست در دادگاه خانواده</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    اگر در اجرای ثبت مالی پیدا نشود یا اموال پاسخگوی مهریه نباشد، پس از دریافت گواهی انصراف/مختومه شدن، می‌توانید از طریق خدمات قضایی دادخواست مهریه بدهید.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-sm text-red-800 dark:text-red-200">
                    <p className="font-bold mb-2">نکته بسیار مهم:</p>
                    <p>در متن دادخواست حتماً باید تقاضای «صدور قرار تامین خواسته پیش از ابلاغ» گنجانده شود تا زوج نتواند پس از ابلاغ پیامک ثنا، اموالش را مخفی کند.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'stage3' && (
          <Card className="border-t-4 border-t-amber-500">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-amber-500/10 p-4 rounded-xl shrink-0">
                  <Landmark className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">مستثنیات دین (اموال غیرقابل توقیف)</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    هر مالی قابل توقیف نیست. قانون برای جلوگیری از به خطر افتادن حیات بدهکار، برخی اموال را استثنا کرده است.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      منزل مسکونی تنها در صورتی قابل توقیف است که مازاد بر شأن زوج باشد.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      ابزار کار و وسیله امرار معاش (مثل تاکسی برای راننده) توقیف نمی‌شود.
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      از حقوق کارمندی زوج، در صورت داشتن فرزند یک چهارم و بدون فرزند یک سوم کسر می‌شود.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
