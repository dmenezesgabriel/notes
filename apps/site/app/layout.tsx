import './globals.css';

import type { Metadata } from 'next';

import RegisterWebComponents from './components/register-webcomponents';
import { SiteNav } from './components/site-nav';
import { themeInitializationScript } from './lib/theme-preference';

// ---------------------------------------------------------------------------
// Root metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    default: 'Digital Garden',
    template: '%s — Digital Garden',
  },
  description:
    'A personal knowledge base and digital garden — notes on software, books, productivity, and more.',
};

// ---------------------------------------------------------------------------
// Root layout
// ---------------------------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        Inline script runs synchronously before React hydration so that the
        correct data-theme attribute is present on <html> from the very first
        paint — no flash of the wrong theme.
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializationScript,
          }}
        />
      </head>
      <body>
        {/* Skip to main content (keyboard accessibility) */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* Register Lit web components on the client */}
        <RegisterWebComponents />

        {/* Sticky site navigation */}
        <SiteNav />

        {/* Page content */}
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
