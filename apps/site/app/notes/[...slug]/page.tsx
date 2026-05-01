import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

// Notes live at {repo-root}/notes — from apps/site that is ../../notes
const NOTES_DIR = path.join(process.cwd(), '..', '..', 'notes');
const CONTENT_DIR = path.join(process.cwd(), '.content');

function readManifest() {
  const p = path.join(CONTENT_DIR, 'manifest.json');
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function resolveNotePath(id: string): string | null {
  const md = path.join(NOTES_DIR, `${id}.md`);
  if (fs.existsSync(md)) return md;
  const mdx = path.join(NOTES_DIR, `${id}.mdx`);
  if (fs.existsSync(mdx)) return mdx;
  return null;
}

function rewriteWikiLinks(content: string): string {
  return content.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (_m, targetRaw: string, alias?: string) => {
      const target = targetRaw.trim();
      const display = (alias || target.split(/[./]/).slice(-1)[0] || target).trim();
      const slug = '/' + target.split('.').join('/');
      return `[${display}](${slug})`;
    }
  );
}

export async function generateStaticParams() {
  const manifest = readManifest();
  if (!manifest) return [];
  return manifest.notes.map((note: any) => ({
    slug: note.slug.replace(/^\//, '').split('/')
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const id = slug.join('.');
  const manifest = readManifest();
  const note = manifest?.byId?.[id];
  return { title: note?.title ? `${note.title} — Digital Garden` : id };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const id = slug.join('.');

  const manifest = readManifest();
  const note = manifest?.byId?.[id];
  if (!note) return notFound();

  const filePath = resolveNotePath(id);
  if (!filePath) return notFound();

  const raw = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(raw);
  const withLinks = rewriteWikiLinks(content);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(withLinks);

  return (
    <article>
      <h1>{note.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: String(processed) }} />
    </article>
  );
}
