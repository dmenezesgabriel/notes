import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();

const requiredVocabulary = [
  'Atomic Design',
  'Atom',
  'Molecule',
  'Organism',
  'Template',
  'Page',
  'Component Promotion Boundary',
  'Token Source of Truth',
  'React-Lit Adapter',
  'Migration Matrix',
];

const allowedAtomicLevels = new Set(['Atom', 'Molecule', 'Organism', 'Template', 'Page']);

const siteCompositionRows = [
  ['RootLayout', 'apps/site/app/layout.tsx'],
  ['SiteNav', 'apps/site/app/components/site-nav.tsx'],
  ['SiteSearch', 'apps/site/app/components/site-search.tsx'],
  ['SiteBreadcrumb', 'apps/site/app/components/site-breadcrumb.tsx'],
  ['SiteToc', 'apps/site/app/components/site-toc.tsx'],
  ['HomePage', 'apps/site/app/page.tsx'],
  ['HomePageContent', 'apps/site/app/components/home-page-content.tsx'],
  ['NotePage', 'apps/site/app/[...slug]/page.tsx'],
  ['ErrorPage', 'apps/site/app/error.tsx'],
  ['NotFound', 'apps/site/app/not-found.tsx'],
];

const downstreamIssueAdrDependencies = {
  'issues/004-consolidate-design-tokens-and-atoms.md': [
    'docs/adrs/001-atomic-component-promotion-boundary.md',
    'docs/adrs/002-design-token-source-of-truth.md',
  ],
  'issues/005-migrate-note-template-and-page-slice.md': [
    'docs/adrs/001-atomic-component-promotion-boundary.md',
    'docs/adrs/003-react-lit-interop-boundary.md',
  ],
  'issues/006-migrate-home-discovery-slice.md': [
    'docs/adrs/001-atomic-component-promotion-boundary.md',
    'docs/adrs/003-react-lit-interop-boundary.md',
  ],
  'issues/007-standardize-react-lit-interop-and-nav.md': [
    'docs/adrs/002-design-token-source-of-truth.md',
    'docs/adrs/003-react-lit-interop-boundary.md',
  ],
  'issues/008-document-governance-and-deprecations.md': [
    'docs/adrs/001-atomic-component-promotion-boundary.md',
    'docs/adrs/002-design-token-source-of-truth.md',
    'docs/adrs/003-react-lit-interop-boundary.md',
  ],
};

function readProjectFile(relativePath) {
  const absolutePath = resolve(root, relativePath);
  if (!existsSync(absolutePath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }

  return readFileSync(absolutePath, 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function extractSharedExports(indexSource) {
  return Array.from(indexSource.matchAll(/export \* from '\.\/([^']+)'/g), (match) => match[1]);
}

function extractTableRows(matrixSource) {
  return matrixSource
    .split('\n')
    .filter((line) => line.startsWith('| `'))
    .map((line) =>
      line
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim()),
    );
}

function validateVocabulary(contextSource) {
  for (const term of requiredVocabulary) {
    assert(
      contextSource.includes(`### ${term}`),
      `CONTEXT.md is missing required vocabulary term: ${term}`,
    );
  }
}

function validateMatrixCoverage(matrixSource, sharedExports) {
  const rows = extractTableRows(matrixSource);
  const rowByArtifact = new Map(rows.map((row) => [row[0], row]));

  for (const slug of sharedExports) {
    const artifactName = `\`${slug}\``;
    const row = rowByArtifact.get(artifactName);
    assert(row, `Migration matrix is missing shared export row for ${slug}`);
    assert(
      row[1] === `\`packages/components/src/${slug}/\``,
      `Migration matrix path mismatch for shared export ${slug}`,
    );
    assert(
      allowedAtomicLevels.has(row[2]),
      `Migration matrix uses undefined atomic level "${row[2]}" for shared export ${slug}`,
    );
  }

  for (const [artifact, path] of siteCompositionRows) {
    const artifactName = `\`${artifact}\``;
    const row = rowByArtifact.get(artifactName);
    assert(row, `Migration matrix is missing site composition row for ${artifact}`);
    assert(
      row[1] === `\`${path}\``,
      `Migration matrix path mismatch for site composition ${artifact}`,
    );
    assert(
      allowedAtomicLevels.has(row[2]),
      `Migration matrix uses undefined atomic level "${row[2]}" for site composition ${artifact}`,
    );
  }
}

function validateAdrDependencies() {
  for (const [issuePath, adrPaths] of Object.entries(downstreamIssueAdrDependencies)) {
    const issueSource = readProjectFile(issuePath);
    for (const adrPath of adrPaths) {
      const dependencyLine = `Depends on ADR \`${adrPath}\`.`;
      assert(
        issueSource.includes(dependencyLine),
        `${issuePath} is missing explicit ADR dependency: ${adrPath}`,
      );
    }
  }
}

function main() {
  const contextSource = readProjectFile('CONTEXT.md');
  const matrixSource = readProjectFile('docs/atomic-design-migration-matrix.md');
  const indexSource = readProjectFile('packages/components/src/index.ts');

  readProjectFile('docs/adrs/001-atomic-component-promotion-boundary.md');
  readProjectFile('docs/adrs/002-design-token-source-of-truth.md');
  readProjectFile('docs/adrs/003-react-lit-interop-boundary.md');

  validateVocabulary(contextSource);
  validateMatrixCoverage(matrixSource, extractSharedExports(indexSource));
  validateAdrDependencies();

  console.log('Atomic design boundary planning artifacts are internally consistent.');
  console.log(`Validated ${requiredVocabulary.length} vocabulary terms in CONTEXT.md.`);
  console.log(
    `Validated ${extractSharedExports(indexSource).length} shared exports and ${siteCompositionRows.length} site compositions in the migration matrix.`,
  );
  console.log(
    `Validated explicit ADR dependencies across ${Object.keys(downstreamIssueAdrDependencies).length} downstream issue files.`,
  );
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}
