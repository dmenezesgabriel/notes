---
id: gmqfjfl0grsq4mx6qrwweu8
title: Data Modeling Cardinality
desc: ""
updated: 1746193447455
created: 1746031502916
---

Indica o numero de vezes em que um elemento de uma entidade pode se associar com elementos de outras entidades. Deve ser analisada em ambas as direções de um relacionamento.

## 1:1

```mermaid
erDiagram
  direction LR
  Pessoa ||--|| Passaporte : possui
```

## 1:N

```mermaid
erDiagram
  direction LR
  Departamento ||--o{ Funcionário : possui
```

## M:N

```mermaid
erDiagram
  direction LR
  Aluno }o--o{ Curso : matricula
```

- Entidade associativa

```mermaid
erDiagram
  Aluno ||--o{ Frequencia : frequenta
  Curso ||--o{ Frequencia : possui
  Aluno {
    string codigo_aluno
    string nome_aluno
  }
  Curso {
    string codigo_curso
    string nome_curso
  }
  Frequencia {
    string codigo_curso
    string codigo_aluno
    date data_inscricao
    float valor_media_final
  }
```

## Cardinalidade mínima e máxima

- Cardinalidade mínima: indica a opcionalidade do relacionamento
- Cardinalidade máxima: Representa a cardinalidade do relacionamento
  - 0: Possibilidade de não participação ou opcionalidade
  - 1: Indica a obrigatoriedade de participação

#DataEngineer #DataModelingConcepts #DataModelingCardinality
