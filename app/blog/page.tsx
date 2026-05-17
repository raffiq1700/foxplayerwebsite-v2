import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore/lite";
import { Newsletter } from "@/components/blog/Newsletter";
import { BlogList } from "@/components/blog/BlogList";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | FoxPlayer Algo Technologies",
  description: "Master algorithmic trading, market psychology, and stock market automation with our premium guides built for the modern Indian trader.",
};

export default async function BlogPage() {
  let allPosts = [];
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    allPosts = querySnapshot.docs
      .map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: data.date?.toDate ? data.date.toDate() : new Date(),
        };
      })
      .filter((post: any) => post.published !== false);
      
    // Sort in JS
    allPosts.sort((a: any, b: any) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error("Blog listing error:", error);
  }

  const featuredPost = allPosts.length > 0 ? allPosts[0] : null;

  const safeParse = (str: string) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      return [];
    }
  };

  return (
    <div className="min-h-screen pt-48 bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <BlogList posts={allPosts.map((p: any) => ({
        ...p,
        date: p.date instanceof Date ? p.date.toISOString() : new Date().toISOString(),
        tags: p.tags ? (typeof p.tags === 'string' ? safeParse(p.tags) : p.tags) : []
      }))} featuredPost={featuredPost ? {
        ...featuredPost,
        date: featuredPost.date instanceof Date ? featuredPost.date.toISOString() : new Date().toISOString(),
        tags: featuredPost.tags ? (typeof featuredPost.tags === 'string' ? safeParse(featuredPost.tags) : featuredPost.tags) : []
      } : undefined} />

      <Newsletter />
    </div>
  );
}


