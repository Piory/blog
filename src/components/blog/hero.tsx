"use client";

import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";
import {
  TypingText,
  TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";
import {
  RotatingTextContainer,
  RotatingText,
} from "@/components/animate-ui/primitives/texts/rotating";
import { cn } from "@/lib/utils";

type HeroProps = {
  topics: string[];
  angles: string[];
};

export function Hero({ topics, angles }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 shadow-2xl">
      <div className="absolute inset-0 -z-10 opacity-70">
        <GradientBackground className="blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
      </div>
      <div className="grid gap-10 px-6 py-16 md:grid-cols-[1.25fr_0.75fr] md:px-12 lg:px-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-lg ring-1 ring-black/20 dark:text-white">
            Motion-first publishing
          </div>
          <div className="space-y-6 text-balance">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Slow Signal is a blog about teams who choreograph
              <span className="block bg-gradient-to-r from-amber-200 via-white to-sky-200 bg-clip-text text-transparent">
                meaningful motion.
              </span>
            </h1>
            <div className="text-lg text-muted-foreground">
              We study the gestures, rituals, and instrumentation that help
              editors, designers, and engineers craft stories with soul. Every
              post ships with motion recipes you can steal.
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-foreground px-6 py-3 font-medium text-background shadow-lg shadow-foreground/30 transition hover:-translate-y-0.5"
            >
              Start reading
            </button>
            <button
              type="button"
              className="rounded-full border border-foreground/30 px-6 py-3 font-medium text-foreground/80 backdrop-blur"
            >
              Weekly digest ↗
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/80">
            <TypingText
              text={topics}
              loop
              duration={40}
              holdDelay={1600}
              className="inline-flex items-center gap-2 rounded-full bg-background/50 px-3 py-1 font-medium shadow-inner"
            >
              <span className="text-muted-foreground">explorations</span>
              <TypingTextCursor className="h-5 w-0.5 bg-foreground" />
            </TypingText>
            <div className="text-muted-foreground">updated every Thursday</div>
          </div>
        </div>
        <div className="relative rounded-2xl border border-white/20 bg-background/60 p-6 shadow-xl backdrop-blur">
          <p className="text-sm font-semibold text-muted-foreground">Editorial angles</p>
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
                  "flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90",
                )}
              >
                <span>{topic}</span>
                <span className="text-xs text-white/70">New field notes</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
