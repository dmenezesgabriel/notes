---
id: iy9trmyprx7becaafv8pbtd
title: Redshift
desc: ""
updated: 1750870313655
created: 1748093120478
pageType: concept
lastUpdated: 2026-04-25T22:58:30Z
status: draft
---

- Baseado no PostgreSQL
- OLAP
- Armazenamento colunar
- Provisioned cluster ou Serverless cluster

## Nós

### Leader Node

- Planejamento de consultas
- Agregação de resultados

### Computer Node

- Realiza consultas e envia os resultados ao [Leader Node](#leader-node)

## Modos

### Provisioned mode

- Tipos de instância são escolhidos previamente
- É possível reservar instâncias para redução de custos

## Relacionado

- [[swe.cloud.aws.services.data-analytics.redshift.data-ingestion]]
- [[swe.cloud.aws.services.data-analytics.redshift.disaster-recovery]]
- [[swe.cloud.aws.services.data-analytics.redshift.spectrum]]
