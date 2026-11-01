# 27pokke Portfolio Constitution

## Core Principles

### I. Content Integrity
Every personal claim, project description, location, and external link MUST be grounded in
information supplied by the owner or available in the owner's public GitHub profile and
repositories. The site MUST NOT invent employers, clients, testimonials, metrics, or skills.
Draft-oriented work MAY be described as exploration, but it MUST NOT be presented as a shipped
product.

### II. Accessible by Default
All primary content and navigation MUST work with keyboard input, visible focus states, semantic
headings, sufficient color contrast, and reduced-motion preferences. The reading order MUST remain
clear without animation or JavaScript. Layouts MUST remain usable on narrow mobile screens and
wide desktop screens.

### III. Fast and Resilient
The first page MUST communicate the owner's role, location, and primary next action without a
loading gate. Core content MUST remain available when optional scripts fail. Assets MUST be kept
purposeful and lightweight so the published page loads quickly on ordinary mobile connections.

### IV. Maintainable Content
Profile facts, project entries, labels, and links MUST have one clear authoritative location in the
source. Repeated content SHOULD be generated from shared data or CSS patterns instead of copied
across markup. A future maintainer MUST be able to add or update a project without redesigning the
page.

### V. Static-First Delivery
The public portfolio MUST build as a self-contained static site compatible with the repository's
GitHub Pages root. The site MUST use relative or root-safe local asset references, avoid runtime
secrets, and require no server-side state. Enhancements MAY use browser APIs only when the baseline
experience remains complete without them.

## Product Constraints

- The first release is a single-page Japanese portfolio for ぽっけ / 27pokke.
- Public GitHub information is the source of truth for profile and project facts.
- The page MUST provide clear routes to the GitHub profile and X account.
- The visual language SHOULD feel editorial and personal, not like a generic dashboard or template.
- GitHub Pages is the canonical public deployment target for this repository.

## Development Workflow

1. A feature specification MUST define user scenarios and measurable acceptance criteria before
   implementation begins.
2. The implementation plan MUST document static-hosting, accessibility, and responsive-design
   decisions and MUST pass this constitution's gates.
3. Tasks MUST be independently verifiable and reference the files they change.
4. Before publication, checks MUST cover document structure, local links, responsive layout,
   keyboard behavior, reduced motion, and the production URL.
5. Deployment MUST publish only reviewed source from the default branch and MUST leave the
   repository in a reproducible state.

## Governance

This constitution supersedes informal project conventions. Amendments require a documented reason,
a semantic version change, and a review of affected specifications, plans, tasks, and implementation.
MAJOR versions remove or redefine a principle, MINOR versions add or materially expand governance,
and PATCH versions clarify wording without changing obligations. Every feature plan and final review
MUST record whether the work complies; any exception MUST be explicit, time-bounded, and accompanied
by a remediation task.

**Version**: 1.0.0 | **Ratified**: 2026-11-01 | **Last Amended**: 2026-11-01
