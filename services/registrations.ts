import { supabase } from '@/lib/supabase'
import type { Registration } from '@/types/registration'

export async function getRegistrations(): Promise<Registration[]> {
  if (!supabase) return []
  const { data } = await supabase.from('registrations').select('*').order('created_at', { ascending: false })
  return data ?? []
}

export async function getRegistrationStats() {
  if (!supabase) return { total: 0, newToday: 0 }
  const today = new Date().toISOString().slice(0, 10)
  const [total, newToday] = await Promise.all([
    supabase.from('registrations').select('*', { count: 'exact', head: true }),
    supabase.from('registrations').select('*', { count: 'exact', head: true }).gte('created_at', today),
  ])
  return {
    total: total.count ?? 0,
    newToday: newToday.count ?? 0,
  }
}

export async function getRecentRegistrations(limit = 5): Promise<Registration[]> {
  if (!supabase) return []
  const { data } = await supabase.from('registrations').select('*').order('created_at', { ascending: false }).limit(limit)
  return data ?? []
}

export async function updateRegistrationStatus(id: string, status: string) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('registrations').update({ status }).eq('id', id)
  return { error }
}

export async function deleteRegistration(id: string) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('registrations').delete().eq('id', id)
  return { error }
}
