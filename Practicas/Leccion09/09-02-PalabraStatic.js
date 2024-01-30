class Persona {
//Atributo estatico
  static contadorObjetosPersona = 0;

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
    console.log("Se incrementa contador:" + Persona.contadorObjetosPersona);
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
  toString(){
    return this.nombreCompleto();
  }
  static saludar(){
    console.log("Saludos desde metodo static")
  }
  static saludar2(persona){
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); 
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  nombreCompleto(){
    return super.nombreCompleto()+  ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar(); No es posible llamar un metodo static desde un objeto
//Mandando a llamar el metodo desde la clase
Persona.saludar();
Empleado.saludar();
//Mandando a llamar el metodo con un objeto
Persona.saludar2(persona1);
Empleado.saludar2(empleado1);
//---------------------------------------------

//Mandando a llamar el atributo desde un objeto
console.log(persona1.contadorObjetosPersona);
//Mandando a llamar el atributo desde una clase
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);