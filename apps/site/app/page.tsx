import type { Note } from '@notes/content';
import { Suspense } from 'react';

import { HomePageContent } from './components/home-page-content';
import { SiteSearch } from './components/site-search';
import { readManifest } from './lib/note-processor';

export const metadata = {
  title: 'Digital Garden',
  description: 'A personal knowledge base — notes on software, books, and ideas.',
};

export default function HomePage() {
  const manifest = readManifest() ?? { notes: [], byId: {} as Record<string, Note> };

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

  return (
    <main>
      {marqueeBanner}
      {hero}

      <Suspense fallback={null}>
        <HomePageContent notes={manifest.notes} />
      </Suspense>
    </main>
  );
}
