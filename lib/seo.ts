export function generateSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Foxplayer Algo Technologies",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "INR"
    },
    "provider": {
      "@type": "Organization",
      "name": "Foxplayer Algo Technologies",
      "url": "https://foxplayer.in"
    }
  };
}

export function generateArticleSchema(post: { title: string; excerpt: string; author: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Foxplayer Algo Technologies"
    }
  };
}
