# Quickstart: Validate the Portfolio

## Prerequisites

- Node.js 20 or newer
- Python 3 (for a local static server)
- A modern desktop browser

## Automated checks

From the repository root:

```sh
npm test
```

Expected outcome: all static contract tests pass with no missing landmarks, facts, anchors, local
assets, or accessibility rules.

## Local smoke test

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`. The response must be successful and the first view must identify
ぽっけ / 27pokke as a Tokyo-based software developer.

## End-to-end validation scenarios

1. Use only Tab, Shift+Tab, and Enter. Confirm the skip link, page navigation, project links, GitHub,
   and X are reachable and show a visible focus indicator.
2. Check widths 320px, 768px, and 1440px. Confirm no content overlap or unintended horizontal scroll.
3. Enable reduced motion at the operating-system or browser level. Reload and confirm no smooth
   scrolling or movement-based reveal is required to read the page.
4. Disable JavaScript. Reload and confirm all profile text, project entries, and external links remain
   present and usable.
5. After publication, open `https://27pokke.github.io/` and confirm the visible content matches the
   reviewed `main` branch.
