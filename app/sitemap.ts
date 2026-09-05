import type { MetadataRoute } from 'next'
import { FEATURES } from '@/lib/content'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/features',
    '/how-it-works',
    '/for-teams',
    '/pricing',
    '/faq',
    '/privacy',
    '/terms',
  ]

  const featureRoutes = FEATURES.map((f) => `/features/${f.slug}`)

  return [...staticRoutes, ...featureRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
