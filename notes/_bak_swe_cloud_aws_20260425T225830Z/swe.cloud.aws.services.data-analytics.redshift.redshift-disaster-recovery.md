---
id: mwcm6drkmlcrflfzhpua75l
title: Redshift Disaster Recovery
desc: ""
updated: 1750870320063
created: 1748094201049
---

- Snapshots são backups _point in time_ armazenados em S3 [[swe.cloud.aws.services.s3]]

## Features

- Multi AZ
- Snapshots são incrementais, apenas o que mudou é salvo
- É possível restaurar um snapshot em um novo cluster
- Snapshot automático, a cada 8 horas, a cada 5GB ou agendamento customizado
- Snapshot manual, é retido até que seja deletado
- É possível copiar snapshots de um cluster para outra região AWS

## Relacionado

- [[swe.cloud.aws.services.data-analytics.redshift]]
