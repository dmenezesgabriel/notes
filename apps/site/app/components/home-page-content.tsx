'use client';

import type { Note } from '@notes/content';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import { linkPath, publicPath } from '../lib/site-path';

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

function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category.charAt(0).toUpperCase() + category.slice(1);
}

function groupByCategory(notes: Note[]): Record<string, Note[]> {
  const result: Record<string, Note[]> = {};
  for (const note of notes) {
    const category = note.id.includes('.') ? note.id.split('.')[0]! : 'root';
    (result[category] ??= []).push(note);
  }
  return result;
}

function cleanExcerpt(raw: string, maxLen = 200): string {
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
  return stripped.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

const PRIORITY_CATEGORIES = ['books', 'swe', 'devops', 'productivity', 'design', 'as-code'];
const MAX_CARDS_PER_SECTION = 6;

function searchNotes(query: string, notes: Note[]): Note[] {
  const q = query.toLowerCase();
  return notes.filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.excerpt.toLowerCase().includes(q) ||
      n.id.toLowerCase().includes(q),
  );
}

interface HomePageContentProps {
  notes: Note[];
}

export function HomePageContent({ notes }: HomePageContentProps) {
  const searchParams = useSearchParams();
  const query = (searchParams.get('q') ?? '').trim();

  const results = useMemo(() => (query ? searchNotes(query, notes) : []), [notes, query]);
  const grouped = useMemo(() => groupByCategory(notes), [notes]);

  const sortedCategories = useMemo(() => {
    return Object.keys(grouped).sort((a, b) => {
      const ai = PRIORITY_CATEGORIES.indexOf(a);
      const bi = PRIORITY_CATEGORIES.indexOf(b);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.localeCompare(b);
    });
  }, [grouped]);

  if (query) {
    return (
      <div
        className="page-wrap"
        style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)', marginTop: 24 }}
      >
        {/* Results header */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            letterSpacing: '0.08em',
            color: 'var(--zine-paper)',
            marginBottom: 'var(--space-5)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ color: 'var(--zine-red)' }}>//</span>
          RESULTS FOR &ldquo;{query}&rdquo;
          <span
            style={{
              fontFamily: 'var(--font-stamp)',
              fontSize: 11,
              background: 'var(--zine-yellow)',
              color: 'var(--zine-ink)',
              padding: '2px 8px',
              border: '2px solid var(--zine-ink)',
              letterSpacing: '0.06em',
            }}
          >
            {results.length}
          </span>
          <Link
            href={linkPath('/')}
            style={{
              fontFamily: 'var(--font-stamp)',
              fontSize: 11,
              color: 'var(--zine-paper)',
              textDecoration: 'none',
              marginLeft: 'auto',
              border: '2px solid rgba(242,237,215,0.3)',
              padding: '3px 10px',
              letterSpacing: '0.06em',
            }}
          >
            ✕ CLEAR
          </Link>
        </div>

        {results.length === 0 ? (
          <div
            style={{
              background: 'var(--zine-paper)',
              border: 'var(--zine-border)',
              borderRight: '5px solid var(--zine-ink)',
              borderBottom: '5px solid var(--zine-ink)',
              padding: '1.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'var(--zine-ink-faded)',
            }}
          >
            No notes found for <strong>{query}</strong>. Try a different search term.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {results.map((note, i) => (
              <garden-card
                suppressHydrationWarning
                key={note.id}
                headline={note.title}
                excerpt={cleanExcerpt(note.excerpt, 120)}
                href={publicPath(note.slug)}
                style={
                  { '--card-rotate': i % 2 === 0 ? '-0.6deg' : '0.7deg' } as React.CSSProperties
                }
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="page-wrap" style={{ paddingTop: 48, paddingBottom: 'var(--space-8)' }}>
      {sortedCategories.map((cat) => {
        const catNotes = grouped[cat] ?? [];
        const visibleNotes = catNotes.slice(0, MAX_CARDS_PER_SECTION);
        const hasMore = catNotes.length > MAX_CARDS_PER_SECTION;

        return (
          <section
            key={cat}
            aria-labelledby={`cat-${cat}`}
            style={{
              marginBottom: 'var(--space-7)',
              background: 'var(--zine-paper)',
              border: 'var(--zine-border)',
              borderRight: '5px solid var(--zine-ink)',
              borderBottom: '5px solid var(--zine-ink)',
              padding: '1.5rem',
              position: 'relative',
              boxShadow: 'var(--zine-shadow-lg)',
            }}
          >
            {/* Pushpin simulation */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -10,
                left: 24,
                width: 18,
                height: 18,
                background: 'var(--zine-red)',
                border: '2px solid var(--zine-red-dark)',
                borderRadius: '50%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                zIndex: 10,
              }}
            />

            {/* Section header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 'var(--space-4)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flex: 1,
                }}
              >
                <span
                  style={{
                    color: 'var(--zine-red)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                  }}
                >
                  //
                </span>
                <h2
                  id={`cat-${cat}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    letterSpacing: '0.08em',
                    color: 'var(--zine-ink)',
                    margin: 0,
                  }}
                >
                  {categoryLabel(cat).toUpperCase()}
                </h2>
                <span
                  style={{
                    fontFamily: 'var(--font-stamp)',
                    fontSize: 10,
                    background: 'var(--zine-paper)',
                    border: '2px solid var(--zine-ink)',
                    color: 'var(--zine-ink)',
                    padding: '2px 7px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {catNotes.length}
                </span>
                <div style={{ flex: 1, height: 3, background: 'var(--zine-ink)', marginLeft: 8 }} />
              </div>

              {hasMore && (
                <Link
                  href={linkPath(`/${cat}`)}
                  style={{
                    fontFamily: 'var(--font-stamp)',
                    fontSize: 11,
                    color: 'var(--zine-ink)',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    border: '2px solid var(--zine-ink)',
                    padding: '3px 10px',
                    flexShrink: 0,
                    marginLeft: 12,
                  }}
                  aria-label={`View all ${categoryLabel(cat)} notes`}
                >
                  VIEW ALL →
                </Link>
              )}
            </div>

            {/* Cards grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 'var(--space-4)',
                paddingBottom: 'var(--space-2)',
              }}
            >
              {visibleNotes.map((note, i) => (
                <garden-card
                  suppressHydrationWarning
                  key={note.id}
                  headline={note.title}
                  excerpt={cleanExcerpt(note.excerpt, 120)}
                  href={publicPath(note.slug)}
                  style={
                    { '--card-rotate': i % 2 === 0 ? '-0.6deg' : '0.7deg' } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
