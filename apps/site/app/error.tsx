'use client';

import Link from 'next/link';

import { linkPath } from './lib/site-path';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: 'var(--space-7) var(--space-5)',
        textAlign: 'center',
      }}
    >
      <garden-badge variant="muted" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
        error
      </garden-badge>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 500,
          letterSpacing: '-0.025em',
          color: 'var(--ds-ink)',
          margin: '0 0 0.75rem',
        }}
      >
        Something went wrong
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 15,
          color: 'var(--ds-muted)',
          maxWidth: 360,
          lineHeight: 1.7,
          margin: '0 0 var(--space-5)',
        }}
      >
        {error.message || 'An unexpected error occurred.'}
      </p>

      <div
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <garden-button variant="primary" onClick={reset}>
          Try again
        </garden-button>
        <Link href={linkPath('/')} style={{ textDecoration: 'none' }}>
          <garden-button>Back to home</garden-button>
        </Link>
      </div>
    </main>
  );
}
