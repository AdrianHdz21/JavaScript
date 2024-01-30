
//Funcion constructor de objetos tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
console.log(padre.nombreCompleto());
let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre.nombreCompleto());

padre.nombre = "Carlos";
console.log(padre);
console.log(madre);