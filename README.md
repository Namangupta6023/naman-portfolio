# Naman Gupta — Portfolio

A responsive developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

1. Install [Node.js](https://nodejs.org/) version 20 or newer.
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

Vite will print the local URL in the terminal, normally `http://localhost:5173`.

## Important files

- `src/App.tsx` — portfolio sections, project data, skills, and links.
- `src/components/ui/profile-card-1.tsx` — reusable glassmorphism profile card.
- `src/index.css` — global theme, effects, and responsive styling.
- `public/naman-profile.jpg` — profile picture.

## Update the content

Edit the arrays near the top of `src/App.tsx` to change skills or projects. Update the profile text and social links in `src/components/ui/profile-card-1.tsx`.

## Deploy on Vercel

1. Create a GitHub repository and push this folder to it.
2. Sign in to [Vercel](https://vercel.com/) and select **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect **Vite** automatically.
5. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not fill them automatically.
6. Select **Deploy**.

After deployment, open **Project Settings → Domains** in Vercel to connect a custom domain.

## Production build

```bash
npm run build
npm run preview
```
