# Mahim Islam | Developer Portfolio

A responsive portfolio starter built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

1. **Add your photo.** Put your professional photo in `public/images/mahim.jpg`. In `app/page.tsx`, replace the initials avatar (`MI`) with Next.js `<Image src="/images/mahim.jpg" ... />`. Add `import Image from "next/image"` at the top.
2. **Add your resume.** Put your PDF at `public/resume.pdf`. The existing hero button downloads `/resume.pdf`.
3. **Confirm project links.** Update `lib/projects.ts` if any live or repository URL changes. The project cards and detail pages are generated from this file.
4. **Update metadata domain.** Replace `mahim-portfolio.vercel.app` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your actual Vercel domain after deployment.
5. **Review personal details.** Edit the About and education text in `app/page.tsx`. Add a phone number only if you want it public.

## Routes
- `/` — portfolio homepage
- `/projects/bazar-dor` — Bazar Dor details
- `/projects/fitlog` — Fitlog details
- `/projects/dev-stack-builder` — Dev Stack Builder details
- `/sitemap.xml` and `/robots.txt` — SEO routes

## Deploy to Vercel

1. Create a GitHub repository and push this folder.
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import the repository. Vercel should detect Next.js automatically.
4. Keep the default build command (`npm run build`) and output settings.
5. Click **Deploy**. Wait for the build to finish, then open the generated deployment URL and test all project links and mobile navigation.
6. Replace the placeholder metadata domain with the final domain and push the update. Vercel will redeploy automatically.

## Notes
- The résumé button is wired up now; it will download once `public/resume.pdf` is added.
- The hero currently uses an initials placeholder because your own photo will be added later.
- No professional employment history is fabricated. The page highlights project work and learning instead.
- Project artwork is made with CSS, so there are no external image dependencies.
