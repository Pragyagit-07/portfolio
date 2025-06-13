import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
      { path: '', component: HeroComponent },
      { path: 'navbar', component: NavbarComponent },
    { path: 'about', component: AboutComponent }
];
