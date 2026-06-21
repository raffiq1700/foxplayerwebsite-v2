import { MetadataRoute } from 'next';
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.foxplayer.co.in';

  // Fetch dynamic slugs from Firestore
  let articles: { slug: string; updatedAt: Date }[] = [];
  try {
    const academyQuery = query(collection(db, "academy"), where("status", "==", "published"));
    const querySnapshot = await getDocs(academyQuery);
    articles = querySnapshot.docs.map(doc => ({
      slug: doc.data().slug,
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    }));
  } catch (e) {
    console.error("Sitemap academy error:", e);
  }

  let posts: { slug: string; updatedAt: Date }[] = [];
  try {
    const postsQuery = query(collection(db, "posts"), where("published", "==", true));
    const querySnapshot = await getDocs(postsQuery);
    posts = querySnapshot.docs.map(doc => ({
      slug: doc.data().slug,
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    }));
  } catch (e) {
    console.error("Sitemap posts error:", e);
  }

  const staticPages = [
    '',
    '/features',
    '/pricing',
    '/marketplace',
    '/academy',
    '/blog',
    '/about',
    '/contact',
    '/faq',
    '/careers',
    '/brokers',
    '/disclaimer',
    '/terms',
    '/privacy-policy',
    '/refund-policy',
    '/glossary',
    '/services/algorithmic-trading-software-development',
    '/services/shoonya-api-trading-software',
    '/services/zerodha-kite-connect-development',
    '/services/white-label-trading-platform',
    '/services/backtesting-algo-development',
    '/services/forex-trading-software-development',
    '/services/options-trading-automation',
    '/services/web-development',
    '/services/mobile-app-development',
    '/services/pms-software-development',
    '/services/ria-software-development',
    '/integrations/shoonya-api-algo-trading',
    '/integrations/aliceblue-algo-trading',
    '/compare/foxplayer-vs-streak',
    '/compare/foxplayer-vs-tradetron',
    '/execution-speed',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticPages.map(page => {
      let priority = 0.8;
      if (page === '') priority = 1.0;
      else if (page === '/features' || page === '/pricing') priority = 0.9;
      else if (page === '/marketplace' || page === '/blog') priority = 0.8;
      else if (page === '/academy' || page === '/faq') priority = 0.7;
      else if (page === '/about' || page === '/contact') priority = 0.6;
      else if (['/disclaimer', '/terms', '/privacy-policy', '/refund-policy', '/glossary'].includes(page)) priority = 0.3;
      else if (page.startsWith('/services/')) {
        if (['/services/web-development', '/services/mobile-app-development'].includes(page)) priority = 0.6;
        else priority = 0.8;
      } else if (page.startsWith('/integrations/') || page.startsWith('/compare/') || page === '/execution-speed') {
        priority = 0.8;
      }
      return {
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority,
      };
    }),
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

