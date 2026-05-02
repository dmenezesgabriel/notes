import type { CalloutVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface CalloutArgs {
  variant: CalloutVariant;
  heading: string;
  body: string;
}

const meta: Meta<CalloutArgs> = {
  title: 'Components/GardenCallout',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['note', 'tip', 'warning'],
      description: 'Semantic intent — drives border and background colour',
      table: {
        type: { summary: 'note | tip | warning' },
        defaultValue: { summary: 'note' },
      },
    },
    heading: {
      control: 'text',
      description: 'Optional bold heading shown above the body',
    },
    body: {
      control: 'text',
      description: 'Body text (slot content)',
    },
  },
  args: {
    variant: 'note',
    heading: 'Note',
    body: 'Start with a weekly review — fifteen minutes every Sunday is enough to close the loop.',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Inline highlighted block. Uses `<div role="note">` internally. Three variants: `note` (terracotta), `tip` (sage), `warning` (amber).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ variant, heading, body }: CalloutArgs) => (
  <garden-callout variant={variant} heading={heading} style={{ maxWidth: 480 }}>
    {body}
  </garden-callout>
);

export const Default: Story = { render };

export const Tip: Story = {
  args: {
    variant: 'tip',
    heading: 'Related',
    body: 'Zettelkasten, evergreen notes, PARA method, progressive summarisation.',
  },
  render,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    heading: 'Breaking change',
    body: 'This API changed in v0.2 — update component props before upgrading.',
  },
  render,
};

export const NoHeading: Story = {
  name: 'Without heading',
  args: { heading: '', body: 'Your brain is for generating ideas, not storing them.' },
  render,
};

export const InArticle: Story = {
  name: 'In article body',
  render: () => (
    <article
      style={{
        background: 'var(--ds-surface)',
        border: '1px solid var(--ds-border)',
        borderRadius: 12,
        padding: '1.5rem',
        maxWidth: 560,
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          lineHeight: 1.75,
          color: 'var(--ds-muted)',
          margin: '0 0 1rem',
        }}
      >
        Every note you capture is a future conversation with yourself. The format matters less than
        the habit of externalising thinking.
      </p>
      <garden-callout heading="Tip" style={{ marginBottom: 12 }}>
        Start with a weekly review — fifteen minutes every Sunday.
      </garden-callout>
      <garden-callout variant="tip" heading="Related">
        Zettelkasten, evergreen notes, PARA method.
      </garden-callout>
    </article>
  ),
};
