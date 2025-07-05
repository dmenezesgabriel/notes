---
id: 91hlfm7nc55npt5ssrts29o
title: Sqs Fifo
desc: ""
updated: 1751731819016
created: 1746137345699
---

First In First Out

- As mensagens são enviadas e recebidas em ordem
- 300 mensagens/segundo sem envio em lote e 3000 mensagens/segundo com envio em lote
- Remoção de mensagens duplicadas dentro de um range de 5 minutos com _Deduplication ID_
- O nome da fila deve ter o sufixo `.fifo`
- **Para converter uma fila _standard_ em _FIFO_ é necessário deleta-la e recria-la como _FIFO_**
