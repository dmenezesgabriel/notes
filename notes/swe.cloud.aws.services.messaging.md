---
id: 5jtt6yq60x9z97mak86pzpj
title: Messaging
desc: ""
updated: 1746320164322
created: 1746318720331
---

## SQS [[swe.cloud.aws.services.messaging.sqs]]

- Producer/Consumer
- Consumidor "puxa" os dados
- Dados são deletados após consumidos
- Consumidores (Workers) ilimitados
- Ordenação garantida apenas em modo FIFO [[swe.cloud.aws.services.messaging.sqs.sqs-fifo]]
- Possibilidade de adicionar delay

## SNS [[swe.cloud.aws.services.messaging.sns.md]]

- Publisher/Subscriber
- Envia dados para muitos assinantes
- Até 12.500.500,00 assinantes
- Dados não sāo persistidos, e perdidos se não entregues
- Até 100.000 tópicos
- Integra com SQS para padrão Fan-Out
- Integração com FIFO SQS [[swe.cloud.aws.services.messaging.sns.sns-fifo]]

## Kinesis [[swe.cloud.aws.services.messaging.kinesis-data-stream]]

- Padrão: Producer/Consumer
- Enhanced-fan out: Publisher/Subscriber
- Utilizado com big-data em tempo real, analytics e ETL
- Ordenação ao nível de shard
- Dados expiram após x dias
- Modo provisionado ou sob demanda

#SWE #Cloud #AWS #AWSServices #AmazonKinesis #AmazonSQS #AmazonSNS
