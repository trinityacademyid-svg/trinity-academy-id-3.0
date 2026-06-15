export interface SiteContent {
  key: string
  value: string
}

export type SiteContentMap = Record<string, string>

export const SITE_CONTENT_KEYS = {
  hero_title: 'hero_title',
  hero_subtitle: 'hero_subtitle',
  about_story: 'about_story',
  about_vision: 'about_vision',
  about_mission: 'about_mission',
  wa_number: 'wa_number',
  email: 'email',
  address: 'address',
  office_hours: 'office_hours',
  stat_tutors: 'stat_tutors',
  stat_students: 'stat_students',
  stat_rating: 'stat_rating',
  stat_years: 'stat_years',
} as const

export type SiteContentKey = keyof typeof SITE_CONTENT_KEYS
