'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
      answer: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Captcha
    if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
      alert('پاسخ سوال امنیتی اشتباه است. لطفاً دوباره تلاش کنید.');
      generateCaptcha();
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact submit error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-400 mb-2">پیام شما با موفقیت ارسال شد</h3>
        <p className="text-slate-300 mb-6">کارشناسان ما در اسرع وقت پیام شما را بررسی و پاسخ خواهند داد.</p>
        <Button 
          onClick={() => {
            setStatus('idle');
            generateCaptcha();
          }}
          className="bg-slate-800 hover:bg-slate-700 text-white"
        >
          ارسال پیام جدید
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0D1424] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-[#E5C158] mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
        ارسال پیام مستقیم
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5C158] transition-colors"
            placeholder="مثال: علی محمدی"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">آدرس ایمیل شما</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5C158] text-left transition-colors"
            placeholder="example@email.com"
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">متن پیام</label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5C158] transition-colors resize-none"
            placeholder="پیام خود را اینجا بنویسید..."
          />
        </div>

        {/* Security / Captcha Box */}
        <div className="bg-[#121A2D] border border-slate-700/50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-slate-300">حاصل جمع روبرو را وارد کنید (جهت اطمینان از انسان بودن):</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              {captcha.num1} + {captcha.num2} =
            </span>
            <input
              type="number"
              required
              value={captcha.answer}
              onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
              className="w-20 bg-[#070B15] border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#E5C158] text-center"
              placeholder="؟"
            />
          </div>
        </div>

        {status === 'error' && (
          <p className="text-red-400 text-sm">متاسفانه خطایی رخ داد. لطفاً دوباره تلاش کنید.</p>
        )}

        <Button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] hover:brightness-110 font-bold text-base h-14 rounded-xl shadow-[0_0_20px_rgba(229,193,88,0.2)] transition-all"
        >
          {status === 'loading' ? 'در حال ارسال...' : 'ارسال پیام'}
        </Button>
      </div>
    </form>
  );
}
