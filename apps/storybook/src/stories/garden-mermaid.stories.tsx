import '@notes/components';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface MermaidArgs {
  diagram: string;
}

const meta: Meta<MermaidArgs> = {
  title: 'Components/GardenMermaid',
  tags: ['autodocs'],
  argTypes: {
    diagram: {
      control: 'text',
      description: 'Raw Mermaid source code to render as a diagram.',
    },
  },
  args: {
    diagram: `graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B`,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Client-side Mermaid diagram renderer. Dynamically imports `mermaid`, respects `data-theme` for light/dark switching, and cleans up temporary DOM nodes after rendering.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ diagram }: MermaidArgs) => (
  <garden-mermaid diagram={diagram} style={{ maxWidth: 640, display: 'block' }} />
);

export const Default: Story = { render };

export const Flowchart: Story = {
  name: 'Flowchart',
  args: {
    diagram: `flowchart LR
    Client -->|HTTP| Gateway
    Gateway -->|gRPC| Auth
    Gateway -->|gRPC| API
    API -->|SQL| DB[(PostgreSQL)]
    API -->|pub| Queue([RabbitMQ])
    Queue -->|sub| Worker`,
  },
  render,
};

export const SequenceDiagram: Story = {
  name: 'Sequence Diagram',
  args: {
    diagram: `sequenceDiagram
    participant Browser
    participant Next as Next.js SSG
    participant CDN

    Browser->>CDN: GET /notes/swe.cloud
    CDN-->>Browser: HTML (static)
    Browser->>Browser: Upgrade <garden-mermaid>
    Browser->>Browser: import('mermaid')
    Browser->>Browser: mermaid.render()
    Browser->>Browser: Inject SVG`,
  },
  render,
};

export const ERDiagram: Story = {
  name: 'ER Diagram',
  args: {
    diagram: `erDiagram
    Note {
        string id PK
        string title
        string slug
        string excerpt
    }
    Tag {
        string id PK
        string label
    }
    Note }o--o{ Tag : "tagged with"`,
  },
  render,
};

export const GitGraph: Story = {
  name: 'Git Graph',
  args: {
    diagram: `gitGraph
    commit id: "init"
    branch feature/mermaid
    checkout feature/mermaid
    commit id: "add garden-mermaid component"
    commit id: "add rehype-code plugin"
    checkout main
    merge feature/mermaid
    commit id: "release"`,
  },
  render,
};

export const ErrorState: Story = {
  name: 'Error state (invalid source)',
  args: { diagram: 'this is not valid mermaid syntax !!!' },
  render,
  parameters: {
    docs: {
      description: {
        story: 'When mermaid fails to parse the diagram, a styled error block is shown.',
      },
    },
  },
};
