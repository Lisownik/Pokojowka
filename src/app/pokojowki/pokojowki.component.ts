import { Component } from '@angular/core';
import {BackButtonComponent} from "../back-button/back-button.component";
import {ActionButtonComponent} from '../action-button/action-button.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokojowki',
    imports: [
        BackButtonComponent
      , ActionButtonComponent
    ],
  templateUrl: './pokojowki.component.html',
  styleUrl: './pokojowki.component.css'
})
export class PokojowkiComponent {

  constructor(private router: Router) {
  }

  goToRoom() {
    this.router.navigate(['/pokojowka-widok']);

  }

}
