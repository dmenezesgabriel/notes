---
title: Log
desc: "Chronological log of ingest and maintenance actions"
---

## [2026-04-24] qmd embed | Local embeddings
- action: Ran `qmd embed` locally for collection `notes`
- result: embedded 483 chunks from 442 documents
- model: hf:ggml-org/embeddinggemma-300M-GGUF
- notes: created tag pages and several domain index stubs; fixed preprocessing namespace; added aliases for duplicate titles; ran lint (qmd-lint-report.json)

## [2026-04-24] housekeeping | initial automated fixes
- added: notes/tags.* pages for high-use tags
- added: notes/swe.md and notes/data-science.md (domain indexes)
- added: notes/swe.cloud.aws.services.ec2.md, notes/swe.cloud.aws.services.elb.md, notes/swe.cloud.aws.services.ssm.md, notes/swe.cloud.aws.services.vpc.md (AWS parent stubs)
- normalized: data-preprocessing -> data-pre-processing
- added: aliases to disambiguate duplicate titles (tools, clustering, api gateway)

## [2026-04-25] conflicts | automated detection
- detected_contradictions: 0
- orphans_count: 82 (see reports/detect_issues_v2.json)
- duplicate_titles_count: 0 (duplicates resolved or aliased)
- freq_term_candidates: suggested concept/tag pages to consider creating (top 12):
  - cloud (197) — suggested domain: daily.journal.2025.05.03.md
  - relacionado (121) — suggested domain: swe.cloud.aws.concepts.disaster-recovery.md
  - awsservices (98) — suggested domain: swe.cloud.aws.services.machine-learning.comprehend-medical.md
  - dados (83) — suggested domain: data-engineer.concepts.data-mesh.md
  - features (72) — suggested domain: data-science.machine-learning.ensemble-method.random-forest.md
  - casos (70) — suggested domain: data-science.machine-learning.concepts.bagging-vs-boosting.md
  - journal (64) — suggested domain: daily.journal.2025.05.03.md
  - amazon (56) — suggested domain: daily.journal.2025.05.03.md
  - machine-learning (47) — suggested domain: daily.journal.2025.05.26.md
  - gateway (27) — suggested domain: daily.journal.2025.05.17.md
  - performance (22) — suggested domain: data-engineer.concepts.nosql.nosql-databases.md
  - modelo (22) — suggested domain: data-engineer.concepts.data-modeling.sql.data-modeling-normalization.md

- notes: I generated a full report at reports/detect_issues_v2.json which contains detailed orphan proposals, duplicate-title suggestions and token candidates. Recommended next steps:
  1. Review the orphan proposals and either: add links to the suggested domain index pages, create the suggested sub-index, or archive the note.
  2. Review the frequency-term candidates and create concept or tag pages for high-priority terms (I can create stubs for the top N if you want).
  3. If you want deeper contradiction analysis, pick a set of high-priority entities (e.g., VPC, S3, Lambda, DynamoDB) and I will run an LLM-based comparison across associated pages.

## [2026-04-25] housekeeping | ingest | notes/books.dev.md
- created: notes.books.pragmatic-programmer, notes.books.philosophy-of-software-design, notes.books.design-of-design, notes.books.domain-driven-design, notes.books.14-habitos-desenvolvedores-altamente-produtivos, notes.books.fundamentos-arquitetura-de-software, notes.books.software-architecture-hard-parts, notes.books.building-microservices, notes.books.system-design-interview, notes.books.chaos-engineering, notes.books.how-to-win-friends-and-influence-people
- updated: notes/notes.md (added books index)
- notes: flagged potential author-attribution issue on notes.books.domain-driven-design (source lists Vlad Khononov and also Eric Evans); status set to flagged/needs verification; created per-book stubs with sources pointing to notes/books.dev.md

## [2026-04-25] lint | swe.cloud.aws

