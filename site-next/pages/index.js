import React from 'react';
import { Button } from '@notes/ui';

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Notes Site (Next.js) — Demo</h1>
      <p>This page demonstrates using the @notes/ui React components inside Next.js.</p>
      <Button onClick={() => alert('Clicked')}>Click me</Button>
    </div>
  );
}
