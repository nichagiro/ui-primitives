# ui-primitives

Colección de componentes UI headless + form fields con React y Tailwind CSS v4.
Funciona con cualquier librería de formularios o sin ninguna. React Hook Form es opcional.

```bash
pnpm add @nichagiro/ui-primitives
```

## Setup

### Sin Tailwind

```css
@import "@nichagiro/ui-primitives/style.css";
```

CSS compilado con todos los tokens y utilidades. Funciona en cualquier framework, no requiere Tailwind.

### Con Tailwind v4

```css
@import "tailwindcss";
@import "@nichagiro/ui-primitives/style.css";
```

Sobrescribí tokens en tu `@theme` — tus valores tienen prioridad por cascada.

### Dark mode

Agregá la clase `.dark` a un contenedor padre (incluido en el CSS compilado).

## 🎨 Theming

### Tokens disponibles

| Token | Light | Dark |
|---|---|---|
| `--color-primary` | `oklch(58% 0.17 198)` | derivado (70% saturación) |
| `--color-primary-foreground` | `oklch(98% 0.01 250)` | `oklch(18% 0.02 255)` |
| `--color-secondary` | `oklch(96% 0.006 255)` | `oklch(24% 0.01 255)` |
| `--color-secondary-foreground` | `oklch(20% 0.02 255)` | `oklch(97% 0.004 255)` |
| `--color-muted` | `oklch(97% 0.004 255)` | `oklch(22% 0.008 255)` |
| `--color-muted-foreground` | `oklch(49% 0.015 255)` | `oklch(70% 0.01 255)` |
| `--color-danger` | `oklch(58% 0.21 28)` | derivado (64% saturación) |
| `--color-danger-foreground` | `oklch(98% 0.01 250)` | `oklch(12% 0.01 255)` |
| `--color-success` | `oklch(62% 0.16 154)` | derivado (70% saturación) |
| `--color-success-foreground` | `oklch(98% 0.01 250)` | `oklch(14% 0.01 255)` |
| `--color-warning` | `oklch(78% 0.17 82)` | derivado (74% saturación) |
| `--color-warning-foreground` | `oklch(20% 0.02 255)` | `oklch(16% 0.01 255)` |
| `--color-info` | `oklch(60% 0.12 238)` | derivado (70% saturación) |
| `--color-info-foreground` | `oklch(98% 0.01 250)` | `oklch(15% 0.01 255)` |
| `--color-border` | `oklch(90% 0.006 255)` | `oklch(28% 0.008 255)` |
| `--color-background` | `oklch(99% 0.003 255)` | `oklch(17% 0.01 255)` |
| `--color-foreground` | `oklch(20% 0.02 255)` | `oklch(96% 0.004 255)` |
| `--color-card` | `oklch(100% 0.002 255)` | `oklch(20% 0.01 255)` |
| `--color-overlay` | `oklch(0% 0 0 / 42%)` | `oklch(0% 0 0 / 62%)` |

Los acentos dinámicos (`primary`, `danger`, `success`, `warning`, `info`) en dark mode se derivan desde las **bases** usando `oklch(from ...)`. Las bases también se pueden sobrescribir:

- `--primary-base: oklch(58% 0.17 198)`
- `--danger-base: oklch(58% 0.21 28)`
- `--success-base: oklch(62% 0.16 154)`
- `--warning-base: oklch(78% 0.17 82)`
- `--info-base: oklch(60% 0.12 238)`

### Sobrescribir tokens

**Sin Tailwind** — redeclarar variables después del `@import`:

```css
@import "@nichagiro/ui-primitives/style.css";

:root {
  --color-primary: oklch(50% 0.2 280);
  --color-primary-foreground: oklch(98% 0.01 280);
}

.dark {
  --color-primary: oklch(70% 0.15 280);
  --color-primary-foreground: oklch(18% 0.02 280);
}
```

También podés cambiar solo la **base** y el dark se ajusta automáticamente:

```css
@import "@nichagiro/ui-primitives/style.css";

:root {
  --primary-base: oklch(50% 0.2 280);
}
```

**Con Tailwind v4** — misma idea, solo importando primero Tailwind:

```css
@import "tailwindcss";
@import "@nichagiro/ui-primitives/style.css";

:root {
  --primary-base: oklch(50% 0.2 280);
}
```

Las bases disponibles: `--primary-base`, `--danger-base`, `--success-base`, `--warning-base`, `--info-base`.

> Las reglas sin `@layer` siempre ganan contra las que están dentro de cualquier capa, por eso `:root` simple alcanza para sobrescribir.

### React Hook Form (opcional)

```tsx
import { useForm } from 'react-hook-form'
import { Input } from '@nichagiro/ui-primitives'

function Form() {
  const { register, formState: { errors } } = useForm()
  return (
    <Input
      label="Nombre"
      error={errors.nombre?.message as string}
      {...register('nombre', { required: 'Campo requerido' })}
    />
  )
}
```

## Componentes

`Button` `Alert` `Chip` `Modal` `DataTable` `Pagination` `Panel` `Toaster`
`Input` `TextArea` `Select` `Check` `RadioGroup` `FileUpload`

Explorá ejemplos, props y variantes en → **[Storybook](https://nichagiro.github.io/ui-primitives)**

## Desarrollo

```bash
pnpm dev          # Demo app
pnpm build        # tsc -b && vite build && tailwindcss -i src/index.css -o dist/style.css
pnpm validate     # lint + doctor + test
```

## Licencia

MIT
