# UI Contract: Single-Page Portfolio

## Document contract

- The document language is Japanese.
- One `h1` identifies ぽっけ / 27pokke.
- `header`, `nav`, `main`, and `footer` landmarks are present.
- A skip link targets the main content.
- Major sections use stable ids: `about`, `work`, and `contact`.
- Navigation anchors reference existing section ids.

## Hero contract

- Shows display name, handle, role, and Tokyo location before the first project list.
- Provides a primary link to `#work` and a secondary link to the GitHub profile.
- Does not depend on an image or script to identify the owner.

## Project contract

- At least three project/activity entries are visible in the source HTML.
- Every entry includes a name, factual summary, status label, theme labels, and repository link.
- Concept and fork records are labeled so they cannot be mistaken for finished original products.
- External links open safely and include an accessible indication that they leave the page.

## Contact contract

- GitHub and X links are present in the final call-to-action and footer.
- No private email address, contact form, or runtime data submission is introduced.

## Interaction contract

- All anchors work without JavaScript.
- Keyboard focus is visually distinct from hover state.
- Optional reveal effects never conceal content when JavaScript fails.
- Reduced-motion preference disables smooth scrolling and movement-based reveal effects.

## Responsive contract

- At 320px, content remains readable without unintended horizontal scrolling.
- At tablet widths, project metadata and actions remain legible without overlap.
- At wide desktop widths, line length stays bounded and composition uses the available space.
