export function normalizePhoneNumber(phone: string): string {
  if (!phone) return '';

  // Convert Persian/Arabic digits to English digits
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
  let cleaned = phone.toString().trim();

  for (let i = 0; i < 10; i++) {
    cleaned = cleaned.replace(new RegExp(persianDigits[i], 'g'), i.toString());
    cleaned = cleaned.replace(new RegExp(arabicDigits[i], 'g'), i.toString());
  }

  // Remove non-digit chars
  cleaned = cleaned.replace(/\D/g, '');

  if (cleaned.startsWith('98') && cleaned.length > 10) {
    cleaned = '0' + cleaned.slice(2);
  } else if (cleaned.length === 10 && cleaned.startsWith('9')) {
    cleaned = '0' + cleaned;
  }

  return cleaned;
}
