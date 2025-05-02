---
id: gmqfjfl0grsq4mx6qrwweu8
title: Data Modeling Cardinality
desc: ''
updated: 1746034213253
created: 1746031502916
---

Indica o numero de vezes em que um elemento de uma entidade pode se associar com elementos de outras entidades. Deve ser analisada em ambas as direções de um relacionamento.

- 1:1

```mermaid
erDiagram
  direction LR
  Pessoa ||--|| Passaporte : possui
```

- 1:N

```mermaid
erDiagram
  direction LR
  Departamento ||--o{ Funcionário : possui
```

- M:N

```mermaid
erDiagram
  direction LR
  Aluno }o--o{ Curso : matricula
```

## Cardinalidade mínima e máxima

- Cardinalidade mínima: indica a opcionalidade do relacionamento
- Cardinalidade máxima: Representa a cardinalidade do relacionamento
  - 0: Possibilidade de não participação ou opcionalidade
  - 1: Indica a obrigatoriedade de participação

#DataEngineer #DataModelingConcepts #DataModelingCardinality
