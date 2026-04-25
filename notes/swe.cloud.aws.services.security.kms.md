---
id: a9aiaxypp462sjublr9r7td
title: Kms
desc: ""
updated: 1749304905551
created: 1749226788247
pageType: concept
lastUpdated: 2026-04-25T22:58:30Z
status: draft
---

# Key Management Service

- O escopo de chaves KMS é **regional**, caso necessário copiar um snapshot de _EBS_ [[swe.cloud.aws.services.ec2.ebs]], por exemplo, é necessário realizar a criptografia com uma chave diferente.

## Features

- Gerenciado pela AWS
- Integrado com IAM [[swe.cloud.aws.services.iam]] para autorizações
- Maneira simples de controlar acesso aos dados
- Possível auditar chaves _KMS_ pelo _Cloud Trail_ [[swe.cloud.aws.services.monitoring-audit.cloud-trail]]
- Integração com grande parte dos serviços da AWS (EBS, S3, RDS, SSM)
- SDK e CLI

## Relacionado

- [[swe.cloud.aws.services.security.kms.key-types]]
- [[swe.cloud.aws.services.security.kms.key-policy]]
- [[swe.cloud.aws.services.security.kms.keys-multi-region]]

#SWE #Cloud #AWS #AWSServices #Security #AmazonKMS
