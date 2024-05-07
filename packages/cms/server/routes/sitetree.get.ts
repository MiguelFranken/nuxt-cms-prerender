type SiteTree = string[]

export default eventHandler((event): SiteTree => {
  return ['/', '/hotels', '/hotels/cologne', '/hotels/berlin'];
});
