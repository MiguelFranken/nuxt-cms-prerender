interface Page {
  route: string
  title: string
  body: string
}

type Pages = Page[]

export const pages: Pages = [
  {
    route: '/',
    title: 'Home',
    body: 'Welcome to our site',
  },
  {
    route: '/about',
    title: 'About Us',
    body: 'We are the best',
  },
  {
    route: '/contact',
    title: 'Contact Us',
    body: 'Call us at 555-5555',
  },
  {
    route: '/hotels',
    title: 'Our Hotels',
    body: 'Stay with us and enjoy the best service',
  },
  {
    route: '/hotels/cologne',
    title: 'Our Hotel in Cologne',
    body: 'Stay with us in Cologne',
  },
  {
    route: '/hotels/berlin',
    title: 'Our Hotel in Berlin',
    body: 'Stay with us in Berlin',
  },
]
