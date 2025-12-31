// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    // 'nuxt-studio',
    // '@nuxtjs/mcp-toolkit'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    server: {
      allowedHosts: [
        'ephemeral-cocada-5d81cd.netlify.app',
        '.ephemeral-cocada-5d81cd.netlify.app'
      ]
    }
  },

  // Netlify deployment with SSR (required for Nuxt Studio)
  ssr: true,
  nitro: {
    preset: 'netlify'
  },

  // Nuxt Studio configuration
  // studio: {
  //   repository: {
  //     provider: 'github',
  //     owner: 'Lamartio',
  //     repo: 'moinhos',
  //     branch: 'main'
  //   }
  // }

  // Image optimization
  image: {
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  }
})