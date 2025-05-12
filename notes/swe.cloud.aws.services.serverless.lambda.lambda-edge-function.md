---
id: mtzc6oomxzviakhuce4zxur
title: Lambda Edge Function
desc: ""
updated: 1747083912744
created: 1747083912744
---

- Código atrelado a uma distribuição CloudFront
- Executa proximo ao usuários e diminui a latência
- CloudFront Functions & Lambda@Edge
- serverless
- global

## Casos de uso

- Customizar conteúdo CDN
- Segurança e privacidade
- SEO
- Transformação de imagem em tempo real
- Autenticação e autorização
- Rastreamento de usuário e analytics

## CloudFront Functions

- Escritas em JavaScript
- Para customizações de CDN de alta escala e baixa latência
- Milhões de requisições por segundo
- Viewer request/Viewer response
- funcionalidade nativa Cloud Front

### Casos de uso

- Normalização de chave de cache
- Manipulação (Inserir, Modificar, Deletar) de Header HTTP
- Redirecionamento de URL
- Autorização e autenticação

## Lambda@Edge

- Escritas em NodeJs ou Python
- Utilizadas para mudar requisições e respostas do CloudFront
- Viewer request/Viewer response
- Depende do SDK da AWS para acesso a outros recursos
- Acesso ao body de requisições HTTP

[[swe.cloud.aws.services.serverless.lambda]]

#SWE #Cloud #AWS #AWSServices #Serverless #AmazonLambda
