---
id: k83y9z9om0xqazysew826m8
title: Iam
desc: ""
updated: 1749211017372
created: 1748359292419
---

## Features

- Identity Center (AWS Single Sign-On)

## Roles & policies

- Quando uma role é assumida as permissões inciais são desconsideradas e o que vale é a permissão da role

### Permission Boundary

- Policies em um nível hierárquico mais alto que estabelecem limites para demais policies que podem ser atribuídas posteriormente

### Policy

#### Resource

```json
...
{
  ...,
  "Resource": "arn:aws:s3:::test" // Bucket level permission
},
...
{
  ...,
  "Resource": "arn:aws:s3:::test/*" // Object Level permission
}
```

## Relacionado

- [[swe.cloud.aws.services.iam.directory-services]]

#SWE #Cloud #AWS #AWSServices #AWSIAM
