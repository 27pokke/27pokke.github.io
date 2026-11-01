# Data Model: 27pokke Portfolio Site

The site has no runtime database. These content entities describe the versioned information rendered
in `index.html` and the constraints that tests enforce.

## Profile

| Field | Required | Validation |
| --- | --- | --- |
| `displayName` | Yes | Public display name: `ぽっけ` |
| `handle` | Yes | GitHub/X handle: `27pokke` |
| `role` | Yes | Plain-language role; no unsupported seniority or employer claim |
| `location` | Yes | Public profile location: `Tokyo` |
| `bio` | Yes | Grounded in the public GitHub bio |
| `githubUrl` | Yes | HTTPS link to `github.com/27pokke` |
| `xUrl` | Yes | HTTPS link to `x.com/27pokke` |

## Project

| Field | Required | Validation |
| --- | --- | --- |
| `name` | Yes | Exact public repository/project name |
| `summary` | Yes | One or two sentences grounded in public README/description |
| `status` | Yes | Clearly identifies shipped, learning, concept, automation, or fork context |
| `themes` | Yes | One or more factual technologies or problem areas |
| `repositoryUrl` | Yes | HTTPS link to the corresponding public repository |

### Initial records

1. `27pokke` — GitHub profile automation that publishes Tokyo weather in the profile README.
2. `laravel-ddd-practice` — learning project for DDD/TDD through an article-publishing domain.
3. `kataribe` — concept repository for a manga and novel publishing platform; shown as a concept.
4. `danger-ruby-swiftlint` — a fork of the Danger plugin for SwiftLint; fork status is explicit.

## Section

| Field | Required | Validation |
| --- | --- | --- |
| `id` | Yes | Unique, stable lowercase anchor |
| `label` | Yes | Short Japanese navigation label |
| `eyebrow` | Yes | Visible ordered section number and English descriptor |
| `heading` | Yes | Unique section heading in the document outline |

### Relationships

- The page has exactly one `Profile`.
- The work section contains three or more `Project` records.
- Each navigation link targets exactly one `Section` id.
- Every `Project.repositoryUrl` and profile URL is an external HTTPS link.

## State and transitions

Content has no interactive state. Optional enhancement state is presentation-only:

- Navigation link: `inactive` → `active` when its section is the current viewport region.
- Reveal element: `pending` → `visible` when observed, or immediately `visible` when reduced motion
  is requested or observation is unavailable.
