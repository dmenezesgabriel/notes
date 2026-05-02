import type { ButtonVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface ButtonArgs {
  variant: ButtonVariant;
  disabled: boolean;
  label: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/GardenButton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'primary', 'ghost'],
      description: 'Visual variant',
      table: {
        type: { summary: 'default | primary | ghost' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Button label (slot content)',
    },
  },
  args: {
    variant: 'default',
    disabled: false,
    label: 'Save draft',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Action button. Three variants: `default` (outlined surface), `primary` (terracotta fill), `ghost` (no border). Supports an `icon-left` slot for leading icons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ variant, disabled, label }: ButtonArgs) => (
  <garden-button variant={variant} disabled={disabled}>
    {label}
  </garden-button>
);

export const Default: Story = { render };

export const Primary: Story = {
  args: { variant: 'primary', label: 'Publish note' },
  render,
};

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Cancel' },
  render,
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, label: 'Saving…' },
  render,
};

export const WithIcon: Story = {
  name: 'With leading icon',
  args: { label: 'Export' },
  render: ({ label, variant, disabled }) => (
    <garden-button variant={variant} disabled={disabled}>
      <svg
        slot="icon-left"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"
      >
        <path d="M7 1v6M4 4l3-3 3 3M2 10v2h10v-2" />
      </svg>
      {label}
    </garden-button>
  ),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: 16, alignItems: 'center' }}>
      <garden-button variant="primary">Publish note</garden-button>
      <garden-button>Save draft</garden-button>
      <garden-button variant="ghost">Cancel</garden-button>
      <garden-button disabled>Disabled</garden-button>
    </div>
  ),
};
