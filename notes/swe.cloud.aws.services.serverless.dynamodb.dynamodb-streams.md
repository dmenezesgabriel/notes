---
id: m6ypfa7x25gdlad72sf79mc
title: Dynamodb Streams
desc: ""
updated: 1747486204391
created: 1747485132576
---

- Stream ordenado de todas modificações que ocorrem na tabela (create/update/delete)

## Features

- 24 horas de retenção
- Numero limitado de consumidores
- Processamento utilizando gatilhos lambda ou adaptador kinesis para stream DynamoDB

Alternativamente pode se utilizar o _Kinesis Data Stream_ ([[swe.cloud.aws.services.messaging.kinesis-data-stream]]) que possui os benefícios:

- 1 ano de retenção
- Alto numero de consumidores
- Processamento por AWS Lambda, Kinesis Data Analytics, Data Firehose, AWS Glue Streaming ETL

## Casos de Uso

- Reagir a mudanças em tempo real (Mensagem de boas vindas a novos usuários por email)
- Estatísticas de uso dos usuários de uma aplicação em tempo real para analytics
- Inserir em tabelas derivadas
- Replicação _cross region_
- Invocar AWS Lambda ([[swe.cloud.aws.services.serverless.lambda]]) ao ocorrerem mudanças a tabela do DynamoDB

## Relacionado

- [[swe.cloud.aws.services.serverless.dynamodb]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonDynamoDB
