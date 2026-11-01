# Implementation Plan: 27pokke Portfolio Site

**Branch**: `main` | **Date**: 2026-11-01 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-portfolio-site/spec.md`

## Summary

Create a single-page Japanese portfolio that introduces ぽっけ / 27pokke, presents verified public
projects, and provides clear GitHub and X links. Deliver it as a dependency-free static site from the
repository root so the same reviewed files are served directly by GitHub Pages. HTML supplies the
complete baseline; CSS provides the editorial visual system and responsive layout; JavaScript adds
only non-essential navigation and reveal enhancements.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: HTML5, CSS Level 3+, ECMAScript 2023

**Primary Dependencies**: None at runtime; system fonts only

**Storage**: N/A; profile and project content is versioned with the page

**Testing**: Node.js built-in test runner for static contract checks; local HTTP smoke test;
manual keyboard, reduced-motion, and responsive checks

**Target Platform**: Modern evergreen browsers; GitHub Pages user site at `https://27pokke.github.io/`

**Project Type**: Static presentation website

**Performance Goals**: Useful content visible within 3 seconds on an ordinary mobile connection;
no render-blocking third-party assets; smooth optional motion at 60 fps where supported

**Constraints**: No build step, runtime secret, server, framework, remote font, or mandatory script;
320px minimum viewport; WCAG-aligned contrast and focus; reduced-motion support

**Scale/Scope**: One route, four narrative sections, four project/activity entries, two primary
external profiles

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Content Integrity**: PASS. Profile and project copy is limited to the owner's public GitHub data;
  draft and fork status are stated explicitly.
- **Accessible by Default**: PASS. Semantic landmarks, skip link, keyboard focus, reduced motion,
  responsive typography, and non-script baseline are planned.
- **Fast and Resilient**: PASS. The site uses local HTML/CSS/JS and no required third-party assets.
- **Maintainable Content**: PASS. Profile and project facts live once in semantic HTML; shared visual
  rules use CSS custom properties and reusable classes.
- **Static-First Delivery**: PASS. Root-level static files and `.nojekyll` are directly compatible
  with a main-branch GitHub Pages source.

**Post-design re-check**: PASS. The UI contract, content model, and validation guide preserve all
five principles without exceptions.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site/
├── plan.md              # This file ($speckit-plan command output)
├── research.md          # Phase 0 output ($speckit-plan command)
├── data-model.md        # Phase 1 output ($speckit-plan command)
├── quickstart.md        # Phase 1 output ($speckit-plan command)
├── contracts/           # Phase 1 output ($speckit-plan command)
└── tasks.md             # Phase 2 output ($speckit-tasks command - NOT created by $speckit-plan)
```

### Source Code (repository root)

```text
.
├── index.html           # Complete semantic content and metadata
├── styles.css           # Visual system, responsive layout, and accessibility states
├── script.js            # Optional progressive enhancements
├── avatar.png           # Owner's public GitHub avatar, stored locally
├── .nojekyll            # Serve source directly through GitHub Pages
├── package.json         # Dependency-free validation scripts
└── tests/
    └── site.test.mjs    # Static content, link, landmark, and resilience contract checks
```

**Structure Decision**: Use root-level static files because the repository is the user's canonical
`<owner>.github.io` site and GitHub Pages can publish the branch root directly. This removes a build
artifact/source split and makes every deployment reproducible from the reviewed commit.

## Complexity Tracking

No constitution violations require justification.
