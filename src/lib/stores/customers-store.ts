import { Customer, Invoice } from './types';
import { normalizePhoneNumber } from '../utils/phone';
import { getInvoices } from './invoices-store';

let inMemoryCustomers: Customer[] = [];

export async function getCustomers(): Promise<Customer[]> {
  try {
    const invoices = await getInvoices();
    return syncCustomersFromInvoices(invoices);
  } catch (err) {
    console.error('Error in getCustomers():', err);
    return inMemoryCustomers;
  }
}

export function syncCustomersFromInvoices(invoices: Invoice[]): Customer[] {
  const customerMap = new Map<string, Customer>();

  // Sort invoices by date ascending so latest invoice updates name & dates
  const sorted = [...invoices].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  for (const inv of sorted) {
    const normPhone = normalizePhoneNumber(inv.customerPhone) || inv.customerPhone.trim();
    if (!normPhone) continue;

    const existing: Customer = customerMap.get(normPhone) || {
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

  inMemoryCustomers = result;
  return result;
}
