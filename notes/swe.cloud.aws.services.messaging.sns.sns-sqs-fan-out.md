---
id: oaqr3pgotgt185fax9fciwh
title: Sns Sqs Fan Out
desc: ""
updated: 1746146634573
created: 1746146634573
---

- Uma mensagem é publicada em um tópico SNS e então recebido em todas filas SQS que sao subscribers e cada uma dessas filas é consumida por um serviço diferente
- Sem perda de dados
- SQS permite persistência de dados, processo com atraso propositivo e retentavas
- Cross Region

## Casos de uso

- Conexão com eventos do S3 para envio de eventos a varias filas SQS
- Conexão com AWS Kinesis Firehose para envio dos dados ao S3

#SWE #Cloud #AWS #AWSServices #AmazonSNS
