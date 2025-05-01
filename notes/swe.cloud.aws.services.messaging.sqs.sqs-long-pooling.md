---
id: 3zfm8kbk00upctveuvucf93
title: Sqs Long Pooling
desc: ""
updated: 1746137258650
created: 1746137258650
---

Caso não hajam mensagens na fila o consumidor espera escutando ativamente a fila até que novas mensagens cheguem para reduzir o numero de chamadas a API e a latência da aplicação

- 1 a 20 segundos
- Parâmetro `WaitTimeSeconds`
