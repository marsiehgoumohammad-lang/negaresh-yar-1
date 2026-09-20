# Negaresh Yar — Gemini Change Protection Rules

## CRITICAL: PROTECTED EXISTING CHANGES

Before making ANY change:

1. Run:
   - `git status --short`
   - `git diff --stat`
   - `git diff --name-status`

2. Treat every existing working-tree modification as PROTECTED.
3. Never revert, overwrite, reformat, rename, delete, or regenerate an existing modified file unless that exact file is explicitly authorized in the current task.
4. Do not use broad refactoring, formatting, automated codemods, or full-file regeneration when a narrow edit is sufficient.
5. Preserve unrelated changes exactly.

## GOOGLE SEARCH WINNERS

Pages that currently perform successfully in Google Search are protected.

Before changing any SEO, content, metadata, H1, title, internal links, CTA, schema, or architecture:

1. Check the latest Google Search Console data for `sc-domain:negaresh-yar.ir`.
2. Identify pages with meaningful clicks, impressions, or strong rankings.
3. Treat those pages as WINNERS.
4. Do not modify a Winner without explicit user authorization.
5. Standardizing a cluster is NOT permission to rewrite a Winner page.
6. If a proposed architecture change would require changing a Winner, stop and report the exact page, current performance, proposed change, reason, expected impact, and risk.

Wait for explicit approval before modifying that Winner.

## CURRENT ENFORCEMENT WINNERS

The following Enforcement pages are protected unless the user explicitly authorizes their modification:

- `/samples/third-party-objection-to-execution`
- `/samples/judgment-enforcement-grace-period`
- `/samples/property-attachment-lifting-request`

Their search intent must not be broadened, diluted, merged, canonicalized, renamed, or structurally rewritten merely to achieve cluster standardization.

## P0 FILES

Never modify these without explicit authorization:

- `src/lib/calculators/legal-formulas.ts`
- `src/components/calculators/DebtDelayCalculatorClient.tsx`
- `src/components/calculators/DiyaCalculatorClient.tsx`
- `src/app/api/samples/download/route.ts`
- `src/components/samples/SampleLandingPageTemplate.tsx`

## CHANGE SCOPE

For every task:

1. Inspect before editing.
2. Identify the minimum required files.
3. Modify only those files.
4. Preserve URLs, slugs, canonical logic, sitemap, navigation, schema, calculators, and download behavior unless explicitly authorized.
5. Run validation after editing.
6. Review the final diff.
7. Never commit or push unless the user explicitly authorizes it.

## SEO CLUSTER RULE

Cluster standardization must improve architecture without changing the established search intent of successful pages.

A new pillar, service, or knowledge article should normally link to existing relevant samples rather than rewriting those samples.

Do not use a new pillar as a reason to broaden the intent of an existing high-performing sample.

## HUMAN CONTENT

All new or edited Persian content must:

- read naturally and human-written
- avoid robotic or repetitive wording
- avoid keyword stuffing
- avoid artificial SEO padding
- contain no Persian ZWNJ / half-space
- preserve legal precision

## LEGAL CONTENT

Never invent:

- laws
- articles
- deadlines
- authorities
- procedures
- remedies
- guarantees

Distinguish clearly between:

- administrative request
- administrative objection/appeal
- judicial lawsuit/petition

Use authoritative Iranian legal sources for material legal claims.

## WORKFLOW

Required order:

GSC evidence → inspect current code → identify protected pages/files → make the smallest authorized change → validate → review diff → report.

Never skip the protected-page check.
