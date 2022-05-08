import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input() inputPersonajes: Personaje[] = [];

  //de esta forma creo el acceso al service.
  constructor(private dbzService: DbzService) {}

  //de esta forma traigo la data del service.
  get infoToReceive() {
    return this.dbzService.infoToExport;
  }
}
