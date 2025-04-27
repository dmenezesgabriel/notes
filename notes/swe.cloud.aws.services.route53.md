---
id: 8oureh3nlkzucss70qm96q4
title: Route53
desc: ''
updated: 1745440794413
created: 1745429616752
---

- Route 53 e um serviço de DNS gerenciado pela AWS
- Também e um registro de domínio
- Possui habilidade de checar a saúde dos serviços
- O único serviço da AWS que oferece 100% de disponibilidade
- 53 e referencia a porta tradicional do DNS
- Suporta os tipos de registro A/AAAA/CNAME/NS

## Hosted Zones

- Container para registros, que define como rotear trafego a um domínio e seus sub domínios
- **Public Hosted Zones**: contem registros que especificam como rotear trafego para internet (nomes de domínio públicos)
- **Private Hosted Zones**: contem registros que especificam como rotear trafego para uma ou mais VPCs

## Alias Records Targets

- Elastic Load Balancers
- Cloud Front Distributions
- API Gateway
- Elastic Beanstalk environments
- S3 Websites
- VPC Interface Endpoints
- Global Accelerator accelerator
- Route 53 record in the same hosted zone
- _Não é possível aplicar um ALIAS record para um nome de DNS de EC2_

## Routing Policies

- **Simple**: direciona a um único recurso, mesmo podendo ter vários valores especificados em um mesmo registro, um deles sera escolhido aleatoriamente
- **Weighted**: controla o % de requisições feitas a cada recurso
- **Failover**: Os recursos sao associados ao Health Check se o primeiro falha, o segundo sera escolhido
- **Latency-based**: redireciona ao recurso que possui a menor latência
- **Geolocation**: baseado na localização do usuário
- **Multi-Value Answer**
- **Geoproximity**
- **IP-based routing**
