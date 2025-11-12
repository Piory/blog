import type { Post } from "@/data/posts";
import { PostGrid } from "./post-grid";

type LatestSectionProps = {
	posts: Post[];
};

export function LatestSection({ posts }: LatestSectionProps) {
	return (
		<section className="space-y-6">
			<div className="flex flex-wrap items-end justify-between gap-4">
				<div>
					<p className="text-sm font-semibold uppercase tracking-tight text-primary">
						Latest drops
					</p>
					<h2 className="text-3xl font-semibold tracking-tight">Fresh posts</h2>
				</div>
				<p className="text-sm text-muted-foreground">
					{posts.length} essays to read this quarter.
				</p>
			</div>
			<PostGrid posts={posts} />
		</section>
	);
}
