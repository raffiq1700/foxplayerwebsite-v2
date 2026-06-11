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

