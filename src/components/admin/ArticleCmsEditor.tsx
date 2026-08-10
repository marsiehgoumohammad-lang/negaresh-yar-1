'use client';

import React, { useState, useRef, useCallback } from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Image as ImageIcon,
  Type,
  Palette,
  AlignRight,
  AlignCenter,
  AlignLeft,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Table,
  Sparkles,
  Eye,
  FileCode,
  X,
  ShieldCheck,
  RefreshCw,
  Maximize2,
  Minimize2,
} from 'lucide-react';

interface ArticleCmsEditorProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  placeholder?: string;
  minRows?: number;
}

// Persian Fonts Preset Options
const FONT_FAMILIES = [
  { name: 'وزیرمتن (پیش‌فرض)', value: "'Vazirmatn', sans-[#1a0dab], sans-serif", class: 'font-sans' },
  { name: 'ایران‌سانس / دانا', value: "'IRANSans', 'Dana', sans-serif", class: 'font-sans' },
  { name: 'یکان‌بخشی / شبنم', value: "'YekanBakh', 'Shabnam', sans-serif", class: 'font-sans' },
  { name: 'قلم رسمی / بی نازنین', value: "'B Nazanin', 'Traditional Arabic', serif", class: 'font-serif' },
  { name: 'فونت کد تک‌فاصله', value: "'Courier New', Courier, monospace", class: 'font-mono' },
];

// Font Sizes Preset Options
const FONT_SIZES = [
  { name: 'کوچک (12px)', value: '12px' },
  { name: 'عادی (14px)', value: '14px' },
  { name: 'متوسط (16px)', value: '16px' },
  { name: 'درشت (18px)', value: '18px' },
  { name: 'بزرگ (20px)', value: '20px' },
  { name: 'تیتر بزرگ (24px)', value: '24px' },
];

// Color Presets
const TEXT_COLORS = [
  { name: 'سفید / روشن', color: '#ffffff' },
  { name: 'طلایی نگارش یار', color: '#E5C158' },
  { name: 'سبز تایید حقوقی', color: '#34d399' },
  { name: 'قرمز هشدار', color: '#f87171' },
  { name: 'آبی راهنما', color: '#38bdf8' },
  { name: 'خاکستری روشن', color: '#cbd5e1' },
];

const HIGHLIGHT_COLORS = [
  { name: 'بدون هایلایت', color: 'transparent' },
  { name: 'هایلایت طلایی', color: 'rgba(229, 193, 88, 0.25)' },
  { name: 'هایلایت سبز', color: 'rgba(52, 211, 153, 0.2)' },
  { name: 'هایلایت قرمز', color: 'rgba(248, 113, 113, 0.2)' },
  { name: 'هایلایت آبی', color: 'rgba(56, 189, 248, 0.2)' },
];

