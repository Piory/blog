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
					<p className="text-sm font-semibold tracking-tight text-emerald-300">
						最新アップデート
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-emerald-50">
						新着フィールドノート
					</h2>
				</div>
				<p className="text-sm text-emerald-200/70">
					今期は全{posts.length}本の読みものを公開予定です。
				</p>
			</div>
			<PostGrid posts={posts} />
		</section>
	);
}
