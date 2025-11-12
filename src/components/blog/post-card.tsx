"use client";

import {
	PreviewCard,
	PreviewCardPanel,
	PreviewCardTrigger,
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
					"group relative flex min-h-[260px] flex-col justify-between rounded-3xl border border-emerald-500/40 bg-gradient-to-br p-6 text-left text-emerald-50 shadow-[0_25px_45px_-30px_rgba(8,64,36,0.9)] transition hover:-translate-y-1",
					post.coverGradient,
				)}
			>
				<div className="space-y-3">
					<p className="text-sm font-semibold tracking-wide text-emerald-100/80">
						{post.category}
					</p>
					<h3 className="text-2xl font-semibold leading-snug text-emerald-50">
						{post.title}
					</h3>
					<p className="text-base text-emerald-50/90">{post.excerpt}</p>
				</div>
				<div className="flex items-center justify-between pt-6 text-sm font-medium text-emerald-100/80">
					<span>{post.readingTime}</span>
					<span className="flex items-center gap-2">
						<span className="text-xs text-emerald-200/80">保存</span>
						{post.stats.saves.toLocaleString()}
					</span>
				</div>
			</PreviewCardTrigger>
			<PreviewCardPanel className="w-72 text-sm text-left">
				<p className="text-xs font-semibold text-emerald-300">概要</p>
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
