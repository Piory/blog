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
	author: {
		name: string;
		role: string;
	};
	body: string[];
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
		author: {
			name: "Sana Ito",
			role: "Narrative systems lead",
		},
		body: [
			"Every team already has a choreography, even if it's unintentional. Culture emerges in the negative space between rituals, and design systems are the scaffolding that makes those rituals legible.",
			"When we audited 12 product orgs we found that the strongest systems treat guidelines as improv prompts rather than commandments. Animation tokens, tone charts, and editorial heuristics become living documents that teams remix.",
			"Meaningful motion happens when we align vocabulary (naming), cadence (timing), and stakes (feedback). Without that alignment motion is just decoration.",
			"If you want to evolve your system, start by mapping the stories people already tell about it. Those folk tales reveal the hidden layers you can formalize next quarter.",
		],
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
		author: {
			name: "Noah Jenkins",
			role: "Editor-in-residence",
		},
		body: [
			"Writers don't actually want more drafts. They want better rehearsals. Pairing conversational AI with human editors gives us that rehearsal space.",
			"We prototyped a 'writing room' where a large language model plays the role of dramaturg: questioning arc, tension, and reader promise while humans hold the ethical frame.",
			"The best sessions felt like live direction. Editors fed in new beats, AI remixed, and the team captured anything that produced a body reaction.",
			"Tooling note: don't chase automation. Chase choreography. The tech should fade until the team only sees each other.",
		],
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
		author: {
			name: "Lena Borodin",
			role: "Motion director",
		},
		body: [
			"AnimateUI ships with dozens of primitives, but field teams kept asking for a minimal checklist. So we spent two months shadowing motion councils across fintech and education products.",
			"We noticed the strongest teams narrate every animation with verbs before they open Figma: fold, bloom, tether, breathe. Those verbs become quality bars.",
			"We also learned that motion debt compounds quickly. Schedule explicit rituals for pruning gestures that no longer serve the story.",
			"Use motion to redirect attention, not to beg for it. If a flourish doesn't sharpen comprehension, archive it.",
		],
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
		author: {
			name: "Eva Dávila",
			role: "Content research lead",
		},
		body: [
			"Classic content audits count pages. Narrative audits count promises. We map every touchpoint against the story the brand thinks it's telling and the ritual the reader actually experiences.",
			"Our favorite signal is 'emotional temperature' gathered from rolling sentiment reviews. Wherever the temperature swings wildly, there's usually an invisible blocker.",
			"Instrumentation matters: we stitched scroll velocity to qualitative notes so we can see where readers physically slow down.",
			"Audits don't have to be quarterly marathons. Embed sensing into weekly rituals so the story never calcifies.",
		],
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
		author: {
			name: "Mori Takamatsu",
			role: "Design ops",
		},
		body: [
			"Pattern libraries often feel like spreadsheets cosplaying as playgrounds. We asked: what if the library itself taught you motion literacy?",
			"We prototyped tiles that react as you browse them—cards shimmy subtly to show affordance, token chips pulse to indicate hierarchy.",
			"The trick is constraint. Give each pattern a single signature movement so the library stays calm.",
			"When distributed teams feel the system, adoption spikes. Motion is a teacher when it's intentional.",
		],
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
		author: {
			name: "Harmony Wells",
			role: "Experience analytics",
		},
		body: [
			"We instrumented three long-form editorial experiences to understand how flow feels at scale.",
			"By tracking scroll velocity, pointer pauses, and return visits, we built a lightweight flow score teams can act on weekly.",
			"Readers respond best when the interface breathes with them—micro-pauses paired with subtle motion cues reduce abandonment.",
			"Quant alone can't explain the story, but it can point your interviews toward the sharpest moments.",
		],
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

export const postsBySlug = new Map(posts.map((post) => [post.slug, post]));

export const getPostBySlug = (slug: string) => postsBySlug.get(slug);
