---
id: 6xx697ifvzjbkuco7qb86hs
title: S3
desc: ""
updated: 1752415434233
created: 1745696116353
---

- Buckets S3 são regionais
- Objects: arquivos
- Key: caminho completo de um arquivo. Ex:
  - s3://my-bucket/my_file.txt
  - s3://my-bucket/my_sub_folder/my_file.txt
- A chave é por um prefixo mais o nome do objeto
- Object values: são o conteúdo do corpo
- Tamanho máximo de um objeto: 5TB
- Para fazer o upload de mais de 5GB é necessário utilizar o "multi-part upload"
- O nome de um bucket deve ser único em todas regiões globalmente, porem é um serviço regional
- Por padrão é dona de um objeto s3 a conta que fez o upload ou o criou, caso o bucket seja de outra conta o dono do bucket nao tera acesso ao objeto

## Casos de Uso

- Armazenamento de grandes objetos
- Arquivos estáticos
- hospedagem de websites

## Features

- Versionamento
- Criptografia
- Replicação
- MFA-Delete
- Logs de acesso

## Relacionado

- [[swe.cloud.aws.services.s3.s3-access-points]]
- [[swe.cloud.aws.services.s3.s3-batch-operations]]
- [[swe.cloud.aws.services.s3.s3-cors]]
- [[swe.cloud.aws.services.s3.s3-glacier-vault-lock-policy]]
- [[swe.cloud.aws.services.s3.s3-life-cycle]]
- [[swe.cloud.aws.services.s3.s3-object-encryption]]
- [[swe.cloud.aws.services.s3.s3-object-lambda]]
- [[swe.cloud.aws.services.s3.s3-object-lock]]
- [[swe.cloud.aws.services.s3.s3-performance]]
- [[swe.cloud.aws.services.s3.s3-security]]
- [[swe.cloud.aws.services.s3.s3-static-hosting]]
- [[swe.cloud.aws.services.s3.s3-storage-classes]]
- [[swe.cloud.aws.services.s3.s3-storage-lens]]
- [[swe.cloud.aws.services.databases]]
- [[swe.cloud.aws.services.s3.s3-versioning]]
