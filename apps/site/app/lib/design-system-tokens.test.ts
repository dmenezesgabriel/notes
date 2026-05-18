import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const repoRoot = resolve(process.cwd(), '..', '..');

function readRepoFile(relativePath: string): string {
  const absolutePath = resolve(repoRoot, relativePath);
  expect(existsSync(absolutePath)).toBe(true);
  return readFileSync(absolutePath, 'utf8');
}

describe('design-system token source of truth', () => {
  it('keeps packages/components tokens.css as the canonical shared token source for the site and Storybook', () => {
    const canonicalTokens = readRepoFile('packages/components/src/styles/tokens.css');
    const siteGlobals = readRepoFile('apps/site/app/globals.css');
    const storybookTokens = readRepoFile('apps/storybook/src/styles/tokens.css');

    expect(canonicalTokens).toContain('--zine-paper: #f2edd7;');
    expect(canonicalTokens).toContain("[data-theme='dark']");

    expect(siteGlobals).toContain(
      "@import url('../../../packages/components/src/styles/tokens.css');",
    );
    expect(storybookTokens).toContain(
      "@import url('../../../../packages/components/src/styles/tokens.css');",
    );

    expect(siteGlobals).not.toMatch(/--zine-paper\s*:/);
    expect(siteGlobals).not.toMatch(/--ds-accent\s*:/);
    expect(storybookTokens).not.toMatch(/--zine-paper\s*:/);
    expect(storybookTokens).not.toMatch(/--ds-accent\s*:/);
  });

  it('organizes in-scope primitive atoms under the Storybook atom taxonomy', () => {
    const atomStories = [
      ['apps/storybook/src/stories/garden-tag.stories.tsx', "title: 'Atoms/GardenTag'"],
      ['apps/storybook/src/stories/garden-badge.stories.tsx', "title: 'Atoms/GardenBadge'"],
      ['apps/storybook/src/stories/garden-button.stories.tsx', "title: 'Atoms/GardenButton'"],
      ['apps/storybook/src/stories/garden-divider.stories.tsx', "title: 'Atoms/GardenDivider'"],
      ['apps/storybook/src/stories/garden-highlight.stories.tsx', "title: 'Atoms/GardenHighlight'"],
    ] as const;

    for (const [filePath, title] of atomStories) {
      expect(readRepoFile(filePath)).toContain(title);
    }
  });

  it('keeps focus, disabled, and theme review states visible for the in-scope atoms', () => {
    const storybookPreview = readRepoFile('apps/storybook/.storybook/preview.ts');
    const buttonStory = readRepoFile('apps/storybook/src/stories/garden-button.stories.tsx');
    const tagStory = readRepoFile('apps/storybook/src/stories/garden-tag.stories.tsx');
    const buttonSource = readRepoFile('packages/components/src/garden-button/garden-button.ts');
    const tagSource = readRepoFile('packages/components/src/garden-tag/garden-tag.ts');

    expect(storybookPreview).toContain("themes: { light: '', dark: 'dark' }");
    expect(buttonStory).toContain('export const Disabled: Story');
    expect(buttonStory).toContain("name: 'All variants'");
    expect(tagStory).toContain("name: 'All variants'");
    expect(buttonSource).toContain('button:focus-visible');
    expect(buttonSource).toContain(':host([disabled])');
    expect(tagSource).toContain("a[part='base']:focus-visible");
  });

  it('uses shared tokens instead of hard-coded light-theme wrapper colors in atom stories', () => {
    const badgeStory = readRepoFile('apps/storybook/src/stories/garden-badge.stories.tsx');
    const dividerStory = readRepoFile('apps/storybook/src/stories/garden-divider.stories.tsx');
    const highlightStory = readRepoFile('apps/storybook/src/stories/garden-highlight.stories.tsx');
    const tagStory = readRepoFile('apps/storybook/src/stories/garden-tag.stories.tsx');
    const buttonStory = readRepoFile('apps/storybook/src/stories/garden-button.stories.tsx');

    expect(badgeStory).toContain("border: '3px solid var(--zine-ink, #0e0c07)'");
    expect(badgeStory).toContain("color: 'var(--zine-ink, #0e0c07)'");
    expect(badgeStory).toContain("color: 'var(--zine-ink-faded, #2c2820)'");
    expect(badgeStory).toContain("borderLeft: '4px solid var(--zine-ink, #0e0c07)'");

    expect(dividerStory).toContain("color: 'var(--zine-muted, #6b6050)'");

    expect(highlightStory).toContain("color: 'var(--zine-ink-faded, #2c2820)'");

    expect(tagStory).toContain("border: '3px solid var(--zine-ink, #0e0c07)'");
    expect(buttonStory).toContain("border: '3px solid var(--zine-ink, #0e0c07)'");
  });

  it('configures named divider stories to exercise the solid and red variants', () => {
    const dividerStory = readRepoFile('apps/storybook/src/stories/garden-divider.stories.tsx');

    expect(dividerStory).toContain('export const Solid: Story = {');
    expect(dividerStory).toContain("args: { variant: 'solid' },");
    expect(dividerStory).toContain('export const Red: Story = {');
    expect(dividerStory).toContain("args: { variant: 'red' },");
  });
});
