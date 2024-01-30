
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
//Agregando dinamicamente una nueva propiedad
persona.tel = "5544661172";
console.log(persona);

//Eliminando una propiedad
delete persona.tel;
console.log(persona);