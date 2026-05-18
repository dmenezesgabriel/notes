import { j as P } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var s, d, m, c, g, p, l, u, w, _, h, v, D, G, S, B, y, f;
const x = {
    title: 'Components/GardenMermaid',
    tags: ['autodocs'],
    argTypes: {
      diagram: { control: 'text', description: 'Raw Mermaid source code to render as a diagram.' },
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
  },
  r = ({ diagram: E }) =>
    P.jsx('garden-mermaid', { diagram: E, style: { maxWidth: 640, display: 'block' } }),
  e = { render: r },
  a = {
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
    render: r,
  },
  t = {
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
    render: r,
  },
  i = {
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
    render: r,
  },
  o = {
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
    render: r,
  },
  n = {
    name: 'Error state (invalid source)',
    args: { diagram: 'this is not valid mermaid syntax !!!' },
    render: r,
    parameters: {
      docs: {
        description: {
          story: 'When mermaid fails to parse the diagram, a styled error block is shown.',
        },
      },
    },
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((m = e.parameters) === null || m === void 0 || (d = m.docs) === null || d === void 0
        ? void 0
        : d.source),
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) === null || c === void 0 ? void 0 : c.docs),
    source: {
      originalSource: `{
  name: 'Flowchart',
  args: {
    diagram: \`flowchart LR
    Client -->|HTTP| Gateway
    Gateway -->|gRPC| Auth
    Gateway -->|gRPC| API
    API -->|SQL| DB[(PostgreSQL)]
    API -->|pub| Queue([RabbitMQ])
    Queue -->|sub| Worker\`
  },
  render
}`,
      ...((p = a.parameters) === null || p === void 0 || (g = p.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((l = t.parameters) === null || l === void 0 ? void 0 : l.docs),
    source: {
      originalSource: `{
  name: 'Sequence Diagram',
  args: {
    diagram: \`sequenceDiagram
    participant Browser
    participant Next as Next.js SSG
    participant CDN

    Browser->>CDN: GET /notes/swe.cloud
    CDN-->>Browser: HTML (static)
    Browser->>Browser: Upgrade <garden-mermaid>
    Browser->>Browser: import('mermaid')
    Browser->>Browser: mermaid.render()
    Browser->>Browser: Inject SVG\`
  },
  render
}`,
      ...((w = t.parameters) === null || w === void 0 || (u = w.docs) === null || u === void 0
        ? void 0
        : u.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((_ = i.parameters) === null || _ === void 0 ? void 0 : _.docs),
    source: {
      originalSource: `{
  name: 'ER Diagram',
  args: {
    diagram: \`erDiagram
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
    Note }o--o{ Tag : "tagged with"\`
  },
  render
}`,
      ...((v = i.parameters) === null || v === void 0 || (h = v.docs) === null || h === void 0
        ? void 0
        : h.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((D = o.parameters) === null || D === void 0 ? void 0 : D.docs),
    source: {
      originalSource: `{
  name: 'Git Graph',
  args: {
    diagram: \`gitGraph
    commit id: "init"
    branch feature/mermaid
    checkout feature/mermaid
    commit id: "add garden-mermaid component"
    commit id: "add rehype-code plugin"
    checkout main
    merge feature/mermaid
    commit id: "release"\`
  },
  render
}`,
      ...((S = o.parameters) === null || S === void 0 || (G = S.docs) === null || G === void 0
        ? void 0
        : G.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((B = n.parameters) === null || B === void 0 ? void 0 : B.docs),
    source: {
      originalSource: `{
  name: 'Error state (invalid source)',
  args: {
    diagram: 'this is not valid mermaid syntax !!!'
  },
  render,
  parameters: {
    docs: {
      description: {
        story: 'When mermaid fails to parse the diagram, a styled error block is shown.'
      }
    }
  }
}`,
      ...((f = n.parameters) === null || f === void 0 || (y = f.docs) === null || y === void 0
        ? void 0
        : y.source),
    },
  },
};
const C = ['Default', 'Flowchart', 'SequenceDiagram', 'ERDiagram', 'GitGraph', 'ErrorState'];
export {
  e as Default,
  i as ERDiagram,
  n as ErrorState,
  a as Flowchart,
  o as GitGraph,
  t as SequenceDiagram,
  C as __namedExportsOrder,
  x as default,
};
