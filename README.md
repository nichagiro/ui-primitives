# ui-primitives

Colección de componentes UI headless + form fields con React y Tailwind CSS v4.
Funciona con cualquier librería de formularios o sin ninguna. React Hook Form es opcional.

```bash
pnpm add @nichagiro/ui-primitives
```

## Setup

### Tailwind v4

```css
@import "tailwindcss";
@import "@nichagiro/ui-primitives/tokens.css";
```

Los tokens semánticos en OKLCH se pueden sobrescribir en tu `@theme`.

### Dark mode

Agregá la clase `.dark` a un contenedor padre:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

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
pnpm build        # tsc -b && vite build
pnpm validate     # lint + doctor + test
```

## Licencia

MIT