export function ArticleCmsEditor({
  value,
  onChange,
  label = 'محتوای مقاله (ویرایشگر CMS)',
  placeholder = 'محتوای مقاله را وارد نمایید یا از نوار ابزار بالا برای قالب‌بندی استفاده کنید...',
  minRows = 14,
}: ArticleCmsEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [editorMode, setEditorMode] = useState<'editor' | 'preview' | 'split'>('editor');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Link Modal State
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkText, setLinkText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkOpenInNewTab, setLinkOpenInNewTab] = useState(true);

  // Image Modal State
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState(''); // جمله جایگزین عکس برای سئو
  const [imageCaption, setImageCaption] = useState('');
  const [imageAlign, setImageAlign] = useState<'center' | 'right' | 'left'>('center');

  // Callout Modal State
  const [isCalloutModalOpen, setIsCalloutModalOpen] = useState(false);
  const [calloutType, setCalloutType] = useState<'note' | 'warning' | 'legal' | 'success'>('note');
  const [calloutTitle, setCalloutTitle] = useState('');
  const [calloutText, setCalloutText] = useState('');

  // Dropdown menus visibility
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Helper: Get active selection details from textarea
  const getSelection = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return { start: 0, end: 0, text: '' };
    return {
      start: el.selectionStart,
      end: el.selectionEnd,
      text: el.value.substring(el.selectionStart, el.selectionEnd),
    };
  }, []);

  // Helper: Replace selection or insert text
  const insertAtCursor = useCallback(
    (before: string, after: string = '', defaultText: string = '') => {
      const el = textareaRef.current;
      if (!el) return;

      const { start, end, text } = getSelection();
      const selectedOrDefault = text || defaultText;
      const replacement = `${before}${selectedOrDefault}${after}`;

      const newValue = value.substring(0, start) + replacement + value.substring(end);
      onChange(newValue);

      // Restore focus and cursor position after react render
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          const newCursorPos = start + before.length + selectedOrDefault.length;
          textareaRef.current.setSelectionRange(
            text ? start : newCursorPos,
            text ? start + replacement.length : newCursorPos
          );
        }
      }, 0);
    },
    [getSelection, onChange, value]
  );

  // Heading Handlers (H1, H2, H3, H4)
  const handleInsertHeading = (level: 1 | 2 | 3 | 4) => {
    const el = textareaRef.current;
    if (!el) return;

    const { start, end, text } = getSelection();
    const headingText = text || `تیتر سطح ${level} مقاله`;
    
    // We can insert HTML h tags or Markdown # tags based on preference
    // Generating clean HTML headings for full style control
    const htmlHeading = `<h${level}>${headingText}</h${level}>\n`;
    
    const newValue = value.substring(0, start) + htmlHeading + value.substring(end);
    onChange(newValue);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 0);
    setActiveDropdown(null);
  };

  // Font Family Apply
  const handleApplyFontFamily = (familyValue: string) => {
    const { text } = getSelection();
    const targetText = text || 'متن با فونت اختصاصی';
    const tag = `<span style="font-family: ${familyValue};">${targetText}</span>`;
    insertAtCursor('', '', tag);
    setActiveDropdown(null);
  };

  // Font Size Apply
  const handleApplyFontSize = (sizeValue: string) => {
    const { text } = getSelection();
    const targetText = text || 'متن با اندازه اختصاصی';
    const tag = `<span style="font-size: ${sizeValue};">${targetText}</span>`;
    insertAtCursor('', '', tag);
    setActiveDropdown(null);
  };

  // Text Color Apply
  const handleApplyTextColor = (colorHex: string) => {
    const { text } = getSelection();
    const targetText = text || 'متن رنگی';
    const tag = `<span style="color: ${colorHex};">${targetText}</span>`;
    insertAtCursor('', '', tag);
    setActiveDropdown(null);
  };

  // Highlight Color Apply
  const handleApplyHighlightColor = (bgHex: string) => {
    const { text } = getSelection();
    const targetText = text || 'متن هایلایت شده';
    const tag = `<span style="background-color: ${bgHex}; padding: 2px 6px; border-radius: 4px;">${targetText}</span>`;
    insertAtCursor('', '', tag);
    setActiveDropdown(null);
  };

  // Alignment Apply
  const handleApplyAlignment = (align: 'right' | 'center' | 'left' | 'justify') => {
    const { text } = getSelection();
    const targetText = text || 'متن تراز شده';
    const tag = `<div dir="rtl" style="text-align: ${align};">${targetText}</div>\n`;
    insertAtCursor('', '', tag);
    setActiveDropdown(null);
  };

  // Open Link Modal
  const handleOpenLinkModal = () => {
    const { text } = getSelection();
    setLinkText(text || '');
    setLinkUrl('');
    setLinkOpenInNewTab(true);
    setIsLinkModalOpen(true);
  };

  // Submit Link
  const handleInsertLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkUrl.trim()) return;

    const textToDisplay = linkText.trim() || linkUrl.trim();
    const urlFormatted = linkUrl.trim();

    const targetAttr = linkOpenInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    const linkHtml = `<a href="${urlFormatted}"${targetAttr} class="text-[#E5C158] hover:underline font-bold">${textToDisplay}</a>`;

    insertAtCursor('', '', linkHtml);
    setIsLinkModalOpen(false);
  };

  // Open Image Modal
  const handleOpenImageModal = () => {
    const { text } = getSelection();
    setImageUrl('');
    setImageAlt(text || '');
    setImageCaption('');
    setImageAlign('center');
    setIsImageModalOpen(true);
  };

  // Submit Image
  const handleInsertImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl.trim()) return;

    const url = imageUrl.trim();
    const alt = imageAlt.trim() || 'تصویر مربوط به مقاله نگارش یار';
    const caption = imageCaption.trim();

    const alignClass =
      imageAlign === 'right'
        ? 'mr-0 ml-auto'
        : imageAlign === 'left'
        ? 'ml-0 mr-auto'
        : 'mx-auto';

    let imgHtml = `<figure className="my-6 text-center">
  <img src="${url}" alt="${alt}" title="${alt}" class="max-w-full h-auto rounded-2xl ${alignClass} border border-slate-700/80 shadow-lg" />`;

    if (caption) {
      imgHtml += `\n  <figcaption class="text-xs text-slate-400 mt-2 font-medium">${caption}</figcaption>`;
    }
    imgHtml += `\n</figure>\n`;

    insertAtCursor('', '', imgHtml);
    setIsImageModalOpen(false);
  };

  // Open Callout Box Modal
  const handleOpenCalloutModal = () => {
    const { text } = getSelection();
    setCalloutType('legal');
    setCalloutTitle('نکته مهم حقوقی و اداری');
    setCalloutText(text || '');
    setIsCalloutModalOpen(true);
  };

  // Submit Callout Box
  const handleInsertCallout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calloutText.trim()) return;

    let borderBgClass = 'bg-amber-500/10 border-amber-500/40 text-amber-200';
    let iconName = '⚡';

    if (calloutType === 'warning') {
      borderBgClass = 'bg-rose-500/10 border-rose-500/40 text-rose-200';
      iconName = '⚠️';
    } else if (calloutType === 'legal') {
      borderBgClass = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200';
      iconName = '⚖️';
    } else if (calloutType === 'success') {
      borderBgClass = 'bg-sky-500/10 border-sky-500/40 text-sky-200';
      iconName = '✅';
    }

    const titleHtml = calloutTitle.trim() ? `<strong class="block text-sm font-bold mb-1">${iconName} ${calloutTitle.trim()}</strong>` : '';
    const calloutHtml = `<div class="p-4 my-4 rounded-2xl border-r-4 ${borderBgClass} backdrop-blur-sm space-y-1">\n  ${titleHtml}\n  <p class="text-xs leading-relaxed">${calloutText.trim()}</p>\n</div>\n`;

    insertAtCursor('', '', calloutHtml);
    setIsCalloutModalOpen(false);
  };

  // Insert Table Template
  const handleInsertTable = () => {
    const tableHtml = `\n<div class="overflow-x-auto my-6">
  <table class="w-full text-xs text-right text-slate-200 border-collapse border border-slate-700 rounded-xl overflow-hidden">
    <thead>
      <tr class="bg-slate-800 text-[#E5C158]">
        <th class="p-3 border border-slate-700 font-bold">عنوان ستون ۱</th>
        <th class="p-3 border border-slate-700 font-bold">عنوان ستون ۲</th>
        <th class="p-3 border border-slate-700 font-bold">ملاحظات و توضیحات</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-slate-900/60 hover:bg-slate-800/40 transition-colors">
        <td class="p-3 border border-slate-700">داده ردیف اول</td>
        <td class="p-3 border border-slate-700">توضیح مربوطه</td>
        <td class="p-3 border border-slate-700">تایید شده</td>
      </tr>
      <tr class="bg-slate-900/30 hover:bg-slate-800/40 transition-colors">
        <td class="p-3 border border-slate-700">داده ردیف دوم</td>
        <td class="p-3 border border-slate-700">توضیح مربوطه</td>
        <td class="p-3 border border-slate-700">در حال بررسی</td>
      </tr>
    </tbody>
  </table>
</div>\n`;
    insertAtCursor('', '', tableHtml);
  };

  // Clean Persian Typography
  const handleFixPersianTypography = () => {
    let fixed = value;
    // Replace Arabic characters
    fixed = fixed.replace(/ي/g, 'ی').replace(/ك/g, 'ک');
    // Replace double spaces with single space
    fixed = fixed.replace(/[ \t]+/g, ' ');
    // Standardize Persian numbers option or spaces around punctuation
    fixed = fixed.replace(/ \./g, '.').replace(/ \،/g, '،');
    onChange(fixed);
  };

  // Toggle Dropdown
  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  // Calculate statistics
  const wordCount = value.trim() ? value.trim().split(/\s+/).filter(Boolean).length : 0;
  const charCount = value.length;

  return (
    <div
      className={`relative space-y-2 dir-rtl transition-all ${
        isFullscreen
          ? 'fixed inset-0 z-50 p-6 bg-[#070B15] overflow-y-auto flex flex-col h-screen'
          : ''
      }`}
    >
      {/* Editor Header & Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#0A0E1A] border border-slate-800 p-2.5 rounded-2xl">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#E5C158]" />
            <span>{label}</span>
          </label>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-[#070B15] p-1 rounded-xl border border-slate-800 shrink-0">
          <button
            type="button"
            onClick={() => setEditorMode('editor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              editorMode === 'editor'
                ? 'bg-[#E5C158] text-[#070B15] shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>ویرایشگر CMS</span>
          </button>

          <button
            type="button"
            onClick={() => setEditorMode('split')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all hidden sm:flex items-center gap-1.5 ${
              editorMode === 'split'
                ? 'bg-[#E5C158] text-[#070B15] shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ویرایش و پیش‌نمایش دوگانه</span>
          </button>

          <button
            type="button"
            onClick={() => setEditorMode('preview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              editorMode === 'preview'
                ? 'bg-[#E5C158] text-[#070B15] shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>پیش‌نمایش مقاله</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors mr-1"
            title={isFullscreen ? 'خروج از حالت تمام‌صفحه' : 'ویرایشگر تمام‌صفحه'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* RICH TOOLBAR (Visible in Editor and Split mode) */}
      {editorMode !== 'preview' && (
        <div className="bg-[#0D1424] border border-slate-800 p-2 rounded-2xl flex flex-wrap items-center gap-1.5 text-xs select-none shadow-sm relative">
          {/* 1. HEADINGS DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('headings')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700/60 flex items-center gap-1.5 transition-colors"
              title="تعیین سطح تیترها (H1 - H4)"
            >
              <Heading1 className="w-4 h-4 text-[#E5C158]" />
              <span>تیترها</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {activeDropdown === 'headings' && (
              <div className="absolute top-full right-0 mt-1 z-30 w-44 bg-[#0D1424] border border-slate-700 rounded-xl shadow-2xl p-1.5 space-y-1 animate-in fade-in duration-150">
                <button
                  type="button"
                  onClick={() => handleInsertHeading(1)}
                  className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-800 text-white font-black text-sm flex items-center justify-between"
                >
                  <span className="text-[#E5C158]">تیتر اصلی H1</span>
                  <Heading1 className="w-4 h-4 text-[#E5C158]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleInsertHeading(2)}
                  className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-between"
                >
                  <span className="text-emerald-400">تیتر فرعی H2</span>
                  <Heading2 className="w-4 h-4 text-emerald-400" />
                </button>
                <button
                  type="button"
                  onClick={() => handleInsertHeading(3)}
                  className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-between"
                >
                  <span className="text-sky-400">تیتر بخش H3</span>
                  <Heading3 className="w-4 h-4 text-sky-400" />
                </button>
                <button
                  type="button"
                  onClick={() => handleInsertHeading(4)}
                  className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300 text-xs flex items-center justify-between"
                >
                  <span>تیتر کوچک H4</span>
                  <Heading4 className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            )}
          </div>

          <div className="w-px h-5 bg-slate-800 my-auto mx-0.5" />

          {/* 2. TEXT FORMATTING BUTTONS */}
          <button
            type="button"
            onClick={() => insertAtCursor('**', '**', 'متن برجسته')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="برجسته / بولد (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor('*', '*', 'متن مورب')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="ایتالیک / کج"
          >
            <Italic className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor('<u>', '</u>', 'متن زیرخط دار')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="خط زیر متن"
          >
            <Underline className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor('~~', '~~', 'متن خط خورده')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="خط روی متن"
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-800 my-auto mx-0.5" />

          {/* 3. LINK BUTTON */}
          <button
            type="button"
            onClick={handleOpenLinkModal}
            className="px-2.5 py-1.5 rounded-xl bg-[#E5C158]/10 hover:bg-[#E5C158]/20 text-[#E5C158] font-bold border border-[#E5C158]/30 flex items-center gap-1.5 transition-colors"
            title="افزودن پیوند / لینک اینترنتی"
          >
            <LinkIcon className="w-4 h-4" />
            <span>لینک به متن</span>
          </button>

          {/* 4. IMAGE BUTTON */}
          <button
            type="button"
            onClick={handleOpenImageModal}
            className="px-2.5 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-bold border border-sky-500/30 flex items-center gap-1.5 transition-colors"
            title="افزودن تصویر با متن جایگزین سئو"
          >
            <ImageIcon className="w-4 h-4" />
            <span>درج عکس</span>
          </button>

          <div className="w-px h-5 bg-slate-800 my-auto mx-0.5" />

          {/* 5. FONT FAMILY DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('fonts')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700/60 flex items-center gap-1.5 transition-colors"
              title="تغییر فونت متن"
            >
              <Type className="w-4 h-4 text-emerald-400" />
              <span>فونت</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {activeDropdown === 'fonts' && (
              <div className="absolute top-full right-0 mt-1 z-30 w-52 bg-[#0D1424] border border-slate-700 rounded-xl shadow-2xl p-1.5 space-y-1 animate-in fade-in duration-150">
                <div className="text-[10px] font-bold text-slate-400 px-2 py-1 border-b border-slate-800">
                  انتخاب قلم فارسی
                </div>
                {FONT_FAMILIES.map((font, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyFontFamily(font.value)}
                    className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-between"
                  >
                    <span>{font.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 6. FONT SIZE DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('sizes')}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700/60 flex items-center gap-1.5 transition-colors"
              title="تغییر سایز فونت"
            >
              <span>سایز</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {activeDropdown === 'sizes' && (
              <div className="absolute top-full right-0 mt-1 z-30 w-44 bg-[#0D1424] border border-slate-700 rounded-xl shadow-2xl p-1.5 space-y-1 animate-in fade-in duration-150">
                <div className="text-[10px] font-bold text-slate-400 px-2 py-1 border-b border-slate-800">
                  اندازه قلم
                </div>
                {FONT_SIZES.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyFontSize(s.value)}
                    className="w-full text-right px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 text-xs flex items-center justify-between"
                  >
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 7. COLOR & HIGHLIGHT PICKERS */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('colors')}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 transition-colors"
              title="رنگ متن و هایلایت"
            >
              <Palette className="w-4 h-4" />
            </button>

            {activeDropdown === 'colors' && (
              <div className="absolute top-full right-0 mt-1 z-30 w-56 bg-[#0D1424] border border-slate-700 rounded-xl shadow-2xl p-2.5 space-y-2 animate-in fade-in duration-150">
                <div className="text-[10px] font-bold text-slate-400 border-b border-slate-800 pb-1">
                  رنگ متن (Text Color)
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {TEXT_COLORS.map((c, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyTextColor(c.color)}
                      className="w-6 h-6 rounded-lg border border-slate-600 hover:scale-110 transition-transform"
                      style={{ backgroundColor: c.color }}
                      title={c.name}
                    />
                  ))}
                </div>

                <div className="text-[10px] font-bold text-slate-400 border-b border-slate-800 pb-1 pt-2">
                  پس‌زمینه / هایلایت (Background Highlight)
                </div>
                <div className="space-y-1">
                  {HIGHLIGHT_COLORS.map((h, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyHighlightColor(h.color)}
                      className="w-full text-right px-2 py-1 rounded text-[11px] text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                    >
                      <span
                        className="w-4 h-4 rounded border border-slate-700 inline-block"
                        style={{ backgroundColor: h.color }}
                      />
                      <span>{h.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-5 bg-slate-800 my-auto mx-0.5" />

          {/* 8. ALIGNMENTS */}
          <button
            type="button"
            onClick={() => handleApplyAlignment('right')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="تراز از راست"
          >
            <AlignRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleApplyAlignment('center')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="تراز وسط"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleApplyAlignment('left')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="تراز از چپ"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleApplyAlignment('justify')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="هم‌ترازی طرفین (Justify)"
          >
            <AlignJustify className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-800 my-auto mx-0.5" />

          {/* 9. LISTS & BLOCKS */}
          <button
            type="button"
            onClick={() => insertAtCursor('\n- ', '', 'آیتم فهرست')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="فهرست نقطه‌ای (Bulleted List)"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor('\n1. ', '', 'آیتم شماره‌دار')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="فهرست شماره‌دار (Numbered List)"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor('\n> ', '', 'متن اقتباس / نقل قول')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="کادر نقل قول / اقتباس"
          >
            <Quote className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertAtCursor('`', '`', 'کد نمونه')}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="کد درون خطی"
          >
            <Code className="w-4 h-4" />
          </button>

          {/* CALLOUT BOX */}
          <button
            type="button"
            onClick={handleOpenCalloutModal}
            className="px-2.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1.5 transition-colors"
            title="درج کادر ویژه / نکته حقوقی"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>کادر ویژه حقوقی</span>
          </button>

          {/* TABLE */}
          <button
            type="button"
            onClick={handleInsertTable}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            title="درج جدول اطلاعات"
          >
            <Table className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-slate-800 my-auto mx-0.5" />

          {/* UTILITIES */}
          <button
            type="button"
            onClick={handleFixPersianTypography}
            className="px-2.5 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30 flex items-center gap-1 transition-colors"
            title="اصلاح حروف ی/ک عربی و فاصله‌گذاری"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>اصلاح تایپ</span>
          </button>
        </div>
      )}

      {/* MAIN CONTENT AREA (Editor / Split / Preview) */}
      <div className={`${isFullscreen ? 'flex-1 flex flex-col min-h-0' : ''}`}>
        {/* MODE A & B: EDITOR OR SPLIT MODE */}
        {(editorMode === 'editor' || editorMode === 'split') && (
          <div className={`grid ${editorMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-4 ${isFullscreen ? 'flex-1 min-h-0' : ''}`}>
            {/* Textarea Input Column */}
            <div className="relative flex flex-col">
              <textarea
                ref={textareaRef}
                rows={isFullscreen ? 28 : minRows}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-2xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono leading-relaxed resize-y ${
                  isFullscreen ? 'flex-1 min-h-full' : ''
                }`}
                required
              />

              {/* Status footer for character and word count */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono px-3 py-1.5 bg-[#0D1424] border-x border-b border-slate-800 rounded-b-xl -mt-1">
                <span>تعداد کلمات: <strong className="text-[#E5C158]">{wordCount.toLocaleString('fa-IR')}</strong></span>
                <span>تعداد کاراکترها: <strong className="text-slate-200">{charCount.toLocaleString('fa-IR')}</strong></span>
              </div>
            </div>

            {/* Split Live Preview Column */}
            {editorMode === 'split' && (
              <div className="bg-[#070B15] border border-slate-800 rounded-2xl p-5 overflow-y-auto max-h-[600px] space-y-4">
                <div className="text-xs font-bold text-[#E5C158] border-b border-slate-800 pb-2 flex items-center justify-between">
                  <span>پیش‌نمایش زنده خروجی (Live Preview)</span>
                  <Eye className="w-4 h-4 text-[#E5C158]" />
                </div>
                <div
                  className="prose prose-invert max-w-none text-xs leading-relaxed text-slate-200 dir-rtl space-y-3"
                  dangerouslySetInnerHTML={{ __html: value || '<p class="text-slate-500 italic">پیش‌نمایش مقاله در این قسمت نمایش داده می‌شود...</p>' }}
                />
              </div>
            )}
          </div>
        )}

        {/* MODE C: FULL RENDERED PREVIEW */}
        {editorMode === 'preview' && (
          <div className="bg-[#070B15] border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E5C158]">
                <Eye className="w-5 h-5" />
                <span>پیش‌نمایش کامل نحوه نمایش مقاله برای کاربران وب‌سایت</span>
              </div>
              <button
                type="button"
                onClick={() => setEditorMode('editor')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
              >
                بازگشت به ویرایشگر
              </button>
            </div>

            {/* Rendered HTML Container */}
            <div
              className="prose prose-invert max-w-none text-sm leading-relaxed text-slate-200 dir-rtl space-y-4 font-sans"
              dangerouslySetInnerHTML={{
                __html:
                  value ||
                  '<div class="text-center py-12 text-slate-500">محتوایی جهت پیش‌نمایش وارد نشده است.</div>',
              }}
            />
          </div>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* LINK MODAL */}
      {/* ---------------------------------------------------- */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
          <div className="bg-[#0D1424] border border-slate-700 rounded-2xl w-full max-w-md p-5 space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-[#E5C158]" />
                <span>افزودن پیوند / لینک اینترنتی</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsLinkModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleInsertLink} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  متن نمایشی پیوند
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="مثال: ثبت سفارش تنظیم لایحه"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#E5C158] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  آدرس اینترنتی (URL) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://... یا /services/petition-writing"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono dir-ltr focus:border-[#E5C158] focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="linkNewTab"
                  checked={linkOpenInNewTab}
                  onChange={(e) => setLinkOpenInNewTab(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#E5C158] cursor-pointer"
                />
                <label htmlFor="linkNewTab" className="text-xs text-slate-300 cursor-pointer">
                  باز شدن پیوند در تب جدید (target=&quot;_blank&quot;)
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsLinkModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#E5C158] text-[#070B15] text-xs font-black hover:opacity-95"
                >
                  درج لینک
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* IMAGE MODAL */}
      {/* ---------------------------------------------------- */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
          <div className="bg-[#0D1424] border border-slate-700 rounded-2xl w-full max-w-lg p-5 space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-sky-400" />
                <span>افزودن تصویر به مقاله</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleInsertImage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  آدرس اینترنتی عکس (URL / Path) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="مثال: /images/knowledge-petition-sample.jpg یا https://..."
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono dir-ltr focus:border-sky-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  جمله / متن جایگزین عکس (Alt Text برای سئو) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="مثال: نمونه دادخواست حقوقی تنظیم شده توسط کارشناسان نگارش یار"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  این جمله برای موتورهای جستجوی گوگل و بهینه‌سازی سئوی تصویر مقاله ضروری است.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  توضیح زیر عکس (Caption - اختیاری)
                </label>
                <input
                  type="text"
                  value={imageCaption}
                  onChange={(e) => setImageCaption(e.target.value)}
                  placeholder="مثال: شکل ۱ - ساختار استاندارد فرم دادخواست حقوقی"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  موقعیت قرارگیری و چینش عکس
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setImageAlign('right')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-colors ${
                      imageAlign === 'right'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-[#070B15] border-slate-700 text-slate-400'
                    }`}
                  >
                    سمت راست
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageAlign('center')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-colors ${
                      imageAlign === 'center'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-[#070B15] border-slate-700 text-slate-400'
                    }`}
                  >
                    وسط‌چین (پیش‌فرض)
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageAlign('left')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-colors ${
                      imageAlign === 'left'
                        ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                        : 'bg-[#070B15] border-slate-700 text-slate-400'
                    }`}
                  >
                    سمت چپ
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 text-xs font-black hover:opacity-95"
                >
                  درج عکس
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* CALLOUT BOX MODAL */}
      {/* ---------------------------------------------------- */}
      {isCalloutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm dir-rtl">
          <div className="bg-[#0D1424] border border-slate-700 rounded-2xl w-full max-w-md p-5 space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>افزودن کادر ویژه حقوقی</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsCalloutModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleInsertCallout} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  نوع کادر
                </label>
                <select
                  value={calloutType}
                  onChange={(e) => setCalloutType(e.target.value as 'note' | 'warning' | 'legal' | 'success')}
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-emerald-400 focus:outline-none"
                >
                  <option value="legal">⚖️ نکته و استناد قانونی (سبز)</option>
                  <option value="note">⚡ نکته مهم کاربردی (طلایی)</option>
                  <option value="warning">⚠️ هشدار و ریسک حقوقی (قرمز)</option>
                  <option value="success">✅ راهنمایی گام‌به‌گام (آبی)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  عنوان کادر
                </label>
                <input
                  type="text"
                  value={calloutTitle}
                  onChange={(e) => setCalloutTitle(e.target.value)}
                  placeholder="مثال: ماده قانونی مربوطه یا نکته مهم"
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  متن داخل کادر <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={calloutText}
                  onChange={(e) => setCalloutText(e.target.value)}
                  placeholder="متن توضیحی کادر ویژه..."
                  className="w-full bg-[#070B15] border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none leading-relaxed"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsCalloutModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-black hover:opacity-95"
                >
                  درج کادر
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
