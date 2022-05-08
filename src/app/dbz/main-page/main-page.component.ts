import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 50000,
    },
    {
      nombre: 'Vegeta',
      poder: 20000,
    },
  ];

  agregarPeronaje(personaje: Personaje) {
    if (this.nuevo.nombre !== '') {
      this.personajes.push(personaje);
    }
  }
}
