---
id: pib2b7yntsc0fmv2rj3dku6
title: Osquery
desc: ""
updated: 1759693353611
created: 1759692207843
---

[osquery](https://osquery.io/)

- **Modo interativo**:

```sh
osqueryi
```

Network processess

```sql
SELECT DISTINCT p.name, l.port, l.address, p.pid FROM processes p JOIN listening_ports l ON p.pid = l.pid;
```

Startup processes

```sql
SELECT source, name, path FROM startup_items;
```

Deleted running processes

```sql
SELECT name, path, pid FROM processes WHERE on_disk = 0;
```
