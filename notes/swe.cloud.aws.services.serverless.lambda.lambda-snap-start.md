---
id: 1fqdumbb36xsoiacgioujow
title: Lambda Snap Start
desc: ""
updated: 1747083882306
created: 1747083484924
---

Ciclo de vida Lambda

```mermaid
graph LR
    A[Init] --> B[Invoke]
    B --> C[Shutdown]
```

Com Snap Start

```mermaid
graph LR
    B[Invoke] --> C[Shutdown]
```

- Melhora a performance de funções lambda até 10x sem custos extras para Java, Python e .NET
- Quanto utilizado, a função é invocada de um estado pré-inicializado

[[swe.cloud.aws.services.serverless.lambda]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonLambda
