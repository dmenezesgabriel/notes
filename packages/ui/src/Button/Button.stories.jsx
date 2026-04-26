import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button
};

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
