import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';

  isMenuOpen: boolean = false;
  isScreenSmall: boolean = window.innerWidth < 1100;

  closeBurgerMenu() {
    this.isMenuOpen = false;
  }

  openBurgerMenu() {
    this.isMenuOpen = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isScreenSmall = window.innerWidth < 1100; // Dynamically check screen size
  }
}
