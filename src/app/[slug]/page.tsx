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
			title: "Slow Signal",
		};
	}

	return {
		title: `${post.title} — Slow Signal`,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
		},
	};
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
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
					className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
				>
					← Back to stories
				</Link>
				<article className="mt-8 space-y-12">
					<section className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-8 shadow-2xl">
						<div className="absolute inset-0 -z-10 opacity-60">
							<GradientBackground className="blur-3xl" />
						</div>
						<div className="space-y-6">
							<div className="inline-flex items-center gap-3 text-sm text-foreground/80">
								<span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
									{post.category}
								</span>
								<span>{dateFormatter.format(new Date(post.publishedAt))}</span>
								<span>•</span>
								<span>{post.readingTime}</span>
							</div>
							<div className="space-y-4">
								<h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
									{post.title}
								</h1>
								<p className="text-lg text-white/90 sm:text-xl">
									{post.excerpt}
								</p>
							</div>
							<div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
								<div>
									<p className="text-xs uppercase tracking-wide text-white/60">
										Author
									</p>
									<p className="font-medium">{post.author.name}</p>
									<p className="text-white/70">{post.author.role}</p>
								</div>
								<div>
									<p className="text-xs uppercase tracking-wide text-white/60">
										Save rituals
									</p>
									<p className="font-semibold">
										{post.stats.saves.toLocaleString()} saves ·{" "}
										{post.stats.discussions} discussions
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground">
						{post.body.map((paragraph) => (
							<p
								key={`${post.slug}-${paragraph.slice(0, 24)}`}
								className="text-foreground/90"
							>
								{paragraph}
							</p>
						))}
						<div className="flex flex-wrap gap-3 pt-2">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-border/70 px-4 py-1 text-sm font-medium"
								>
									#{tag}
								</span>
							))}
						</div>
					</section>

					{related.length > 0 && (
						<section className="space-y-4">
							<div className="flex items-center justify-between">
								<h2 className="text-2xl font-semibold">Related field notes</h2>
								<Link
									href="/"
									className="text-sm font-medium text-primary hover:underline"
								>
									View all stories
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
