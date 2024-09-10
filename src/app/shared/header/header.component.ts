import { CommonModule, NgStyle } from '@angular/common';
import {
  Component,
  Output,
  Input,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isMenuOpen: boolean = false; // Receive menu state from parent
  @Input() isScreenSmall: boolean = false; // Receive screen size state from parent
  @Output() openMenu = new EventEmitter<void>(); // Output event to notify parent to open the burger menu

  activeLink: string = '';

  links = [
    { href: '#about-me', text: 'About me' },
    { href: '#my-skills', text: 'Skills' },
    { href: '#portfolio', text: 'Portfolio' },
  ];

  toggleBurgerMenu() {
    this.openMenu.emit(); // Emit event to parent component to open the menu
  }

  setActiveLink(link: string) {
    // Set active link on click
    this.activeLink = link;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkActiveLink(); // Check which link should be active on scroll
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
