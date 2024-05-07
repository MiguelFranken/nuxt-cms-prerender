import type { SiteTree } from '@one/types'
import { pages } from '~/data/content'

export default eventHandler((): SiteTree => {
  console.log('Serving site tree')

  return pages.map(page => page.route)
})
