import Link from 'next/link';

export default function NotFound() {
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
        404
      </garden-badge>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 4vw, 40px)',
          fontWeight: 500,
          letterSpacing: '-0.025em',
          color: 'var(--ds-ink)',
          margin: '0 0 0.75rem',
        }}
      >
        Note not found
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
        This page doesn&apos;t exist yet — or the note may have moved. Try browsing from the home
        page.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-ui, system-ui, sans-serif)',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.01em',
          padding: '7px 20px',
          borderRadius: 'var(--radius-md, 8px)',
          background: 'var(--ds-accent, #a85025)',
          color: '#fff',
          textDecoration: 'none',
          transition: 'background 120ms ease',
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
