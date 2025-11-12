import type { Post } from "@/data/posts";
import { PostCard } from "./post-card";

type PostGridProps = {
  posts: Post[];
};

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
