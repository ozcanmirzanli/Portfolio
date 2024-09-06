import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];
