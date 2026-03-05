import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) {
      throw new Error('Supabase environment variables are not configured.')
    }
    _supabase = createClient(url, key)
  }
  return _supabase
}

export interface ApplicationRow {
  first_name: string
  last_name: string
  email: string
  phone?: string
  practice_name?: string
  specialty?: string
  locations?: number
  weekly_noshows?: string
  tier?: string
  timeline?: string
  how_heard?: string
  city_state?: string
  interested_automations?: string[]
  status?: string
}
