import type { Note } from '@notes/content';

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

const PRIORITY_CATEGORIES = ['books', 'swe', 'devops', 'productivity', 'design', 'as-code'];
export const MAX_CARDS_PER_SECTION = 6;

export type HomeDiscoveryMode = 'default' | 'results' | 'no-results';

export interface HomeDiscoveryState {
  mode: HomeDiscoveryMode;
  query: string;
  results: Note[];
  grouped: Record<string, Note[]>;
  sortedCategories: string[];
}

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category.charAt(0).toUpperCase() + category.slice(1);
}

export function groupNotesByCategory(notes: Note[]): Record<string, Note[]> {
  const result: Record<string, Note[]> = {};
  for (const note of notes) {
    const category = note.id.includes('.') ? note.id.split('.')[0]! : 'root';
    (result[category] ??= []).push(note);
  }
  return result;
}

export function sortHomeCategories(grouped: Record<string, Note[]>): string[] {
  return Object.keys(grouped).sort((a, b) => {
    const ai = PRIORITY_CATEGORIES.indexOf(a);
    const bi = PRIORITY_CATEGORIES.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b);
  });
}

export function cleanExcerpt(raw: string, maxLen = 200): string {
  const stripped = raw
    .replace(/---[\s\S]*?---/, '')
    .replace(/^#+\s+/gm, '')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(
      /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
      (_: string, id: string, label: string) => label || id.split('.').at(-1) || id,
    )
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[`*_|\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (stripped.length <= maxLen) return stripped;
  return `${stripped.slice(0, maxLen).replace(/\s+\S*$/, '')}…`;
}

export function searchNotes(query: string, notes: Note[]): Note[] {
  const normalizedQuery = query.toLowerCase();
  return notes.filter(
    (note) =>
      note.title.toLowerCase().includes(normalizedQuery) ||
      note.excerpt.toLowerCase().includes(normalizedQuery) ||
      note.id.toLowerCase().includes(normalizedQuery),
  );
}

export function getHomeDiscoveryState(notes: Note[], rawQuery: string): HomeDiscoveryState {
  const query = rawQuery.trim();
  const results = query ? searchNotes(query, notes) : [];
  const grouped = groupNotesByCategory(notes);
  const sortedCategories = sortHomeCategories(grouped);

  if (!query) {
    return {
      mode: 'default',
      query,
      results,
      grouped,
      sortedCategories,
    };
  }

  return {
    mode: results.length > 0 ? 'results' : 'no-results',
    query,
    results,
    grouped,
    sortedCategories,
  };
}
