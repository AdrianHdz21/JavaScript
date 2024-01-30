
let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
}
persona.tel = "5544661172";
console.log(persona);

delete persona.tel;
console.log(persona);

//Formas de impresion 

//Concatenar cada valor de  cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//for in 
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Object.values
let personaArray = Object.values(persona);
console.log(personaArray);

//Cadena Json
let personaString = JSON.stringify(persona);
console.log(personaString);