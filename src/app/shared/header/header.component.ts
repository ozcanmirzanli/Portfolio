import { CommonModule, NgStyle } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, CommonModule, RouterLinkActive],
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

  openBurgerMenu() {
    this.openMenu.emit(); // Emit event to parent component to open the menu
  }

  setActiveLink(link: string) {
    this.activeLink = link; // Set the active link when a link is clicked
  }
}
