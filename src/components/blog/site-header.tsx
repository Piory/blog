import Link from "next/link";

type SiteHeaderProps = {
	categories: string[];
};

export function SiteHeader({ categories }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-40 border-b border-emerald-400/10 bg-black/70 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
				<div>
					<Link
						href="/"
						className="text-lg font-semibold tracking-tight text-emerald-200"
					>
						スローシグナル
					</Link>
					<p className="text-sm text-emerald-200/70">
						モーションで語る編集スタジオのログ
					</p>
				</div>
				<div className="hidden items-center gap-6 md:flex">
					{categories.map((category) => (
						<button
							type="button"
							key={category}
							className="text-sm font-medium text-emerald-100/70 transition hover:text-emerald-100"
						>
							{category}
						</button>
					))}
					<button
						type="button"
						className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-300"
					>
						購読する
					</button>
				</div>
			</div>
		</header>
	);
}
