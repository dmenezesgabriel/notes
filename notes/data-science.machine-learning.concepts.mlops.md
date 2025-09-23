---
id: efha65c5zqxr1jfkejz05d5
title: Mlops
desc: ""
updated: 1758573316093
created: 1756751215481
---

O termo _MLOps_ pode ser definido de diversas maneiras, como a extensão da metodologia _DevOps_ para incluir _Machine Learning_ e _Data Science_.

Também pode se referir ao uso de princípios científicos, ferramentas, técnicas de machine learning engenharia de software tradicional para projetar e construir sistemas complexos.

A _engenharia de machine learning_ compreende desde a coleta dos dados, desenvolvimento do modelo preditivo até a disponibilização do modelo para o produto ou usuários finais.

O processo de desenvolvimento do modelo deve estar próximo do processo de entrega.

## O que faz

- Criação de arquitetura de aplicações de ML
- Automações para gerenciar modelos de dados e código
- Deploy de modelos de Machine Learning
- Monitoramento de modelos em produção
- Criação de frameworks para facilitar o trabalho do cientista de dados
- Manutenção e atualização de modelos em produção
- Ajustes e retreinamento de modelos (otimização)

## Benefícios

- Escalabilidade
- Automação
- Desempenho
- Monitoramento
- Governança
- Versionamento
- Validação e testes
- Continuous Integration & Continuous Delivery

## Ataca os problemas

- Degradação de modelos
- Erros na implantação

## Componentes de um modelo de maturidade MLOps

- Desenvolvimento e experimentação
- Implantação e gerenciamento de modelos
- Monitoramento e manutenção
- Governança e compliance

## Etapas

- Desenvolvimento e experimentação
- Integração continua de pipelines (CI)
- Entrega continua de pipelines (CD)
- Gatilhos automáticos em produção (Treinamento e armazenamento no model registry)
- Entrega continua de modelos (Ex: Exposição como API)
- Monitoramento (performance)

## Components

- **Source Control**: Versionamento do código (GIT), dados (DVC) e artefatos de ML (Model Registry e Metadata Store).
- **Test & Build Services**: CI para pipelines (construção de pacotes e executáveis).
- **Deployment Services**: CD para deploy de pipelines em determinado ambiente (DEV, STG, PROD).
- **Model Registry**: Armazenamento de modelos treinados.
- **Feature Store**: Pré processamento de dados de entrada para serem consumidos pelo modelo no durante seu treinamento ou consumo.
- **ML Metadata Store**: Armazenamento de metadados de treinamento de modelo como nome, parâmetros, dados de treino, dados de teste e resultados de metrics.
- **ML Pipeline Orchestrator**: Automação das etapas de experimentação

## Continuous X

- Continuous Integration (CI)
- Continuous Delivery (CD): Entrega de pipeline de treinamento de ML que fará deploy automático de modelos.
- Continuous Training (CT): Re-treino de modelos para deploy
- Continuous Monitoring(CM): Monitoramento de performance

## Ciclo de uma aplicação de machine learning

O gatilho para uma nova implantação pode ser os _dados_, o modelo de _machine learning_ ou o _código_.

A performance dos modelos de ML pode ser degradada com o tempo devido a mudanças nos dados que são recebidos uma vez que esta em produção, dados que não form vistos em sua fase de treinamento, assim como mudanças em regras de negócio.

## Links Úteis

- [mlops-principles](https://ml-ops.org/content/mlops-principles)
