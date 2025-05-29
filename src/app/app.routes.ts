import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokojowkiComponent } from './pokojowki/pokojowki.component';
import { PotkiComponent } from './potki/potki.component';
import {PokojowkaWidokComponent} from './pokojowka-widok/pokojowka-widok.component';
import {PotkaWidokComponent} from './potka-widok/potka-widok.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokojowki', component: PokojowkiComponent },
  { path: 'potki', component: PotkiComponent },
  { path: 'pokojowka-widok', component: PokojowkaWidokComponent },
  {path: 'potka-widok', component: PotkaWidokComponent}
];
