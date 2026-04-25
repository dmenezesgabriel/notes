---
id: v051cpikxq03296oxqee447
title: Cloud Watch Alarms
desc: ""
updated: 1751739882855
created: 1748280282878
---

## Features

- Alarmes compostos com condições _AND_ e _OR_
- Podem ser criados baseados em uma Métrica do CloudWatch
- Alarmes podem disparar ações para por exemplo reiniciar uma instancia EC2 [[swe.cloud.aws.services.ec2]]

## CloudWatch Alarm Action

- EC2 Reboot
- ...

## Status de um alarme

- `OK`
- `INSUFFICIENT_DATA`
- `ALARM`

## Alarm targets

- _Stop_, _Terminate_, _Reboot_ ou _Recover_ Instância EC2
- Acionar _auto-scaling_

## Relacionado

- [[swe.cloud.aws.services.monitoring-audit.cloud-watch]]
