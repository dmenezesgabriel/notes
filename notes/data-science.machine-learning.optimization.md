---
id: 5z6q1fwa51q9hor2ewhtq8d
title: Optimization
desc: ''
updated: 1756753433897
created: 1756753433897
---

## Otimização de hiperparametros

## Diretrizes

- Utilizar conjunto de validações
- Explorar diferentes métodos
- Interromper a otimização quando necessário (Caso não haja melhoria significativa no modelo)

### Tipos de parâmetros

- Parâmetros: Aprendidos pelo modelo durante o treinamento
- Hiperparametros: Ajudam o modelo no processo de treinamento e precisam ser definidos previamente [[data-science.machine-learning.glossary.hiperparams]]

## Métodos Comuns de otimização

### Busca aleatória (Random Search)

São geradas combinações aleatórias de hiperparametros e o desempenho do modelo é avaliado para cada combinação.

### Busca em grade (Grid Search)

A busca em grade envolve a criação de uma grade com todas as combinações possíveis de hiperparametros a serem avaliados. Pode ser bem custosa, por isso é utilizada em espaços de busca menores.

### Otimização Bayesiana

Se utiliza um modelo de Machine Learning para prever os melhores valores dos parâmetros com base em iterações anteriores. A ideia é ajustar os valores gradualmente, de forma inteligente, levando em consideração os resultados obtidos em tentativas anteriores.

### Gradient-based optimization

Ajusta-se os hiperparametros de forma iterativa, movendo-se na direção que reduz o gradiente de perda, pode ser eficaz em parâmetros continuos, mas não é aplicável a parâmetros discretos ou categóricos.

### Evolutionary Algorithms

Algoritmos evolutivos que simulam a evolução natural, utilizam conceitos de mutação, cruzamento e seleção. Podem ser mais lentos e exigem configuração de parâmetros adicionais como taxa de mutação e cruzamento.

## Escolha de métodos de otimização

### Tamanho da busca

Se o número de combinações possíveis de hiperparametros for muito grande, a busca aleatória ou a otimização baseada em modelo pode ser mais eficiente que a busca em grade.

### Recursos computacionais disponíveis

A busca em grade pode exigir muito mais pode computacional.

### Tempo de treinamento

Para modelos que levam muito tempo para treinar, como redes neurais profundas, pode ser mais eficiente utilizar a otimização Bayesiana, que pode reduzir o numero de tentativas necessárias.

## Boas praticas

### Validação cruzada

Utiliza validação cruzada para avaliar o desempenho do modelo com diferentes hiperparametros, evitando vies na avaliação.

### Escalonamento apropriado

Alguns hiperparametros são mais sensíveis que outros, use um escalonamento apropriado (Ex: Logarítmico).

### Paralelização

Aproveite a paralelização para acelerar o processo de busca, especialmente ao utilizar Grid Search ou Random Search.

### Monitoramento e desempenho

Acompanhe o desempenho do modelo em tempo real durante o tunning para identificar se uma combinação de hiperparametros esta se identificando promissora ou não

### Utilizar hiperparametros pré-definidos

Considerar o uso de configuração padrão como ponto de partida
