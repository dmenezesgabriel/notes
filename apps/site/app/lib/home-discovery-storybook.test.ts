import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const repoRoot = resolve(process.cwd(), '..', '..');

function readRepoFile(relativePath: string): string {
  const absolutePath = resolve(repoRoot, relativePath);
  expect(existsSync(absolutePath)).toBe(true);
  return readFileSync(absolutePath, 'utf8');
}

describe('home discovery Storybook coverage', () => {
  it('documents real-content card and search states used by the home discovery slice', () => {
    const cardStory = readRepoFile('apps/storybook/src/stories/garden-card.stories.tsx');
    const searchStory = readRepoFile('apps/storybook/src/stories/garden-search.stories.tsx');

    expect(cardStory).toContain("name: 'Home discovery grid'");
    expect(cardStory).toContain('A Philosophy of Software Design');

    expect(searchStory).toContain("name: 'Home hero search'");
    expect(searchStory).toContain(
      'Search notes across books, software engineering, productivity, and design.',
    );
  });
});
