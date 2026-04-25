---
id: 4e2mv789sqtjzo19n2q6fkz
title: Inspector
desc: ""
updated: 1749909635309
created: 1749904639305
---

- Avaliações de segurança automáticas

## Casos de Uso

- _EC2_ [[swe.cloud.aws.services.ec2]]:
  - Analises contra acessibilidade de rede não intencionada
  - Analises do sistema operacional contra vulnerabilidades conhecidas
- _ECR_ [[swe.cloud.aws.services.containers.ecr]]:
  - Avaliação de imagens de containers quando enviadas ao ECR
- _Lambda Functions_: [[swe.cloud.aws.services.serverless.lambda]]:
  - Identifica vulnerabilidades no código da função e suas dependências
  - Avalia as funções durante o deploy

## Features

- Relatórios e integração com _AWS Security HUB_
- Integração com _Event Bridge_ [[swe.cloud.aws.services.monitoring-audit.event-bridge]]
- Verifica vulnerabilidades com base no banco CVE (Common vulnerabilities and exposures)

## Relacionado

- [[daily.journal.2025.06.14]]
- [[swe.cloud.aws.services.security]]

#SWE #Cloud #AWS #AWSServices #Security #AmazonInspector
