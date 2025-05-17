---
id: 7dvtb8w2k4qab6lly0mhdwi
title: Dynamodb
desc: ""
updated: 1747486661579
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

## Advanced Features

- Dax [[swe.cloud.aws.services.serverless.dynamodb.dynamodb-accelerator]]
- Stream [[swe.cloud.aws.services.serverless.dynamodb.dynamodb-streams]]
- Global Tables [[swe.cloud.aws.services.serverless.dynamodb.dynamodb-global-tables]]
- TTL [[swe.cloud.aws.services.serverless.dynamodb.dynamodb-ttl]]
- Disaster Recovery [[swe.cloud.aws.services.serverless.dynamodb.dynamodb-disaster-recovery]]
- S3 integration [[swe.cloud.aws.services.serverless.dynamodb.dynamodb-s3-integration]]

## Relacionado

- [[daily.journal.2025.05.14]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonDynamoDB
