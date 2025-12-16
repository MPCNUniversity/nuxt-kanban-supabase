// app/plugins/supabaseClient.js
import {createClient} from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const supabaseUrl = config.public.supabaseUrl;
    const supabaseAnonKey = config.public.supabaseAnonKey;
    if (!supabaseUrl || !supabaseAnonKey) {
        console.error("Supabase configuratie ontbreekt in runtimeConfig.\nControleer je .env bestand: NUXT_PUBLIC_SUPABASE_URL en NUXT_PUBLIC_SUPABASE_ANON_KEY");
        return {
            provide: {
                supabase: null
            }
        };
    }
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    // Keep logging minimal to avoid leaking keys/URLs in logs
    if (process.env.NODE_ENV !== 'production') {
        console.info('Supabase client geïnitialiseerd (development)');
    }
    return {
        provide: {
            supabase
        }
    };
});