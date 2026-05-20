import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const repoRoot = resolve(process.cwd(), '..', '..');

function readRepoFile(relativePath: string): string {
  const absolutePath = resolve(repoRoot, relativePath);
  expect(existsSync(absolutePath)).toBe(true);
  return readFileSync(absolutePath, 'utf8');
}

describe('design-system governance and Storybook parity', () => {
  it('documents the canonical promotion, token, and adapter boundaries for contributors', () => {
    const governanceDoc = readRepoFile('docs/design-system-governance.md');
    const readme = readRepoFile('README.md');
    const context = readRepoFile('CONTEXT.md');

    expect(governanceDoc).toContain('docs/atomic-design-migration-matrix.md');
    expect(governanceDoc).toContain('docs/adrs/001-atomic-component-promotion-boundary.md');
    expect(governanceDoc).toContain('docs/adrs/002-design-token-source-of-truth.md');
    expect(governanceDoc).toContain('docs/adrs/003-react-lit-interop-boundary.md');
    expect(governanceDoc).toContain('packages/components/src/styles/tokens.css');
    expect(governanceDoc).toContain('apps/site/app/lib/react-lit-adapter.ts');
    expect(governanceDoc).toContain('shared');
    expect(governanceDoc).toContain('site-local');
    expect(governanceDoc).toContain('legacy');
    expect(governanceDoc).toContain('undecided');

    expect(readme).toContain('Design system workflow');
    expect(readme).toContain('docs/design-system-governance.md');
    expect(readme).toContain('docs/atomic-design-migration-matrix.md');

    expect(context).toContain('### Legacy Export');
    expect(context).toContain('### Undecided Shared Component');
  });

  it('keeps Storybook organized by the approved atomic taxonomy and explicit status folders', () => {
    const storyTitles = [
      [
        'apps/storybook/src/stories/design-system-overview.stories.tsx',
        "title: 'Design System/Overview'",
      ],
      [
        'apps/storybook/src/stories/design-system-governance.stories.tsx',
        "title: 'Design System/Governance'",
      ],
      [
        'apps/storybook/src/stories/garden-breadcrumb.stories.tsx',
        "title: 'Molecules/GardenBreadcrumb'",
      ],
      ['apps/storybook/src/stories/garden-search.stories.tsx', "title: 'Molecules/GardenSearch'"],
      [
        'apps/storybook/src/stories/garden-blockquote.stories.tsx',
        "title: 'Molecules/GardenBlockquote'",
      ],
      ['apps/storybook/src/stories/garden-callout.stories.tsx', "title: 'Molecules/GardenCallout'"],
      ['apps/storybook/src/stories/garden-mermaid.stories.tsx', "title: 'Molecules/GardenMermaid'"],
      ['apps/storybook/src/stories/garden-card.stories.tsx', "title: 'Organisms/GardenCard'"],
      ['apps/storybook/src/stories/garden-nav.stories.tsx', "title: 'Organisms/GardenNav'"],
      ['apps/storybook/src/stories/garden-toc.stories.tsx', "title: 'Organisms/GardenToc'"],
      ['apps/storybook/src/stories/garden-banner.stories.tsx', "title: 'Undecided/GardenBanner'"],
      ['apps/storybook/src/stories/garden-sheet.stories.tsx', "title: 'Undecided/GardenSheet'"],
      ['apps/storybook/src/stories/garden-tape.stories.tsx', "title: 'Undecided/GardenTape'"],
      ['apps/storybook/src/stories/my-heading.stories.tsx', "title: 'Legacy/MyHeading'"],
    ] as const;

    for (const [filePath, title] of storyTitles) {
      expect(readRepoFile(filePath)).toContain(title);
    }
  });

  it('makes live-route proofs and replacement paths visible in docs and Storybook', () => {
    const overviewStory = readRepoFile(
      'apps/storybook/src/stories/design-system-overview.stories.tsx',
    );
    const governanceStory = readRepoFile(
      'apps/storybook/src/stories/design-system-governance.stories.tsx',
    );
    const bannerStory = readRepoFile('apps/storybook/src/stories/garden-banner.stories.tsx');
    const sheetStory = readRepoFile('apps/storybook/src/stories/garden-sheet.stories.tsx');
    const tapeStory = readRepoFile('apps/storybook/src/stories/garden-tape.stories.tsx');
    const headingStory = readRepoFile('apps/storybook/src/stories/my-heading.stories.tsx');
    const matrix = readRepoFile('docs/atomic-design-migration-matrix.md');

    expect(overviewStory).toContain('Home discovery slice');
    expect(overviewStory).toContain('Note page slice');
    expect(overviewStory).toContain('apps/site/app/lib/react-lit-adapter.ts');
    expect(overviewStory).toContain('packages/components/src/styles/tokens.css');

    expect(governanceStory).toContain('garden-banner');
    expect(governanceStory).toContain('garden-sheet');
    expect(governanceStory).toContain('garden-tape');
    expect(governanceStory).toContain('my-heading');
    expect(governanceStory).toContain('replacement path');

    expect(bannerStory).toContain('Status: `undecided` shared component.');
    expect(sheetStory).toContain('Status: `undecided` shared component.');
    expect(tapeStory).toContain('Status: `undecided` shared component.');
    expect(headingStory).toContain('Status: `legacy` export.');

    expect(matrix).toContain('keep marquee/banner composition route-local');
    expect(matrix).toContain('keep pinned-paper wrappers route-local');
    expect(matrix).toContain('use route-local decoration instead of expanding');
    expect(matrix).toContain('replace with semantic headings');
  });
});
