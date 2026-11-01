---

description: "Implementation tasks for the 27pokke portfolio site"
---

# Tasks: 27pokke Portfolio Site

**Input**: Design documents from `/specs/001-portfolio-site/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Static contract tests are required because the specification includes measurable
accessibility, resilience, content-integrity, and responsive outcomes.

**Organization**: Tasks are grouped by user story so each story remains independently testable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because it changes a different file with no incomplete dependency
- **[Story]**: Maps the task to a user story from spec.md
- Every task names the file or source surface it changes or validates

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish a dependency-free static project and reproducible validation entry points.

- [x] T001 Create dependency-free validation scripts and project metadata in `package.json`
- [x] T002 [P] Add static Pages publishing markers and the owner's public avatar in `.nojekyll` and `avatar.png`
- [x] T003 [P] Replace the starter repository description with setup, validation, content-update, and deployment guidance in `README.md`
- [x] T004 Verify universal generated-file exclusions while preserving Spec Kit assets in `.gitignore`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create the semantic and visual baseline shared by every user story.

**⚠️ CRITICAL**: No story is complete until the no-script document structure and design system exist.

- [x] T005 Write failing global contract tests for language, landmarks, skip link, unique anchors, local assets, and safe external-link behavior in `tests/site.test.mjs`
- [x] T006 Create document metadata, skip link, header, navigation, main landmark, and empty story section anchors in `index.html`
- [x] T007 Establish color, spacing, typography, focus, selection, layout-container, and no-script-safe reveal foundations in `styles.css`

**Checkpoint**: The page has a valid accessible shell and the global contract tests pass.

---

## Phase 3: User Story 1 - ひと目で人物像を理解する (Priority: P1) 🎯 MVP

**Goal**: Identify ぽっけ / 27pokke, role, Tokyo location, working approach, and next actions in the
first view.

**Independent Test**: A first-time visitor can state name, role, location, and next action after
viewing only the hero and about section.

- [x] T008 [US1] Add failing tests for public profile facts, heading hierarchy, and hero actions in `tests/site.test.mjs`
- [x] T009 [US1] Implement the verified hero, introduction, working-principles strip, and about narrative in `index.html`
- [x] T010 [US1] Compose the responsive hero, identity mark, metadata, call-to-action, and about layouts in `styles.css`

**Checkpoint**: User Story 1 works without JavaScript and is a deployable portfolio MVP.

---

## Phase 4: User Story 2 - 公開プロジェクトを探索する (Priority: P2)

**Goal**: Present factual public work with clear status, themes, and repository links.

**Independent Test**: The work section alone lets a visitor compare at least three activities and
open the matching repositories without mistaking concepts or forks for shipped original products.

- [x] T011 [US2] Add failing tests for project count, exact repository URLs, status labels, and factual source terms in `tests/site.test.mjs`
- [x] T012 [US2] Implement four factual project/activity records with status, summary, themes, and repository actions in `index.html`
- [x] T013 [US2] Implement the numbered editorial project list, hover/focus states, status treatments, and small-screen wrapping in `styles.css`

**Checkpoint**: User Stories 1 and 2 are independently readable and link to verified public work.

---

## Phase 5: User Story 3 - さらに知る・つながる (Priority: P3)

**Goal**: Provide obvious, keyboard-accessible routes to the owner's GitHub and X profiles.

**Independent Test**: A visitor can reach either public profile from the final call-to-action or
footer with keyboard input alone.

- [x] T014 [US3] Add failing tests for canonical GitHub/X URLs, accessible external-link labels, and safe link attributes in `tests/site.test.mjs`
- [x] T015 [US3] Implement the contact call-to-action, social links, and factual footer in `index.html`
- [x] T016 [US3] Style the contact composition, social actions, footer, and consistent keyboard focus states in `styles.css`

**Checkpoint**: All public connection routes are present without exposing a private email address.

---

## Phase 6: User Story 4 - 端末を問わず快適に読む (Priority: P4)

**Goal**: Keep the complete page readable, operable, and motion-safe across representative viewport
sizes and failure modes.

**Independent Test**: At 320px, 768px, and 1440px, content has no overlap or unintended horizontal
scroll; reduced motion and disabled JavaScript preserve every primary task.

- [x] T017 [US4] Add failing tests for responsive breakpoints, overflow guards, reduced-motion rules, and progressive-enhancement hooks in `tests/site.test.mjs`
- [x] T018 [US4] Add tablet, mobile, wide-screen, high-contrast, and reduced-motion refinements in `styles.css`
- [x] T019 [US4] Add optional active-navigation and intersection reveal enhancements with resilient fallbacks in `script.js`

**Checkpoint**: All four stories work across the required viewports and without optional scripts.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Close documentation, verification, and publication requirements across the full site.

- [x] T020 Remove the temporary constitution Sync Impact Report before commit in `.specify/memory/constitution.md`
- [x] T021 Run the complete automated contract suite from `package.json` and resolve failures in `index.html`, `styles.css`, `script.js`, and `tests/site.test.mjs`
- [x] T022 Run the local HTTP and quickstart validation scenarios from `specs/001-portfolio-site/quickstart.md`
- [x] T023 Review the final source against `specs/001-portfolio-site/spec.md`, `plan.md`, and `contracts/ui-contract.md`
- [x] T024 Commit and push the reviewed root static source from `index.html` to `main`, then verify `https://27pokke.github.io/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Starts immediately.
- **Foundational (Phase 2)**: Depends on setup and blocks all story completion.
- **User Stories (Phases 3–6)**: Depend on the foundation. Execute in priority order because the
  stories share `index.html`, `styles.css`, and `tests/site.test.mjs`.
- **Polish (Phase 7)**: Depends on all selected stories.

### User Story Dependencies

- **US1 (P1)**: No story dependency; forms the MVP.
- **US2 (P2)**: Uses the page shell but remains independently testable as a work section.
- **US3 (P3)**: Uses shared external-link styles but remains independently testable.
- **US4 (P4)**: Validates and enhances all content already present, so it follows US1–US3.

### Within Each User Story

- Add the story's contract tests first and confirm the new assertions fail.
- Add semantic content before story-specific visual treatment.
- Preserve working earlier stories while extending shared files.
- Pass the story checkpoint before proceeding.

### Parallel Opportunities

- T002 and T003 can run in parallel after T001 because they touch separate files.
- T005 and initial content research can proceed independently, but T006 must satisfy T005.
- Documentation review and production URL readiness checks can be prepared while automated tests run.
- Story implementation itself is sequential because every story intentionally shares the three core
  site files.

---

## Parallel Example: Setup

```text
Task: "Add static Pages publishing markers and the public avatar in .nojekyll and avatar.png"
Task: "Replace the starter repository description with project guidance in README.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational phases.
2. Complete the hero/about tests, content, and styles for User Story 1.
3. Validate the first view and no-script baseline.
4. Keep the same shell while adding later story sections.

### Incremental Delivery

1. Ship identity and positioning.
2. Add factual projects.
3. Add public connection paths.
4. Add responsive and progressive enhancements.
5. Run cross-cutting validation and publish the reviewed default branch.

## Notes

- `[P]` marks only truly independent files.
- Project copy must remain grounded in public GitHub information.
- Concept and fork status must remain explicit.
- Every completed task is checked off in this file.
