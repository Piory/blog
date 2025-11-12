import Link from "next/link";

type SiteHeaderProps = {
	categories: string[];
};

export function SiteHeader({ categories }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
				<div>
					<Link href="/" className="text-lg font-semibold tracking-tight">
						Slow Signal
					</Link>
					<p className="text-sm text-muted-foreground">
						Stories on motion-first editorial craft
					</p>
				</div>
				<div className="hidden items-center gap-6 md:flex">
					{categories.map((category) => (
						<button
							type="button"
							key={category}
							className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
						>
							{category}
						</button>
					))}
					<button
						type="button"
						className="rounded-full border border-border/80 px-4 py-2 text-sm font-medium shadow-sm transition hover:border-primary hover:text-primary"
					>
						Subscribe
					</button>
				</div>
			</div>
		</header>
	);
}
