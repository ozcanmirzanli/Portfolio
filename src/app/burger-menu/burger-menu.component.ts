import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BurgerMenuComponent {
  @Input() isMenuOpen: boolean = false; // Input from parent component
  @Output() closeMenu = new EventEmitter<void>(); // Output event to notify parent to close menu

  links: { href: string; textKey: string }[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initializeLinks();
  }

  initializeLinks() {
    this.links = [
      { href: '#about-me', textKey: 'HEADER.ABOUT_ME' },
      { href: '#my-skills', textKey: 'HEADER.SKILLS' },
      { href: '#portfolio', textKey: 'HEADER.PORTFOLIO' },
      { href: '#contact', textKey: 'HEADER.CONTACT' },
    ];
  }

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
