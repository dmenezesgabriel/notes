import type { HighlightVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface HighlightArgs {
  variant: HighlightVariant;
  label: string;
}

const proseHighlightStyle = {
  fontFamily: "'Special Elite', serif",
  fontSize: 15,
  color: 'var(--zine-ink-faded, #2c2820)',
};

const meta: Meta<HighlightArgs> = {
  title: 'Atoms/GardenHighlight',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'blue', 'red', 'green'],
      description: 'Visual variant — `default` (yellow), `blue`, `red`, `green`',
    },
    label: {
      control: 'text',
      description: 'Highlighted text (slot content)',
    },
  },
  args: {
    variant: 'default',
    label: 'raw, loud, opinionated',
  },
  parameters: {
    backgrounds: { default: 'paper' },
    docs: {
      description: {
        component:
          'Atom: zine-edition text highlighter. Background highlight with inline display. Uses the canonical shared `--zine-*` tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<HighlightArgs>;

export const Default: Story = {
  name: 'Default (yellow)',
  render: (args) => (
    <p style={proseHighlightStyle}>
      A <garden-highlight>{args.label}</garden-highlight> design language for long-form knowledge
      sites.
    </p>
  ),
};

export const Blue: Story = {
  render: () => (
    <p style={proseHighlightStyle}>
      This is <garden-highlight variant="blue">blue highlighted text</garden-highlight> in a
      sentence.
    </p>
  ),
};

export const Red: Story = {
  render: () => (
    <p style={proseHighlightStyle}>
      Warning: <garden-highlight variant="red">Breaking change ahead</garden-highlight>
    </p>
  ),
};

export const Green: Story = {
  render: () => (
    <p style={proseHighlightStyle}>
      The <garden-highlight variant="green">grid is the system.</garden-highlight>
    </p>
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
        background: 'var(--zine-paper, #f2edd7)',
      }}
    >
      <p style={proseHighlightStyle}>
        Default: <garden-highlight>yellow highlight</garden-highlight>
      </p>
      <p style={proseHighlightStyle}>
        Blue: <garden-highlight variant="blue">blue highlight</garden-highlight>
      </p>
      <p style={proseHighlightStyle}>
        Red: <garden-highlight variant="red">red highlight</garden-highlight>
      </p>
      <p style={proseHighlightStyle}>
        Green: <garden-highlight variant="green">green highlight</garden-highlight>
      </p>
    </div>
  ),
};
