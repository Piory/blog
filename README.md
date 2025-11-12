# Slow Signal

Next.js + AnimateUI blog with pnpm as the primary package manager.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run common scripts:

```bash
pnpm dev      # start the dev server with HMR
pnpm build    # create an optimized production build
pnpm lint     # run Biome lint checks
pnpm format   # apply Biome formatting
```

Visit [http://localhost:3000](http://localhost:3000) during `pnpm dev` to preview the site. Page sources live in `src/app/`; UI components live in `src/components/`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) for routing, data fetching, and deployment.
- [pnpm Documentation](https://pnpm.io/) for workspace usage, lockfiles, and CLI options.

## Deploy

Before deploying, run `pnpm build`. Provide required environment variables (e.g., `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`) on your hosting platform such as Vercel.
