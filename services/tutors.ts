import { supabase } from '@/lib/supabase'
import type { Tutor } from '@/types/tutor'

export async function getTutors(): Promise<Tutor[]> {
  if (!supabase) return []
  const { data } = await supabase.from('tutors').select('*').order('created_at', { ascending: false })
  return data ?? []
}

export async function createTutor(tutor: Omit<Tutor, 'id' | 'created_at'>) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('tutors').insert(tutor)
  return { error }
}

export async function updateTutor(id: string, tutor: Partial<Tutor>) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('tutors').update(tutor).eq('id', id)
  return { error }
}

export async function deleteTutor(id: string) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('tutors').delete().eq('id', id)
  return { error }
}

export async function uploadTutorPhoto(file: File): Promise<string | null> {
  if (!supabase) return null
  const ext = file.name.split('.').pop()
  const path = `tutors/${Date.now()}.${ext}`
  const { error: uploadError } = await supabase.storage.from('trinity-assets').upload(path, file)
  if (uploadError) throw uploadError
  const { data } = supabase.storage.from('trinity-assets').getPublicUrl(path)
  return data.publicUrl
}
