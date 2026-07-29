import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance = null

if (supabaseUrl && supabaseAnonKey) {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn(
    'Supabase environment variables are missing! Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
  )
  
  // Create a dummy mock client that returns empty/error results to prevent application crashes
  supabaseInstance = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: async () => ({ data: { user: null, session: null }, error: new Error('Supabase is not configured yet. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.') }),
      signInWithPassword: async () => ({ data: { user: null, session: null }, error: new Error('Supabase is not configured yet. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.') }),
      signOut: async () => ({ error: null }),
    }
  }
}

export const supabase = supabaseInstance

