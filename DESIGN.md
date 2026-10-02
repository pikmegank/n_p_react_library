# Design Tokens

The starter demo uses a compact dark UI token set. Tailwind utilities remain the source of truth in components; this document records the intended roles so future screens stay consistent.

## Color roles

| Role | Value | Usage |
| --- | --- | --- |
| Canvas | `slate-950` / `#020617` | App background and page canvas |
| Surface | `slate-900` / `#0f172a` | Cards and content panels |
| Border | `slate-800` / `#1e293b` | Low-contrast dividers and card outlines |
| Primary accent | `cyan-400` / `#22d3ee` | Primary actions, highlights, and focus rings |
| Positive | `emerald-400` / `#34d399` | Completed or healthy status indicators |
| Primary text | `slate-100` / `#f1f5f9` | Body and supporting copy |
| Strong text | `white` / `#ffffff` | Headings and high-emphasis content |

## Typography

- Sans: system UI stack via the Tailwind default sans family.
- Display heading: bold, tight tracking, responsive `text-4xl` to `text-6xl`.
- Body copy: readable leading with muted `slate-300` or `slate-400`.
- Code: monospace with accent color for implementation hints.

## Shape and spacing

- Use `rounded-3xl` for primary panels and `rounded-xl` for controls.
- Use the default Tailwind spacing scale; prefer `p-8`, `gap-6`, and `mt-10` for major regions.
- Use soft shadows only where they communicate elevation, such as the featured card.
