---
id: k4miw3noq9wjonmrdceyczh
title: Docker
desc: ''
updated: 1777661144851
created: 1777661144851
---

- Host com _n_ containers
- Cada container possui seu próprio escopo com relação a aplicação e recursos
- Namespaces: isolamento de recursos (PID, rede, etc.)
- Cgroups: controle de recursos (CPU, memória, etc.)

## Cgroups

 Controle e limitação de recursos de um grupo de processos que fica no kernel do Linux. Sua responsabilidade é garantir que um container não monopolize os recursos do host, garantindo que outros containers possam funcionar normalmente.

## Namespaces

Isolamento de recursos do sistema operacional, como processos, rede, arquivos, etc. Cada container tem seu próprio namespace, o que significa que os processos dentro de um container não podem ver ou interagir com os processos de outros containers ou do host.

## Unshare

Visa criar um novo namespace para um processo já existente, permitindo que ele seja isolado do restante do sistema.

- Caso você não esteja trabalhando com docker, o _Unshare_ permite fazer a criação de namespaces manualmente