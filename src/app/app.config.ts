import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../enviroment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './services/translate-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimationsAsync(),
    // importProvidersFrom(provideFirestore(() => getFirestore())),
    // importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
    // ),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
    provideTranslateService({

    })
  ],
};
