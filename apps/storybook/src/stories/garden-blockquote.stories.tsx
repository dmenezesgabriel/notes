import type { BlockquoteVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface BlockquoteArgs {
  variant: BlockquoteVariant;
  cite: string;
}

const meta: Meta<BlockquoteArgs> = {
  title: 'Components/Blockquote',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'accent'],
      description: 'Visual variant — `default` (zine paper), `accent` (red accent)',
    },
    cite: {
      control: 'text',
      description: 'Optional attribution for the quote',
    },
  },
  args: {
    variant: 'default',
    cite: '',
  },
  parameters: {
    backgrounds: { default: 'paper' },
    docs: {
      description: {
        component:
          'Zine-edition xerox blockquote. Left border, large quote mark, italic body, optional citation. Uses `--zine-ink` and `--zine-red` tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlockquoteArgs>;

export const Default: Story = {
  render: (args) => (
    <garden-blockquote cite={args.cite}>
      We are what we repeatedly do. Excellence, then, is not an act, but a habit.
    </garden-blockquote>
  ),
};

export const WithCitation: Story = {
  args: {
    cite: 'Aristotle',
  },
  render: (args) => (
    <garden-blockquote cite={args.cite}>
      We are what we repeatedly do. Excellence, then, is not an act, but a habit.
    </garden-blockquote>
  ),
};

export const InArticle: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 600,
        background: '#fafaf2',
        padding: '1.75rem',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
      }}
    >
      <p
        style={{
          fontFamily: "'Special Elite', serif",
          fontSize: 14,
          color: '#2c2820',
          lineHeight: 1.8,
          margin: '0 0 1rem',
        }}
      >
        The goal isn't to remember everything — it's to
        <span style={{ background: '#f5c800', padding: '0 3px' }}>think better</span> by offloading
        memory to a trusted system.
      </p>
      <garden-blockquote cite="Aristotle">
        We are what we repeatedly do. Excellence, then, is not an act, but a habit.
      </garden-blockquote>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '2rem',
        background: '#f2edd7',
      }}
    >
      <garden-blockquote>Default blockquote without citation.</garden-blockquote>
      <garden-blockquote cite="Author">Default blockquote with citation.</garden-blockquote>
    </div>
  ),
};
