---
id: xgqhjmz11znmmrmc1t5v9k2
title: API Gateway Endpoint Types
desc: ""
updated: 1747494106158
created: 1747492368243
---

## Edge-Optimized (padrão): Para clientes globais

- Requisições são roteadas através de Cloudfront Edge Locations (melhora a latência)
- API Gateway ainda reside em uma única região

## Regional

- Para clientes em uma mesma região
- É possível combinar manualmente com cloudfront (Mais controle sobre estrategias de cache e distribuição)

## Private

- Pode ser acessado apenas de dentro da VPC usando uma interface de VPC endpoint (ENI)

## Relacionado

- [[swe.cloud.aws.services.serverless.api-gateway]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonAPIGateway
