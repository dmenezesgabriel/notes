---
id: r4nr26e29smt3uo6rngia32
title: Aurora
desc: ""
updated: 1750870224545
created: 1745261496357
---

Cluster de banco de dados otimizado para cloud.

## Features

- Suporte a PostgresSQL e MySQL
- Armazenamento cresce automaticamente conforme a necessidade de 10GB a 128TB
- Ate 15 replicas
- _Failover_ instantâneo
- Integração com serviços de Machine Learning da AWS
- _Babelfish_: interpretação de comandos MS SQLServer no PostgreSQL
- Armazenamento e processamento são separados
- Mesmas funcionalidades de segurança do rds [[swe.cloud.aws.services.rds]]
- Backup e restauração

## Aurora Serverless

para fluxos de trabalho imprevisíveis sem necessidade de planejamento prévio

## Aurora Global

Até 16 instâncias de leitura em cada região e replicação de dados em menos de 1 segundo

## Aurora Machine Learning

Utilizar SageMaker e Comprehend para realizar _Machine Learning_ no Aurora

## Aurora Database Cloning

Criar um novo cluster baseado em um existente (mais rápido que restaurar um snapshot)

- Pode ser utilizado para ambientes de testes e staging

## Storage

- dados são armazenados em 6 replicas, entre 3 _availability zones_
- altamente disponível
- _self healing_
- _auto-scaling_

## Compute

- cluster de banco de dados com instâncias armazenadas em múltiplas _availability zones_
- _auto-scaling_ de replicas de leitura

## Writer Endpoint

- Aponta para o Nó master

## Reader Endpoint

- Balanceamento de carga de conexão

## Relacionado

- [[swe.cloud.aws.services.databases]]
