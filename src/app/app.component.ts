import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gitAngular';

  constructor() {
    console.log('Nuevas fuciones');
    console.warn("Cuidado");
    console.log("Prueba de conflictos")
  }
}