- created: swe.cloud.aws.index
- created: swe.cloud.aws.mapping
- notes: scanned 204 files; stubs: 12; long files: 2
- stubs:
  - notes/swe.cloud.aws.how-to.solutions-architectures.md
  - notes/swe.cloud.aws.regions.choosing-regions.md
  - notes/swe.cloud.aws.services.asg.ecs-vs-ec2.md
  - notes/swe.cloud.aws.services.ec2.ec2-ami.md
  - notes/swe.cloud.aws.services.ec2.ec2-elastic-network-interface.md
  - notes/swe.cloud.aws.services.ec2.ec2-golden-ami.md
  - notes/swe.cloud.aws.services.ec2.ec2-instance-connect.md
  - notes/swe.cloud.aws.services.ec2.ec2-ssh.md
  - notes/swe.cloud.aws.services.elb.alb-sni.md
  - notes/swe.cloud.aws.services.messaging.sns.md
  - notes/swe.cloud.aws.services.s3.s3-object-lambda.md
  - notes/swe.cloud.aws.services.vpc.md
- long files:
  - notes/swe.cloud.aws.concepts.disaster-recovery.md
  - notes/swe.cloud.aws.services.network.vpc.md

- next steps: review mapping file notes/swe.cloud.aws.mapping and approve renames/splits. All changes are non-destructive.


## [2026-04-25] housekeeping | swe.cloud.aws bulk updates

