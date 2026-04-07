# My portfolio/blog website

[![License: MIT](https://img.shields.io/github/license/oatiffer/omartiffer.cloud)](LICENSE)

This is the source code for my website: [omartiffer.com](https://omartiffer.com). It’s intended to serve as a portfolio of projects I’m working on, and a blog to document my journey and share what I’m learning.

![Screenshot of omartiffer.com homepage](src/assets/images/screenshot.png)

## 🛠️ Tech stack

[![Cloudflare](https://img.shields.io/badge/cloudflare-%20domain%20hosting-grey?labelColor=F96702&style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/)
[![Netlify](https://img.shields.io/badge/netlify-%20static%20site%20hosting-grey?labelColor=00C7B7&style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![Astro](https://img.shields.io/badge/astro-grey?labelColor=BC52EE&style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/tailwind-grey?labelColor=06B6D4&style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-grey?labelColor=3178C6&style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- ⚡ Built with Astro and Tailwind CSS
- 📱 Responsive design
- 🧩 Component-based structure
- 📝 Markdown-powered content pages
- 🖊️ Blog (coming soon)

## 📂 Project Structure

```text
/
├── public/                     # Static assets (images, icons, etc.)
├── src/
│   ├── components/             # Shared components
│   ├── config/                 # Config files (menu and social icons)
│   ├── content/                # Content collection for all pages
│   ├── layouts/                # Shared layout components
│   ├── pages/                  # Site pages (e.g., index.astro)
│   └── content.config.ts       # Collection definitions
├── .gitignore                  # Files to ignore in Git
├── .prettierrc                 # Code formatting
├── .tmxsrc                     # Tmux sessionizer bootstrapper
├── LICENSE                     # License file
├── astro.config.mjs            # Astro project config
├── eslint.config.js            # Linting rules
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript settings
```

## 🚀 Want to try it locally?

### 1. Clone the repo

```bash
git clone https://github.com/omartiffer/omartiffer.com.git
```

### 2. Go into the project directory

```bash
cd omartiffer.com
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

#### Then open [`http://localhost:4321`](http://localhost:4321) in your browser

## Attributions

- Some HTML components were adapted from [HyperUI](https://www.hyperui.dev/)
- Timeline HTML structure adapted from [Preline UI](https://www.preline.co/)
- Dark/Light themes were generated using [daisyUI](https://daisyui.com/theme-generator)
