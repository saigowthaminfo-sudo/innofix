# Innofix Technologies — Next.js Project

Converted from the uploaded WordPress themes:
- technix.zip
- technix-child.zip

Detected theme: Technix

## Run locally

Node.js 20.9+ is recommended.

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Important

This is a **Next.js conversion starter**. The uploaded files are WordPress theme files, so PHP,
WordPress hooks, Customizer settings, database content, menus/widgets, plugin functionality,
forms, and WordPress media-library content cannot be fully reconstructed from the theme ZIP alone.

The theme assets and CSS have been copied into `public/`, and a Next.js App Router project has been
created. For a pixel-perfect migration, the live WordPress site and/or WordPress export/database
would be needed.

## Netlify build fix

FontAwesome font files are copied into `public/fonts/` and the migrated CSS uses
root-relative `/fonts/...` URLs so Next.js can process the stylesheet without
trying to resolve the old WordPress `../fonts/...` paths.
