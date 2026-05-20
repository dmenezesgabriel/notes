import type { ButtonVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { expectShadowTextContrast } from './story-helpers/dark-mode-contrast';
import { DarkThemeFrame } from './story-helpers/dark-theme-frame';

interface ButtonArgs {
  variant: ButtonVariant;
  disabled: boolean;
  label: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Atoms/GardenButton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'primary', 'yellow', 'blue', 'ghost'],
      description:
        'Visual variant — `default` (paper fill), `primary` (red/punk fill), `yellow` (yellow fill), `blue` (blue fill), `ghost` (no fill, muted border)',
      table: {
        type: { summary: 'default | primary | yellow | blue | ghost' },
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
    label: '✂ CLIP',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Atom: punk rubber stamp button. Five variants: `default` (zine paper), `primary` (red), `yellow`, `blue`, `ghost` (no border). ' +
          'Thick right+bottom border creates the neubrutalist offset press effect. Supports an `icon-left` slot and uses the canonical shared tokens.',
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
  args: { variant: 'primary', label: '✦ PUBLISH NOTE' },
  render,
};

export const Yellow: Story = {
  args: { variant: 'yellow', label: '◆ SAVE DRAFT' },
  render,
};

export const Blue: Story = {
  args: { variant: 'blue', label: '↑ EXPORT' },
  render,
};

export const Ghost: Story = {
  args: { variant: 'ghost', label: '✕ CANCEL' },
  render,
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, label: 'SAVING…' },
  render,
};

export const WithIcon: Story = {
  name: 'With leading icon',
  args: { label: '↑ EXPORT' },
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0,
        padding: 24,
        alignItems: 'center',
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid var(--zine-ink, #0e0c07)',
        borderRight: '5px solid var(--zine-ink, #0e0c07)',
        borderBottom: '5px solid var(--zine-ink, #0e0c07)',
      }}
    >
      <garden-button variant="primary">✦ PUBLISH NOTE</garden-button>
      <garden-button variant="yellow">◆ SAVE DRAFT</garden-button>
      <garden-button variant="blue">↑ EXPORT</garden-button>
      <garden-button>✂ CLIP</garden-button>
      <garden-button variant="ghost">✕ CANCEL</garden-button>
    </div>
  ),
};

export const DarkModeContrastReview: Story = {
  name: 'Dark mode contrast review',
  tags: ['dark-contrast'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <DarkThemeFrame
      label="Dark-mode button contrast review"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        padding: 24,
        alignItems: 'center',
        background: 'var(--ds-page, #11111b)',
        border: '3px solid var(--zine-ink, #cdd6f4)',
        borderRight: '5px solid var(--zine-ink, #cdd6f4)',
        borderBottom: '5px solid var(--zine-ink, #cdd6f4)',
      }}
    >
      <garden-button variant="primary">
        ✦ PUBLISH NOTE
      </garden-button>
      <garden-button variant="yellow">
        ◆ SAVE DRAFT
      </garden-button>
      <garden-button variant="blue">
        ↑ EXPORT
      </garden-button>
    </DarkThemeFrame>
  ),
  play: async ({ canvasElement }) => {
    expect(canvasElement.querySelector('[data-theme="dark"]')).not.toBeNull();

    const buttonHosts = Array.from(canvasElement.querySelectorAll('garden-button'));
    const [primaryButton, yellowButton, blueButton] = buttonHosts;

    expect(buttonHosts).toHaveLength(3);
    expect(primaryButton).toBeDefined();
    expect(yellowButton).toBeDefined();
    expect(blueButton).toBeDefined();

    expectShadowTextContrast(primaryButton as Element, 'button', 'Primary button label');
    expectShadowTextContrast(yellowButton as Element, 'button', 'Yellow button label');
    expectShadowTextContrast(blueButton as Element, 'button', 'Blue button label');
  },
};
