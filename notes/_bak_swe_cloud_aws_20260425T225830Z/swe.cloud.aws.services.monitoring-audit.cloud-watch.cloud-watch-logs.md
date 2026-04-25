---
id: 46xs8f9srv7x9ml8vy8bmi1
title: Cloud Watch Logs
desc: ""
updated: 1748278389320
created: 1748278389320
---

## Features

- Log groups
- Log Streams
- Logs insights (Consulta de logs)
- Logs agent (EC2, _On-premise_)
- Live Tail
- Envio de logs ao S3, Kinesis Data Streams, Kinesis Data Firehose, AWS Lambda e OpenSearch
- Criptografia por padrão
- Criptografia via KMS

## Agradação de logs multi-região e multi-conta

```mermaid
graph TD
    subgraph ACCOUNT A REGION 1
        CWL1[CloudWatch Logs] --> SF1[Subscription Filter]
    end

    subgraph ACCOUNT B REGION 2
        CWL2[CloudWatch Logs] --> SF2[Subscription Filter]
    end

    subgraph ACCOUNT B REGION 3
        CWL3[CloudWatch Logs] --> SF3[Subscription Filter]
    end

    SF1 --> KDS[Kinesis Data Streams]
    SF2 --> KDS
    SF3 --> KDS

    KDS --> KDF[Kinesis Data Firehose]
    KDF --> S3[(Amazon S3)]

    KDF -- Near Real Time --> S3
```

## Relacionado

- [[swe.cloud.aws.services.monitoring-audit.cloud-watch]]

#SWE #Cloud #AWS #AWSServices #Monitoring #AmazonCloudWatch
