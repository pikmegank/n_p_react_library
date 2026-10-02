# Repository Working Rules

## Scope

This repository is a React + TypeScript + Vite application using Tailwind CSS v4. Keep changes focused on the current project and do not modify files outside the repository root.

## Development rules

- Prefer small, composable React components with clear names.
- Use Tailwind utility classes for layout and visual styling.
- Keep global CSS limited to the Tailwind import, base defaults, and genuinely global rules.
- Use semantic HTML and preserve keyboard focus states for interactive controls.
- Do not add secrets, API keys, credentials, or private URLs to source files.
- Add `.env.example` documentation for required environment variables instead of committing `.env` files.

## Verification

Before handing off a change:

1. Run `npm run build`.
2. If UI behavior changed, run `npm run dev` and inspect the page locally.
3. Review `git diff` and confirm unrelated files were not changed.

## File ownership

- `src/App.tsx`: demo page and UI composition.
- `src/index.css`: Tailwind import and global base rules.
- `vite.config.ts`: Vite and Tailwind plugin configuration.
- `DESIGN.md`: design token decisions.
- `MEMORY.md`: durable project context and workflow notes.
