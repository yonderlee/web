import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Angular 22: sin zone.js (zoneless por defecto).
export const appConfig: ApplicationConfig = { providers: [provideBrowserGlobalErrorListeners()] };
