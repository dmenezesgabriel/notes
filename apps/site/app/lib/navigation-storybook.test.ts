import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const repoRoot = resolve(process.cwd(), '..', '..');

function readRepoFile(relativePath: string): string {
  const absolutePath = resolve(repoRoot, relativePath);
  expect(existsSync(absolutePath)).toBe(true);
  return readFileSync(absolutePath, 'utf8');
}

describe('navigation Storybook coverage', () => {
  it('documents realistic home and note route contexts for garden-nav', () => {
    const navStory = readRepoFile('apps/storybook/src/stories/garden-nav.stories.tsx');

    expect(navStory).toContain("name: 'Home route context'");
    expect(navStory).toContain("name: 'Note route context'");
    expect(navStory).toContain("{ label: 'books', href: '/notes/books/' }");
    expect(navStory).toContain('A Philosophy of Software Design');
  });
});
