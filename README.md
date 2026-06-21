
# Thorin Tech – Enterprise AI Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-2.0-000000?logo=shadcnui)](https://ui.shadcn.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8.15-F69220?logo=pnpm)](https://pnpm.io/)

**Depth. Intelligence. Dominance.** – Transforming industries through an integrated AI ecosystem of content, finance, and automation.

---

## 📖 Table of Contents

- [About](#-about)
- [Built With](#-built-with)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Features](#-features)
- [Theming & Styling](#-theming--styling)
- [Deployment](#-deployment)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 About

Thorin Tech is a cutting‑edge enterprise AI platform offering solutions in **Invoice OCR**, **Marketing Suite**, **WhatsApp Automation**, **Financial Intelligence**, and **MedTech AI**. This repository contains the official landing page and legal/company information hub for the brand.

The project is built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, **shadcn/ui** components, and **Framer Motion** for smooth animations. It features a dark‑mode‑ready design, fully responsive layouts, and reusable component patterns for legal, company, and product pages.

---

## 🛠 Built With

| Technology | Purpose |
| :--------- | :------ |
| [Next.js 15](https://nextjs.org/) | React framework with App Router, server components, and static generation |
| [TypeScript](https://www.typescriptlang.org/) | Type‑safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility‑first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | High‑quality, accessible React components built on Radix UI |
| [Framer Motion](https://www.framer.com/motion/) | Production‑ready animation library |
| [Lucide Icons](https://lucide.dev/) | Beautiful, consistent icon set |
| [pnpm](https://pnpm.io/) | Fast, disk‑space‑efficient package manager |
| [Vercel Analytics](https://vercel.com/analytics) | Optional performance and audience insights |

---

## 📂 Project Structure

```
THORIN-TECH-LANDING/
├── app/
│   ├── company/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   └── press/
│   │       └── page.tsx
│   ├── legal/
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   ├── cookie-policy/
│   │   ├── gdpr/
│   │   ├── acceptable-use-policy/
│   │   ├── data-processing-agreement/
│   │   ├── ai-usage-policy/
│   │   ├── information-security-policy/
│   │   ├── service-level-agreement/
│   │   └── layout.tsx
│   ├── products/
│   │   └── invoice-ocr/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── company-page-card.tsx
│   │   └── legal-page-card.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── bento-grid.tsx
│   ├── features.tsx
│   ├── cta.tsx
│   ├── scroll-to-top.tsx
│   ├── theme-toggle.tsx
│   └── ...
├── hooks/
├── lib/
├── public/
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

---

## 🧰 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** 8.0 or later (`npm install -g pnpm`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/thorin-tech-landing.git
   cd thorin-tech-landing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   > ⚠️ If you encounter build‑script approval prompts (e.g., `sharp`), run:
   > ```bash
   > pnpm approve-builds
   > ```
   > and then `pnpm install` again.

3. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

4. **Build for production**

   ```bash
   pnpm build
   pnpm start
   ```

---

## ✨ Features

### 🏠 Homepage
- Full‑width hero with animated text scramble
- Bento grid showcasing key products
- Features section with hover effects
- Call‑to‑action section
- Theme toggle (light/dark)
- Scroll‑to‑top button

### 🧾 Legal Pages (9 pages)
- Privacy Policy, Terms of Service, Cookie Policy, GDPR Compliance
- Acceptable Use Policy (AUP), Data Processing Agreement (DPA)
- AI Usage & Responsible AI Policy
- Information Security Policy
- Service Level Agreement (SLA)
- Each page uses `LegalPageCard` with consistent styling and animations.

### 🏢 Company Pages (4 pages)
- **About** – Our story, mission, values, leadership team, and numbers.
- **Careers** – Why work at Thorin Tech, benefits, open roles, testimonials, application process.
- **Blog** – AI Insights, Engineering Deep Dives, Case Studies, Future Lens, Tool of the Week, Developer Guide.
- **Press & Media** – Press releases, media kit, partnerships, events, awards, and press contact form.

### 🎨 Theming
- Built‑in dark mode support using `next-themes` and Tailwind CSS
- Global CSS variables for easy customization
- shadcn/ui components adapt seamlessly to the current theme

### ⚡ Performance & SEO
- Next.js App Router for optimal server‑side rendering and static generation
- Metadata and Open Graph tags configured in `layout.tsx`
- Vercel Analytics integration (production only)

---

## 🎨 Theming & Styling

The project uses a custom colour palette defined in `globals.css` and `tailwind.config.js`. The primary colour (`primary`) is used for accents, buttons, and highlights. The dark mode is enabled via the `class` strategy in `next-themes`.

All reusable page templates (`LegalPageCard`, `CompanyPageCard`) support an `accentColor` prop to change heading colours, badges, and borders across `slate`, `navy`, `gold`, `emerald`, and `purple` palettes.

---

## 🚀 Deployment

The easiest way to deploy this site is to use [Vercel](https://vercel.com/).

1. Push your code to a GitHub repository.
2. Import the repository on Vercel.
3. Vercel automatically detects Next.js and uses the correct build settings.
4. (Optional) Connect a custom domain.

Alternatively, you can deploy to any platform that supports Node.js applications (e.g., Netlify, AWS Amplify, or a self‑hosted server with `pnpm build && pnpm start`).

---

## 📄 License

This project is proprietary and confidential. Unauthorised copying, distribution, or use of this software is strictly prohibited.

For licensing inquiries, please contact **legal@thorintech.ai**.

---

## 📧 Contact

For any questions, please reach out via [our website](https://thorintech.ai) or email **hello@thorintech.ai**.

---

*Built with ☕ and **Depth. Intelligence. Dominance.***