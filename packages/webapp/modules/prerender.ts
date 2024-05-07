import { defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'prerender'
  },
  setup (_, nuxt) {
    nuxt.hook('prerender:routes', async ({ routes }) => {
      console.log("Adding /hotels/berlin to prerender routes...")
      routes.add('/hotels/berlin')
    })
  }
})
