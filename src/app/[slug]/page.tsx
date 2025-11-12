import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";
import { PostGrid } from "@/components/blog/post-grid";
import { SiteHeader } from "@/components/blog/site-header";
import { categories, getPostBySlug, posts } from "@/data/posts";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) {
		return {
			title: "スローシグナル",
		};
	}

	return {
		title: `${post.title} — スローシグナル`,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
		},
	};
}

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
	dateStyle: "long",
});

export default async function PostDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();

	const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<SiteHeader categories={categories} />
			<main className="mx-auto w-full max-w-5xl px-4 py-10 md:px-8 lg:px-12">
				<Link
					href="/"
					className="text-sm font-medium text-emerald-200/70 transition hover:text-emerald-200"
				>
					← 記事一覧に戻る
				</Link>
				<article className="mt-8 space-y-12">
					<section className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-black/70 p-8 shadow-[0_40px_80px_-60px_rgba(5,60,34,1)]">
						<div className="absolute inset-0 -z-10 opacity-60">
							<GradientBackground className="blur-3xl" />
						</div>
						<div className="space-y-6">
							<div className="inline-flex flex-wrap items-center gap-3 text-sm text-emerald-100/80">
								<span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold">
									{post.category}
								</span>
								<span>{dateFormatter.format(new Date(post.publishedAt))}</span>
								<span>•</span>
								<span>{post.readingTime}</span>
							</div>
							<div className="space-y-4">
								<h1 className="text-4xl font-semibold leading-tight tracking-tight text-emerald-50 sm:text-5xl">
									{post.title}
								</h1>
								<p className="text-lg text-emerald-100/90 sm:text-xl">
									{post.excerpt}
								</p>
							</div>
							<div className="flex flex-wrap items-center gap-4 text-sm text-emerald-100/80">
								<div>
									<p className="text-xs tracking-wide text-emerald-200/70">
										執筆 / 監修
									</p>
									<p className="font-medium">{post.author.name}</p>
									<p className="text-emerald-200/70">{post.author.role}</p>
								</div>
								<div>
									<p className="text-xs tracking-wide text-emerald-200/70">
										反響メモ
									</p>
									<p className="font-semibold">
										保存 {post.stats.saves.toLocaleString()} 件 / 議論{" "}
										{post.stats.discussions} 件
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="space-y-8 px-2 text-lg leading-relaxed text-emerald-100/80 sm:px-4">
						{post.body.map((paragraph) => (
							<p
								key={`${post.slug}-${paragraph.slice(0, 24)}`}
								className="text-emerald-50/90"
							>
								{paragraph}
							</p>
						))}
						<div className="flex flex-wrap gap-3 pt-2">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-emerald-400/30 px-4 py-1 text-sm font-medium text-emerald-100"
								>
									#{tag}
								</span>
							))}
						</div>
					</section>

					{related.length > 0 && (
						<section className="space-y-4">
							<div className="flex items-center justify-between">
								<h2 className="text-2xl font-semibold text-emerald-50">
									関連フィールドノート
								</h2>
								<Link
									href="/"
									className="text-sm font-medium text-emerald-200 hover:underline"
								>
									記事一覧を見る
								</Link>
							</div>
							<PostGrid posts={related} />
						</section>
					)}
				</article>
			</main>
		</div>
	);
}
