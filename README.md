# Leah Creighton - Professional Realtor Website

This is a professional realtor website built with Next.js and Tailwind CSS, optimized for static hosting on GitHub Pages.

## Project Structure

- **Home (`/`)**: Hero section, trust signals, and service overview.
- **Buy (`/buy`)**: Information for homebuyers.
- **Sell (`/sell`)**: Information for property sellers.
- **Blog (`/blog`)**: Real estate insights and market updates.
- **Contact (`/contact`)**: Contact form and direct contact information.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Static Export (`output: 'export'`) for GitHub Pages.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build & Export

To generate the static files for GitHub Pages:

```bash
npm run build
```

The output will be in the `out/` directory.

## Deployment to GitHub Pages

1.  **Configure GitHub Pages**: In your repository settings on GitHub, go to **Pages**.
2.  **Source**: Select "GitHub Actions" as the source.
3.  **Workflow**: Use the "Next.js" starter workflow or create a custom one to deploy from the `out/` directory.

---
Created with dedication by Gemini CLI.
