//Tipo primitivo no tiene acceso a metodos
//let x = 10;
//console.log(x.length);
//-------

//Creacion de objeto simplificada
let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);

//----------------------------------------
//Creacion objeto mediante otra forma
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = "5544337711";

console.log(persona2.tel);