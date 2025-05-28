---
id: o1uwght4fu5w725jm6rsq5n
title: Organizations
desc: ""
updated: 1748358101798
created: 1748357242289
---

Gerenciamento de múltiplas contas da AWS

## Features

- Cobrança centralizada
- Método de pagamento unificado
- Benefícios de preço (Desconto por volume)
- Compartilhar _Reserved Instances_ e _Saving Plans_ entre contas
- Conta principal de gerenciamento
- API para criação de contas de forma automatizada
- [_Organization Units_](#Organization-Units)

## Benefícios

- Padrões de tagueamento para Finops
- CloudTrail com logs centralizados no S3 de uma única conta
- CloudWatch com logs centralizados em uma única conta
- [_SCP (Security Service Control Polices)_](#SCP)

## SCP

- Politicas IAM aplicadas a _Organization Units_ ou contas para restringir acessos de usuários

## Organization Units

```mermaid
graph TD
    ROOT["Root Organizational Unit (OU)"]

    MGMT["Management Account"]
    ROOT --> MGMT

    OU_DEV["OU (Dev)"]
    OU_PROD["OU (Prod)"]
    ROOT --> OU_DEV
    ROOT --> OU_PROD

    OU_HR["OU (HR)"]
    OU_FIN["OU (Finance)"]
    OU_PROD --> OU_HR
    OU_PROD --> OU_FIN

    %% Member Accounts Dev
    DEV_ACC1["Dev Member Account 1"]
    DEV_ACC2["Dev Member Account 2"]
    OU_DEV --> DEV_ACC1
    OU_DEV --> DEV_ACC2

    %% Member Accounts Prod
    PROD_ACC1["Prod Member Account 1"]
    PROD_ACC2["Prod Member Account 2"]
    OU_PROD --> PROD_ACC1
    OU_PROD --> PROD_ACC2

    %% Member Accounts HR
    HR_ACC1["HR Member Account 1"]
    HR_ACC2["HR Member Account 2"]
    OU_HR --> HR_ACC1
    OU_HR --> HR_ACC2

    %% Member Accounts Finance
    FIN_ACC1["Finance Member Account 1"]
    FIN_ACC2["Finance Member Account 2"]
    OU_FIN --> FIN_ACC1
    OU_FIN --> FIN_ACC2
```

## Relacionado

- [[daily.journal.2025.05.27]]

#SWE #Cloud #AWS #AWSServices #AmazonOrganizations
