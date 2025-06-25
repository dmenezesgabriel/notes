---
id: efw0m8b2ndfs1v9zsxz37oi
title: Data Modeling Normalization
desc: ""
updated: 1750870125657
created: 1746454427494
---

- Resolver anomalias de inserção, atualização e exclusão de dados
- Eliminar redundância de dados
- Reduzir a necessidade de manutenção do modelo

```mermaid
---
title: Normalização
---

erDiagram
    Funcionario {
        int codigo_funcionario PK
        string nome_funcionario
    }

    Projeto {
        int codigo_projeto PK
        string nome_projeto
    }

    Papel {
        int codigo_papel PK
        string nome_papel
    }

    Alocacao_Funcionario_Projeto {
        int codigo_funcionario
        int codigo_projeto
        int codigo_papel
    }

    Funcionario ||--o{ Alocacao_Funcionario_Projeto : ""
    Projeto ||--o{ Alocacao_Funcionario_Projeto : ""
    Papel ||--o{ Alocacao_Funcionario_Projeto : ""
```

[[data-engineer.concepts.data-modeling.sql.data-modeling-normalization-first-form]]
