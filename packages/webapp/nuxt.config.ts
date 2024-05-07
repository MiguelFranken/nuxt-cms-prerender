// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/hotels/cologne': { prerender: true },
  },
  hooks: {
    'prerender:routes': async ({ routes }) => {
      routes.add('/hotels/berlin')
    }
  }
})
