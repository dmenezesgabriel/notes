---
id: q324gr7482ulhsnbsh1g9zy
title: Disaster Recovery
desc: ""
updated: 1750870213696
created: 1750814310508
---

# Disaster Recovery

- Qualquer evento que impacta negativamente a continuidade do negócio ou finanças de uma empresa
- _Disaster Recovery_ se trata de preparar-se para se recuperar de um desastre

## Tipos

- _On-premise_ -> _On-premise_: Tradicional e custos
- _On-premise_ -> _AWS Cloud_: Recuperação hibrida
- AWS Cloud Region A -> AWS Cloud Region B

## Termos

### Recovery Point Objective (RPO)

Quanto de perda de dados (RPO) é aceitável frente a um desastre, a perda de dados é calculada da data do último backup até a data do desastre

### Recovery Time Objective (RTO)

Downtime (RTO) é calculado o tempo entre o desastre e a recuperação

## Estratégias

- Backup & Restore: Fácil, barato e com alto RPO e RTO
- Pilot Light: Sistemas criticos estão executando sempre, apenas sistemas menos criticos devem ser recuperados
- Warm Standby: Todos os componentes do sistema executando em uma versão com menos recursos que escala mediante a um desastre
- Hot Site / Multi Site Approach: Todos os componentes do sistema rodando em produção com escala produtiva tanto no _on-premise_ quanto na _AWS_

## Dicas

### Backup

- Snapshots _EBS_[[swe.cloud.aws.services.ec2.ec2-ebs]], Backups automáticos _RDS_[[swe.cloud.aws.services.rds]], _Snapshots_ ...
- Envios de dados regularmente ao S3, Glacier, ...
- Para _On-premise_: _Snow Ball_ [[swe.cloud.aws.services.storage.snow-family]] ou _Storage Gateway_ [[swe.cloud.aws.services.storage.storage-gateway]]

### Alta disponibilidade

- _Route 53_ [[swe.cloud.aws.services.route53]] para migrar _DNS_ [[swe.network.concepts.dns]] de região para região
- _RDS Multi-AZ_, _Elasticache Multi-AZ_, EFS, S3
- _Site to Site VPN_ [[swe.cloud.aws.services.network.site-to-site-vpn]] como recuperação do _Direct Connect_ [[swe.cloud.aws.services.network.direct-connect]]

### Replicação

- Replicação _RDS_ (Cross Region) [[swe.cloud.aws.services.rds]], _AWS Aurora_ [[swe.cloud.aws.services.aurora]]
- Replicação de dados _on-premise_ para _RDS_ [[swe.cloud.aws.services.rds]]

### Automação

- _CloudFormation_, _Elastic Beanstalk_ para re-criar um ambiente completo
- Recuperação, reinicialização de instâncias EC2 via alarmes _Cloud Watch_ [[swe.cloud.aws.services.monitoring-audit.cloud-watch]]
- _Lambda functions_ [[swe.cloud.aws.services.serverless.lambda]] para automações

### Caos

- Ex: _Netflix_ possui um exercito de "macacos" para derrubar maquinas EC2 em produção de maneira randômica

## Relacionado

- [[daily.journal.2025.06.24]]
