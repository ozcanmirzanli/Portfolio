import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];
