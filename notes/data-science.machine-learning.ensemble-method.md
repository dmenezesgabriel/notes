---
id: sem5txdyskkdwuoinyk0tbs
title: Ensemble Method
desc: ""
updated: 1758640590819
created: 1758305089473
---

> The wisdom of the crowd is the collective option of a group of individuas rather than of a single expert.

Aprendizado em conjunto!

_Ensemble methods_ são combinações de diferentes modelos conhecidos como _modelos fracos (eak learners)_ ou _modelos base_ para a criação de um modelo mais forte.

Quando se cria um modelo de machine learning é necessário encontrar um equilíbrio entre variância e viés. O _Ensemble_ é uma tentativa de encontrar esse equilíbrio.

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

#### Vantagens

- Reduz a variância sem aumentar viés
- Diversidade de dados de treino feita com base na amostragem aleatória
- Funciona com conjuntos de dados pequenos

#### Desvantagens

- Melhora a acurácia a custo de interpretabilidade [[data-science.machine-learning.concepts.interpretability]].
- Há chance de features importantes nunca serem utilizadas.
- _Out-of-bag_, há chance de dados ficarem fora das amostras aleatoriamente geradas

### Boosting

Neste método os modelos são executadas de forma sequencial invés de paralela. Os erros de um modelo do conjunto de modelos são corrigidos pelo próximo.

#### Vantagens

#### Desvantagens

### Blending

### Stacking

## Links Úteis

- [ensemble-learning-methods-in-machine-learning](https://medium.com/analytics-vidhya/ensemble-learning-methods-in-machine-learning-5d2f849192f8)
- [machine-learning-e-ensembles](https://medium.com/dados-e-saude/machine-learning-e-ensembles-780f3a8aa36d)
