import { Component, HostListener, inject, Renderer2 } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * AppComponent serves as the root component for the application.
 * It manages the state of the burger menu and adjusts the layout
 * based on the screen size.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MainContentComponent,
    FooterComponent,
    HeaderComponent,
    BurgerMenuComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';

  languages = ['en', 'de'];
  public translateService = inject(TranslateService);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
    this.updateLangClass(defaultLang);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    this.updateLangClass(lang);
  }

  updateLangClass(lang: string) {
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
      this.renderer.removeClass(htmlTag, 'lang-en');
      this.renderer.removeClass(htmlTag, 'lang-de');
      this.renderer.addClass(htmlTag, `lang-${lang}`);
    }
  }

  // Method to get image source based on language code
  getImageSrc(lang: string): string {
    switch (lang) {
      case 'de':
        return 'assets/img/german.png';
      case 'en':
        return 'assets/img/english.png';
      default:
        return 'assets/img/english.png';
    }
  }

  isMenuOpen: boolean = false;
  isScreenSmall: boolean = window.innerWidth < 1100;

  /**
   * Toggles the burger menu's open/closed state.
   */
  toggleBurgerMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Closes the burger menu by setting its state to closed.
   */
  closeBurgerMenu() {
    this.isMenuOpen = false;
  }

  /**
   * Listens to the window's resize event and updates the `isScreenSmall` property
   * based on the current window width.
   *
   * @param event - The resize event object.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isScreenSmall = window.innerWidth < 1100; // Dynamically check screen size
  }
}
