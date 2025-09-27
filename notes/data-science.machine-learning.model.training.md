---
id: mfhvj2wccbf1xelnjqabfx7
title: Training
desc: ""
updated: 1758554511761
created: 1758554069368
---

Os modelos de _Machine Learning_ podem ser treinados de duas formas:

- [Offline](#treinamento-offline)
- [Online](#treinamento-online)

## Treinamento Offline

O treinamento offline é conhecido como _Batch_ ou _Aprendizado Estático_, onde o modelo é treinado em um conjunto de dados previamente coletado. O modelo permanece constante até o seu re-treinamento.

## Treinamento Online

Também chamado de _Aprendizado Dinâmico_, onde o modelo é re-treinado regularmente conforme novos dados são recebidos (stream de dados). Aplicado por exemplo no uso de dados de sensores, series temporais, trading de ações.

O treinamento do modelo não é feito no sistema de deploy, na verdade o treinamento "online" é um treinamento incremental.
