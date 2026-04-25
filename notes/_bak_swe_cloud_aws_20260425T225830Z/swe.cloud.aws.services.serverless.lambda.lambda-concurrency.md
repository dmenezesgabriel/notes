---
id: 8fd6xg1cym0zphdzik26vr0
title: Lambda Concurrency
desc: ""
updated: 1747083381137
created: 1746581797930
---

- Até 1000 execuções concorrentes (limite divido entre todas funções lambda da conta)
- _reserved concurrency_: reservar slots de concorrência para uma função especifica
- Throttle (erro 429)
- Se uma função nao tem concorrência suficiente para processar os eventos de uma fila, ela retorna os eventos a fila e pode retentar o consumo por até 6 horas. O intervalo entre as retentativas aumenta exponencialmente de 1 segundo a 5 minutos a cada tentativa
- Cold start: A primeira requisição da lambda pode ser mais lenta pela necessidade de carregar os recursos inicialmente. Para que não haja essa lentidão inicial pode se provisionar concorrência com antecedência.

- [[swe.cloud.aws.services.serverless.lambda]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonLambda
