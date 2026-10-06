import { DestroyRef, inject } from '@angular/core';

/** Ejecuta `step` repetidamente; `step` devuelve los ms a esperar. Se limpia solo al destruir el componente. */
export function loop(step: () => number): void {
  let t: ReturnType<typeof setTimeout>;
  const run = () => { t = setTimeout(() => { run(); }, step()); };
  run();
  inject(DestroyRef).onDestroy(() => clearTimeout(t));
}
