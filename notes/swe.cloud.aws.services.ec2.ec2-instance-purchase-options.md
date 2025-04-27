---
id: qxg0hp65n1b9fyvl4q5bchi
title: Ec2 Instance Purchase Options
desc: ''
updated: 1744578223567
created: 1744563591149
---

## On-Demand

- carga de trabalho curta
- preço previsível
- pago por segundo

## Reserved

- 1 e 3 anos
- cargas de trabalho longas
- se reserva tipos de atributos de instancia como tipo, região e sistema operacional
- pagamento posterior, adiantado ou parcialmente adiantado
- pode se comprar e vender instancias reservadas no Reserved Instance Marketplace
- **Convertible Reserved Instance**: Pode se mudar os atributos reservados

## Saving Plans

- 1 e 3 anos
- cargas de trabalho longas
- determinada quantidade de uso ex: $10/hora por 1 ou 3 anos, qualquer excedente sera cobrado como _On Demand_
- a instancia deve ser de uma familia especifica e região, podendo alterar o tipo dentro da familia ex: m5.xlarge, m5.2xlarge

## Spot Instances

- maior desconto entre todos modelos de precificação
- cargas de trabalho curtas
- barato
- instancias podem ser perdidas a qualquer momento porque voce define um custo máximo que esta disposto a pagar pela instancia e se o custo definido for maior que o atual, voce a perde
- cargas de trabalho devem ser tolerantes a falha ex: batch jobs, analise de dados, processamento de imagem
- nao devem ser utilizados para trabalhos criticos ou bancos de dados

## Dedicated Hosts

- se reserva um servidor físico inteiro
- utilizado quando ha um requerimento de compliance ou na necessidade de uso de licenças de software especificas como licenças de maquina virtual
- On-Demand ou Reserved

## Dedicated Instances

- nenhum outro cliente ira compartilhar o mesmo hardware
- o hardware e dedicado

## Capacity Reservation

- reserva instancias On-Demand em uma availability zone especifica por qualquer duração de tempo
- pode ser combinado com Regional Reserved instances ou Savings Plan
- curto prazo e cargas de trabalho ininterruptas em uma zona de disponibilidade especifica
