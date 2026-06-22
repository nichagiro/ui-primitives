# ui-primitives

Librería de componentes UI headless + form fields con Tailwind v4, diseñados
para funcionar con cualquier librería o sin ninguna. RHF es opcional.

## Library installation rule

No instalar librerías sin consultar primero. Si surge una necesidad que requiere
una dependencia externa, explicar por qué y decidir juntos antes de ejecutar.

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

- Tokens semánticos en `@theme`: `primary`, `secondary`, `muted-foreground`, `danger`, `border`, `ring`, `background`, `foreground`, `card`, y sus `*-foreground`.
- Tailwind genera automáticamente toda la escala `50-950` a partir de esos valores.
- Dark mode via clase `.dark` (`@custom-variant dark`). El consumidor agrega `.dark` a un contenedor padre.
- El consumidor redefine los tokens que quiera en su `@theme` para cambiar el design system.
- Valores en OKLCH para mejor percepción de color.

## Librería — arquitectura

- Entry: `src/index.ts` (barrel export).
- Form components: `src/form/` (Input, Textarea, Select, Check, Radio, FileUpload).
- UI components: `src/ui/` (Button, Alert, Chip, Modal, DataTable, etc.).
- Build en modo librería Vite: `dist/ui-primitives.js` (ESM) + `dist/ui-primitives.cjs` (CJS).
- `react`, `react-dom` y `react-hook-form` son externas (peer dependencies, no bundled).
- `react-hook-form` es **opcional** — componentes UI no lo requieren.
- Type declarations generadas por `vite-plugin-dts`.
- `"exports"`, `"main"`, `"module"`, `"types"` configurados en `package.json`.

## RHF integration

- Los componentes de formulario reciben `error` como prop opcional y pasan el ref vía `forwardRef`.
- El consumidor usa `register` directamente: `{...register('name')}`.
- `error` se obtiene de `formState.errors[name]?.message`.
- Sin acoplamiento interno a RHF — los componentes funcionan con cualquier librería o sin ninguna.

## Componentes — reglas

- **`FieldWrapper`** — contenedor genérico con label, borde, sombra y error. No usa `forwardRef`.
- **Componentes de campo** (Input, Textarea, Select) — componentes completos que llaman a `FieldWrapper` internamente.
- **Componentes UI** (Button, Alert, Chip, Modal, DataTable) — no usan FieldWrapper ni RHF.
- `forwardRef` — obligatorio en componentes de formulario para compatibilidad con `register` de RHF.
- `baseClass + ' ' + className` — merge simple de clases (sin twMerge).
- Rest props (`...props`) — pasan atributos HTML nativos al elemento nativo.
- `displayName` — setear en cada componente con `forwardRef`.
- Usar tokens semánticos: `text-foreground`, `placeholder:text-muted-foreground`, `bg-card`, `border-border`.

## Testing

- **Vitest** + **@testing-library/react** + **@testing-library/user-event**
- Commands:
  | Action | Command |
  |--------|---------|
  | Run once | `pnpm test` |
  | Watch mode | `pnpm test:watch` |
- Setup en `src/tests/setup.ts` (importa `@testing-library/jest-dom`).
- Los tests viven en `src/tests/<Componente>.test.tsx`.

## Componente ↔ Test ↔ Story rule

- **Crear componente** → crear también `src/tests/<Componente>.test.tsx` y `src/stories/<Componente>.stories.tsx`.
- **Editar componente** → revisar y actualizar el test y la story si es necesario (ej: cambian props, variantes o comportamiento).
- Si los archivos no existen al tocar el componente, hay que crearlos.

## Formatting

**None configured.** ESLint es lint-only. Sin Prettier/dprint/biome.

## Commit & publish workflow

Cuando el usuario pida commit/push:

1. Preguntar: **"¿Qué version bump? (patch/minor/major)"** con default `patch`. Si no hay cambios de versión, elegir `Skip bump`.
2. Ejecutar `npm version <bump> --no-git-tag-version` para actualizar `package.json`.
3. Ejecutar `pnpm lint`
4. Ejecutar `pnpm doctor`
5. Ejecutar `pnpm test`
6. Si **cualquiera** falla → detener, **no hacer el commit**. Informar al usuario y ofrecer ayuda para arreglarlo.
7. Si todo pasa → commit con mensaje descriptivo + push a `main`.
8. Buildear Storybook: `pnpm build-storybook`
9. Desplegar Storybook a GitHub Pages: `git subtree push --prefix storybook-static origin gh-pages`
10. Publicar a npm: `npm publish`

## Infrastructure gaps

- `react-hook-form` es peer dependency opcional (v7+)
- No routing ni state management más allá de React
