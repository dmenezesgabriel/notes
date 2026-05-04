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

interface SearchDoc {
  id: string;
  title: string;
  slug: string;
}

interface SearchIndex {
  docs: SearchDoc[];
}

const PRIORITY_CATEGORIES = ['books', 'swe', 'devops', 'productivity', 'design', 'as-code'];
const MAX_CARDS_PER_SECTION = 6;

function readManifest(): Manifest {
  const p = path.join(process.cwd(), '.content', 'manifest.json');
  if (!existsSync(p)) return { notes: [], byId: {} };
  return JSON.parse(readFileSync(p, 'utf8')) as Manifest;
}

function searchNotes(query: string, manifest: Manifest): Note[] {
  const slugMap: Record<string, string> = {};
  try {
    const indexPath = path.join(process.cwd(), '.content', 'index.json');
    if (existsSync(indexPath)) {
      const { docs } = JSON.parse(readFileSync(indexPath, 'utf8')) as SearchIndex;
      for (const d of docs) slugMap[d.id] = d.slug;
    }
  } catch {
    // ignore
  }

  const q = query.toLowerCase();
  return manifest.notes.filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.excerpt.toLowerCase().includes(q) ||
      n.id.toLowerCase().includes(q),
  );
}

export const metadata = {
  title: 'Digital Garden',
  description: 'A personal knowledge base — notes on software, books, and ideas.',
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? '').trim();
  const manifest = readManifest();

  /* ── Running marquee banner ────────────────────────────────────────── */
  const marqueeBanner = (
    <div
      className="zine-marquee-banner"
      data-text="KNOWLEDGE GARDEN · NEU-BRUTALISM × PUNK ZINE · DO IT YOURSELF · NOTES · WIKI · SECOND BRAIN ·"
      aria-hidden="true"
    >
      <span className="zine-marquee-text">
        KNOWLEDGE GARDEN &nbsp;·&nbsp; NEU-BRUTALISM × PUNK ZINE &nbsp;·&nbsp; DO IT YOURSELF
        &nbsp;·&nbsp; NOTES &nbsp;·&nbsp; WIKI &nbsp;·&nbsp; SECOND BRAIN &nbsp;·&nbsp; CUT &amp;
        PASTE &nbsp;·&nbsp; LONG-FORM CONTENT &nbsp;·&nbsp;
      </span>
    </div>
  );

  /* ── Hero section ──────────────────────────────────────────────────── */
  const hero = (
    <section
      aria-label="Site introduction"
      style={{
        background: 'var(--zine-paper)',
        border: '3px solid var(--zine-ink)',
        borderTop: 'none',
        padding: 'clamp(2rem, 6vw, 3rem) 1.5rem 3rem',
        position: 'relative',
      }}
    >
      <div className="page-wrap" style={{ position: 'relative' }}>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--zine-red)',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: 'var(--zine-muted)' }}>///</span>
          NEU-BRUTALISM × PUNK ZINE × SCRAPBOOK
        </div>

        {/* Ransom-note headline */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            gap: 6,
            marginBottom: '1.25rem',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'var(--zine-ink)',
              color: 'var(--zine-paper)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              padding: '2px 10px 0',
              transform: 'rotate(-1deg)',
              boxShadow: 'var(--zine-shadow)',
            }}
          >
            THE
          </span>
          <span
            style={{
              fontFamily: 'var(--font-marker)',
              fontSize: 'clamp(28px, 5vw, 48px)',
              color: 'var(--zine-blue)',
              transform: 'rotate(-2deg)',
              display: 'inline-block',
              textShadow: '2px 2px 0 rgba(26,60,143,0.2)',
            }}
          >
            knowledge
          </span>
          <span
            style={{
              display: 'inline-block',
              background: 'var(--zine-yellow)',
              color: 'var(--zine-ink)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              padding: '2px 10px 0',
              transform: 'rotate(1.5deg)',
              boxShadow: 'var(--zine-shadow)',
            }}
          >
            GARDEN
          </span>
        </div>

        {/* Subheading */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--zine-ink-faded)',
            maxWidth: 520,
            lineHeight: 1.7,
            margin: '0 0 1.25rem',
            borderLeft: '4px solid var(--zine-ink)',
            paddingLeft: '1rem',
          }}
        >
          {manifest.notes.length} notes on software engineering, books, productivity, and more.{' '}
          <span style={{ background: 'var(--zine-yellow)', padding: '0 3px', display: 'inline' }}>
            Raw, loud, opinionated.
          </span>{' '}
          Organized loosely, linked freely.
        </p>

        {/* Tags row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
          <garden-tag suppressHydrationWarning variant="accent">
            LIT ELEMENTS
          </garden-tag>
          <garden-tag suppressHydrationWarning variant="blue">
            NEXT.JS SSG
          </garden-tag>
          <garden-tag suppressHydrationWarning variant="yellow">
            STORYBOOK
          </garden-tag>
          <garden-tag suppressHydrationWarning variant="green">
            RESPONSIVE
          </garden-tag>
          <garden-tag suppressHydrationWarning>DO IT YOURSELF</garden-tag>
        </div>

        {/* Search */}
        <div style={{ maxWidth: 540 }}>
          <SiteSearch />
        </div>
      </div>
    </section>
  );

  /* ── Search results view ─────────────────────────────────────────────── */
  if (query) {
    const results = searchNotes(query, manifest);

    return (
      <main>
        {marqueeBanner}
        {hero}

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
              href="/"
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
                  href={note.slug}
                  style={
                    { '--card-rotate': i % 2 === 0 ? '-0.6deg' : '0.7deg' } as React.CSSProperties
                  }
                />
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }

  /* ── Default category view ─────────────────────────────────────────────── */
  const grouped = groupByCategory(manifest.notes);

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
      {marqueeBanner}
      {hero}

      <div className="page-wrap" style={{ paddingTop: 48, paddingBottom: 'var(--space-8)' }}>
        {sortedCategories.map((cat) => {
          const notes = grouped[cat] ?? [];
          const visibleNotes = notes.slice(0, MAX_CARDS_PER_SECTION);
          const hasMore = notes.length > MAX_CARDS_PER_SECTION;

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
                    {notes.length}
                  </span>
                  <div
                    style={{ flex: 1, height: 3, background: 'var(--zine-ink)', marginLeft: 8 }}
                  />
                </div>

                {hasMore && (
                  <Link
                    href={`/notes/${cat}`}
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
                    href={note.slug}
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
    </main>
  );
}
