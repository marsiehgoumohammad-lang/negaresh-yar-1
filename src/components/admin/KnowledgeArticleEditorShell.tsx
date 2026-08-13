'use client';

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  FileText,
  Globe2,
  HelpCircle,
  Layers3,
  Link2,
  ListChecks,
  Megaphone,
  Scale,
  Search,
  Settings2,
  Sparkles,
  Tag,
  Target,
} from 'lucide-react';

import type { Article } from '@/lib/stores/types';

type SectionKey =
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
  | 'publishing';

interface EditorSection {
  key: SectionKey;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EDITOR_SECTIONS: EditorSection[] = [
  {
    key: 'basic',
    title: 'اطلاعات پایه',
    description: 'عنوان، نامک، چکیده و دسته‌بندی مقاله',
    icon: FileText,
  },
  {
    key: 'seo',
    title: 'سئو',
    description: 'اطلاعات موتورهای جست‌وجو و داده‌های ساختاری',
    icon: Search,
  },
  {
    key: 'hero',
    title: 'هیرو و پاسخ سریع',
    description: 'محتوای ابتدای مقاله و پاسخ مستقیم',
    icon: Sparkles,
  },
  {
    key: 'structure',
    title: 'ساختار مقاله',
    description: 'فهرست مطالب، بخش‌ها و محتوای اصلی',
    icon: Layers3,
  },
  {
    key: 'examples',
    title: 'مثال‌های کاربردی',
    description: 'سناریوها و نمونه‌های عملی',
    icon: Target,
  },
  {
    key: 'mistakes',
    title: 'اشتباهات رایج',
    description: 'خطاها، خطرات و راهکار درست',
    icon: ListChecks,
  },
  {
    key: 'legal',
    title: 'نکات قانونی',
    description: 'ملاحظات قانونی و مستندات',
    icon: Scale,
  },
  {
    key: 'faq',
    title: 'پرسش‌های متداول',
    description: 'سوالات و پاسخ‌های متداول',
    icon: HelpCircle,
  },
  {
    key: 'links',
    title: 'پیوندهای داخلی',
    description: 'خدمات، نمونه‌ها و مقالات مرتبط',
    icon: Link2,
  },
  {
    key: 'cta',
    title: 'فراخوان اقدام',
    description: 'عنوان، توضیح و دکمه اقدام',
    icon: Megaphone,
  },
  {
    key: 'publishing',
    title: 'انتشار',
    description: 'وضعیت، برجسته‌سازی و تنظیمات انتشار',
    icon: Globe2,
  },
];

export interface KnowledgeArticleEditorShellProps {
  article?: Article | null;
  onChange?: (changes: Partial<Article>) => void;
  onSave?: () => void;
  onCancel?: () => void;
  saving?: boolean;
  children?: React.ReactNode;
}

export function KnowledgeArticleEditorShell({
  article,
  onSave,
  onCancel,
  saving = false,
  children,
}: KnowledgeArticleEditorShellProps) {
  const [activeSection, setActiveSection] =
    useState<SectionKey>('basic');

  const [openSections, setOpenSections] = useState<
    Record<SectionKey, boolean>
  >(() =>
    Object.fromEntries(
      EDITOR_SECTIONS.map((section) => [
        section.key,
        section.key === 'basic',
      ]),
    ) as Record<SectionKey, boolean>,
  );

  const activeMeta = useMemo(
    () =>
      EDITOR_SECTIONS.find(
        (section) => section.key === activeSection,
      ),
    [activeSection],
  );

  const toggleSection = (key: SectionKey) => {
    setActiveSection(key);

    setOpenSections((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const handleSectionChange = (key: SectionKey) => {
    setActiveSection(key);

    setOpenSections((current) => ({
      ...current,
      [key]: true,
    }));

    requestAnimationFrame(() => {
      document
        .getElementById(`knowledge-editor-${key}`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    });
  };

  return (
    <div
      dir="rtl"
      className="w-full text-slate-100"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
                  <BookOpen className="h-5 w-5 text-amber-300" />
                </div>

                <span className="text-xs font-bold tracking-wide text-amber-300">
                  پایگاه دانش نگارش یار
                </span>
              </div>

              <h2 className="text-xl font-black text-white">
                {article?.title || 'مقاله جدید'}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                ویرایشگر حرفه‌ای مقاله دانش‌محور
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {article?.status && (
                <span
                  className={[
                    'rounded-full border px-3 py-1.5 text-xs font-bold',
                    article.status === 'published'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      : article.status === 'paused'
                        ? 'border-slate-500/30 bg-slate-500/10 text-slate-300'
                        : 'border-amber-500/30 bg-amber-500/10 text-amber-300',
                  ].join(' ')}
                >
                  {article.status === 'published'
                    ? 'منتشر شده'
                    : article.status === 'paused'
                      ? 'متوقف'
                      : 'پیش‌نویس'}
                </span>
              )}

              {article?.slug && (
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-400">
                  /knowledge/{article.slug}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Section navigation */}
        <div className="mb-6 overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-950/80 p-2 shadow-lg">
          <div className="flex min-w-max gap-1">
            {EDITOR_SECTIONS.map((section) => {
              const Icon = section.icon;
              const active = section.key === activeSection;

              return (
                <button
                  key={section.key}
                  type="button"
                  onClick={() =>
                    handleSectionChange(section.key)
                  }
                  className={[
                    'flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition',
                    active
                      ? 'bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200',
                  ].join(' ')}
                >
                  <Icon className="h-4 w-4" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Main editor */}
          <main className="min-w-0 space-y-4">
            {EDITOR_SECTIONS.map((section) => {
              const Icon = section.icon;
              const isOpen = openSections[section.key];

              return (
                <section
                  key={section.key}
                  id={`knowledge-editor-${section.key}`}
                  className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/70 shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleSection(section.key)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-right transition hover:bg-slate-900/70"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div
                        className={[
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                          isOpen
                            ? 'border-amber-400/30 bg-amber-400/10'
                            : 'border-slate-700 bg-slate-900',
                        ].join(' ')}
                      >
                        <Icon
                          className={[
                            'h-5 w-5',
                            isOpen
                              ? 'text-amber-300'
                              : 'text-slate-400',
                          ].join(' ')}
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-black text-white">
                          {section.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={[
                        'h-5 w-5 shrink-0 text-slate-500 transition-transform',
                        isOpen ? 'rotate-180' : '',
                      ].join(' ')}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-800/80 p-5">
                      {children ? (
                        children
                      ) : (
                        <EditorSectionPlaceholder
                          section={section}
                        />
                      )}
                    </div>
                  )}
                </section>
              );
            })}
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <Settings2 className="h-4 w-4 text-amber-300" />

                  <span className="text-sm font-black text-white">
                    بخش فعال
                  </span>
                </div>

                <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
                  <div className="text-sm font-bold text-amber-200">
                    {activeMeta?.title}
                  </div>

                  <div className="mt-1 text-xs leading-6 text-slate-400">
                    {activeMeta?.description}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-lg">
                <div className="mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-amber-300" />

                  <span className="text-sm font-black text-white">
                    وضعیت محتوا
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-400">
                  <StatusRow
                    label="عنوان"
                    value={
                      article?.title
                        ? 'تکمیل شده'
                        : 'نیازمند تکمیل'
                    }
                    ok={Boolean(article?.title)}
                  />

                  <StatusRow
                    label="نامک"
                    value={
                      article?.slug
                        ? 'تکمیل شده'
                        : 'نیازمند تکمیل'
                    }
                    ok={Boolean(article?.slug)}
                  />

                  <StatusRow
                    label="محتوا"
                    value={
                      article?.content
                        ? 'دارای محتوا'
                        : 'خالی'
                    }
                    ok={Boolean(article?.content)}
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Sticky actions */}
        <div className="sticky bottom-0 z-30 mt-6 border-t border-slate-700/80 bg-slate-950/95 px-4 py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <div className="hidden text-xs text-slate-500 sm:block">
              تغییرات مقاله پس از ذخیره در سامانه ثبت خواهند شد.
            </div>

            <div className="flex w-full justify-end gap-2 sm:w-auto">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={saving}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-slate-800 disabled:opacity-50"
                >
                  انصراف
                </button>
              )}

              {onSave && (
                <button
                  type="button"
                  onClick={onSave}
                  disabled={saving}
                  className="rounded-xl border border-amber-300/30 bg-amber-400 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? 'در حال ذخیره...'
                    : 'ذخیره تغییرات'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorSectionPlaceholder({
  section,
}: {
  section: EditorSection;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/5">
        <section.icon className="h-6 w-6 text-amber-300" />
      </div>

      <h4 className="text-sm font-black text-slate-200">
        {section.title}
      </h4>

      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
        ساختار این بخش آماده است و فیلدهای تخصصی آن در مرحله
        بعدی به این ویرایشگر افزوده خواهند شد.
      </p>
    </div>
  );
}

function StatusRow({
  label,
  value,
  ok,
}: {
  label: string;
  value: string;
  ok: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
      <span>{label}</span>

      <span
        className={
          ok
            ? 'font-bold text-emerald-400'
            : 'font-bold text-slate-500'
        }
      >
        {value}
      </span>
    </div>
  );
}
