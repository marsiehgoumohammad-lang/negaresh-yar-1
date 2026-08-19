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
let cachedPublicClient: SupabaseClient | null = null;

export function isSupabaseConfigured(): boolean {
  const key = supabaseSecretKey || supabaseAnonKey;
  return Boolean(supabaseUrl && key && key.trim().length > 0 && !key.includes('placeholder'));
}

/**
 * Standard Supabase client (for client components & public operations)
 */
export const supabase = (function getPublicClient(): SupabaseClient {
  if (cachedPublicClient) {
    return cachedPublicClient;
  }
  const key = supabaseAnonKey || supabaseSecretKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy';
  cachedPublicClient = createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedPublicClient;
})();

/**
 * Admin Supabase client (for server-side API routes & stores to bypass RLS)
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (cachedAdminClient) {
    return cachedAdminClient;
  }
  const key = supabaseSecretKey || supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy';
  cachedAdminClient = createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedAdminClient;
}
