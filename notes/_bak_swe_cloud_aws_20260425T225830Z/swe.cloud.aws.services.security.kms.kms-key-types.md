---
id: 80dlh6pd7h8h51k2trlwfmq
title: Kms Key Types
desc: ""
updated: 1749302309226
created: 1749301284389
---

## Symmetric (AES-256 keys)

- Chave única que é utilizada tanto para criptografar como descriptografar
- O usuário não tem acesso a chave KMS descriptografada (é necessário utilizar via API)

## Asymmetric (RSA & ECC key pairs)

- Chaves publicas e privadas, onde a chave publica é utilizada para criptografar os dados e a chave privada para descriptografar
- É utilizado quando realizar a criptografia fora da AWS por usuários que não tenham acesso a API do KMS

## Tipos de chave KMS na AWS

- _AWS Owned Keys_ (sem custo): SSE-S3, SSE-SQS, SSE-DDB
- _AWS Managed Keys_ (sem custo): (aws/service-name, ex: aws/rds, aws/ebs)
- _Customer Managed Keys_ criadas via KMS ($1/mês)
- _Customer Managed Keys_ importadas via KMS ($1/mês)
- KMS possui custo por chamada de API ($0.03 / 10000 chamadas)
- Rotação de chave automática
  - _AWS Managed_: 1 vez por ano
  - _Customer Managed_: precisa ser habilitado, automático e sob-demanda
  - _Imported KMS_: rotação manual

## Relacionado

- [[swe.cloud.aws.services.security.kms]]

#SWE #Cloud #AWS #AWSServices #Security #AmazonKMS
