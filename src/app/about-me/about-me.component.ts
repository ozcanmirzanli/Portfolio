import { AnimationService } from './../animation.service';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AboutMeComponent {
  constructor(private animationService: AnimationService) {}

  // Scroll event listener
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const aboutMeText = document.querySelector('.about-me-text');
    const photoContainer = document.querySelector('.photo-container');

    this.animationService.handleElementAnimation(aboutMeText, 100);
    this.animationService.handleElementAnimation(photoContainer, 100);
  }
}
