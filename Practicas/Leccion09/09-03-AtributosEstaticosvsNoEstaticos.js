class Persona {
//Atributo de nuestra clase
  static contadorObjetosPersona = 0; 
  email = "Valor default email"; //Atributo de nuestros objetos

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

Persona.saludar();
Empleado.saludar();
Persona.saludar2(persona1);
Empleado.saludar2(empleado1);
//---------------------------------------------

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Persona.email);