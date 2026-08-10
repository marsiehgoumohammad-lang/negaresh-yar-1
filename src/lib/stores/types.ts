export interface InvoiceItem {
  id: string;
  serviceId?: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export type InvoiceStatus = 'unpaid' | 'paid' | 'cancelled';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  issueDate: string; // e.g., '1403/11/19' or '2026-08-08'
  customerName: string;
  customerPhone: string; // Normalized 09...
  items: InvoiceItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: InvoiceStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string; // Normalized phone number (e.g. 09915147789)
  originalPhone: string;
  totalInvoicesCount: number;
  totalBilledAmount: number;
  totalPaidAmount: number;
  totalUnpaidAmount: number;
  lastInvoiceDate: string;
  lastInvoiceNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  defaultPrice: number;
  description: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SearchConsoleRow {
  query?: string;
  page?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface SearchConsoleReport {
  id: string;
  title: string;
  periodStart: string;
  periodEnd: string;
  uploadedAt: string;
  filename: string;
  totalClicks: number;
  totalImpressions: number;
  avgCtr: number;
  avgPosition: number;
  queries: SearchConsoleRow[];
  pages: SearchConsoleRow[];
}

export interface AnalysisOpportunity {
  type: 'high_impressions_low_ctr' | 'near_page_one' | 'rapid_growth' | 'declining';
  item: string;
  metricLabel: string;
  explanation: string;
}

export interface BusinessSettings {
  companyName: string;
  logoUrl: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  invoicePrefix: string;
  nextInvoiceNumber: number;
  currency: string;
  invoiceTitle: string;
  headerSubtitle?: string;
  invoiceFooterText: string;
  invoiceDescription?: string;
  paymentGatewayUrl?: string;
  geminiApiKey?: string;
  openaiApiKey?: string;
  activeAiProvider?: 'auto' | 'gemini' | 'openai';
}

export type ArticleStatus = 'draft' | 'published' | 'paused';

export interface Article {
  id: string;
  title: string;
  slug: string;
  status: ArticleStatus;
  excerpt?: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  primaryKeyword?: string;
  schema?: string;
  wordCount?: number;
  category?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}
