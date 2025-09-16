---
id: zn0e99kxr9hdgnoof51j1dx
title: Bagging Vs Boosting
desc: ""
updated: 1758061277448
created: 1757961460237
---

## Bagging (Bootstrap Aggregating)

Reduz a variância combinando modelos independentes como _Random Forest_ [[data-science.machine-learning.ensemble-method.random-forest]], utilizado em detecção de fraudes.

Injeta aleatoriedade utilizando amostragem de inicialização (Bootstrap sampling) e fazendo a média dos resultados.

## Boosting

Reduz o viés corrigindo erros sequencialmente, bastante utilizado para predição de cliques e likes

## Comparativo

| Característica              | **Bagging (Ensacamento)**                                              | **Boosting (Impulsionamento)**                                                                 |
| :-------------------------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **Objetivo**                | Reduzir a **variância** em modelos de alta variância.                  | Reduzir o **viés** corrigindo sequencialmente os erros do modelo.                              |
| **Independência**           | Os modelos são treinados de forma **independente** e em paralelo.      | Os modelos são **dependentes**, com cada um corrigindo o erro do anterior.                     |
| **Ponderação**              | Todos os modelos têm **peso igual**.                                   | Os pesos são ajustados com base no **desempenho**.                                             |
| **Dados de Treino**         | Cada modelo usa subconjuntos aleatórios com reposição (**bootstrap**). | Cada modelo foca em pontos de dados classificados incorretamente pelo anterior.                |
| **Exemplo Popular**         | **Random Forest**.                                                     | **AdaBoost**, **Gradient Boosting**.                                                           |
| **Melhor Para**             | Modelos de alta variância, como árvores de decisão.                    | Modelos de alto viés, onde ajustes sequenciais são úteis.                                      |
| **Processo**                | **Não iterativo**; os modelos não dependem uns dos outros.             | **Iterativo**; cada modelo é treinado com base nos resultados anteriores.                      |
| **Combinação de Previsões** | Agrega previsões por **votação** ou **média**.                         | Combina previsões ponderadas com base na acurácia.                                             |
| **Casos de Uso**            | Adequado para dados com mais ruído e variabilidade.                    | Adequado para conjuntos de dados onde a melhoria da acurácia é necessária em várias iterações. |
| **Paralelismo**             | Processamento **paralelo** dos modelos.                                | Processamento **sequencial** para correção de erros.                                           |

## Links úteis

- [bagging-vs-boosting](https://www.upgrad.com/blog/bagging-vs-boosting/)
