import { Component } from '@angular/core';

@Component({
  selector: 'Contador-component',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base de este calculo es <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">{{ -base }}</button>
  `,
})
export class CounterComponent {
  titulo: string = 'Contador App';
  numero: number = 0;
  base: number = 5;

  // incrementar(valor: number) {
  //   this.numero += valor;
  // }

  // decrementar(valor: number) {
  //   this.numero -= valor;
  // }
  acumular(valor: number) {
    this.numero += valor;
  }
}
