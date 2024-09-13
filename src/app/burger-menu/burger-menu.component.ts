import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
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

  /**
   * Handles changes to the component's input properties.
   * Toggles the 'no-scroll' class on the body element
   * based on the value of 'isMenuOpen'.
   *
   * @param {SimpleChanges} changes - An object containing the previous and current values of the component's inputs.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isMenuOpen']) {
      if (this.isMenuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }

  closeBurgerMenu() {
    this.closeMenu.emit(); // Emit event to parent component to close the menu
  }
}
