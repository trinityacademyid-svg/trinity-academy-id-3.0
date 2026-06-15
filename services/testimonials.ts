import { supabase } from '@/lib/supabase'
import type { Testimonial } from '@/types/testimonial'

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!supabase) return []
  const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false })
  return data ?? []
}

export async function createTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at'>) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('testimonials').insert(testimonial)
  return { error }
}

export async function updateTestimonial(id: string, testimonial: Partial<Testimonial>) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('testimonials').update(testimonial).eq('id', id)
  return { error }
}

export async function deleteTestimonial(id: string) {
  if (!supabase) return { error: new Error('Supabase not configured') }
  const { error } = await supabase.from('testimonials').delete().eq('id', id)
  return { error }
}
