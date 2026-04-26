# site-next

Next.js site that consumes the @notes/ui component library from the monorepo.

Commands:

- Install deps from repo root: pnpm i
- Run Next dev server: pnpm --filter site-next dev (or pnpm -w dev to run all dev tasks)
- Build: pnpm --filter site-next build

The Next.js app is configured to transpile the @notes/ui package source via next.config.js (transpilePackages).
