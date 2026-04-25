---
id: hsdl7jo446kh6ikq5veuy9u
title: Waf
desc: ""
updated: 1749430184825
created: 1749430184825
---

# Web Application Firewall

- Web ACLs são regionais exceto pelo CloudFront
- Network Load Balancers não são suportados

## Casos de Uso

- Protege sua aplicação web de vulnerabilidades comuns na camada 7 ( camada 7 é **HTTP**, camada 4 é TCP/UDP)
- Deploy em:
  - _ALB_ [[swe.cloud.aws.services.elb.alb]]
  - _API Gateway_ [[swe.cloud.aws.services.serverless.api-gateway]]
  - _CloudFront_ [[swe.cloud.aws.services.cloudfront]]
  - _AppSync GraphQL API_
  - _Cognito User Pool_

## Features

- WEB ACLs (WEB Access Control List) Regras:
  - IP, até 10.000 endereços de IPS
  - _HTTP Headers_, _HTTP Body_, _URI strings_ para proteção contra ataques comuns como _SQL Injection_ e _Cross-Site Scripting (XSS)_ - _Rate Based Rules_ (Contagem de ocorrência de eventos) - para proteção contra _DDoS_

## Relacionado

- [[swe.cloud.aws.services.security]]
- [[daily.journal.2025.06.08]]

#SWE #Cloud #AWS #AWSServices #Security #AmazonWAF
