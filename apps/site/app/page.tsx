import type { Note } from '@notes/content';

import { HomePageContent } from './components/home-page-content';
import { readManifest } from './lib/note-processor';

export const metadata = {
  title: 'Digital Garden',
  description: 'A personal knowledge base — notes on software, books, and ideas.',
};

export default function HomePage() {
  const manifest = readManifest() ?? { notes: [], byId: {} as Record<string, Note> };

  return <HomePageContent notes={manifest.notes} />;
}
