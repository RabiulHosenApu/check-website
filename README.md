# Ambient Developer Portfolio & Design System

A premium, modern React portfolio website built with Vite. It features a sleek glassmorphic dark theme, dynamic accent palettes, interactive overlays, typing animations, and custom vector illustrations.

## 🚀 How to Run Locally

Follow these commands in your terminal to start the local development server:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   *This will launch the app at `http://localhost:5173` (or another free port) with Hot Module Replacement (HMR) enabled.*

3. **Build for Production**:
   ```bash
   npm run build
   ```
   *Compiles a minified production bundle inside the `dist/` directory, optimized for rapid page load times and search engine accessibility.*

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```
   *Runs a local server to test the compiled production build before deployment.*

---

## 🌐 Deployment & Hosting Guide

Since this is a single-page React app bundled with Vite, it compiles down to static HTML, CSS, and JS. You can host it for free on several modern cloud platforms:

### Option A: Vercel (Recommended)
Vercel is extremely fast and integrates directly with your repository.
1. Sign up/log in at [Vercel](https://vercel.com).
2. Install the Vercel CLI locally via `npm i -g vercel` or link your GitHub repository.
3. If using GitHub, import the repository on Vercel.
4. Settings will automatically detect Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be online in seconds!

### Option B: Netlify (easiest without git)
If you don't want to use Git, you can upload the folder manually:
1. Run `npm run build` locally to generate the `dist` folder.
2. Log in to [Netlify App](https://app.netlify.com).
3. Drag and drop the `dist` folder directly into the Netlify dropzone.
4. If hosting via GitHub, link your repository and use the same build settings (`npm run build` / `dist`).

### Option C: Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com) and go to **Workers & Pages**.
2. Click **Create a project** -> **Connect to Git** or upload assets.
3. Select the repository and set the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
4. Click **Save and Deploy**.

### Option D: GitHub Pages
If your codebase is on GitHub, you can host it directly on GitHub Pages using a simple build action or by installing the `gh-pages` npm package:
1. Follow the [Vite GitHub Pages Guide](https://vite.dev/guide/static-deploy.html#github-pages).
2. Set up a GitHub Action to build and deploy to the `gh-pages` branch on push.

---

## ✨ Features Implemented
* **Interactive Accent Themes**: Supports live switching between Purple, Emerald, and Rose themes without reloading.
* **Typing Headline animation**: Loops through professional titles dynamically with smooth blinking cursors.
* **Component-Level Modals**: Full-screen glassmorphic overlays displaying extended project parameters and metadata.
* **Form Validation Logic**: Instant checks for email validity, empty fields, and length constraints on form submission with shake and success feedbacks.
* **Premium Typography**: Linked with Google Fonts ('Outfit' and 'Plus Jakarta Sans') to render high-end header layouts.
* **Pure Vector Previews**: Embedded inline SVGs that automatically tint and scale depending on the selected accent color.
