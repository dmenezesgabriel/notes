---
id: 8foet5hgn2179kdqa9b920l
title: Open Search Patterns
desc: ""
updated: 1750870307022
created: 1748205542731
---

## DynamoDB

- Tabela DynamoDB
- DynamoDB Stream
- Lambda Function
- Amazon OpenSearch

```mermaid
graph LR
    A[DynamoDB Table] --> B[DynamoDB Stream]
    B --> C[Lambda Function]
    C --> D[Amazon OpenSearch]
```

## CloudWatch

- CloudWatch Logs
- Subscription Filter
- Lambda Function/Kinesis Firehose
- Amazon OpenSearch

```mermaid
graph LR
    A[CloudWatch Logs] --> B[Subscription Filter]
    B --> C[Lambda Function]
    C --> D[Amazon OpenSearch]
```

## Relacionado

- [[swe.cloud.aws.services.data-analytics.open-search]]
