import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  output,
} from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ImpressumComponent,
    BurgerMenuComponent,
    MainContentComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  showMainContent = true;
  @Input() isMenuOpen: boolean = false;
  @Input() isScreenSmall: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();

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
    this.closeMenu.emit();
  }
}
