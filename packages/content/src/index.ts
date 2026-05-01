import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import fg from 'fast-glob';
import MiniSearch from 'minisearch';

export interface Note {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  outlinks: string[];
  backlinks: string[];
}

export interface Manifest {
  notes: Note[];
  byId: Record<string, Note>;
}

function findNotesDir(startDir = process.cwd()): string {
  let dir = startDir;
  for (let i = 0; i < 8; i++) {
    const candidate = path.join(dir, 'notes');
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error('notes directory not found (looked up from ' + startDir + ')');
}

function normalizeIdFromFile(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

function idToSlug(id: string): string {
  return '/' + id.split('.').join('/');
}

export async function buildContent(opts: { notesDir?: string; outDir?: string } = {}) {
  const notesDir = opts.notesDir || findNotesDir();
  const outDir = opts.outDir || path.resolve(process.cwd(), '..', '..', 'apps', 'site', '.content');

  console.log('[content] notesDir=', notesDir);
  console.log('[content] outDir=', outDir);

  const entries = await fg(['**/*.{md,mdx}'], {
    cwd: notesDir,
    absolute: true,
    dot: true,
    ignore: ['**/assets/**', '**/.obsidian/**']
  });

  const notes: Note[] = [];
  const docsForIndex: Array<{ id: string; title: string; content: string; slug: string }> = [];
  const idMap = new Map<string, Note>();

  for (const file of entries) {
    const raw = fs.readFileSync(file, 'utf8');

    // sanitize frontmatter values that contain unquoted colons (e.g. "title: Tag: AWS")
    let rawForMatter = raw;
    const fmMatch = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    if (fmMatch) {
      const fm = fmMatch[1];
      const lines = fm.split(/\r?\n/);
      const newLines = lines.map(line => {
        const m = line.match(/^(\s*[A-Za-z0-9_-]+):\s*(.+)$/);
        if (m) {
          const key = m[1];
          const val = m[2];
          if (val.includes(':') && !/^['"]/.test(val)) {
            return `${key}: "${val.replace(/"/g, '\\"')}"`;
          }
        }
        return line;
      });
      rawForMatter = raw.replace(fm, newLines.join('\n'));
    }

    const parsed = matter(rawForMatter);
    const content = parsed.content || '';
    const id = normalizeIdFromFile(file);
    const slug = idToSlug(id);
    const title = (parsed.data && parsed.data.title) || id.split('.').slice(-1)[0];
    const excerpt = content.replace(/\n/g, ' ').slice(0, 300);

    // extract wiki-links
    const outlinks: string[] = [];
    const wikiRE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
    let m;
    while ((m = wikiRE.exec(raw)) !== null) {
      const targetRaw = (m[1] || '').trim();
      const targetId = targetRaw.replace(/\//g, '.').replace(/^\./, '');
      if (targetId) outlinks.push(targetId);
    }

    const note: Note = { id, slug, title, excerpt, outlinks, backlinks: [] };
    notes.push(note);
    idMap.set(id, note);
    docsForIndex.push({ id, title, content, slug });
  }

  // compute backlinks
  for (const note of notes) {
    for (const target of note.outlinks) {
      const targetNote = idMap.get(target);
      if (targetNote) targetNote.backlinks.push(note.id);
    }
  }

  fs.mkdirSync(outDir, { recursive: true });

  // manifest — metadata only, no content, no file copies
  const manifest: Manifest = {
    notes,
    byId: Object.fromEntries(notes.map(n => [n.id, n]))
  };
  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  // search index — MiniSearch serialised; slim docs (id/title/slug only) for result display
  const miniSearch = new MiniSearch({ fields: ['title', 'content'], storeFields: ['title', 'slug'] });
  miniSearch.addAll(docsForIndex.map(d => ({ id: d.id, title: d.title, content: d.content })));
  const indexJson = {
    index: miniSearch.toJSON(),
    docs: notes.map(n => ({ id: n.id, title: n.title, slug: n.slug }))
  };
  fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(indexJson, null, 2), 'utf8');

  console.log(`[content] wrote manifest + search index for ${notes.length} notes → ${outDir}`);
  console.log('[content] notes are read at render time directly from', notesDir);
  return { notesCount: notes.length, outDir };
}

if (require.main === module) {
  (async () => {
    const argv = process.argv.slice(2);
    const outArgIndex = argv.indexOf('--out');
    const notesArgIndex = argv.indexOf('--notes');
    const out = outArgIndex !== -1 && argv[outArgIndex + 1] ? path.resolve(argv[outArgIndex + 1]) : undefined;
    const notesArg = notesArgIndex !== -1 && argv[notesArgIndex + 1] ? path.resolve(argv[notesArgIndex + 1]) : undefined;
    try {
      await buildContent({ notesDir: notesArg, outDir: out });
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
}
