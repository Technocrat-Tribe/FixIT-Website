# FixIT — Official Interactive Showcase Website

> **Public Satellite Showcase Website for FixIT**  
> Live URL: [https://technocrat-tribe.github.io/FixIT-Website/](https://technocrat-tribe.github.io/FixIT-Website/)  
> Monorepo: [https://github.com/Technocrat-Tribe/FixIT](https://github.com/Technocrat-Tribe/FixIT)  
> Architect: [Harshit Agarwal](https://1997agarwal.github.io)

---

## 🛠️ Overview

FixIT is a three-sided engineering marketplace turning user bug reports into verified fixes via prepaid escrow bounties, automated deduplication, and 1-click Linear/GitHub export.

This repository hosts the static interactive satellite showcase website deployed directly to GitHub Pages. It includes fully client-side interactive simulators:
- **Interactive Triage Sandbox**: Pre-seeded Acme Cloud bug triage queue with automated semantic clustering, duplicate report inspection, and 1-click Linear/GitHub export.
- **Escrow Split & ROI Calculator**: Real-time slider demonstrating the 75% solver / 10% reporter / 15% platform fee split and cost comparison vs senior developer context switching.
- **Three-Sided Persona Explorer**: Deep-dives into value propositions for Companies, Solvers, and Everyday Reporters.
- **Interactive Pricing Matrix**: 4-tier SaaS pricing model with feature comparison and pilot requests.
- **Architecture Deep Dive**: Explanations of the ACID double-entry escrow ledger, deduplication engine, and CI verification pipeline.

---

## 🚀 Quickstart

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle for GitHub Pages
npm run build

# Preview production build
npm run preview
```

---

## 📦 Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS + Custom Brand Tokens
- **Icons:** `lucide-react`
- **Effects:** `canvas-confetti`
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
