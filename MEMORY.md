# Project Memory

## Current context

- The project was scaffolded with the Vite `react-ts` template.
- Tailwind CSS v4 is installed through `tailwindcss` and `@tailwindcss/vite`.
- Tailwind is enabled in `vite.config.ts` with `tailwindcss()`.
- The main CSS entry is `src/index.css`, which starts with `@import "tailwindcss";`.
- The demo in `src/App.tsx` intentionally showcases responsive layout and common utility states.

## Workflow

1. Install dependencies with `npm install`.
2. Start development with `npm run dev`.
3. Make UI changes in `src/` using semantic React and Tailwind utilities.
4. Validate with `npm run build` before handoff.

## Important constraints

- Do not commit `node_modules`, `dist`, `.env`, credentials, or secret material.
- Preserve the existing uSpec-related project files unless a task explicitly asks to change them.
