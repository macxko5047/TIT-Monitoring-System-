import { createClient } from "@supabase/supabase-js";

const supabaseUrl: any = "https://lldzljxhukgbylauxnvo.supabase.co";
const supabaseKey: any =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZHpsanhodWtnYnlsYXV4bnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyOTkwMDIsImV4cCI6MTk4NTg3NTAwMn0.Lp4hg1lEBD7KYFckhxaG6NPGo5LSWngUBa37UDhkrNQ";
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);

export default supabase;
