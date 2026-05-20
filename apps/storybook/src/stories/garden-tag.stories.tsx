import type { TagVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { expectShadowTextContrast } from './story-helpers/dark-mode-contrast';
import { DarkThemeFrame } from './story-helpers/dark-theme-frame';

interface TagArgs {
  variant: TagVariant;
  label: string;
}

const meta: Meta<TagArgs> = {
  title: 'Atoms/GardenTag',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'accent', 'sage', 'green', 'yellow', 'blue'],
      description:
        'Visual variant — `default` (zine paper), `accent` (red), `sage`/`green` (green), `yellow`, `blue`',
      table: {
        type: { summary: 'default | accent | sage | green | yellow | blue' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Tag text (slot content)',
    },
  },
  args: {
    variant: 'default',
    label: 'ZETTELKASTEN',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Atom: compact stamp chip for categories and metadata. ' +
          'Hard borders, flat offset shadow, slight rotation — hand-stamped feel. ' +
          'Themes automatically via the canonical shared `--zine-*` CSS tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ variant, label }: TagArgs) => <garden-tag variant={variant}>{label}</garden-tag>;

export const Default: Story = { render };

export const Accent: Story = {
  args: { variant: 'accent', label: 'LIT ELEMENTS' },
  render,
};

export const Blue: Story = {
  args: { variant: 'blue', label: 'NEXT.JS SSG' },
  render,
};

export const Yellow: Story = {
  args: { variant: 'yellow', label: 'STORYBOOK' },
  render,
};

export const Sage: Story = {
  args: { variant: 'sage', label: 'PKM' },
  render,
};

export const Green: Story = {
  args: { variant: 'green', label: 'RESPONSIVE' },
  render,
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        padding: 24,
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid var(--zine-ink, #0e0c07)',
        borderRight: '5px solid var(--zine-ink, #0e0c07)',
        borderBottom: '5px solid var(--zine-ink, #0e0c07)',
        maxWidth: 500,
      }}
    >
      <garden-tag variant="accent">LIT ELEMENTS</garden-tag>
      <garden-tag variant="blue">NEXT.JS SSG</garden-tag>
      <garden-tag variant="yellow">STORYBOOK</garden-tag>
      <garden-tag variant="green">RESPONSIVE</garden-tag>
      <garden-tag variant="sage">PKM</garden-tag>
      <garden-tag>NO FRAMEWORK BS</garden-tag>
      <garden-tag>ZETTELKASTEN</garden-tag>
    </div>
  ),
};

export const InCardFooter: Story = {
  name: 'In card footer',
  render: () => (
    <garden-card
      headline="On building a second brain"
      meta="3 DAYS AGO · 8 MIN READ"
      excerpt="The goal isn't to remember everything — it's to think better."
      href="/notes/second-brain"
      variant="featured"
      style={{ maxWidth: 320 }}
    >
      <garden-tag slot="footer" variant="accent">
        PKM
      </garden-tag>
      <garden-tag slot="footer">ZETTELKASTEN</garden-tag>
      <garden-tag slot="footer" variant="blue">
        NOTES
      </garden-tag>
    </garden-card>
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
      label="Dark-mode tag contrast review"
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        padding: 24,
        background: 'var(--ds-page, #11111b)',
        border: '3px solid var(--zine-ink, #cdd6f4)',
        borderRight: '5px solid var(--zine-ink, #cdd6f4)',
        borderBottom: '5px solid var(--zine-ink, #cdd6f4)',
        maxWidth: 500,
      }}
    >
      <garden-tag variant="accent">
        LIT ELEMENTS
      </garden-tag>
      <garden-tag variant="blue">
        NEXT.JS SSG
      </garden-tag>
      <garden-tag variant="yellow">
        STORYBOOK
      </garden-tag>
      <garden-tag variant="green">
        RESPONSIVE
      </garden-tag>
      <garden-tag variant="sage">
        PKM
      </garden-tag>
    </DarkThemeFrame>
  ),
  play: async ({ canvasElement }) => {
    expect(canvasElement.querySelector('[data-theme="dark"]')).not.toBeNull();

    const tagHosts = Array.from(canvasElement.querySelectorAll('garden-tag'));
    const [accentTag, blueTag, yellowTag, greenTag, sageTag] = tagHosts;

    expect(tagHosts).toHaveLength(5);
    expect(accentTag).toBeDefined();
    expect(blueTag).toBeDefined();
    expect(yellowTag).toBeDefined();
    expect(greenTag).toBeDefined();
    expect(sageTag).toBeDefined();

    expectShadowTextContrast(accentTag as Element, '[part="base"]', 'Accent tag label');
    expectShadowTextContrast(blueTag as Element, '[part="base"]', 'Blue tag label');
    expectShadowTextContrast(yellowTag as Element, '[part="base"]', 'Yellow tag label');
    expectShadowTextContrast(greenTag as Element, '[part="base"]', 'Green tag label');
    expectShadowTextContrast(sageTag as Element, '[part="base"]', 'Sage tag label');
  },
};
