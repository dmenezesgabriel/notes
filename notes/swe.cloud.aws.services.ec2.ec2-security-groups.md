---
id: y58n70g4xqbqyl5m7jlww35
title: Ec2 Security Groups
desc: ''
updated: 1744496121190
created: 1744495172970
---

Controlam o trafego para dentro _(Inbound)_ ou fora _(outbound)_ de instancias EC2.

- Agem como Firewall
- Apenas **Allow Rules**
- Podem referenciar outros security groups
- Podem estar atrelados a múltiplas instancias
- Podem ter múltiplas instancias atreladas
- Por default todo trafego via inbound esta bloqueado
- Por default todo trafego via outbound esta liberado

Causas comuns de erros:

- Timeout em acesso ao EC2, configuração incorreta de Security Group

#SWE #Cloud #AWS #AWSServices #AmazonEC2
