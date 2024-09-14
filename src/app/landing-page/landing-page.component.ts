import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent {}
