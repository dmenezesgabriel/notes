---
id: cil5jwer4esirnradcsxvp9
title: Asg
desc: ""
updated: 1753024800404
created: 1746386101026
---

**Métricas para autoscaling**:

- ECS Service Average CPU Utilization
- ECS Service Average Memory Utilization (Memória RAM)
- ALB Request Count Per Target

## Tipos

- Predictive Scaling: Utiliza Machine Learning para analisar histórico e prever utilização, deve ser combinado com `Target Tracking` ou `Step Scaling`
- Target Tracking: Escala baseado em métrica especifica do `CloudWatch`
- Step Scaling: Escala baseado em alarme especifico do `CloudWatch`
- Scheduled Scaling: Escala baseado em data e hora (mudanças previsíveis)
