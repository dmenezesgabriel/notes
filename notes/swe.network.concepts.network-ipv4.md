---
id: 4rj8pll9cjvp17zqi9tcq2e
title: Network Ipv4
desc: ""
updated: 1751732047602
created: 1744495971185
---

# IPv4

- 0.0.0.0/0: Qualquer lugar.

## CIDR

> Classless Inter-Domain Routing

um método para alocar endereços de IP

composto por dois componentes:

- **Base IP**:

  - Representa um IP contido no intervalo (xx.xx.xx.xx) Ex: 10.0.0.0, 192.168.0.1

- **Subnet Mask**:

  - Define quantos bits podem mudar no IP. Ex: /8, /16, /24, /32, ...

| IP Base     | Subnet Mask | Descrição                    | potência       | Range de IPs                  |
| ----------- | ----------- | ---------------------------- | -------------- | ----------------------------- |
| 192.168.0.0 | /32         | permite 1 IP (2⁰)            | (32 - 32 = 0)  | 192.168.0.0                   |
| 192.168.0.0 | /31         | permite 2 IPs (2¹)           | (32 - 31 = 1)  | 192.168.0.0 → 192.168.0.1     |
| 192.168.0.0 | /30         | permite 4 IPs (2²)           | (32 - 30 = 2)  | 192.168.0.0 → 192.168.0.3     |
| 192.168.0.0 | /29         | permite 8 IPs (2³)           | (32 - 29 = 3)  | 192.168.0.0 → 192.168.0.7     |
| 192.168.0.0 | /28         | permite 16 IPs (2⁴)          | (32 - 28 = 4)  | 192.168.0.0 → 192.168.0.15    |
| 192.168.0.0 | /27         | permite 32 IPs (2⁵)          | (32 - 27 = 5)  | 192.168.0.0 → 192.168.0.31    |
| 192.168.0.0 | /26         | permite 64 IPs (2⁶)          | (32 - 26 = 6)  | 192.168.0.0 → 192.168.0.63    |
| 192.168.0.0 | /25         | permite 128 IPs (2⁷)         | (32 - 25 = 7)  | 192.168.0.0 → 192.168.0.127   |
| 192.168.0.0 | /24         | permite 256 IPs (2⁸)         | (32 - 24 = 8)  | 192.168.0.0 → 192.168.0.255   |
| 192.168.0.0 | /16         | permite 65.536 IPs (2¹⁶)     | (32 - 16 = 16) | 192.168.0.0 → 192.168.255.255 |
| 10.0.0.0    | /8          | permite 16.777.216 IPs (2²⁴) | (32 - 8 = 24)  | 10.0.0.0 → 10.255.255.255     |

## IPs Privados

- **Internet Assigned Numbers Authority (IANA)** estabeleceu certos blocos de endereços IPv4 para o uso de endereços privados (LAN) e públicos (Internet)

| Faixa de IP                   | Máscara CIDR   | Descrição               |
| ----------------------------- | -------------- | ----------------------- |
| 10.0.0.0 - 10.255.255.255     | 10.0.0.0/8     | Grandes redes           |
| 172.16.0.0 - 172.31.255.255   | 172.16.0.0/12  | Range de IPs padrão AWS |
| 192.168.0.0 - 192.168.255.255 | 192.168.0.0/16 | Redes residenciais      |

## Links úteis

- [ipaddressguide - cidr](https://www.ipaddressguide.com/cidr)

## Relacionado

- [[swe.network.concepts.network-ipv6]]
