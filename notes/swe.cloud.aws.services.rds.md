---
id: atgcbm5h9nmfmndhxvsksq9
title: Rds
desc: ""
updated: 1751731824067
created: 1745194261071
---

Banco relacional gerenciado

- PostgreSQL
- MySQL
- Oracle
- SQLServer
- DB2 (IBM)
- MariaDB
- _Custom_

## Features

- Autoscaling para armazenamento
- Suporte a read replicas [[swe.cloud.aws.services.rds.rds-read-replicas]]
- Suporte a multi-az [[swe.cloud.aws.services.rds.rds-multi-az]]
- Backup automatizado com restauração _Point in Time_ (até 45 dias)
- Snapshot manual para recuperação dos dados a longo prazo
- Manutenção agendada gerenciada pela AWS (com Downtime)
- Autenticação via IAM, integração com Secrets Manager
- Acesso customizado a instância (Oracle e SQLServer)

## Casos de Uso

- Armazenamento de conjuntos de dados relacionais (RDBMS /OLTP)
- Realizar consultas SQL
- Realizar Transações

## Segurança

- IAM, Security Groups, KMS, **SSL** para _in transit security_

## Provisionamento

- Tamanho de instância
- Tamanho de volume EBS [[swe.cloud.aws.services.ec2.ec2-ebs]]
- Tipo de volume EBS

## RDS over EC2

pros:

- Provisionamento automático
- Atualização de sistema operacional
- Backup continuo e restauração para um timestamp especifico
- Dashboards de monitoramento
- Replicas de leitura
- Suporte a multi AZ
- Janelas de manutenção
- Capacidade de escala horizontal e vertical
- Armazenamento em EBS

contras:

- Nao e possível acessar a maquina via SSH

## Relacionado

- [[swe.cloud.aws.services.rds.rds-multi-az]]
- [[swe.cloud.aws.services.rds.rds-read-replicas]]
- [[swe.cloud.aws.services.databases]]
