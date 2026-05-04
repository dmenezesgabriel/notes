import type { Note } from '@notes/content';

// Re-export shared types & utilities so existing callers don't need to change imports.
export type { Note };
export type { TocEntry } from '@notes/content';
export { cleanExcerpt, extractToc, rewriteWikiLinks } from '@notes/content';

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
