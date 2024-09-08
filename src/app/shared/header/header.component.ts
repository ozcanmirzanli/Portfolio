import { CommonModule, NgStyle } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isMenuOpen: boolean = false; // Receive menu state from parent
  @Input() isScreenSmall: boolean = false; // Receive screen size state from parent
  @Output() openMenu = new EventEmitter<void>(); // Output event to notify parent to open the burger menu

  openBurgerMenu() {
    this.openMenu.emit(); // Emit event to parent component to open the menu
  }
}
