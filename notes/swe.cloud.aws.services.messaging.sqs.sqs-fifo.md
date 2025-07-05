---
id: 91hlfm7nc55npt5ssrts29o
title: Sqs Fifo
desc: ""
updated: 1751736667330
created: 1746137345699
---

First In First Out

- As mensagens são enviadas e recebidas em ordem
- _300 mensagens/segundo_ sem envio em **batch** e _3000 mensagens/segundo_ com envio em **batch** (lote)
- Remoção de mensagens duplicadas dentro de um range de 5 minutos com _Deduplication ID_
- O nome da fila deve ter o sufixo `.fifo`
- **Para converter uma fila _standard_ em _FIFO_ é necessário deleta-la e recria-la como _FIFO_**
