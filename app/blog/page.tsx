import { getAllPosts } from "@/lib/mdx";
import { Newsletter } from "@/components/blog/Newsletter";
import { BlogList } from "@/components/blog/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy | Foxplayer Algo Technologies",
  description: "Master algorithmic trading, market psychology, and stock market automation with our premium guides built for the modern Indian trader.",
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const featuredPost =
    allPosts.find((p) => p.slug === "what-is-a-demat-account-beginner-guide") ||
    allPosts[0];

  return (
    <div className="min-h-screen pt-48 bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <BlogList posts={allPosts} featuredPost={featuredPost} />

      <Newsletter />
    </div>
  );
}
