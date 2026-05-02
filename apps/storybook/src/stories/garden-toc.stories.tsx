import type { TocEntry } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

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
  title: 'Components/GardenToc',
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Header text above the list',
      table: { defaultValue: { summary: 'On this page' } },
    },
    items: {
      control: 'object',
      description:
        'Array of `{ id, label, depth?, active? }`. `depth: 2` indents the item. `active: true` highlights it.',
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
          'Sticky table-of-contents sidebar. Active item highlighted in accent colour. `depth: 2` items are indented.',
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
      }}
    >
      <article
        style={{
          background: 'var(--ds-surface)',
          border: '1px solid var(--ds-border)',
          borderRadius: 12,
          padding: 24,
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            color: 'var(--ds-ink)',
            marginTop: 0,
          }}
        >
          On building a second brain
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.75,
            color: 'var(--ds-muted)',
            margin: 0,
          }}
        >
          The goal isn't to remember everything — it's to think better by offloading memory to a
          trusted external system. Your brain is for generating ideas, not storing them.
        </p>
      </article>
      <garden-toc items={defaultItems} />
    </div>
  ),
};
