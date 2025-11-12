"use client";

import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPanel,
} from "@/components/animate-ui/components/base/preview-card";
import type { Post } from "@/data/posts";
import { cn } from "@/lib/utils";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <PreviewCard>
      <PreviewCardTrigger
        href={`/${post.slug}`}
        className={cn(
          "group relative flex min-h-[260px] flex-col justify-between rounded-3xl border border-border/60 bg-gradient-to-br p-6 text-left shadow-lg transition hover:-translate-y-1",
          post.coverGradient,
        )}
      >
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            {post.category}
          </p>
          <h3 className="text-2xl font-semibold leading-snug text-white">
            {post.title}
          </h3>
          <p className="text-base text-white/90">{post.excerpt}</p>
        </div>
        <div className="flex items-center justify-between pt-6 text-sm font-medium text-white/80">
          <span>{post.readingTime}</span>
          <span className="flex items-center gap-2">
            <span className="text-xs uppercase text-white/70">Saves</span>
            {post.stats.saves.toLocaleString()}
          </span>
        </div>
      </PreviewCardTrigger>
      <PreviewCardPanel className="w-72 text-sm text-left">
        <p className="text-xs uppercase text-muted-foreground">Highlights</p>
        <div className="mt-3 space-y-2 text-foreground">
          <p className="font-semibold">{post.title}</p>
          <p className="text-sm text-muted-foreground">{post.publishedAt}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted/60 px-3 py-1 text-xs font-semibold text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </PreviewCardPanel>
    </PreviewCard>
  );
}
