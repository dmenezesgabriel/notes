---
id: picd5j99ltrtipp0dt2iu61
title: E2e
desc: ""
updated: 1732989647147
created: 1732979737523
---

- Testes E2E devem testar o comportamento da Rota ao Banco de dados, sem mocks;
- Testes E2E nao devem ter interferência de outros testes que rodaram anteriormente;
- Testes E2E devem ocorrer de forma isolada;
- Testes E2E devem testar apenas o caminho feliz (sucesso) de um fluxo de ponta a ponta, um dos motivos e que os testes unitários ja deveriam ter testado os comportamentos de falha e testes E2E sao mais pesados;
