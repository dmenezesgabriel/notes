---
id: enwgseyglt4f97suy8e5oln
title: Config
desc: ""
updated: 1751739869996
created: 1748311390559
---

## Casos de Uso

- Gravar mudanças de configuração
- Avaliar se recursos estão de acordo com as regras de compliance
- Verifica se há certificados TLS que serão expirados e pode enviar notificação via SNS [[swe.cloud.aws.services.messaging.sns]]
  Ex: analisar se ha algum acesso indevido de SSH em um security group, se existem buckets com acesso publico ou se a configuração de um ELB mudou

_Detecta, mas não inibe e pode remediar_

## Features

- Regras padrão
- Regras customizadas
- SSM Automation Document - Remediar Ação automaticamente

## Relacionado

- [[daily.journal.2025.05.26]]
- [[swe.cloud.aws.services.monitoring-audit]]
