---
title: Zettelkasten
desc: "Adopting a Zettelkasten workflow within this Dendron vault"
---

This page describes how to follow a Zettelkasten (zettel box / slip-box) approach inside the existing Dendron notes vault.

Principles
- Atomicity: each permanent note should capture one idea/concept in a concise, self-contained manner.
- Unique ID: each permanent (evergreen) note has a zettelId (frontmatter) that uniquely identifies it.
- Linking: notes are connected with explicit links (bi-directional when useful) and references to sources.
- Three note types:
  - fleeting: quick captures, short-lived (pageType: fleeting)
  - literature: summaries of sources (pageType: literature; include sources: path or URL)
  - permanent: evergreen, atomic notes (pageType: permanent; include zettelId)

Frontmatter conventions for Zettelkasten
- zettelId: ZK-YYYYMMDDHHMMSS-XXX (unique identifier)
- pageType: fleeting | literature | permanent
- sources: list of source file paths or URLs
- tags: optional list of tags

Scripts
- scripts/add-zettel-ids.py  : dry-run candidate selection for permanent notes; use --apply to write zettelId and set pageType
- scripts/convert-to-zettel.py : (optional) convert specific notes by explicit list or glob (not included by default)

Workflow suggestion
1. Capture source -> create a literature note (pageType: literature) with sources field.
2. Process literature notes into atomic permanent notes (pageType: permanent + zettelId). Link permanent notes to related notes.
3. Use domain/index pages for navigation, but prefer zettel links inside permanent notes.

Notes
- This repository keeps Dendron's hierarchical names for discoverability and site publishing, while adding Zettel metadata to make the notes behave like a Zettelkasten.
- We do not automatically convert all notes to zettels. Use scripts to convert selected notes when ready.
