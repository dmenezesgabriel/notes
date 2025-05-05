---
id: wudekg95drgrg16fh2tb77p
title: Data Modeling Normalization First Norm
desc: ""
updated: 1746457559096
created: 1746457479702
---

- Possuir uma chave primaria
- Composta por atributos atômicos
- inexistência de campos com vários valores(multi-valorado) do mesmo conceito. Ex:

  | descrição pedido           |
  | :------------------------- |
  | 4 caixas de pilhas grandes |

  ```mermaid
  erDiagram
      Pedido {
          int codigo_pedido PK
          int quantidade
          string nome
          string medida
      }
  ```

- inexistência de grupos de repetição Ex:

  | cod cliente | telefone 1  | telefone 2  | telefone 3  |
  | :---------- | :---------- | :---------- | :---------- |
  | 123456      | (11) 123456 | (11) 123456 | (11) 123456 |

  ```mermaid
  erDiagram
      Cliente {
          int codigo_cliente PK
          string telefone
      }

      Cliente_Telefone {
          int codigo_cliente FK
          string telefone
      }

      Cliente ||--o{ Cliente_Telefone : ""
  ```

[[data-engineer.concepts.data-modeling.data-modeling-normalization]]

#DataEngineer #DataModelingConcepts #DataModelingNormalization
