LLM Wiki - Schema & Guardrails (compact)

This file describes the conventions and workflows the LLM agent should follow when ingesting sources, updating the wiki, and answering queries. Keep it short and prescriptive.

Frontmatter conventions (YAML)
- title: Human-friendly title
- aliases: list of alternative short titles (optional)
- desc: short description/synopsis
- tags: list of tags (optional)
- sources: list of source ids/paths used to build this page (optional)
- lastUpdated: ISO timestamp
- pageType: one of [entity, concept, index, note, log]
- status: draft | verified | flagged
- zettelId: optional unique id (when pageType: permanent) — format ZK-YYYYMMDDHHMMSS-XXX

Zettelkasten (recommended additions)
- pageType: extend values to include [fleeting, literature, permanent]
- zettelId: unique Zettelkasten id for evergreen notes (e.g. ZK-20260425183000-001)
- Use pageType: literature for source summaries and include a `sources:` list in frontmatter.
- Use pageType: permanent for atomic evergreen notes; include zettelId and link to related notes explicitly.
- Keep fleeting notes short and ephemeral; review them and convert to literature/permanent as needed.

File types
- index.md (domain-level): catalog of pages for a domain. Updated on each ingest.
- log.md: append-only chronological log of ingest/query/lint actions.
- entity pages: pages that represent things (people, services, products) and aggregate references.
- concept pages: explainers, comparisons, definitions.

Ingest workflow (prescriptive)
1. Read full source S.
2. Generate a 1-paragraph summary and a list of named entities/concepts mentioned.
3. For each relevant entity/concept:
   - If page exists: update page, append a one-line note to sources and add changed date.
   - If not: create a stub page with frontmatter, a short summary, and links back to the source.
4. Update domain index.md to include/refresh links to changed pages.
5. Append an entry to log.md: e.g. "## [2026-04-24] ingest | <source title> — created 3 pages, updated 5 pages"
6. Flag contradictions: if new source conflicts with previous claims, add a "Conflicts" section to affected pages and add a short explanation + source pointers.

Query workflow
- Search index.md first to shortlist pages.
- Use search (qmd lex+vec) to retrieve candidate pages and snippets.
- Synthesize answer with explicit citations (page path + short excerpt).
- When the answer is substantial, offer to file it as a new wiki page ("Would you like me to save this answer as a page?"). If yes, create page with frontmatter listing contributing sources.

Lint workflow (periodic or on-demand)
- Detect orphan pages (no incoming links) and propose parent pages or index placement.
- Detect duplicate titles and propose aliases or disambiguated titles.
- Detect missing cross-references for frequent terms without pages.
- Detect contradictions across pages and open a "conflicts" ticket in log.md.

Safety & hallucination guardrails (must-haves)
- Never assert factual claims without a source; prefer phrasing "According to [source], ..." for things not corroborated by >=2 sources.
- When unsure, add "needs verification" to page status and add the investigative query to the log.
- Keep the human in-the-loop for destructive edits: major renames, merges, or deletions require explicit human confirmation.

Operational notes
- Use qmd for fast semantic+lexical retrieval and reranking. Keep qmd collection in sync with the notes folder.
- Index.md and log.md are the main control surfaces for the agent.
- Keep a short list of canonical tag pages (notes/tags.<Tag>.md) for widely used tags.

Example log entry format
## [2026-04-24] ingest | Article Title
- created: data-science/topic-x
- updated: data-science/concept-y
- notes: flagged contradiction between concept-y and concept-z (see links)

