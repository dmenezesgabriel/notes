---
id: qh4lftiupxyxw4gf5jhyzfi
title: Dms
desc: ""
updated: 1750873324235
created: 1750868661302
---

# Database Migration Service (DMS)

## Casos de Uso

- Migração segura e rápida de bancos de dados na _AWS_, resiliente e _self healing_
- Replicação Multi-AZ (Replica provisionada pelo _DMS_)

## Features

- A fonte de dados permanece disponível durante a migração
- Migração homogênea: _Oracle_ -> _Oracle_
- Migração heterogenia: _Microsoft SQL Server_ -> _AWS Aurora_

## Requisitos

- Provisionar instância EC2 para executar tarefas de replicação

## Fontes

- _On-premise_ & _EC2_ [[swe.cloud.aws.services.ec2]]: Oracle, MS SQL Server, MySQL, MariaDB, PostgreSQL, MongoDB, SAP, DB2
- Azure: Azure SQL Database
- _Amazon RDS_ [[swe.cloud.aws.services.rds]]: Todos incluindo _Amazon Aurora_ [[swe.cloud.aws.services.aurora]]
- _Amazon S3_ [[swe.cloud.aws.services.s3]]
- _DocumentDB_ [[swe.cloud.aws.services.document-db]]

## Targets

- _On-premise_ & _EC2_ [[swe.cloud.aws.services.ec2]]: Oracle, MS SQL Server, MySQL, MariaDB, PostgreSQL, SAP
- _Amazon RDS_ [[swe.cloud.aws.services.rds]]
- _Redshift_ [[swe.cloud.aws.services.data-analytics.redshift]], _DynamoDB_ [[swe.cloud.aws.services.serverless.dynamodb]] e _S3_ [[swe.cloud.aws.services.s3]]
- _Open Search_ [[swe.cloud.aws.services.data-analytics.open-search]]
- _Kinesis Data Stream_ [[swe.cloud.aws.services.messaging.kinesis-data-stream]]
- _Apache Kafka_
- _DocumentDB_ [[swe.cloud.aws.services.document-db]]
- _Amazon Neptune_ [[swe.cloud.aws.services.neptune]]
- _Redis_
- _Babelfish_

## Exceções

### RDS & Aurora MYSQL/PostgresSQL

Migração RDS para Aurora MySQL

- Snapshot: Mais barato com downtime
- Replica: Mais caro sem downtime

#### MYSQL

- Percona XtraBackup
- mysqldump

## Relacionado

- [[daily.journal.2025.06.25]]
- [[swe.cloud.aws.services.dms.dms.sct]]
