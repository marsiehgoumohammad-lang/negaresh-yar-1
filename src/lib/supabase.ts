import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://avbkbwaimvajwvbskjzf.supabase.co';

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  '';

const supabaseSecretKey =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  supabaseAnonKey;

let cachedAdminClient: SupabaseClient | null = null;

/**
 * Standard Supabase client (for client components & public operations)
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey || supabaseSecretKey);

/**
 * Admin Supabase client (for server-side API routes & stores to bypass RLS)
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (cachedAdminClient) {
    return cachedAdminClient;
  }
  const key = supabaseSecretKey || supabaseAnonKey;
  cachedAdminClient = createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedAdminClient;
}
