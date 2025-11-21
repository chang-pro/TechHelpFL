import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://techhelpflorida.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/additional-services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Pomelli page is intentionally excluded if we want it private, 
        // but user asked for "fully optimized XML sitemaps for Google" generally.
        // However, for a submission page, it's often better to keep it out if it's internal tool-like.
        // Given the user said "maximize" SEO, I will include it but with lower priority if they want it public.
        // Re-reading: "Add a dedicated page where I can input or submit URLs for Pomelli." 
        // This sounds like an internal tool. I'll exclude it from sitemap to be safe, 
        // or include it if they want it indexed. 
        // The user said "maximize" SEO for the *business*. 
        // I'll stick to the main pages for the sitemap to avoid cluttering the index with utility pages.
    ]
}
