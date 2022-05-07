**estructura a tener en cuenta**
_decoraciones_ la decoración basica para crear un componente es la llamada Component.
al crearla es importante tener en cuenta:

- selector: es el nombre con el cual incorporare ese componente en el HTML del componente padre. Por ejemplo, app.component.ts es el higher component, todo lo que está dentro de el se renderizará. Lo unico mas alto que es es el INDEX.HTML en el cual nos encontramos el :
<body>
  <app-root></app-root>
</body>

por lo cual siguiendo con mi logica, el selector de app.component.ts sera "app-root"

- nombre de la class creada en el componente: este nombre es de suma importancia porque es el que utilizaré para declarar esa class y así ese componente dentro del modulo padre. Dentero de las declaraciones. Ejemplo:
  _declarations: [AppComponent, CounterComponent]_,

**modules**:

- declaraciones: fundamentales para crear el array de componentes, incorporandolos teniendo en cuenta el nombre de su class.

**eventos** a diferencia de react que por ejemplo tengo el onClick, an Angular se define el evento en el HTML entre parentesis ejemplo:

```
<button (click)="numero = numero + 1">+1</button>

```

comos e puede observar, puedo agregarle la lógica enel mismo HTML en forma de string. Pero es mas recomendable hacer la logica dentro de la clase en forma de Method.

ejemplo:

```
- *en la CLASS*
incrementar() {
    this.numero++;
  }

- *en HTML*
<button (click)="incrementar()">+1</button>

```

**usar propiedad de una class como parametro de un metodo**
supongamos que dentro de la class thengo esta propiedad:
base: number = 5;
y en el app.component.html estoy usando el metodo:
acumular(valor: number) {
this.numero += valor;
}
de la siguiente forma puedo pasar esa propiedad como argumento:

<button (click)="acumular(base)">{{ base }}</button>

---

**DIRECTIVAS**
**crear listas simulando el array.map que uso en React** en este caso voy directamente al HTML del componente y lo llevo acabo allí. Para hacerlo en la class del component tengo que tener definida el array sobre el cual hare este mapeo. Pero en este caso la forma de hacerlo es la siguiente. Puedo tambien definir si necesito el indice el \*ngFor de la siguiente manera:
\*ngFor="let hero of heroes ; let i = index"
Teninedo en cuenta que en la class del componete tengo definido el array: string[]= ['Aquaman', 'Superman', 'Batman', 'Ironman', 'Spiderman'];
Para conseguir una lista, en el HTML defino

<ul>
  <li *ngFor="let hero of heroes">
    {{ hero }}
  </li>
</ul>

**if Statemens se lleva a cabo con la directiva _ngIf_**
tambien dentro del HTML, ver ejemplo, teniendo en cuenta que heroeBorrado es una propiedad de mi class el cual correcponde a un array:

<h1 *ngIf="heroeBorrado.length > 0 ; else noBorrado" >Heroes Eliminados:</h1>
<ul>
  <li *ngFor="let borrado of heroeBorrado">
    {{ borrado }}
  </li>
</ul>

<ng-template #noBorrado>

<h3>Aún no hay nada borrado </h3>
<ng-template>

_importante resaltar el else_ se ejecutará si no se cumple laprimer condicion. Para lo cual hay que definir lo que se conoce como una _referencia local_, se llama así ya que solo existira en el HTML y renderizare en el DOM un _ng-template_ especifico solo si esa referencia local es true, utilizandola con un # como en el ejemplo.

---

**MODULES**
muy importantes, es para dividir y organzar el projecto. De lo contrario en el app.module se importarían un millonn de componente.
Lo que se trata es dividir los componentes y agrupar los relacionados bajo el mismo modulo. La estructura Basica de un modulo es :

@NgModule({
declarations: [HeroeComponent, ListadoComponent],
exports: [ListadoComponent],
imports: [CommonModule],
})
export class HeroesModule {}

- NgModule : el decorador
- declaraciones: son los componentes que estarán dentro del modulo.
- exports: son cosas que se utilizaran fuera del modulo.
- import : son siempre modulos.

Ahora bien, como conecto este modulo con el modulo padre? - Simplemente agrego este modulo al _imports_ del componente padre y eso será todo.

otra cosa a tener en cuenta es si uso **directivas** dentro del modulo. Si uso, es importante agregar al _imports_ del modulo el conocido **CommonMoudle**, de lo contrario las directivas no funcionaran.
