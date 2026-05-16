import { MetadataRoute } from 'next';
import prisma from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.foxplayer.co.in';

  // Fetch dynamic slugs
  const articles = await prisma.academyArticle.findMany({
    where: { status: 'published' },
    select: { slug: true, updatedAt: true }
  });

  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true }
  });

  const staticPages = [
    '',
    '/academy',
    '/blog',
    '/about',
    '/contact',
    '/faq',
    '/pricing',
    '/disclaimer',
    '/terms',
    '/privacy-policy',
    '/refund-policy',
    '/services/algorithmic-trading-software-development',
    '/services/shoonya-api-trading-software',
    '/services/zerodha-kite-connect-development',
    '/services/white-label-trading-platform',
    '/services/backtesting-engine-development',
    '/services/forex-trading-software-development',
    '/services/options-trading-automation',
    '/services/web-development',
    '/services/mobile-app-development',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
    ...articles.map(article => ({
      url: `${baseUrl}/academy/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  ];

  return sitemapEntries;
}
