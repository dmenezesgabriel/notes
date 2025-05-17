---
id: 96nxapprmx2663ism6doac6
title: API Gateway Security
desc: ""
updated: 1747494596958
created: 1747494173817
---

## Autenticação de usuário

- Roles IAM (Para aplicações internas)
- Cognito (Identidade para usuários externos Ex: Mobile)
- Custom Authorizer (Lambda authorizer)

## Nome de domínio customizado com HTTPS

- Integração via AWS Certificate Manager (ACM)
- Se utilizando endpoint Edge-Optimized, o certificado precisa estar em `us-east-1`
- Se utilizando um endpoint Regional, o certificado deve estar na região do api gateway
- É mecessario configurar um CNAME ou A-alias record no Route 53

## Relacionado

- [[swe.cloud.aws.services.serverless.api-gateway]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonAPIGateway
