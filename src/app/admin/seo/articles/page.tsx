'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  FileText,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Globe,
  PauseCircle,
  Play,
  FileCode,
  Sparkles,
  RefreshCw,
  X,
  ExternalLink,
  Code,
  Info,
  Calendar,
  Layers,
  BookOpen,
} from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { ArticleCmsEditor } from '@/components/admin/ArticleCmsEditor';
import { Article, ArticleStatus } from '@/lib/stores/types';

function slugifyPersian(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\t\n]+/g, '-')
    .replace(/[^\w\u0600-\u06FF\-]+/g, '')
    .replace(/\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

export default function AdminArticlesCmsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | ArticleStatus>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'updated'>('newest');

  // Toast State
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Modal States
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  // Form Fields State
  const [formTitle, setFormTitle] = useState<string>('');
  const [formSlug, setFormSlug] = useState<string>('');
  const [formAutoSlug, setFormAutoSlug] = useState<boolean>(true);
  const [formExcerpt, setFormExcerpt] = useState<string>('');
  const [formContent, setFormContent] = useState<string>('');
  const [formMetaTitle, setFormMetaTitle] = useState<string>('');
  const [formMetaDescription, setFormMetaDescription] = useState<string>('');
  const [formPrimaryKeyword, setFormPrimaryKeyword] = useState<string>('');
  const [formKeywords, setFormKeywords] = useState<string>('');
  const [formSchema, setFormSchema] = useState<string>('');
  const [formStatus, setFormStatus] = useState<ArticleStatus>('draft');
  const [formActiveTab, setFormActiveTab] = useState<'content' | 'seo' | 'schema' | 'preview'>('content');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [schemaValidationResult, setSchemaValidationResult] = useState<{ valid: boolean; message: string } | null>(null);

  // Action Modals State
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [previewTarget, setPreviewTarget] = useState<Article | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Fetch articles from API
  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/articles?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.ok && Array.isArray(data.articles)) {
          setArticles(data.articles);
        }
      } else {
        showToast('خطا در دریافت لیست مقالات از سرور', 'error');
      }
    } catch (err) {
      console.error('Failed to fetch articles:', err);
      showToast('خطا در ارتباط با شبکه', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Stats derived from articles
  const stats = useMemo(() => {
    const total = articles.length;
    const published = articles.filter((a) => a.status === 'published').length;
    const draft = articles.filter((a) => a.status === 'draft').length;
    const paused = articles.filter((a) => a.status === 'paused').length;
    const totalWords = articles.reduce((acc, a) => acc + (a.wordCount || 0), 0);

    // Filter recently updated (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentlyUpdated = articles.filter((a) => a.updatedAt && new Date(a.updatedAt) >= sevenDaysAgo).length;

    return { total, published, draft, paused, totalWords, recentlyUpdated };
  }, [articles]);

  // Filter & Sort Articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((art) => {
        const matchesStatus = statusFilter === 'all' || art.status === statusFilter;
        const matchesSearch =
          !searchTerm.trim() ||
          art.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          art.slug?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          art.primaryKeyword?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        }
        if (sortBy === 'oldest') {
          return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
        }
        if (sortBy === 'updated') {
          return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
        }
        return 0;
      });
  }, [articles, statusFilter, searchTerm, sortBy]);

  // Handle Form Open (New or Edit)
  const handleOpenForm = (art?: Article) => {
    if (art) {
      setEditingArticle(art);
      setFormTitle(art.title || '');
      setFormSlug(art.slug || '');
      setFormAutoSlug(false);
      setFormExcerpt(art.excerpt || '');
      setFormContent(art.content || '');
      setFormMetaTitle(art.metaTitle || '');
      setFormMetaDescription(art.metaDescription || '');
      setFormPrimaryKeyword(art.primaryKeyword || '');
      setFormKeywords(Array.isArray(art.keywords) ? art.keywords.join('، ') : '');
      setFormSchema(art.schema || '');
      setFormStatus(art.status || 'draft');
    } else {
      setEditingArticle(null);
      setFormTitle('');
      setFormSlug('');
      setFormAutoSlug(true);
      setFormExcerpt('');
      setFormContent('');
      setFormMetaTitle('');
      setFormMetaDescription('');
      setFormPrimaryKeyword('');
      setFormKeywords('');
      setFormSchema('');
      setFormStatus('draft');
    }
    setFormActiveTab('content');
    setSchemaValidationResult(null);
    setIsFormOpen(true);
  };

  // Handle Title Change for auto-slug
  const handleTitleChange = (val: string) => {
    setFormTitle(val);
    if (formAutoSlug && !editingArticle) {
      setFormSlug(slugifyPersian(val));
    }
  };

  // Live SEO Rules Validation Checklist
  const seoChecklist = useMemo(() => {
    const hasTitle = formTitle.trim().length > 0;
    const metaTitleLen = formMetaTitle.trim().length;
    const hasGoodMetaTitle = metaTitleLen >= 40 && metaTitleLen <= 65;
    const metaDescLen = formMetaDescription.trim().length;
    const hasGoodMetaDesc = metaDescLen >= 100 && metaDescLen <= 165;
    const hasPrimaryKeyword = formPrimaryKeyword.trim().length > 0;
    const currentWordCount = countWords(formContent);
    const hasGoodContent = currentWordCount >= 300;
    const hasSlug = formSlug.trim().length > 0;
    const hasExcerpt = formExcerpt.trim().length > 0;

    let isSchemaValid = true;
    if (formSchema.trim()) {
      try {
        JSON.parse(formSchema);
      } catch {
        isSchemaValid = false;
      }
    }

    return [
      { id: 'title', label: 'عنوان اصلی مقاله', status: hasTitle ? 'good' : 'error', hint: 'عنوان نباید خالی باشد' },
      { id: 'slug', label: 'نامک (Slug) استاندارد', status: hasSlug ? 'good' : 'error', hint: 'شناسه یکتای URL مقاله' },
      { id: 'metaTitle', label: `Meta Title (${metaTitleLen} کاراکتر)`, status: hasGoodMetaTitle ? 'good' : metaTitleLen > 0 ? 'warning' : 'error', hint: 'بین ۴۰ تا ۶۵ کاراکتر توصیه می‌شود' },
      { id: 'metaDesc', label: `Meta Description (${metaDescLen} کاراکتر)`, status: hasGoodMetaDesc ? 'good' : metaDescLen > 0 ? 'warning' : 'error', hint: 'بین ۱۰۰ تا ۱۶۵ کاراکتر توصیه می‌شود' },
      { id: 'primaryKey', label: 'کلمه کلیدی اصلی', status: hasPrimaryKeyword ? 'good' : 'warning', hint: 'جهت تمرکز رتبه‌بندی موتور جستجو' },
      { id: 'content', label: `طول محتوای مقاله (${currentWordCount} کلمه)`, status: hasGoodContent ? 'good' : currentWordCount > 0 ? 'warning' : 'error', hint: 'حداقل ۳۰۰ کلمه برای رتبه مناسب' },
      { id: 'excerpt', label: 'چکیده مقاله', status: hasExcerpt ? 'good' : 'warning', hint: 'نمایش در کارت‌ها و خلاصه پایگاه دانش' },
      { id: 'schema', label: 'ساختار JSON-LD Schema', status: !formSchema.trim() ? 'good' : isSchemaValid ? 'good' : 'error', hint: formSchema.trim() && !isSchemaValid ? 'فرمت JSON نامعتبر است' : 'اختیاری / معتبر' },
    ];
  }, [formTitle, formSlug, formMetaTitle, formMetaDescription, formPrimaryKeyword, formContent, formExcerpt, formSchema]);

  // Schema Validation Handler
  const handleValidateSchema = () => {
    if (!formSchema.trim()) {
      setSchemaValidationResult({ valid: true, message: 'ساختار Schema خالی است (بدون خطا).' });
      return;
    }
    try {
      const parsed = JSON.parse(formSchema);
      setFormSchema(JSON.stringify(parsed, null, 2));
      setSchemaValidationResult({ valid: true, message: 'فرمت JSON معتبر است و با موفقیت مرتب‌سازی شد.' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'خطا در پارس JSON';
      setSchemaValidationResult({ valid: false, message: `خطای ساختاری در JSON: ${msg}` });
    }
  };

  // Submit Article (Create or Update)
  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formTitle.trim()) {
      showToast('لطفاً عنوان مقاله را وارد کنید', 'error');
      return;
    }
    if (!formSlug.trim()) {
      showToast('لطفاً اسلاگ مقاله را وارد کنید', 'error');
      return;
    }
    if (!formContent.trim()) {
      showToast('محتوای مقاله نمی‌تواند خالی باشد', 'error');
      return;
    }

    if (formSchema.trim()) {
      try {
        JSON.parse(formSchema);
      } catch {
        showToast('کد Schema وارد شده یک JSON معتبر نیست. لطفاً آن را اصلاح کنید.', 'error');
        setFormActiveTab('schema');
        return;
      }
    }

    setIsSaving(true);

    const keywordsArray = formKeywords
      .split(/[,،\n]/)
      .map((k) => k.trim())
      .filter(Boolean);

    const payload = {
      title: formTitle.trim(),
      slug: formSlug.trim(),
      content: formContent.trim(),
      excerpt: formExcerpt.trim(),
      metaTitle: formMetaTitle.trim(),
      metaDescription: formMetaDescription.trim(),
      primaryKeyword: formPrimaryKeyword.trim(),
      keywords: keywordsArray,
      schema: formSchema.trim(),
      status: formStatus,
    };

    try {
      let res: Response;
      if (editingArticle) {
        // Edit existing article
        res = await fetch(`/api/articles/${editingArticle.slug}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // Create new article
        res = await fetch('/api/articles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json();

      if (res.ok && data.ok) {
        showToast(
          editingArticle ? 'مقاله با موفقیت به‌روزرسانی شد' : 'مقاله جدید با موفقیت ثبت شد',
          'success'
        );
        setIsFormOpen(false);
        fetchArticles();
      } else {
        showToast(data.error || 'خطا در ذخیره‌سازی مقاله', 'error');
      }
    } catch (err) {
      console.error('Error saving article:', err);
      showToast('خطا در برقراری ارتباط با سرور', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Quick Status Toggle (Publish / Pause / Draft)
  const handleQuickStatusChange = async (slug: string, newStatus: ArticleStatus) => {
    try {
      const res = await fetch(`/api/articles/${slug}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        const statusText =
          newStatus === 'published' ? 'منتشر شد' : newStatus === 'paused' ? 'متوقف شد' : 'به پیش‌نویس تغییر یافت';
        showToast(`وضعیت مقاله با موفقیت به ${statusText}`, 'success');
        fetchArticles();
      } else {
        showToast(data.error || 'خطا در تغییر وضعیت مقاله', 'error');
      }
    } catch (err) {
      console.error('Error updating status:', err);
      showToast('خطا در ارتباط با سرور', 'error');
    }
  };

  // Delete Article Handler
  const handleDeleteArticle = async () => {
    if (!deleteTarget) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/articles/${deleteTarget.slug}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        showToast(`مقاله «${deleteTarget.title}» با موفقیت حذف شد`, 'success');
        setDeleteTarget(null);
        fetchArticles();
      } else {
        showToast(data.error || 'خطا در حذف مقاله', 'error');
      }
    } catch (err) {
      console.error('Error deleting article:', err);
      showToast('خطا در ارتباط با سرور', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 dir-rtl">
        {/* Notification Toast */}
        {toast && (
          <div
            className={`fixed top-5 left-5 z-50 px-5 py-3.5 rounded-2xl shadow-2xl border text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-300 ${
              toast.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-300 backdrop-blur-md'
                : toast.type === 'error'
                ? 'bg-rose-950/90 border-rose-500/40 text-rose-300 backdrop-blur-md'
                : 'bg-slate-900/90 border-slate-700 text-slate-200 backdrop-blur-md'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : toast.type === 'error' ? (
              <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
            ) : (
              <Info className="w-5 h-5 text-amber-400 shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        )}

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1424] border border-slate-800 p-5 rounded-2xl shadow-lg">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#E5C158]" />
              <span>مدیریت مقالات</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              ایجاد، ویرایش، انتشار و مدیریت مقالات پایگاه دانش نگارش یار
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => fetchArticles()}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              title="به‌روزرسانی لیست"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#E5C158]' : ''}`} />
            </button>
            <button
              onClick={() => handleOpenForm()}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs hover:opacity-95 transition-opacity shadow-[0_0_15px_rgba(229,193,88,0.25)] flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>مقاله جدید</span>
            </button>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Link
            href="/admin/seo"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070B15] text-slate-400 hover:text-white border border-slate-800"
          >
            وضعیت سئوی فنی
          </Link>
          <Link
            href="/admin/seo/articles"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#E5C158] text-[#070B15] flex items-center gap-1.5 shadow-[0_0_15px_rgba(229,193,88,0.2)]"
          >
            <FileText className="w-3.5 h-3.5 text-[#070B15]" />
            <span>مدیریت و ویرایش مقالات</span>
          </Link>
          <Link
            href="/admin/seo/search-console"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#070B15] text-slate-400 hover:text-white border border-slate-800"
          >
            تحلیل Search Console
          </Link>
        </div>

        {/* Statistics Dashboard Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
              <span>کل مقالات</span>
              <BookOpen className="w-4 h-4 text-[#E5C158]" />
            </div>
            <div className="text-2xl font-black text-white">{stats.total}</div>
            <div className="text-[10px] text-slate-500">پایگاه دانش کامل</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
              <span>منتشر شده</span>
              <Globe className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400">{stats.published}</div>
            <div className="text-[10px] text-emerald-500/70">قابل مشاهده در وب‌سایت</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
              <span>پیش‌نویس</span>
              <FileCode className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-400">{stats.draft}</div>
            <div className="text-[10px] text-amber-500/70">در حال نگارش / آماده‌سازی</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
              <span>متوقف شده</span>
              <PauseCircle className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-black text-slate-300">{stats.paused}</div>
            <div className="text-[10px] text-slate-500">خارج شده از نمایش عمومی</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
              <span>به‌روزرسانی اخیر</span>
              <Calendar className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-black text-sky-400">{stats.recentlyUpdated}</div>
            <div className="text-[10px] text-slate-500">۷ روز گذشته</div>
          </div>

          <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold">
              <span>مجموع کلمات</span>
              <Layers className="w-4 h-4 text-[#E5C158]" />
            </div>
            <div className="text-lg font-black text-[#E5C158] truncate">
              {stats.totalWords.toLocaleString('fa-IR')}
            </div>
            <div className="text-[10px] text-slate-500">محتوای غنی پایگاه دانش</div>
          </div>
        </div>

        {/* Search, Filter & Controls Bar */}
        <div className="bg-[#0D1424] border border-slate-800 p-4 rounded-2xl space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو در عنوان، اسلاگ، یا کلمه کلیدی..."
              className="w-full bg-[#070B15] border border-slate-800 focus:border-[#E5C158] rounded-xl pr-10 pl-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {/* Status Filter Buttons */}
            <div className="flex items-center bg-[#070B15] border border-slate-800 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-slate-800 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                همه ({stats.total})
              </button>
              <button
                onClick={() => setStatusFilter('published')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  statusFilter === 'published'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                منتشر شده ({stats.published})
              </button>
              <button
                onClick={() => setStatusFilter('draft')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  statusFilter === 'draft'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                پیش‌نویس ({stats.draft})
              </button>
              <button
                onClick={() => setStatusFilter('paused')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  statusFilter === 'paused'
                    ? 'bg-slate-700 text-slate-200'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                متوقف شده ({stats.paused})
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'updated')}
                className="bg-[#070B15] border border-slate-800 text-slate-300 text-xs font-bold rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#E5C158] cursor-pointer"
              >
                <option value="newest">جدیدترین</option>
                <option value="oldest">قدیمی‌ترین</option>
                <option value="updated">آخرین بروزرسانی</option>
              </select>
            </div>
          </div>
        </div>

        {/* Articles Data Table */}
        <div className="bg-[#0D1424] border border-slate-800 rounded-2xl p-5 shadow-lg">
          {loading ? (
            <div className="py-16 text-center text-slate-400 text-xs space-y-3">
              <div className="w-8 h-8 border-2 border-[#E5C158] border-t-transparent rounded-full animate-spin mx-auto" />
              <div>در حال بارگذاری مقالات پایگاه دانش...</div>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-xs space-y-3">
              <FileText className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="font-bold text-slate-300">هیچ مقاله‌ای با این مشخصات یافت نشد.</p>
              <p className="text-slate-500">می‌توانید فیلترها را تغییر داده یا مقاله جدید ثبت کنید.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-800 pb-3">
                    <th className="pb-3 font-bold pr-2">عنوان مقاله و اسلاگ</th>
                    <th className="pb-3 font-bold">وضعیت</th>
                    <th className="pb-3 font-bold">کلمه کلیدی اصلی</th>
                    <th className="pb-3 font-bold text-center">تعداد کلمات</th>
                    <th className="pb-3 font-bold">تاریخ ایجاد</th>
                    <th className="pb-3 font-bold">آخرین بروزرسانی</th>
                    <th className="pb-3 font-bold text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredArticles.map((art) => (
                    <tr key={art.id || art.slug} className="hover:bg-slate-800/30 transition-colors group">
                      {/* Title & Slug */}
                      <td className="py-3.5 pr-2 max-w-xs sm:max-w-md">
                        <div className="font-bold text-white group-hover:text-[#E5C158] transition-colors line-clamp-1">
                          {art.title}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono truncate dir-ltr text-right mt-0.5">
                          /knowledge/{art.slug}
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3.5 whitespace-nowrap">
                        {art.status === 'published' ? (
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>منتشر شده</span>
                          </span>
                        ) : art.status === 'paused' ? (
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-700/50 text-slate-300 border border-slate-600 inline-flex items-center gap-1">
                            <span>⚪ متوقف شده</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-flex items-center gap-1">
                            <span>🟡 پیش‌نویس</span>
                          </span>
                        )}
                      </td>

                      {/* Primary Keyword */}
                      <td className="py-3.5 whitespace-nowrap">
                        {art.primaryKeyword ? (
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-700">
                            {art.primaryKeyword}
                          </span>
                        ) : (
                          <span className="text-slate-600 text-[11px]">—</span>
                        )}
                      </td>

                      {/* Word Count */}
                      <td className="py-3.5 text-center whitespace-nowrap font-mono text-slate-300">
                        {art.wordCount ? art.wordCount.toLocaleString('fa-IR') : '۰'}
                      </td>

                      {/* Created At */}
                      <td className="py-3.5 whitespace-nowrap text-slate-400 text-[11px]">
                        {art.createdAt ? new Date(art.createdAt).toLocaleDateString('fa-IR') : '—'}
                      </td>

                      {/* Updated At */}
                      <td className="py-3.5 whitespace-nowrap text-slate-400 text-[11px]">
                        {art.updatedAt ? new Date(art.updatedAt).toLocaleDateString('fa-IR') : '—'}
                      </td>

                      {/* Operations */}
                      <td className="py-3.5 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1.5">
                          {/* Preview Button */}
                          {art.status === 'published' ? (
                            <Link
                              href={`/knowledge/${art.slug}`}
                              target="_blank"
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                              title="مشاهده مقاله عمومی"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                            </Link>
                          ) : (
                            <button
                              onClick={() => setPreviewTarget(art)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                              title="پیش‌نمایش مدیریتی"
                            >
                              <Eye className="w-3.5 h-3.5 text-sky-400" />
                            </button>
                          )}

                          {/* Quick Publish / Pause Action */}
                          {art.status === 'published' ? (
                            <button
                              onClick={() => handleQuickStatusChange(art.slug, 'paused')}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-950/40 text-amber-400 hover:border-amber-500/30 border border-transparent transition-colors"
                              title="توقف انتشار"
                            >
                              <PauseCircle className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleQuickStatusChange(art.slug, 'published')}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-950/40 text-emerald-400 hover:border-emerald-500/30 border border-transparent transition-colors"
                              title="انتشار مقاله"
                            >
                              <Play className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {/* Edit Button */}
                          <button
                            onClick={() => handleOpenForm(art)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-[#E5C158]/20 text-[#E5C158] transition-colors"
                            title="ویرایش کامل"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>

                          {/* Delete Button */}
                          <button
                            onClick={() => setDeleteTarget(art)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/40 text-rose-400 transition-colors"
                            title="حذف مقاله"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* CREATE / EDIT ARTICLE MODAL */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md dir-rtl overflow-y-auto">
            <div className="bg-[#0D1424] border border-slate-700 rounded-3xl w-full max-w-5xl my-auto shadow-2xl flex flex-col max-h-[92vh] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Top Bar */}
              <div className="p-5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-[#070B15]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E5C158]/10 border border-[#E5C158]/30 flex items-center justify-center text-[#E5C158] font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-black text-white">
                      {editingArticle ? `ویرایش مقاله: ${editingArticle.title}` : 'ایجاد مقاله جدید'}
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      تنظیم کامل اطلاعات، محتوای متنی، تنظیمات SEO و ساختار داده Schema
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Modal Tabs */}
              <div className="px-5 pt-3 border-b border-slate-800 flex items-center gap-2 bg-[#0A0E1A] shrink-0 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setFormActiveTab('content')}
                  className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    formActiveTab === 'content'
                      ? 'bg-[#0D1424] text-[#E5C158] border-t-2 border-[#E5C158]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>محتوا و مشخصات اصلی</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormActiveTab('seo')}
                  className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    formActiveTab === 'seo'
                      ? 'bg-[#0D1424] text-[#E5C158] border-t-2 border-[#E5C158]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>بهینه‌سازی سئو (SEO)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormActiveTab('schema')}
                  className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    formActiveTab === 'schema'
                      ? 'bg-[#0D1424] text-[#E5C158] border-t-2 border-[#E5C158]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  <span>ساختار Schema (JSON-LD)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormActiveTab('preview')}
                  className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    formActiveTab === 'preview'
                      ? 'bg-[#0D1424] text-[#E5C158] border-t-2 border-[#E5C158]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>چک‌لیست و پیش‌نمایش</span>
                </button>
              </div>

              {/* Form Body Scrollable Area */}
              <form onSubmit={handleSaveArticle} className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* TAB 1: MAIN CONTENT */}
                {formActiveTab === 'content' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Title */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          عنوان اصلی مقاله <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formTitle}
                          onChange={(e) => handleTitleChange(e.target.value)}
                          placeholder="مثال: راهنمای جامع تنظیم لایحه دفاعیه دادگاه"
                          className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      {/* Slug */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-slate-300">
                            نامک / اسلاگ URL <span className="text-rose-500">*</span>
                          </label>
                          {!editingArticle && (
                            <button
                              type="button"
                              onClick={() => {
                                setFormAutoSlug(true);
                                setFormSlug(slugifyPersian(formTitle));
                              }}
                              className="text-[10px] text-[#E5C158] hover:underline"
                            >
                              تولید خودکار از عنوان
                            </button>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            value={formSlug}
                            onChange={(e) => {
                              setFormAutoSlug(false);
                              setFormSlug(e.target.value);
                            }}
                            placeholder="my-article-slug"
                            className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-2.5 text-xs text-white font-mono dir-ltr focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          آدرس عمومی: www.negaresh-yar.ir/knowledge/{formSlug || '...'}
                        </div>
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          وضعیت انتشار مقاله
                        </label>
                        <select
                          value={formStatus}
                          onChange={(e) => setFormStatus(e.target.value as ArticleStatus)}
                          className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="draft">🟡 پیش‌نویس (Draft)</option>
                          <option value="published">🟢 منتشر شده (Published)</option>
                          <option value="paused">⚪ متوقف شده (Paused)</option>
                        </select>
                      </div>
                    </div>

                    {/* Excerpt Summary */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        خلاصه / چکیده کوتاه مقاله
                      </label>
                      <textarea
                        rows={2}
                        value={formExcerpt}
                        onChange={(e) => setFormExcerpt(e.target.value)}
                        placeholder="خلاصه‌ای جذاب در ۲ تا ۳ جمله جهت استفاده در کارت‌های پایگاه دانش..."
                        className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors leading-relaxed"
                      />
                    </div>

                    {/* Article Content Editor */}
                    <div>
                      <ArticleCmsEditor
                        value={formContent}
                        onChange={setFormContent}
                        label="محتوای مقاله (ویرایشگر حرفه‌ای CMS)"
                        placeholder="محتوای مقاله را تایپ کنید و از نوار ابزار کامل بالا جهت انتخاب تیترها (H1-H3)، درج لینک، درج عکس با متن جایگزین، تغییر فونت و رنگ استفاده نمایید..."
                        minRows={16}
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: SEO OPTIMIZATION */}
                {formActiveTab === 'seo' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Meta Title */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-slate-300">
                            Meta Title (عنوان مرورگر و گوگل)
                          </label>
                          <span className={`text-[10px] font-mono ${formMetaTitle.length >= 40 && formMetaTitle.length <= 65 ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {formMetaTitle.length} / 60 کاراکتر
                          </span>
                        </div>
                        <input
                          type="text"
                          value={formMetaTitle}
                          onChange={(e) => setFormMetaTitle(e.target.value)}
                          placeholder="تایپ کنید... (مثال: راهنمای تنظیم لایحه دادگاه | نگارش یار)"
                          className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Primary Keyword */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          کلمه کلیدی اصلی (Primary Keyword)
                        </label>
                        <input
                          type="text"
                          value={formPrimaryKeyword}
                          onChange={(e) => setFormPrimaryKeyword(e.target.value)}
                          placeholder="مثال: تنظیم لایحه دفاعیه"
                          className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Meta Description */}
                      <div className="sm:col-span-2">
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-slate-300">
                            Meta Description (توضیحات گوگل)
                          </label>
                          <span className={`text-[10px] font-mono ${formMetaDescription.length >= 100 && formMetaDescription.length <= 165 ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {formMetaDescription.length} / 155 کاراکتر
                          </span>
                        </div>
                        <textarea
                          rows={3}
                          value={formMetaDescription}
                          onChange={(e) => setFormMetaDescription(e.target.value)}
                          placeholder="توضیح جامعی که در نتایج گوگل زیر عنوان مقاله نمایش داده می‌شود..."
                          className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors leading-relaxed"
                        />
                      </div>

                      {/* Keywords Array */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          کلمات کلیدی فرعی (با ویرگول یا کاما جدا کنید)
                        </label>
                        <input
                          type="text"
                          value={formKeywords}
                          onChange={(e) => setFormKeywords(e.target.value)}
                          placeholder="مثال: لایحه دادگاه، شکواییه، دادخواست حقوقی، نگارش آنلاین"
                          className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Google Search Result Preview Box */}
                    <div className="bg-[#070B15] border border-slate-800 p-4 rounded-2xl space-y-2">
                      <div className="text-xs font-bold text-slate-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                        <Search className="w-4 h-4 text-sky-400" />
                        <span>پیش‌نمایش شبیه‌سازی شده در نتایج گوگل (Google Search Preview)</span>
                      </div>

                      <div className="p-3 bg-white text-black rounded-xl dir-rtl font-sans space-y-1 shadow-inner">
                        <div className="text-[11px] text-[#202124] flex items-center gap-1">
                          <span className="font-bold">نگارش یار</span>
                          <span className="text-[#5f6368] font-mono text-[10px]">
                            https://www.negaresh-yar.ir › knowledge › {formSlug || 'slug'}
                          </span>
                        </div>
                        <div className="text-base text-[#1a0dab] hover:underline cursor-pointer font-medium leading-snug truncate">
                          {formMetaTitle || formTitle || 'عنوان مقاله شما در این قسمت قرار می‌گیرد'}
                        </div>
                        <div className="text-xs text-[#4d5156] line-clamp-2 leading-relaxed">
                          {formMetaDescription || formExcerpt || 'توضیحات متای مقاله در این بخش نمایش داده خواهد شد تا کاربر را به کلیک ترغیب نماید.'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: SCHEMA JSON-LD */}
                {formActiveTab === 'schema' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="block text-xs font-bold text-slate-300">
                          ساختار JSON-LD Schema (مخصوص موتورهای جستجو)
                        </label>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          می‌توانید کدهای FAQPage یا Article Schema را وارد کنید.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleValidateSchema}
                        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-[#E5C158] text-xs font-bold transition-colors border border-slate-700 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>اعتبارسنجی و مرتب‌سازی Schema</span>
                      </button>
                    </div>

                    <textarea
                      rows={12}
                      value={formSchema}
                      onChange={(e) => setFormSchema(e.target.value)}
                      placeholder={`{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "${formTitle || 'عنوان مقاله'}"\n}`}
                      className="w-full bg-[#070B15] border border-slate-700 focus:border-[#E5C158] rounded-xl p-4 text-xs text-[#E5C158] font-mono dir-ltr focus:outline-none transition-colors leading-relaxed"
                    />

                    {schemaValidationResult && (
                      <div
                        className={`p-3.5 rounded-xl border text-xs flex items-center gap-2 ${
                          schemaValidationResult.valid
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                        }`}
                      >
                        {schemaValidationResult.valid ? (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                        )}
                        <span>{schemaValidationResult.message}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 4: SEO CHECKLIST & PREVIEW */}
                {formActiveTab === 'preview' && (
                  <div className="space-y-6">
                    {/* SEO Checklist Card */}
                    <div className="bg-[#070B15] border border-slate-800 p-5 rounded-2xl space-y-4">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                        <Sparkles className="w-4 h-4 text-[#E5C158]" />
                        <span>چک‌لیست خودکار بهینه‌سازی سئو مقاله</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {seoChecklist.map((item) => (
                          <div
                            key={item.id}
                            className="bg-[#0D1424] border border-slate-800/80 p-3 rounded-xl flex items-start gap-3"
                          >
                            {item.status === 'good' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            ) : item.status === 'warning' ? (
                              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            )}
                            <div>
                              <div className="text-xs font-bold text-white">{item.label}</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">{item.hint}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Preview Card */}
                    <div className="bg-[#070B15] border border-slate-800 p-5 rounded-2xl space-y-3">
                      <h3 className="text-xs font-bold text-slate-300">پیش‌نمایش محتوای مقاله</h3>
                      <div className="p-4 bg-[#0D1424] border border-slate-800 rounded-xl space-y-3">
                        <h1 className="text-lg font-black text-white">{formTitle || 'بدون عنوان'}</h1>
                        {formExcerpt && <p className="text-xs text-slate-400 leading-relaxed italic">{formExcerpt}</p>}
                        <hr className="border-slate-800" />
                        <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed font-sans">
                          {formContent ? formContent.slice(0, 500) + (formContent.length > 500 ? '...' : '') : 'بدون محتوا'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Controls inside Form */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 sticky bottom-0 bg-[#0D1424] p-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                  >
                    انصراف
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-[#070B15] font-black text-xs hover:opacity-95 transition-opacity shadow-[0_0_20px_rgba(229,193,88,0.25)] flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSaving ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#070B15] border-t-transparent rounded-full animate-spin" />
                          <span>در حال ذخیره...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{editingArticle ? 'ثبت تغییرات مقاله' : 'ایجاد و ذخیره مقاله'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* DELETE CONFIRMATION MODAL */}
        {deleteTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md dir-rtl">
            <div className="bg-[#0D1424] border border-slate-700 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
                <Trash2 className="w-6 h-6" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-base font-black text-white">حذف مقاله از سامانه</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  آیا مطمئن هستید که می‌خواهید مقاله{' '}
                  <strong className="text-white">«{deleteTarget.title}»</strong> را حذف کنید؟ این عملیات قابل بازگشت نیست.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteTarget(null)}
                  disabled={isDeleting}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                >
                  انصراف
                </button>
                <button
                  type="button"
                  onClick={handleDeleteArticle}
                  disabled={isDeleting}
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isDeleting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>بله، حذف شود</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADMIN PREVIEW MODAL */}
        {previewTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md dir-rtl">
            <div className="bg-[#0D1424] border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-[#070B15]">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#E5C158]" />
                  <span className="text-xs font-bold text-white">پیش‌نمایش مدیریتی مقاله</span>
                </div>
                <button
                  onClick={() => setPreviewTarget(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-200">
                <div className="space-y-1">
                  <div className="text-[10px] text-[#E5C158] font-bold">{previewTarget.category || 'پایگاه دانش'}</div>
                  <h1 className="text-lg font-black text-white">{previewTarget.title}</h1>
                  <div className="text-[10px] text-slate-500 font-mono">/knowledge/{previewTarget.slug}</div>
                </div>

                {previewTarget.excerpt && (
                  <div className="p-3 bg-[#070B15] border border-slate-800 rounded-xl text-slate-300 italic">
                    {previewTarget.excerpt}
                  </div>
                )}

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="font-bold text-white">متن مقاله:</div>
                  <div className="whitespace-pre-wrap leading-relaxed font-sans text-slate-300">
                    {previewTarget.content || 'بدون محتوا'}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-800 bg-[#070B15] flex items-center justify-end">
                <button
                  onClick={() => setPreviewTarget(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
