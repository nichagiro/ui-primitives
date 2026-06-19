# ui-primitives

Colección de componentes UI headless + form fields construidos con React y Tailwind CSS v4. Funcionan con cualquier librería de formularios o sin ninguna. React Hook Form es opcional.

## Instalación

```bash
pnpm add @nichagiro/ui-primitives
```

```bash
npm install @nichagiro/ui-primitives
```

```bash
yarn add @nichagiro/ui-primitives
```

### Dependencias

- `react` ≥ 19 (peer)
- `react-dom` ≥ 19 (peer)
- `react-hook-form` ≥ 7 (opcional — solo si usás los form fields con RHF)

## Setup

### 1. Tailwind v4

El bundle no incluye CSS. Necesitás Tailwind v4 configurado en tu proyecto.

```css
/* app.css */
@import "tailwindcss";
@import "@nichagiro/ui-primitives/tokens.css";
```

### 2. Design tokens

La librería exporta tokens semánticos en OKLCH que podés sobrescribir en tu `@theme`:

```css
@import "tailwindcss";
@import "@nichagiro/ui-primitives/tokens.css";

@theme {
  --color-primary: oklch(50% 0.2 160);
  --color-primary-foreground: oklch(98% 0.01 250);
  /* ... */
}
```

### 3. Dark mode

Agregá la clase `.dark` a un contenedor padre (ej: `<html>` o `<body>`).

```css
@custom-variant dark (&:where(.dark, .dark *));
```

### 4. React Hook Form (opcional)

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

### Form fields

| Componente | Props principales | Ref |
|---|---|---|
| `Input` | `label`, `error`, `required`, `placeholder` | `HTMLInputElement` |
| `TextArea` | `label`, `error`, `resize` (`none` / `vertical` / `both`) | `HTMLTextAreaElement` |
| `Select` | `label`, `error`, `options: { value, label }[]` | `HTMLSelectElement` |
| `Check` | `label`, `error`, `variant` (`checkbox` / `switch`) | `HTMLInputElement` |
| `RadioGroup` | `label`, `error`, `options: { label, value, disabled? }[]`, `orientation` (`vertical` / `horizontal`) | — |
| `FileUpload` | `label`, `error`, `accept`, `maxSize`, `onFilesChange` | `HTMLInputElement` |

### UI components

| Componente | Props principales |
|---|---|
| `Button` | `variant` (`solid` / `soft` / `ghost`), `colorScheme` (`primary` / `secondary` / `danger`), `size` (`sm` / `md` / `lg`), `loading` |
| `Alert` | `variant` (`info` / `success` / `warning` / `error`), `title`, `dismissible` |
| `Chip` | `variant` (`default` / `primary` / `danger`), `size` (`sm` / `md`), `onDismiss` |
| `Modal` | `open`, `onClose`, `title`, `size` (`sm` / `md` / `lg`), `footer` |
| `DataTable` | `columns`, `data`, `sortable`, `selectionMode`, `density`, `toolbarActions` |
| `Pagination` | `page`, `totalPages`, `totalItems`, `startRecord`, `endRecord`, `onPageChange`, `colorScheme` |
| `Toaster` / `toast` | `toast.success('Hecho')`, `toast.error('Error')`, `toast.info('Info')` |

## Desarrollo

```bash
pnpm dev        # Demo app en src/main.tsx
pnpm build      # tsc -b && vite build
pnpm lint       # ESLint
pnpm test       # Vitest (64 tests)
pnpm test:watch # Vitest watch mode
```

## Licencia

MIT
