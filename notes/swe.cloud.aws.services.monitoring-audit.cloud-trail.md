---
id: s2o77dvre2te5wwzqe33i5m
title: Cloud Trail
desc: ""
updated: 1748304228205
created: 1748295188850
---

Histórico de eventos / Chamadas de API feitas pela sua conta da AWS via console, SDK, CLI e Serviços

## Casos de Uso

- Suponha que uma instância EC2 foi deletada de sua conta e você queira descobrir quem executou esta ação

## Tipos de evento

### Management Events

Ex: AttachRolePolicy, CreateSubnet, ...

- Logs habilitados por padrão
- Read Events
- Write Events

### Data Events

Ex: Amazon S3 GetObject, DeleteObject, ...

- Logs desabilitados por padrão devido ao alto volume de operações

## Insights

Detecta atividade incomum na conta. Ex: falta de manutenção periódica, _burst_ de ações do IAM

- Precisa ser habilitado e tem custo

## Retenção de eventos

- Eventos são armazenados por 90 dias
- Para retenção a longo prazo é necessário enviar os logs a um bucket S3

## Relacionado

- [[daily.journal.2025.05.26]]
- [[swe.cloud.aws.services.monitoring-audit]]

#SWE #Cloud #AWS #AWSServices #Monitoring #AmazonCloudTrail
