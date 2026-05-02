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
      options: ['accent', 'sage', 'muted'],
      description: 'Color variant',
      table: {
        type: { summary: 'accent | sage | muted' },
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
    label: 'design system · v0.1',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Eyebrow / section-label text placed above headings. Small caps, letter-spaced, accent-coloured by default.',
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
  args: { variant: 'sage', label: 'knowledge management' },
  render,
};

export const Muted: Story = {
  args: { variant: 'muted', label: 'May 2026' },
  render,
};

export const AboveHeading: Story = {
  name: 'Above a heading',
  render: () => (
    <div style={{ padding: 24, background: 'var(--ds-surface)' }}>
      <garden-badge style={{ display: 'block', marginBottom: 8 }}>
        design system · v0.1
      </garden-badge>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          margin: 0,
          color: 'var(--ds-ink)',
        }}
      >
        Cozy minimal — component library
      </h1>
    </div>
  ),
};
