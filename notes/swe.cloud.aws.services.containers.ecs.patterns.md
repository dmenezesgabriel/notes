---
id: 9h62nczf299gk68vglq2g26
title: Patterns
desc: ""
updated: 1746388149963
created: 1746388149963
---

## Tarefas ECS invocadas por um evento do Event Bridge

- Client faz um upload no S3
- O evento de upload no S3 sinaliza o `Event Bridge`
- Uma tarefa de `ECS` é executada
- Resultados são salvos no `DynamoDB`

## Tarefas ECS invocadas por agendamento do Event bridge

- Agendamento do `Event Bridge` a cada uma hora
- No horário agendado uma tarefa é executada no cluster ECS

## ECS + SQS Queue

- Uma fila SQS recebe mensagens
- Tarefas do ecs fazem `poll` das mensagens
- O ECS possui um grupo de _Auto Scaling_ que escala o numero de tarefas conforme a demanda

## Alerta de tarefa ECS parada via Event Bridge

- Uma vez que uma tarefa ECS é parada um evento é recebido pelo `Event Bridge`
- O `Event Bridge` aciona o `SNS` e envia um E-mail ao administrador

#SWE #Cloud #AWS #AWSServices #AmazonECS
