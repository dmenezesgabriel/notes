---
id: 55yt75rwjdxsiw1zyjik2a9
title: Data Modeling Inheritance
desc: ""
updated: 1746454149771
created: 1746448380404
---

- Entidades pais e filhas
- Generalização ou supertipo (Pai)
- Especialização ou subtipo (Filha)

```mermaid
---
title: Herança
---
erDiagram
    Conta {
        string codigo_banco PK
        string codigo_agencia PK
        string numero_conta PK
        string codigo_tipo_conta
        float valor_saldo_atual
    }
    ContaCorrente {
        string codigo_banco PK
        string codigo_agencia PK
        string numero_conta PK
        float valor_limite_atual
    }
    ContaPoupanca {
        string codigo_banco PK
        string codigo_agencia PK
        string numero_conta PK
        date data_aniversario
    }
```

## Generalização Total ou completa

Toda ocorrência de um supertipo deve ser especializado, Ex: para toda _conta_ deve existir uma _conta corrente_ ou _conta poupança_

## Generalização Parcial ou incompleta

Pode existir uma conta sem especialização

## Especialização mutuamente exclusiva

- Não pode haver mais de uma especialização para o mesmo objeto

## Especialização mutuamente não exclusiva

- Pode pode haver mais de uma especialização para o mesmo objeto, ou seja, dois papeis ao mesmo tempo
