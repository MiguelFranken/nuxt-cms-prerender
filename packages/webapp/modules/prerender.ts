import { defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'prerender'
  },
  async setup (_, nuxt) {
    const response = await fetch('http://localhost:4000/sitetree') // returns an array
    const sitetree: string[] = await response.json()

    nuxt.hook('prerender:routes', async ({ routes }) => {
      sitetree.forEach((slug: string) => {
        console.log(`Adding ${slug} to prerender routes...`)
        routes.add(slug)
      })
    })
  }
})
