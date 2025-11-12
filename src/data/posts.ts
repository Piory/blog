export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  coverGradient: string;
  stats: {
    discussions: number;
    saves: number;
  };
};

export const posts: Post[] = [
  {
    slug: "design-systems-as-cultural-layers",
    title: "Design systems as cultural layers",
    excerpt:
      "How to make your design system feel alive by layering rituals, vocabulary, and animation grammar across teams.",
    category: "Design Language",
    tags: ["design systems", "motion", "culture"],
    publishedAt: "2025-10-18",
    readingTime: "8 min read",
    featured: true,
    coverGradient: "from-violet-500/80 via-fuchsia-500/70 to-amber-400/70",
    stats: { discussions: 128, saves: 942 },
  },
  {
    slug: "ai-writing-rooms",
    title: "AI writing rooms and editorial choreography",
    excerpt:
      "Pairs conversational AI with human editors to choreograph story arcs faster without losing journalistic rigor.",
    category: "Editorial Tech",
    tags: ["ai", "workflow", "voice"],
    publishedAt: "2025-09-02",
    readingTime: "6 min read",
    featured: true,
    coverGradient: "from-sky-400/80 via-cyan-400/70 to-emerald-400/70",
    stats: { discussions: 86, saves: 611 },
  },
  {
    slug: "animate-ui-field-notes",
    title: "Field notes on meaningful motion",
    excerpt:
      "A checklist for picking the right AnimateUI primitive when you want narrative weight without overwhelming the reader.",
    category: "Motion Craft",
    tags: ["animateui", "guidelines", "ux"],
    publishedAt: "2025-07-29",
    readingTime: "11 min read",
    featured: true,
    coverGradient: "from-rose-500/80 via-orange-400/70 to-yellow-300/70",
    stats: { discussions: 203, saves: 1143 },
  },
  {
    slug: "beyond-content-audits",
    title: "Beyond content audits: sensing narrative gaps",
    excerpt:
      "Blend heuristics, rolling sentiment, and qualitative notes to find where your story architecture collapses.",
    category: "Content Strategy",
    tags: ["research", "content", "journeys"],
    publishedAt: "2025-06-10",
    readingTime: "9 min read",
    featured: false,
    coverGradient: "from-indigo-500/80 via-blue-500/70 to-cyan-400/60",
    stats: { discussions: 74, saves: 488 },
  },
  {
    slug: "pattern-libraries-in-motion",
    title: "Pattern libraries in motion",
    excerpt:
      "We prototyped six micro-animations that make content libraries feel tactile and less like static spreadsheets.",
    category: "Pattern Ops",
    tags: ["libraries", "micro-interactions"],
    publishedAt: "2025-05-18",
    readingTime: "7 min read",
    featured: false,
    coverGradient: "from-lime-400/80 via-emerald-400/70 to-teal-400/60",
    stats: { discussions: 55, saves: 352 },
  },
  {
    slug: "measuring-editorial-flow",
    title: "Measuring editorial flow with instrumentation",
    excerpt:
      "A lightweight analytics kit that maps scroll velocity to engagement rituals for long-form essays.",
    category: "Analytics",
    tags: ["metrics", "ux research"],
    publishedAt: "2025-04-02",
    readingTime: "10 min read",
    featured: false,
    coverGradient: "from-slate-500/80 via-stone-500/70 to-zinc-500/70",
    stats: { discussions: 41, saves: 281 },
  },
];

export const heroTopics = [
  "Narrative design",
  "Systems thinking",
  "AI collaborations",
  "Slow web",
];

export const editorialAngles = [
  "Strategy journals",
  "Motion studies",
  "Team rituals",
  "Instrumentation",
];

export const categories = [
  "Research",
  "Content design",
  "Motion",
  "Leadership",
  "Dev notes",
];

export const featuredPosts = posts.filter((post) => post.featured);
export const latestPosts = posts.filter((post) => !post.featured);
