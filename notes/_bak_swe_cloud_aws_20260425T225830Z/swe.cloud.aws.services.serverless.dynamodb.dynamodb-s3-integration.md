---
id: 8ufvw3sh2uly1dx6yjo3b2q
title: Dynamodb S3 Integration
desc: ""
updated: 1747487408943
created: 1747487408944
---

## Exportação de tabelas para S3

- É necessário habilitar PITR ([[swe.cloud.aws.services.serverless.dynamodb.dynamodb-disaster-recovery]])
- Não afeta a capacidade de leitura da tabela
- Dados podem ser exportados em formato `JSON` ou `ION`

### Casos de Uso

- Realizar analises na tabela exportada
- Reter _Snapshots_ para auditoria
- ETL no S3 para antes de importar os dados novamente para a tabela do DynamoDB

## importação do S3

- Importar dados CSV, DynamoDB JSON ou ION
- Não consome capacidade de escrita
- Cria uma nova tabela
- Erros de importação sao logados nos logs do `CloudWatch`

## Relacionado

- [[swe.cloud.aws.services.serverless.dynamodb]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonDynamoDB
