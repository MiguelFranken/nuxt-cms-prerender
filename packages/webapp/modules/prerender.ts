import { defineNuxtModule } from 'nuxt/kit'
import { ofetch } from "ofetch";

type SiteTree = string[]

export default defineNuxtModule({
  meta: {
    name: 'prerender'
  },
  hooks: {
    'prerender:routes': async ({ routes }) => {
      const sitetree = await ofetch<SiteTree>('http://localhost:4000/sitetree')

      sitetree.forEach((slug: string) => {
        console.log(`Adding ${slug} to prerender routes...`)
        routes.add(slug)
      })
    }
  }
})
