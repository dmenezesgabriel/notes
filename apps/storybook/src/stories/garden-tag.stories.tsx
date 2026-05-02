import type { TagVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface TagArgs {
  variant: TagVariant;
  label: string;
}

const meta: Meta<TagArgs> = {
  title: 'Components/GardenTag',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'accent', 'sage'],
      description: 'Visual variant — default (parchment), accent (terracotta), sage (green)',
      table: {
        type: { summary: 'default | accent | sage' },
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
    label: 'javascript',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Compact label chip for categories and metadata. Three variants driven by CSS custom properties — themes to light/dark automatically.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ variant, label }: TagArgs) => <garden-tag variant={variant}>{label}</garden-tag>;

export const Default: Story = { render };

export const Accent: Story = {
  args: { variant: 'accent', label: 'featured' },
  render,
};

export const Sage: Story = {
  args: { variant: 'sage', label: 'pkm' },
  render,
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: 16 }}>
      <garden-tag>zettelkasten</garden-tag>
      <garden-tag variant="accent">lit elements</garden-tag>
      <garden-tag variant="sage">next.js ssg</garden-tag>
      <garden-tag>storybook</garden-tag>
      <garden-tag variant="accent">pkm</garden-tag>
      <garden-tag variant="sage">frontend</garden-tag>
      <garden-tag>design</garden-tag>
    </div>
  ),
};

export const InCardFooter: Story = {
  name: 'In card footer',
  render: () => (
    <div
      style={{
        background: 'var(--ds-surface)',
        border: '1px solid var(--ds-border)',
        borderRadius: 12,
        padding: 16,
        maxWidth: 320,
      }}
    >
      <p style={{ fontSize: 14, fontFamily: 'var(--font-body)', marginBottom: 12, margin: 0 }}>
        On building a second brain
      </p>
      <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
        <garden-tag variant="accent">pkm</garden-tag>
        <garden-tag>zettelkasten</garden-tag>
        <garden-tag variant="sage">notes</garden-tag>
      </div>
    </div>
  ),
};
