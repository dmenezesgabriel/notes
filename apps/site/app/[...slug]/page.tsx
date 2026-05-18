import { notFound } from 'next/navigation';

import { NotePageSlice } from '../components/note-page-slice';
import {
  buildBreadcrumbs,
  getStaticNoteParams,
  processNote,
  readManifest,
} from '../lib/note-processor';
import { resolveNoteBacklinks } from '../lib/note-template';
import { categoryLabel } from '../lib/notes';

export async function generateStaticParams() {
  return getStaticNoteParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const id = slug.join('.');
  const manifest = readManifest();
  const note = manifest?.byId?.[id];
  return {
    title: note?.title ?? id,
    description: note?.excerpt?.slice(0, 160),
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const id = slug.join('.');

  const manifest = readManifest();
  const note = manifest?.byId?.[id];
  if (!note) return notFound();

  // Render markdown → HTML, extract TOC, parse frontmatter
  let processed;
  try {
    processed = await processNote(id);
  } catch {
    return notFound();
  }
  const { html, toc, frontmatter } = processed;

  const breadcrumbItems = buildBreadcrumbs(slug, note.title, categoryLabel);
  const backlinks = resolveNoteBacklinks(note.backlinks, manifest?.byId);

  return (
    <NotePageSlice
      title={note.title}
      slug={slug}
      html={html}
      toc={toc}
      breadcrumbItems={breadcrumbItems}
      backlinks={backlinks}
      status={frontmatter.status != null ? String(frontmatter.status) : null}
    />
  );
}
