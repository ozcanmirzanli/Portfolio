import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  @Input() isMenuOpen: boolean = false; // Input from parent component
  @Output() closeMenu = new EventEmitter<void>(); // Output event to notify parent to close menu

  links = [
    { href: '#about-me', text: 'About me' },
    { href: '#my-skills', text: 'Skills' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' },
  ];

  closeBurgerMenu() {
    this.closeMenu.emit(); // Emit event to parent component to close the menu
  }
}
