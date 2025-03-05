import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimationsAsync(),
    // importProvidersFrom(provideFirestore(() => getFirestore())),
    // importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'simple-crm-33f69',
          appId: '1:24672667530:web:d631a13fd4a22c89002a73',
          storageBucket: 'simple-crm-33f69.firebasestorage.app',
          apiKey: 'AIzaSyAmoAOyG-GNX1i3x8CYf5Oh1sECrG4bvYI',
          authDomain: 'simple-crm-33f69.firebaseapp.com',
          messagingSenderId: '24672667530',
        })
      ),
    // ),
    provideFirestore(() => getFirestore()),
  ],
};
