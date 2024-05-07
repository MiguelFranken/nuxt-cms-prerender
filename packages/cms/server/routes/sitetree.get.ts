import type { SiteTree } from '@one/types'
import { pages } from '~/data/content'

export default eventHandler((): SiteTree => {
  return pages.map(page => page.route)
})
