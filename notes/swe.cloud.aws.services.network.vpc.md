---
id: x9v88ylgar6gatdp1hfpjfn
title: Vpc
desc: ""
updated: 1750813694728
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

## Resumo

- **CIDR – IP Range**
  Faixa de IPs usada para definir blocos de endereçamento.

- **VPC – Virtual Private Cloud**
  Criamos uma lista de blocos CIDR IPv4 e IPv6 para definir a rede virtual.

- **Subnets**
  Associadas a uma Availability Zone (AZ), cada uma possui um CIDR próprio.

- **Internet Gateway**
  Configurado no nível da VPC, fornece acesso à Internet para IPv4 e IPv6.

- **Route Tables**
  Precisam ser editadas para adicionar rotas de subnets para o Internet Gateway (IGW), VPC Peering Connections, VPC Endpoints, etc.

- **Bastion Host**
  Instância EC2 pública usada para acesso SSH, com conectividade SSH para instâncias EC2 em subnets privadas.

- **NAT Instances**
  Fornecem acesso à Internet para instâncias EC2 em subnets privadas. São antigas, devem ser configuradas em subnets públicas e ter o flag de verificação de origem/destino (Source/Destination Check) desativado.

- **NAT Gateway**
  Serviço gerenciado pela AWS que fornece acesso escalável à Internet para instâncias EC2 privadas, quando o destino é um endereço IPv4.

- **NACL – Network ACL**
  Regras stateless (sem estado) para tráfego de entrada e saída em nível de subnet. Não esqueça das portas efêmeras (Ephemeral Ports).

- **Security Groups**
  Regras stateful (com estado), operam no nível da instância EC2.

- **VPC Peering**
  Conecta duas VPCs com CIDRs que não se sobrepõem. Não é transitivo.

- **VPC Endpoints**
  Fornecem acesso privado a serviços da AWS (S3, DynamoDB, CloudFormation, SSM) dentro de uma VPC.

- **VPC Flow Logs**
  Podem ser configurados no nível da VPC, Subnet ou ENI para registrar tráfego ACCEPT e REJECT. Ajudam a identificar ataques e podem ser analisados com o Athena ou CloudWatch Logs Insights.

- **Site-to-Site VPN**
  Configura um Customer Gateway no data center e um Virtual Private Gateway na VPC, estabelecendo uma VPN site-to-site pela Internet pública.

- **AWS VPN CloudHub**
  Modelo de VPN em estrela (hub-and-spoke) para conectar múltiplos sites on-premise.

- **Direct Connect**
  Configura um Virtual Private Gateway na VPC e estabelece uma conexão privada direta com um AWS Direct Connect Location.

- **Direct Connect Gateway**
  Permite usar o Direct Connect com múltiplas VPCs em diferentes regiões da AWS.

- **AWS PrivateLink / VPC Endpoint Services**

  - Permite que clientes acessem serviços de forma privada da VPC do provedor de serviço.
  - Não requer VPC Peering, Internet pública, NAT Gateway ou Route Tables.
  - Deve ser usado com Network Load Balancer e ENI.

- **ClassicLink**
  Conecta instâncias EC2 no modo EC2-Classic à sua VPC de forma privada.

- **Transit Gateway**
  Permite conexões de peering transitivas entre VPCs, VPNs e Direct Connect.

- **Traffic Mirroring**
  Copia o tráfego de rede de ENIs para análise posterior.

- **Egress-only Internet Gateway**
  Similar ao NAT Gateway, mas usado para fornecer saída para a Internet somente para IPv6.

## Relacionado

- [[daily.journal.2025.06.14]]
- [[swe.network.concepts.network-ipv4]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonVPC
