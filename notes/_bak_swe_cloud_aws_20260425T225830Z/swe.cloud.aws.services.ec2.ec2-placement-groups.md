---
id: qqct2016sj9fygidiajtfv6
title: Ec2 Placement Groups
desc: ""
updated: 1751733019719
created: 1744837456954
---

Controla a estrategia de colocação de instancias ec2

## Cluster

Mesma zona de disponibilidade, baixa latência e alto risco. Ideal para analises de big data que precisam ser concluídas rapidamente. (HPC)

## Spread

diferentes zonas de disponibilidade (máximo de 7 instancias por grupo por AZ). Pequeno grupo de instancias em hardwares distintos para reduzir chance de falha do sistema

## Partition

Diferentes partições de um hardware para altas cargas de trabalho distribuídas. Ideal para Hadoop, Cassandra, Kafka.
