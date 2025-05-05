---
id: 4maaydx13cmqio2sdoowesr
title: Data Modeling Normalization Second Form
desc: ""
updated: 1746470630094
created: 1746469756047
---

- Deve estar aderente a primeira forma normal [[data-engineer.concepts.data-modeling.data-modeling-normalization-first-form]]
- Seus atributos não chave devem depender da chave primaria completa, todos atributos que não compõem a chave primaria devem ser funcionalmente dependentes de todos os campos que compõem a chave. Ex:

  ```mermaid
  ---
  title: Incorreto
  ---
  erDiagram
    Alocacao_Projeto {
        int codigo_funcionario PK
        int codigo_projeto PK
        int quantidade_horas_trabalhadas
        string nome_funcionario
        string nome_projeto
        string uf_projeto
    }
  ```

  _Pode causar anomalias de inclusão ou exclusão_

  ```mermaid
  ---
  title: Correto
  ---
  erDiagram
    Funcionario {
        int codigo_funcionario PK
        string nome_funcionario
    }

    Projeto {
        int codigo_projeto PK
        string nome_projeto
        string uf_projeto
    }

    AlocacaoProjeto {
        int codigo_funcionario FK
        int codigo_projeto FK
        int quantidade_horas_trabalhadas
    }

    Funcionario ||--o{ AlocacaoProjeto : "aloca"
    Projeto ||--o{ AlocacaoProjeto : "aloca"
  ```
