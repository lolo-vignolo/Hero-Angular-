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

```

<button (click)="acumular(base)">{{ base }}</button>
```

---

**DIRECTIVAS**
**crear listas simulando el array.map que uso en React** en este caso voy directamente al HTML del componente y lo llevo acabo allí. Para hacerlo en la class del component tengo que tener definida el array sobre el cual hare este mapeo. Pero en este caso la forma de hacerlo es la siguiente. Puedo tambien definir si necesito el indice el \*ngFor de la siguiente manera:
\*ngFor="let hero of heroes ; let i = index"
Teninedo en cuenta que en la class del componete tengo definido el array: string[]= ['Aquaman', 'Superman', 'Batman', 'Ironman', 'Spiderman'];
Para conseguir una lista, en el HTML defino

```
<ul>
  <li *ngFor="let hero of heroes">
    {{ hero }}
  </li>
</ul>
```

**if Statemens se lleva a cabo con la directiva _ngIf_**
tambien dentro del HTML, ver ejemplo, teniendo en cuenta que heroeBorrado es una propiedad de mi class el cual correcponde a un array:

```

<h1 *ngIf="heroeBorrado.length > 0 ; else noBorrado" >Heroes Eliminados:</h1>
<ul>
  <li *ngFor="let borrado of heroeBorrado">
    {{ borrado }}
  </li>
</ul>

<ng-template #noBorrado>

<h3>Aún no hay nada borrado </h3>
<ng-template>

```

_importante resaltar el else_ se ejecutará si no se cumple laprimer condicion. Para lo cual hay que definir lo que se conoce como una _referencia local_, se llama así ya que solo existira en el HTML y renderizare en el DOM un _ng-template_ especifico solo si esa referencia local es true, utilizandola con un # como en el ejemplo.

---

**MODULES**
muy importantes, es para dividir y organzar el projecto. De lo contrario en el app.module se importarían un millonn de componente.
Lo que se trata es dividir los componentes y agrupar los relacionados bajo el mismo modulo. La estructura Basica de un modulo es :

```

@NgModule({
declarations: [HeroeComponent, ListadoComponent],
exports: [ListadoComponent],
imports: [CommonModule],
})
export class HeroesModule {}

```

- NgModule : el decorador
- declaraciones: son los componentes que estarán dentro del modulo.
- exports: son cosas que se utilizaran fuera del modulo.
- import : son siempre modulos.

Ahora bien, como conecto este modulo con el modulo padre? - Simplemente agrego este modulo al _imports_ del componente padre y eso será todo.

otra cosa a tener en cuenta es si uso **directivas** dentro del modulo. Si uso, es importante agregar al _imports_ del modulo el conocido **CommonMoudle**, de lo contrario las directivas no funcionaran.

**eventos formularios** la función en el HTML recibe el argumento _$event_ , importante es el signo $, luego en el method del componente puedo pasar event para hacer el preventDefault(). Esta es una forma de hacerlo. La otra es no definir nada, usar esa función que llama al submit e importat en el modulo el llamado **FormModule**, y cambiar en el HTML el submit por ngSubmit. Ver ejemplos:

Forma basica:

```
HTML
 <form (submit)="agregar($event)">

COMP
agregar(event: any) {
    event.preventDefault();}
```

Con FormModule:

```
  <form (ngSubmit)="agregar()">

  agregar() {}

```

**eventos van a usar ()**
**[value] = usuario.name** aquí enlazo alguna info de un objeto del componente en el value o alguna attributo en este caso del input.

**hay diferentes formas de agarrar el input** una sería conectando el _value_ del input con el atributo de mi componente : [value]: usuario.name y luego ejecutar el elvento (input) creando una nueva funcion creada en el componente que recibiría el evento, bla bla bla. Como en React. Pero Aquí aparece algo interesante que resuelve todo en pogo codigo el **ngModel** , el cual utilizando la sintaxis **[(ngModel)]** y asignandole el atributo del objeto creado en el componente que quiero cambiar, realiza todo auomaticamente. _importante_ debo crear dentro del input una nueva propiedad llamada name, con el nombre d elo que estoy cambiando.

```
  <input
        type="number"
        placeholder="Poder"
        name="poder"
        [(ngModel)]="nuevo.poder"
      />

```

**pipes** sirven para tranformar visualmente la información y se cologan luego de un | .

**crear una carpeta con Interfaces** las cuales puedo importar y utilizarlas en cualquier componente del modulo donde se ubica.

---

