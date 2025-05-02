---
id: e63ifybn0gfmrxpet4l9n2n
title: S3 Performance
desc: ""
updated: 1745860767858
created: 1745860370620
---

## Multi-Part Upload

- Recomendado para arquivos acima de 100MB e obrigatório para arquivos com mais de 5GB
- Paraleliza o upload para realizar transferências de maneira mais rápida

## Transfer Acceleration

- Upload e Download
- A transferência é realizada primeiro para uma Edge Location e depois para a região desejada

## S3 Byte-Range Fetches

- Requisitar um arquivo por range de bytes
- É possível paralelizar as requisições

[[swe.cloud.aws.services.s3]]

#SWE #Cloud #AWS #AWSServices #AmazonS3
