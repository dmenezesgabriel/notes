---
id: ifhuoy9yageak5qfezvidcl
title: Data Modeling Normalization Third Form
desc: ''
updated: 1746475680463
created: 1746474675502
---

- Deve estar aderente a primeira e segunda formas normais
- Não apresentar dependência funcional transitiva. Ex:

```mermaid
---
title: Incorreto
---
erDiagram
Pedido {
    int numero_nf PK
    int codigo_vendedor
    string nome_vendedor
    int codigo_produto
    int quantidade_venda
}
```

```mermaid
---
title: Correto
---
erDiagram
direction LR
Pedido {
    int numero_nf PK
    int codigo_vendedor
    int codigo_produto
    int quantidade_venda
}

Vendedor {
    int codigo_vendedor PK
    string nome_vendedor
}

Vendedor ||--o{ Pedido : "vende"
```

- [[data-engineer.concepts.data-modeling.sql.data-modeling-normalization-first-form]]
- [[data-engineer.concepts.data-modeling.sql.data-modeling-normalization-second-form]]
