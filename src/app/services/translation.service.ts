import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  get currentLanguage(): string {
    return this.translate.currentLang;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.languageSubject.next(language);
  }
}
