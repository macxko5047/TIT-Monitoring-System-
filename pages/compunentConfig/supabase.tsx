
import { createClient } from '@supabase/supabase-js'

const supabaseUrl:string = 'https://vgtgaezrhsndydtxwtjf.supabase.co'
const supabaseKey:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndGdhZXpyaHNuZHlkdHh3dGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwMjMyMzcsImV4cCI6MTk4NDU5OTIzN30.6PADXcVh8DTTzcX8tugK28NBWkuCKE3uqShd_Ge0En0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;