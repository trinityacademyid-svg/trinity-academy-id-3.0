export interface Tutor {
  id: number
  name: string
  role: string
  jenjang: string | null
  bio: string | null
  mapel: string[]
  photo_url: string | null
  active: boolean
  created_at: string
}
