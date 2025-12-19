// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-studio',
    '@nuxtjs/mcp-toolkit'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    server: {
      allowedHosts: ['devserver-main--ephemeral-cocada-5d81cd.netlify.app']
    }
  },

  // Netlify deployment with SSR (required for Nuxt Studio)
  ssr: true,
  nitro: {
    preset: 'netlify'
  },

  // Nuxt Studio configuration
  studio: {
    repository: {
      provider: 'github',
      owner: 'Lamartio',
      repo: 'moinhos',
      branch: 'main'
    }
  }
})