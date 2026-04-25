---
id: at9pe5jpbdr1m2pjbws8iat
title: Dynamodb Disaster Recovery
desc: ""
updated: 1747486968186
created: 1747486968186
---

## Backup Continuo com point-in-time recovery (PITR)

- Opcionalmente habilitado para os últimos 30 dias
- Recuperação _point-in-time_ para qualquer hora dentro da janela de backup
- O processo de recuperação cria uma tabela nova

## On-demand backups

- Backups completos para retenção de longo-prazo, até que explicitamente deletados
- Não afetam performance ou latência
- Podem ser configurados e gerenciados nos Backups da AWS (copia entre regiões)
- O processo de recuperação cria uma nova tabela

## Relacionado

- [[swe.cloud.aws.services.serverless.dynamodb]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonDynamoDB
