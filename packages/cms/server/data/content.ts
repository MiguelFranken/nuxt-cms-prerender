export interface PageContent {
  title: string
  body: string

}

export interface Page {
  route: string
  content: PageContent
}

type Pages = Page[]

export const pages: Pages = [
  {
    route: '/',
    content: {
      title: 'Home',
      body: 'Welcome to our site',
    },
  },
  {
    route: '/about',
    content: {
      title: 'About Us',
      body: 'We are the best',
    },
  },
  {
    route: '/contact',
    content: {
      title: 'Contact Us',
      body: 'Call us at 555-5555',
    },
  },
  {
    route: '/hotels',
    content: {
      title: 'Our Hotels',
      body: 'Stay with us and enjoy the best service',
    },
  },
  {
    route: '/hotels/cologne',
    content: {
      title: 'Our Hotel in Cologne',
      body: 'Stay with us in Cologne',
    },
  },
  {
    route: '/hotels/berlin',
    content: {
      title: 'Our Hotel in Berlin',
      body: 'Stay with us in Berlin',
    },
  },
]
