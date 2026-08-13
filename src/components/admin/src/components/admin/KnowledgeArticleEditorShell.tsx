'use client';

import React, { ReactNode, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  FileText,
  Search,
  Sparkles,
  LayoutList,
  BriefcaseBusiness,
  AlertTriangle,
  Scale,
  HelpCircle,
  Link2,
  Megaphone,
  Send,
  Save,
} from 'lucide-react';

export interface KnowledgeEditorSection {
  id:
    | 'basic'
    | 'seo'
    | 'hero'
    | 'structure'
    | 'examples'
    | 'mistakes'
    | 'legal'
    | 'faq'
    | 'links'
    | 'cta'
    | 'publish';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const KNOWLEDGE_EDITOR_SECTIONS: KnowledgeEditorSection[] = [
  {
    id: 'basic',
    title: 'اطلاعات پایه',
    description: 'عنوان، نامک، دسته‌بندی و اطلاعات اصلی مقاله',
    icon: FileText,
  },
  {
    id: 'seo',
    title: 'سئو',
    description: 'عنوان و توضیحات موتور جستجو، کلیدواژه‌ها و داده ساختاریافته',
    icon: Search,
  },
  {
    id: 'hero',
    title: 'هیرو و پاسخ سریع',
    description: 'عنوان نمایشی، زیرعنوان، پاسخ کوتاه و نکات برجسته',
    icon: Sparkles,
  },
  {
    id: 'structure',
    title: 'ساختار مقاله',
    description: 'فهرست مطالب، بخش‌ها و محتوای اصلی مقاله',
    icon: LayoutList,
  },
  {
    id: 'examples',
    title: 'مثال‌های کاربردی',
    description: 'سناریوها و نمونه‌های عملی مرتبط با موضوع',
    icon: BriefcaseBusiness,
  },
  {
    id: 'mistakes',
    title: 'اشتباهات رایج',
    description: 'خطاهای متداول، خطرها و اقدام درست',
    icon: AlertTriangle,
  },
  {
    id: 'legal',
    title: 'نکات قانونی',
    description: 'ملاحظات قانونی، مقررات و منابع حقوقی',
    icon: Scale,
  },
  {
    id: 'faq',
    title: 'پرسش‌های متداول',
    description: 'پرسش و پاسخ‌های متداول برای کاربر و موتور جستجو',
    icon: HelpCircle,
  },
  {
    id: 'links',
    title: 'پیوندهای داخلی',
    description: 'خدمات، نمونه‌ها و مقالات مرتبط',
    icon: Link2,
  },
  {
    id: 'cta',
    title: 'فراخوان اقدام',
    description: 'عنوان، توضیح و پیوند اقدام پایانی مقاله',
    icon: Megaphone,
  },
  {
    id: 'publish',
    title: 'انتشار',
    description: 'وضعیت انتشار، نسخه و کنترل‌های نهایی',
    icon: Send,
  },
];

interface KnowledgeArticleEditorShellProps {
  children?: ReactNode;

  /**
   * Optional custom content renderer.
   * The shell intentionally does not know individual KnowledgeArticleData fields.
   */
  renderSection?: (
    section: KnowledgeEditorSection
  ) => ReactNode;

  /**
   * Allows the parent editor to control which section is open.
   */
  initialOpenSection?: KnowledgeEditorSection['id'];

  /**
   * Sticky action area.
   * No persistence logic is implemented here.
   */
  saveLabel?: string;
  onSave?: () => void;
  saving?: boolean;

  title?: string;
  subtitle?: string;
}

export function KnowledgeArticleEditorShell({
  children,
  renderSection,
  initialOpenSection = 'basic',
  saveLabel = 'ذخیره مقاله',
  onSave,
  saving = false,
  title = 'ویرایش مقاله پایگاه دانش',
  subtitle = 'مقاله را در بخش‌های مستقل و قابل مدیریت تکمیل کنید.',
}: KnowledgeArticleEditorShellProps) {
  const [openSection, setOpenSection] =
    useState<KnowledgeEditorSection['id']>(initialOpenSection);

  const renderContent = (section: KnowledgeEditorSection) => {
    if (renderSection) {
      return renderSection(section);
    }

    return (
      <div className="rounded-2xl border border-slate-700/70 bg-slate-950/40 p-6">
        <div className="flex items-center gap-3 text-slate-400">
          <section.icon className="h-5 w-5 text-[#E5C158]" />

          <div>
            <p className="text-sm font-semibold text-slate-200">
              محتوای این بخش در مرحله بعد افزوده می‌شود
            </p>

            <p className="mt-1 text-xs leading-6 text-slate-500">
              این پوسته فقط ساختار و جایگاه فیلدهای ویرایشگر را فراهم می‌کند.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      dir="rtl"
      className="w-full space-y-6 text-slate-100"
    >
      {/* Header */}
      <header className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-xl shadow-black/10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E5C158]/30 bg-[#E5C158]/10">
              <BookOpen className="h-6 w-6 text-[#E5C158]" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white md:text-2xl">
                {title}
              </h1>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#E5C158]/20 bg-[#E5C158]/5 px-4 py-2 text-xs text-[#E5C158]">
            پایگاه دانش نگارش یار
          </div>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {KNOWLEDGE_EDITOR_SECTIONS.map((section, index) => {
          const Icon = section.icon;
          const active = openSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setOpenSection(section.id)}
              className={[
                'group rounded-2xl border p-4 text-right transition-all',
                active
                  ? 'border-[#E5C158]/50 bg-[#E5C158]/10 shadow-lg shadow-[#E5C158]/5'
                  : 'border-slate-700/70 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-800/70',
              ].join(' ')}
            >
              <div className="flex items-start gap-3">
                <div
                  className={[
                    'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                    active
                      ? 'bg-[#E5C158]/15 text-[#E5C158]'
                      : 'bg-slate-800 text-slate-400 group-hover:text-slate-200',
                  ].join(' ')}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={[
                        'text-sm font-bold',
                        active ? 'text-[#E5C158]' : 'text-slate-200',
                      ].join(' ')}
                    >
                      {index + 1}. {section.title}
                    </span>

                    <ChevronDown
                      className={[
                        'h-4 w-4 shrink-0 transition-transform',
                        active
                          ? 'rotate-180 text-[#E5C158]'
                          : 'text-slate-500',
                      ].join(' ')}
                    />
                  </div>

                  <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-slate-500">
                    {section.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Section */}
      <section className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-2xl shadow-black/10">
        {KNOWLEDGE_EDITOR_SECTIONS.map((section) => {
          if (section.id !== openSection) return null;

          const Icon = section.icon;

          return (
            <div key={section.id}>
              <div className="border-b border-slate-700/70 bg-slate-800/40 px-5 py-4 md:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5C158]/10 text-[#E5C158]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-bold text-white">
                      {section.title}
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6">
                {renderContent(section)}
              </div>
            </div>
          );
        })}
      </section>

      {/* Optional legacy/editor content */}
      {children ? (
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-5 md:p-6">
          {children}
        </div>
      ) : null}

      {/* Sticky Actions */}
      <div className="sticky bottom-4 z-30">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 px-2 text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#E5C158]" />
            تغییرات این ویرایشگر هنوز به‌صورت خودکار ذخیره نمی‌شوند.
          </div>

          <button
            type="button"
            onClick={onSave}
            disabled={!onSave || saving}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#E5C158] px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-[#f0d477] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save className="h-4 w-4" />

            {saving ? 'در حال ذخیره...' : saveLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
