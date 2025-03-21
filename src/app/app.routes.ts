import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'Nav', component: NavComponent},
  {path : 'about', component: AboutComponent},
  {path : 'contact', component: ContactComponent},
];
