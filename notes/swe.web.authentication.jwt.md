---
id: mbd6uocxi75xwqiv1dhsdya
title: JWT
desc: ""
updated: 1751731995126
created: 1732738460921
---

## JWT

Json Web Token

- Token único
- Nao modificável
- Stateless

```sh
Authentication: Barer {JWT}
```

Um token jwt possui o seguinte formato: `header.payload.sign`

**Header**:

```json
{
  "alg": "algoritmo",
  "typ": "JWT"
}
```

**Payload**:

```json
{
  "sub": "subject (id do usuário)"
  // ...
}
```

## Como funciona?

```mermaid
graph TD
    User[Usuário] -->|1 Envia credenciais email e senha| AuthServer[Servidor de Autenticação]
    AuthServer -->|2 Valida credenciais| Database[(Banco de Dados)]
    Database -->|3 Resposta: credenciais válidas| AuthServer
    AuthServer -->|4 Retorna JWT| User
    User -->|5 Envia JWT em requisição| API[Servidor de API]
    API -->|6 Valida JWT| AuthServer
    API -->|7 Acesso autorizado| ProtectedResource[Recurso Protegido]
    API -->|8 Acesso negado| Error[Erro: Não autorizado]

    %% Node Styles (Entities)
    style User fill:#282a36,stroke:#50fa7b,stroke-width:4px,color:#f8f8f2
    style AuthServer fill:#282a36,stroke:#50fa7b,stroke-width:4px,color:#f8f8f2
    style Database fill:#282a36,stroke:#50fa7b,stroke-width:4px,color:#f8f8f2
    style API fill:#282a36,stroke:#50fa7b,stroke-width:4px,color:#f8f8f2
    style ProtectedResource fill:#282a36,stroke:#50fa7b,stroke-width:4px,color:#f8f8f2
    style Error fill:#282a36,stroke:#50fa7b,stroke-width:4px,color:#f8f8f2

    %% Link Styles (Actions)
    linkStyle 0,1,2,3,4,5,6,7 stroke:#bd93f9,stroke-width:2px,stroke-dasharray: 5,5

```

## Recursos

- [JWT.io](https://jwt.io/)
