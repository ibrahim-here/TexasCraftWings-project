// Supabase integration - commented out until credentials are configured
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// // Only create client if both URL and key are provided and valid
// const hasValidCredentials = supabaseUrl && 
//                            supabaseAnonKey && 
//                            supabaseUrl.startsWith('http') && 
//                            supabaseAnonKey.length > 20

// export const supabase = hasValidCredentials 
//   ? createClient(supabaseUrl, supabaseAnonKey)
//   : null

export const supabase = null

