# @notes/ui

React component library used across the monorepo.

Usage (local development):

- Start Storybook:
  pnpm --filter @notes/ui run storybook

- Build Storybook static and publish under site-next/public/storybook:
  pnpm --filter @notes/ui run build-storybook

The components are framework-agnostic React components and can be consumed by any framework that supports React components (Next.js, Astro with client:load, etc.).
