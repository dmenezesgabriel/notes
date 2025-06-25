---
id: vavs4x2eosx0ncy2k28mdzh
title: Glue Patterns
desc: ""
updated: 1750870289981
created: 1748209682036
---

## Transformação de dados para o formato parquet

```mermaid
graph LR
    A[S3 Put] --> B[Input S3 Bucket]
    B --> C[S3 PutObject Event Notification]
    C --> D[Lambda Function]
    %% Or Event Bridge
    D --> E[Trigger Glue Job]
    E --> F[Parquet]
    F --> G[S3 Output Bucket]
    G --> H[Athena]
```

## Relacionado

- [[swe.cloud.aws.services.data-analytics.glue]]
