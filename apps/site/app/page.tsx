import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function Home() {
  const contentDir = path.join(process.cwd(), '.content');
  const manifestPath = path.join(contentDir, 'manifest.json');
  let manifest: any = { notes: [] };
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (err) {
      console.error('Failed to read manifest', err);
    }
  }

  return (
    <main>
      <h1>Digital Garden</h1>
      <p>Auto-generated index from notes/</p>
      <ul>
        {manifest.notes.map((note: any) => (
          <li key={note.id}>
            <Link href={note.slug}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
