---
id: 7dvtb8w2k4qab6lly0mhdwi
title: Dynamodb
desc: ""
updated: 1747085279837
created: 1747085279837
---

- NoSQL
- Serverless
- Replicação multi AZ
- Integrado com IAM
- Suporte a transações
- Classes Standard & Infrequent Access (IA)
- DynamoDB é feito de **Tabelas**
- Toda tabela possui uma **Primary Key** definida no momento de criação
- As chaves **Partition Key** e **Sort Key** compõe a chave primaria
- os **Attributes** são similares a colunas
- Scalar types: String, Number, Binary, Boolean, Null
- Document types: List, Map
- SetTypes: String Set, Number Set, Binary Set
- O Schema pode evoluir rapidamente

## Provisioned Mode

- O numero de leitura e escrita por segundo deve ser planejado previamente
- Carga previsível
- Possibilidade de autoscaling

## On-Demand Mode

- Escala automaticamente
- Não há necessidade de planejamento prévio
- Cargas de trabalho imprevisíveis e com picos de acessos
