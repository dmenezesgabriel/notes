---
id: x9v88ylgar6gatdp1hfpjfn
title: Vpc
desc: ""
updated: 1749919931771
created: 1749911321642
---

# Virtual Private Cloud (VPC)

- Todas novas contas AWS tem uma **VPC padrão**
- Novas instâncias EC2 são hospedadas na _VPC_ padrão caso nenhuma subnets seja definida
- A _VPC_ padrão possui conectividade com a internet e todas instâncias EC2 hospedadas nela possuem endereços IPv4 públicos
- É possível ter múltiplas VPCs em uma região da AWS (máximo de 5 VPCs por região)
- É possível ter até 5 CIDR [[swe.network.concepts.network-ipv4#CIDR]] por VPC:
  - Mínimo `/28` (16 endereços de IP)
  - Máximo `/16` (65536 endereços de IP)
- Como a vpc é privada, apenas intervalos de IPv4 privados são permitidos:
  ![[swe.network.concepts.network-ipv4#IPs-privados]]

## Relacionado

- [[daily.journal.2025.06.14]]
- [[swe.network.concepts.network-ipv4]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonVPC
