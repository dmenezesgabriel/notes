import { setProjectAnnotations } from '@storybook/nextjs-vite';
import { beforeAll } from 'vitest';

import * as previewAnnotations from './preview';

// Apply global decorators and parameters from preview.ts to all vitest story tests.
// Even though Storybook 10.3+ says this is automatic, we keep it explicit to ensure
// global a11y config rules (disabled region/landmark-unique) are applied.
const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);
