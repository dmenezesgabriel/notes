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

