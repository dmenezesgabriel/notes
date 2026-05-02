import './globals.css';

import type { Metadata } from 'next';
import { DM_Mono, Fraunces, Lora } from 'next/font/google';

import RegisterWebComponents from './components/register-webcomponents';
import { SiteNav } from './components/site-nav';

// ---------------------------------------------------------------------------
// Font loading via next/font (optimised, zero layout shift)
// ---------------------------------------------------------------------------
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

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
    <html lang="en" className={`${fraunces.variable} ${lora.variable} ${dmMono.variable}`}>
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
