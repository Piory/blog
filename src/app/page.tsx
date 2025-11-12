import { FeaturedSection } from "@/components/blog/featured-section";
import { Hero } from "@/components/blog/hero";
import { LatestSection } from "@/components/blog/latest-section";
import { Newsletter } from "@/components/blog/newsletter";
import { SiteHeader } from "@/components/blog/site-header";
import {
  categories,
  editorialAngles,
  featuredPosts,
  heroTopics,
  latestPosts,
} from "@/data/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader categories={categories} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-12 md:px-8 lg:px-10">
        <Hero topics={heroTopics} angles={editorialAngles} />
        <FeaturedSection posts={featuredPosts} />
        <LatestSection posts={latestPosts} />
        <Newsletter />
      </main>
    </div>
  );
}
