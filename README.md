# IdsNova – Sitio web (Angular 22)

Requisitos: Node.js LTS compatible con Angular 22 (22.x o 24.x) y npm.

    npm install
    npm start          # http://localhost:4200
    npm run build      # salida en dist/idsnova/browser

## Estructura (cada componente = .ts + .html)
- `src/app/core/site.data.ts` → TODO el contenido (textos, servicios, FAQ, contacto). Edita aquí.
- `src/app/layout/` → cabecera y pie.
- `src/app/sections/` → una sección de la página = un componente.
- `src/app/shared/` → directivas (`reveal`, `tilt`) y fondo de partículas.
- `public/logo.png` → logo.  `src/styles.css` → estilos globales y tokens (variables CSS en `:root`).

## Buenas prácticas aplicadas
Componentes standalone, `OnPush`, signals, control flow (`@for`), sin zone.js, TypeScript estricto
y `strictTemplates`, contenido separado de la presentación, accesibilidad (focus visible,
`prefers-reduced-motion`) y diseño responsive.
