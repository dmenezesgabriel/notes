---
id: r1wdmz8u2fucm8xwovk9x4v
title: Nacl
desc: ""
updated: 1750011768452
created: 1750010141868
---

# Network ACL

- Funcionam como um Firewall que controla o trafego _de_ e _para_ subnets [[swe.cloud.aws.services.network.subnet]]
- Uma _NACL_ por subnet, novas subnets possuem _NACL_ padrão
- _NACLs_ possuem números de identificação, regras em que o numero antecede outras regras as sobrepõem
- AWS recomenda que as regras sejam adicionadas com incrementos de 100 Ex: #100, #200, ...

## Casos de Uso

- Bloquear endereços de Ip específicos no nível de subnet

## Features

- Regras _Allow_ e _Deny_ no nível de subnet

## Relacionado

- [[daily.journal.2025.06.15]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonNetworkACL
