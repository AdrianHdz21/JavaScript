//Funcion constructor de objetos tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
//Prototype
Persona.prototype.tel = "443322119";

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
padre.tel = "554433122";
console.log(padre.tel);
let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
madre.tel = "577121233";
console.log(madre.tel);
