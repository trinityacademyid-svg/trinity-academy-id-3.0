import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const shouldWarn = typeof window !== 'undefined' || process.env.NODE_ENV !== 'production'

if (!supabaseUrl && shouldWarn) {
  console.warn('Missing env: NEXT_PUBLIC_SUPABASE_URL — Supabase features will not work.')
}
if (!supabaseAnonKey && shouldWarn) {
  console.warn('Missing env: NEXT_PUBLIC_SUPABASE_ANON_KEY — Supabase features will not work.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null


