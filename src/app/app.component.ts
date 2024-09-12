import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';

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
