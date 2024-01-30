//No es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
//let persona2 = new Persona("Karla", "Juarez");

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //Sobreescribiendo el metodo de la clase Padre(Object)
  toString(){
    //Se aplica polimorfismo(multiples formas en tiempo de ejecucion)
    //El metodo que se ejecuta depende si es una referencia del tipo padre o tipo hijo
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //Llama el constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobreescritura
  nombreCompleto(){
    return super.nombreCompleto()+  ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
//persona1.nombre = " Juan Carlos"; //Set
//console.log(persona1.nombre); //Get

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
