---
id: 5hc9gwpom02byxccoweiiu2
title: Elasticache
desc: ""
updated: 1751719922301
created: 1745374010454
---

Redis/ Memcached gerenciado pela AWS assim como RDS, porém para cache

## Casos de Uso

- Armazenamento Kei/Value pair
- Leituras frequentes
- Menos escritas
- Cache de resultados para consultas em bancos de dados
- Armazenamento de sessão para web sites

## Features

- Criptografia
- **Conformidade com HIPAA (Health Insurance Portability and Accountability Act)**
- **Conformidade com PCI DSS**
- Armazenamento em memória
- latência sub-milissegundos
- escolha do tipo de instância. Ex: cache.m6g.large
- Suporte a _Clustering_ (Redis) e Multi AZ, Read replicas (sharding)
- Segurança pelo IAM, Security Groups, KMS, Redis Auth
- Backup, Snapshot, Point in time restore
- Manutenção agendada gerenciada pela AWS

_Importante: requer alterações no código da aplicação_

## Relacionado

- [[swe.cloud.aws.services.databases]]
