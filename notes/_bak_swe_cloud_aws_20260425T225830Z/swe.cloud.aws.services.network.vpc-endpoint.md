---
id: 993d8jxovs8o0umkxfjbne8
title: Vpc Endpoint
desc: ""
updated: 1750013485335
created: 1750013485335
---

# VPC Endpoints

## Casos de Uso

- Conectar a serviços da AWS como _DynamoDB_ [[swe.cloud.aws.services.serverless.dynamodb]], S3 [[swe.cloud.aws.services.s3]], CloudWatch [[swe.cloud.aws.services.monitoring-audit.cloud-watch]] sem que o trafego passe pela internet publica. Quando apenas com um NAT Gateway [[swe.cloud.aws.services.network.nat-gateway]] para que o trafego chegue a estes serviços gerenciados pela AWS terá que passar pela internet publica.

## Tipos

### Interface Endpoints

- Utilizam _AWS Private Link_
- Provisiona um ENI (Endereço de IP privado) como entrada e é necessário atrelar a um security group [[swe.cloud.aws.services.ec2.ec2-security-groups]]
- Custos por hora e GB processado

### Gateway Endpoints

- Provisiona um gateway com registro em uma _Route Table_ (Não utiliza security groups)
- Suporta apenas _S3_ e _DynamoDB_
- Sem custo
- Mais simples
- Apenas opta-se pelo [Interface Endpoint](#interface-endpoints) no caso de acesso on-premises (Ex: Direct Connect), comunicação com outra VPC ou outra região

## Relacionado

- [[daily.journal.2025.06.15]]
- [[swe.cloud.aws.services.network.vpc]]

#SWE #Cloud #AWS #AWSServices #Network #AmazonVPC
