import { definePreview } from '@storybook/web-components';

export default definePreview({
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
});
