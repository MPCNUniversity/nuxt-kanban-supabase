// nuxt.config.ts
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    // Nitro + Vite adjustments for Vercel deployment and ESM dependencies
    nitro: {
        preset: 'vercel',
        externals: {
            inline: ['@supabase/supabase-js']
        }
    },
    vite: {
        ssr: {
            noExternal: ['@supabase/supabase-js']
        }
    },
    runtimeConfig: {
        public: {
            supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
            supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
        }
    },
    css: [
// jouw globale Tailwind / CSS imports
        '~/assets/tailwind.css'
    ]
})
