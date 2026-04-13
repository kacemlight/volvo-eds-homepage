# Volvo Home Page — EDS Project

Built with Adobe Edge Delivery Services.

## Quick Start

```bash
npm install
npm run dev
```

Preview: `http://localhost:3000`

## Project Structure

```
volvo-eds-homepage/
├── blocks/              # EDS block components
│   ├── hero/
│   ├── features/
│   ├── product-showcase/
│   ├── cta-banner/
│   └── footer/
├── content/us/en/       # Page content in Markdown
├── styles/              # Global CSS
├── scripts/             # JavaScript modules
├── fstab.yaml           # Content source mapping
└── helix-config.json    # EDS configuration
```

## Blocks

1. **Hero Banner** — Full-width hero with headline and CTA
2. **Features** — 3-column feature grid
3. **Product Showcase** — XC90 product section with image and content
4. **CTA Banner** — Call-to-action section
5. **Footer** — Multi-column footer with links

## Configuration

- `fstab.yaml` — Maps content sources for EDS
- `helix-config.json` — EDS strain configuration
- `styles/styles.css` — Global styles
- `scripts/scripts.js` — Global scripts

## Deployment

Push to main branch for live deployment via AEM Pages.

**Status:** In development — awaiting content integration.
