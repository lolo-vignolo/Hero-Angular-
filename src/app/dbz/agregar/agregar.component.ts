import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //recibe info del componente padre
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //envío info al componente padre, de esta forma se puede actualizar el array de personajes. <T>Personaje
  // creo un evento personalizado, el cual envía un nuevo personaje al componente padre
  //@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzPersonajes: DbzService) {}

  //no lamo al preventDefault() por ques estoy uando el FormModule, ver README.
  agregar() {
    if (this.nuevo.nombre !== '') {
      this.dbzPersonajes.agregarPeronaje(this.nuevo);

      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }
}
