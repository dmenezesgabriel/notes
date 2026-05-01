# @notes/content

Content pipeline for the notes monorepo.

This package scans the top-level `notes/` folder, parses Markdown/MDX files, rewrites wiki-links ([[...]]) into standard markdown links, computes backlinks and a MiniSearch index, and emits a small content manifest and MDX copies into an output directory (by default `apps/site/.content`).

Usage (from repo root):

pnpm -C packages/content build

This will compile the TS and write outputs to `apps/site/.content` by default. You can also run locally in dev mode:

pnpm -C packages/content dev -- --out ./apps/site/.content

The output contains:

- manifest.json — list of notes with id, slug, title, backlinks, etc.
- index.json — MiniSearch index and documents
- mdx/ — copied MDX files (wiki-links rewritten)
- mdx-manifest.ts — mapping used by the Next.js app to dynamically import MDX modules
