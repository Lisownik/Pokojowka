import { Component } from '@angular/core';
import {BackButtonComponent} from '../back-button/back-button.component';
import {ActionButtonComponent} from '../action-button/action-button.component';

@Component({
  selector: 'app-pokojowka-widok',
  imports: [
    BackButtonComponent
    , ActionButtonComponent
  ],
  templateUrl: './pokojowka-widok.component.html',
  styleUrl: './pokojowka-widok.component.css'
})
export class PokojowkaWidokComponent {

}
