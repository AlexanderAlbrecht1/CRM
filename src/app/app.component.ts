import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from '@ngx-translate/core';
import { VisitorService } from './services/visitor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterLinkActive,
    RouterLink,
    MatSlideToggleModule,
    TranslateModule,
    TranslatePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CRM';
  isDarkMode = false;
  isChecked = false;
  currentLanguage: string;

  constructor(
    private translationService: TranslationService,
    private visitorService: VisitorService
  ) {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
    this.currentLanguage = this.translationService.currentLanguage;
    this.isChecked = this.currentLanguage === 'de';
  }

  ngOnInit(): void {
    this.visitorService.logVisitor();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.body.classList.toggle('light-mode', !this.isDarkMode);
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translationService.switchLanguage(newLang);
    this.currentLanguage = newLang;
    this.isChecked = newLang === 'de';
  }

}
