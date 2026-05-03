import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

// Service role key must only be used on the server (route handlers / server components).
export const supabaseAdmin = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

