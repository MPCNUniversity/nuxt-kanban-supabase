<script setup>
import { ref, onMounted } from 'vue'
import { useSupabase } from '~/composables/useSupabase'
const connectionStatus = ref('testen...')
const supabase = useSupabase()
onMounted(async () => {
  if (!supabase) {
    connectionStatus.value = 'Geen Supabase client beschikbaar'
    return
  }
  try {
    const res = await supabase.auth.getSession()
    const session = res?.data?.session ?? null
    const err = res?.error ?? null
    if (err) {
      connectionStatus.value = `Verbinding ok, maar auth error: ${err.message}`
    } else if (session) {
      connectionStatus.value = 'Supabase verbinding succesvol. Client is geïnitialiseerd en klaar voor gebruik.'
    } else {
      connectionStatus.value = 'Supabase verbinding ok — geen actieve sessie.'
    }
  } catch (err) {
    connectionStatus.value = `Fout: ${err?.message ?? err}`
  }
})
</script>
<template>
  <section class="space-y-3">
    <h1 class="text-3xl font-bold tracking-tight">
      Welkom in Nuxt 4 met Tailwind
    </h1>
    <p class="text-sm text-slate-200 max-w-2xl">
      Deze pagina is bereikbaar via de route / en gebruikt Tailwind-klassen
      voor layout en typografie.
      In de navigatie bovenaan kun je naar het Kanban board gaan.
    </p>
    <div class="mt-6 p-4 rounded-lg bg-slate-900 border border-slate-800">
      <h2 class="text-lg font-semibold mb-2">Supabase verbinding</h2>
      <p class="text-sm text-slate-300">{{ connectionStatus }}</p>
      <p class="text-xs text-slate-500 mt-2">
        Je kunt nu de Supabase client gebruiken in je stores en composables
        via
        <code class="text-indigo-400">useSupabase()</code>.
      </p>
    </div>
  </section>
</template>