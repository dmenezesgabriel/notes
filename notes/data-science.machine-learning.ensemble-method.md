---
id: sem5txdyskkdwuoinyk0tbs
title: Ensemble Method
desc: ""
updated: 1758638767209
created: 1758305089473
---

> The wisdom of the crowd is the collective option of a group of individuas rather than of a single expert.

Aprendizado em conjunto!

_Ensemble methods_ se baseiam na ideia de "wisdom of the crowd" e utilizam múltiplos algoritmos de machine learning para obter melhor performance preditiva.

A ideia é construir um conjunto de modelos para fazer predições mais acuradas e que os erros de um modelo serão corrigidos pelo de outro. Individualmente os modelos podem estar errados, mas quando combinados tem maior chance de um resultado acurado.

Os modelos podem rodar em paralelo e serem combinados por:

- [Classificação por votos](#Classificação-por-votos)
- [Classificação por regressão](#Classificação-por-regressão)

## Classificação por votos

Agregação das respostas com escolha da opção em que os votos representam a maioria

## Classificação por regressão

Média dos valores de output dos modelos

## Métodos

- [Bagging](#bagging)
- [Boosting](#boosting)
- [Blending](#blending)
- [Stacking](#stacking)

### Bagging

O termo **Bagging** vem de _bootstrap aggregating_, onde fornecemos a cada modelo em nosso conjunto, uma amostra gerada de maneira aleatória com base no conjunto original, e são permitidos valores duplicados.

Neste método são utilizados modelos de um mesmo tipo, e eles são executados em paralelo.

1. É escolhida uma amostra do conjunto de dados original de forma aleatória.
2. Esta amostra é inserida no conjunto de dados _bootstrap_.
3. Os passos 1 e 2 são repetidos até que sejam formadas **N** amostras do mesmo tamanho do conjunto de dados original no conjunto de dados _bootstrap_.

Então os modelos recebem os conjuntos de dados e realizam predições o resultado final é dado pela média do resultado dos modelos ou pelos resultados de maior frequência.

Árvores de decisão são suscetíveis a Overfitting [[data-science.machine-learning.glossary.overfitting]] e o método _bagging_ introduz _bias_ o que acaba gerando um equilíbrio.

### Boosting

Neste método os modelos são executadas de forma sequencial invés de paralela. Os erros de um modelo do conjunto de modelos são corrigidos pelo próximo.

### Blending

### Stacking

## Links Úteis

- [ensemble-learning-methods-in-machine-learning](https://medium.com/analytics-vidhya/ensemble-learning-methods-in-machine-learning-5d2f849192f8)
