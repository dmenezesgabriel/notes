---
id: rgx8itxdnt8fen03fzbtw9e
title: Redshift Spectrum
desc: ""
updated: 1751732515871
created: 1748204157294
---

# Amazon Redshift Spectrum

## Casos de Uso

- **Consultar dados existentes em um bucket S3 sem ingeri-los** [[swe.cloud.aws.services.s3]]
  - É necessário possuir um cluster disponível para executar a query
  - A query é submetida a milhares de spectrum nodes do redshift
  - Cria tabelas no Redshift Spectrum apontando para o S3
- _`COPY`data from S3_ (Mais caro)

```sql
SELECT COUNT(*)
FROM S3.TABLE_NAME
GROUP BY COLUMN_NAME
```

## Relacionado

- [[swe.cloud.aws.services.data-analytics.redshift]]
