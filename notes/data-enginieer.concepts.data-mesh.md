---
id: wcwfhmmvepzkowfesht29t8
title: Data Mesh
desc: ''
updated: 1737150722399
created: 1736168286033
---

# Data Mesh

- Descentralizado
- Orientado ao domínio
- Consumidor como cliente

## Produto de dados

- Seguro
- Valioso
- Interoperável
- Acessível
- Descobrível
- Compreensível
- Verdadeiro (fidedigno)

## Camadas

- Source of Records
- Source of Truth
- Specialized

```mermaid
graph LR
    subgraph Data_Mesh_Architecture
        A[Source of Records]
        A1[Raw Data Collection]
        A2[Data Ingestion]
        A --> A1
        A1 --> A2

        B[Source of Truth]
        B1[Data Validation]
        B2[Data Transformation]
        B3[Centralized Storage]
        B --> B1
        B1 --> B2
        B2 --> B3

        C[Specialized]
        C1[Domain-Specific Aggregates]
        C2[Data Products]
        C3[Advanced Analytics]
        C --> C1
        C1 --> C2
        C2 --> C3
    end
```

#DataEngineer #DataMeshConcepts
