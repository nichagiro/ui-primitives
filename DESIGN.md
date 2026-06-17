# Design System

## Color model

Los tokens usan OKLCH: `oklch(L S H)`
- **L** — luminosidad (0% negro → 100% blanco)
- **S** — saturación (0% gris → >30% intenso)
- **H** — hue/tonalidad (0–360 grados)

## Tokens

### `--color-primary`
- Light: `oklch(55% 0.22 264)` — azul medio
- Dark:  `oklch(75% 0.15 264)` — azul claro (no deslumbra)
- **Usado en:** `text-primary` (label FieldWrapper), `focus-within:border-primary` (borde al enfocar)

### `--color-foreground`
- Light: `oklch(14.5% 0.025 264)` — casi negro
- Dark:  `oklch(98% 0.01 264)` — casi blanco
- **Usado en:** `text-foreground` (texto del Input, título demo)

### `--color-muted-foreground`
- Light: `oklch(46% 0.02 264)` — gris medio
- Dark:  `oklch(65% 0.02 264)` — gris claro
- **Usado en:** `placeholder:text-muted-foreground` (placeholder del Input)

### `--color-danger`
- Light: `oklch(53% 0.22 27)` — rojo (H=27)
- Dark:  `oklch(42% 0.15 27)` — rojo oscuro
- **Usado en:** `text-danger` (mensaje de error en FieldWrapper)

### `--color-border`
- Light: `oklch(91% 0.01 264)` — gris muy claro
- Dark:  `oklch(22% 0.02 264)` — gris oscuro
- **Usado en:** `border-border` (borde del FieldWrapper, borde del botón demo)

### `--color-ring`
- Light: `oklch(55% 0.22 264)` — azul medio (mismo que primary)
- Dark:  `oklch(75% 0.15 264)` — azul claro
- **Usado en:** `focus-within:ring-ring/30` (sombra de foco en FieldWrapper)

### `--color-background`
- Light: `oklch(100% 0 0)` — blanco
- Dark:  `oklch(14.5% 0.025 264)` — casi negro
- **Usado en:** fondo de página (lo aplica el consumidor)

### `--color-card`
- Light: `oklch(100% 0 0)` — blanco
- Dark:  `oklch(14.5% 0.025 264)` — casi negro
- **Usado en:** `bg-card` (fondo del FieldWrapper)

### `--color-secondary`
- Light: `oklch(55% 0.01 264)` — gris
- Dark:  `oklch(22% 0.02 264)` — gris oscuro
- No usado por componentes actuales (reservado para futuros usos: backgrounds secundarios, badges, etc.)

### `--color-secondary-foreground`
- Light: `oklch(14.5% 0.025 264)`
- Dark:  `oklch(98% 0.01 264)`
- No usado actualmente

### `--color-card-foreground`
- Light: `oklch(14.5% 0.025 264)`
- Dark:  `oklch(98% 0.01 264)`
- No usado actualmente

### `--color-primary-foreground`
- Light: `oklch(98% 0.01 264)`
- Dark:  `oklch(14.5% 0.025 264)`
- No usado actualmente

### `--color-danger-foreground`
- Light: `oklch(98% 0.01 264)`
- Dark:  `oklch(98% 0.01 264)`
- No usado actualmente

## Customización

El consumidor define estos mismos tokens en su `@theme` y la librería los resuelve automáticamente. Los tokens
no usados se conservan para futuros componentes y para mantener coherencia global del design system.