- action: Added pageType, lastUpdated and status: draft to 204 swe.cloud.aws files
- action: Renamed 78 files
- renames:
  - swe.cloud.aws.services.data-analytics.athena.athena-federated-query.md -> swe.cloud.aws.services.data-analytics.athena.federated-query.md
  - swe.cloud.aws.services.data-analytics.athena.athena-performance.md -> swe.cloud.aws.services.data-analytics.athena.performance.md
  - swe.cloud.aws.services.data-analytics.glue.glue-data-catalog.md -> swe.cloud.aws.services.data-analytics.glue.data-catalog.md
  - swe.cloud.aws.services.data-analytics.glue.glue-databrew.md -> swe.cloud.aws.services.data-analytics.glue.databrew.md
  - swe.cloud.aws.services.data-analytics.glue.glue-patterns.md -> swe.cloud.aws.services.data-analytics.glue.patterns.md
  - swe.cloud.aws.services.data-analytics.open-search.open-search-patterns.md -> swe.cloud.aws.services.data-analytics.open-search.patterns.md
  - swe.cloud.aws.services.data-analytics.redshift.redshift-data-ingestion.md -> swe.cloud.aws.services.data-analytics.redshift.data-ingestion.md
  - swe.cloud.aws.services.data-analytics.redshift.redshift-disaster-recovery.md -> swe.cloud.aws.services.data-analytics.redshift.disaster-recovery.md
  - swe.cloud.aws.services.data-analytics.redshift.redshift-spectrum.md -> swe.cloud.aws.services.data-analytics.redshift.spectrum.md
  - swe.cloud.aws.services.ec2.ec2-ami.md -> swe.cloud.aws.services.ec2.ami.md
  - swe.cloud.aws.services.ec2.ec2-ebs.md -> swe.cloud.aws.services.ec2.ebs.md
  - swe.cloud.aws.services.ec2.ec2-efs.md -> swe.cloud.aws.services.ec2.efs.md
  - swe.cloud.aws.services.ec2.ec2-elastic-network-interface.md -> swe.cloud.aws.services.ec2.elastic-network-interface.md
  - swe.cloud.aws.services.ec2.ec2-golden-ami.md -> swe.cloud.aws.services.ec2.golden-ami.md
  - swe.cloud.aws.services.ec2.ec2-instance-connect.md -> swe.cloud.aws.services.ec2.instance-connect.md
  - swe.cloud.aws.services.ec2.ec2-instance-purchase-options.md -> swe.cloud.aws.services.ec2.instance-purchase-options.md
  - swe.cloud.aws.services.ec2.ec2-instance-store.md -> swe.cloud.aws.services.ec2.instance-store.md
  - swe.cloud.aws.services.ec2.ec2-instances.md -> swe.cloud.aws.services.ec2.instances.md
  - swe.cloud.aws.services.ec2.ec2-placement-groups.md -> swe.cloud.aws.services.ec2.placement-groups.md
  - swe.cloud.aws.services.ec2.ec2-security-groups.md -> swe.cloud.aws.services.ec2.security-groups.md
  - swe.cloud.aws.services.ec2.ec2-ssh.md -> swe.cloud.aws.services.ec2.ssh.md
  - swe.cloud.aws.services.elb.elb-connection-draining.md -> swe.cloud.aws.services.elb.connection-draining.md
  - swe.cloud.aws.services.elb.elb-cross-zone.md -> swe.cloud.aws.services.elb.cross-zone.md
  - swe.cloud.aws.services.elb.elb-sticky-sessions.md -> swe.cloud.aws.services.elb.sticky-sessions.md
  - swe.cloud.aws.services.messaging.sns.sns-fifo.md -> swe.cloud.aws.services.messaging.sns.fifo.md
  - swe.cloud.aws.services.messaging.sns.sns-message-filtering.md -> swe.cloud.aws.services.messaging.sns.message-filtering.md
  - swe.cloud.aws.services.messaging.sns.sns-security.md -> swe.cloud.aws.services.messaging.sns.security.md
  - swe.cloud.aws.services.messaging.sns.sns-sqs-fan-out.md -> swe.cloud.aws.services.messaging.sns.sqs-fan-out.md
  - swe.cloud.aws.services.messaging.sqs.sqs-asg.md -> swe.cloud.aws.services.messaging.sqs.asg.md
  - swe.cloud.aws.services.messaging.sqs.sqs-fifo.md -> swe.cloud.aws.services.messaging.sqs.fifo.md
  - swe.cloud.aws.services.messaging.sqs.sqs-long-pooling.md -> swe.cloud.aws.services.messaging.sqs.long-pooling.md
  - swe.cloud.aws.services.messaging.sqs.sqs-message-visibility-timeout.md -> swe.cloud.aws.services.messaging.sqs.message-visibility-timeout.md
  - swe.cloud.aws.services.messaging.sqs.sqs-security.md -> swe.cloud.aws.services.messaging.sqs.security.md
  - swe.cloud.aws.services.monitoring-audit.cloud-watch.cloud-watch-alarms.md -> swe.cloud.aws.services.monitoring-audit.cloud-watch.alarms.md
  - swe.cloud.aws.services.monitoring-audit.cloud-watch.cloud-watch-insights.md -> swe.cloud.aws.services.monitoring-audit.cloud-watch.insights.md
  - swe.cloud.aws.services.monitoring-audit.cloud-watch.cloud-watch-logs.md -> swe.cloud.aws.services.monitoring-audit.cloud-watch.logs.md
  - swe.cloud.aws.services.monitoring-audit.cloud-watch.cloud-watch-metrics.md -> swe.cloud.aws.services.monitoring-audit.cloud-watch.metrics.md
  - swe.cloud.aws.services.neptune.neptune-streams.md -> swe.cloud.aws.services.neptune.streams.md
  - swe.cloud.aws.services.rds.rds-multi-az.md -> swe.cloud.aws.services.rds.multi-az.md
  - swe.cloud.aws.services.rds.rds-read-replicas.md -> swe.cloud.aws.services.rds.read-replicas.md
  - swe.cloud.aws.services.s3.s3-access-points.md -> swe.cloud.aws.services.s3.access-points.md
  - swe.cloud.aws.services.s3.s3-batch-operations.md -> swe.cloud.aws.services.s3.batch-operations.md
  - swe.cloud.aws.services.s3.s3-cors.md -> swe.cloud.aws.services.s3.cors.md
  - swe.cloud.aws.services.s3.s3-glacier-vault-lock-policy.md -> swe.cloud.aws.services.s3.glacier-vault-lock-policy.md
  - swe.cloud.aws.services.s3.s3-life-cycle.md -> swe.cloud.aws.services.s3.life-cycle.md
  - swe.cloud.aws.services.s3.s3-object-encryption.md -> swe.cloud.aws.services.s3.object-encryption.md
  - swe.cloud.aws.services.s3.s3-object-lambda.md -> swe.cloud.aws.services.s3.object-lambda.md
  - swe.cloud.aws.services.s3.s3-object-lock.md -> swe.cloud.aws.services.s3.object-lock.md
  - swe.cloud.aws.services.s3.s3-performance.md -> swe.cloud.aws.services.s3.performance.md
  - swe.cloud.aws.services.s3.s3-security.md -> swe.cloud.aws.services.s3.security.md
  - swe.cloud.aws.services.s3.s3-static-hosting.md -> swe.cloud.aws.services.s3.static-hosting.md
  - swe.cloud.aws.services.s3.s3-storage-classes.md -> swe.cloud.aws.services.s3.storage-classes.md
  - swe.cloud.aws.services.s3.s3-storage-lens.md -> swe.cloud.aws.services.s3.storage-lens.md
  - swe.cloud.aws.services.s3.s3-versioning.md -> swe.cloud.aws.services.s3.versioning.md
  - swe.cloud.aws.services.security.kms.kms-key-policy.md -> swe.cloud.aws.services.security.kms.key-policy.md
  - swe.cloud.aws.services.security.kms.kms-key-types.md -> swe.cloud.aws.services.security.kms.key-types.md
  - swe.cloud.aws.services.security.kms.kms-keys-multi-region.md -> swe.cloud.aws.services.security.kms.keys-multi-region.md
  - swe.cloud.aws.services.serverless.api-gateway.api-gateway-endpoint-types.md -> swe.cloud.aws.services.serverless.api-gateway.endpoint-types.md
  - swe.cloud.aws.services.serverless.api-gateway.api-gateway-integrations.md -> swe.cloud.aws.services.serverless.api-gateway.integrations.md
  - swe.cloud.aws.services.serverless.api-gateway.api-gateway-security.md -> swe.cloud.aws.services.serverless.api-gateway.security.md
  - swe.cloud.aws.services.serverless.dynamodb.dynamodb-accelerator.md -> swe.cloud.aws.services.serverless.dynamodb.accelerator.md
  - swe.cloud.aws.services.serverless.dynamodb.dynamodb-disaster-recovery.md -> swe.cloud.aws.services.serverless.dynamodb.disaster-recovery.md
  - swe.cloud.aws.services.serverless.dynamodb.dynamodb-global-tables.md -> swe.cloud.aws.services.serverless.dynamodb.global-tables.md
  - swe.cloud.aws.services.serverless.dynamodb.dynamodb-s3-integration.md -> swe.cloud.aws.services.serverless.dynamodb.s3-integration.md
  - swe.cloud.aws.services.serverless.dynamodb.dynamodb-streams.md -> swe.cloud.aws.services.serverless.dynamodb.streams.md
  - swe.cloud.aws.services.serverless.dynamodb.dynamodb-ttl.md -> swe.cloud.aws.services.serverless.dynamodb.ttl.md
  - swe.cloud.aws.services.serverless.lambda.lambda-concurrency.md -> swe.cloud.aws.services.serverless.lambda.concurrency.md
  - swe.cloud.aws.services.serverless.lambda.lambda-edge-function.md -> swe.cloud.aws.services.serverless.lambda.edge-function.md
  - swe.cloud.aws.services.serverless.lambda.lambda-in-vpc.md -> swe.cloud.aws.services.serverless.lambda.in-vpc.md
  - swe.cloud.aws.services.serverless.lambda.lambda-limits.md -> swe.cloud.aws.services.serverless.lambda.limits.md
  - swe.cloud.aws.services.serverless.lambda.lambda-snap-start.md -> swe.cloud.aws.services.serverless.lambda.snap-start.md
  - swe.cloud.aws.services.ssm.ssm-automation.md -> swe.cloud.aws.services.ssm.automation.md
  - swe.cloud.aws.services.ssm.ssm-maintenance-windows.md -> swe.cloud.aws.services.ssm.maintenance-windows.md
  - swe.cloud.aws.services.ssm.ssm-patch-manager.md -> swe.cloud.aws.services.ssm.patch-manager.md
  - swe.cloud.aws.services.ssm.ssm-run-command.md -> swe.cloud.aws.services.ssm.run-command.md
  - swe.cloud.aws.services.ssm.ssm-session-manager.md -> swe.cloud.aws.services.ssm.session-manager.md
  - swe.cloud.aws.services.storage.storage-gateway.md -> swe.cloud.aws.services.storage.gateway.md
  - swe.cloud.aws.services.vpc.vpc-sharing.md -> swe.cloud.aws.services.vpc.sharing.md
- link updates applied to 46 files
- backup: notes/_bak_swe_cloud_aws_20260425T225830Z

- notes: Non-destructive changes applied. Please review and commit if OK.

