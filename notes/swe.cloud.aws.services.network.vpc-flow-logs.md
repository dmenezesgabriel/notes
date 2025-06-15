---
id: 4jctza81zju7fagk5tuw0uf
title: Vpc Flow Logs
desc: ""
updated: 1750017139696
created: 1750017139696
---

## Casos de Uso

- Captura de informação sobre trafego de IP
- Monitoramento e resolução de problemas de conectividade

## Features

- Integração com _S3_ [[swe.cloud.aws.services.s3]], _CloudWatch_ [[swe.cloud.aws.services.monitoring-audit.cloud-watch]] e _Kinesis Firehose_ [[swe.cloud.aws.services.integration.data-firehose]]
- Captura informação de rede de serviços como _ELB_ [[swe.cloud.aws.services.elb]], _RDS_ [[swe.cloud.aws.services.rds]], _ElastiCache_ [[swe.cloud.aws.services.elasticache]], _Redshift_ [[swe.cloud.aws.services.data-analytics.redshift]], e etc

## Leitura de logs

```mermaid

flowchart LR
  %% Architecture 1 - Top-10 IP addresses
  A1[VPC Flow Logs] --> B1[CloudWatch Logs]
  B1 --> C1[CloudWatch Contributor Insights]
  C1 --> D1[Top-10 IP addresses]

  %% Architecture 2 - Alerting on specific traffic
  A2[VPC Flow Logs] --> B2[CloudWatch Logs]
  B2 --> C2[Metric Filter<br>SSH, RDP...]
  C2 --> D2[CW Alarm]
  D2 --> E2[Alert]
  E2 --> F2[Amazon SNS]

  %% Architecture 3 - Analytics via Athena
  A3[VPC Flow Logs] --> B3[S3 Bucket]
  B3 --> C3[Amazon Athena]
  C3 --> D3[Amazon QuickSight]

```

## Relacionado

- [[daily.journal.2025.06.15]]
- [[swe.cloud.aws.services.network.vpc]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonVPC
