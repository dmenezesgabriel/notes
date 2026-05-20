import type { TocEntry } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { expectShadowTextContrast } from './story-helpers/dark-mode-contrast';
import { DarkThemeFrame } from './story-helpers/dark-theme-frame';

interface TocArgs {
  heading: string;
  items: TocEntry[];
}

const defaultItems: TocEntry[] = [
  { id: 'intro', label: 'Introduction', active: true },
  { id: 'capture', label: 'The capture habit', depth: 2 },
  { id: 'organisation', label: 'Organisation', depth: 2 },
  { id: 'retrieval', label: 'Retrieval', depth: 2 },
  { id: 'see-also', label: 'See also' },
];

const meta: Meta<TocArgs> = {
  title: 'Organisms/GardenToc',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Marker-font header text above the list',
      table: { defaultValue: { summary: 'On this page' } },
    },
    items: {
      control: 'object',
      description:
        'Array of `{ id, label, depth?, active? }`. `depth: 2` indents the item. `active: true` highlights it in red with a checked box.',
    },
  },
  args: {
    heading: 'On this page',
    items: defaultItems,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Hand-drawn checklist TOC sidebar. ' +
          'Rotated slightly, Permanent Marker title, checkbox items. ' +
          'Active item highlighted in red with `✕` in the checkbox.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ heading, items }: TocArgs) => (
  <garden-toc heading={heading} items={items} style={{ maxWidth: 200 }} />
);

export const Default: Story = { render };

export const CustomHeading: Story = {
  name: 'Custom heading',
  args: { heading: 'Contents' },
  render,
};

export const FlatList: Story = {
  name: 'Flat list',
  args: {
    items: [
      { id: 'intro', label: 'Introduction', active: true },
      { id: 'background', label: 'Background' },
      { id: 'implementation', label: 'Implementation' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
  },
  render,
};

export const InArticleLayout: Story = {
  name: 'In article layout',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 180px',
        gap: 16,
        padding: 16,
        maxWidth: 760,
        alignItems: 'start',
        background: 'var(--ds-page, #11111b)',
      }}
    >
      {/* Reading pane */}
      <div
        style={{
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderRight: '5px solid var(--zine-ink, #0e0c07)',
          borderBottom: '5px solid var(--zine-ink, #0e0c07)',
          padding: '1.75rem',
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)',
        }}
      >
        <div
          style={{
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 10,
            color: 'var(--zine-muted, #6b6050)',
            marginBottom: 6,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
          }}
        >
          NOTES / PKM / SECOND-BRAIN
        </div>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 26,
            letterSpacing: '0.03em',
            color: 'var(--zine-ink, #0e0c07)',
            margin: '0 0 6px',
            lineHeight: 1.15,
          }}
        >
          On building a second brain
        </h1>
        <p
          style={{
            fontFamily: "'Special Elite', serif",
            fontSize: 14,
            color: 'var(--zine-ink-faded, #2c2820)',
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          The goal isn&apos;t to remember everything — it&apos;s to think better by offloading
          memory to a trusted external system.
        </p>
      </div>

      {/* TOC */}
      <garden-toc items={defaultItems} />
    </div>
  ),
};

export const DarkModeContrastReview: Story = {
  name: 'Dark mode contrast review',
  tags: ['dark-contrast'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <DarkThemeFrame
      label="Dark-mode TOC contrast review"
      style={{ padding: '2rem', background: 'var(--ds-page, #11111b)' }}
    >
      <garden-toc heading="On this page" items={defaultItems} style={{ maxWidth: 200 }} />
    </DarkThemeFrame>
  ),
  play: async ({ canvasElement }) => {
    expect(canvasElement.querySelector('[data-theme="dark"]')).not.toBeNull();

    await new Promise((resolve) => globalThis.setTimeout(resolve, 0));

    const toc = canvasElement.querySelector('garden-toc');

    expect(toc).not.toBeNull();

    expectShadowTextContrast(toc as Element, '[part="title"]', 'TOC title');
  },
};
