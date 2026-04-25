---
id: 9m6xyzavzkusugomdtf6oaj
title: Direct Connect
desc: ""
updated: 1750677209972
created: 1750019830016
---

# Direct Connect DX

- Fornece uma conexão privada dedicada de uma rede remota a sua _VPC_ [[swe.cloud.aws.services.network.vpc]]
- E necessário estabelecer uma conexão entre o data center _on-premise_ e o AWS Direct Connect
- E necessário provisionar um _Virtual Private Gateway_
- Leva mais de um mês para estabelecer novas conexões
- Dados não são criptografados, mas são privados

## Casos de Uso

- Consumo de _datasets_ on-premises
- Ambientes híbridos (on-premise + cloud)

## Resiliência

- Alta: Uma conexão em múltiplas regiões
- Máxima: Conexões se paradas em múltiplos dispositivos em mais de uma região

## Direct Connect Gateway

- Configurar um _Direct Connect_ para se conectar a mais de uma _VPC_ em diferentes regiões (de uma mesma conta).

## Tipos de conexão

- Conexões dedicadas
- Conexões Hospedadas

## AWS Direct Connect + VPN

- Conexão privada com _IPsec-criptografado_

## Relacionado

- [[daily.journal.2025.06.15]]
- [[daily.journal.2025.06.23]]
- [[swe.cloud.aws.services.network.vpc]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonDirectConnect
