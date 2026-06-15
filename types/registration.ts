import type { RegistrationStatus } from './common'

export interface Registration {
  id: number
  name: string
  grade: string | null
  subject: string | null
  location: string | null
  phone: string | null
  notes: string | null
  status: RegistrationStatus
  created_at: string
}
