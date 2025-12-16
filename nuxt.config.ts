// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
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
