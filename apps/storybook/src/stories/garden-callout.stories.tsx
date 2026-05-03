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
      options: ['note', 'tip', 'warning', 'info'],
      description:
        'Semantic intent — drives border and background colour. `note` (yellow-lt), `tip` (green), `warning` (orange), `info` (blue)',
      table: {
        type: { summary: 'note | tip | warning | info' },
        defaultValue: { summary: 'note' },
      },
    },
    heading: {
      control: 'text',
      description: 'Rubber-stamp heading shown above the body',
    },
    body: {
      control: 'text',
      description: 'Body text (slot content)',
    },
  },
  args: {
    variant: 'note',
    heading: '✦ NOTE',
    body: 'Start with a weekly review — fifteen minutes every Sunday is enough to close the loop.',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Inline callout block. Uses `<div role="note">` internally. ' +
          'Four variants: `note` (yellow-lt), `tip` (green), `warning` (orange), `info` (blue). ' +
          'Hard offset border — xerox rubber stamp aesthetic.',
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
    heading: '✦ TIP',
    body: 'Start with a weekly review — fifteen minutes every Sunday.',
  },
  render,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    heading: '⚠ WARNING',
    body: 'This API changed in v0.2 — update component props before upgrading.',
  },
  render,
};

export const Info: Story = {
  args: {
    variant: 'info',
    heading: '→ RELATED',
    body: 'Zettelkasten, evergreen notes, PARA method, progressive summarisation.',
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
    <div
      style={{
        background: '#fafaf2',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.75rem',
        maxWidth: 560,
        backgroundImage:
          'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)',
      }}
    >
      <p
        style={{
          fontFamily: "'Special Elite', serif",
          fontSize: 14,
          lineHeight: 1.8,
          color: '#2c2820',
          margin: '0 0 1rem',
        }}
      >
        Every note you capture is a future conversation with yourself. The format matters less than
        the habit of externalising thinking.
      </p>
      <garden-callout heading="✦ TIP" style={{ marginBottom: 10 }}>
        Start with a weekly review — fifteen minutes every Sunday.
      </garden-callout>
      <garden-callout variant="info" heading="→ RELATED">
        Zettelkasten, evergreen notes, PARA method.
      </garden-callout>
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
        gap: 10,
        padding: 24,
        background: '#f2edd7',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        maxWidth: 520,
      }}
    >
      <garden-callout variant="note" heading="✦ NOTE">
        Default note callout — yellow-lt background.
      </garden-callout>
      <garden-callout variant="tip" heading="✦ TIP">
        Tip callout — green background.
      </garden-callout>
      <garden-callout variant="warning" heading="⚠ WARNING">
        Warning callout — orange border.
      </garden-callout>
      <garden-callout variant="info" heading="→ RELATED">
        Info callout — blue border, light blue background.
      </garden-callout>
    </div>
  ),
};
