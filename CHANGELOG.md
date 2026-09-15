# Changelog

Todos los cambios notables de este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/)
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.8.2] - 2026-09-15

### Cambiado
- Eliminado `src/lib/colorSchemes.ts`: cada componente vuelve a definir sus mapas de clases por color scheme en archivos locales (`styles.ts`).
- Componentes de formulario reorganizados en carpetas propias (`Input/`, `TextArea/`, `Check/`, `RadioGroup/`, `FileUpload/`, `FieldWrapper/`, `FormError/`), cada una con su `types.ts`, `styles.ts` e `index.ts`, siguiendo el patrón de `Select/`. Types por componente en lugar de `form/types.ts`. Sin cambios en la API pública.
- Migración del merge de clases a la utilidad `cn()` en componentes UI (Alert, Button, Chip, Modal, DataTable, Icons).

## [1.8.0] - 2026-09-11

### Añadido
- `DataTable`: prop `disabledRows` — array de row keys que deshabilita filas (sin selección, expansión, edición ni `onRowClick`). Funciona en modos `single` y `multiple`; `select-all` ignora las filas deshabilitadas. Estilo visual: `opacity-50` + `pointer-events-none` + `aria-disabled`.
- Story `DisabledRows` y secciones de demo con filas deshabilitadas.

## [1.7.2] - 2026-09-10

### Corregido
- `Select`: soporte uniforme de `value` como `string | number` en opciones. Comparaciones tipo-agnósticas (`String()` en ambos lados) en toggle de selección, selectAll, labels seleccionados y estado visual del dropdown — elimina duplicación tipo `[1,1,1,1,1]` al seleccionar opciones con value numérico.
- `Select`: eliminada conversión `Number()` del sync con react-hook-form para que los valores del hidden input se conserven como string tal cual llegan del DOM.

### Cambiado
- `Select`: el botón "Deseleccionar todos" ahora siempre muestra "Seleccionar todos".

## [1.7.1] - 2026-09-10

### Añadido
- `CHANGELOG.md` con historial de versiones y flujo de release.

### Corregido
- `Select`: eliminado scroll automático fantasma al hacer hover con mouse en opciones del dropdown en modo múltiple con `selectAll`.

### Cambiado
- Refactor de tipos de formulario: centralización en `src/components/form/types.ts`, extracción de `FormError` y división de `Select` en carpeta.
- Centralización de los color schemes en `src/lib/colorSchemes.ts`.

## [1.7.0] - 2026-09-02

### Añadido
- Componente `Loading` con variantes spinner, dots y bars.

## [1.6.1] - 2026-09-02

### Corregido
- Rotación del spinner en el estado de carga de `Button`.

## [1.6.0] - 2026-08-26

### Añadido
- Componente `Tabs` con variantes underline, pill y cards.
- Soporte de props en los inputs del `CellEditor` de `DataTable`.

## [1.5.0] - 2026-08-26

### Cambiado
- `Select` renderiza el dropdown en un overlay ancestro cuando está dentro de dialog/modal.

## [1.4.4] - 2026-08-18

### Corregido
- Ruta de tipos en `package.json` (`dist/src/index.d.ts` → `dist/index.d.ts`).

## [1.4.3] - 2026-08-18

### Corregido
- `DataTable`: separación de props `scrollable`/`scrollHeight` y bug de scroll virtual.

## [1.4.2] - 2026-08-13

### Cambiado
- `DataTable`: windowing manual en modo scrollable vía `rowHeight`, sin virtualizar con `renderExpanded`.

## [1.4.1] - 2026-08-13

### Corregido
- El editor de input en `DataTable` solo hace commit de `onCellEdit` cuando el valor cambia.

## [1.4.0] - 2026-08-12

### Añadido
- Edición inline en `DataTable` (input/select/check) con doble-clic o ícono de lápiz.

## [1.3.6] - 2026-08-06

### Añadido
- `DataTable`: expandir con click en la fila, prop `expandOnRowClick` y `rowClassName`.

## [1.3.5] - 2026-08-04

### Cambiado
- `Select` renderiza el dropdown vía portal a `document.body`.
- Documentación de `Toast` en Storybook.

## [1.3.4] - 2026-07-08

### Eliminado
- Prop `toolbarActions` de `DataTable`.

## [1.3.3] - 2026-07-07

### Cambiado
- `DataTable`: la prop `card` se reemplaza por `shadow-sm` permanente.

## [1.3.2] - 2026-07-03

### Cambiado
- `Panel`: se elimina la lógica de borde coloreado; siempre renderiza el botón del header con chevron.

## [1.3.1] - 2026-07-03

### Cambiado
- CSS: consolidación de `tokens.css` y `style.css` en un único `src/index.css` con estructura `@layer`.

## [1.3.0] - 2026-07-03

### Añadido
- `DataTable`: filas expandibles con panel de detalle + reestructuración de tabs del demo.

## [1.2.8] - 2026-06-30

### Añadido
- `Modal`: posicionamiento y estilos mejorados con stories y tests adicionales.

## [1.2.7] - 2026-06-30

### Corregido
- `Modal`: posicionamiento fijo y auto-centrado del elemento `dialog`.

## [1.2.6] - 2026-06-30

### Corregido
- `Select`: posición fija + detección de flip para overflow dentro de `Panel`.

## [1.2.5] - 2026-06-23

### Añadido
- Prop `isRequired` en componentes de formulario (asterisco visual sin validación nativa).

## [1.2.4] - 2026-06-23

### Cambiado
- Limpieza y ajustes en componentes de formulario, stories y tests.

## [1.2.3] - 2026-06-23

### Cambiado
- Refactor de componentes de formulario y `Panel`/`Toast` con actualización de stories y tests.

## [1.2.2] - 2026-06-22

### Añadido
- CSS compilado, carpeta `styles`, limpieza de `DESIGN.md` y documentación de theming en `README`.

## [1.2.1] - 2026-06-22

### Corregido
- Externalización de `jsx-runtime` y ruta de tipos en `package.json`.

## [1.2.0] - 2026-06-22

### Añadido
- Animación de colapso/expansión en `Panel`.

## [1.1.0] - 2026-06-22

### Añadido
- Componente `Panel`.
- Actualización de configuración de ESLint.

### Cambiado
- Eliminación de CI.
- Corrección de tests de `Modal` y `RadioGroup`.

## [1.0.0] - 2026-06-19

### Añadido
- Primera versión estable de la librería con README, CI y configuración de publicación.