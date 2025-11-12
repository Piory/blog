export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	tags: string[];
	publishedAt: string;
	readingTime: string;
	featured: boolean;
	accentClass: string;
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
		title: "文化を重ねるデザインシステム",
		excerpt:
			"チームに染みついた儀式や語彙、モーション文法を層のように編み込み、デザインシステムに生命感を持たせるアプローチ。",
		category: "デザイン言語",
		tags: ["デザインシステム", "モーション", "文化"],
		publishedAt: "2025-10-18",
		readingTime: "約8分",
		featured: true,
		accentClass: "bg-[#0d2117]",
		author: {
			name: "Sana Ito",
			role: "ナラティブシステムリード",
		},
		body: [
			"どのチームにも暗黙の振り付けがある。儀式と儀式の間に生まれる余白が文化を作り、デザインシステムはその文化を読めるようにする足場だ。",
			"12チームの監査で強力なシステムほどガイドラインを戒律ではなく即興の台本として扱っていた。モーションのトークンやトーンチャート、編集のヒューリスティクスは常に書き換えられる生きた資料になる。",
			"語彙・テンポ・フィードバックの賭け金がそろった時にだけ、有意味なモーションが生まれる。どれかが欠ければ動きは単なる装飾になる。",
			"システムを進化させたいなら、すでに語られている逸話を地図化するところから始めよう。民話のようなストーリーの中に次の層が潜んでいる。",
		],
		stats: { discussions: 128, saves: 942 },
	},
	{
		slug: "ai-writing-rooms",
		title: "AIライティングルームという編集稽古",
		excerpt:
			"会話型AIと人間の編集者を組み合わせ、物語の弧を崩さず素早く磨き上げるための稽古場をつくった記録。",
		category: "編集テック",
		tags: ["AI", "ワークフロー", "ボイス"],
		publishedAt: "2025-09-02",
		readingTime: "約6分",
		featured: true,
		accentClass: "bg-[#0a1c13]",
		author: {
			name: "Noah Jenkins",
			role: "客員エディター",
		},
		body: [
			"書き手が欲しいのは草稿の数ではなく質の高いリハーサルだ。会話型AIをドラマトゥルク役に据え、人間編集者が倫理と温度感を保つことで稽古の場が生まれる。",
			"私たちはLLMがストーリーの緊張や読者への約束を問い直し、人間が答えを返す『ライティングルーム』を試作した。",
			"最良のセッションはライブ演出に近い。編集者が新しいビートを提示し、AIが即座にリミックスし、身体が反応した案だけを保存した。",
			"ツールは自動化ではなく振り付けを支えるものとして設計する。技術が透明になり、チーム同士だけが見える状態が理想だ。",
		],
		stats: { discussions: 86, saves: 611 },
	},
	{
		slug: "animate-ui-field-notes",
		title: "AnimateUIで語りに厚みを出すフィールドノート",
		excerpt:
			"読者を圧迫せずに物語の重みを出すため、どのプリミティブを選びどう減らすかをまとめた実践メモ。",
		category: "モーションクラフト",
		tags: ["AnimateUI", "ガイドライン", "UX"],
		publishedAt: "2025-07-29",
		readingTime: "約11分",
		featured: true,
		accentClass: "bg-[#082015]",
		author: {
			name: "Lena Borodin",
			role: "モーションディレクター",
		},
		body: [
			"現場チームはプリミティブの数よりも『どれを選べばいいか』の手掛かりを求めていた。そこでフィンテックと教育系のモーション委員会に2か月張り付き、最小限のチェックリストを抽出した。",
			"優れたチームはアニメーションを作る前に動詞で語る。折りたたむ、芽吹く、つなぐ、呼吸する──その動詞が品質基準になる。",
			"モーション負債は雪だるま式に膨らむ。役目を終えたジェスチャーを剪定する儀式をカレンダーに組み込もう。",
			"視線を奪うのではなく導くために動かす。理解を深めない華美な動きはアーカイブに送る勇気も必要だ。",
		],
		stats: { discussions: 203, saves: 1143 },
	},
	{
		slug: "beyond-content-audits",
		title: "コンテンツ監査の先にある物語の温度計",
		excerpt:
			"ヒューリスティクスと感情温度、定性メモを重ね合わせて、ストーリー構造の崩れ目を探す。",
		category: "コンテンツ戦略",
		tags: ["リサーチ", "コンテンツ", "ジャーニー"],
		publishedAt: "2025-06-10",
		readingTime: "約9分",
		featured: false,
		accentClass: "bg-[#081a12]",
		author: {
			name: "Eva Dávila",
			role: "コンテンツリサーチリード",
		},
		body: [
			"従来の監査はページ数を数えるが、物語の監査は約束の数を数える。ブランドが語るつもりの物語と読者が体験する儀式を全接点で重ね合わせた。",
			"もっとも頼れる指標は『情緒温度』だ。定期的な感情レビューで温度が激しく揺れる場所には必ず目に見えない障害が潜む。",
			"スクロール速度と定性メモを結びつけると、読者がどこで物理的に動きを止めるかが分かる。",
			"監査は四半期イベントである必要はない。小さなセンシングを週間リズムに組み込めば物語は硬直しない。",
		],
		stats: { discussions: 74, saves: 488 },
	},
	{
		slug: "pattern-libraries-in-motion",
		title: "動き続けるパターンライブラリ",
		excerpt:
			"図鑑のように固まったライブラリを、触れるだけでモーションリテラシーが身につく遊び場に変える試み。",
		category: "パターン運用",
		tags: ["ライブラリ", "マイクロインタラクション"],
		publishedAt: "2025-05-18",
		readingTime: "約7分",
		featured: false,
		accentClass: "bg-[#071710]",
		author: {
			name: "Mori Takamatsu",
			role: "デザインオプス",
		},
		body: [
			"多くのライブラリはスプレッドシートの仮装をした遊具だ。もしライブラリ自体がモーションを教えてくれたらどうなるだろう？",
			"閲覧中にタイルが静かに身じろぎし、トークンのチップが階層を示すように脈動するプロトタイプを作った。",
			"鍵は節度。各パターンにシグネチャとなるひとつの動きだけを与えることで全体の静けさを保つ。",
			"システムを身体で感じられれば分散チームの採用率は跳ね上がる。意図あるモーションは最高の教師だ。",
		],
		stats: { discussions: 55, saves: 352 },
	},
	{
		slug: "measuring-editorial-flow",
		title: "編集フローを計測する軽量インストルメンテーション",
		excerpt:
			"スクロール速度やポインタの間、再訪率を組み合わせて、長文体験のリズムを毎週観測できる仕組み。",
		category: "アナリティクス",
		tags: ["指標", "UXリサーチ"],
		publishedAt: "2025-04-02",
		readingTime: "約10分",
		featured: false,
		accentClass: "bg-[#050e09]",
		author: {
			name: "Harmony Wells",
			role: "エクスペリエンス分析",
		},
		body: [
			"3つの長編体験を計測し、没入感がどのように感じられるかをスケールで捉えた。",
			"スクロール速度、ポインタの静止、再訪率を掛け合わせ、チームが週次で扱えるフロースコアを構築した。",
			"インターフェースが読者の呼吸に合わせてわずかに呼吸すると離脱率が下がる。マイクロポーズとモーションの連携が鍵だ。",
			"定量だけでは物語は語れないが、どこを聞きに行くべきかの羅針盤にはなる。",
		],
		stats: { discussions: 41, saves: 281 },
	},
];

export const heroTopics = [
	"ナラティブ設計",
	"システム思考",
	"AI協働",
	"スローウェブ",
];

export const editorialAngles = [
	"戦略ログ",
	"モーション調査",
	"チーム儀式",
	"計測と観察",
];

export const categories = [
	"リサーチ",
	"コンテンツ設計",
	"モーション",
	"リーダーシップ",
	"開発メモ",
];

export const featuredPosts = posts.filter((post) => post.featured);
export const latestPosts = posts.filter((post) => !post.featured);

export const postsBySlug = new Map(posts.map((post) => [post.slug, post]));

export const getPostBySlug = (slug: string) => postsBySlug.get(slug);
