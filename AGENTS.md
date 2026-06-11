# rhf-fields

React Hook Form fields component library — wrappers de HTML nativo con estilos
Tailwind, diseñados para funcionar con cualquier librería de formularios.

## Commands

| Action | Command | Notes |
|--------|---------|-------|
| Dev server | `pnpm dev` | Demo app en `src/main.tsx` |
| Build + typecheck | `pnpm build` | `tsc -b && vite build` — genera `dist/` |
| Lint | `pnpm lint` | ESLint flat config |
| Preview build | `pnpm preview` | |

## Package manager

pnpm. Lockfile: `pnpm-lock.yaml`. Not a monorepo.

## TypeScript quirks

- `verbatimModuleSyntax: true` — type imports **must** use `import type { ... }`.
- `erasableSyntaxOnly: true` — no `enum`, no `namespace`, no constructor parameter properties.
- `noUnusedLocals` / `noUnusedParameters` — both on.
- Project references mode: `tsconfig.app.json` (src/) + `tsconfig.node.json` (vite.config.ts). `tsc -b` checks both.

## Styling

- **Tailwind v4** vía `@tailwindcss/vite` plugin.
- Sin `tailwind.config.js` — se usa `@import "tailwindcss"` en `src/index.css`.
- Merge de clases manual con template strings (`baseClass + ' ' + className`).
- El bundle **no incluye CSS compilado**. El consumidor debe tener Tailwind configurado.

## Theming

- Tokens semánticos en `@theme`: `primary`, `secondary`, `muted`, `destructive`, `border`, `ring`, `background`, `foreground`, `card`, y sus `*-foreground`.
- Tailwind genera automáticamente toda la escala `50-950` a partir de esos valores.
- Dark mode via clase `.dark` (`@custom-variant dark`). El consumidor agrega `.dark` a un contenedor padre.
- El consumidor redefine los tokens que quiera en su `@theme` para cambiar el design system.
- Valores en OKLCH para mejor percepción de color.

## Librería — arquitectura

- Entry: `src/index.ts` (barrel export).
- Build en modo librería Vite: `dist/rhf-fields.js` (ESM) + `dist/rhf-fields.cjs` (CJS).
- `react` y `react-dom` son externas (peer dependencies, no bundled).
- Type declarations generadas por `vite-plugin-dts`.
- `"exports"`, `"main"`, `"module"`, `"types"` configurados en `package.json`.

## Componentes — reglas

- **`FieldWrapper`** — contenedor genérico con label, borde, sombra y error. No usa `forwardRef`.
- **Componentes de campo** (Input, Textarea, Select) — componentes completos que llaman a `FieldWrapper` internamente.
- `forwardRef` — obligatorio para compatibilidad con `register` de RHF.
- `baseClass + ' ' + className` — merge simple de clases (sin twMerge).
- Rest props (`...props`) — pasan atributos HTML nativos.
- `displayName` — setear en cada componente.
- Usar tokens semánticos: `text-foreground`, `placeholder:text-muted-foreground`, `bg-card`, `border-border`.

## Testing

**None configured.** No test framework, no test files, no test script. Add from scratch.

## Formatting

**None configured.** ESLint es lint-only. Sin Prettier/dprint/biome.

## Infrastructure gaps

- No CI (no `.github/workflows/`)
- No `react-hook-form` dependency (a pesar del nombre del proyecto)
- No routing ni state management más allá de React
- `"private": true` — no publicable a npm sin cambiarlo
