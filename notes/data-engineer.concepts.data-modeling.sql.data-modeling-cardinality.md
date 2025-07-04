---
id: gmqfjfl0grsq4mx6qrwweu8
title: Data Modeling Cardinality
desc: ""
updated: 1750870107707
created: 1746031502916
---

Indica o numero de vezes em que um elemento de uma entidade pode se associar com elementos de outras entidades. Deve ser analisada em ambas as direções de um relacionamento.

## 1:1

```mermaid
---
title: 1:1
---

erDiagram
  direction LR
  Pessoa ||--|| Passaporte : possui
```

## 1:N

```mermaid
---
title: 1:N
---

erDiagram
  direction LR
  Departamento ||--o{ Funcionário : possui
```

## M:N

```mermaid
---
title: M:N
---

erDiagram
  direction LR
  Aluno }o--o{ Curso : matricula
```

- Entidade associativa

```mermaid
---
title: Entidade Associativa
---

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

## Auto relacionamento

```mermaid
erDiagram
  Funcionario ||--o{ Funcionario : lidera
  Funcionario {
    string codigo_funcionario
    string nome_funcionario
    string nome_cargo_funcionario
    string codigo_funcionario_superior
  }
```

- Auto relacionamento M:N

```mermaid
erDiagram
  PecaAutomotiva ||--o{ ComposicaoPeca : componente
  PecaAutomotiva ||--o{ ComposicaoPeca : componente
  PecaAutomotiva {
    string codigo_peca
    string nome_peca
  }
  ComposicaoPeca {
    string codigo_peca
    string codigo_peca_componente
  }
```

## Cardinalidade mínima e máxima

- Cardinalidade mínima: indica a opcionalidade do relacionamento
- Cardinalidade máxima: Representa a cardinalidade do relacionamento
  - 0: Possibilidade de não participação ou opcionalidade
  - 1: Indica a obrigatoriedade de participação
