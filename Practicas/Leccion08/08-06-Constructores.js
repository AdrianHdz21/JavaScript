
//Funcion constructor de objetos tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
console.log(padre);
let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre);

padre.nombre = "Carlos";
console.log(padre);
console.log(madre);