---
id: 5yoqxvj7vvv0apjybhnbvre
title: Sct
desc: ""
updated: 1750871690168
created: 1750871116594
---

# AWS Schema Conversion Tool (SCT)

- **Não é necessário quando a migração é para a mesma `engine`**

```mermaid
flowchart LR
    A[Oracle Source DB] --> B[DMS + SCT]
    B --> C[MySQL Target DB]
```

## Casos de Uso

- Converter o schema de um banco de dados de uma `engine` para a outra

## Features

- OLAP -> OLAP
- OLTP -> OLTP

## Relacionado

- [[swe.cloud.aws.services.dms]]
- [[daily.journal.2025.06.25]]
