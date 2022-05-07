import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 20;

  get capitalizeNombre(): string {
    return this.nombre.toUpperCase();
  }

  heroDescription(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }

  cambiarHeroe(): void {
    this.nombre = 'Capitan America';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }
}
