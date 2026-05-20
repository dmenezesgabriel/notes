import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { expectShadowTextContrast } from './story-helpers/dark-mode-contrast';
import { DarkThemeFrame } from './story-helpers/dark-theme-frame';

interface BannerArgs {
  text: string;
}

const meta: Meta<BannerArgs> = {
  title: 'Undecided/GardenBanner',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Banner text (marquee scrolling)',
    },
  },
  args: {
    text: 'NEU-BRUTALISM × PUNK ZINE · DESIGN SYSTEM V0.1 · GARDEN.DEV',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component:
          'Status: `undecided` shared component. Zine-edition misregistration banner with scrolling marquee text and blue shadow offset. The live site still keeps its marquee composition route-local, so do not add new shared usage until a second real route proves the contract. Uses `--zine-red`, `--zine-yellow`, and `--zine-blue` tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BannerArgs>;

export const Default: Story = {
  render: (args) => <garden-banner text={args.text}></garden-banner>,
};

export const CustomText: Story = {
  args: {
    text: 'CUSTOM BANNER TEXT · DO IT YOURSELF · NO RULES',
  },
  render: (args) => <garden-banner text={args.text}></garden-banner>,
};

export const InPageContext: Story = {
  render: () => (
    <div style={{ minHeight: 200, background: 'var(--ds-page, #11111b)' }}>
      <garden-banner text="KNOWLEDGE GARDEN · NEU-BRUTALISM × PUNK ZINE · NOTES · WIKI · SECOND BRAIN"></garden-banner>
      <div
        style={{
          padding: '2rem',
          background: '#f2edd7',
          border: '3px solid #0e0c07',
          borderTop: 'none',
        }}
      >
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26 }}>Page Content</h2>
        <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
          Content below the banner.
        </p>
      </div>
    </div>
  ),
};

export const ReducedMotion: Story = {
  name: 'Reduced-motion fallback (static)',
  parameters: {
    docs: {
      description: {
        story:
          'Under `prefers-reduced-motion: reduce`, the marquee animation stops and the text is shown in a static position. The misregistration shadow offset is preserved. This story simulates the static fallback via `::part(text)` CSS override.',
      },
    },
  },
  render: (args) => (
    <>
      <style>{`
        garden-banner::part(text) {
          animation: none;
          transform: none;
        }
      `}</style>
      <garden-banner text={args.text}></garden-banner>
    </>
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
      label="Dark-mode banner contrast review"
      style={{ minHeight: 120, background: 'var(--ds-page, #11111b)' }}
    >
      <garden-banner text="KNOWLEDGE GARDEN · NEU-BRUTALISM × PUNK ZINE · NOTES · WIKI · SECOND BRAIN"></garden-banner>
    </DarkThemeFrame>
  ),
  play: async ({ canvasElement }) => {
    expect(canvasElement.querySelector('[data-theme="dark"]')).not.toBeNull();

    const banner = canvasElement.querySelector('garden-banner');

    expect(banner).not.toBeNull();
    expectShadowTextContrast(banner as Element, '[part="text"]', 'Banner marquee text');
  },
};
