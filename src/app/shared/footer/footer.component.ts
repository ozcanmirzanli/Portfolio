import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterOutlet, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
