import { type Note } from '@notes/content';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';

interface Manifest {
  notes: Note[];
}

export default async function Home() {
  const contentDir = path.join(process.cwd(), '.content');
  const manifestPath = path.join(contentDir, 'manifest.json');
  let manifest: Manifest = { notes: [] };
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Manifest;
    } catch (err) {
      console.error('Failed to read manifest', err);
    }
  }

  return (
    <main>
      <h1>Digital Garden</h1>
      <p>Auto-generated index from notes/</p>
      <ul>
        {manifest.notes.map((note) => (
          <li key={note.id}>
            <Link href={note.slug}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
