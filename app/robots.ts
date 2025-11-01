import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coderscafetech.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/', '/_next/', '/static/'],
        crawlDelay: 0,
      },
      // Allow AI/LLM crawlers (important for AI-powered search)
      {
        userAgent: [
          'GPTBot',           // OpenAI ChatGPT
          'ChatGPT-User',     // OpenAI ChatGPT user agent
          'Google-Extended',  // Google Bard/Gemini
          'anthropic-ai',     // Anthropic Claude
          'Claude-Web',       // Anthropic Claude web crawler
          'cohere-ai',        // Cohere AI
          'PerplexityBot',    // Perplexity AI
          'YouBot',           // You.com
        ],
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/'],
        crawlDelay: 1,
      },
      // Explicitly allow Google's standard crawler
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/'],
        crawlDelay: 0,
      },
      // Explicitly allow Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/'],
        crawlDelay: 0,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
