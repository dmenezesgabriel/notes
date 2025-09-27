---
id: gqdbpi1pucetfm2mpdjxcg2
title: Random Forest
desc: ""
updated: 1758639902299
created: 1757441824494
---

## O que é?

Método de bagging aplicado em _árvores de decisão_

### Características

## Etapas

### 1. Bootstrap Dataset

Criação de um conjunto de dados a partir do original de forma aleatória

### 2. Criação das árvores

1. A partir do conjunto de dados original, separa features de forma aleatória para compor a árvore
2. Identificar quais características são as características que melhor separam os dados a partir de um processo de descoberta de impureza
3. Seleciona mais atributos para compor a árvore
4. Outras árvores são criadas a partir do mesmo processo acima

### 3. Classificação dos dados

Cada árvore da floresta classificara os dados (Processo de bagging [[data-science.machine-learning.concepts.bagging-vs-boosting]])

### 4. Score

- Média das árvores
- Frequência de decisões Sim/Não

## Vantagens

- Explicabilidade [[data-science.machine-learning.concepts.explainability]]
- Menos propenso a overfitting [[data-science.machine-learning.glossary.overfitting]]
- Modelo simples com poucos parâmetros

## Desvantagens

- Exige maior poder de processamento por precisar percorrer todas as árvores
- Acurácia

## Aplicação

## Comparação

## Dicas

## Utilização

## Links úteis

- [Parte 4 - Árvore de Decisão, Random Forest e Gradient Boosting](https://www.youtube.com/watch?v=noy13V1nTz4)
