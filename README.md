# React + TypeScript + Vite + Tailwind CSS v4

This project is a small React + TypeScript playground powered by Vite. Tailwind CSS v4 is integrated through the official `@tailwindcss/vite` plugin.

## Requirements

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

The production output is written to `dist/`.

## Preview the production build

```bash
npm run preview
```

## Storybook

Run the component workbench locally:

```bash
npm run storybook
```

Build the static Storybook output and run its browser-based play tests:

```bash
npm run build-storybook
npm run test:storybook -- run
```

Stories for the public UI components live beside their source files in
`src/components/ui`. Storybook also exposes its MCP endpoint at `/mcp` through
`@storybook/addon-mcp`.

## Project conventions

- React entry point: `src/main.tsx`
- Main stylesheet: `src/index.css`
- Tailwind entry: `@import "tailwindcss";`
- Vite configuration: `vite.config.ts`
- Repository workflow: see [`AGENTS.md`](./AGENTS.md)
- Design tokens: see [`DESIGN.md`](./DESIGN.md)
