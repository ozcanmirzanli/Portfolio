import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MainPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    ImpressumComponent,
    BurgerMenuComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
  showMainContent = true;
  isMenuOpen: boolean = false;
  isScreenSmall: boolean = window.innerWidth < 1100;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMainContent =
          event.url !== '/impressum' && event.url !== '/privacy';
      }
    });
  }

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
