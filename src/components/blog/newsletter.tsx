export function Newsletter() {
  return (
    <section className="rounded-3xl border border-border/60 bg-muted/30 p-8 shadow-inner">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-tight text-primary">
            Studio log
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">A calmer newsletter</h2>
          <p className="text-muted-foreground">
            Every Sunday we share storyboard drafts, motion experiments, and annotated reading lists. No noise, just field notes.
          </p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@journal.tld"
            className="flex-1 rounded-full border border-border/70 bg-background px-5 py-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          />
          <button
            type="submit"
            className="rounded-full bg-foreground px-6 py-3 font-medium text-background shadow-lg shadow-foreground/20"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
