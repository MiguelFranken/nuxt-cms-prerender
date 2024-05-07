export interface PageContent {
  title: string
  body: string

}

export interface Page {
  route: string
  content: PageContent
}

export type Pages = Page[]

export type SiteTree = string[]
