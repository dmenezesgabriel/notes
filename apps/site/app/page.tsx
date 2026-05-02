import type { Note } from '@notes/content';
import { existsSync, readFileSync } from 'fs';
import Link from 'next/link';
import path from 'path';

import { SiteSearch } from './components/site-search';
import { categoryLabel, cleanExcerpt, groupByCategory } from './lib/notes';

interface Manifest {
  notes: Note[];
  byId: Record<string, Note>;
}

const PRIORITY_CATEGORIES = ['books', 'swe', 'devops', 'productivity', 'design', 'as-code'];
const MAX_CARDS_PER_SECTION = 6;

function readManifest(): Manifest {
  const p = path.join(process.cwd(), '.content', 'manifest.json');
  if (!existsSync(p)) return { notes: [], byId: {} };
  return JSON.parse(readFileSync(p, 'utf8')) as Manifest;
}

export const metadata = {
  title: 'Digital Garden',
  description: 'A personal knowledge base — notes on software, books, and ideas.',
};

export default function HomePage() {
  const manifest = readManifest();
  const grouped = groupByCategory(manifest.notes);

  // Sort: priority categories first, then alphabetical
  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const ai = PRIORITY_CATEGORIES.indexOf(a);
    const bi = PRIORITY_CATEGORIES.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b);
  });

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="hero"
        aria-label="Site introduction"
        style={{
          background: 'var(--ds-surface)',
          borderBottom: '1px solid var(--ds-border)',
          padding: 'clamp(2rem, 6vw, 4rem) var(--space-5) 2rem',
        }}
      >
        <div className="page-wrap">
          <garden-badge style={{ display: 'block', marginBottom: 8 }}>digital garden</garden-badge>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--ds-ink)',
              margin: '0 0 0.75rem',
            }}
          >
            A growing collection
            <br />
            <span style={{ color: 'var(--ds-muted)', fontStyle: 'italic', fontWeight: 400 }}>
              of notes and ideas
            </span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'var(--ds-muted)',
              maxWidth: 480,
              lineHeight: 1.7,
              margin: '0 0 1.5rem',
            }}
          >
            {manifest.notes.length} notes on software engineering, books, productivity, and more.
            Organized loosely, linked freely.
          </p>

          <div style={{ maxWidth: 480 }}>
            <SiteSearch />
          </div>
        </div>
      </section>

      {/* ── Note sections ─────────────────────────────────────────── */}
      <div
        className="page-wrap"
        style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}
      >
        {sortedCategories.map((cat) => {
          const notes = grouped[cat] ?? [];
          const visibleNotes = notes.slice(0, MAX_CARDS_PER_SECTION);
          const hasMore = notes.length > MAX_CARDS_PER_SECTION;
          const catPath = `/${cat}`;

          return (
            <section
              key={cat}
              aria-labelledby={`cat-${cat}`}
              style={{ marginBottom: 'var(--space-7)' }}
            >
              {/* Section header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <h2
                    id={`cat-${cat}`}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: '-0.015em',
                      color: 'var(--ds-ink)',
                      margin: 0,
                    }}
                  >
                    {categoryLabel(cat)}
                  </h2>
                  <garden-tag variant="default">{notes.length}</garden-tag>
                </div>

                {hasMore && (
                  <Link
                    href={catPath}
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 13,
                      color: 'var(--ds-accent)',
                      textDecoration: 'none',
                    }}
                    aria-label={`View all ${categoryLabel(cat)} notes`}
                  >
                    View all →
                  </Link>
                )}
              </div>

              {/* Cards grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 'var(--space-3)',
                }}
              >
                {visibleNotes.map((note) => (
                  <garden-card
                    key={note.id}
                    headline={note.title}
                    excerpt={cleanExcerpt(note.excerpt, 120)}
                    href={note.slug}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
