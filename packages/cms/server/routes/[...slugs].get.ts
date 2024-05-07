import { type Page, pages } from '~/data/content'

export default defineEventHandler((event) => {
  const name = `/${getRouterParam(event, 'slugs')}`

  const page: Page | undefined = pages.find(page => page.route === name)

  if (!page) {
    throw createError({
      status: 404,
      message: 'Page not found',
    })
  }

  console.log(`Serving page: ${page.route}`)

  return page.content
})
