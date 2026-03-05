import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
