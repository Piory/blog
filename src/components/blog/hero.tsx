"use client";

import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";
import {
	RotatingText,
	RotatingTextContainer,
} from "@/components/animate-ui/primitives/texts/rotating";
import {
	TypingText,
	TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";
import { cn } from "@/lib/utils";

type HeroProps = {
	topics: string[];
	angles: string[];
};

export function Hero({ topics, angles }: HeroProps) {
	return (
		<section className="relative isolate overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-black/80 to-background/60 shadow-[0_20px_60px_-30px_rgba(6,64,37,0.9)]">
			<div className="absolute inset-0 -z-10 opacity-80">
				<GradientBackground className="blur-3xl" />
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-background" />
			</div>
			<div className="grid gap-10 px-6 py-16 md:grid-cols-[1.25fr_0.75fr] md:px-12 lg:px-16">
				<div className="space-y-8">
					<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-200 shadow-lg shadow-emerald-900/60">
						モーション特化の編集ラボ
					</div>
					<div className="space-y-6 text-balance">
						<h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance text-emerald-50 sm:text-5xl lg:text-6xl">
							スローシグナルは、チームが
							<span className="block bg-gradient-to-r from-emerald-200 via-lime-200 to-emerald-100 bg-clip-text text-transparent">
								意味のあるモーションを編み出すプロセスを記録するブログです。
							</span>
						</h1>
						<div className="text-lg text-emerald-200/80">
							編集者・デザイナー・エンジニアが、所作や儀式、計測の道具をどう整えて
							物語に魂を宿らせているのか。毎週、小さなモーションレシピを添えてお届けします。
						</div>
					</div>
					<div className="flex flex-wrap gap-3">
						<button
							type="button"
							className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/40 transition hover:-translate-y-0.5"
						>
							記事を読む
						</button>
						<button
							type="button"
							className="rounded-full border border-emerald-400/40 px-6 py-3 font-medium text-emerald-100 backdrop-blur"
						>
							週次ダイジェストを受け取る ↗
						</button>
					</div>
					<div className="flex flex-wrap items-center gap-3 text-sm text-foreground/80">
						<TypingText
							text={topics}
							loop
							duration={40}
							holdDelay={1600}
							className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 font-medium text-emerald-100 shadow-inner"
						>
							<span className="text-emerald-300/80">探求テーマ</span>
							<TypingTextCursor className="h-5 w-0.5 bg-primary" />
						</TypingText>
						<div className="text-emerald-200/70">毎週木曜更新</div>
					</div>
				</div>
				<div className="relative rounded-2xl border border-emerald-400/40 bg-black/60 p-6 shadow-xl shadow-emerald-900/50 backdrop-blur">
					<p className="text-sm font-semibold text-emerald-200/70">
						編集の視点
					</p>
					<RotatingTextContainer
						text={angles}
						duration={2200}
						className="mt-6 space-y-4 text-3xl font-semibold"
					>
						<RotatingText className="rounded-2xl bg-gradient-to-r from-white/80 to-white/30 px-4 py-3 text-balance text-lg leading-tight text-background shadow-lg" />
					</RotatingTextContainer>
					<div className="mt-10 grid gap-4 text-sm">
						{topics.slice(0, 3).map((topic) => (
							<div
								key={topic}
								className={cn(
									"flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-3 text-emerald-100",
								)}
							>
								<span>{topic}</span>
								<span className="text-xs text-emerald-300/70">
									最新フィールドノート
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
