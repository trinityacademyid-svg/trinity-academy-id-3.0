export type RegistrationStatus = 'baru' | 'diproses' | 'selesai' | 'batal'

export type StatusBadge = {
  bg: string
  text: string
}

export const STATUS_COLORS: Record<RegistrationStatus, StatusBadge> = {
  baru:      { bg: '#dbeafe', text: '#1d4ed8' },
  diproses:  { bg: '#fef9c3', text: '#a16207' },
  selesai:   { bg: '#d1fae5', text: '#065f46' },
  batal:     { bg: '#fee2e2', text: '#991b1b' },
}
