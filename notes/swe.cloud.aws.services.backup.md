---
id: ppfbuedp10s0wpzmqq35ndi
title: Backup
desc: ""
updated: 1751130492453
created: 1751129001662
---

# AWS Backup

- Serviço de backup gerenciado pela AWS
- Salvas backups no _S3_ [[swe.cloud.aws.services.s3]]

## Features

- Integração com diversos serviços da AWS principalmente voltados a armazenamento como _S3_ [[swe.cloud.aws.services.s3]], _RDS_ [[swe.cloud.aws.services.rds]], _EBS_ [[swe.cloud.aws.services.ec2.ec2-ebs]] e etc.
- Backups _cross-region_
- Backups _cross-account_
- _PITR (Point in Time Recovery)_
- Backups sob-demanda ou agendados

## Backup Plans

- Frequência de backup
- Janela de backup
- Transição para _Cold Storage_
- Período de retenção

## Backup Vault

- _WORM (Write Once Read Many)_
- Até mesmo o usuário root não pode deletar o backup

## Relacionado

- [[daily.journal.2025.06.28]]
