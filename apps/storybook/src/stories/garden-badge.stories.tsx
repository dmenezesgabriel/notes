import type { BadgeVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface BadgeArgs {
  variant: BadgeVariant;
  label: string;
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/GardenBadge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['accent', 'sage', 'muted', 'yellow', 'blue'],
      description:
        'Color variant — `accent` (red), `sage` (green), `muted` (grey), `yellow`, `blue`',
      table: {
        type: { summary: 'accent | sage | muted | yellow | blue' },
        defaultValue: { summary: 'accent' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text (slot content)',
    },
  },
  args: {
    variant: 'accent',
    label: 'NEU-BRUTALISM × PUNK ZINE',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Eyebrow / section-label text placed above headings. ' +
          'Small caps, letter-spaced, red by default. ' +
          'Prefixed with `///` separator in the zine style.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ variant, label }: BadgeArgs) => (
  <garden-badge variant={variant}>{label}</garden-badge>
);

export const Default: Story = { render };

export const Sage: Story = {
  args: { variant: 'sage', label: 'KNOWLEDGE MANAGEMENT' },
  render,
};

export const Muted: Story = {
  args: { variant: 'muted', label: 'MAY 2026' },
  render,
};

export const Yellow: Story = {
  args: { variant: 'yellow', label: 'FEATURED' },
  render,
};

export const Blue: Story = {
  args: { variant: 'blue', label: 'NEXT.JS SSG' },
  render,
};

export const AboveHeading: Story = {
  name: 'Above a heading',
  render: () => (
    <div
      style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.5rem',
        maxWidth: 480,
      }}
    >
      <garden-badge style={{ display: 'block', marginBottom: 10 }}>
        DESIGN SYSTEM · V0.1
      </garden-badge>
      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 32,
          letterSpacing: '0.04em',
          color: '#0e0c07',
          margin: '0 0 0.5rem',
          lineHeight: 1,
        }}
      >
        NEU-BRUTALIST COMPONENT LIBRARY
      </h1>
      <p
        style={{
          fontFamily: "'Special Elite', serif",
          fontSize: 14,
          color: '#2c2820',
          lineHeight: 1.7,
          margin: 0,
          borderLeft: '4px solid #0e0c07',
          paddingLeft: '1rem',
        }}
      >
        A raw, loud, opinionated design language for long-form knowledge sites.
      </p>
    </div>
  ),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: 24,
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        maxWidth: 360,
      }}
    >
      <garden-badge variant="accent">LIT ELEMENTS</garden-badge>
      <garden-badge variant="blue">NEXT.JS SSG</garden-badge>
      <garden-badge variant="yellow">STORYBOOK READY</garden-badge>
      <garden-badge variant="sage">RESPONSIVE</garden-badge>
      <garden-badge variant="muted">MAY 2026</garden-badge>
    </div>
  ),
};
