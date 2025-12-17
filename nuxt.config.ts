// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

  // Static site generation for GitHub Pages
  ssr: true,
  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false
    }
  }

  // If deploying to https://<username>.github.io/<repo-name>/
  // app: {
  //   baseURL: '/<repo-name>/'
  // }
})