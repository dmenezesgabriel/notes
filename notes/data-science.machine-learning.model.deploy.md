---
id: xsumev39g03y7f3jz9x3mao
title: Deploy
desc: ""
updated: 1758562795857
created: 1756753074073
---

1. Treinamento do modelo
2. Otimização de hiperpârametros
3. Deploy e uso de modelos

- Escalabilidade
- Custo
- Latência
- Segurança

- [[data-science.machine-learning.model.deploy.tools]]

## Modelos de aprendizagem vs modelos preditivos

|                                     | **OFFLINE** (Aprendizagem Estática)                              | **ONLINE** (Aprendizagem Dinâmica)                              |
| :---------------------------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------- |
| **ON-DEMAND** (Dados em tempo real) | - Microserviços <br> - REST API                                  | - Análise de streaming em tempo real <br> - Aprendizagem online |
| **BATCH** (Dados históricos)        | - Previsão (Forecast) <br> - Predição em lote (Batch Prediction) | - Machine Learning automatizado (Auto ML)                       |

### Forecast

Tanto o treinamento quanto a execução do modelo ocorre em dados históricos. Sua aplicabilidade é maior no campo de pesquisas acadêmicas ou educação

### Web Service

A arquitetura de deploy mais comum para modelos de _Machine Learning_ são **Web Services**. O serviço recebe um input de dado e devolve como output o resultado da predição.

O modelo é treinado _offline_ com dados históricos, mas utilizada dados vivos para para realizar predições.

## Tipos de deploy

### Deploy de modelo Offline

- Batch Job

Exemplos de processamento em Batch:

- Relatórios de vendas
- Análise de tendências
- Processamento de dados de sensores

### Deploy de modelo Online

- APIs

Exemplos de inferência em tempo real:

- Detecção de fraudes
- Sistemas de recomendação
- Assistentes virtuais e chatbot

### Edge Computing

- Modelo no dispositivo. Ex: IOT, Mobile

## Técnicas de deploy

- Canary Deploy [[devops.deploy.canary]]
- Blue Green Deploy

## Links Úteis

- [three-levels-of-ml-software](https://ml-ops.org/content/three-levels-of-ml-software)
