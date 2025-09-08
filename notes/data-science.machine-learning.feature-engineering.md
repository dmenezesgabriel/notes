---
id: fzx7jmp0gonuiavgnc5r3ol
title: Feature Engineering
desc: ""
updated: 1757341175990
created: 1756753207454
---

## O que é?

Técnica para selecionar, modificar ou criar novos atributos a partir de dados existentes para melhor representar padrões. Isso inclui transformações matemáticas, combinações nos dados, extração de características temporais e etc.

Importante para lidar com ruídos, valores faltantes e tornar a informação relevante acessível aos modelos

- Seleção de atributos
- Transformação de atributos
- Criação de atributos
- Codificação de variáveis categóricas
- Normalização ou padronização

## Seleção de Features

- Escolher entre atributos existentes
- Nem todos os atributos ou características dos dados são importantes para a modelagem

### Filtragem

Uso de estatística para selecionar atributos baseando-se em seu relacionamento com a variável alvo

### Wrapper methods

Uso de um modelo preditivo parta avaliar a importância do atributo

### Embedded methods

Integram a seleção dos atributos como parte do processo de treinamento do modelo. Ex: Modelos que utilizam regularização

## Extração e criação de atributos

### Análise de componentes principais (PCA)

Reduz a dimensionalidade dos dados ao transforma-los em um conjunto menor de variáveis sumarias(components) que retém a maior parte da variabilidade original dos dados

### Engenharia de atributos temporais

Derivação de novos atributos a partir de variáveis de tempo como hora do dia, dia da semana, diferenciação de tempos entre eventos

## Tratamento de dados categóricos

- [[data-science.machine-learning.data-pre-processing.one-hot-encoding]]
- [[data-science.machine-learning.data-pre-processing.ordinal-encoding]]
- [[data-science.machine-learning.frequency-encoding]]
- [[data-science.machine-learning.target-encoding]]

## Normalização e Padronização

- [[data-science.machine-learning.data-preprocessing.normalization]]
- [[data-science.machine-learning.data-pre-processing.standardization]]

## Dados Faltantes

### Imputação

Substituição de valores faltantes por um valor estimado com base em outras observações

### Indicadores de dados faltantes

Criação de novos atributos que indicam a presença de dados faltantes em outros atributos

## Tratamento de dados desbalanceados

### Oversampling/Undersampling

Ajusta o balanceamento das classes alvo por meio de replicação de exemplos da classe minoritária ou remoção de exemplos da classe majoritária

- SMOTE: Técnica de Sobre-amostragem
- Tomeklinks e ENN: Técnica de Sub-amostragem

## Detecção e tratamento de Outliers

### Métodos estatísticos

- Uso de scores ou intervalos interquartis (IQR) para identificar outliers

### Truncamento ou Capping

Limitação de valores extremos a um certo valor definido
