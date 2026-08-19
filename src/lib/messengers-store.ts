import { MessengerConfig, DEFAULT_MESSENGERS } from './messengers-types';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/lib/supabase';

export type { MessengerConfig };
export { DEFAULT_MESSENGERS };

let inMemoryMessengers: MessengerConfig[] | null = null;

export async function getMessengersConfig(): Promise<MessengerConfig[]> {
  if (inMemoryMessengers && inMemoryMessengers.length > 0) {
    return inMemoryMessengers;
  }
  try {
    if (!isSupabaseConfigured()) {
      inMemoryMessengers = DEFAULT_MESSENGERS;
      return DEFAULT_MESSENGERS;
    }
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'messengers')
      .maybeSingle();

    if (!error && data?.value && Array.isArray(data.value)) {
      const sorted = (data.value as MessengerConfig[]).sort((a, b) => a.order - b.order);
      inMemoryMessengers = sorted;
      return sorted;
    }
  } catch (err) {
    console.warn('Error reading messengers from Supabase (fallback):', err);
  }
  inMemoryMessengers = DEFAULT_MESSENGERS;
  return DEFAULT_MESSENGERS;
}

export function getCachedMessengersConfig(): MessengerConfig[] {
  return inMemoryMessengers || DEFAULT_MESSENGERS;
}

export async function saveMessengersConfig(config: MessengerConfig[]): Promise<boolean> {
  const sorted = [...config].sort((a, b) => a.order - b.order);
  inMemoryMessengers = sorted;

  try {
    const supabase = getSupabaseAdmin();
    await supabase.from('site_settings').upsert({
      key: 'messengers',
      value: sorted,
      updated_at: new Date().toISOString(),
    });
    return true;
  } catch (err) {
    console.error('Error saving messengers to Supabase:', err);
    return true;
  }
}
