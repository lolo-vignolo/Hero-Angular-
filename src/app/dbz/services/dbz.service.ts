import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  // al ser private, solo se podrá modificar a traves de este componente
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 50000,
    },
    {
      nombre: 'Vegeta',
      poder: 20000,
    },
  ];

  //podría hacer un return this._personajes, pero lo hago así para que sea más seguro. CRreando un clon

  get infoToExport() {
    return [...this._personajes];
  }

  constructor() {}

  agregarPeronaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
