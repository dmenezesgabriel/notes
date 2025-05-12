---
id: xjc5848klhlvqx30623mdr8
title: Lambda in Vpc
desc: ""
updated: 1747084727248
created: 1747084727248
---

- Por padrão as funções lambda sao executadas fora da VPC da sua conta e nao pode acessar recursos dentro de sua VPC como RDS, ElastiCache e ELBs.

## Padrões

### lambda + Proxy RDS

- Caso as lambdas acessem diretamente a aplicação podem abrir muitas conexões, o proxy RDS pode gerenciar essas conexões via pool de conexões.

### Lambda + Eventos de RDS

- Eventos sobre a instancia RDS (created, stopped, start) podem ser utilizados para invocar uma lambda ou serem enviados a um tópico SNS, EventBridge e posteriormente invocar uma lambda.
