import type { Post } from "@/data/posts";
import { PostCard } from "./post-card";

type FeaturedSectionProps = {
  posts: Post[];
};

export function FeaturedSection({ posts }: FeaturedSectionProps) {
  if (!posts.length) return null;

  const [lead, ...rest] = posts;

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-tight text-primary">
            Featured research
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Editor picks</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Hover for story notes powered by AnimateUI preview cards.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <PostCard post={lead} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
