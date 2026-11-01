# Research: 27pokke Portfolio Site

## Decision 1: Publish static files from the `main` branch root

**Decision**: Keep `index.html` and its local assets in the repository root and configure GitHub
Pages to publish from `main` / `(root)`.

**Rationale**: GitHub documents branch-root publishing as the recommended option when no custom
build process is needed. This repository is already named `27pokke.github.io`, making the canonical
user-site URL `https://27pokke.github.io/`.

**Alternatives considered**:

- A custom GitHub Actions deployment adds configuration without improving this buildless site.
- A generated `dist/` or `docs/` directory duplicates reviewed source and creates drift risk.
- A framework build adds dependencies and weakens the static-first, resilient baseline.

## Decision 2: Use semantic HTML as the complete experience

**Decision**: Put all profile, project, navigation, and contact content in `index.html`; use
JavaScript only for active-navigation and reveal enhancements.

**Rationale**: The constitution requires all primary content and links to survive script failure.
Semantic landmarks and native anchors also provide the strongest keyboard and assistive-technology
baseline with the least code.

**Alternatives considered**:

- Rendering project cards from JavaScript would centralize data but hide core work when scripts fail.
- A client framework would increase bundle size and introduce a loading/runtime failure mode.

## Decision 3: Use an editorial, code-adjacent visual system

**Decision**: Combine warm paper tones, near-black ink, a vivid vermilion accent, oversized Japanese
display type, numbered sections, fine rules, and restrained grid geometry. Use system sans and mono
fonts with no remote font request.

**Rationale**: This direction feels personal and developer-oriented without becoming a generic dark
dashboard. System fonts preserve performance and Japanese glyph coverage.

**Alternatives considered**:

- A photographic hero lacks supplied original imagery and would add an external dependency.
- A terminal-only theme would narrow the personality and reduce long-form readability.
- A card-heavy SaaS aesthetic would not fit a personal editorial portfolio.

## Decision 4: Validate contracts without third-party packages

**Decision**: Use Node's built-in test runner to verify semantic landmarks, required facts, unique
anchors, safe external links, local assets, and CSS accessibility rules. Pair this with an HTTP smoke
test and manual viewport/keyboard checks.

**Rationale**: Static contract tests catch the highest-risk regressions while keeping setup and
deployment dependency-free.

**Alternatives considered**:

- A browser automation dependency is disproportionate for one static page and would add installation
  risk.
- Manual-only testing would make link and landmark regressions too easy to miss.

## Decision 5: Disable Jekyll transformation explicitly

**Decision**: Add an empty `.nojekyll` file at the publishing root.

**Rationale**: GitHub documents `.nojekyll` for serving static site output without Jekyll processing.
It also makes the intended no-build publishing model explicit.

**Alternatives considered**:

- Relying on default Jekyll handling works for many files but introduces an unnecessary transformation
  layer and special filename rules.
