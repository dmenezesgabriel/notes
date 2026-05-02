import type { Note } from '@notes/content';

/** @public */
export type { Note };

export interface TocEntry {
  id: string;
  label: string;
  depth: number;
}

// ---------------------------------------------------------------------------
// Category helpers
// ---------------------------------------------------------------------------

const CATEGORY_LABELS: Record<string, string> = {
  books: 'Books',
  swe: 'Software Engineering',
  devops: 'DevOps',
  'data-engineer': 'Data Engineering',
  'data-science': 'Data Science',
  'as-code': 'As Code',
  design: 'Design',
  productivity: 'Productivity',
  'game-dev': 'Game Dev',
  hobbies: 'Hobbies',
  daily: 'Daily Journal',
  childhood: 'Childhood',
  'digital-garden': 'Digital Garden',
  log: 'Log',
  root: 'General',
};

/** Returns the display name for a category slug. */
export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category.charAt(0).toUpperCase() + category.slice(1);
}

/** Groups notes by their top-level Dendron category (first dot-segment). */
export function groupByCategory(notes: Note[]): Record<string, Note[]> {
  const result: Record<string, Note[]> = {};
  for (const note of notes) {
    const category = note.id.includes('.') ? note.id.split('.')[0]! : 'root';
    (result[category] ??= []).push(note);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Slug helpers
// ---------------------------------------------------------------------------

/** Converts a Dendron dot-notated id to URL path segments: "books.foo" → ["books","foo"] */
export function noteSlugToSegments(id: string): string[] {
  return id.split('.');
}

// ---------------------------------------------------------------------------
// Wiki-link rewriting
// ---------------------------------------------------------------------------

/**
 * Replaces Dendron `[[Target]]` / `[[Target|Alias]]` wiki-links with
 * standard Markdown `[display](/path)` links.
 */
export function rewriteWikiLinks(content: string): string {
  return content.replace(
    /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
    (_match, targetRaw: string, alias?: string) => {
      const target = targetRaw.trim();
      const display = (alias?.trim() || target.split('.').at(-1) || target).trim();
      const href = '/' + target.split('.').join('/');
      return `[${display}](${href})`;
    },
  );
}

// ---------------------------------------------------------------------------
// Table-of-contents extraction
// ---------------------------------------------------------------------------

/**
 * Extracts h2 / h3 headings from an HTML string.
 * Returns a lightweight TOC array suitable for `<garden-toc>`.
 */
export function extractToc(html: string): TocEntry[] {
  const entries: TocEntry[] = [];
  // Match h2/h3 elements that have an id attribute (added by rehype-slug)
  const re = /<(h[23])[^>]* id="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const tag = (match[1] ?? '').toLowerCase();
    const id = match[2] ?? '';
    const rawLabel = (match[3] ?? '').replace(/<[^>]+>/g, '').trim();
    entries.push({
      id,
      label: rawLabel,
      depth: tag === 'h2' ? 1 : 2,
    });
  }
  return entries;
}

// ---------------------------------------------------------------------------
// Note excerpt formatting
// ---------------------------------------------------------------------------

/** Returns a clean excerpt capped at `maxLen` characters. */
export function cleanExcerpt(raw: string, maxLen = 200): string {
  const stripped = raw
    .replace(/---[\s\S]*?---/, '')
    .replace(/[#*_`[\]]/g, '')
    .trim();
  if (stripped.length <= maxLen) return stripped;
  return stripped.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}
