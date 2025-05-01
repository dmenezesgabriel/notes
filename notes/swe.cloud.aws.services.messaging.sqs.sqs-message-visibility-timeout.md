---
id: w22c89uud305gvgref6j45k
title: Sqs Message Visibility Timeout
desc: ""
updated: 1746137298571
created: 1746137298571
---

Depois da mensagem ser "vista" pelo consumidor, ela se torna invisível para outros consumidores, caso a mensagem não seja processada em 30 segundos ela sera visível novamente para todos consumidores que derem o "poll messages" podendo causar processamento duplicado, a não ser que o consumidor utilize a api `ChangeMessageVisibility` para estender o tempo de processamento.
