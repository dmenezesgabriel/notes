import type { StorybookConfig } from '@storybook/web-components-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  stories: ['../src/**/*.stories.@(ts|tsx|js)'],
  addons: ['@storybook/addon-mcp'],
  async viteFinal(config: InlineConfig): Promise<InlineConfig> {
    config.resolve = config.resolve ?? {};
    return config;
  },
};

export default config;
