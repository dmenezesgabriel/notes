---
id: 1cvpkk2fsst7im9ckhjtanb
title: Subnet
desc: ""
updated: 1749920944691
created: 1749920311413
---

# Subnet

- AWS reserva 5 endereços em cada subnet, estes endereços não estão disponíveis para uso e não podem ser atribuídos a uma instância EC2.
- Os endereços de Ip reservados são os 4 primeiros e o último, por exemplo, para um bloco 10.0.0.0/24:
  - 10.0.0.0: Endereços de rede
  - 10.0.0.1: Reservado para o _VPC Router_
  - 10.0.0.2: Reservado para mapeamento de DNS fornecido pela AWS
  - 10.0.0.3: Reservado para uso futuro
  - 10.0.0.555: Endereço de Broadcast de rede
- Caso sejam necessários 29 endereços de IP para instâncias EC2 nao poderá ser utilizado um CIDR `/27` (32 IPs), porque subtraindo o número de endereços reservados teríamos apenas 27 IPs disponíveis para uso.

## Relacionado

- [[daily.journal.2025.06.14]]
- [[swe.cloud.aws.services.network.vpc]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonSubnet
