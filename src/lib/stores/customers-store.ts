import fs from 'fs';
import path from 'path';
import { Customer, Invoice } from './types';
import { normalizePhoneNumber } from '../utils/phone';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'customers.json');

export function getCustomers(): Customer[] {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data) as Customer[];
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading customers file:', err);
  }
  return [];
}

export function syncCustomersFromInvoices(invoices: Invoice[]): Customer[] {
  const customerMap = new Map<string, Customer>();

  // Sort invoices by date ascending so latest invoice updates name & dates
  const sorted = [...invoices].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  for (const inv of sorted) {
    const normPhone = normalizePhoneNumber(inv.customerPhone) || inv.customerPhone.trim();
    if (!normPhone) continue;

    const existing = customerMap.get(normPhone) || {
      id: `cust-${normPhone}`,
      name: inv.customerName || 'مشتری بدون نام',
      phone: normPhone,
      originalPhone: inv.customerPhone,
      totalInvoicesCount: 0,
      totalBilledAmount: 0,
      totalPaidAmount: 0,
      totalUnpaidAmount: 0,
      lastInvoiceDate: inv.issueDate || inv.createdAt,
      lastInvoiceNumber: inv.invoiceNumber,
      createdAt: inv.createdAt,
      updatedAt: inv.updatedAt,
    };

    // Update name to latest non-empty name
    if (inv.customerName && inv.customerName.trim()) {
      existing.name = inv.customerName.trim();
    }
    existing.originalPhone = inv.customerPhone;
    existing.lastInvoiceDate = inv.issueDate || inv.createdAt;
    existing.lastInvoiceNumber = inv.invoiceNumber;
    existing.updatedAt = inv.updatedAt;

    if (inv.status !== 'cancelled') {
      existing.totalInvoicesCount += 1;
      existing.totalBilledAmount += inv.total;

      if (inv.status === 'paid') {
        existing.totalPaidAmount += inv.total;
      } else if (inv.status === 'unpaid') {
        existing.totalUnpaidAmount += inv.total;
      }
    }

    customerMap.set(normPhone, existing);
  }

  const result = Array.from(customerMap.values()).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(FILE_PATH, JSON.stringify(result, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving customers file:', err);
  }

  return result;
}
