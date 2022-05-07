import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Ironman', 'Spiderman'];
  heroeBorrado: string[] = [];
  borrarHero() {
    const borrado = this.heroes.shift() || '';

    this.heroeBorrado.push(borrado);
  }
}
