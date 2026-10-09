# Creator Community Website

This is an unofficial concept website inspired by creator education and practical programming learning. It is built as a polished three-page React + Vite project with a dark editorial design, a searchable video library, learning roadmaps, and a newsletter signup form.

## Overview

The site helps visitors:

- discover programming tutorials
- search and filter videos by topic
- compare learning paths by skill level
- join a newsletter for practical updates

The project is intentionally beginner-friendly and keeps the code clear, readable, and focused on essential React concepts.

## Technologies used

- React
- Vite
- JavaScript + JSX
- CSS
- React Router
- Formspree for newsletter submissions

## Folder structure

```text
.
├── .env.example
├── index.html
├── package.json
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   └── NewsletterForm.jsx
│   ├── data/
│   │   ├── learningPaths.js
│   │   └── videos.js
│   ├── index.css
│   └── main.jsx
└── README.md
```

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file based on the example:

```bash
copy .env.example .env
```

3. Add your real Formspree form ID to the `.env` file:

```bash
VITE_FORMSPREE_FORM_ID=your_form_id_here
```

4. Start the development server:

```bash
npm run dev
```

## Development and production build

Run the app in development mode:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Formspree configuration

1. Create a form on Formspree.
2. Copy the form ID from the Formspree dashboard.
3. Set it in the environment file as `VITE_FORMSPREE_FORM_ID`.
4. The app uses the standard Formspree endpoint format:

```js
https://formspree.io/f/${formId}
```

5. Test the form by submitting a real email address from your local development site.

Important: the form intentionally shows a clear warning and disables real submission when the environment variable is missing. It never fake-reports a successful message.

## Deployment instructions

A typical deployment flow is:

1. Build the app with `npm run build`.
2. Deploy the generated `dist` folder to a static host such as Vercel, Netlify, or GitHub Pages.
3. Set the environment variable `VITE_FORMSPREE_FORM_ID` in your hosting platform.
4. If your deployment uses client-side routing, make sure the host rewrites unknown routes back to `index.html`.

For example:

- Netlify: set a redirect rule from `/*` to `/index.html`.
- Vercel: configure a rewrite to the same route.
- Apache or Nginx: add a fallback route to the app entry point.

## Known limitations and manual configuration steps

- The newsletter form is ready for real Formspree integration, but it will not submit until you provide a valid form ID.
- The curated video list is intentionally small and manually selected for quality and clarity.
- The design uses a stylized placeholder portrait when a verified Mosh portrait is not available in the project assets.
- Because this is a concept project, it is not an official Mosh website and includes a footer disclaimer to make that clear.

## Final notes

This project is designed as a polished beginner-friendly front-end concept, with a strong emphasis on readability, simple React patterns, and a deployable dark UI.