🛑**info de componente padre a componente hijo - SE ENCUENTRA EN EL REALASE** 🚩🚧
**@Input() inputPersonajes: Personaje[] = [];**
comunicacion entre componentes, a diferencia de lo que sucede en ract que uso props, aquí utilizo entre otras cosas el decorador **@Input()** con el cual creeare un elemento con las caract. basicas del elemepo a recibir.

ejemplo:
En el componente personajes necesito la información que proviene de un array ubicado en el componente main.

```
En el main-component tengo:
 personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 50000,
    },]

Por lo que en el componente donde nececito la info haré:
 @Input() inputPersonajes: Personaje[] = [];

```

Luego debo dirigirme a los HTMLs de dichos componentes y realizar lo sigueinte:

```
main-component.HTML: voy a insertar el componente y hacer el cambio de info. Lo que está entre [] será la referencia del nuevo componente, a lo que igualo con el nombre del elemento que necesito del componente padre.

<app-personajes [inputPersonajes]="personajes"> </app-personajes>

En el HTML hijo:

 <li *ngFor="let hero of inputPersonajes">
    {{ hero.nombre }} - {{ hero.poder | number }}
  </li>

```

**Info componente Hijo al componente padre SE ENCUENTRA EN EL REALASE** 😪💥
**@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();** de esta forma lo unico que hago es crear un _evento_ el cual se ejecutará como todos los enventos, en el HTML usando (). Que hace ese evento?.
1- Lo especifico en el metodo de su componente, en este caso:

```
@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
agregar() {
    if (this.nuevo.nombre !== '') {
      this.onNewPersonaje.emit(this.nuevo);
      }

```

Teniendo en cuenta que this.nuevo, es un objeto creado una interface Personajes, lo que hará este evento es enviar la info creada al compoonente padre a traves del _emit()_

2- voy al HTML del componente padre.

```
  <app-agregar (onNewPersonaje)="agregarPeronaje($event)"></app-agregar>

- aquí onNewPersonaje es el evento que acabo de crear.
- agregarPersonaje($event) es un metodo que se crea en el componente padre, el cual cierra el ciclo, agregando el nuevo personaje.
```

3- voy al componente padre, a crear el metodo _agregarPeronaje()_

```
 agregarPeronaje(personaje: Personaje) {
    if (this.nuevo.nombre !== '') {
      this.personajes.push(personaje);
    }

- como se decreto en el componente hijo, el evento emite un personaje y este metodo recibe un personaje, el cual luego se pushea al array que convive en el componente padre.
```

---

🧨👉 **manejo de data a traves de _servicios_ en este caso enviar info del servicio a los componentes.** ⛔✔👁‍🗨
Los servicios son de las herramientas mas poderosas que tiene Angunlar, funcionan de una forma muy similar al context de React.
Comos funciona?.

- Primero debo crear un _servicio_ el cual sera una class con un decorador especial. Por ejemplo

```
@Injectable()
export class DbzService {

}

```

- segudo agrego el servicio dentro del modulo donde se manejara la información, para ello necesito hacerlo a traves de un **provicer**.

- tercero, Para enviar la data lo puedo hacer de distintas formas, una de las mas utilizadas es creando un **get** en el servicio, clonando la info que quiero exportar de ese servicio la cual la retornaré en el get.

```
Teniendo en cuenta que quiero exportar un objeto de personajes que tengo en el servicio, puedo hacer:

  get infoToExport() {
    return [...this._personajes];
  }
```

- Tercero voy al componente donde quiero uilizar información que me facilita este **service** y dentro del contructor de dicho componente llamo al _servicio_. Ejemplo, siendo el **DbzService** el servicio que estoy importando. De esta forma creo una especie de instancia de la información que estoy enviando.

```
  constructor(private dbzService: DbzService) {}

```

-cuarto, una vez logrado esto utilizo la información, teniendo en cuenta como fue enviada. Ejemplo:

```
 //de esta forma creo el acceso al service.
  constructor(private dbzService: DbzService) {}

  //de esta forma traigo la data del service.
  get infoToReceive() {
    return this.dbzService.infoToExport;
  }

```

Luego desde el HTML, puedo utilizar esa info. Por ejemplo en un \*ngFor

```
<ul>
  <li *ngFor="let hero of infoToReceive">
    {{ hero.nombre }} - {{ hero.poder | number }}
  </li>
</ul>

```

**lo mismo puedo hacer con un metodo creado en el service**, creo la instancia en el contructor del componente donde lo quiero utilizar, y luego hago una clase de callBack. O sea agrego a ese metodo dentro de un metodo que se encuentr aen el componente el cual se ejecutara siguiendo las ordenes de los codeado en el HTML de ese mismo ocmponente.

---
