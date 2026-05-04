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
          'Compact stamp chip for categories and metadata. ' +
          'Hard borders, flat offset shadow, slight rotation — hand-stamped feel. ' +
          'Themes automatically via `--zine-*` CSS variables.',
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
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
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
