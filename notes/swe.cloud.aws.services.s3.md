---
id: 6xx697ifvzjbkuco7qb86hs
title: S3
desc: ""
updated: 1747510050538
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

#SWE #Cloud #AWS #AWSServices #AmazonS3
