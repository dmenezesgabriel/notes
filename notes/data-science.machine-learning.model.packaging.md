---
id: tr08hbk86p3z70dbmi736oi
title: Packaging
desc: ""
updated: 1758564759924
created: 1757347739686
---

## Tipos de serialização de modelo

### Amalgamation

O modelo e todo código necessário para executa-lo é colocado em um único pacote.

- [SKompiler](): Transforma modelos de ML em outros formatos como queries em SQL, formulas de Excel [PFA](#pfa) e expressões [SymPy]()

### PMML

É um formato baseado em `XML` com a extensão `.pmml`.

### PFA

_Portable Format for Analytics_ foi criado como substituto para o [PMML](#pmml) e é baseado em `JSON`.

### ONNX

_Open Neural Network eXchange_ é um formato independente.

### PKL

Formato baseado na serialização do pacote _python_ `pickle`. Utilizado no framework _Scikit-Learn_.

### POJO e MOJO

A ferramenta **H2O** permite salvar os modelos construídos em _POJO_ (Plain Old Java Object) e _MOJO_ (Model Object, Optimized).

### MLeap

Modelos feitos com SparkML podem ser salvos no formato MLeap com extensão `.jar`
