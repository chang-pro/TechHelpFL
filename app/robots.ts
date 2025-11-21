import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/pomelli', // Disallow the submission page if it's internal/utility
        },
        sitemap: 'https://techhelpflorida.com/sitemap.xml',
    }
}
