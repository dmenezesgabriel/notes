---
id: pk8gp67ff9l3lyx678lbnsz
title: Guard Duty
desc: ""
updated: 1751739875528
created: 1749902544666
---

Utiliza **Machine Learning** para detecção inteligente de ameças

## Casos de Uso

- Descoberta inteligente de ameaças para proteção da conta

## Features

- Analise de dados das fontes:
  - Logs de eventos _CloudTrail_ [[swe.cloud.aws.services.monitoring-audit.cloud-trail]]: Chamadas de API incomuns, deploys não autorizados
  - _VPC Flow Logs_: trafego de internet incomum
  - _DNS Logs_: Instancias EC2 comprometidas
- Integração com _EventBridge_ para notificações
- Regra dedicada para encontrar _CryptoCurrency attacks_

## Relacionado

- [[daily.journal.2025.06.14]]
- [[swe.cloud.aws.services.security]]
