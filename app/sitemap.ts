import type { MetadataRoute } from 'next'
import { projects } from '@/lib/content'
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://kic.co.tz'; return ['', '/about', '/strategy', '/portfolio', '/contact', ...projects.map(p => `/portfolio/${p.slug}`)].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '' ? 1 : .8 })) }
