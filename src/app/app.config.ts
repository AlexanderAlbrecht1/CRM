import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../enviroment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimationsAsync(),
    // importProvidersFrom(provideFirestore(() => getFirestore())),
    // importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
    // ),
    provideFirestore(() => getFirestore()),
  ],
};
