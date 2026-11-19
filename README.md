# Abdalaziz Almufti — Portfolio

Personal portfolio of Abdalaziz Almufti, a backend-focused full stack developer (Laravel, Next.js) based in Gaza.
It presents HealthyLife AI, a production SaaS platform for nutrition specialists, along with other selected projects, experience, skills, and certifications.

**Live site:** https://my-portfolio-zeta-three-9gki3si54m.vercel.app

## Features

- Bilingual: English (`/`) and Arabic (`/ar`)
- Light and dark themes
- Case-study layout for the main product, with real product screenshots
- SEO basics: sitemap, robots, Open Graph share images, structured data
- Downloadable CV (`public/Abdalaziz_Almufti_CV.pdf`)

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion, GSAP, Lenis (smooth scroll), Three.js / OGL (hero effects).

## Project structure

```
app/
  (en)/            English pages
  (ar)/ar/         Arabic pages
  components/      UI components (PortfolioPage, Navbar, ProductShowcase, ...)
  content.ts       All site copy, links, and project data (English and Arabic)
public/            Images, share images, CV
```

To change text, projects, or links, edit `app/content.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Deployment

Deployed on Vercel. A `netlify.toml` is also included for Netlify builds.

## Contact

abedalmufti@gmail.com · [LinkedIn](https://www.linkedin.com/in/abdalaziz-almufti-a6a9a53a9/) · [GitHub](https://github.com/abd-alaziz-almufti)
