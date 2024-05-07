import { pages } from '~/data/content'

type SiteTree = string[]

export default eventHandler((): SiteTree => {
  console.log('Serving site tree')

  return pages.map(page => page.route)
})
