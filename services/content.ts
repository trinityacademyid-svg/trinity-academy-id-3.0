import { supabase } from '@/lib/supabase'

export async function getSiteContent(): Promise<Record<string, string>> {
  if (!supabase) return {}
  const { data } = await supabase.from('site_content').select('*')
  const map: Record<string, string> = {}
  ;(data ?? []).forEach(row => { map[row.key] = row.value })
  return map
}

export async function upsertSiteContent(entries: { key: string; value: string }[]) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('site_content').upsert(entries, { onConflict: 'key' })
  return { error }
}
