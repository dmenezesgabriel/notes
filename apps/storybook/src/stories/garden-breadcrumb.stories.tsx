import type { BreadcrumbItem } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { expectShadowTextContrast } from './story-helpers/dark-mode-contrast';
import { DarkThemeFrame } from './story-helpers/dark-theme-frame';

interface BreadcrumbArgs {
  items: BreadcrumbItem[];
}

const meta: Meta<BreadcrumbArgs> = {
  title: 'Molecules/GardenBreadcrumb',
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description:
        'Array of `{ label, href? }`. The last item is always the current page (`aria-current="page"` on its span, no link).',
    },
  },
  args: {
    items: [
      { label: 'home', href: '/' },
      { label: 'notes', href: '/notes' },
      { label: 'design system' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          'Accessible navigation trail. Mono font, white background, hard border, red `/` separators. ' +
          'Renders `<nav aria-label="Breadcrumb">` with an ordered list. ' +
          'Last item is automatically marked `aria-current="page"` in Black Han Sans stamp style.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ items }: BreadcrumbArgs) => <garden-breadcrumb items={items} />;

export const Default: Story = { render };

export const TwoLevels: Story = {
  name: 'Two levels',
  args: {
    items: [{ label: 'home', href: '/' }, { label: 'on building a second brain' }],
  },
  render,
};

export const DeepPath: Story = {
  name: 'Deep path',
  args: {
    items: [
      { label: 'home', href: '/' },
      { label: 'wiki', href: '/wiki' },
      { label: 'pkm', href: '/wiki/pkm' },
      { label: 'zettelkasten' },
    ],
  },
  render,
};

export const InArticleHeader: Story = {
  name: 'In article header',
  render: () => (
    <div
      style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid var(--zine-ink, #0e0c07)',
        borderRight: '5px solid var(--zine-ink, #0e0c07)',
        borderBottom: '5px solid var(--zine-ink, #0e0c07)',
        padding: '1.5rem 1.75rem',
        maxWidth: 600,
        backgroundImage:
          'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)',
      }}
    >
      <garden-breadcrumb
        items={[
          { label: 'home', href: '/' },
          { label: 'notes', href: '/notes' },
          { label: 'pkm', href: '/notes/pkm' },
          { label: 'On building a second brain' },
        ]}
        style={{ marginBottom: 14 }}
      />
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
          fontSize: 28,
          letterSpacing: '0.03em',
          color: 'var(--zine-ink, #0e0c07)',
          margin: 0,
          lineHeight: 1.15,
        }}
      >
        On building a second brain
      </h1>
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
      label="Dark-mode breadcrumb contrast review"
      style={{ padding: '2rem', background: 'var(--ds-page, #11111b)' }}
    >
      <garden-breadcrumb
        items={[
          { label: 'home', href: '/' },
          { label: 'notes', href: '/notes' },
          { label: 'On building a second brain' },
        ]}
      />
    </DarkThemeFrame>
  ),
  play: async ({ canvasElement }) => {
    expect(canvasElement.querySelector('[data-theme="dark"]')).not.toBeNull();

    await new Promise((resolve) => globalThis.setTimeout(resolve, 0));

    const bc = canvasElement.querySelector('garden-breadcrumb');

    expect(bc).not.toBeNull();

    expectShadowTextContrast(bc as Element, 'a', 'Breadcrumb link');
    expectShadowTextContrast(bc as Element, '[aria-current="page"]', 'Current breadcrumb item');
  },
};
