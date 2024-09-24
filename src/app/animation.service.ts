import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  // Helper function to add/remove the animation class
  handleElementAnimation(element: Element | null, offset: number = 100) {
    if (element) {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight - offset) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    }
  }
}
