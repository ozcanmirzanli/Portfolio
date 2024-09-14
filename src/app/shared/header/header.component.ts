import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnInit,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;
  @Input() isScreenSmall: boolean = false;
  @Input() currentLang: string = '';
  @Input() languages: string[] = [];
  @Input() changeLanguage!: (lang: string) => void;
  @Input() getImageSrc!: (lang: string) => string;
  @Output() openMenu = new EventEmitter<void>();
  activeLink: string = '';

  links: { href: string; textKey: string }[] = [];

  public translateService = inject(TranslateService);

  ngOnInit() {
    this.initializeLinks();
  }

  initializeLinks() {
    this.links = [
      { href: '#about-me', textKey: 'HEADER.ABOUT_ME' },
      { href: '#my-skills', textKey: 'HEADER.SKILLS' },
      { href: '#portfolio', textKey: 'HEADER.PORTFOLIO' },
    ];
  }

  getBrightnessClass(lang: string): string {
    return lang === this.translateService.currentLang ? 'bright' : 'dim';
  }

  toggleBurgerMenu() {
    this.openMenu.emit();
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkActiveLink();
  }

  checkActiveLink() {
    let foundActiveLink = false;

    this.links.forEach((link) => {
      const section = document.querySelector(link.href);

      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is partially within the viewport
        if (rect.top + 200 < window.innerHeight && rect.bottom > 0) {
          this.activeLink = link.href;
          foundActiveLink = true;
        }
      }
    });

    // If no section is found in viewport, reset the active link
    if (!foundActiveLink) {
      this.activeLink = '';
    }
  }
}
