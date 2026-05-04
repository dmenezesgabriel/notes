import type { DividerVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface DividerArgs {
  variant: DividerVariant;
}

const meta: Meta<DividerArgs> = {
  title: 'Components/Divider',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['dashed', 'solid', 'red'],
      description: 'Visual variant — `dashed` (default, dotted), `solid`, `red`',
    },
  },
  args: {
    variant: 'dashed',
  },
  parameters: {
    backgrounds: { default: 'paper' },
    docs: {
      description: {
        component:
          'Zine-edition hand-drawn style divider. Dashed (default), solid, or red variants. Uses `--zine-ink` token.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<DividerArgs>;

export const Default: Story = {
  name: 'Dashed (default)',
  render: () => <garden-divider></garden-divider>,
};

export const Solid: Story = {
  render: (args) => <garden-divider variant={args.variant}></garden-divider>,
};

export const Red: Story = {
  render: (args) => <garden-divider variant={args.variant}></garden-divider>,
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        padding: '2rem',
        background: 'var(--zine-paper, #f2edd7)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <div>
        <strong
          style={{ fontFamily: "'Cutive Mono', monospace", fontSize: '11px', color: '#6b6050' }}
        >
          DASHED (default)
        </strong>
        <garden-divider></garden-divider>
      </div>
      <div>
        <strong
          style={{ fontFamily: "'Cutive Mono', monospace", fontSize: '11px', color: '#6b6050' }}
        >
          SOLID
        </strong>
        <garden-divider variant="solid"></garden-divider>
      </div>
      <div>
        <strong
          style={{ fontFamily: "'Cutive Mono', monospace", fontSize: '11px', color: '#6b6050' }}
        >
          RED
        </strong>
        <garden-divider variant="red"></garden-divider>
      </div>
    </div>
  ),
};
